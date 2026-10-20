"""ChromaDB persistent vector store (native API, cosine similarity)."""
from __future__ import annotations

import logging
from dataclasses import dataclass
from functools import lru_cache

import chromadb
from chromadb.config import Settings as ChromaSettings

from config import get_settings
from errors import VectorStoreError
from services.pdf_service import Chunk

logger = logging.getLogger(__name__)
_BATCH = 500


@dataclass
class RetrievedChunk:
    id: str
    text: str
    document_id: str
    filename: str
    page: int
    chunk_index: int
    distance: float  # cosine distance (0 = identical)
    score: float  # 1 - distance (higher = more similar)


class VectorStore:
    def __init__(self, path: str, collection_name: str):
        try:
            self._client = chromadb.PersistentClient(
                path=path, settings=ChromaSettings(anonymized_telemetry=False)
            )
            self._col = self._client.get_or_create_collection(
                name=collection_name, metadata={"hnsw:space": "cosine"}
            )
        except Exception as exc:
            raise VectorStoreError(f"Could not open ChromaDB at '{path}': {exc}") from exc

    # ---------- writes ----------
    def add_document(
        self,
        document_id: str,
        filename: str,
        file_hash: str,
        page_count: int,
        chunks: list[Chunk],
        embeddings: list[list[float]],
        size_bytes: int = 0,
        uploaded_at: str = "",
    ) -> int:
        """Upsert all chunks of one document. Chunk ids are deterministic -> retries are idempotent."""
        if len(chunks) != len(embeddings):
            raise VectorStoreError("Chunk/embedding count mismatch.")
        try:
            for i in range(0, len(chunks), _BATCH):
                batch = chunks[i : i + _BATCH]
                self._col.upsert(
                    ids=[f"{document_id}:{c.index}" for c in batch],
                    documents=[c.text for c in batch],
                    embeddings=embeddings[i : i + _BATCH],
                    metadatas=[
                        {
                            "document_id": document_id,
                            "filename": filename,
                            "page": c.page,
                            "chunk_index": c.index,
                            "file_hash": file_hash,
                            "page_count": page_count,
                            "total_chunks": len(chunks),
                            "size_bytes": size_bytes,
                            "uploaded_at": uploaded_at,
                        }
                        for c in batch
                    ],
                )
        except Exception as exc:
            raise VectorStoreError(f"Failed to write to ChromaDB: {exc}") from exc
        return len(chunks)

    def delete_document(self, document_id: str) -> int:
        try:
            n = self.count_document(document_id)
            self._col.delete(where={"document_id": document_id})
            return n
        except Exception as exc:
            raise VectorStoreError(f"Failed to delete document: {exc}") from exc

    # ---------- reads ----------
    def count(self) -> int:
        try:
            return self._col.count()
        except Exception as exc:
            raise VectorStoreError(f"ChromaDB error: {exc}") from exc

    def count_document(self, document_id: str) -> int:
        try:
            return len(self._col.get(where={"document_id": document_id}, include=[])["ids"])
        except Exception as exc:
            raise VectorStoreError(f"ChromaDB error: {exc}") from exc

    def document_exists(self, document_id: str) -> bool:
        return self.count_document(document_id) > 0

    def find_by_hash(self, file_hash: str) -> dict | None:
        """Return metadata of a fully-indexed document with identical content, if any."""
        try:
            res = self._col.get(where={"file_hash": file_hash}, limit=1, include=["metadatas"])
        except Exception as exc:
            raise VectorStoreError(f"ChromaDB error: {exc}") from exc
        if not res["ids"]:
            return None
        meta = res["metadatas"][0]
        if self.count_document(meta["document_id"]) != meta["total_chunks"]:
            # an earlier upload died half-way: clear the partial data so it is re-indexed
            logger.warning("Removing partial index for %s", meta["document_id"])
            self.delete_document(meta["document_id"])
            return None
        return dict(meta)

    def list_documents(self) -> list[dict]:
        try:
            metas = self._col.get(include=["metadatas"])["metadatas"]
        except Exception as exc:
            raise VectorStoreError(f"ChromaDB error: {exc}") from exc
        docs: dict[str, dict] = {}
        for m in metas:
            d = docs.setdefault(
                m["document_id"],
                {
                    "document_id": m["document_id"],
                    "filename": m["filename"],
                    "page_count": m["page_count"],
                    "chunks": 0,
                    "size_bytes": m.get("size_bytes", 0),
                    "uploaded_at": m.get("uploaded_at", ""),
                    "file_type": "application/pdf",
                    "status": "PROCESSED",
                },
            )
            d["chunks"] += 1
        return sorted(docs.values(), key=lambda d: d["filename"])

    def query(
        self, embedding: list[float], top_k: int, document_id: str | None = None
    ) -> list[RetrievedChunk]:
        try:
            total = self._col.count()
            if total == 0:
                return []
            res = self._col.query(
                query_embeddings=[embedding],
                n_results=min(top_k, total),
                where={"document_id": document_id} if document_id else None,
                include=["documents", "metadatas", "distances"],
            )
        except Exception as exc:
            raise VectorStoreError(f"ChromaDB query failed: {exc}") from exc

        out: list[RetrievedChunk] = []
        for cid, text, meta, dist in zip(
            res["ids"][0], res["documents"][0], res["metadatas"][0], res["distances"][0]
        ):
            out.append(
                RetrievedChunk(
                    id=cid,
                    text=text,
                    document_id=meta["document_id"],
                    filename=meta["filename"],
                    page=int(meta["page"]),
                    chunk_index=int(meta["chunk_index"]),
                    distance=round(float(dist), 4),
                    score=round(1.0 - float(dist), 4),
                )
            )
        return out


@lru_cache
def get_vector_store() -> VectorStore:
    s = get_settings()
    s.chroma_path.mkdir(parents=True, exist_ok=True)
    return VectorStore(str(s.chroma_path), s.chroma_collection)

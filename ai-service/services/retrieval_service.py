"""
Retrieval layer  <-- THIS IS THE INTERFACE YOUR LANGCHAIN PIPELINE SHOULD CALL.

    from services.retrieval_service import retrieve, format_context

    chunks  = retrieve("What is the leave policy?", top_k=5, document_id=None)
    context = format_context(chunks)     # ready-to-paste prompt context with [file, p.N] tags

Each RetrievedChunk has: text, filename, page, document_id, chunk_index, score, distance.
"""
from __future__ import annotations

from config import get_settings
from errors import DocumentNotFoundError
from services import embedding_service
from services.vector_store import RetrievedChunk, get_vector_store


def retrieve(
    question: str, top_k: int | None = None, document_id: str | None = None
) -> list[RetrievedChunk]:
    """Embed the question and return the top_k most similar chunks (best first).

    Returns [] when nothing is indexed yet. Raises DocumentNotFoundError if a
    document_id is given that does not exist.
    """
    s = get_settings()
    top_k = top_k or s.default_top_k
    store = get_vector_store()

    if document_id and not store.document_exists(document_id):
        raise DocumentNotFoundError(f"No document with id '{document_id}' is indexed.")
    if store.count() == 0:
        return []

    query_embedding = embedding_service.embed_query(question)
    return store.query(query_embedding, top_k=top_k, document_id=document_id)


def format_context(chunks: list[RetrievedChunk]) -> str:
    """Join chunks into one context string, each tagged with its source for citations."""
    return "\n\n".join(f"[{c.filename}, p.{c.page}]\n{c.text}" for c in chunks)

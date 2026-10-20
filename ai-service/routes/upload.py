
import hashlib
import logging
import uuid
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, File, Response, UploadFile

from config import get_settings
from errors import DocumentNotFoundError, FileTooLargeError, InvalidFileError
from schemas.upload import DeleteResponse, DocumentInfo, UploadResponse
from services import embedding_service
from services.pdf_service import chunk_pages, extract_pages
from services.vector_store import get_vector_store

logger = logging.getLogger(__name__)
router = APIRouter(tags=["documents"])

_PDF_MIME = {
    "application/pdf",
    "application/x-pdf",
    "application/octet-stream",
    "",
    None,
}


@router.post(
    "/documents/upload",
    response_model=UploadResponse,
    status_code=201,
    summary="Upload and index a PDF",
)
def upload_pdf(response: Response, file: UploadFile = File(...)):
    s = get_settings()
    filename = Path(file.filename or "").name

    if not filename.lower().endswith(".pdf") or file.content_type not in _PDF_MIME:
        raise InvalidFileError("Only PDF files are accepted (.pdf).")

    data = file.file.read(s.max_upload_bytes + 1)

    if len(data) > s.max_upload_bytes:
        raise FileTooLargeError(
            f"File exceeds the {s.max_upload_bytes // (1024 * 1024)} MB limit."
        )
    if not data:
        raise InvalidFileError("The uploaded file is empty.")
    if b"%PDF-" not in data[:1024]:
        raise InvalidFileError("The file is not a valid PDF.")

    store = get_vector_store()
    file_hash = hashlib.sha256(data).hexdigest()
    uploaded_at = datetime.now(timezone.utc).isoformat()

    existing = store.find_by_hash(file_hash)
    if existing:
        response.status_code = 200
        return UploadResponse(
            id=existing["document_id"],
            fileName=existing["filename"],
            sizeBytes=len(data),
            pageCount=existing["page_count"],
            uploadedAt=existing.get("uploaded_at") or uploaded_at,
            chunksIndexed=existing["total_chunks"],
            alreadyIndexed=True,
        )

    parsed = extract_pages(data)
    chunks = chunk_pages(parsed.pages, s.chunk_size, s.chunk_overlap)
    embeddings = embedding_service.embed_texts([c.text for c in chunks])

    document_id = uuid.uuid4().hex
    saved: Path | None = None

    try:
        if s.keep_uploads:
            s.upload_dir.mkdir(parents=True, exist_ok=True)
            saved = s.upload_dir / f"{document_id}.pdf"
            saved.write_bytes(data)

        n = store.add_document(
            document_id,
            filename,
            file_hash,
            parsed.page_count,
            chunks,
            embeddings,
            size_bytes=len(data),
            uploaded_at=uploaded_at,
        )
    except Exception:
        store.delete_document(document_id)
        if saved:
            saved.unlink(missing_ok=True)
        raise

    logger.info(
        "Indexed %s as %s (%d pages, %d chunks)",
        filename,
        document_id,
        parsed.page_count,
        n,
    )

    return UploadResponse(
        id=document_id,
        fileName=filename,
        sizeBytes=len(data),
        pageCount=parsed.page_count,
        uploadedAt=uploaded_at,
        chunksIndexed=n,
    )


@router.get(
    "/documents",
    response_model=list[DocumentInfo],
    summary="List indexed documents",
)
def list_documents():
    return [
        DocumentInfo(
            id=d["document_id"],
            fileName=d["filename"],
            sizeBytes=d.get("size_bytes", 0),
            pageCount=d["page_count"],
            uploadedAt=d.get("uploaded_at") or None,
            chunksIndexed=d["chunks"],
        )
        for d in get_vector_store().list_documents()
    ]


@router.delete(
    "/documents/{document_id}",
    response_model=DeleteResponse,
    summary="Delete an indexed document",
)
def delete_document(document_id: str):
    store = get_vector_store()
    deleted = store.delete_document(document_id)

    if deleted == 0:
        raise DocumentNotFoundError(
            f"No document with id '{document_id}' is indexed."
        )

    (get_settings().upload_dir / f"{document_id}.pdf").unlink(missing_ok=True)

    return DeleteResponse(
        id=document_id,
        chunksDeleted=deleted,
    )

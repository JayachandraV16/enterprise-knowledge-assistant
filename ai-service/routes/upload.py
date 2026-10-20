import hashlib
import logging
import uuid
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, File, Response, UploadFile

from config import get_settings
from errors import (
    DocumentNotFoundError,
    FileTooLargeError,
    InvalidFileError,
)
from schemas.upload import DeleteResponse, DocumentInfo, UploadResponse
from services import embedding_service
from services.document_service import extract_document
from services.pdf_service import chunk_pages
from services.vector_store import get_vector_store

logger = logging.getLogger(__name__)
router = APIRouter(tags=["documents"])

SUPPORTED_MIME_TYPES = {
    ".pdf": {
        "application/pdf",
        "application/x-pdf",
        "application/octet-stream",
        "",
        None,
    },
    ".docx": {
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/octet-stream",
        "",
        None,
    },
    ".xlsx": {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/octet-stream",
        "",
        None,
    },
    ".csv": {
        "text/csv",
        "application/csv",
        "application/vnd.ms-excel",
        "application/octet-stream",
        "",
        None,
    },
}


@router.post(
    "/documents/upload",
    response_model=UploadResponse,
    status_code=201,
    summary="Upload and index a supported document",
)
def upload_document(response: Response, file: UploadFile = File(...)):
    s = get_settings()
    filename = Path(file.filename or "").name
    extension = Path(filename).suffix.lower()

    if extension not in SUPPORTED_MIME_TYPES:
        raise InvalidFileError(
            "Unsupported file format. Upload PDF, DOCX, XLSX, or CSV."
        )

    if file.content_type not in SUPPORTED_MIME_TYPES[extension]:
        raise InvalidFileError(
            f"Invalid content type for {extension} file."
        )

    data = file.file.read(s.max_upload_bytes + 1)

    if len(data) > s.max_upload_bytes:
        raise FileTooLargeError(
            f"File exceeds the {s.max_upload_bytes // (1024 * 1024)} MB limit."
        )

    if not data:
        raise InvalidFileError("The uploaded file is empty.")

    # Basic PDF signature validation.
    if extension == ".pdf" and b"%PDF-" not in data[:1024]:
        raise InvalidFileError("The file is not a valid PDF.")

    store = get_vector_store()
    file_hash = hashlib.sha256(data).hexdigest()
    uploaded_at = datetime.now(timezone.utc).isoformat()

    # Reuse the existing duplicate detection.
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

    # Extract text using the appropriate document parser.
    try:
        section_count, pages = extract_document(data, filename)
        chunks = chunk_pages(
            pages,
            s.chunk_size,
            s.chunk_overlap,
        )
    except Exception as exc:
        logger.warning("Document extraction failed for %s: %s", filename, exc)
        raise InvalidFileError(str(exc)) from exc

    if not chunks:
        raise InvalidFileError("No extractable text found in the document.")

    embeddings = embedding_service.embed_texts(
        [chunk.text for chunk in chunks]
    )

    document_id = uuid.uuid4().hex
    saved: Path | None = None

    try:
        if s.keep_uploads:
            s.upload_dir.mkdir(parents=True, exist_ok=True)
            saved = s.upload_dir / f"{document_id}{extension}"
            saved.write_bytes(data)

        n = store.add_document(
            document_id,
            filename,
            file_hash,
            section_count,
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
        "Indexed %s as %s (%d sections, %d chunks)",
        filename,
        document_id,
        section_count,
        n,
    )

    return UploadResponse(
        id=document_id,
        fileName=filename,
        sizeBytes=len(data),
        pageCount=section_count,
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

    # Support deletion of uploads saved in any supported format.
    upload_dir = get_settings().upload_dir

    for extension in SUPPORTED_MIME_TYPES:
        (upload_dir / f"{document_id}{extension}").unlink(missing_ok=True)

    return DeleteResponse(
        id=document_id,
        chunksDeleted=deleted,
    )
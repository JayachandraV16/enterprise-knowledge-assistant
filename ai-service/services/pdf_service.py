"""PDF text extraction (pypdf) and page-aware chunking."""
from __future__ import annotations

import io
import logging
import re
from dataclasses import dataclass

from pypdf import PdfReader

from errors import EmptyPdfError, PdfExtractionError

logger = logging.getLogger(__name__)


@dataclass
class PageText:
    page: int  # 1-based
    text: str


@dataclass
class ParsedPdf:
    page_count: int
    pages: list[PageText]  # only pages that contain extractable text


@dataclass
class Chunk:
    index: int  # global index within the document
    page: int  # 1-based page the chunk comes from
    text: str


def extract_pages(data: bytes) -> ParsedPdf:
    """Extract text per page. Raises PdfExtractionError / EmptyPdfError."""
    try:
        reader = PdfReader(io.BytesIO(data))
        if reader.is_encrypted and not reader.decrypt(""):
            raise PdfExtractionError("The PDF is password-protected and cannot be read.")
        page_count = len(reader.pages)
    except PdfExtractionError:
        raise
    except Exception as exc:  # corrupt / not really a PDF
        logger.warning("Could not open PDF: %s", exc)
        raise PdfExtractionError("The PDF is corrupt or unreadable.") from exc

    if page_count == 0:
        raise EmptyPdfError("The PDF has no pages.")

    pages: list[PageText] = []
    failures = 0
    for number, page in enumerate(reader.pages, start=1):
        try:
            text = _normalize(page.extract_text() or "")
        except Exception as exc:
            failures += 1
            logger.warning("Text extraction failed on page %d: %s", number, exc)
            continue
        if text:
            pages.append(PageText(page=number, text=text))

    if failures == page_count:
        raise PdfExtractionError("Text extraction failed on every page of the PDF.")
    if not pages:
        raise EmptyPdfError(
            "No extractable text found. The PDF may be scanned images (OCR is not supported)."
        )
    return ParsedPdf(page_count=page_count, pages=pages)


def _normalize(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def split_text(text: str, chunk_size: int, overlap: int) -> list[str]:
    """Sliding-window split that prefers sentence/word boundaries."""
    if chunk_size <= overlap:
        raise ValueError("chunk_size must be greater than overlap")
    text = text.strip()
    if len(text) <= chunk_size:
        return [text] if text else []

    # never break earlier than this offset, so each window always advances
    min_break = max(chunk_size // 2, overlap + 1)
    chunks: list[str] = []
    start = 0
    while start < len(text):
        end = min(start + chunk_size, len(text))
        if end < len(text):
            window = text[start:end]
            cut = max(window.rfind(". "), window.rfind("? "), window.rfind("! "))
            cut = cut + 1 if cut >= min_break else -1
            if cut == -1:
                cut = window.rfind(" ")
                cut = cut if cut >= min_break else -1
            if cut != -1:
                end = start + cut
        piece = text[start:end].strip()
        if piece:
            chunks.append(piece)
        if end >= len(text):
            break
        start = end - overlap
    return chunks


def chunk_pages(pages: list[PageText], chunk_size: int, overlap: int) -> list[Chunk]:
    """Chunk each page separately so every chunk keeps an exact page number."""
    chunks: list[Chunk] = []
    for page in pages:
        for piece in split_text(page.text, chunk_size, overlap):
            chunks.append(Chunk(index=len(chunks), page=page.page, text=piece))
    return chunks

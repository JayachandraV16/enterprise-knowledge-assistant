"""Central configuration, loaded from environment variables / .env."""
from __future__ import annotations

import os
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent


_DEFAULT_ORIGINS = "http://localhost:8443,http://localhost:5173,http://localhost:3000,http://localhost:8080"


def _bool(name: str, default: bool) -> bool:
    return os.getenv(name, str(default)).strip().lower() in {"1", "true", "yes", "on"}


def _path(name: str, default: str) -> Path:
    p = Path(os.getenv(name, default)).expanduser()
    return p if p.is_absolute() else (BASE_DIR / p).resolve()


@dataclass(frozen=True)
class Settings:
    host: str
    port: int
    allowed_origins: list[str]
    chroma_path: Path
    chroma_collection: str
    upload_dir: Path
    keep_uploads: bool
    embedding_model: str
    preload_model: bool
    chunk_size: int
    chunk_overlap: int
    max_upload_bytes: int
    default_top_k: int
    max_top_k: int


@lru_cache
def get_settings() -> Settings:
    load_dotenv(BASE_DIR / ".env")  # real environment variables take precedence

    chunk_size = int(os.getenv("CHUNK_SIZE", "1000"))
    chunk_overlap = int(os.getenv("CHUNK_OVERLAP", "200"))
    if chunk_size < 100:
        raise ValueError("CHUNK_SIZE must be >= 100")
    if not 0 <= chunk_overlap < chunk_size:
        raise ValueError("CHUNK_OVERLAP must be >= 0 and smaller than CHUNK_SIZE")

    raw_origins = os.getenv("ALLOWED_ORIGINS", _DEFAULT_ORIGINS)
    origins = [o.strip() for o in raw_origins.split(",") if o.strip()]

    return Settings(
        host=os.getenv("HOST", "0.0.0.0"),
        port=int(os.getenv("PORT", "8000")),
        allowed_origins=origins,
        chroma_path=_path("CHROMA_PATH", "./chroma_db"),
        chroma_collection=os.getenv("CHROMA_COLLECTION", "enterprise_docs"),
        upload_dir=_path("UPLOAD_DIR", "./uploads"),
        keep_uploads=_bool("KEEP_UPLOADS", True),
        embedding_model=os.getenv("EMBEDDING_MODEL", "sentence-transformers/all-MiniLM-L6-v2"),
        preload_model=_bool("PRELOAD_MODEL", True),
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        max_upload_bytes=int(float(os.getenv("MAX_UPLOAD_MB", "25")) * 1024 * 1024),
        default_top_k=int(os.getenv("DEFAULT_TOP_K", "5")),
        max_top_k=int(os.getenv("MAX_TOP_K", "20")),
    )

"""Embeddings via native sentence-transformers. The model is loaded once, lazily."""
from __future__ import annotations

import logging
import threading

from config import get_settings
from errors import EmbeddingError

logger = logging.getLogger(__name__)

_model = None
_lock = threading.Lock()


def get_model():
    """Return the shared SentenceTransformer, loading it on first use."""
    global _model
    if _model is None:
        with _lock:
            if _model is None:
                from sentence_transformers import SentenceTransformer  # heavy import, keep lazy

                name = get_settings().embedding_model
                logger.info("Loading embedding model: %s", name)
                try:
                    _model = SentenceTransformer(name)
                except Exception as exc:
                    raise EmbeddingError(
                        f"Could not load embedding model '{name}': {exc}"
                    ) from exc
    return _model


def is_model_loaded() -> bool:
    return _model is not None


def reset_model() -> None:
    """Drop the cached model (used by tests)."""
    global _model
    with _lock:
        _model = None


def embed_texts(texts: list[str]) -> list[list[float]]:
    """Embed documents and queries with the SAME model; vectors are L2-normalised."""
    if not texts:
        return []
    model = get_model()
    try:
        vectors = model.encode(
            texts, batch_size=32, normalize_embeddings=True, show_progress_bar=False
        )
    except Exception as exc:
        raise EmbeddingError(f"Embedding generation failed: {exc}") from exc
    return [v.tolist() for v in vectors]


def embed_query(text: str) -> list[float]:
    return embed_texts([text])[0]

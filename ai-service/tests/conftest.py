"""
Test fixtures.

The tests run the REAL pipeline (pypdf -> chunking -> sentence-transformers -> ChromaDB).
To stay offline and fast, EMBEDDING_MODEL points at a tiny SentenceTransformer built locally
(random word vectors + mean pooling). It goes through the same SentenceTransformer / encode()
code path as all-MiniLM-L6-v2, but it is NOT semantically meaningful: it only ranks chunks by
word overlap. Use the manual procedure in README.md to check quality with the real model.
"""
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from tests.make_sample_pdf import make_pdf  # noqa: E402
from tests.make_tiny_model import build_tiny_model  # noqa: E402

@pytest.fixture(scope="session")
def tiny_model_dir(tmp_path_factory):
    return build_tiny_model(tmp_path_factory.mktemp("tiny-model") / "model")


@pytest.fixture
def sample_pdf(tmp_path):
    return make_pdf(tmp_path / "sample.pdf")


@pytest.fixture
def client(tmp_path, tiny_model_dir, monkeypatch):
    monkeypatch.setenv("CHROMA_PATH", str(tmp_path / "chroma"))
    monkeypatch.setenv("UPLOAD_DIR", str(tmp_path / "uploads"))
    monkeypatch.setenv("EMBEDDING_MODEL", tiny_model_dir)
    monkeypatch.setenv("PRELOAD_MODEL", "false")
    monkeypatch.setenv("CHUNK_SIZE", "400")
    monkeypatch.setenv("CHUNK_OVERLAP", "80")

    from config import get_settings
    from services import embedding_service
    from services.vector_store import get_vector_store

    def _reset():
        get_settings.cache_clear()
        get_vector_store.cache_clear()
        embedding_service.reset_model()

    _reset()
    from fastapi.testclient import TestClient

    from main import create_app

    with TestClient(create_app()) as c:
        yield c
    _reset()

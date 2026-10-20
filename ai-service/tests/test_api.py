import io

from reportlab.pdfgen import canvas

from tests.make_sample_pdf import make_pdf


def _upload(client, path, name=None, mime="application/pdf"):
    with open(path, "rb") as f:
        return client.post("/upload", files={"file": (name or path.name, f, mime)})


def _blank_pdf() -> bytes:
    buf = io.BytesIO()
    c = canvas.Canvas(buf)
    c.showPage()
    c.save()
    return buf.getvalue()


def test_health(client):
    r = client.get("/health")
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "ok" and body["indexed_chunks"] == 0


def test_upload_then_retrieve(client, sample_pdf):
    r = _upload(client, sample_pdf)
    assert r.status_code == 201
    doc = r.json()
    assert doc["filename"] == "sample.pdf"
    assert doc["page_count"] == 3 and doc["chunks_indexed"] >= 3
    assert doc["already_indexed"] is False and doc["document_id"]

    r = client.post("/chat", json={"question": "How many days of annual leave do I get?", "top_k": 3})
    assert r.status_code == 200
    body = r.json()
    assert body["mode"] == "retrieval_only" and body["answer"] is None
    assert body["results_count"] == 3
    top = body["chunks"][0]
    assert top["filename"] == "sample.pdf" and top["page"] == 1
    assert "annual leave" in top["text"].lower()
    assert body["chunks"][0]["score"] >= body["chunks"][1]["score"]
    assert "[sample.pdf, p.1]" in body["context"]
    assert body["sources"][0]["page"] == 1

    r = client.post("/chat", json={"question": "multi-factor authentication authenticator apps"})
    assert r.json()["chunks"][0]["page"] == 2


def test_duplicate_upload_is_not_reindexed(client, sample_pdf):
    first = _upload(client, sample_pdf).json()
    second = _upload(client, sample_pdf)
    assert second.status_code == 200
    assert second.json()["document_id"] == first["document_id"]
    assert second.json()["already_indexed"] is True
    assert client.get("/health").json()["indexed_chunks"] == first["chunks_indexed"]


def test_different_uploads_get_unique_ids_and_filter_works(client, sample_pdf, tmp_path):
    other = make_pdf(tmp_path / "other.pdf", ["Parking rules. Visitors must register at the front gate."])
    a = _upload(client, sample_pdf).json()
    b = _upload(client, other).json()
    assert a["document_id"] != b["document_id"]

    r = client.post("/chat", json={"question": "annual leave", "document_id": b["document_id"], "top_k": 5})
    chunks = r.json()["chunks"]
    assert chunks and all(c["document_id"] == b["document_id"] for c in chunks)
    assert len(client.get("/documents").json()) == 2


def test_delete_document(client, sample_pdf):
    doc = _upload(client, sample_pdf).json()
    r = client.delete(f"/documents/{doc['document_id']}")
    assert r.status_code == 200 and r.json()["chunks_deleted"] == doc["chunks_indexed"]
    assert client.delete(f"/documents/{doc['document_id']}").status_code == 404
    assert client.get("/health").json()["indexed_chunks"] == 0


def test_rejects_non_pdf(client):
    r = client.post("/upload", files={"file": ("notes.txt", b"hello", "text/plain")})
    assert r.status_code == 400 and r.json()["code"] == "invalid_file"
    r = client.post("/upload", files={"file": ("fake.pdf", b"just text", "application/pdf")})
    assert r.status_code == 400
    r = client.post("/upload", files={"file": ("empty.pdf", b"", "application/pdf")})
    assert r.status_code == 400


def test_blank_and_corrupt_pdfs(client):
    r = client.post("/upload", files={"file": ("blank.pdf", _blank_pdf(), "application/pdf")})
    assert r.status_code == 422 and r.json()["code"] == "pdf_empty"
    r = client.post("/upload", files={"file": ("bad.pdf", b"%PDF-1.4 garbage garbage", "application/pdf")})
    assert r.status_code == 422 and r.json()["code"] == "pdf_unreadable"


def test_chat_validation(client):
    assert client.post("/chat", json={"question": "   "}).status_code == 422
    assert client.post("/chat", json={}).status_code == 422
    assert client.post("/chat", json={"question": "hi", "top_k": 0}).status_code == 422
    assert client.post("/chat", json={"question": "hi", "top_k": 999}).status_code == 422
    body = client.post("/chat", json={"question": ""}).json()
    assert body["code"] == "validation_error" and "question" in body["message"]


def test_chat_empty_collection(client):
    r = client.post("/chat", json={"question": "anything?"})
    assert r.status_code == 200
    body = r.json()
    assert body["results_count"] == 0 and body["chunks"] == [] and "No documents" in body["message"]


def test_chat_unknown_document_id(client, sample_pdf):
    _upload(client, sample_pdf)
    r = client.post("/chat", json={"question": "leave", "document_id": "nope"})
    assert r.status_code == 404 and r.json()["code"] == "document_not_found"


def test_top_k_larger_than_index(client, sample_pdf):
    doc = _upload(client, sample_pdf).json()
    r = client.post("/chat", json={"question": "policy", "top_k": 20})
    assert r.status_code == 200 and r.json()["results_count"] == doc["chunks_indexed"]

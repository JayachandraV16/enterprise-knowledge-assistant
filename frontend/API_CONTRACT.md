# Frontend API Contract (FastAPI AI Service Architecture)

This document defines the API contract between the Frontend application and the backend service. The backend architecture is powered by the **FastAPI AI Service** (`ai-service` running on `http://localhost:8000`), utilizing ChromaDB for vector storage and sentence-transformers for embedding generation.

---

## 1. Architecture Overview

* **Host**: `http://localhost:8000` (configured via `VITE_API_URL` in `frontend/.env`).
* **Active Backend**: FastAPI (`ai-service`).
* **Document Ingestion**: Synchronous chunking, embedding, and indexing into ChromaDB vector store.
* **Error Envelope**: Errors conform to `{ "message": "...", "code": "..." }` with standard HTTP status codes.
* **Authentication**: FastAPI document and chat endpoints are currently unauthenticated. User authentication, authorization roles (`ADMIN`, `EMPLOYEE`), and session persistence are managed by the frontend `AuthContext` / mock adapter layer until an auth microservice or gateway is integrated.

---

## 2. Endpoint Matrix

| Method | Endpoint | Status in FastAPI | Request Payload | Response Payload | HTTP Status |
|---|---|---|---|---|---|
| `GET` | `/health` | **Implemented** | None | `{ status, embedding_model, embedding_model_loaded, indexed_chunks }` | 200 |
| `POST` | `/api/documents/upload` | **Implemented** | Multipart `file` (`.pdf`) | `UploadResponse` (status immediately `PROCESSED`) | 201 (new) / 200 (duplicate) |
| `GET` | `/api/documents` | **Implemented** | None | `list[DocumentInfo]` | 200 |
| `DELETE` | `/api/documents/{id}` | **Implemented** | None | `{ id, chunksDeleted }` | 200 |
| `POST` | `/api/chat` | **Implemented** | `{ question, document_id?, top_k? }` | `{ conversationId, message: { id, role, content, sources, timestamp } }` | 200 |
| `GET` | `/api/chat/history` | *Client / Mock Layer* | None | `list[Conversation]` (separated by role) | 200 |
| `DELETE` | `/api/chat/history/{id}` | *Client / Mock Layer* | None | None | 200 / 204 |
| `POST` | `/api/auth/login` | *Client / Mock Layer* | `{ email, password }` | `{ token, user: { id, name, email, role, active } }` | 200 |
| `GET` | `/api/auth/me` | *Client / Mock Layer* | None | `User` | 200 |
| `PUT` | `/api/auth/change-password` | *Client / Mock Layer* | `{ currentPassword, newPassword }` | None | 200 / 204 |
| `GET` | `/api/users` | *Client / Mock Layer* | None | `list[User]` | 200 |
| `POST` | `/api/users` | *Client / Mock Layer* | `{ name, email, password, role }` | `User` | 200 |
| `PUT` | `/api/users/{id}` | *Client / Mock Layer* | `{ name?, email?, role? }` | `User` | 200 |
| `PATCH` | `/api/users/{id}/status` | *Client / Mock Layer* | `{ active: boolean }` | None | 200 / 204 |
| `DELETE` | `/api/users/{id}` | *Client / Mock Layer* | None | None | 200 / 204 |

---

## 3. Detailed Endpoint Specifications (FastAPI)

### 3.1 Health Check
* **`GET /health`**
* **Response** (`200 OK`):
  ```json
  {
    "status": "ok",
    "embedding_model": "all-MiniLM-L6-v2",
    "embedding_model_loaded": true,
    "indexed_chunks": 42
  }
  ```

---

### 3.2 Document Upload & Indexing
* **`POST /api/documents/upload`**
* **Content-Type**: `multipart/form-data`
* **Form Field**: `file` (Binary PDF file)
* **Validation**:
  * Extension must be `.pdf`.
  * Magic bytes must start with `%PDF-`.
  * Maximum size: 50 MB (`MAX_UPLOAD_BYTES`).
* **Behavior**:
  * Extracts text and chunks pages synchronously.
  * Generates vector embeddings using sentence-transformers.
  * Adds embeddings and metadata to persistent ChromaDB.
  * If file hash is already indexed, returns HTTP 200 with `alreadyIndexed: true`.
* **Response** (`201 Created` / `200 OK`):
  ```json
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "fileName": "Security_Policy.pdf",
    "fileType": "application/pdf",
    "sizeBytes": 2400000,
    "pageCount": 24,
    "uploadedAt": "2026-10-20T12:00:00.000Z",
    "status": "PROCESSED",
    "chunksIndexed": 36,
    "alreadyIndexed": false
  }
  ```

---

### 3.3 List Indexed Documents
* **`GET /api/documents`**
* **Response** (`200 OK`):
  ```json
  [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "fileName": "Security_Policy.pdf",
      "fileType": "application/pdf",
      "sizeBytes": 2400000,
      "pageCount": 24,
      "uploadedAt": "2026-10-20T12:00:00.000Z",
      "status": "PROCESSED",
      "chunksIndexed": 36
    }
  ]
  ```

---

### 3.4 Delete Document
* **`DELETE /api/documents/{document_id}`**
* **Response** (`200 OK`):
  ```json
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "chunksDeleted": 36
  }
  ```
* **Error** (`404 Not Found`):
  ```json
  {
    "message": "No document with id '...' is indexed.",
    "code": "document_not_found"
  }
  ```

---

### 3.5 Chat & Semantic Retrieval
* **`POST /api/chat`**
* **Content-Type**: `application/json`
* **Request**:
  ```json
  {
    "question": "What are the rules regarding MFA for remote employees?",
    "document_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "top_k": 5
  }
  ```
  *(Note: `document_id` is optional; omit or pass `null` to search across all documents. `top_k` defaults to 5).*
* **Response** (`200 OK`):
  ```json
  {
    "conversationId": "f784e12c-49a2-4cb6-bbdc-92167d3b0198",
    "message": {
      "id": "a931cbe2-64f3-4e4b-a912-984bbcd50e91",
      "role": "assistant",
      "content": "Multi-factor authentication (MFA) is strictly required for all remote employees accessing internal enterprise networks.",
      "sources": [
        {
          "document_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "filename": "Security_Policy.pdf",
          "page": 12,
          "snippet": "All employees must enable MFA for internal systems using approved authenticator apps.",
          "score": 0.892
        }
      ],
      "timestamp": "2026-10-20T12:00:01.000Z"
    }
  }
  ```

---

## 4. Error Handling Standard

FastAPI handlers map all application errors to a consistent JSON structure:

```json
{
  "message": "Human-readable description of what went wrong",
  "code": "machine_readable_error_code"
}
```

| HTTP Status | Error Code | Description |
|---|---|---|
| `400` | `invalid_file` | Unsupported format (not PDF) or empty payload |
| `404` | `document_not_found` | Target document ID does not exist in ChromaDB |
| `413` | `file_too_large` | Upload exceeds the 50 MB size limit |
| `422` | `validation_error` | Request body validation failure (e.g., blank question) |
| `500` | `internal_error` | Unexpected server exception |
| `503` | `service_unavailable` | Embedding model or vector store failure |

---

## 5. Frontend Normalization Layer (`adapters.ts`)

The frontend includes a dedicated adapter layer ([`adapters.ts`](file:///C:/Sejal/TY/AIML%20Project/enterprise-knowledge-assistant-main/frontend/src/services/adapters.ts)) ensuring resilient compatibility with both FastAPI and legacy Spring structures:

1. **Document Properties**: Normalizes `fileName`, `filename`, or `name`. Maps status string `"PROCESSED"` directly.
2. **Citations / Sources**: Normalizes FastAPI's `filename` property to `documentName` for UI display.
3. **Synchronous Ingestion**: Because FastAPI indexes documents synchronously during upload and immediately returns `status: "PROCESSED"`, frontend polling loops terminate immediately without delay.
4. **Local Fallback**: In standalone demo mode (`VITE_USE_MOCK=true`), document state, role-separated chat histories, and auth sessions are maintained in localStorage for consistent multi-user presentations.

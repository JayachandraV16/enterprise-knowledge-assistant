# Frontend API Contract (draft for backend + AI service review)

All calls go to Spring Boot only. Auth: `Authorization: Bearer <JWT>` on every request except login.
Roles: `ADMIN`, `EMPLOYEE`. Errors: `{ "message": "..." }` with proper HTTP status (401 expired token, 403 wrong role).

| Method | Endpoint | Role | Request | Response |
|---|---|---|---|---|
| POST | /api/auth/login | public | `{email,password}` | `{token, user:{id,name,email,role,active}}` |
| GET | /api/auth/me | any | - | `user` |
| GET | /api/documents | any | - | `[{id,fileName,fileType(PDF/DOCX/CSV),sizeBytes,pageCount?,uploadedAt,status(PROCESSING/PROCESSED/FAILED)}]` |
| POST | /api/documents/upload | ADMIN | multipart `file` | `document` (status PROCESSING) |
| DELETE | /api/documents/{id} | ADMIN | - | 204 |
| POST | /api/chat | any | `{question, conversationId?}` | `{conversationId, message:{id,role:"assistant",content,sources:[{documentName,page?,snippet}],timestamp}}` |
| GET | /api/chat/history | any | - | `[{id,title,tag?,updatedAt,messages:[...]}]` (own chats only) |
| DELETE | /api/chat/history/{id} | any | - | 204 |
| GET | /api/users | ADMIN | - | `[user]` |
| POST | /api/users | ADMIN | `{name,email,password,role}` | `user` |
| PUT | /api/users/{id} | ADMIN | `{name?,email?,role?}` | `user` |
| PATCH | /api/users/{id}/status | ADMIN | `{active}` | 204 |
| DELETE | /api/users/{id} | ADMIN | - | 204 |

Notes: the frontend polls GET /api/documents while any document is PROCESSING.
Chat history is stored in PostgreSQL by the backend (SRS 3.4); the frontend never stores chats.

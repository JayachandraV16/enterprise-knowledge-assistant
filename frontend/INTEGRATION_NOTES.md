# Integration Notes

This document tracks backend, database, and infrastructure requirements or adjustments needed for full system integration.

## Authentication & Users
- **Change Password**: Added proposed endpoint `PUT /api/auth/change-password` accepting `{ currentPassword, newPassword }`. Requires backend to verify the current user's existing password and update it in PostgreSQL with BCrypt hashing.

## Chat & History
- **Chat history**: The SRS table has no conversation id and no sources. Ask backend/database to add a `conversation_id` and a JSON `sources` column; until then history shows plain Q&A.

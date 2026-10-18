# Integration Notes

This document tracks backend, database, and infrastructure requirements or adjustments needed for full system integration.

## Chat & History
- **Chat history**: The SRS table has no conversation id and no sources. Ask backend/database to add a `conversation_id` and a JSON `sources` column; until then history shows plain Q&A.

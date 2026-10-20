from fastapi import APIRouter
from datetime import datetime, timezone
import uuid

from schemas.chat import ChatMessage
from schemas.chat import ChatRequest, ChatResponse, RetrievedChunkOut, SourceRef
from services.answer_service import generate_answer
from services.retrieval_service import format_context, retrieve

router = APIRouter(tags=["chat"])


@router.post(
    "/chat",
    response_model=ChatResponse,
    summary="Retrieve relevant document passages",
)
def chat(req: ChatRequest):
    chunks = retrieve(
        req.question,
        top_k=req.top_k,
        document_id=req.document_id,
    )

    answer = generate_answer(req.question, chunks)

    sources = []
    seen = set()

    for c in chunks:
        key = (c.filename, c.page)
        if key not in seen:
            seen.add(key)
            sources.append(
                SourceRef(
                    document_id=c.document_id,
                    filename=c.filename,
                    page=c.page,
                    snippet=c.text[:200],
                    score=c.score,
                )
            )

    if answer:
        content = answer
    elif chunks:
        content = (
            "Retrieval-only mode: relevant passages found.\n\n"
            + format_context(chunks)
        )
    else:
        content = "No relevant passages found. Please upload a PDF first."

    return ChatResponse(
        conversationId=str(uuid.uuid4()),
        message=ChatMessage(
            id=str(uuid.uuid4()),
            role="assistant",
            content=content,
            sources=sources,
            timestamp=datetime.now(timezone.utc).isoformat(),
        ),
    )
from typing import Literal, Optional

from pydantic import BaseModel, Field, field_validator


class ChatRequest(BaseModel):
    question: str = Field(..., max_length=2000, examples=["What is this document about?"])
    document_id: Optional[str] = Field(None, description="Restrict retrieval to one document")
    top_k: int = Field(5, ge=1, le=20, description="Number of chunks to retrieve")

    @field_validator("question")
    @classmethod
    def question_not_blank(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("question must not be empty")
        return v

    @field_validator("document_id")
    @classmethod
    def blank_document_id_is_none(cls, v: Optional[str]) -> Optional[str]:
        return v.strip() or None if v else None


class RetrievedChunkOut(BaseModel):
    id: str
    text: str
    document_id: str
    filename: str
    page: int
    chunk_index: int
    score: float = Field(..., description="1 - cosine distance; higher is more similar")
    distance: float = Field(..., description="Cosine distance; lower is more similar")


class SourceRef(BaseModel):
    """De-duplicated citation (one per filename + page, best-scoring chunk)."""

    document_id: str
    filename: str
    page: int
    snippet: str
    score: float


class ChatMessage(BaseModel):
    id: str
    role: Literal["assistant"] = "assistant"
    content: str
    sources: list[SourceRef]
    timestamp: str


class ChatResponse(BaseModel):
    conversationId: str
    message: ChatMessage
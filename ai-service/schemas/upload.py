
from typing import Literal, Optional

from pydantic import BaseModel, Field


class UploadResponse(BaseModel):
    id: str
    fileName: str
    fileType: str = "application/pdf"
    sizeBytes: int
    pageCount: int
    uploadedAt: str
    status: Literal["PROCESSED"] = "PROCESSED"
    chunksIndexed: int
    alreadyIndexed: bool = False


class DocumentInfo(BaseModel):
    id: str
    fileName: str
    fileType: str = "application/pdf"
    sizeBytes: int = 0
    pageCount: int
    uploadedAt: Optional[str] = None
    status: Literal["PROCESSED"] = "PROCESSED"
    chunksIndexed: int


class DeleteResponse(BaseModel):
    id: str
    chunksDeleted: int

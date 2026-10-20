"""Application errors. Every error is returned as {"message": ..., "code": ...}."""


class AppError(Exception):
    status_code = 500
    code = "internal_error"

    def __init__(self, message: str):
        super().__init__(message)
        self.message = message


class InvalidFileError(AppError):
    status_code = 400
    code = "invalid_file"


class FileTooLargeError(AppError):
    status_code = 413
    code = "file_too_large"


class PdfExtractionError(AppError):
    status_code = 422
    code = "pdf_unreadable"


class EmptyPdfError(AppError):
    status_code = 422
    code = "pdf_empty"


class DocumentNotFoundError(AppError):
    status_code = 404
    code = "document_not_found"


class EmbeddingError(AppError):
    status_code = 503
    code = "embedding_error"


class VectorStoreError(AppError):
    status_code = 503
    code = "vector_store_error"

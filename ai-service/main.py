"""FastAPI entry point.  Run:  uvicorn main:app --reload --port 8000"""
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from config import get_settings
from errors import AppError
from routes import chat, upload
from services import embedding_service
from services.vector_store import get_vector_store

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")
logger = logging.getLogger("ai-service")


@asynccontextmanager
async def lifespan(app: FastAPI):
    s = get_settings()
    s.upload_dir.mkdir(parents=True, exist_ok=True)
    get_vector_store()  # opens (or creates) the persistent ChromaDB
    if s.preload_model:
        try:
            embedding_service.get_model()  # load once at startup
        except Exception as exc:  # keep the API up; /health will show the model is not loaded
            logger.error("Embedding model preload failed: %s", exc)
    yield


def create_app() -> FastAPI:
    s = get_settings()
    app = FastAPI(
        title="Enterprise Knowledge Assistant - AI Service",
        description="PDF ingestion + semantic retrieval (ChromaDB). LLM answering is not connected yet.",
        version="0.1.0",
        lifespan=lifespan,
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=s.allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.exception_handler(AppError)
    async def app_error_handler(_: Request, exc: AppError):
        return JSONResponse(status_code=exc.status_code, content={"message": exc.message, "code": exc.code})

    @app.exception_handler(RequestValidationError)
    async def validation_handler(_: Request, exc: RequestValidationError):
        first = exc.errors()[0] if exc.errors() else {}
        field = ".".join(str(p) for p in first.get("loc", []) if p != "body")
        msg = str(first.get("msg", "Invalid request")).removeprefix("Value error, ")
        return JSONResponse(
            status_code=422,
            content={"message": f"{field}: {msg}" if field else msg, "code": "validation_error"},
        )

    @app.exception_handler(Exception)
    async def unhandled_handler(_: Request, exc: Exception):
        logger.exception("Unhandled error")
        return JSONResponse(status_code=500, content={"message": "Internal server error", "code": "internal_error"})

    @app.get("/health", tags=["health"])
    def health():
        info = {
            "status": "ok",
            "embedding_model": s.embedding_model,
            "embedding_model_loaded": embedding_service.is_model_loaded(),
        }
        try:
            info["indexed_chunks"] = get_vector_store().count()
        except Exception as exc:
            info["status"] = "degraded"
            info["vector_store_error"] = str(exc)
        return info

    app.include_router(upload.router, prefix="/api")
    app.include_router(chat.router, prefix="/api")
    return app


app = create_app()

if __name__ == "__main__":
    import uvicorn

    cfg = get_settings()
    uvicorn.run("main:app", host=cfg.host, port=cfg.port, reload=False)

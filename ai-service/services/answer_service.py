"""
Answer-generation hook  <-- REPLACE THIS FUNCTION with your LangChain pipeline.

It is called by POST /chat after retrieval. While it returns None, /chat responds in
clearly marked "retrieval_only" mode (answer = null). No LLM is used here.

Example later:
    def generate_answer(question, chunks):
        context = format_context(chunks)
        return my_langchain_chain.invoke({"question": question, "context": context})
"""
from __future__ import annotations

from services.vector_store import RetrievedChunk


def generate_answer(question: str, chunks: list[RetrievedChunk]) -> str | None:
    return None  # intentionally not implemented: no LLM / LangChain yet

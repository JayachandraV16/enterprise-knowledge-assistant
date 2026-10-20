"""Build a tiny offline SentenceTransformer (random word vectors + mean pooling) for tests/demos.

Not semantically meaningful - it only ranks by word overlap. Usage:
    python -m tests.make_tiny_model /tmp/tiny-model
"""
import re
import string
import sys
from pathlib import Path

from tests.make_sample_pdf import PAGES

EXTRA_TEXT = ["Parking rules. Visitors must register at the front gate.", "policy"]


def _words(texts):
    out = set()
    for t in texts:
        for tok in re.split(r"\s+", t.lower()):
            tok = tok.strip(string.punctuation)
            if tok:
                out.add(tok)
    return sorted(out)


def build_tiny_model(path: Path) -> str:
    import torch
    from sentence_transformers import SentenceTransformer

    try:
        from sentence_transformers.sentence_transformer.modules import Pooling, WordEmbeddings
        from sentence_transformers.sentence_transformer.modules.tokenizer import WhitespaceTokenizer
    except ImportError:  # older sentence-transformers
        from sentence_transformers.models import Pooling, WordEmbeddings
        from sentence_transformers.models.tokenizer import WhitespaceTokenizer

    vocab = _words(PAGES + EXTRA_TEXT)
    weights = torch.randn(len(vocab), 64, generator=torch.Generator().manual_seed(7))
    tok = WhitespaceTokenizer(vocab=vocab, stop_words=[], do_lower_case=True)
    we = WordEmbeddings(tokenizer=tok, embedding_weights=weights)
    dim = (we.get_embedding_dimension if hasattr(we, "get_embedding_dimension") else we.get_word_embedding_dimension)()
    SentenceTransformer(modules=[we, Pooling(dim, "mean")]).save(str(path))
    return str(path)


if __name__ == "__main__":
    print(build_tiny_model(Path(sys.argv[1] if len(sys.argv) > 1 else "tiny-model")))

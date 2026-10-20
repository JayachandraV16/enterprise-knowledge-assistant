from services.pdf_service import PageText, chunk_pages, split_text


def test_short_text_is_single_chunk():
    assert split_text("hello world", 100, 20) == ["hello world"]


def test_chunks_respect_size_and_overlap():
    text = " ".join(f"word{i}" for i in range(400))
    chunks = split_text(text, chunk_size=200, overlap=50)
    assert len(chunks) > 3
    assert all(len(c) <= 200 for c in chunks)
    # consecutive chunks share text (overlap) and nothing is lost
    assert chunks[0].split()[-1] in chunks[1]
    assert chunks[0].split()[0] == "word0" and chunks[-1].split()[-1] == "word399"


def test_no_whitespace_text_still_terminates():
    chunks = split_text("x" * 1000, chunk_size=200, overlap=50)
    assert len(chunks) >= 5 and all(len(c) <= 200 for c in chunks)


def test_chunks_keep_page_numbers_and_global_index():
    pages = [PageText(1, "a " * 300), PageText(3, "b " * 300)]
    chunks = chunk_pages(pages, 200, 40)
    assert [c.index for c in chunks] == list(range(len(chunks)))
    assert {c.page for c in chunks} == {1, 3}
    assert all(("a" in c.text) == (c.page == 1) for c in chunks)

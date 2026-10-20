"""Generate a small multi-page PDF used by tests and manual testing."""
import sys
from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

PAGES = [
    "Annual Leave Policy. Full-time employees are entitled to 25 days of annual leave per "
    "calendar year, accruing at 2.08 days per month. Leave must be approved by the line "
    "manager at least two weeks in advance. Unused leave may be carried over for up to five days.",
    "Information Security Policy. All employees must enable multi-factor authentication for "
    "internal systems using approved authenticator apps. SMS based one-time passwords are not "
    "permitted. Passwords must be rotated every ninety days and never shared.",
    "Expense Reimbursement. Original itemized receipts are required for all claims above 25 "
    "pounds. Expenses must be submitted within thirty days of the transaction date and are "
    "reimbursed in the next payroll cycle.",
]


def make_pdf(path: Path, pages: list[str] = PAGES) -> Path:
    c = canvas.Canvas(str(path), pagesize=A4)
    for text in pages:
        y = 800
        words, line = text.split(), ""
        for w in words:
            if len(line) + len(w) > 85:
                c.drawString(50, y, line)
                y, line = y - 16, ""
            line = f"{line} {w}".strip()
        c.drawString(50, y, line)
        c.showPage()
    c.save()
    return path


if __name__ == "__main__":
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "samples/sample_policy.pdf")
    out.parent.mkdir(parents=True, exist_ok=True)
    print("wrote", make_pdf(out))

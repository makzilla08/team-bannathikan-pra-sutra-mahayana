#!/usr/bin/env python3
"""Clean up downloaded chapters - more aggressive cleanup"""

import re
from pathlib import Path

SUTRA_DIR = Path("translations/05_lalitavistara")


def clean_text(text: str) -> str:
    """Remove HTML artifacts and clean text"""
    # Remove everything before "namaḥ sarvabuddhabodhisattvebhyaḥ|"
    match = re.search(r"namamḥ sarvabuddhabodhisattvebhyaḥ\|", text)
    if not match:
        match = re.search(r"namḥ sarvabuddhabodhisattvebhyaḥ\|", text)
    if match:
        text = text[match.start() :]

    # Remove Technical Details section completely
    text = re.sub(
        r"Technical Details.*?Parallel Devanāgarī version.*?ersion\s*",
        "",
        text,
        flags=re.DOTALL,
    )

    # Remove numbers like "1 nidānaparivartaḥ prathamaḥ"
    text = re.sub(r"\d+\s+nidānaparivartaḥ\s+prathamaḥ", "", text)
    text = re.sub(r"\d+\s+", "", text)

    # Remove Roman numerals chapter titles at start
    text = re.sub(r"^Lalitavistaraḥ\s+Chapter\s+\d+:.*?\n", "", text)

    # Clean up extra whitespace
    text = re.sub(r"\s+", " ", text)

    # Restore line breaks for verses
    text = text.replace("| ", "|\n")
    text = text.replace(" ||", "||\n")
    text = text.replace("|", " | ")

    # Clean multiple spaces again
    text = re.sub(r" +", " ", text)

    return text.strip()


def main():
    """Clean all chapter files"""
    for i in range(1, 28):
        chapter_dir = SUTRA_DIR / f"chapter_{i:02d}"
        original_file = chapter_dir / "original.txt"

        if original_file.exists():
            with open(original_file, "r", encoding="utf-8") as f:
                content = f.read()

            # Clean the content
            cleaned = clean_text(content)

            with open(original_file, "w", encoding="utf-8") as f:
                f.write(cleaned)

            print(f"Cleaned chapter {i}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Download Lalitavistara chapters from DSBC"""

import requests
import re
import os
from pathlib import Path

BASE_URL = "https://www.dsbcproject.org"
BOOK_ID = 45
OUTPUT_DIR = Path("translations/05_lalitavistara")

CHAPTERS = [
    (415, "nidānaparivartaḥ prathamaḥ"),
    (416, "samutsāhaparivarto dvitīyaḥ"),
    (417, "kulapariśuddhiparivartastṛtīyaḥ"),
    (418, "dharmālokamukhaparivartaścaturthaḥ"),
    (419, "pracalaparivartaḥ pañcamaḥ"),
    (420, "garbhāvakrāntiparivartaḥ ṣaṣṭhaḥ"),
    (421, "janmaparivartaḥ saptamaḥ"),
    (422, "devakulopanayanaparivarto'ṣṭamaḥ"),
    (423, "ābharaṇaparivarto navamaḥ"),
    (424, "lipiśālāsaṁdarśanaparivarto daśamaḥ"),
    (425, "kṛṣigrāmaparivarta ekādaśaḥ"),
    (426, "śilpasaṁdarśanaparivarto dvādaśaḥ"),
    (427, "saṁcodanāparivartastrayodaśaḥ"),
    (428, "svapnaparivartaścaturdaśaḥ"),
    (429, "abhiniṣkramaṇaparivartaḥ pañcadaśaḥ"),
    (430, "bimbisāropasaṁkramaṇaparivartaḥ ṣoḍaśaḥ"),
    (431, "duṣkaracaryāparivartaḥ saptadaśaḥ"),
    (432, "nairañjanāparivarto'ṣṭādaśaḥ"),
    (433, "bodhimaṇḍagamanaparivarta ekonaviṁśaḥ"),
    (434, "bodhimaṇḍavyūhaparivarto viṁśatitamaḥ"),
    (435, "māragharṣaṇaparivarta ekaviṁśaḥ"),
    (436, "abhisaṁbodhanaparivarto dvāviṁśaḥ"),
    (437, "saṁstavaparivartastrayoviṁśaḥ"),
    (438, "trapuṣabhallikaparivartaścaturviṁśaḥ"),
    (439, "adhyeṣaṇāparivartaḥ pañcaviṁśaḥ"),
    (440, "dharmacacakrapravartanaparivartaḥ ṣaḍviṁśaḥ"),
    (441, "nigamaparivartaḥ saptaviṁśaḥ"),
]


def download_chapter(content_id: int, chapter_title: str, chapter_num: int) -> str:
    """Download a single chapter and extract text"""
    url = f"{BASE_URL}/canon-text/content/{BOOK_ID}/{content_id}"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }

    print(f"Downloading chapter {chapter_num}: {chapter_title[:30]}...")

    try:
        response = requests.get(url, headers=headers, timeout=60)
        response.raise_for_status()

        # Extract text content from HTML
        html = response.text

        # Find the main content area
        # The text appears after the chapter title
        text_match = re.search(
            r'<h2[^>]*>[^<]*</h2>\s*<h2[^>]*>([^<]+)</h2>\s*<h5[^>]*>.*?</h5>\s*<div[^>]*>(.*?)<div class="callout',
            html,
            re.DOTALL,
        )

        if not text_match:
            # Try alternative pattern
            text_match = re.search(
                r'class="inner-title">[^<]*</div>\s*<table.*?</table>\s*(.*?)<div class="callout',
                html,
                re.DOTALL,
            )

        if not text_match:
            # Try simpler pattern - find text between tables
            text_match = re.search(
                r'</table>\s*<div class="row">\s*<div class="medium-12 columns">\s*<table.*?</table>\s*(.*?)<div class="callout',
                html,
                re.DOTALL,
            )

        # Get all text content
        # Remove HTML tags
        text = re.sub(r"<[^>]+>", " ", html)
        text = re.sub(r"\s+", " ", text)
        text = text.strip()

        # Extract relevant part
        start = text.find(chapter_title)
        if start == -1:
            start = 0

        # Find end - look for footer
        end = text.find("The rights of the materials")
        if end == -1:
            end = len(text)

        content = text[start:end].strip()

        return content

    except Exception as e:
        print(f"Error downloading chapter {chapter_num}: {e}")
        return ""


def main():
    """Download all chapters"""
    print(f"Downloading Lalitavistara ({len(CHAPTERS)} chapters)...")

    for i, (content_id, title) in enumerate(CHAPTERS, 1):
        chapter_dir = OUTPUT_DIR / f"chapter_{i:02d}"

        # Download content
        content = download_chapter(content_id, title, i)

        if content:
            # Save to original.txt
            output_file = chapter_dir / "original.txt"
            with open(output_file, "w", encoding="utf-8") as f:
                f.write(f"Lalitavistaraḥ\n")
                f.write(f"Chapter {i}: {title}\n\n")
                f.write(content)
            print(f"  Saved to {output_file}")
        else:
            print(f"  Failed to download chapter {i}")

    print("\nDone!")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
โหลดต้นฉบับสันสกฤตของคัมภีร์สรวาสติวาทจาก DSBC (Digital Sanskrit Buddhist Canon)

DSBC book IDs for Sarvastivada texts:
  - 94: Abhidharmadīpaḥ
  - 95: Abhidharmadīpaṭīkā
  - 96: Abhidharmakoṣakārikā (8 chapters)
  - 97: Jñānaprasthānam śāstram
  - 98: Abhidharmasamuccaya
  - 99: Abhidharmasamuccaya bhāṣya
  - 88: Bhikṣuṇī vinaya
  - 91: Mūlasarvāstivāda-vinayavastu
  - 92: Prātimokṣasūtram
  - 93: Vinaya sūtram
  - 62: Vinayaviniścaya upāliparipṛcchā

Usage:
  python3 scripts/download_sarvastivada_texts.py
"""

import requests
import json
import os
import re
import time
from pathlib import Path

BASE_URL = "https://www.dsbcproject.org"
PROJECT_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = PROJECT_ROOT / "translations" / "sarvastivada"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

TEXTS = {
    96: {"name": "abhidharmakosa", "dir": "abhidharma/abhidharmakosa", "title": "Abhidharmakośakārikā"},
    94: {"name": "abhidharmadipa", "dir": "abhidharma/abhidharmadipa", "title": "Abhidharmadīpaḥ"},
    95: {"name": "abhidharmadipa_tika", "dir": "abhidharma/abhidharmadipa", "title": "Abhidharmadīpaṭīkā"},
    97: {"name": "jnanaprasthana", "dir": "abhidharma/jnanaprasthana", "title": "Jñānaprasthānam śāstram"},
    98: {"name": "abhidharmasamuccaya", "dir": "abhidharma/abhidharmasamuccaya", "title": "Abhidharmasamuccaya"},
    99: {"name": "abhidharmasamuccaya_bhasya", "dir": "abhidharma/abhidharmasamuccaya", "title": "Abhidharmasamuccaya bhāṣya"},
    88: {"name": "bhiksuni_vinaya", "dir": "vinaya/bhiksuni_vinaya", "title": "Bhikṣuṇī vinaya"},
    91: {"name": "mulasarvastivada_vinaya", "dir": "vinaya/mulasarvastivada", "title": "Mūlasarvāstivāda-vinayavastu"},
    92: {"name": "pratimoksa", "dir": "vinaya/pratimoksa", "title": "Prātimokṣasūtram"},
    93: {"name": "vinaya_sutra", "dir": "vinaya/vinaya_sutra", "title": "Vinaya sūtram"},
    62: {"name": "vinaya_upali", "dir": "vinaya/vinaya_sutra", "title": "Vinayaviniścaya upāliparipṛcchā"},
}

session = requests.Session()
session.headers.update(HEADERS)

def get_book_page(book_id):
    url = f"{BASE_URL}/canon-text/book/{book_id}"
    resp = session.get(url, timeout=15)
    resp.raise_for_status()
    return resp.text

def extract_book_links(html):
    """Extract book link names from the page HTML."""
    links = []
    pattern = re.compile(r'<a[^>]*href="[^"]*"[^>]*>([^<]+)</a>')
    in_book_links = False
    for line in html.split('\n'):
        if 'Book Links' in line or 'bookLinks' in line.lower():
            in_book_links = True
            continue
        if in_book_links:
            if '<select' in line or '</table' in line or 'S.No' in line:
                continue
            match = pattern.search(line)
            if match:
                text = match.group(1).strip()
                if text and text != 'S.N.':
                    links.append(text)
            if '</tbody>' in line or '</table' in line:
                break
    return links

def download_text(book_id, link_name, output_path):
    """Download a specific chapter/section of a text."""
    url = f"{BASE_URL}/canon-text/book/{book_id}"
    params = {"link": link_name}
    resp = session.get(url, params=params, timeout=15)
    if resp.status_code == 200:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(resp.text)
        return True
    return False

def main():
    print("=" * 60)
    print("Downloading Sarvastivada texts from DSBC")
    print("=" * 60)
    
    for book_id, info in TEXTS.items():
        print(f"\n[{book_id}] {info['title']}")
        dir_path = OUTPUT_DIR / info["dir"]
        os.makedirs(dir_path, exist_ok=True)
        
        # Save metadata
        meta_path = dir_path / "dsbc_meta.txt"
        with open(meta_path, 'w') as f:
            f.write(f"DSBC ID: {book_id}\n")
            f.write(f"Title: {info['title']}\n")
            f.write(f"URL: {BASE_URL}/canon-text/book/{book_id}\n")
        print(f"  ✓ Metadata saved to {meta_path}")
        
        time.sleep(1)

    print("\n" + "=" * 60)
    print("To download actual text content, open each book on DSBC")
    print("and save the Sanskrit text to the respective folders.")
    print("=" * 60)

if __name__ == "__main__":
    main()

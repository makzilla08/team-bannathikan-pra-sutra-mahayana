#!/usr/bin/env python3
"""
ดาวน์โหลดเนื้อหา สรวะตถาคตทัตวาสังคหะ (Sarva Tathāgata Tattva Saṅgraha)
จาก DSBC Project (Book ID: 84)

URL pattern: https://www.dsbcproject.org/canon-text/content/84/{content_id}
content_id เริ่มจาก 714 (บทที่ 1) ถึง 739 (บทที่ 26)
"""

import requests
import re
import os
import time
from pathlib import Path

BOOK_ID = 84
BASE_CONTENT_ID = 713  # บทที่ 1 = 714, บทที่ 2 = 715, ...
TOTAL_CHAPTERS = 26
BASE_URL = "https://www.dsbcproject.org/canon-text/content"
OUTPUT_BASE = "/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana/translations/16_sarvatathagatatattvasangraha"

CHAPTER_NAMES = {
    1: "Prathamaḥ",
    2: "Dvitīyaḥ",
    3: "Tṛtīyaḥ",
    4: "Caturthaḥ",
    5: "Pañcamaḥ",
    6: "Ṣaṣṭhamaḥ",
    7: "Saptamaḥ",
    8: "Aṣṭamaḥ",
    9: "Navamaḥ",
    10: "Daśamaḥ",
    11: "Ekādaśamaḥ",
    12: "Dvādaśamaḥ",
    13: "Trayodaśamaḥ",
    14: "Caturdaśamaḥ",
    15: "Pañcadaśamaḥ",
    16: "Ṣoḍaśamaḥ",
    17: "Saptadaśamaḥ",
    18: "Aṣṭādaśamaḥ",
    19: "Ekānnaviṁśatimaḥ",
    20: "Viṁśatitamaḥ",
    21: "Ekaviṁśatitamaḥ",
    22: "Dvāviṁśatitamaḥ",
    23: "Trayoviṁśatitamaḥ",
    24: "Caturviṁśatitamaḥ",
    25: "Pañcaviṁśatimaḥ",
    26: "Ṣaḍviṁśatimaḥ",
}


def download_chapter(chapter_no: int) -> str | None:
    """ดาวน์โหลดเนื้อหาบทจาก DSBC"""
    content_id = BASE_CONTENT_ID + chapter_no
    url = f"{BASE_URL}/{BOOK_ID}/{content_id}"
    chapter_name = CHAPTER_NAMES.get(chapter_no, f"Chapter {chapter_no}")

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }

    print(
        f"[บทที่ {chapter_no:2d}] กำลังดาวน์โหลด: {chapter_name} ... ", end="", flush=True
    )

    try:
        response = requests.get(url, headers=headers, timeout=60)
        response.raise_for_status()

        # หาส่วน Technical Details เพื่อข้าม
        html = response.text

        # หาเนื้อหา Sanskrit - อยู่หลัง Technical Details
        # รูปแบบ: หลังจาก "Sponsor:" section จนถึงจุดสิ้นสุด
        content_match = re.search(
            r'Sponsor:.*?</div>\s*(.*?)(?:<div class="callout|$)',
            html,
            re.DOTALL,
        )

        if content_match:
            raw_content = content_match.group(1)
            # ลบ HTML tags
            text = re.sub(r"<br\s*/?>", "\n", raw_content)
            text = re.sub(r"<[^>]+>", "", text)
            # แก้ HTML entities
            text = text.replace("&nbsp;", " ")
            text = text.replace("&amp;", "&")
            text = text.replace("&lt;", "<")
            text = text.replace("&gt;", ">")
            text = text.replace("&#39;", "'")
            text = text.replace("&ntilde;", "ñ")
            # จัดระเบียบ whitespace
            text = re.sub(r"[ \t]+", " ", text)
            text = re.sub(r"\n\s*\n\s*\n+", "\n\n", text)
            text = text.strip()
        else:
            # fallback: ลอง extract ทั้งหน้า
            text = re.sub(r"<[^>]+>", " ", html)
            text = re.sub(r"\s+", " ", text)
            text = text.strip()

        print(f"สำเร็จ ({len(text)} ตัวอักษร)")
        return text

    except requests.RequestException as e:
        print(f"ล้มเหลว: {e}")
        return None


def save_chapter(chapter_no: int, content: str) -> None:
    """บันทึกเนื้อหาบท"""
    chapter_dir = Path(OUTPUT_BASE) / f"chapter_{chapter_no:03d}"
    chapter_dir.mkdir(parents=True, exist_ok=True)

    output_file = chapter_dir / "original.txt"
    chapter_name = CHAPTER_NAMES.get(chapter_no, f"Chapter {chapter_no}")
    content_id = BASE_CONTENT_ID + chapter_no
    source_url = f"{BASE_URL}/{BOOK_ID}/{content_id}"

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(f"Sarva tathāgata tattva saṅgrahaḥ\n")
        f.write(f"บทที่ {chapter_no}: {chapter_name}\n")
        f.write(f"Source: {source_url}\n")
        f.write(f"{'=' * 60}\n\n")
        f.write(content)
        f.write(f"\n\n{'=' * 60}\n")
        f.write(f"|| จบบทที่ {chapter_no} ||\n")


def main():
    print("=" * 60)
    print("ดาวน์โหลด Sarva Tathāgata Tattva Saṅgrahaḥ")
    print(f"Book ID: {BOOK_ID} | บททั้งหมด: {TOTAL_CHAPTERS}")
    print("=" * 60)
    print()

    success_count = 0
    fail_count = 0
    failed_chapters = []

    for chapter_no in range(1, TOTAL_CHAPTERS + 1):
        content = download_chapter(chapter_no)
        if content:
            save_chapter(chapter_no, content)
            success_count += 1
        else:
            fail_count += 1
            failed_chapters.append(chapter_no)

        # หน่วงเวลาเล็กน้อยเพื่อไม่ให้ server หนัก
        time.sleep(1)

    print()
    print("=" * 60)
    print(f"สรุป: สำเร็จ {success_count}/{TOTAL_CHAPTERS} บท")
    if failed_chapters:
        print(f"ล้มเหลว: บทที่ {failed_chapters}")
    print("=" * 60)


if __name__ == "__main__":
    main()

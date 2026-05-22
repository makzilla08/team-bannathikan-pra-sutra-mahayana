#!/usr/bin/env python3
"""
ดาวน์โหลดเนื้อหาพระสูตรมหายานจาก DSBC (Digital Sanskrit Buddhist Canon)
ครอบคลุมทุกรายการจาก https://www.dsbcproject.org/canon-text/list/6

รูปแบบ API:
  - /canon-text/book/{book_id} — หน้าแสดงข้อมูลหนังสือ + ลิงก์บท
  - /canon-text/content/{book_id}/{page_id} — เนื้อหาแบบแบ่งหน้า
  - /canon-text/book-link/{link_id} — เนื้อหาแบบบทเดี่ยว

ที่จัดเก็บ: translations/XX_sutra_name/chapter_XXX/original.txt
"""

import argparse
import json
import os
import re
import sys
import time
from html import unescape
from pathlib import Path

import requests

BASE_URL = "https://www.dsbcproject.org"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
RATE_LIMIT_DELAY = 0.5  # seconds between requests
REQUEST_TIMEOUT = 60

PROJECT_ROOT = Path(__file__).resolve().parent.parent
TRANSLATIONS_DIR = PROJECT_ROOT / "translations"

# Mapping: DSBC book_id → folder name (from PLAN.md + convention)
FOLDER_MAP = {
    23: "20_ajitasenavyakarana",
    26: "21_maitreyavyakarana",
    42: "22_karandavyuha",
    46: "23_madhyamakasalistamba",
    59: "24_sukhavativyuha_vistara",
    818: "25_vajrasattva",
    850: "26_maitreyavyakarana",
    # Already in project:
    35: "04_vimalakirti",
    36: "08_bhaishajyaguru",
    39: "sutra_39",
    40: "10_gandavyuha",
    45: "05_lalitavistara",
    48: "07_parinirvana",
    53: "09_lankavatara",
    54: "02_saddharmapundarika",
    56: "03_samadhiraja",
    58: "13_sukhavativyuha",
    60: "06_suvarnaprabhasa",
    # Non-list-6 extras:
    68: "01_astasahasrika",
}

SUTRA_NAME_MAP = {
    23: "Ajitasenavyākaraṇam",
    24: "Aparimitāyuḥ",
    25: "Arthaviniścayasūtram",
    26: "Ārya Maitreya-vyākaraṇa",
    27: "Āryānityatā sūtram",
    28: "Āryapratītyasamutpāda",
    29: "Āryarāṣṭrapālaparipṛcchā",
    30: "Āryasāgaranāgarājaparipṛcchā",
    31: "Āryasaṃghāṭa sūtram",
    32: "Āryasarvabuddhaviṣayāvatārajñānālokālaṃkāra",
    33: "Āryatriratnānusmṛtisūtram",
    34: "Āryatriskandha sūtram",
    35: "Vimalakīrtinirdeśa",
    36: "Bhaiṣajyaguru",
    37: "Bhavasaṅkrāntisūtram",
    38: "Catuṣpariṣat sūtram",
    39: "Daśabhūmikasūtram",
    40: "Gaṇḍavyūha sūtram",
    41: "Guṇakāraṇḍavyūha",
    42: "Kāraṇḍavyūha",
    43: "Karuṇāpuṇḍarīka",
    44: "Kāśyapaparivarta",
    45: "Lalitavistara",
    46: "Madhyamaka-śālistambasūtram",
    47: "Mahāmegha sūtram",
    48: "Mahāparinirvāṇa",
    49: "Mahāvadānasūtram",
    50: "Megha sūtram",
    51: "Nairātmyaparipṛcchā",
    52: "Pañcarakṣā sūtram",
    53: "Saddharmalaṅkāvatāra",
    54: "Saddharmapuṇḍarīka",
    55: "Śālistambasūtram",
    56: "Samādhirājasūtram",
    57: "Sarvatathāgatādhiṣṭhānavyūha",
    58: "Sukhāvatīvyūha (saṃkṣiptamātṛkā)",
    59: "Sukhāvatīvyūha (vistaramātṛkā)",
    60: "Suvarṇaprabhāsa",
    61: "Vimalakīrtinirdeśa (alt)",
    62: "Vinayaviniścaya upāliparipṛcchā",
    813: "Saddharmasmṛtyupasthānasūtra",
    818: "Vajrasattvaniṣpādana",
    850: "Maitreyavyākaraṇa",
    873: "Sarvabuddhaviṣayāvatārajñānālokālaṁkāra",
    906: "Prahāṇapūrakaśatavandanā",
    936: "Ajātaśatrukaukṛtyavinodanā",
    964: "Ajātaśatrukaukṛtyavinodanā",
    965: "Ajātaśatrukaukṛtyavinodanā",
    966: "Ajātaśatrukaukṛtyavinodanā",
    969: "Ajātaśatrukaukṛtyavinodanā",
    68: "Aṣṭasāhasrikā prajñāpāramitā",
    19: "Brahmajālasūtram",
}


def get_slug(book_id: int) -> str:
    """Get folder slug for a book_id."""
    if book_id in FOLDER_MAP:
        return FOLDER_MAP[book_id]
    name = SUTRA_NAME_MAP.get(book_id, f"sutra_{book_id}")
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9]+", "_", slug)
    slug = slug.strip("_")[:40]
    return f"sutra_{book_id}"


class DSBCDownloader:
    def __init__(self, output_dir: Path = None, delay: float = RATE_LIMIT_DELAY):
        self.session = requests.Session()
        self.session.headers.update(HEADERS)
        self.delay = delay
        self.output_dir = output_dir or TRANSLATIONS_DIR
        self.stats = {"downloaded": 0, "skipped": 0, "errors": 0}

    def _request(self, url: str) -> requests.Response:
        """Make a request with rate limiting."""
        time.sleep(self.delay)
        resp = self.session.get(url, timeout=REQUEST_TIMEOUT)
        resp.raise_for_status()
        return resp

    def _extract_text_from_html(self, html: str) -> str:
        """Extract Sanskrit text from DSBC HTML, stripping HTML tags."""
        text = html
        text = re.sub(r"<script[^>]*>.*?</script>", "", text, flags=re.DOTALL)
        text = re.sub(r"<style[^>]*>.*?</style>", "", text, flags=re.DOTALL)
        text = re.sub(r"<[^>]+>", "\n", text)
        text = unescape(text)
        text = re.sub(r"\n\s*\n", "\n\n", text)
        text = re.sub(r" +\n", "\n", text)
        text = re.sub(r"\n +", "\n", text)
        return text.strip()

    def _get_content_div(self, html: str) -> str:
        """Extract text from the main content div."""
        # Pattern 1: <div class="content-text">...</div>
        m = re.search(r'<div class="content-text"[^>]*>(.*?)</div>\s*(?:<div class="callout"|<footer)', html, re.DOTALL)
        if m:
            return self._extract_text_from_html(m.group(1))
        # Pattern 2: <div class="card-body">...</div>
        m = re.search(r'<div class="card-body"[^>]*>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
        if m:
            return self._extract_text_from_html(m.group(1))
        # Pattern 3: fallback — get all text before footer
        m = re.search(r"(.*?)<div class=\"callout", html, re.DOTALL)
        if m:
            return self._extract_text_from_html(m.group(1))
        return self._extract_text_from_html(html)

    def get_book_chapters(self, book_id: int) -> list[dict]:
        """
        Get list of chapters from the book page.
        Returns list of {id: content_id, title: str, number: int}
        """
        url = f"{BASE_URL}/canon-text/book/{book_id}"
        html = self._request(url).text

        chapters = []
        seen = set()

        # Pattern A: Content page links (/canon-text/content/{book_id}/{page_id})
        for m in re.finditer(
            rf'/canon-text/content/{book_id}/(\d+)"[^>]*>([^<]+)</a>',
            html,
        ):
            cid = int(m.group(1))
            title = m.group(2).strip()
            if cid not in seen:
                seen.add(cid)
                chapters.append({"id": cid, "title": title, "number": len(chapters) + 1})

        # Pattern B: Book-link chapters (/canon-text/book-link/{link_id})
        if not chapters:
            for m in re.finditer(
                r'/canon-text/book-link/(\d+)"[^>]*>\s*\d+\.\s*([^<]+)</a>',
                html,
            ):
                cid = int(m.group(1))
                title = m.group(2).strip()
                if cid not in seen:
                    seen.add(cid)
                    chapters.append({"id": cid, "title": title, "number": len(chapters) + 1})

        # Pattern C: Sequential content pages from the book page
        if not chapters:
            for m in re.finditer(rf'/canon-text/content/{book_id}/(\d+)', html):
                cid = int(m.group(1))
                if cid not in seen:
                    seen.add(cid)
            if seen:
                seen_sorted = sorted(seen)
                for i, cid in enumerate(seen_sorted, 1):
                    chapters.append({"id": cid, "title": f"Page {cid}", "number": i})

        return chapters

    def fetch_chapter_via_content(self, book_id: int, page_id: int) -> str:
        """Fetch chapter content via /canon-text/content/{book_id}/{page_id}"""
        url = f"{BASE_URL}/canon-text/content/{book_id}/{page_id}"
        html = self._request(url).text
        return self._get_content_div(html)

    def fetch_chapter_via_booklink(self, link_id: int) -> str:
        """Fetch chapter content via /canon-text/book-link/{link_id}"""
        url = f"{BASE_URL}/canon-text/book-link/{link_id}"
        html = self._request(url).text
        # Try #roman div first
        m = re.search(r'<div id="roman"[^>]*>(.*?)</div>', html, re.DOTALL)
        if m:
            return self._extract_text_from_html(m.group(1))
        return self._get_content_div(html)

    def fetch_chapter(self, book_id: int, chapter: dict) -> str:
        """Fetch a single chapter's text, trying different URL patterns."""
        cid = chapter["id"]
        # Try content endpoint first
        try:
            text = self.fetch_chapter_via_content(book_id, cid)
            if len(text) > 50:
                return text
        except Exception:
            pass
        # Try book-link endpoint
        try:
            text = self.fetch_chapter_via_booklink(cid)
            if len(text) > 50:
                return text
        except Exception:
            pass
        return ""

    def download_book(self, book_id: int, force: bool = False) -> Path | None:
        """
        Download all chapters for a book.
        Returns the output directory path, or None if failed.
        """
        folder_name = get_slug(book_id)
        out_dir = self.output_dir / folder_name
        out_dir.mkdir(parents=True, exist_ok=True)

        print(f"\n{'='*60}")
        print(f"📖 กำลังดาวน์โหลด: {SUTRA_NAME_MAP.get(book_id, f'Book {book_id}')}")
        print(f"   Book ID: {book_id} → {folder_name}/")

        chapters = self.get_book_chapters(book_id)
        if not chapters:
            print(f"   ⚠ ไม่พบบท — จะลองดาวน์โหลดจากหน้า book โดยตรง")

            # Try direct content page
            url = f"{BASE_URL}/canon-text/book/{book_id}"
            try:
                html = self._request(url).text
                text = self._get_content_div(html)
                if len(text) > 100:
                    chap_dir = out_dir / "chapter_001"
                    chap_dir.mkdir(parents=True, exist_ok=True)
                    out_path = chap_dir / "original.txt"
                    out_path.write_text(
                        f"{SUTRA_NAME_MAP.get(book_id, '')}\n\n{text}",
                        encoding="utf-8",
                    )
                    print(f"   ✓ บันทึก: {out_path}")
                    self.stats["downloaded"] += 1
                    return out_dir
            except Exception as e:
                print(f"   ✗ ผิดพลาด: {e}")
                self.stats["errors"] += 1
                return None

        print(f"   พบ {len(chapters)} บท")

        for ch in chapters:
            ch_num = ch["number"]
            title = ch["title"]
            chap_dir = out_dir / f"chapter_{ch_num:03d}"
            out_path = chap_dir / "original.txt"

            if out_path.exists() and not force:
                print(f"   ⏭ [{ch_num:3d}] มีอยู่แล้ว: {title}")
                self.stats["skipped"] += 1
                continue

            chap_dir.mkdir(parents=True, exist_ok=True)

            try:
                text = self.fetch_chapter(book_id, ch)
                if not text or len(text) < 20:
                    print(f"   ⚠ [{ch_num:3d}] ไม่มีเนื้อหา: {title}")
                    text = f"[No content available for chapter {ch_num}: {title}]"

                out_path.write_text(
                    f"Chapter {ch_num}: {title}\nSource: {BASE_URL}/canon-text/book/{book_id}\n\n{text}",
                    encoding="utf-8",
                )
                print(f"   ✓ [{ch_num:3d}] บันทึก: {title[:50]}")
                self.stats["downloaded"] += 1

            except Exception as e:
                print(f"   ✗ [{ch_num:3d}] ผิดพลาด: {title} — {e}")
                self.stats["errors"] += 1

        self._save_metadata(out_dir, book_id, chapters)
        return out_dir

    def _save_metadata(self, out_dir: Path, book_id: int, chapters: list):
        """Save metadata about the download."""
        meta = {
            "dsbc_book_id": book_id,
            "source_url": f"{BASE_URL}/canon-text/book/{book_id}",
            "downloaded_at": time.strftime("%Y-%m-%d %H:%M:%S"),
            "chapters_found": len(chapters),
            "chapters": chapters,
        }
        # Merge with existing metadata if present
        meta_path = out_dir / "metadata.json"
        if meta_path.exists():
            try:
                existing = json.loads(meta_path.read_text(encoding="utf-8"))
                existing.update(meta)
                meta = existing
            except Exception:
                pass
        meta_path.write_text(
            json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    def download_list(self, book_ids: list[int], force: bool = False):
        """Download multiple books from a list of DSBC IDs."""
        print(f"กำลังดาวน์โหลด {len(book_ids)} พระสูตร...")
        success = 0
        for bid in book_ids:
            try:
                result = self.download_book(bid, force=force)
                if result:
                    success += 1
            except Exception as e:
                print(f"✗ ผิดพลาดร้ายแรง book {bid}: {e}")
                self.stats["errors"] += 1

        print(f"\n{'='*60}")
        print(f"สรุป: สำเร็จ {success}/{len(book_ids)} | "
              f"ดาวน์โหลด {self.stats['downloaded']} | "
              f"ข้าม {self.stats['skipped']} | "
              f"ผิดพลาด {self.stats['errors']}")

    def test_connection(self, book_id: int = 40) -> bool:
        """Test connection to DSBC by fetching a known working book."""
        print(f"🔍 ทดสอบการเชื่อมต่อกับ DSBC...")
        try:
            url = f"{BASE_URL}/canon-text/book/{book_id}"
            resp = self._request(url)
            print(f"   ✓ เชื่อมต่อสำเร็จ (HTTP {resp.status_code})")
            chapters = self.get_book_chapters(book_id)
            print(f"   ✓ พบ {len(chapters)} บท สำหรับ book {book_id}")
            return True
        except Exception as e:
            print(f"   ✗ เชื่อมต่อล้มเหลว: {e}")
            return False


def get_list_6_book_ids() -> list[int]:
    """Return all book IDs from DSBC list 6."""
    return [
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
        43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
        813, 818, 850, 873, 906, 936, 964, 965, 966, 969,
    ]


def get_priority_targets() -> list[int]:
    """Tier 1 priority targets from PLAN.md."""
    return [23, 26, 42, 46, 59, 818, 850]


def get_stubs() -> list[int]:
    """Tier 4 — sutras with existing folder stubs that need content."""
    return [36, 39, 48, 54, 56, 58, 60, 68]


def main():
    parser = argparse.ArgumentParser(
        description="ดาวน์โหลดเนื้อหาพระสูตรมหายานจาก DSBC"
    )
    parser.add_argument(
        "book_ids",
        nargs="*",
        type=int,
        help="DSBC book IDs to download (default: test with book 40)",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="ดาวน์โหลดทุกรายการจาก DSBC list 6",
    )
    parser.add_argument(
        "--priority",
        action="store_true",
        help="ดาวน์โหลดเฉพาะ Tier 1 (priority targets)",
    )
    parser.add_argument(
        "--stubs",
        action="store_true",
        help="ดาวน์โหลดเฉพาะ Tier 4 (stubs ที่มี folder อยู่แล้ว)",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="บังคับดาวน์โหลดซ้ำแม้ไฟล์มีอยู่แล้ว",
    )
    parser.add_argument(
        "--test",
        action="store_true",
        help="ทดสอบการเชื่อมต่อกับ DSBC",
    )
    parser.add_argument(
        "--output-dir",
        type=str,
        help="ไดเรกทอรีสำหรับบันทึก (default: translations/)",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=RATE_LIMIT_DELAY,
        help=f"หน่วงเวลาระหว่าง request ในวินาที (default: {RATE_LIMIT_DELAY})",
    )

    args = parser.parse_args()

    output_dir = Path(args.output_dir) if args.output_dir else TRANSLATIONS_DIR

    dl = DSBCDownloader(output_dir=output_dir, delay=args.delay)

    if args.test:
        success = dl.test_connection()
        sys.exit(0 if success else 1)

    if args.all:
        book_ids = get_list_6_book_ids()
        dl.download_list(book_ids, force=args.force)
    elif args.priority:
        book_ids = get_priority_targets()
        dl.download_list(book_ids, force=args.force)
    elif args.stubs:
        book_ids = get_stubs()
        dl.download_list(book_ids, force=args.force)
    elif args.book_ids:
        dl.download_list(args.book_ids, force=args.force)
    else:
        # Default: test with book 40 (Gaṇḍavyūha), download first chapter
        print("โหมดเริ่มต้น: ทดสอบดาวน์โหลด Gaṇḍavyūha (book 40)")
        dl.test_connection(book_id=40)
        result = dl.download_book(40, force=args.force)
        if result:
            chap_dirs = sorted(result.glob("chapter_*"))
            print(f"   มี {len(chap_dirs)} บทใน {result.name}")


if __name__ == "__main__":
    main()

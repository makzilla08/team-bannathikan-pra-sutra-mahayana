#!/usr/bin/env python3
"""
ดาวน์โหลดคัมภีร์หมวดมัธยมกะจาก DSBC Project
- ลิสต์ 64: madhyamaka (28 เล่ม)
- ลิสต์ 65: madhyamaka-yogācāra (16 เล่ม)

รูปแบบ URL:
  - /canon-text/book/{book_id} — หน้าแสดงข้อมูล + ลิงก์บท
  - /canon-text/content/{book_id}/{page_id} — เนื้อหาแบบแบ่งหน้า

ที่จัดเก็บ: translations/madhyamaka/{slug}/chapter_XXX/original.txt
"""

import re
import time
from html import unescape
from pathlib import Path

import requests

BASE_URL = "https://www.dsbcproject.org"
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
RATE_LIMIT_DELAY = 0.5
REQUEST_TIMEOUT = 60

PROJECT_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_BASE = PROJECT_ROOT / "translations" / "madhyamaka"

# DSBC book_id → ชื่อไทย + สันสกฤต (เรียงตามลิสต์ 64)
MADHYAMAKA_BOOKS = {
    236: ("อกุโตภยะ (Akutobhaya)", "Akutobhaya"),
    237: ("จตุหศตกา (Catuḥ śatikā)", "Catuḥ śatikā"),
    238: ("หัสตวาลประกรณะ (Hastavālaprakaraṇa)", "Hastavālaprakaraṇa"),
    239: ("หัสตวาลประกรณะวฤตติ (Hastavālaprakaraṇavṛttiḥ)", "Hastavālaprakaraṇavṛttiḥ"),
    240: ("มัธยมกาหฤทยะ (Madhyamakahṛdayaḥ)", "Madhyamakahṛdayaḥ"),
    241: ("มัธยมกาโลกะ (Madhyamakālokaḥ)", "Madhyamakālokaḥ"),
    242: ("มัธยมกศาสตร์ (Madhyamakaśāstram)", "Madhyamakaśāstram"),
    243: ("มัธยมกาวตาร (Madhyamakāvatāraḥ)", "Madhyamakāvatāraḥ"),
    244: ("มัธยมารถสังคระหะ (Madhyamārthasaṃgrahaḥ)", "Madhyamārthasaṃgrahaḥ"),
    245: ("มหายานวิงศิกา (Mahāyānaviṃśikā)", "Mahāyānaviṃśikā"),
    246: ("ปราชญาประทีป (Prajñāpradīpaḥ)", "Prajñāpradīpaḥ"),
    247: ("ปราสันนปทา (Prasannapadā)", "Prasannapadā (madhyamakavṛtti)"),
    248: ("ปฏิจจสมุปบาทหฤทยการิกา (Pratītyasamutpādahṛdayakārikā)", "Pratītyasamutpādahṛdayakārikā"),
    249: ("ปฏิจจสมุปบาทหฤทยวยาขยาน (Pratītyasamutpādahṛdayavyākhyānam)", "Pratītyasamutpādahṛdayavyākhyānam"),
    250: ("ศรณคมนเทศนา (Śaraṇagamanadeśanā)", "Śaraṇagamanadeśanā"),
    251: ("สัตยทวยาวตาร (Satyadvayāvatāranāma)", "Satyadvayāvatāranāma"),
    252: ("ศูนยตาสัปตติ (Śūnyatāsaptatiḥ)", "Śūnyatāsaptatiḥ"),
    253: ("สูตรารถสมุจจโยปเทศ (Sūtrārthasamuccayopadeśaḥ)", "Sūtrārthasamuccayopadeśaḥ"),
    254: ("วิเคราะห์วยวรตน์ (Vigrahavyāvartanī)", "Vigrahavyāvartanī"),
    255: ("ยุติษัษฏิการิกา (Yuktiṣaṣṭikārikā)", "Yuktiṣaṣṭikārikā"),
    721: ("สวภาววาทะ (Svabhāvavādaḥ)", "Svabhāvavādaḥ"),
    852: ("มัธยมกาวตารการิกา (Madhyamakāvatārakārikā)", "Madhyamakāvatārakārikā"),
    887: ("มัธยมกาวตารภาษยะ (Madhyamakāvatārabhāṣya)", "Madhyamakāvatārabhāṣya"),
    896: ("ปฏิจจสมุปบาทสตติสุภาษิตหฤทย (Pratītyasamutpādastutisubhāṣitahṛdayam)", "Pratītyasamutpādastutisubhāṣitahṛdayam"),
    931: ("มูลมัธยมากการิกา (Mūlamadhyamakakārikā)", "Mūlamadhyamakakārikā prajñā nāma"),
    962: ("ปฏิจจสมุปบาทสตติ... (Pratītyasamutpādastutisubhāṣitahṛdayam)", "Pratītyasamutpādastutisubhāṣitahṛdayam"),
    963: ("ปฏิจจสมุปบาทสตติ... (Pratītyasamutpādastutisubhāṣitahṛdayam)", "Pratītyasamutpādastutisubhāṣitahṛdayam"),
    970: ("ปฏิจจสมุปบาทสตติ... (Pratītyasamutpādastutisubhāṣitahṛdayam)", "Pratītyasamutpādastutisubhāṣitahṛdayam"),
}

# ลิสต์ 65: madhyamaka-yogācāra
MADHYAMAKA_YOGACARA_BOOKS = {
    256: ("อาปัตติเทศนาวิธิ (Āpattideśanāvidhiḥ)", "Āpattideśanāvidhiḥ"),
    257: ("ภาวนากรม (Bhāvanākramaḥ)", "Bhāvanākramaḥ"),
    258: ("โพธิจริยาวตาร (Bodhicaryāvatāraḥ)", "Bodhicaryāvatāraḥ"),
    259: ("โพธิจริยาวตาร ปัญชิกา (Bodhicaryāvatāraḥ pañjikā)", "Bodhicaryāvatāraḥ (pañjikā)"),
    260: ("โพธิปถประทีป (Bodhipathapradīpaḥ)", "Bodhipathapradīpaḥ"),
    261: ("โพธิสัตตวงศ์กัมมิกมรรคาวตารเทศนา (Bodhisattvādikarmika-mārgāvatāra-deśanā)", "Bodhisattvādikarmika-mārgāvatāra-deśanā"),
    262: ("โพธยาปัตติเทศนาวฤตติ (Bodhyāpattideśanāvṛttiḥ)", "Bodhyāpattideśanāvṛttiḥ"),
    263: ("จริยาสังคหะประทีป (Caryāsaṅgrahapradīpaḥ)", "Caryāsaṅgrahapradīpaḥ"),
    264: ("จิตโตตปาทสังวรวิธิกรมะ (Cittotpādasaṃvaravidhikramaḥ)", "Cittotpādasaṃvaravidhikramaḥ"),
    265: ("ครภสังคระหะ (Garbha-saṅgrahaḥ)", "Garbha-saṅgrahaḥ"),
    266: ("มหายานปถสาธนสังคระหะ (Mahāyānapathasādhanasaṅgrahaḥ)", "Mahāyānapathasādhanasaṅgrahaḥ"),
    267: ("สมาธิสัมภารปริวรรต (Samādhisaṃbhāraparivartaḥ)", "Samādhisaṃbhāraparivartaḥ"),
    268: ("ศิกษาสมุจจยการิกา (Śikṣāsamuccaya kārikā)", "Śikṣāsamuccaya kārikā"),
    269: ("ศิกษาสมุจจยะ (Śikṣāsamuccayaḥ)", "Śikṣāsamuccayaḥ"),
    891: ("รัตนกรัณฑทฆาฏมัธยม (Ratnakaraṇḍodghāṭamadhyamanāmopadeśaḥ)", "Ratnakaraṇḍodghāṭamadhyamanāmopadeśaḥ"),
    913: ("ภาวนายคัม (bhāvanāyogam)", "bhāvanāyogam"),
}

ALL_BOOKS = {}
ALL_BOOKS.update(MADHYAMAKA_BOOKS)
ALL_BOOKS.update(MADHYAMAKA_YOGACARA_BOOKS)


def slugify(name: str) -> str:
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9]+", "_", slug)
    return slug.strip("_")


def extract_text_from_html(html: str) -> str:
    text = html
    text = re.sub(r"<script[^>]*>.*?</script>", "", text, flags=re.DOTALL)
    text = re.sub(r"<style[^>]*>.*?</style>", "", text, flags=re.DOTALL)
    text = re.sub(r"<[^>]+>", "\n", text)
    text = unescape(text)
    text = re.sub(r"\n\s*\n", "\n\n", text)
    text = re.sub(r" +\n", "\n", text)
    text = re.sub(r"\n +", "\n", text)
    return text.strip()


def get_chapters(session, book_id: int) -> list:
    url = f"{BASE_URL}/canon-text/book/{book_id}"
    html = session.get(url, timeout=REQUEST_TIMEOUT).text
    chapters = []
    seen = set()

    for m in re.finditer(rf'/canon-text/content/{book_id}/(\d+)"[^>]*>([^<]+)</a>', html):
        cid = int(m.group(1))
        title = m.group(2).strip()
        if cid not in seen:
            seen.add(cid)
            chapters.append({"id": cid, "title": title, "number": len(chapters) + 1})

    if not chapters:
        for m in re.finditer(r'/canon-text/book-link/(\d+)"[^>]*>\s*\d+\.\s*([^<]+)</a>', html):
            cid = int(m.group(1))
            title = m.group(2).strip()
            if cid not in seen:
                seen.add(cid)
                chapters.append({"id": cid, "title": title, "number": len(chapters) + 1})

    if not chapters:
        for m in re.finditer(rf'/canon-text/content/{book_id}/(\d+)', html):
            cid = int(m.group(1))
            if cid not in seen:
                seen.add(cid)
        if seen:
            for i, cid in enumerate(sorted(seen), 1):
                chapters.append({"id": cid, "title": f"Page {cid}", "number": i})

    return chapters


def fetch_content(session, book_id: int, page_id: int) -> str:
    url = f"{BASE_URL}/canon-text/content/{book_id}/{page_id}"
    html = session.get(url, timeout=REQUEST_TIMEOUT).text
    m = re.search(r'<div class="content-text"[^>]*>(.*?)</div>\s*(?:<div class="callout"|<footer)', html, re.DOTALL)
    if m:
        return extract_text_from_html(m.group(1))
    m = re.search(r'<div class="card-body"[^>]*>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
    if m:
        return extract_text_from_html(m.group(1))
    m = re.search(r"(.*?)<div class=\"callout", html, re.DOTALL)
    if m:
        return extract_text_from_html(m.group(1))
    return extract_text_from_html(html)


def fetch_booklink(session, link_id: int) -> str:
    url = f"{BASE_URL}/canon-text/book-link/{link_id}"
    html = session.get(url, timeout=REQUEST_TIMEOUT).text
    m = re.search(r'<div id="roman"[^>]*>(.*?)</div>', html, re.DOTALL)
    if m:
        return extract_text_from_html(m.group(1))
    return extract_text_from_html(html)


def download_book(session, book_id: int, force: bool = False) -> Path | None:
    thai, sanskrit = ALL_BOOKS[book_id]
    slug = f"{book_id:04d}_{slugify(sanskrit)}"
    out_dir = OUTPUT_BASE / slug
    out_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"📖 [{book_id}] {thai}")
    print(f"   → {slug}/")

    chapters = get_chapters(session, book_id)
    if not chapters:
        # direct book page
        url = f"{BASE_URL}/canon-text/book/{book_id}"
        html = session.get(url, timeout=REQUEST_TIMEOUT).text
        text = extract_text_from_html(html)
        if len(text) > 100:
            chap_dir = out_dir / "chapter_001"
            chap_dir.mkdir(parents=True, exist_ok=True)
            out_path = chap_dir / "original.txt"
            out_path.write_text(f"{sanskrit}\n\n{text}", encoding="utf-8")
            print(f"   ✓ (หน้า book โดยตรง) {len(text)} ตัว → {out_path}")
            return out_dir
        print(f"   ⚠ ไม่มีเนื้อหา")
        return None

    print(f"   พบ {len(chapters)} บท")
    saved = 0
    for ch in chapters:
        ch_num = ch["number"]
        chap_dir = out_dir / f"chapter_{ch_num:03d}"
        out_path = chap_dir / "original.txt"
        if out_path.exists() and not force:
            print(f"   ⏭ [{ch_num:3d}] มีอยู่แล้ว")
            saved += 1
            continue
        chap_dir.mkdir(parents=True, exist_ok=True)

        text = ""
        try:
            text = fetch_content(session, book_id, ch["id"])
            if len(text) < 20:
                text = fetch_booklink(session, ch["id"])
        except Exception as e:
            print(f"   ✗ [{ch_num:3d}] {e}")
            continue

        if not text or len(text) < 20:
            text = f"[No content available for chapter {ch_num}: {ch['title']}]"

        out_path.write_text(
            f"Chapter {ch_num}: {ch['title']}\nSource: {BASE_URL}/canon-text/book/{book_id}\n\n{text}",
            encoding="utf-8",
        )
        print(f"   ✓ [{ch_num:3d}] {ch['title'][:45]} ({len(text)} ตัว)")
        saved += 1
        time.sleep(RATE_LIMIT_DELAY)

    # metadata
    meta = {
        "dsbc_book_id": book_id,
        "title_thai": thai,
        "title_sanskrit": sanskrit,
        "source_url": f"{BASE_URL}/canon-text/book/{book_id}",
        "chapters_found": len(chapters),
        "downloaded_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }
    meta_path = out_dir / "metadata.json"
    import json
    if meta_path.exists():
        try:
            existing = json.loads(meta_path.read_text(encoding="utf-8"))
            existing.update(meta)
            meta = existing
        except Exception:
            pass
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"   📦 บันทึก {saved}/{len(chapters)} บท + metadata.json")
    return out_dir


def main():
    import sys
    force = "--force" in sys.argv
    targets = list(ALL_BOOKS.keys())

    session = requests.Session()
    session.headers.update(HEADERS)

    print(f"ดาวน์โหลดหมวดมัธยมกะทั้งหมด {len(targets)} เล่ม...")
    ok = 0
    for bid in targets:
        try:
            if download_book(session, bid, force=force):
                ok += 1
        except Exception as e:
            print(f"✗ ร้ายแรง book {bid}: {e}")
        time.sleep(RATE_LIMIT_DELAY)

    print(f"\n{'='*60}")
    print(f"เสร็จสิ้น: สำเร็จ {ok}/{len(targets)}")


if __name__ == "__main__":
    main()

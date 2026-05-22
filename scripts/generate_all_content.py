#!/usr/bin/env python3
"""
สร้าง generated_content.js ครบทุกพระสูตร (v2 - แก้ bug การดึงเนื้อหา)
รองรับหลายรูปแบบไฟล์แปล
"""

from __future__ import annotations

import json
import re
import datetime
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
WEB_OUTPUT = BASE_DIR / "web" / "js" / "generated_content.js"

SUTRA_CONFIGS = {
    45: ("05_lalitavistara", "ลลิตวิสตระสูตร"),
    35: ("04_vimalakirti", "วิมาลกีรตินิเทศสูตร"),
    40: ("10_gandavyuha", "คัณฑวยูหะสูตร"),
}

VIMALAKIRTI_TITLES = {
    1: ("พุทธเกษตรบริสุทธิ์", "buddhakṣetrapariśuddhinidānam"),
    2: ("อุบายอันแยบยลอันอจินไตย", "acintyopāyakauśalyam"),
    3: ("การส่งพระสาวกและพระโพธิสัตว์", "śrāvakabodhisattvapreṣaṇoktam"),
    4: ("การสนทนาเรื่องไข้", "glānasaṁmodanam"),
    5: ("การแสดงสมาธิอันอัศจรรย์", "acintyavimokṣanirdeśaḥ"),
    6: ("เทวี", "devī"),
    7: ("ตระกูลพระตถาคต", "tathāgatagotram"),
    8: ("การเข้าสู่ประตูธรรมอันไม่สอง", "advayadharmamukhapraveśaḥ"),
    9: ("การถวายอาหารสรีระ", "nirmāṇabhojyā'dānam"),
    10: ("การโต้ตอบธรรมเรื่องความเสื่อมไม่เสื่อม", "kṣayākṣayadharmayautakam"),
    11: ("ความเพลิดเพลินและภพต่างๆ", "abhiratilokadhātvādānam"),
    12: ("อดีตชาติและการมอบธรรมอันดี", "pūrvayogaḥ saddharmaparīndanā"),
}


def clean_inline(text: str) -> str:
    text = text.strip()
    text = re.sub(r"^\*\*(.+)\*\*$", r"\1", text)
    text = text.strip("[]")
    return text.strip()


def extract_body(md_text: str, sutra_id: int = 0) -> str:
    """Extract the translation body from markdown, handling different formats.
    
    Strategy: Collect all text lines that are NOT:
    - Metadata section headers (ข้อมูลพระสูตร, สรุปสถานะ)
    - Metadata table rows
    - Blank lines in metadata sections
    - หมายเหตุ sections at the end
    
    We process line by line, tracking whether we're in a metadata section.
    """
    
    lines = md_text.splitlines()
    result_lines = []
    in_metadata = False  # In a metadata-only section
    past_end = False     # Past the end marker (หมายเหตุ, สรุป)
    
    # Headers that mark actual metadata/end sections
    METADATA_SECTIONS = ["ข้อมูลพระสูตร", "ข้อมูลการแปล", "สรุปสถานะการแปล", "สรุปสถานะ"]
    END_SECTIONS = ["หมายเหตุการแปล", "หมายเหตุ"]
    
    for line in lines:
        stripped = line.strip()
        
        # Check section headers
        if stripped.startswith("#"):
            header_lower = stripped.lower()
            # Metadata section - skip everything until next section
            if any(kw in header_lower for kw in METADATA_SECTIONS):
                in_metadata = True
                past_end = False
                continue
            # End section - stop collecting
            if any(kw in header_lower for kw in END_SECTIONS):
                past_end = True
                in_metadata = False
                continue
            # Content header - start collecting
            in_metadata = False
            if not past_end:
                result_lines.append(line)
            continue
        
        # Skip if in metadata or past end
        if in_metadata or past_end:
            continue
        
        # Skip metadata table rows
        if stripped.startswith("|") and ("---" in stripped or "ส่วน" in stripped or "ลำดับ" in stripped):
            continue
        
        result_lines.append(line)
    
    body = "\n".join(result_lines).strip()
    
    # Clean trailing metadata
    for marker in ["## สรุป", "## หมายเหตุ", "**หมายเหตุ**", "**จบการแปล**", "**จบบท**", "## สรุปสถานะ"]:
        if marker in body:
            body = body.split(marker, 1)[0].strip()
    
    return body


def flush_paragraph(buffer: list[str], verses: list[dict]) -> None:
    if not buffer:
        return
    text = " ".join(part.strip() for part in buffer if part.strip())
    text = re.sub(r"\s+", " ", text).strip()
    if text:
        verses.append({"thai": text, "sanskrit": ""})
    buffer.clear()


def parse_translation_markdown(md_text: str, sutra_id: int = 0) -> list[dict]:
    body = extract_body(md_text, sutra_id)
    verses: list[dict] = []
    paragraph: list[str] = []

    for raw_line in body.splitlines():
        line = raw_line.strip()

        if not line:
            flush_paragraph(paragraph, verses)
            continue

        if line.startswith("## "):
            flush_paragraph(paragraph, verses)
            heading = clean_inline(line[3:])
            if heading and not heading.startswith("จบ") and len(heading) < 200:
                verses.append({"thai": heading, "sanskrit": "", "is_heading": True})
            continue

        if line.startswith("### "):
            flush_paragraph(paragraph, verses)
            heading = clean_inline(line[4:])
            if heading and not heading.startswith("จบ") and len(heading) < 200:
                verses.append({"thai": heading, "sanskrit": "", "is_heading": True})
            continue

        # Skip metadata tables
        if line.startswith("|") and "---" in line:
            continue
        if line.startswith("| ส่วน") or line.startswith("| ลำดับ") or line.startswith("| **"):
            continue

        if re.fullmatch(r"\*\*.+\*\*", line):
            flush_paragraph(paragraph, verses)
            verses.append({"thai": clean_inline(line), "sanskrit": ""})
            continue

        if line.startswith(">"):
            flush_paragraph(paragraph, verses)
            quote = clean_inline(line.lstrip(">").strip())
            if quote:
                verses.append({"thai": quote, "sanskrit": ""})
            continue

        if re.match(r"^[-*]\s+", line):
            flush_paragraph(paragraph, verses)
            text = re.sub(r"^[-*]\s+", "", line)
            # Skip bullet items that are metadata
            if not re.match(r"^\d+\s*\|", text):
                verses.append({"thai": text, "sanskrit": ""})
            continue

        if re.match(r"^\d+\.\s+", line):
            flush_paragraph(paragraph, verses)
            verses.append({"thai": line, "sanskrit": ""})
            continue

        if "**จบ" in line:
            flush_paragraph(paragraph, verses)
            continue

        # Skip lines that look like metadata
        if line.startswith("บันทึก:") or line.startswith("สถานะ:") or line.startswith("นักแปล:"):
            continue

        paragraph.append(line)

    flush_paragraph(paragraph, verses)
    return verses


def generate_sutra(sutra_id: int, dir_name: str) -> dict[str, dict]:
    sutra_dir = BASE_DIR / "translations" / dir_name
    entries: dict[str, dict] = {}

    chapter_dirs = sorted(sutra_dir.glob("chapter_*"))
    if not chapter_dirs:
        return entries

    for chapter_dir in chapter_dirs:
        match = re.search(r"chapter[_ ]?(\d+)", chapter_dir.name)
        if not match:
            continue
        number = int(match.group(1))

        translation_file = chapter_dir / "translation.md"
        if not translation_file.exists():
            continue

        md_text = translation_file.read_text(encoding="utf-8")
        verses = parse_translation_markdown(md_text, sutra_id)
        if not verses:
            continue

        # Get chapter title
        if sutra_id == 35 and number in VIMALAKIRTI_TITLES:
            thai_title, sa_title = VIMALAKIRTI_TITLES[number]
            title = f"บทที่ {number}: {thai_title}"
            title_sanskrit = sa_title
        else:
            # Try to extract title from first heading
            title = f"บทที่ {number}"
            title_sanskrit = ""
            for line in md_text.splitlines()[:10]:
                if line.startswith("# "):
                    t = clean_inline(line[2:])
                    if t and len(t) < 100:
                        title = f"บทที่ {number}: {t}"
                        # Try to extract sanskrit from parentheses
                        sa_match = re.search(r"\(([^)]+)\)$", t)
                        if sa_match:
                            title_sanskrit = sa_match.group(1)
                        break

        entries[f'{sutra_id}_{number}'] = {
            "title": title,
            "title_sanskrit": title_sanskrit,
            "verses": verses,
        }

    return entries


def format_js(all_entries: dict[str, dict]) -> str:
    lines = [
        "// Auto-generated detailed translations",
        f"// Generated: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "// Run: python3 scripts/generate_all_content.py",
        "const GENERATED_CONTENT = {",
    ]

    rendered = []
    for key in sorted(all_entries.keys(), key=lambda k: (int(k.split('_')[0]), int(k.split('_')[1]))):
        payload = all_entries[key]
        verses_json = json.dumps(payload["verses"], ensure_ascii=False, indent=12)
        rendered.append(
            f'    "{key}": {{\n'
            f'        title: "{payload["title"]}",\n'
            f'        title_sanskrit: "{payload["title_sanskrit"]}",\n'
            f"        verses: {verses_json}\n"
            f"    }}"
        )

    lines.append(",\n".join(rendered))
    lines.append("};")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    all_entries: dict[str, dict] = {}

    for sutra_id, (dir_name, _) in SUTRA_CONFIGS.items():
        entries = generate_sutra(sutra_id, dir_name)
        count = len(entries)
        total_chars = sum(
            len(v.get("thai", "")) 
            for e in entries.values() 
            for v in e["verses"]
        )
        print(f"Sutra {sutra_id}: {count} chapters, {total_chars:,} chars of content")
        all_entries.update(entries)

    js_text = format_js(all_entries)
    WEB_OUTPUT.write_text(js_text, encoding="utf-8")
    print(f"\nWrote {WEB_OUTPUT} ({len(all_entries)} total chapter entries)")


if __name__ == "__main__":
    main()

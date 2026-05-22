#!/usr/bin/env python3
"""
สร้าง GENERATED_CONTENT จากไฟล์ translation.md ของลลิตวิสตระสูตร
เพื่อให้หน้าเว็บแสดงข้อความเต็มจากงานแปลจริง แทน CHAPTER_CONTENT แบบย่อ
"""

from __future__ import annotations

import json
import re
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
SUTRA_DIR = BASE_DIR / "translations" / "05_lalitavistara"
WEB_OUTPUT = BASE_DIR / "web" / "js" / "generated_content.js"
SCRIPT_OUTPUT = BASE_DIR / "scripts" / "generated_content.js"


def load_metadata() -> dict:
    return json.loads((SUTRA_DIR / "metadata.json").read_text(encoding="utf-8"))


def clean_inline(text: str) -> str:
    text = text.strip()
    text = re.sub(r"^\*\*(.+)\*\*$", r"\1", text)
    text = text.strip("[]")
    return text.strip()


def extract_body(md_text: str) -> str:
    if "## การแปล" in md_text:
        body = md_text.split("## การแปล", 1)[1]
    else:
        parts = re.split(r"^---\s*$", md_text, maxsplit=1, flags=re.MULTILINE)
        body = parts[1] if len(parts) > 1 else md_text

    if "\n## หมายเหตุ" in body:
        body = body.split("\n## หมายเหตุ", 1)[0]

    return body.strip()


def flush_paragraph(buffer: list[str], verses: list[dict]) -> None:
    if not buffer:
        return
    text = " ".join(part.strip() for part in buffer if part.strip())
    text = re.sub(r"\s+", " ", text).strip()
    if text:
        verses.append({"thai": text, "sanskrit": ""})
    buffer.clear()


def parse_translation_markdown(md_text: str) -> list[dict]:
    body = extract_body(md_text)
    verses: list[dict] = []
    paragraph: list[str] = []

    for raw_line in body.splitlines():
        line = raw_line.strip()

        if not line:
            flush_paragraph(paragraph, verses)
            continue

        if line.startswith("## "):
            flush_paragraph(paragraph, verses)
            verses.append(
                {"thai": clean_inline(line[3:]), "sanskrit": "", "is_heading": True}
            )
            continue

        if line.startswith("### "):
            flush_paragraph(paragraph, verses)
            verses.append(
                {"thai": clean_inline(line[4:]), "sanskrit": "", "is_heading": True}
            )
            continue

        if re.fullmatch(r"\*\*.+\*\*", line):
            flush_paragraph(paragraph, verses)
            heading = clean_inline(line)
            if heading and not heading.startswith("จบ"):
                verses.append({"thai": heading, "sanskrit": "", "is_heading": True})
            continue

        if line.startswith(">"):
            flush_paragraph(paragraph, verses)
            quote = clean_inline(line.lstrip(">").strip())
            if quote:
                verses.append({"thai": quote, "sanskrit": ""})
            continue

        if re.match(r"^[-*]\s+", line):
            flush_paragraph(paragraph, verses)
            verses.append({"thai": re.sub(r"^[-*]\s+", "", line), "sanskrit": ""})
            continue

        if re.match(r"^\d+\.\s+", line):
            flush_paragraph(paragraph, verses)
            verses.append({"thai": line, "sanskrit": ""})
            continue

        if line.startswith("**จบ"):
            flush_paragraph(paragraph, verses)
            continue

        paragraph.append(line)

    flush_paragraph(paragraph, verses)
    return verses


def build_entries() -> dict[str, dict]:
    metadata = load_metadata()
    entries: dict[str, dict] = {}

    for chapter in metadata["chapters"]:
        number = chapter["number"]
        translation_file = SUTRA_DIR / f"chapter_{number:02d}" / "translation.md"
        if not translation_file.exists():
            continue

        verses = parse_translation_markdown(
            translation_file.read_text(encoding="utf-8")
        )
        if not verses:
            continue

        entries[f'45_{number}'] = {
            "title": f'บทที่ {number}: {chapter["title_thai"]}',
            "title_sanskrit": chapter["title"],
            "verses": verses,
        }

    return entries


def format_js(entries: dict[str, dict]) -> str:
    lines = [
        "// Auto-generated detailed translations for Lalitavistara",
        "// Run: python3 scripts/generate_html_content.py",
        "const GENERATED_CONTENT = {",
    ]

    rendered = []
    for key, payload in sorted(entries.items(), key=lambda item: int(item[0].split("_")[1])):
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
    js_text = format_js(build_entries())
    WEB_OUTPUT.write_text(js_text, encoding="utf-8")
    SCRIPT_OUTPUT.write_text(js_text, encoding="utf-8")
    print(f"Wrote {WEB_OUTPUT}")
    print(f"Wrote {SCRIPT_OUTPUT}")


if __name__ == "__main__":
    main()

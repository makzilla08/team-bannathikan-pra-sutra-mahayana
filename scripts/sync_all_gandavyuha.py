#!/usr/bin/env python3
"""
Modular sync: each chapter → individual JSON file.
One chapter changes = one JSON changes. No full-file rewrite.
Safe for multi-translator workflows.
"""

import os, re, json
from pathlib import Path

BASE_DIR = Path("/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana")
TRANS_DIR = BASE_DIR / "translations" / "10_gandavyuha"
CONTENT_DIR = BASE_DIR / "web" / "content" / "10_gandavyuha"

CONTENT_DIR.mkdir(parents=True, exist_ok=True)

def parse_chapter(md_path):
    content = md_path.read_text(encoding="utf-8")
    lines = content.split("\n")
    verses = []
    title = ""

    for line in lines:
        original = line
        line = line.strip()
        if not line: continue
        if re.match(r'^-\s+\*\*', line): continue
        if line.startswith("<!--"): continue
        if re.match(r'^##\s+บทที่', line):
            if ":" in line:
                t = line.split(":", 1)[1].strip()
                t = re.sub(r'\*\*([^*]+)\*\*', r'\1', t)
                title = t.split("(")[0].strip() if "(" in t else t
            continue
        if re.match(r'^##\s+(ข้อมูลการแปล|การแปล)$', line): continue
        if re.match(r'^#\s+บทที่\s+\d+:', line): continue
        if re.match(r'^#\s+คัณฑวยูหะ', line): continue
        if line.startswith("###"):
            clean = re.sub(r'^#+\s*', '', original.strip())
            clean = re.sub(r'\*\*([^*]+)\*\*', r'\1', clean)
            verses.append({"thai": f"### {clean}", "sanskrit": "", "is_heading": True})
            continue
        if re.match(r'^(-{3,}|\*{3,}|_{3,})$', line): continue
        if re.match(r'^[\*\-\_]+$', line): continue
        if re.match(r'^\*\*(จบ|หมายเหตุ)', line): continue
        verses.append({"thai": re.sub(r'\*\*([^*]+)\*\*', r'\1', line), "sanskrit": ""})

    return title, verses


def sync():
    stats = {"ok": [], "stub": [], "missing": []}
    stub_threshold = 10  # chapters with <10 verses are likely stubs

    for i in range(1, 57):
        md_file = TRANS_DIR / f"chapter_{i:03d}" / "translation.md"

        if not md_file.exists():
            stats["missing"].append(i)
            continue

        title, verses = parse_chapter(md_file)

        data = {
            "title": f"บทที่ {i}: {title}" if title else f"บทที่ {i}",
            "title_sanskrit": "",
            "verses": verses
        }

        out_file = CONTENT_DIR / f"chapter_{i:03d}.json"
        out_file.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")

        if len(verses) < stub_threshold:
            stats["stub"].append((i, len(verses)))
        else:
            stats["ok"].append((i, len(verses)))

    # Generate manifest
    manifest = {
        "last_sync": __import__("datetime").datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "total_chapters": 56,
        "ready_chapters": [ch for ch, _ in stats["ok"]],
        "stub_chapters": {ch: verses for ch, verses in stats["stub"]},
        "missing_chapters": stats["missing"],
        "chapters": {
            i: {
                "status": "ready" if i in [c for c,_ in stats["ok"]] else "stub",
                "verses": next((v for ch,v in stats["ok"] if ch==i), next((v for ch,v in stats["stub"] if ch==i), 0)),
                "file": f"chapter_{i:03d}.json"
            }
            for i in range(1, 57)
        }
    }

    manifest_file = CONTENT_DIR / "manifest.json"
    manifest_file.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    # Summary
    print(f"📜 Sync complete")
    print(f"   ✅ Ready:      {len(stats['ok'])} chapters")
    print(f"   ⚠️  Stub:      {len(stats['stub'])} chapters ({', '.join(f'#{c}({v}v)' for c,v in stats['stub'])})")
    print(f"   ❌ Missing:   {len(stats['missing'])} chapters")
    print(f"   📁 Output:    {CONTENT_DIR}/")

    # Also update the INDEX file that references all chapters for the reader
    index_js = f"""// Auto-generated index — updated {manifest['last_sync']}
// This file maps chapter IDs to their JSON files for lazy loading
const CHAPTER_INDEX = {json.dumps({i: f"content/10_gandavyuha/chapter_{i:03d}.json" for i in range(1,57)}, ensure_ascii=False)};
const CHAPTER_MANIFEST = {json.dumps(manifest, ensure_ascii=False)};
"""
    (BASE_DIR / "web" / "js" / "chapter_index.js").write_text(index_js, encoding="utf-8")
    print(f"   ✅ Index:      web/js/chapter_index.js")


if __name__ == "__main__":
    sync()

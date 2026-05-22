import re
import json
from pathlib import Path

# Paths
MD_PATH = Path("/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana/translations/10_gandavyuha/chapter_003/translation.md")
JS_PATH = Path("/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana/web/js/gandavyuha_content.js")

def parse_md(md_text):
    # Extract translation body
    body = md_text.split("## การแปล", 1)[1]
    if "## หมายเหตุ" in body:
        body = body.split("## หมายเหตุ", 1)[0]
    
    verses = []
    paragraphs = body.strip().split("\n\n")
    
    for p in paragraphs:
        p = p.strip()
        if not p: continue
        
        # Check if heading
        if p.startswith("###"):
            verses.append({
                "thai": p,
                "sanskrit": "",
                "is_heading": True
            })
        elif p.startswith("(1)") or p.startswith("(2)") or p.startswith("(10)") or re.match(r"^\(\d+\)", p):
            # Verse list in Part 9
            for line in p.split("\n"):
                if line.strip():
                    verses.append({
                        "thai": line.strip(),
                        "sanskrit": ""
                    })
        elif p.startswith("- "):
            # Bullet list items
            for line in p.split("\n"):
                if line.strip():
                    verses.append({
                        "thai": line.strip(),
                        "sanskrit": ""
                    })
        elif p.startswith("1. ") or p.startswith("2. "):
            # Numbered list
            for line in p.split("\n"):
                if line.strip():
                    verses.append({
                        "thai": line.strip(),
                        "sanskrit": ""
                    })
        else:
            verses.append({
                "thai": p,
                "sanskrit": ""
            })
    
    return verses

md_content = MD_PATH.read_text(encoding="utf-8")
verses = parse_md(md_content)

new_chapter = {
    "title": "บทที่ 3: มัญชุศรี",
    "title_sanskrit": "Mañjuśrīḥ",
    "verses": verses
}

# Load existing JS and insert
js_content = JS_PATH.read_text(encoding="utf-8")

# Find the end of GANDAVYUHA_CONTENT object
# It ends with "    }\n};"
insertion_point = js_content.rfind("    }\n};")
if insertion_point != -1:
    # Add a comma and the new chapter
    new_data = ',\n    "40_3": ' + json.dumps(new_chapter, ensure_ascii=False, indent=8)
    updated_js = js_content[:insertion_point + 5] + new_data + js_content[insertion_point + 5:]
    JS_PATH.write_text(updated_js, encoding="utf-8")
    print("Successfully updated gandavyuha_content.js with Chapter 3")
else:
    print("Could not find insertion point in JS file")

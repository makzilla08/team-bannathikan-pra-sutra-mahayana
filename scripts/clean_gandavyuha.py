#!/usr/bin/env python3
"""ทำความสะอาดไฟล์ต้นฉบับกัณฑวิภังคสูตร ดึงเฉพาะเนื้อหาสันสกฤต"""

import re
from pathlib import Path

RAW_DIR = Path("translations/10_gandavyuha/raw_pages")
OUTPUT = Path("translations/10_gandavyuha/original_clean.txt")

def clean_page(text):
    """ทำความสะอาดแต่ละหน้า ดึงเฉพาะเนื้อหา"""
    lines = text.strip().split('\n')
    content_lines = []
    
    skip_patterns = [
        'Digital Sanskrit Buddhist Canon',
        'Home', 'Canon Texts', 'Main Introduction', 'Browse By',
        'Romanized', 'Bibliography', 'Manuscripts', 'Introduction',
        'Short History', 'Contributors', 'People', 'Browse Gallery',
        'Resources', 'Links', 'Catalog', 'About Us', 'Donations',
        'Usage Policy', 'News', 'Contact Us', '×', 'error',
        '©', 'Copyright', 'email', 'Phone', 'Fax',
    ]
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Skip navigation/UI elements
        if any(pat in line for pat in skip_patterns):
            continue
        # Skip lines that are just numbers or single chars
        if len(line) <= 2 and line.isdigit():
            continue
        # Skip lines that look like HTML/CSS
        if line.startswith('{') or line.startswith('.') or line.startswith('color:'):
            continue
        # Skip phone numbers and emails
        if re.match(r'[\d\-\(\)\s]{10,}', line):
            continue
        if '@' in line and '.' in line:
            continue
            
        content_lines.append(line)
    
    return '\n'.join(content_lines)


def main():
    all_content = []
    
    # Get all page files sorted
    page_files = sorted(RAW_DIR.glob("page_*.txt"), key=lambda x: int(x.stem.split('_')[1]))
    
    for pf in page_files:
        page_num = pf.stem.split('_')[1]
        raw = pf.read_text(encoding='utf-8')
        cleaned = clean_page(raw)
        
        if cleaned.strip():
            all_content.append(f"=== หน้า {page_num} ===\n{cleaned}")
    
    full_text = "\n\n".join(all_content)
    OUTPUT.write_text(full_text, encoding='utf-8')
    
    print(f"บันทึกแล้ว: {OUTPUT}")
    print(f"รวม {len(full_text):,} ตัวอักษร")
    print(f"\n--- ตัวอย่าง 20 บรรทัดแรก ---")
    for line in full_text.split('\n')[:20]:
        print(line)


if __name__ == "__main__":
    main()

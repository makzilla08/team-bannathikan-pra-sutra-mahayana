#!/usr/bin/env python3
"""
สคริปต์สำหรับเตรียมเนื้อหาคัณฑวยูหะสูตร (Gaṇḍavyūha Sūtra)
แยกเนื้อหาจาก raw_pages ไปยังแต่ละบท และสร้างโครงสร้างไฟล์งานแปล
"""

import os
import re
from pathlib import Path

# ตั้งค่าเส้นทาง
PROJECT_DIR = Path("/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana")
RAW_DIR = PROJECT_DIR / "translations/10_gandavyuha/raw_pages"
SUTRA_DIR = PROJECT_DIR / "translations/10_gandavyuha"
HTML_PAGE = PROJECT_DIR / "data/gandavyuha_page.html"

def get_chapter_titles():
    """ดึงรายชื่อบทจากไฟล์ HTML"""
    titles = {}
    if not HTML_PAGE.exists():
        print(f"❌ ไม่พบไฟล์ {HTML_PAGE}")
        return titles
    
    content = HTML_PAGE.read_text(encoding='utf-8')
    # ค้นหารูปแบบ <a href=".../content/40/(\d+)">(\d+)\s+(.*?)</a>
    matches = re.finditer(r'<a href="[^"]+/content/40/(\d+)">(\d+)\s+(.*?)</a>', content)
    
    for match in matches:
        url_id = int(match.group(1))
        chapter_num = int(match.group(2))
        title = match.group(3).strip()
        titles[chapter_num] = {
            "url_id": url_id,
            "title": title
        }
    
    return titles

def clean_text(text):
    """ทำความสะอาดเนื้อหาสันสกฤตโดยใช้ตำแหน่ง Marker"""
    lines = text.split('\n')
    content_lines = []
    
    start_collecting = False
    stop_collecting = False
    
    # คำหลักที่บ่งบอกจุดเริ่มต้นของเนื้อหาจริง
    start_markers = [
        "|| gaṇḍavyūhasūtram||",
        "||om namaḥ sarvabuddhabodhisattvebhyaḥ||",
        "|| oṃ namaḥ sarvabuddhabodhisattvebhyaḥ ||"
    ]
    
    # คำหลักที่บ่งบอกจุดสิ้นสุดของเนื้อหา
    stop_markers = [
        "The rights of the materials",
        "Rights in the compilation",
        "$(document).foundation();"
    ]
    
    for line in lines:
        stripped = line.strip()
        
        # ตรวจสอบจุดสิ้นสุด
        if any(marker in stripped for marker in stop_markers):
            stop_collecting = True
            
        if stop_collecting:
            continue
            
        # ตรวจสอบจุดเริ่มต้น
        if not start_collecting:
            if any(marker in stripped for marker in start_markers):
                start_collecting = True
                content_lines.append(stripped) # เก็บบรรทัด marker ด้วย
            continue
            
        # ข้ามบรรทัดที่เป็นตัวเลขหน้าเว็บหรือ boilerplate เล็กน้อยที่ปนมา
        if re.match(r'^\d+$', stripped):
            continue
        if stripped == "देवनागरी":
            continue
            
        content_lines.append(line) # เก็บแบบไม่ strip เพื่อรักษา indent
    
    # ถ้าหา marker ไม่เจอเลย (กรณีไฟล์ต่างรูปแบบ) ให้ใช้ regex cleaning เดิม
    if not content_lines:
        return clean_text_fallback(text)
        
    result = '\n'.join(content_lines).strip()
    return result

def clean_text_fallback(text):
    """ตรรกะสำรองหากหา Marker ไม่พบ"""
    lines = text.strip().split('\n')
    content_lines = []
    
    skip_patterns = [
        'Digital Sanskrit Buddhist Canon', 'Home', 'Canon Texts',
        'Romanized', 'Bibliography', 'Manuscripts', 'Contributors',
        'About Us', 'Donations', 'Usage Policy', 'Contact Us',
        'Technical Details', 'Text Version', 'Input Personnel',
        'Proof Reader', 'Supplier', 'Sponsor', 'University of the West'
    ]
    
    for line in lines:
        line = line.strip()
        if not line:
            content_lines.append("")
            continue
        if any(pat in line for pat in skip_patterns):
            continue
        if re.match(r'^\d+$', line):
            continue
        content_lines.append(line)
        
    result = '\n'.join(content_lines)
    return re.sub(r'\n{3,}', '\n\n', result).strip()

def main():
    print("=== เริ่มการเตรียมเนื้อหาคัณฑวยูหะสูตร ===")
    
    chapter_info = get_chapter_titles()
    if not chapter_info:
        print("❌ ไม่สามารถดึงรายชื่อบทได้")
        return

    # สร้าง Mapping จาก url_id เป็น chapter_num
    url_to_chapter = {info["url_id"]: num for num, info in chapter_info.items()}
    
    for url_id, chapter_num in sorted(url_to_chapter.items()):
        raw_file = RAW_DIR / f"page_{url_id}.txt"
        if not raw_file.exists():
            print(f"⚠️ ไม่พบไฟล์ raw สำหรับบทที่ {chapter_num} (ID {url_id})")
            continue
            
        print(f"กำลังประมวลผล บทที่ {chapter_num}: {chapter_info[chapter_num]['title']}...", end=" ", flush=True)
        
        raw_content = raw_file.read_text(encoding='utf-8')
        cleaned = clean_text(raw_content)
        
        chapter_dir = SUTRA_DIR / f"chapter_{chapter_num:03d}"
        chapter_dir.mkdir(parents=True, exist_ok=True)
        
        # 1. บันทึก original.txt (เขียนทับ)
        with open(chapter_dir / "original.txt", 'w', encoding='utf-8') as f:
            f.write(f"# บทที่ {chapter_num}: {chapter_info[chapter_num]['title']}\n")
            f.write(f"Source ID: {url_id}\n")
            f.write("-" * 50 + "\n\n")
            f.write(cleaned)
            
        # 2. สร้าง translation.md (ถ้ายังไม่มี)
        trans_file = chapter_dir / "translation.md"
        if not trans_file.exists():
            with open(trans_file, 'w', encoding='utf-8') as f:
                f.write(f"# การแปล: บทที่ {chapter_num} - {chapter_info[chapter_num]['title']}\n\n")
                f.write("## ข้อมูลการแปล\n")
                f.write(f"- **บทที่**: {chapter_num}\n")
                f.write(f"- **ชื่อบท**: {chapter_info[chapter_num]['title']}\n")
                f.write("- **นักแปล**: [ชื่อนักแปล]\n")
                f.write(f"- **วันที่**: {datetime.now().strftime('%Y-%m-%d')}\n")
                f.write("- **สถานะ**: ยังไม่เริ่มแปล\n\n")
                f.write("## การแปล\n\n[เริ่มแปลที่นี่]\n")
                
        # 3. สร้าง notes.md (ถ้ายังไม่มี)
        notes_file = chapter_dir / "notes.md"
        if not notes_file.exists():
            with open(notes_file, 'w', encoding='utf-8') as f:
                f.write(f"# หมายเหตุ: บทที่ {chapter_num} - {chapter_info[chapter_num]['title']}\n\n")
                f.write("## จุดที่ต้องตรวจสอบ\n\n- [ ] [ระบุจุดที่ต้องตรวจสอบ]\n\n")
                f.write("## ศัพท์สำคัญในบทนี้\n\n| สันสกฤต | ไทย | หมายเหตุ |\n|---------|-----|----------|\n")

        print("✅")

    print("\n=== การเตรียมเนื้อหาเสร็จสิ้น ===")

if __name__ == "__main__":
    from datetime import datetime
    main()

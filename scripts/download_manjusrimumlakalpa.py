#!/usr/bin/env python3
"""
สคริปต์ดาวน์โหลดและทำความสะอาด อารยะ มัญชุศรีมูลกัลปา (ID: 78)
จาก DSBC Project
"""

import json
import os
import re
import requests
from pathlib import Path
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import time

# กำหนดค่าต่างๆ
BASE_URL = "https://www.dsbcproject.org"
BOOK_ID = "78"
PROJECT_ROOT = Path("/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana")
OUTPUT_DIR = PROJECT_ROOT / "translations" / "15_manjusrimumlakalpa"

def get_headers():
    return {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    }

def get_book_page():
    url = f"{BASE_URL}/canon-text/book/{BOOK_ID}"
    print(f"กำลังดึงหน้าหลัก: {url}")
    response = requests.get(url, headers=get_headers(), timeout=30)
    response.raise_for_status()
    return response.text

def extract_chapters(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    chapters = []
    
    chapter_titles = [
        "Atha prathamaḥ parivartaḥ", "Atha dvitīyaḥ parivartaḥ", "Atha tṛtīyaḥ parivartaḥ",
        "Caturthaḥ paṭalavisaraḥ", "Pañcamaḥ paṭalavisaraḥ", "Ṣaṣṭhaḥ paṭalavisaraḥ",
        "Saptamaḥ paṭalavisaraḥ", "Aṣṭamaḥ paṭalavisaraḥ", "Atha navamaḥ paṭalavisaraḥ",
        "Atha daśamaḥ paṭalavisaraḥ", "Athaikādaśaḥ paṭalavisaraḥ", "Atha dvādaśaḥ paṭalavisaraḥ",
        "Atha trayodaśaḥ paṭalavisaraḥ", "Atha caturdaśaḥ paṭalavisaraḥ", "Atha pañcadaśaḥ paṭalavisaraḥ",
        "Atha ṣoḍaśaḥ paṭalavisaraḥ", "Atha saptadaśaḥ paṭalavisaraḥ", "Athāṣṭādaśaḥ paṭalavisaraḥ",
        "Atha ekonaviṁśaḥ paṭalavisaraḥ", "Atha viṁśaḥ paṭalavisaraḥ", "Atha ekaviṁśaḥ paṭalavisaraḥ",
        "Atha dvāviṁśaḥ paṭalavisaraḥ", "Atha trayoviṁśatitamaḥ paṭalavisaraḥ", "Atha caturviṁśatitamaḥ paṭalavisaraḥ",
        "Atha pañcaviṁśatitamaḥ paṭalavisaraḥ", "Atha ṣaḍviṁśatitamaḥ paṭalavisaraḥ", "Saptaviṁśatitamaḥ paṭalavisaraḥ",
        "Atha aṣṭāviṁśatitamaḥ paṭalavisaraḥ", "Athaikonatriṁśaḥ paṭalavisaraḥ", "Atha triṁśaḥ paṭalavisaraḥ",
        "Athaikatriṁśaḥ paṭalavisaraḥ", "Atha dvātriṁśaḥ paṭalavisaraḥ", "Atha trayastriṁśaḥ paṭalavisaraḥ",
        "Atha catustriṁśaḥ paṭalavisaraḥ", "Atha pañcatriṁśaḥ paṭalavisaraḥ", "Atha ṣaṭtriṁśaḥ paṭalavisaraḥ",
        "Atha saptatriṁśaḥ paṭalavisaraḥ", "Athāṣṭātriṁśaḥ paṭalavisaraḥ", "Athaikonacatvāriṁśaḥ paṭalavisaraḥ",
        "Atha catvāriṁśaḥ paṭalavisaraḥ", "Atha ekacatvāriṁśaḥ paṭalavisaraḥ", "Atha dvicatvāriṁśaḥ paṭalavisaraḥ",
        "Atha tricatvāriṁśaḥ paṭalavisaraḥ", "Atha catuścatvāriṁśaḥ paṭalavisaraḥ", "Atha pañcacatvāriṁśaḥ paṭalavisaraḥ",
        "Atha ṣaṭcatvāriṁśaḥ paṭalavisaraḥ", "Atha saptacatvāriṁśaḥ paṭalavisaraḥ", "Athāṣṭacatvāriṁśaḥ paṭalavisaraḥ",
        "Athaikonapañcāśaḥ paṭalavisaraḥ", "Atha pañcāśaḥ paṭalavisaraḥ", "Atha ekapañcāśaḥ paṭalavisaraḥ",
        "Atha dvipañcāśaḥ paṭalavisaraḥ", "Atha tripañcāśaḥ paṭalavisaraḥ", "Atha catuḥpañcāśaḥ paṭalavisaraḥ",
        "Atha pañcapañcāśaḥ paṭalavisaraḥ",
    ]
    
    for i in range(1, 56):
        title = chapter_titles[i-1] if i-1 < len(chapter_titles) else f"Chapter {i}"
        content_id = 634 + i
        chapters.append({
            'number': str(i),
            'title': title,
            'url': f"{BASE_URL}/canon-text/content/{BOOK_ID}/{content_id}"
        })
    
    chapters.sort(key=lambda x: int(x['number']) if x['number'].isdigit() else 0)
    return chapters

def download_chapter(chapter_url, chapter_num):
    print(f"  ดาวน์โหลดบทที่ {chapter_num}...")
    content_id = 634 + int(chapter_num)
    url = f"{BASE_URL}/canon-text/content/{BOOK_ID}/{content_id}"
    
    try:
        response = requests.get(url, headers=get_headers(), timeout=60)
        if response.status_code == 200 and len(response.text) > 1000:
            print(f"    สำเร็จจาก: {url}")
            return response.text
    except Exception as e:
        print(f"  ข้อผิดพลาด: {e}")
    
    print(f"  ไม่สามารถดาวน์โหลดบทที่ {chapter_num} ได้")
    return None

def clean_html_content(html_content):
    if not html_content:
        return ""
    
    soup = BeautifulSoup(html_content, 'html.parser')
    
    for tag in soup(['script', 'style', 'nav', 'header', 'footer', 'aside']):
        tag.decompose()
    
    main_content = None
    for selector in ['div.sutra-content', 'div.text-content', 'div.entry-content', 
                      'article', 'main', 'div.col-sm-12', 'div.col-md-12']:
        elem = soup.select_one(selector)
        if elem:
            text = elem.get_text(strip=True)
            if len(text) > 200:
                main_content = elem
                break
    
    if not main_content:
        all_divs = soup.find_all('div')
        best_div = None
        best_len = 0
        for div in all_divs:
            text = div.get_text(strip=True)
            if len(text) > best_len:
                best_len = len(text)
                best_div = div
        main_content = best_div
    
    if main_content:
        text = main_content.get_text(separator='\n', strip=True)
    else:
        text = soup.get_text(separator='\n', strip=True)
    
    text = re.sub(r'\n\s*\n', '\n\n', text)
    
    lines = text.split('\n')
    cleaned_lines = []
    skip_patterns = [
        r'^Home$', r'^Canon Texts?$', r'^Manuscripts$', r'^Resources$',
        r'^About Us$', r'^News$', r'^Contact Us$', r'^Browse',
        r'^Main Introduction$', r'^Bibliography$', r'^Romanized',
        r'^\d{3}-\d{3}-\d{4}', r'^@', r'^[A-Z]+\s+COPYRIGHT',
        r'^Digital Sanskrit', r'^×$', r'^sūtrapiṭaka',
        r'^tantra$', r'^kriyā', r'^Category$', r'^Introduction$',
    ]
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
        skip = False
        for pattern in skip_patterns:
            if re.match(pattern, line, re.IGNORECASE):
                skip = True
                break
        if not skip:
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def save_chapter_content(chapter_num, content, title):
    chapter_dir = OUTPUT_DIR / f"chapter_{chapter_num.zfill(3)}"
    chapter_dir.mkdir(parents=True, exist_ok=True)
    
    output_file = chapter_dir / "original.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    metadata = {
        "chapter": chapter_num,
        "title": title,
        "status": "raw"
    }
    metadata_file = chapter_dir / "metadata.json"
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)
    
    print(f"  บันทึกบทที่ {chapter_num} เรียบร้อย")

def main():
    print("=" * 60)
    print("ดาวน์โหลด อารยะ มัญชุศรีมูลกัลปา (ID: 78)")
    print("=" * 60)
    
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    html_content = get_book_page()
    chapters = extract_chapters(html_content)
    
    print(f"\nพบ {len(chapters)} บท")
    
    for ch in chapters:
        print(f"  บทที่ {ch['number']}: {ch['title']}")
    
    print("\n" + "=" * 60)
    print("เริ่มดาวน์โหลดแต่ละบท...")
    print("=" * 60)
    
    for i, chapter in enumerate(chapters):
        print(f"\n[{i+1}/{len(chapters)}] บทที่ {chapter['number']}: {chapter['title']}")
        
        html = download_chapter(chapter['url'], chapter['number'])
        
        if html:
            clean_text = clean_html_content(html)
            
            if clean_text:
                save_chapter_content(chapter['number'], clean_text, chapter['title'])
            else:
                print(f"  ไม่พบเนื้อหาหลังจากทำความสะอาด")
        else:
            print(f"  ไม่สามารถดาวน์โหลดได้")
        
        time.sleep(1)
    
    print("\n" + "=" * 60)
    print("เสร็จสิ้นการดาวน์โหลด!")
    print("=" * 60)

if __name__ == "__main__":
    main()
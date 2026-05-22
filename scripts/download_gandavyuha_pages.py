#!/usr/bin/env python3
"""ดาวน์โหลดเนื้อหากัณฑวิภังคสูตรจาก DSBC"""

import requests
import re
import time
from pathlib import Path
from html import unescape

BASE_URL = "https://www.dsbcproject.org"
BOOK_ID = "40"
OUTPUT_DIR = Path("translations/10_gandavyuha/raw_pages")
FULL_OUTPUT = Path("translations/10_gandavyuha/original_full.txt")

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def get_page_ids():
    """ดึงรายการ page IDs จากหน้า book"""
    url = f"{BASE_URL}/canon-text/book/{BOOK_ID}"
    resp = requests.get(url, headers=HEADERS, timeout=30)
    resp.raise_for_status()
    page_ids = sorted(set(re.findall(rf'/canon-text/content/{BOOK_ID}/(\d+)', resp.text)), key=int)
    return page_ids

def fetch_page(page_id):
    """ดาวน์โหลดหน้าเดียว"""
    url = f"{BASE_URL}/canon-text/content/{BOOK_ID}/{page_id}"
    resp = requests.get(url, headers=HEADERS, timeout=30)
    resp.raise_for_status()
    
    # Extract text content from HTML
    html = resp.text
    
    # Find the main content div
    content_match = re.search(r'<div class="content-text">(.*?)</div>', html, re.DOTALL)
    if not content_match:
        content_match = re.search(r'<div class="card-body">(.*?)</div>', html, re.DOTALL)
    if not content_match:
        # Fallback: get all text
        content = re.sub(r'<[^>]+>', '\n', html)
    else:
        content = content_match.group(1)
        content = re.sub(r'<[^>]+>', '\n', content)
    
    # Clean up HTML entities and whitespace
    content = unescape(content)
    content = re.sub(r'\n\s*\n', '\n\n', content)
    content = content.strip()
    
    return content

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    page_ids = get_page_ids()
    print(f"พบ {len(page_ids)} หน้าสำหรับกัณฑวิภังคสูตร")
    
    all_content = []
    
    for i, pid in enumerate(page_ids):
        print(f"  [{i+1}/{len(page_ids)}] ดาวน์โหลดหน้า {pid}...", end=" ")
        try:
            content = fetch_page(pid)
            
            # Save individual page
            page_file = OUTPUT_DIR / f"page_{pid}.txt"
            page_file.write_text(content, encoding='utf-8')
            
            all_content.append(f"--- หน้า {pid} ---\n{content}")
            print(f"✓ ({len(content)} chars)")
            
            time.sleep(0.5)  # Be nice to the server
            
        except Exception as e:
            print(f"✗ Error: {e}")
    
    # Save combined file
    full_text = "\n\n".join(all_content)
    FULL_OUTPUT.write_text(full_text, encoding='utf-8')
    print(f"\nบันทึกเนื้อหาทั้งหมดแล้ว: {FULL_OUTPUT}")
    print(f"รวม {len(full_text)} ตัวอักษร")

if __name__ == "__main__":
    main()

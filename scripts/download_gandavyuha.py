
import requests
import re
import os
from pathlib import Path

def download_chapter(book_id, chapter_no, output_path):
    # ใน DSBC ID 40 (Gandavyuha) บทที่ 1 จะมี URL ประมาณนี้
    # เราจะดึงจากหน้าเลขาธิการของมัน
    url = f"https://www.dsbcproject.org/canon-text/book/{book_id}"
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    print(f"กำลังดึงข้อมูลจาก {url}...")
    response = requests.get(url, headers=headers)
    
    # หาลิงก์ของบทที่ต้องการ
    # รูปแบบ: <a href="/canon-text/book-link/2744">1. Nidānaparivartaḥ</a>
    pattern = r'href="(/canon-text/book-link/\d+)"[^>]*>' + str(chapter_no) + r'\. ([^<]+)</a>'
    match = re.search(pattern, response.text)
    
    if match:
        chapter_url = "https://www.dsbcproject.org" + match.group(1)
        chapter_title = match.group(2)
        print(f"พบพระสูตรบทที่ {chapter_no}: {chapter_title}")
        print(f"กำลังดาวน์โหลดเนื้อหาจาก {chapter_url}...")
        
        chapter_response = requests.get(chapter_url, headers=headers)
        
        # ดึงเนื้อหาข้อความข้างใน (ลบ HTML)
        content_pattern = r'<div id="roman"[^>]*>(.*?)</div>'
        content_match = re.search(content_pattern, chapter_response.text, re.DOTALL)
        
        if content_match:
            html_content = content_match.group(1)
            # ลบแท็ก HTML พื้นฐาน
            clean_text = re.sub(r'<[^>]+>', '', html_content)
            clean_text = re.sub(r'\s+', ' ', clean_text).strip()
            
            # บันทึกไฟล์
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(f"Title: {chapter_no}. {chapter_title}\n")
                f.write(f"Source: {chapter_url}\n")
                f.write("-" * 50 + "\n\n")
                f.write(clean_text)
            
            print(f"บันทึกไฟล์เรียบร้อยที่: {output_path}")
            return True
    else:
        print(f"ไม่พบบทที่ {chapter_no}")
    return False

if __name__ == "__main__":
    # โหลด Gandavyuha (ID 40) บทที่ 1
    target_path = "/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana/translations/10_gandavyuha/chapter_001/original.txt"
    download_chapter("40", 1, target_path)

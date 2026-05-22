
import requests
import re
import os
import time

def fetch_gandavyuha():
    base_dir = "/home/chue-dekleb/team-bannathikan-pra-sutra-mahayana/translations/10_gandavyuha"
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    headers = {'User-Agent': user_agent}

    print("=== เริ่มดาวน์โหลดคัณฑวยูหะสูตร (56 บท) ===")

    for i in range(1, 57):
        # จัดการ ID พิเศษสำหรับ 2 บทสุดท้าย ตามข้อมูลที่ได้จาก DSBC
        url_id = i
        if i == 55: url_id = 56 # Samantabhadracaryāpraṇidhānam
        elif i == 56: url_id = 55 # Mañjuśrī

        url = f"https://www.dsbcproject.org/canon-text/content/40/{url_id}"
        chapter_dir = os.path.join(base_dir, f"chapter_{i:03d}")
        os.makedirs(chapter_dir, exist_ok=True)
        file_path = os.path.join(chapter_dir, "original.txt")

        try:
            print(f"กำลังดาวน์โหลดบทที่ {i} (ID: {url_id})...", end=" ", flush=True)
            response = requests.get(url, headers=headers, timeout=30)
            
            if response.status_code == 200:
                # สกัดเนื้อหาจาก <div id="roman">...</div>
                match = re.search(r'<div id="roman"[^>]*>(.*?)</div>', response.text, re.DOTALL)
                if match:
                    content = match.group(1)
                    # ลบแท็ก HTML และจัดรูปแบบใหม่
                    # แปลง <br> เป็นขึ้นบรรทัดใหม่
                    clean_text = re.sub(r'<br\s*/?>', '\n', content)
                    # แปลง &nbsp; เป็น space
                    clean_text = clean_text.replace('&nbsp;', ' ')
                    # ลบแท็กอื่นๆ
                    clean_text = re.sub(r'<[^>]+>', '', clean_text)
                    # จัดย่อหน้า (ลดบรรทัดว่างเกิน)
                    clean_text = re.sub(r'\n\s*\n', '\n\n', clean_text).strip()
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(f"Gaṇḍavyūha Sūtra - Chapter {i}\n")
                        f.write(f"Source: {url}\n")
                        f.write("-" * 50 + "\n\n")
                        f.write(clean_text)
                    print("✅ สำเร็จ")
                else:
                    print("❌ ไม่พบเนื้อหา (ID Roman)")
            else:
                print(f"❌ พลาด (Status: {response.status_code})")
        
        except Exception as e:
            print(f"❌ เกิดข้อผิดพลาด: {str(e)}")
        
        # หน่วงเวลาเล็กน้อยเพื่อไม่ให้โดนบล็อก
        time.sleep(0.5)

    print("\n=== ดาวน์โหลดเสร็จสมบูรณ์ ===")

if __name__ == "__main__":
    fetch_gandavyuha()

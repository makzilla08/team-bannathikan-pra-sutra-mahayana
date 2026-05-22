#!/usr/bin/env python3
"""
สคริปต์สำหรับดึงข้อมูลพระสูตรมหายานจาก DSBC Project

พระสูตรมหายานที่นิยมแพร่หลายในหลักฐานโบราณ:
1. พระสูตรปรมิตา (Prajñāpāramitā) - กลุ่มพระสูตรที่ใหญ่ที่สุด
2. พระสูตรสัทธรรมปุณฑรีก (Saddharmapuṇḍarīka) - พระสูตรดอกบัวขาว
3. พระสูตรลลิตวิสตระ (Lalitavistara) - ประวัติพระพุทธเจ้า
4. พระสูตรวิมลกีรตินิเทศ (Vimalakīrtinirdeśa) - สนทนาธรรม
5. พระสูตรทศภูมิก (Daśabhūmika) - 10 ภูมิของพระโพธิสัตว์
6. พระสูตรสุวรรณประภามหาสูตร (Suvarṇaprabhāsasūtra) - สุวรรณภูมิ
7. พระสูตรกัณฑวิภังค (Gaṇḍavyūha) - การเดินทางของสุธรรมติ
8. พระสูตรมหาปรินิพพาน (Mahāparinirvāṇa) - การปรินิพพาน
9. พระสูตร药师琉璃光王 (Bhaiṣajyaguru) - พระหมอ
10. พระสูตรสัทธรรมตังกราวตาร (Lankāvatāra) - การเสด็จลงโลก
"""

import json
import os
import re
import requests
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict, field
from pathlib import Path
from urllib.parse import urljoin

@dataclass
class SutraInfo:
    """ข้อมูลพระสูตร"""
    id: str
    title: str
    title_thai: Optional[str] = None
    author: Optional[str] = None
    category: str = "mahayana"
    url: Optional[str] = None
    chapters: List[Dict] = field(default_factory=list)
    status: str = "pending"  # pending, downloaded, translated, reviewed, approved
    importance: str = "high"  # high, medium, low - ระดับความสำคัญ

class DSBCFetcher:
    """คลาสสำหรับดึงข้อมูลจาก DSBC Project"""
    
    BASE_URL = "https://www.dsbcproject.org"
    
    def __init__(self, data_dir: str = "data"):
        self.data_dir = Path(data_dir)
        self.raw_dir = self.data_dir / "raw_sutras"
        self.processed_dir = self.data_dir / "processed"
        self.raw_dir.mkdir(parents=True, exist_ok=True)
        self.processed_dir.mkdir(parents=True, exist_ok=True)
        
    def get_mahayana_sutras_list(self) -> List[Dict]:
        """ดึงรายการพระสูตรมหายานจากหน้า Romanized"""
        sutras = []
        
        # URL สำหรับหน้า Romanized texts (URL ที่ถูกต้อง)
        url = f"{self.BASE_URL}/canon-text/browse-by-list/1"
        
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(url, headers=headers, timeout=30)
            response.raise_for_status()
            
            # วิเคราะห์ HTML เพื่อหาลิงก์พระสูตร
            # หาพระสูตรในหมวด sūtrapiṭaka (พระสูตร)
            pattern = r'<a href="https://www\.dsbcproject\.org/canon-text/book/(\d+)">\s*([^<]+)</a>'
            matches = re.findall(pattern, response.text)
            
            # กรองเฉพาะพระสูตรมหายานที่สำคัญ
            important_sutras = self._get_important_mahayana_sutras()
            important_ids = {s["id"] for s in important_sutras}
            
            for match in matches:
                sutra_id, title = match
                title = title.strip()
                
                # ตรวจสอบว่าเป็นพระสูตรที่สำคัญหรือไม่
                if sutra_id in important_ids:
                    # หารายการจาก important_sutras
                    sutra_info = next((s for s in important_sutras if s["id"] == sutra_id), None)
                    if sutra_info:
                        sutras.append(sutra_info)
                else:
                    # ตรวจสอบว่าอยู่ในหมวด sūtrapiṭaka หรือไม่
                    sutras.append({
                        "id": sutra_id,
                        "title": title,
                        "url": f"{self.BASE_URL}/canon-text/book/{sutra_id}",
                        "importance": "medium"
                    })
                
        except requests.RequestException as e:
            print(f"เกิดข้อผิดพลาดในการดึงข้อมูล: {e}")
            print("ใช้รายการพระสูตรตัวอย่างแทน")
            # ใช้ข้อมูลตัวอย่างถ้าไม่สามารถเชื่อมต่อได้
            sutras = self._get_important_mahayana_sutras()
            
        return sutras
    
    def _get_important_mahayana_sutras(self) -> List[Dict]:
        """
        พระสูตรมหายานที่นิยมแพร่หลายในหลักฐานโบราณ
        เลือกจากพระสูตรสำคัญที่มีหลักฐานมากมายและได้รับการแปลหลายภาษา
        """
        return [
            # กลุ่มพระสูตรปรมิตา (Prajñāpāramitā) - หลักคำสอนมหายาน
            {
                "id": "68",
                "title": "Aṣṭasāhasrikā prajñāpāramitā",
                "title_thai": "ปรมิตาอุตตรशัสตรสูตร (ปัญญาบารมี 8,000 บรรทัด)",
                "title_abbreviation": "8000_lines",
                "importance": "high",
                "description": "พระสูตรสำคัญที่สุดของมหายาน เกี่ยวกับความสมบูรณ์แห่งปัญญา",
                "url": f"{self.BASE_URL}/canon-text/book/68"
            },
            {
                "id": "66",
                "title": "Adhyardhaśatikā prajñāpāramitā",
                "title_thai": "อธยาธ Half - ร้อยครึ่ง ปรมิตาสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/66"
            },
            {
                "id": "67",
                "title": "Ārya advayaśatikā prajñāpāramitā",
                "title_thai": "อารยadvayaร้อย ปรมิตาสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/67"
            },
            {
                "id": "69",
                "title": "Kauśikaprajñāpāramitāsūtram",
                "title_thai": "เคาศิกปรมิตาสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/69"
            },
            
            # พระสูตรประวัติพระพุทธเจ้า
            {
                "id": "45",
                "title": "Lalitavistaraḥ",
                "title_thai": "ลลิตวิสตระสูตร (เรื่องประวัติพระพุทธเจ้าอย่างพิสดาร)",
                "title_abbreviation": "lalita",
                "importance": "high",
                "description": "พระสูตรประวัติพระพุทธเจ้าตั้งแต่ประสูติจนถึงตั้งพระธรรมจักร",
                "url": f"{self.BASE_URL}/canon-text/book/45"
            },
            
            # พระสูตรดอกบัวขาว
            {
                "id": "54",
                "title": "Saddharmapuṇḍarīkasūtram",
                "title_thai": "สัทธรรมปุณฑรีกสูตร (พระสูตรดอกบัวขาว)",
                "title_abbreviation": "lotus",
                "importance": "high",
                "description": "พระสูตรสำคัญเรื่องเอกภพและพระพุทธเจ้าหลายพระองค์",
                "url": f"{self.BASE_URL}/canon-text/book/54"
            },
            
            # พระสูตรวิมลกีรติ
            {
                "id": "35",
                "title": "Āryavimalakīrtinirdeśo nāma mahāyānasūtram",
                "title_thai": "วิมลกีรตินิเทศสูตร (อารยาวิมลกีรติ)",
                "title_abbreviation": "vimala",
                "importance": "high",
                "description": "พระสูตรสนทนาธรรมระหว่างพระพุทธเจ้ากับคฤหัสถ์ผู้ปฏิบัติดี",
                "url": f"{self.BASE_URL}/canon-text/book/35"
            },
            
            # พระสูตรทศภูมิก
            {
                "id": "39",
                "title": "Daśabhūmikasūtram",
                "title_thai": "ทศภูมิกสูตร (พระสูตร 10 ภูมิ)",
                "title_abbreviation": "10_bhumis",
                "importance": "high",
                "description": "พระสูตรสำคัญเรื่องการปฏิบัติของพระโพธิสัตว์ 10 ขั้น",
                "url": f"{self.BASE_URL}/canon-text/book/39"
            },
            
            # พระสูตรสุวรรณประภามหาสูตร
            {
                "id": "60",
                "title": "Suvarṇaprabhāsasūtram",
                "title_thai": "สุวรรณประภามหาสูตร (พระสูตรแสงทอง)",
                "title_abbreviation": "golden_light",
                "importance": "high",
                "description": "พระสูตรสำคัญเรื่องธรรมะเพื่อปกป้องแผ่นดินและราชวงศ์",
                "url": f"{self.BASE_URL}/canon-text/book/60"
            },
            
            # พระสูตรกัณฑวิภังค
            {
                "id": "40",
                "title": "Gaṇḍavyūha sūtram",
                "title_thai": "กัณฑวิภังคสูตร (การเดินทางของสุธรรมติ)",
                "title_abbreviation": "gandavyuha",
                "importance": "high",
                "description": "พระสูตรตอนท้ายของอวตังสกสูตร เรื่องการเดินทางแสวงบุญ",
                "url": f"{self.BASE_URL}/canon-text/book/40"
            },
            
            # พระสูตรมหาปรินิพพาน
            {
                "id": "48",
                "title": "Mahāparinirvāṇa sūtram",
                "title_thai": "มหาปรินิพพานสูตร (การปรินิพพานของพระพุทธเจ้า)",
                "title_abbreviation": "parinirvana",
                "importance": "high",
                "description": "พระสูตรเรื่องการปรินิพพานและคำสอนสุดท้ายของพระพุทธเจ้า",
                "url": f"{self.BASE_URL}/canon-text/book/48"
            },
            
            # พระสูตร药师琉璃光王 (พระหมอ)
            {
                "id": "36",
                "title": "Bhaiṣajyaguruvaidūryaprabharājasūtram",
                "title_thai": "พระสูตร药师琉璃光王 (พระหมอแสงแก้ว)",
                "title_abbreviation": "medicine_buddha",
                "importance": "high",
                "description": "พระสูตรเรื่องพระพุทธเจ้าพระองค์หนึ่งผู้รักษาโรค",
                "url": f"{self.BASE_URL}/canon-text/book/36"
            },
            
            # พระสูตรสัทธรรมตังกราวตาร
            {
                "id": "53",
                "title": "Saddharmalaṅkāvatārasūtram",
                "title_thai": "สัทธรรมตังกราวตารสูตร (พระสูตรเสด็จลงจากลังกา)",
                "title_abbreviation": "lankavatara",
                "importance": "high",
                "description": "พระสูตรสำคัญเรื่องธรรมะของพระโพธิสัตว์ มหายาน",
                "url": f"{self.BASE_URL}/canon-text/book/53"
            },
            
            # พระสูตรอื่นๆ ที่สำคัญ
            {
                "id": "43",
                "title": "Karuṇāpuṇḍarīka sūtram",
                "title_thai": "กรุณาปุณฑรีกสูตร (พระสูตรดอกบัวแห่งความกรุณา)",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/43"
            },
            {
                "id": "44",
                "title": "Kāśyapaparivarta sūtram",
                "title_thai": "กษัปะปริวรรตสูตร (พระสูตรบทกษัปะ)",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/44"
            },
            {
                "id": "41",
                "title": "Guṇakāraṇḍavyūha sūtram",
                "title_thai": "คุณกัณฑวิภังคสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/41"
            },
            {
                "id": "47",
                "title": "Mahāmegha sūtram",
                "title_thai": "มหาเมฆสูตร (เมฆใหญ่)",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/47"
            },
            {
                "id": "17",
                "title": "Mahāsannipātaratnaketudhāraṇī sūtraṃ",
                "title_thai": "มหาสันนิปาตราตนะเกตุธารณีสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/17"
            },
            {
                "id": "24",
                "title": "Aparimitāyuḥ nāma mahāyāna sūtram",
                "title_thai": "อปริมิตายุสูตร (อายุไม่สิ้นสุด)",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/24"
            },
            {
                "id": "9",
                "title": "Ārya amoghapāśahṛdaya nāma mahāyānasūtram",
                "title_thai": "อารยอมุคปาชาหฤทยสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/9"
            },
            {
                "id": "28",
                "title": "Āryapratītyasamutpādo nāma mahāyānasūtram",
                "title_thai": "อารยปฏิจจสมุปปาทสูตร (ปฏิจจสมุปบาท)",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/28"
            },
            {
                "id": "25",
                "title": "Arthaviniścayasūtram",
                "title_thai": "อัรธวินิศยสูตร",
                "importance": "medium",
                "url": f"{self.BASE_URL}/canon-text/book/25"
            }
        ]
    
    def get_book_details(self, book_id: str) -> Optional[Dict]:
        """ดึงรายละเอียดหนังสือ"""
        url = f"{self.BASE_URL}/canon-text/book/{book_id}"
        
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(url, headers=headers, timeout=30)
            response.raise_for_status()
            
            # วิเคราะห์ HTML เพื่อหาข้อมูล
            details = {
                "id": book_id,
                "url": url,
                "title": "",
                "bibliography": {},
                "chapters": []
            }
            
            # หาชื่อเรื่อง
            title_match = re.search(r'<h2[^>]*>([^<]+)</h2>', response.text)
            if title_match:
                details["title"] = title_match.group(1).strip()
            
            # หาลิงก์บทต่างๆ
            chapter_pattern = r'href="(/canon-text/book-link/\d+)"[^>]*>([^<]+)</a>'
            chapters = re.findall(chapter_pattern, response.text)
            
            for i, (path, title) in enumerate(chapters, 1):
                details["chapters"].append({
                    "number": i,
                    "title": title.strip(),
                    "url": urljoin(self.BASE_URL, path)
                })
                
            return details
            
        except requests.RequestException as e:
            print(f"เกิดข้อผิดพลาดในการดึงรายละเอียดหนังสือ {book_id}: {e}")
            return None
    
    def download_sutra_content(self, url: str, output_path: Path) -> bool:
        """ดาวน์โหลดเนื้อหาพระสูตร"""
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(url, headers=headers, timeout=60)
            response.raise_for_status()
            
            # บันทึกเนื้อหา
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(response.text)
                
            return True
            
        except requests.RequestException as e:
            print(f"เกิดข้อผิดพลาดในการดาวน์โหลด {url}: {e}")
            return False
    
    def process_html_to_text(self, html_path: Path, output_path: Path) -> bool:
        """แปลง HTML เป็นข้อความธรรมดา"""
        try:
            with open(html_path, 'r', encoding='utf-8') as f:
                html_content = f.read()
            
            # ลบแท็ก HTML (อย่างง่าย)
            text = re.sub(r'<[^>]+>', ' ', html_content)
            text = re.sub(r'\s+', ' ', text)
            text = text.strip()
            
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(text)
                
            return True
            
        except Exception as e:
            print(f"เกิดข้อผิดพลาดในการแปลง HTML: {e}")
            return False
    
    def create_sutra_metadata(self, sutra_info: SutraInfo) -> Dict:
        """สร้าง metadata สำหรับพระสูตร"""
        return {
            "id": sutra_info.id,
            "title": sutra_info.title,
            "title_thai": sutra_info.title_thai,
            "author": sutra_info.author,
            "category": sutra_info.category,
            "status": sutra_info.status,
            "importance": sutra_info.importance,
            "source_url": sutra_info.url,
            "chapters": sutra_info.chapters,
            "created_at": "2026-03-18",
            "version": "1.0"
        }
    
    def save_sutra_list(self, sutras: List[Dict]) -> None:
        """บันทึกรายการพระสูตร"""
        output_path = self.data_dir / "sutra_list.json"
        
        sutra_data = []
        for sutra in sutras:
            sutra_info = SutraInfo(
                id=sutra["id"],
                title=sutra["title"],
                title_thai=sutra.get("title_thai"),
                url=sutra.get("url"),
                importance=sutra.get("importance", "medium")
            )
            sutra_data.append(asdict(sutra_info))
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(sutra_data, f, ensure_ascii=False, indent=2)
        
        print(f"บันทึกรายการพระสูตร {len(sutra_data)} เรื่องไปยัง {output_path}")
        
        # แสดงรายการพระสูตรที่เลือก
        print("\n=== พระสูตรมหายานที่เลือกแปล ===")
        for i, sutra in enumerate(sutra_data, 1):
            print(f"{i}. {sutra['title_thai'] or sutra['title']}")
            print(f"   ต้นฉบับ: {sutra['title']}")
            print(f"   ระดับความสำคัญ: {sutra['importance']}")
            print()
    
    def fetch_all(self) -> None:
        """ดึงข้อมูลพระสูตรทั้งหมด"""
        print("กำลังดึงรายการพระสูตรมหายาน...")
        sutras = self.get_mahayana_sutras_list()
        
        print(f"พบพระสูตร {len(sutras)} เรื่อง")
        print("บันทึกรายการพระสูตร...")
        self.save_sutra_list(sutras)
        
        print("\nเสร็จสิ้น!")

def main():
    """ฟังก์ชันหลัก"""
    fetcher = DSBCFetcher()
    fetcher.fetch_all()

if __name__ == "__main__":
    main()

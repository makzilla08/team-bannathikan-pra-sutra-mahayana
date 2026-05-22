#!/usr/bin/env python3
"""
สคริปต์สำหรับจัดการงานแปลพระสูตรมหายาน
จัดการโครงสร้างโฟลเดอร์และติดตามความคืบหน้าสำหรับพระสูตรที่เลือกแปล
"""

import json
import os
from pathlib import Path
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict, field
from datetime import datetime

@dataclass
class TranslationTask:
    """งานแปล"""
    sutra_id: str
    chapter_number: int
    translator: str
    status: str  # pending, in_progress, review, completed
    assigned_date: str
    due_date: Optional[str] = None
    notes: List[str] = field(default_factory=list)

class TranslationManager:
    """คลาสสำหรับจัดการงานแปลพระสูตรมหายาน"""
    
    # พระสูตรมหายานที่นิยมในหลักฐานโบราณ - 优先แปลก่อน
    PRIORITY_SUTRAS = [
        {
            "id": "68",
            "title": "Aṣṭasāhasrikā prajñāpāramitā",
            "title_thai": "ปรมิตาอุตตรशัสตรสูตร",
            "priority": 1,
            "description": "ปัญญาบารมี 8,000 บรรทัด - พระสูตรสำคัญที่สุดของมหายาน"
        },
        {
            "id": "54",
            "title": "Saddharmapuṇḍarīkasūtram", 
            "title_thai": "สัทธรรมปุณฑรีกสูตร",
            "priority": 2,
            "description": "พระสูตรดอกบัวขาว - เรื่องเอกภพและพระพุทธเจ้าหลายพระองค์"
        },
        {
            "id": "45",
            "title": "Lalitavistaraḥ",
            "title_thai": "ลลิตวิสตระสูตร",
            "priority": 3,
            "description": "ประวัติพระพุทธเจ้าอย่างพิสดาร"
        },
        {
            "id": "35",
            "title": "Āryavimalakīrtinirdeśo nāma mahāyānasūtram",
            "title_thai": "วิมลกีรตินิเทศสูตร",
            "priority": 4,
            "description": "สนทนาธรรมระหว่างพระพุทธเจ้ากับคฤหัสถ์ผู้ปฏิบัติดี"
        },
        {
            "id": "39",
            "title": "Daśabhūmikasūtram",
            "title_thai": "ทศภูมิกสูตร",
            "priority": 5,
            "description": "การปฏิบัติของพระโพธิสัตว์ 10 ขั้น"
        },
        {
            "id": "60",
            "title": "Suvarṇaprabhāsasūtram",
            "title_thai": "สุวรรณประภามหาสูตร",
            "priority": 6,
            "description": "ธรรมะเพื่อปกป้องแผ่นดินและราชวงศ์"
        },
        {
            "id": "48",
            "title": "Mahāparinirvāṇa sūtram",
            "title_thai": "มหาปรินิพพานสูตร",
            "priority": 7,
            "description": "การปรินิพพานและคำสอนสุดท้ายของพระพุทธเจ้า"
        },
        {
            "id": "36",
            "title": "Bhaiṣajyaguruvaidūryaprabharājasūtram",
            "title_thai": "พระสูตร药师琉璃光王",
            "priority": 8,
            "description": "พระหมอแสงแก้ว - พระพุทธเจ้าผู้รักษาโรค"
        },
        {
            "id": "53",
            "title": "Saddharmalaṅkāvatārasūtram",
            "title_thai": "สัทธรรมตังกราวตารสูตร",
            "priority": 9,
            "description": "ธรรมะของพระโพธิสัตว์มหายาน"
        },
        {
            "id": "40",
            "title": "Gaṇḍavyūha sūtram",
            "title_thai": "กัณฑวิภังคสูตร",
            "priority": 10,
            "description": "การเดินทางแสวงบุญของสุธรรมติ"
        }
    ]
    
    def __init__(self, project_dir: str = "."):
        self.project_dir = Path(project_dir)
        self.translations_dir = self.project_dir / "translations"
        self.data_dir = self.project_dir / "data"
        self.docs_dir = self.project_dir / "docs"
        
        # สร้างโฟลเดอร์ถ้ายังไม่มี
        self.translations_dir.mkdir(parents=True, exist_ok=True)
    
    def create_translation_structure(self, sutra_id: str, title: str, 
                                   title_thai: str = "", priority: int = 99,
                                   description: str = "") -> Path:
        """สร้างโครงสร้างโฟลเดอร์สำหรับพระสูตร"""
        sutra_dir = self.translations_dir / f"sutra_{sutra_id}"
        sutra_dir.mkdir(parents=True, exist_ok=True)
        
        # สร้างไฟล์ต่างๆ
        files = {
            "original.txt": f"# {title}\n\n## ข้อมูลพระสูตร\n- **รหัส**: {sutra_id}\n- **ชื่อสันสกฤต**: {title}\n- **ชื่อไทย**: {title_thai}\n- **คำอธิบาย**: {description}\n\n[เนื้อหาต้นฉบับจะถูกเพิ่มที่นี่]\n",
            "translation.md": f"# การแปล: {title_thai or title}\n\n## ข้อมูลพระสูตร\n- **รหัส**: {sutra_id}\n- **ชื่อสันสกฤต**: {title}\n- **ชื่อไทย**: {title_thai}\n- **สถานะ**: ยังไม่เริ่มแปล\n- **ความสำคัญ**: ลำดับที่ {priority}\n\n## การแปล\n\n[การแปลจะถูกเพิ่มที่นี่]\n",
            "notes.md": f"# หมายเหตุ: {title_thai or title}\n\n## คำศัพท์เฉพาะ\n\n| สันสกฤต | ไทย | หมายเหตุ |\n|---------|-----|----------|\n\n## ข้อสงสัย\n\n[ข้อสงสัยจะถูกเพิ่มที่นี่]\n\n## แหล่งอ้างอิง\n\n[แหล่งอ้างอิงจะถูกเพิ่มที่นี่]\n",
            "glossary.md": f"# คำศัพท์เฉพาะ: {title_thai or title}\n\n## คำสำคัญ\n\n| สันสกฤต | ไทย | ความหมาย |\n|---------|-----|----------|\n\n## คำศัพท์ยาก\n\n| สันสกฤต | ไทย | หมายเหตุ |\n|---------|-----|----------|\n",
            "metadata.json": json.dumps({
                "sutra_id": sutra_id,
                "title": title,
                "title_thai": title_thai,
                "description": description,
                "priority": priority,
                "created_at": datetime.now().isoformat(),
                "status": "pending",
                "translators": [],
                "proofreaders": [],
                "last_updated": datetime.now().isoformat()
            }, ensure_ascii=False, indent=2)
        }
        
        for filename, content in files.items():
            file_path = sutra_dir / filename
            if not file_path.exists():
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
        
        return sutra_dir
    
    def create_priority_sutras(self) -> None:
        """สร้างโครงสร้างสำหรับพระสูตรที่มีความสำคัญสูง"""
        print("สร้างโครงสร้างไฟล์สำหรับพระสูตรมหายานที่สำคัญ...")
        
        for sutra in self.PRIORITY_SUTRAS:
            print(f"สร้างโครงสร้าง: {sutra['title_thai']} ({sutra['title']})")
            self.create_translation_structure(
                sutra_id=sutra["id"],
                title=sutra["title"],
                title_thai=sutra["title_thai"],
                priority=sutra["priority"],
                description=sutra["description"]
            )
        
        print(f"สร้างโครงสร้างพระสูตรที่สำคัญ {len(self.PRIORITY_SUTRAS)} เรื่อง เสร็จสิ้น!")
    
    def create_chapter_files(self, sutra_id: str, chapter_number: int, 
                           title: str, original_text: str = "") -> Path:
        """สร้างไฟล์สำหรับแต่ละบท"""
        sutra_dir = self.translations_dir / f"sutra_{sutra_id}"
        chapter_dir = sutra_dir / f"chapter_{chapter_number:03d}"
        chapter_dir.mkdir(parents=True, exist_ok=True)
        
        # สร้างไฟล์ต้นฉบับ
        original_path = chapter_dir / "original.txt"
        if not original_path.exists():
            with open(original_path, 'w', encoding='utf-8') as f:
                f.write(f"# บทที่ {chapter_number}: {title}\n\n")
                if original_text:
                    f.write(original_text)
        
        # สร้างไฟล์แปล
        translation_path = chapter_dir / "translation.md"
        if not translation_path.exists():
            with open(translation_path, 'w', encoding='utf-8') as f:
                f.write(f"# การแปล: บทที่ {chapter_number} - {title}\n\n")
                f.write("## ข้อมูลการแปล\n")
                f.write(f"- **บทที่**: {chapter_number}\n")
                f.write(f"- **ชื่อบท**: {title}\n")
                f.write("- **นักแปล**: [ชื่อนักแปล]\n")
                f.write("- **วันที่มอบหมาย**: [วันที่]\n")
                f.write("- **สถานะ**: ยังไม่เริ่มแปล\n\n")
                f.write("## การแปล\n\n[การแปลจะถูกเพิ่มที่นี่]\n")
        
        # สร้างไฟล์หมายเหตุ
        notes_path = chapter_dir / "notes.md"
        if not notes_path.exists():
            with open(notes_path, 'w', encoding='utf-8') as f:
                f.write(f"# หมายเหตุ: บทที่ {chapter_number} - {title}\n\n")
                f.write("## จุดที่ต้องตรวจสอบ\n\n- [ ] [ระบุจุดที่ต้องตรวจสอบ]\n\n")
                f.write("## ข้อเสนอแนะ\n\n[ข้อเสนอแนะจากผู้ตรวจสอบ]\n")
        
        return chapter_dir
    
    def load_sutra_list(self) -> List[Dict]:
        """โหลดรายการพระสูตร"""
        sutra_list_path = self.data_dir / "sutra_list.json"
        if sutra_list_path.exists():
            with open(sutra_list_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return []
    
    def initialize_all_sutras(self) -> None:
        """สร้างโครงสร้างไฟล์สำหรับพระสูตรทั้งหมด"""
        sutras = self.load_sutra_list()
        
        print(f"สร้างโครงสร้างไฟล์สำหรับพระสูตร {len(sutras)} เรื่อง...")
        
        for sutra in sutras:
            sutra_id = sutra["id"]
            title = sutra.get("title_thai") or sutra["title"]
            title_thai = sutra.get("title_thai", "")
            priority = 99 if sutra.get("importance") != "high" else 50
            
            print(f"สร้างโครงสร้าง: {title}")
            self.create_translation_structure(
                sutra_id=sutra_id,
                title=sutra["title"],
                title_thai=title_thai,
                priority=priority
            )
            
            # สร้างไฟล์สำหรับบทต่างๆ (ถ้ามีข้อมูล)
            chapters = sutra.get("chapters", [])
            if chapters:
                for chapter in chapters:
                    self.create_chapter_files(
                        sutra_id=sutra_id,
                        chapter_number=chapter["number"],
                        title=chapter["title"]
                    )
        
        print("สร้างโครงสร้างเสร็จสิ้น!")
    
    def generate_translation_report(self) -> Dict:
        """สร้างรายงานความคืบหน้าการแปล"""
        report = {
            "total_sutras": 0,
            "priority_sutras": 0,
            "completed": 0,
            "in_progress": 0,
            "pending": 0,
            "not_started": 0,
            "details": [],
            "priority_details": []
        }
        
        sutras = self.load_sutra_list()
        report["total_sutras"] = len(sutras)
        
        # ตรวจสอบพระสูตรที่มีความสำคัญสูง
        priority_ids = {s["id"] for s in self.PRIORITY_SUTRAS}
        
        for sutra in sutras:
            sutra_dir = self.translations_dir / f"sutra_{sutra['id']}"
            is_priority = sutra['id'] in priority_ids
            
            if is_priority:
                report["priority_sutras"] += 1
            
            if (sutra_dir / "metadata.json").exists():
                with open(sutra_dir / "metadata.json", 'r', encoding='utf-8') as f:
                    metadata = json.load(f)
                    status = metadata.get("status", "pending")
                    
                    if status == "completed":
                        report["completed"] += 1
                    elif status == "in_progress":
                        report["in_progress"] += 1
                    elif status == "pending":
                        report["pending"] += 1
                    else:
                        report["not_started"] += 1
                    
                    detail = {
                        "id": sutra["id"],
                        "title": sutra.get("title_thai") or sutra["title"],
                        "status": status,
                        "is_priority": is_priority
                    }
                    
                    if is_priority:
                        report["priority_details"].append(detail)
                    else:
                        report["details"].append(detail)
            else:
                report["not_started"] += 1
                detail = {
                    "id": sutra["id"],
                    "title": sutra.get("title_thai") or sutra["title"],
                    "status": "not_started",
                    "is_priority": is_priority
                }
                
                if is_priority:
                    report["priority_details"].append(detail)
                else:
                    report["details"].append(detail)
        
        return report
    
    def save_report(self, report: Dict) -> None:
        """บันทึกรายงาน"""
        report_path = self.docs_dir / "translation_progress.json"
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        
        print(f"บันทึกรายงานไปยัง {report_path}")
        
        # สร้างรายงาน markdown สำหรับอ่านง่าย
        md_report_path = self.docs_dir / "translation_progress.md"
        with open(md_report_path, 'w', encoding='utf-8') as f:
            f.write("# รายงานความคืบหน้าการแปลพระสูตรมหายาน\n\n")
            f.write(f"**วันที่อัปเดต**: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n")
            f.write("## สรุป\n\n")
            f.write(f"- พระสูตรทั้งหมด: {report['total_sutras']} เรื่อง\n")
            f.write(f"- พระสูตรที่สำคัญ (优先แปล): {report['priority_sutras']} เรื่อง\n")
            f.write(f"- แปลเสร็จแล้ว: {report['completed']} เรื่อง\n")
            f.write(f"- กำลังแปล: {report['in_progress']} เรื่อง\n")
            f.write(f"- ยังไม่เริ่ม: {report['pending']} เรื่อง\n")
            f.write(f"- ยังไม่ได้สร้างโครงสร้าง: {report['not_started']} เรื่อง\n\n")
            
            f.write("## พระสูตรที่จะแปลก่อน (Priority)\n\n")
            f.write("| ลำดับ | ชื่อไทย | ชื่อสันสกฤต | สถานะ |\n")
            f.write("|-------|---------|-------------|--------|\n")
            for sutra in sorted(report["priority_details"], key=lambda x: x["id"]):
                f.write(f"| {sutra['id']} | {sutra['title']} | - | {sutra['status']} |\n")
        
        print(f"บันทึกรายงาน markdown ไปยัง {md_report_path}")

def main():
    """ฟังก์ชันหลัก"""
    manager = TranslationManager()
    
    print("=== การจัดการงานแปลพระสูตรมหายาน ===\n")
    
    print("1. สร้างโครงสร้างสำหรับพระสูตรที่สำคัญ (Priority)...")
    manager.create_priority_sutras()
    
    print("\n2. สร้างรายงานความคืบหน้า...")
    report = manager.generate_translation_report()
    manager.save_report(report)
    
    print(f"\n=== สรุป ===")
    print(f"พระสูตรทั้งหมด: {report['total_sutras']} เรื่อง")
    print(f"พระสูตรที่สำคัญ (优先แปล): {report['priority_sutras']} เรื่อง")
    print(f"แปลเสร็จแล้ว: {report['completed']} เรื่อง")
    print(f"กำลังแปล: {report['in_progress']} เรื่อง")
    print(f"ยังไม่เริ่ม: {report['pending']} เรื่อง")
    print(f"\nโครงสร้างไฟล์พร้อมสำหรับเริ่มแปล!")

if __name__ == "__main__":
    main()

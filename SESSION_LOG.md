# Session Log — แปลพระสูตรมหายาน

บันทึกการทำงานข้าม session สำหรับโปรเจคแปลพระสูตรมหายาน

## วิธีใช้
- เปิด session ใหม่: อ่านไฟล์นี้ก่อน
- session เสร็จ: ให้ผู้ใช้ยืนยันก่อนเขียนสรุปเพิ่ม

---

## 2026-07-27 — Session 2: มหาปรินิพพานสูตร — ย้ายจาก DSBC มาเป็นมหายานฉบับเต็ม 46 บท

### Critical Context
- DSBC book 48 ที่แปลไปก่อนหน้านี้เป็นแค่ **เสี้ยวแรกของมหายานสูตร** (Introductory narrative)
- มหายานมหาปรินิพพานสูตรที่แท้จริงมี **46 บท** 411,786 คำ (Yamamoto/Page แปลจาก Dharmakṣema จีน Taisho 374)
- โครงสร้างบทที่ถูกต้อง: 46 บท แบ่งเป็น 10 Sections
- wisdomlib มีให้อ่านฟรีทั้ง 46 บท

### Done
- ดาวน์โหลดต้นฉบับอังกฤษทั้ง 46 บทจาก wisdomlib → `chapter_XXX/original.txt`
- แปล **บทที่ 1 (Introductory)** เสร็จ — 9,455 คำ
- ย้ายไฟล์ DSBC เก่าไป `_backup_dsbc/`
- อัปเดต `metadata.json` → 46 chapters, new source URL
- อัปเดต `notes.md` → แหล่งที่มา โครงสร้าง หมายเหตุ
- อัปเดต `web/js/data.js` → 46 chapters, status = in_progress
- Commit + Push ขึ้น GitHub Pages แล้ว (`99f2de2`)

### Chapters Status
- Chapter 1 (Introductory): ✅ translated
- Chapters 2-46: ⏳ ต้นฉบับพร้อม รอแปล

### Pending
- แปลบทที่ 2 (On Cunda) ต่อไป
- ตรวจสอบการแสดงผลบน GitHub Pages

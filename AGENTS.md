# คู่มือการทำงาน - โครงการแปลพระสูตรมหายาน

แปลเนื้อหาทั้งหมดตามต้นฉบับ ไม่ย่อ ไม่สรุป สำนวนลื่นไหลอ่านง่าย

## Session Memory System

เมื่อเริ่ม session ใหม่ทุกครั้ง ให้อ่าน `SESSION_LOG.md` ของโปรเจคนี้ก่อน เพื่อดูว่ารอบก่อนทำอะไรไปแล้ว

เมื่อทำงานเสร็จ ให้ถามผู้ใช้ว่าต้องการเขียนสรุปลง SESSION_LOG.md หรือไม่ 

## เมื่อแปลพระสูตรเสร็จ ต้องทำสิ่งเหล่านี้

### 0. พิสูจน์อักษร (ต้องทำก่อนอัปโหลด!)
- [ ] ตรวจว่า **ไม่มีอักษรจีน** หลงเหลือ (域界, 从中, possibility, etc.)
- [ ] ตรวจว่า **ไม่มีอังกฤษ** หลงเหลือ (manifest, Glory, show, Putra, etc.)
- [ ] ตรวจว่า **ไม่มีญี่ปุ่น/เกาหลี/รัสเซีย** หลงเหลือ
- [ ] ตรวจว่า **ชื่อพระสาวกเป็นภาษาไทย** ทั้งหมด (สารีบุตร โมคคัลลานะ ฯลฯ)
- [ ] ตรวจว่า **สันสกฤตทับศัพท์ถูกต้อง** ตาม glossary.md
- [ ] ตรวจว่า **ไม่มีคำซ้ำ** หรือ fragment ที่ค้างจากการแปล
- คำสั่งตรวจ: `grep -Pn '[\x{4e00}-\x{9fff}]' translation.md` → ต้องไม่พบ

### 1. แปลเนื้อหา
- แปลจาก `translations/XX_sutra_name/chapter_XXX/original.txt`
- บันทึกที่ `translations/XX_sutra_name/chapter_XXX/translation.md`
- ใช้ศัพท์มหายานที่ถูกต้อง (ดู glossary.md)

### 2. อัปเดต glossary
- เพิ่มคำศัพท์ใหม่ที่พบใน `translations/XX_sutra_name/glossary.md`
- บันทึกความหมายและหมายเหตุ

### 3. อัปเดต notes
- บันทึกประเด็นสำคัญใน `translations/XX_sutra_name/notes.md`
- บันทึกปัญหาและข้อสงสัย

### 4. อัปเดต HTML (สำคัญ!)
- **ต้อง** อัปเดต `web/js/data.js` ให้ตรงกับ translation.md
- เปลี่ยน status จาก "pending" เป็น "completed" หรือ "in_progress"
- แก้ไข title_thai ให้ใช้คำแปลที่ถูกต้อง
- เพิ่มเนื้อหาใน CHAPTER_CONTENT ถ้าต้องการแสดงแบบ verse-by-verse

### 5. อัปเดตเอกสารโครงการ
- `translations/XX_sutra_name/README.md` - อัปเดตสถานะบท
- `translations/README.md` - อัปเดตสถานะรวม
- `docs/translation_progress.md` - อัปเดตความคืบหน้า

### 6. ทำให้แสดงผลบน GitHub Pages (สำคัญ!)
- ไฟล์ `translation.md` อยู่ที่ `translations/XX_sutra_name/chapter_XXX/translation.md` โดยตรง
- อัปเดต `web/js/app.js` → เพิ่ม `sutra.id` ใน `getTranslationMarkdownUrl()` ถ้ายังไม่มี
- อัปเดต `web/js/data.js` → อัปเดต status/chapters ให้ตรง
- ทดสอบเปิด reader ที่ `web/reader.html?sutra=XX&chapter=1` ใน local ก่อน push
- คำสั่ง push: `git add -A && git commit -m "..." && git push`
- GitHub Pages auto-deploy ภายใน 1-2 นาที ที่ https://makzilla08.github.io/team-bannathikan-pra-sutra-mahayana/
- **GitHub Pages deploy source ต้องตั้งค่าเป็น root (/) ไม่ใช่ /docs**

## โครงสร้างไฟล์สำคัญ

```
project/
├── translations/
│   ├── 04_vimalakirti/
│   │   ├── README.md           # ข้อมูลพระสูตร
│   │   ├── glossary.md         # คำศัพท์เฉพาะ
│   │   ├── notes.md            # บันทึกการแปล
│   │   ├── original.txt        # ต้นฉบับสันสกฤต
│   │   ├── chapter_001/
│   │   │   ├── original.txt
│   │   │   └── translation.md
│   │   └── chapter_002/
│   │       ├── original.txt
│   │       ├── translation.md
│   │       └── notes.md
│   ├── sarvastivada/           # หมวดสรวาสติวาท
│   │   ├── agama/
│   │   ├── abhidharma/
│   │   └── vinaya/
│   └── README.md               # สารบัญพระสูตรทั้งหมด
├── web/
│   ├── js/
│   │   ├── data.js             # ข้อมูลพระสูตรมหายานสำหรับเว็บ
│   │   ├── app.js              # JavaScript หลัก (มหายาน reader)
│   │   ├── sarvastivada_data.js # ข้อมูลคัมภีร์สรวาสติวาท
│   │   └── sarvastivada_app.js # JavaScript หลัก (สรวาสติวาท reader)
│   ├── css/
│   │   └── style.css
│   ├── index.html              # หน้าหลักมหายาน
│   ├── sarvastivada_index.html # หน้าหลักสรวาสติวาท
│   └── reader.html             # หน้าอ่านพระสูตร (ใช้ร่วมกัน)
├── index.html                  # redirect → web/
└── docs/                       # เอกสารโครงการ (ไม่ใช่เว็บ)
    ├── translation_progress.md # รายงานความคืบหน้า
    ├── translation_guidelines.md
    └── team_structure.md
```

## ศัพท์มหายานที่ต้องใช้ให้ถูกต้อง

| สันสกฤต | ต้องใช้ | ห้ามใช้ |
|---------|---------|---------|
| buddhakṣetra | พุทธเกษตร | ศาสนสถาน, ภูมิพุทธะ |
| bodhisattva | พระโพธิสัตว์ | - |
| mahāyāna | มหายาน | - |
| lokadhātu | โลกธาตุ | - |

## รูปแบบการแปล

1. **ภาษาไทยที่สละสลวย** - อ่านง่าย ไม่ติดสำนวนสันสกฤต
2. **แบ่งย่อหน้า** - วรรคยาวๆ ควรแบ่งเป็นย่อหน้าสั้น
3. **คาถา** - จัดรูปแบบด้วย > blockquote
4. **หมายเหตุ** - ใช้ *ตัวเอียง* สำหรับหมายเหตุ

## เป้าหมายของโปรเจ็ค

งานแปลแต่ละส่วนจะถือว่า "เสร็จสมบูรณ์" เมื่อเนื้อหาขึ้นแสดงบน **GitHub Pages** แล้วเท่านั้น ขั้นตอนสุดท้ายของทุกพระสูตรคือ **commit + push** ไปที่ `master` branch (GitHub Pages auto-deploy จาก root `/`) 

GitHub Pages deploy source ตั้งค่าเป็น root (/) ไม่ใช่ /docs แล้ว

URL: https://makzilla08.github.io/team-bannathikan-pra-sutra-mahayana/

## เมื่อโมเดลอื่นมาทำงานต่อ

1. อ่านไฟล์นี้ก่อน (AGENTS.md)
2. ตรวจสอบ `docs/translation_progress.md` ว่าแปลถึงไหนแล้ว
3. ตรวจสอบ `translations/04_vimalakirti/README.md` ว่าบทไหนแปลแล้ว
4. อ่าน `translations/04_vimalakirti/glossary.md` เพื่อใช้ศัพท์ให้ถูกต้อง
5. แปลบทถัดไปที่ยังไม่แปล
6. **อย่าลืมอัปเดต web/js/data.js ด้วย**
7. **อย่าลืม push ขึ้น GitHub เพื่อให้ขึ้นหน้าเว็บ**

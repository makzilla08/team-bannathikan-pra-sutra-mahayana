# คู่มือการทำงาน - โครงการแปลพระสูตรมหายาน

แปลเนื้อหาทั้งหมดตามต้นฉบับ ไม่ย่อ ไม่สรุป สำนวนลื่นไหลอ่านง่าย 

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
- แยก `translation.md` → `chapter_XXX/translation.md` (บทละไฟล์, รูปแบบไฟล์ละ 1 บท)
- คัดลอก chapter folders ไปที่ `docs/translations/XX_sutra_name/chapter_XXX/translation.md` (ให้ GitHub Pages serve ได้)
- อัปเดต `docs/web/js/app.js` → เพิ่ม `sutra.id` ใน `getTranslationMarkdownUrl()` ถ้ายังไม่มี
- ทดสอบเปิด reader ที่ `reader.html?sutra=XX&chapter=1` ใน local ก่อน push
- คำสั่ง push: `git add -A && git commit -m "..." && git push`
- GitHub Pages auto-deploy ภายใน 1-2 นาที ที่ https://makzilla08.github.io/team-bannathikan-pra-sutra-mahayana/

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
│   └── README.md               # สารบัญพระสูตรทั้งหมด
├── web/
│   ├── js/
│   │   ├── data.js             # ข้อมูลพระสูตรสำหรับเว็บ
│   │   └── app.js              # JavaScript หลัก
│   ├── css/
│   │   └── style.css
│   ├── index.html              # หน้าหลัก
│   └── reader.html             # หน้าอ่านพระสูตร
└── docs/
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

งานแปลแต่ละส่วนจะถือว่า "เสร็จสมบูรณ์" เมื่อเนื้อหาขึ้นแสดงบน **GitHub Pages** แล้วเท่านั้น ขั้นตอนสุดท้ายของทุกพระสูตรคือ **commit + push** ไปที่ `master` branch (GitHub Pages auto-deploy จาก `docs/` folder)

URL: https://makzilla08.github.io/team-bannathikan-pra-sutra-mahayana/

## เมื่อโมเดลอื่นมาทำงานต่อ

1. อ่านไฟล์นี้ก่อน (AGENTS.md)
2. ตรวจสอบ `docs/translation_progress.md` ว่าแปลถึงไหนแล้ว
3. ตรวจสอบ `translations/04_vimalakirti/README.md` ว่าบทไหนแปลแล้ว
4. อ่าน `translations/04_vimalakirti/glossary.md` เพื่อใช้ศัพท์ให้ถูกต้อง
5. แปลบทถัดไปที่ยังไม่แปล
6. **อย่าลืมอัปเดต web/js/data.js ด้วย**
7. **อย่าลืม push ขึ้น GitHub เพื่อให้ขึ้นหน้าเว็บ**

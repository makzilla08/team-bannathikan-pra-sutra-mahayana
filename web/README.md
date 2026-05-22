# สำนักพิมพ์พระสูตรมหายาน - Web Interface

## ไฟล์
- `index.html` - หน้าหลักแสดงรายการพระสูตร
- `reader.html` - หน้าอ่านพระสูตร
- `css/style.css` - สไตล์โทนดำ-ทอง
- `js/data.js` - ข้อมูลพระสูตร (สถานะ)
- `js/app.js` - JavaScript สำหรับจัดการหน้าเว็บ

## การใช้งานแบบ local
เปิดผ่าน local HTTP server จากโฟลเดอร์ `web/`:
```bash
# Python
cd web
python3 -m http.server 8000

# Node.js
cd web
npx serve .
```

จากนั้นเปิด:
```text
http://127.0.0.1:8000/index.html
```

## การสร้างเนื้อหา

เนื้อหา reader โหลดจากไฟล์ local ใน `web/content/` ผ่าน `web/js/chapter_index.js`.
หลังแก้ไฟล์แปลใน `translations/10_gandavyuha/chapter_*/translation.md` ให้รันจาก root project:
```bash
python3 scripts/sync_all_gandavyuha.py
```

## โครงสร้าง
- โทนสี: ดำ-ทอง (สง่างาม เหมาะกับพระสูตร)
- Responsive: รองรับมือถือ
- ไม่แสดงสันสกฤตตามค่าเริ่มต้น (คลิก "แสดงสันสกฤต" เพื่อดู)

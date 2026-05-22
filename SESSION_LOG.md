# Session Log — แปลพระสูตรมหายาน

บันทึกการทำงานข้าม session สำหรับโปรเจคแปลพระสูตรมหายาน

## วิธีใช้
- เปิด session ใหม่: อ่านไฟล์นี้ก่อน
- session เสร็จ: ให้ผู้ใช้ยืนยันก่อนเขียนสรุปเพิ่ม

---

## 2026-05-22 — Session 1: ปรับโครงสร้างเว็บ + เตรียมหมวดสรวาสติวาท

### Done
- สร้าง `web/js/sarvastivada_data.js` — metadata คัมภีร์สรวาสติวาท 9 เรื่อง (3 หมวด)
- สร้าง `web/sarvastivada_index.html` — หน้าแยกหมวดสรวาสติวาท
- สร้าง `web/js/sarvastivada_app.js` — JS สำหรับหน้าใหม่
- **ย้ายโครงสร้างเว็บ:** `docs/web/` → `web/`, `docs/translations/` → `translations/`
- ลบของเก่า `docs/web/` และ `docs/translations/` ออก
- สร้าง `index.html` ที่ root (redirect → web/)
- อัปเดต `docs/index.html`, `AGENTS.md` ให้ตรงกับโครงสร้างใหม่

### Critical Context
- **ต้องเปลี่ยน GH Pages deploy source จาก `/docs` เป็น `/` (root)** ใน repo Settings → Pages ไม่งั้นไฟล์นอก `docs/` จะ 404
- `app.js` path logic ใช้ `window.location.pathname.includes('/web/')` เพื่อหา `basePath` ซึ่งยังใช้ได้กับตำแหน่งใหม่โดยไม่ต้องแก้
- `reader.html` ใช้ร่วมกับทั้ง Mahayana และ Sarvāstivādata

### Files Changed
- `web/js/sarvastivada_data.js` — ใหม่
- `web/sarvastivada_index.html` — ใหม่
- `web/js/sarvastivada_app.js` — ใหม่
- `index.html` — ใหม่ (root redirect)
- `AGENTS.md` — โครงสร้างไฟล์ + deploy instructions
- `docs/index.html` — อัปเดต redirect path

---

## 2026-05-22 — Session 2: Fix data.js, chapter expansion, dynamic folder path

### Done
- **แก้ `data.js` syntax**: 53 คัมภีร์ syntax OK — เพิ่ม `folder` field, ลบ `FOLDER_MAP` hardcode ออกจาก `app.js` ใช้ `sutra.folder` dynamic แทน
- **ขยาย chapters arrays**: 9 คัมภีร์ที่ดาวน์โหลดหลายบทแล้ว (Aṣṭasāhasrikā 32, Saddharmapuṇḍarīka 27, Suvarṇaprabhāsa 21, Samādhirāja 40, Kāraṇḍavyūha 24, Guṇakāraṇḍavyūha 20, Daśabhūmika 22, Karuṇāpuṇḍarīka 6, Āryarāṣṭrapālaparipṛcchā 2) — chapters_count และ chapters[] อัปเดตเรียบร้อย
- **Cleanup**: ลบ stub duplicates 5 folders (`sutra_5`, `sutra_35`, `sutra_48`, `sutra_54`, `sutra_60`), ลบ nested `translations/translations/`
- **Fix missing commas**: แก้ comma syntax errors หลายตำแหน่งใน `data.js` ที่เกิดจาก task agent และจากการ replace chapters array
- `app.js` — clean version เหลือแค่ฟังก์ชัน `getTranslationMarkdownUrl` ที่ใช้ `sutra.folder`

### Files Changed
- `web/js/data.js` — +folder field, chapters expanded, syntax fixed
- `web/js/app.js` — ลบ FOLDER_MAP, ใช้ sutra.folder dynamic
- `SESSION_LOG.md` — append session 2

### Blocked (unchanged)
- GH Pages deploy source ยังต้องเปลี่ยนจาก `/docs` → `/ (root)`

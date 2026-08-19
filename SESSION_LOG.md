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

## 2026-07-28 — Session 3-7: แปลครบทุกบท + เผยแพร่

### Done
- แปลบทที่ 3-8 (On Grief, On Long Life, Adamantine Body, Virtue of Name, Four Aspects, Four Dependables)
- แปลบทที่ 9-14 (Wrong and Right, Four Truths, Four Inversions, Tathagatagarbha, Letters, Parable of Birds)
- แปลบทที่ 15-23 (Parable of Moon, Bodhisattva, Crowd's Questions, Actual Illness, Holy Actions a-b, Pure Actions a-c)
- แปลบทที่ 24-30 (Pure Actions d-e, Action of Child, Highly-Virtuous King a-d)
- แปลบทที่ 31-38 (Highly-Virtuous King e-f, Lion's Roar a-f)
- แปลบทที่ 39-46 (Lion's Roar g, Kasyapa a-e, Kaundinya a-b)
- ตรวจสอบและลบอักษรจีน/ซีริลลิกออกจาก 10 บท (18, 23, 25, 27, 30, 31, 36, 37, 41, 44)
- อัปเดต `web/js/data.js` → ทุก 46 บทเป็น completed, สถานะภาพรวมเป็น completed
- อัปเดต `metadata.json` → status: completed
- อัปเดต `notes.md` → เพิ่มสถานะการแปล
- **มหาปรินิพพานสูตร (มหายาน) 46 บท แปลเสร็จสมบูรณ์!**

### Remaining work
- Commit + Push ขึ้น GitHub Pages

### Chapters Status
- ✅ ทั้ง 46 บท แปลเสร็จสมบูรณ์

## 2026-07-28 — Session 8: มัญชุศรีมูลกัลป์ 55 ปัฏล แปลเสร็จสมบูรณ์

### Critical Context
- **มัญชุศรีมูลกัลป์ (Āryamañjuśrīmūlakalpam)** = Kriyā Tantra, DSBC id 78, 55 ปัฏล
- เป็นส่วนหนี่งของหมวดตันตระในโปรเจค — หน้า tantra_index.html แสดงผลเฉพาะที่สถานะเป็น completed
- หน้า reader.html ใช้ page_id (142) เชื่อม tantra_data.js กับ data.js

### Done
- แปลครบ 55/55 ปัฏล (~13,500 บรรทัดแปล)
- QC ลบอักษรจีน/รัสเซียจาก 6 บท (ch002, 005, 006, 007, 014, 025)
- อัปเดต `web/js/data.js` → id:142 chapters 1–55 → completed
- อัปเดต `web/js/tantra_data.js` → tn_kriya_1: completed + page_id: 142
- อัปเดต `translations/15_manjusrimumlakalpa/metadata.json` → completed
- อัปเดต `translations/15_manjusrimumlakalpa/README.md`
- อัปเดต `translations/README.md` + `docs/translation_progress.md`
- Commit + Push: `509ba0a`

### Next (พรุ่งนี้)
- **สุญตวาทกับมัทธมกะและโยคาจาร** (Śūnyatāvāda — Mādhyamaka & Yogācāra)
- น่าจะต้องสร้างหมวดใหม่ในโครงสร้างโปรเจค

## 2026-07-29 — Session 9: อารยสังธินิรโมจนสูตร (Saṃdhinirmocana Sūtra) แปลเสร็จสมบูรณ์

### Critical Context
- **อารยสังธินิรโมจนสูตร (Āryasaṃdhinirmocana Sūtra)** = รากฐานโยคาจาร, Toh 106, 10 บท
- Source: 84000.co (แปลจาก Tib. จับคู่กับ Eng. Powers/Keenan)
- สร้างหมวด 17_yogacara ใหม่ — ไม่มี subcategories
- หน้าแยก: yogacara_index.html, yogacara_data.js, yogacara_app.js

### Done
- ดาวน์โหลดต้นฉบับจาก 84000.co แยก 10 บท
- สร้างโครงสร้าง `translations/17_yogacara/01_samdhinirmocana/chapter_001-010/`
- แปลครบ 10 บท (~18,000+ บรรทัด)
- แก้ไขภาษาอังกฤษหลงเหลือ (Prologue, conditioned/unconditioned, domain, phenomenal appearance)
- สร้างระบบเว็บโยคาจาร: yogacara_index.html + yogacara_data.js + yogacara_app.js
- อัปเดต navigation ทุกหน้า (index, tantra, sarvastivada, reader)
- อัปเดต `docs/translation_progress.md` → สรุป: 7/12 เรื่องสำคัญแปลเสร็จ
- Commit + Push: `f0bd2d1`

### Chapters Status
- ✅ ทั้ง 10 บท แปลเสร็จสมบูรณ์

### Notes
- โยคาจารเป็นหมวดหมู่แยกจากมหายานทั่วไป — หน้า yogacara_index.html
- บทที่สำคัญ: Ch.5 (อาลยวิญญาณ), Ch.6 (ไตรลักษณะ — parikalpita/paratantra/pariṇiṣpanna), Ch.8 (กาย-วาจา-ใจลับ)

## 2026-08-19 — Session 10: สร้างหมวดมัธยมกะ (Mādhyamaka) — โครงสร้าง + ดาวน์โหลด 44 เล่ม + เว็บหมวด

### Critical Context
- ผู้ใช้สั่ง: ตั้ง **DSBC list 177** เป็นเป้าหมายดูทีหลัง (ถูก mod_security บล็อก HTTP 406)
- หมวดมัธยมกะเดิมไม่มีโครงสร้าง → สร้างใหม่ `translations/madhyamaka/` (ไม่ใช้เลขนำหน้า เหมือน sarvastivada)
- DSBC **list 64** (madhyamaka 28 เล่ม) + **list 65** (madhyamaka-yogācāra 16 เล่ม) = **44 เล่ม** ดาวน์โหลดครบ ~949K ตัวอักษร
- คิวตันตระค้างอยู่: 78 มัญชุศรีมูลกัลป์ ✅, 84 สรวะตถาคตทัตวาสังคหะ ✅ → ถัดไป 792 อโมฆปาส

### Done
- สร้าง `translations/madhyamaka/` 44 โฟลเดอร์ (เช่น 0931_m_lamadhyamakak_rik_praj_n_ma, 0247_prasannapad_madhyamakav_tti 27 บท)
- สร้าง `scripts/download_madhyamaka_texts.py` (แยก list 64/65)
- สร้าง `web/js/madhyamaka_data.js` (44 เล่ม, id `md_<dsbc_id>`) + `web/js/madhyamaka_app.js` + `web/madhyamaka_index.html`
- แก้ metadata 962, 963, 970 (romanized) → แสดง 44 เล่มครบ
- เชื่อม MADHYAMAKA_DATA เข้า getAllData() ใน app.js + เพิ่ม script tag
- เพิ่ม nav ☀️ มัธยมกะ ใน index/reader/tantra/yogacara/sarvastivada/madhyamaka
- ทดสอบ local server (port 8098): ทุก path 200, reader.md_931=931 แสดง มูลมัธยมากการิกา ครบ 27 ปริกรรณ
- **ยังไม่ได้ commit/push**

### Priority (มัธยมกะ ตามลำดับ)
- 931 มูลมัธยมากการิกา (27 บท), 254 ปรสนนา-ปทา (27), 252 มัธยมากศาตร (27), 255 มัธยมากาวตาร (5), 248 วยวหาร-สัตยา-สัตยาย (4)
### Pending
- DSBC list 177 → ตั้งเป้าหมายไว้ดูทีหลัง (mod_security บล็อก)
- 02_mahayanasutralankara (โยคาจาร) แปลแล้วแต่ยังไม่ได้ commit (QC: ch004/011 จีน, ch014 ละติน 4, ch018-019 ละตินติด)
- คิวตันตระ: 792 อโมฆปาสกัปราชา ภาค 6

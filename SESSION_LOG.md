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

---

## 2026-05-22 — Session 3: แปล 21 ไมเตรยพยากรณ์ + 22 การัณฑวยูห (4/24) + 23 มัธยมกชาลิสตัมพ + Filter + Reader fix

### Done
- **GH Pages deploy source**: เปลี่ยนจาก `/docs` → `/ (root)` สำเร็จ (ใช้ `gh api`)
- **index filter bar**: เพิ่มปุ่มกรอง (ทั้งหมด/แปลแล้ว/กำลังแปล/รอแปล) + เลขลำดับ 1-based
- **reader**: เปลี่ยนให้ลองโหลด `translation.md` ก่อน `original.txt`
- **21_maitreyavyakarana** ✅ — แปลเต็ม 108 คาถา (ไมเตรยพยากรณ์, พระเจ้าศังขะ, นครเกตุวดี)
- **22_karandavyuha** 🟡 — แปลแล้ว 4/24 บท (พรรณนาเชตวัน, อเวจี, ปลดปล่อยสัตว์, กำเนิดจันทร์อาทิตย์) — เหลืออีก 20 บท
- **23_madhyamakasalistamba** ✅ — แปลเต็ม 217 บรรทัด (ปฏิจจสมุปบาทภายนอกและภายใน, 5 เหตุ, วิเคราะห์มัธยมก)
- **GH Pages**: เปลี่ยน source สำเร็จ — commit ถัดไป deploy จาก root โดยตรง

### Files Changed
- `web/index.html` — +filter bar
- `web/js/app.js` — +filter, +fetchChapterContent() (translation.md→original.txt fallback)
- `web/css/style.css` — +filter-bar, +filter-btn styles
- `translations/21_maitreyavyakarana/chapter_001/translation.md` — ใหม่
- `translations/21_maitreyavyakarana/glossary.md` — ใหม่
- `translations/22_karandavyuha/chapter_001-004/translation.md` — ใหม่
- `translations/23_madhyamakasalistamba/chapter_001/translation.md` — ใหม่
- `web/js/data.js` — อัปเดต status/chapter titles

### Next Steps (Session 4)
1. **22_karandavyuha** ✅ เสร็จ 24/24 บท (อัปเดตแล้ว!)
2. **24_sukhavativyuha_vistara** ✅ เสร็จ (data.js แสดง completed)
3. **25_vajrasattva** ✅ เสร็จ (data.js แสดง completed)
4. **26_maitreyavyakarana** — ไมเตรยพยากรณสูตร (ยัง pending)
5. ลบไฟล์ legacy: `chapter_index.js`, `generated_content.js`

---

## 2026-06-05 — Session 4: Morning Brief Protocol Recorded

### Done
- **บันทึกรูปแบบ Morning Brief** ลงระบบความจำ 3 ชั้น:
  - `~/.config/opencode/SESSION_LOG.md` (global session log)
  - `~/.config/opencode/memory.md` (permanent memory)
  - `~/.config/opencode/AGENTS.md` (protocols)
- **Morning Brief Protocol** เพิ่มเข้า Conversation Start Protocol:
  1. Parallel fetch: Gmail + Calendar + Time + WebSearch×8-10
  2. 6 หมวด: ข่าวไทย/ตปท, AI Agent, Local AI, ตลาด BTC/XAU/Forex, Social TH/CN/KR/JP
  3. Template: 📅 Calendar, 📧 Gmail, 🇹🇭🌍 ข่าว, 🤖💻 AI, 💰 ตลาด, 📱 Social
  4. **ห้ามอักษรจีน — ต้องแปลไทยหมด**
  5. One-liner summary + ถาม user "บันทึกลง logs ไหม"

### Files Changed
- `~/.config/opencode/SESSION_LOG.md` — append morning brief record
- `~/.config/opencode/memory.md` — add morning brief format spec
- `~/.config/opencode/AGENTS.md` — add Morning Brief Protocol section

---

## 2026-07-27 — Session 5: เตรียม 구조 หมวดตันตระ + ดึงเนื้อหาจาก DSBC

### Done
- สร้าง `docs/Tantra/Tantra_category_list.md` — 9 หมวดตันตระจาก DSBC category/10
- สร้าง `docs/Tantra/Tantra_target.txt` — เป้าหมายเริ่มต้น Kriyā + Yoga
- อัปเดต `docs/translation_progress.md` — เพิ่มรายการพระสูตรตันตระ:
  - 78 Āryamañjuśrīmūlakalpam (Kriyā Tantra) pending
  - 84 Sarva tathāgata tattva saṅgrahaḥ (Yoga Tantra) pending
- ตรวจสอบหน้า DSBC book/78 และ book/84:
  - ท่านี้มีโครงสร้าง chapter links ในหน้าเว็บ
  - เริ่มทดลอง scrape chapter links ผ่าน requests แต่พบ encoding/redirect issues
  - fallback เป็น browser console extract hrefs สำเร็จ: ได้รูปแบบ `https://www.dsbcproject.org/canon-text/content/78/635...`
  - บางเส้นทาง `/canon-text/chapter/78/1` ไม่ใช้แล้ว (404)

### Blocked / Notes
- **fetch เนื้อหา**: ขั่ว DSBC มีข้อจำกัด scraping จนต้องใช้ browser จริง
- ** Herman** folder convention: `translations/<id>_<abbr>/chapter_<3>/`
- รายการ 78/84 ใช้ extract ช่องว่ามีจำนวน chapter กี่บท แล้วค่อย mirror ลง local
- ยังไม่ push ใดๆ จนกว่าจะเพิ่มโครงสร้างไฟล์มือถือจริง

### Next Steps
1. ดาวน์โหลด chapter ทั้งหมดของ 78, 84 ผ่าน browser automation/console extract
2. สร้างโฟลเดอร์ + ไฟล์ stub ตาม convention
3. เพิ่ม meta entry ใน `web/js/data.js` ให้แยกหมวด Tantra
4. commit + push และทดสอบ GitHub Pages

---

## 2026-07-27 — Session 6: หมวดตันตระออนไลน์ครั้งแรก + เพิ่ม entries ใน data.js

### Done
- ตรวจสอบสถานะ: พบว่า 78 มี original.txt ครบ 55 บท, 84 มีครบ 26 บท + ch.1 แปลเสร็จ
- แต่ทั้งคู่ไม่มี entries ใน web/js/data.js → เพิ่มแล้ว:
  - id 142: มัญชุศรีมูลกัลป์ (78, Kriyā Tantra) — 55 chapters, status in_progress
  - id 143: สรวะตถาคตทัตวาสังคหะ (84, Yoga Tantra) — 26 chapters, ch.1 completed
- อัปเดต docs/translation_progress.md, translations/README.md, metadata/README ทุกตัว
- **commit + push** → GH Pages auto-deploy ✅
- URL: https://makzilla08.github.io/team-bannathikan-pra-sutra-mahayana/

### Current State (Tantra)
| ID | พระสูตร | Chapters | ต้นฉบับ | แปล |
|----|---------|----------|---------|-----|
| 78 | มัญชุศรีมูลกัลป์ | 55 | ✅ ครบ | ⏳ 0% |
| 84 | สรวะตถาคตทัตวาสังคหะ | 26 | ✅ ครบ | 🟢 1/26 (4%) |

### Next Steps
- แปลบทต่อจากสรวะตถาคตทัตวาสังคหะ หรือเริ่มบทแรกของมัญชุศรีมูลกัลป์

---

## 2026-07-27 — Session 7: สร้างหมวดตันตระเต็ม (18 คัมภีร์) + แก้ทับศัพท์ทุกรายการ + แปลไภษัชยคุรุสูตร

### Done
- **web/js/tantra_data.js** — สร้างใหม่ 18 คัมภีร์ตันตระ 8 หมวด (kriya, yoga, yogini, anuttara, darsana, sahaja, yogottara, kriya_tika)
- **web/js/tantra_app.js** — สร้างใหม่ (buildTantraCard, loadTantraCategory, updateTantraStats)
- **web/tantra_index.html** — หน้าแยกตันตระ หมวด + stats + about
- **web/index.html** — เพิ่ม nav link + promo section
- **web/reader.html** — โหลด tantra_data.js + nav links
- **web/js/app.js** — split getSutrasData() → getMahayanaData() + getAllData()
- **แก้ทับศัพท์ทุกรายการ** ตาม user review:
  - ārya→อารย, mañju→มัญ, tattva→ทัตวา/ทัตวะ (ต้น/ท้าย), vajra→วัชร, saṅgraha→สังคระ/สังครหะ
  - bhairava→ไภรวะ, roṣaṇa→โรษณะ, samāyoga→สมาโยค, jālasaṃvara→ชาลสังวร
  - คงรูปสันสกฤตแท้ (สรวะ/สรว, สังคระ, สิทโธปเทศ)
- **แปลไภษัชยคุรุสูตร** (#36) เสร็จสมบูรณ์ — 1 บท, แปลจาก DSBC Sanskrit ครบ 12 ปณิธาน + บทสนทนาพระอานนท์ + ตราณมุกตะ + ยักษเสนาบดี 12
- **อัปเดต data.js** — chapters[] แบบเต็ม, status completed
- **แปลมหาปรินิพพานสูตร** (#48) — เริ่มแล้ว: 3 ส่วนแรก (อปริหานิยธรรม 7, สังคารณียธรรม 6, อริยสัจจ์ 4)

### Current Queue (user's order)
1. ✅ ไภษัชยคุรุสูตร (#36) — เสร็จ
2. 🟡 มหาปรินิพพานสูตร (#48) — แปลบางส่วน
3. ⏳ อารยมัญชุศรีมูลกัลป (#78) — 55 บท
4. ⏳ สรวะตถาคตทัตวาสังคหะ (#84) — 26 บท

### Files Changed
- `web/js/tantra_data.js` — **ใหม่** (18 texts)
- `web/js/tantra_app.js` — **ใหม่**
- `web/tantra_index.html` — **ใหม่**
- `web/index.html` — +tantra link/promo
- `web/reader.html` — +tantra_data.js + nav
- `web/js/app.js` — split getSutrasData/getAllData
- `web/js/data.js` — +chapter arrays, status updates
- `translations/08_bhaishajyaguru/translation.md` — **แปลเสร็จ** ✅
- `translations/07_parinirvana/translation.md` — **แปลบางส่วน** 🟡


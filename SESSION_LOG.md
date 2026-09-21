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

## 2026-09-11 — สำรวจ DSBC category/19 śāstrapiṭaka (32 หมวดย่อย)

### Critical Context
- `category/19` = ศาตรปิฎก — ชั้นอรรถกถา/ปกรณ์ อธิบายพระสูตร ไม่ใช่พระสูตรเอง — เป็นแม่ของ list 64/65 ที่เราทำอยู่
- สำรวจ 6 ลิสต์: 74 yogācāra, 68 prajñāpāramitā, 20 abhidharma, 69 pramāṇa, 60 darśana, 73 vividha → คัด 5 เรื่องเกี่ยวงานปัจจุบัน

### 5 เรื่องคัดไว้ดูทีหลัง
1. **yogācāra list/74 (21 เรื่อง)** — ต่อ `17_yogacara` โดยตรง: 328 Bodhisattvabhūmi, 331 Madhyāntavibhāga, 335 Ratnagotravibhāga/Uttaratantra, 337 Triṃśikā + 339 Viṃśatikā, 341 Yogācārabhūmi, 867 Mahāyānasaṃgraha — เติม Asanga/Vasubandhu ให้ครบ
2. **abhidharma list/20 (11 เรื่อง)** — เติม `sarvastivada` ที่ว่าง: 96 Abhidharmakośakārikā, 98 Abhidharmasamuccaya+99 Bhāṣya, 102 Jñānaprasthāna — สะพาน Abhidharma→Yogācāra
3. **prajñāpāramitā-śāstra list/68 (7 เรื่อง)** — สะพาน `01_astasahasrika` → มัธยมกะ: 276 Abhisamayālaṅkāraloka + 278 Sphuṭārthā, 279 Vajracchedikā-ṭīkā, 904 Prajñāhṛdaya-vyākhyā — ต้องอ่านคู่ Aṣṭasāhasrikā
4. **pramāṇa list/69 (35 เรื่อง, ใหญ่สุด)** — เครื่องมือโต้วาที: 298 Pramāṇavārttika (4 ปริจเฉท), 294 Nyāyabindu, 288 Hetubindu, 283 Ālambanaparīkṣā — ใช้กับ 44 เล่มมัธยมกะ
5. **vividha list/73 + darśana list/60** — 320 Śālistambakakārikā+321 Ṭīkā (ปฏิจจสมุปบาทที่ Nagarjuna อ้างใน 931), 322 Tarkabhāṣā — แปลคู่ Mūlamadhyamakakārikā

### Next
- ผู้ใช้สั่ง "บันทึกไว้ เดี๋ยวมาดูทีหลัง" — รอเลือกว่าจะลงมือ list ไหนก่อน (แนะนำ 74 → 20 → 68 → 69)

## 2026-09-19 — กลั่นความเข้าใจโครงการและบันทึกบริบทสำหรับการทำงานต่อ

### แก่นของโครงการ
- โครงการมีเป้าหมายแปลคัมภีร์พุทธศาสนามหายานจากต้นฉบับสันสกฤต/อักษรโรมัน และแหล่งอ้างอิงภาษาจีนหรืออังกฤษตามความเหมาะสม เป็นภาษาไทยที่ครบถ้วน ไม่ย่อ ไม่สรุป สำนวนลื่นไหล
- แหล่งหลักเดิมคือ Digital Sanskrit Buddhist Canon (DSBC); งานบางชุดใช้ 84000, Wisdomlib, CBETA/Taishō และฉบับอังกฤษประกอบเมื่อ DSBC ไม่ครบหรือเป็นคนละสายสืบทอด
- เว็บไซต์อ่านงานอยู่ที่ `web/` และเผยแพร่ผ่าน GitHub Pages จาก root (`/`) ไม่ใช่ `/docs/`; งานหนึ่งจะถือว่าเสร็จเมื่อเนื้อหาแสดงบน reader และถูก commit/push แล้ว

### กติกาการแปลและบรรณาธิการ
- แปลตามต้นฉบับทุกส่วน ห้ามตัดทอนหรือทำเป็นสรุป
- ใช้ภาษาไทยชัดเจน สละสลวย แบ่งย่อหน้าให้อ่านง่าย; คาถาใช้ Markdown blockquote และหมายเหตุใช้ตัวเอียง
- ศัพท์บังคับสำคัญ: `buddhakṣetra` = พุทธเกษตร, `bodhisattva` = พระโพธิสัตว์, `mahāyāna` = มหายาน, `lokadhātu` = โลกธาตุ
- รักษาศัพท์ให้คงที่ตาม `glossary.md`; ชื่อพระสาวกต้องเป็นภาษาไทย (เช่น สารีบุตร โมคคัลลานะ)
- ก่อนเผยแพร่ต้องตรวจไม่ให้เหลืออักษรจีน ญี่ปุ่น เกาหลี รัสเซีย หรือภาษาอังกฤษ/เศษข้อความต้นฉบับในคำแปล และตรวจคำซ้ำ/fragment
- งานแต่ละเรื่องควรมี `original.txt`, `translation.md`, `notes.md`, `glossary.md`, `metadata.json` ตามโครงสร้างที่ใช้จริง

### ลำดับงานมาตรฐาน
1. อ่าน `AGENTS.md`, `SESSION_LOG.md`, `docs/translation_progress.md` และเอกสาร/ศัพท์ของเรื่องนั้นก่อนเริ่ม
2. ตรวจต้นฉบับและบริบท จากนั้นแปลลง `translations/<sutra>/chapter_<NNN>/translation.md`
3. เพิ่มศัพท์ใหม่ใน `glossary.md` และประเด็น/ข้อสงสัยใน `notes.md`
4. อัปเดต README ของเรื่อง, `translations/README.md`, `docs/translation_progress.md`, `web/js/data.js` และ route ใน `web/js/app.js` หากจำเป็น
5. ทดสอบ reader ใน local ด้วย `web/reader.html?sutra=<id>&chapter=1`
6. ตรวจคุณภาพอีกครั้ง แล้ว commit/push โดยไม่ลบหรือย้อนการเปลี่ยนแปลงของผู้อื่น

### สถานะความรู้ล่าสุด
- งานที่เสร็จเด่นจาก session ก่อนหน้า: มหาปรินิพพานสูตรมหายาน 46 บท, มัญชุศรีมูลกัลป์ 55 ปัฏล, สังธินิรโมจนสูตร 10 บท, และกลุ่มตันตระ/พระสูตรอื่นตาม `SESSION_LOG.md`
- มัธยมกะ: ดาวน์โหลด DSBC list 64 และ 65 รวม 44 เล่มแล้ว; โครงสร้างและหน้าเว็บถูกสร้าง แต่ ณ บันทึกเดิมยังไม่ได้ commit/push งานชุดนี้
- คิวศึกษาที่บันทึกไว้: Yogācāra list 74 → Abhidharma list 20 → Prajñāpāramitā-śāstra list 68 → Pramāṇa list 69; list 177 ยังติด mod_security
- เอกสาร `translations/README.md` มีรายการบางส่วนล้าสมัย/ไม่สอดคล้องกับ `SESSION_LOG.md` และไฟล์จริง จึงต้องตรวจสถานะจากไฟล์จริงและ log ล่าสุดก่อนประกาศความคืบหน้า

### บริบทลิงก์ DSBC ที่ผู้ใช้ส่ง
- DSBC `book/311` ระบุชื่อในหน้าเว็บว่า **Satyasiddhiśāstram** ของ Harivarman (เป็นศาสตระ/คัมภีร์อรรถกถา ไม่ใช่พระสูตรมหายานโดยตรง); หากจะเริ่มแปลต้องยืนยันขอบเขตและฉบับต้นฉบับก่อน

### สถานะระบบ ณ วันที่บันทึก
- ตรวจแล้วว่า working tree ไม่มีรายการเปลี่ยนแปลงค้างในขณะนี้
- บันทึกนี้เป็นบริบทถาวรสำหรับ session ถัดไป; ให้เปิดอ่านก่อนดำเนินงานแปลหรือแก้เว็บทุกครั้ง

## 2026-09-19 — กำหนดเป้าหมายงานแปลสายพุทธศิลป์

### เป้าหมายหลัก
- **Buddhacarita (พุทธจริต), DSBC book/222** เป็นงานถัดไปที่เลือกอย่างเป็นทางการ
- เหตุผล: เป็นพุทธประวัติกวีนิพนธ์ที่มีลำดับเหตุการณ์เหมาะสำหรับสร้างดัชนีฉากทางศิลปะ และใช้ศึกษาพระพุทธลักษณะ พุทธประวัติ และการถ่ายทอดเรื่องเล่าจากอินเดียไปยังลังกา ชวา มอญ พยู ไทย และเอเชียตะวันออกเฉียงใต้
- ต้องจัดประเภทให้ถูกต้องว่าเป็นพุทธประวัติ/มหากาพย์ ไม่ใช่พระสูตรโดยตรง

### คัมภีร์เทียบและลำดับถัดไป
1. **Buddhacarita (222)** — งานหลักถัดไป
2. **Mahāvadānasūtra (49)** — พุทธเจ้าในอดีต อวทาน ชาดก การถวายสถูป และการสั่งสมบุญ
3. **Āryarāṣṭrapālaparipṛcchā (29)** — กษัตริย์ ราชสำนัก การอุปถัมภ์สงฆ์และศาสนสถาน
4. **Suvarṇaprabhāsasūtra (60)** — ธรรมราชา เทพผู้พิทักษ์ พิธีกรรม และความชอบธรรมของรัฐ
5. **Daśabhūmikasūtra (39)** — ระดับภูมิของพระโพธิสัตว์ คุณลักษณะ สมาธิ และพุทธเกษตร
- ลำดับเสริมภายหลัง: **Āryasāgaranāgarājaparipṛcchā (30)**, **Mahāmegha (47)**, **Sukhāvatīvyūha (58/59)**, **Aparimitāyuḥ (24)** และ **Triratnasaundaryagāthā (811)**

### ฐานงานที่มีอยู่แล้ว
- **Lalitavistara (DSBC 45)** ตรวจสอบแล้วว่าแปลครบ 27/27 บทใน `translations/05_lalitavistara/` และใช้เป็นฉบับเทียบหลักกับ Buddhacarita ได้
- เอกสารความคืบหน้าระบุลลิตวิสตระเสร็จแล้ว แต่ `translations/05_lalitavistara/metadata.json` ยังเป็น `in_progress` ต้องแก้สถานะเมื่อทำงานปรับปรุงข้อมูลเว็บ
- งานที่แปลแล้วซึ่งควรนำมาทำดัชนีศิลป์ต่อ ได้แก่ ลลิตวิสตระ, การัณฑวยูหะ, คัณฑวยูหะ, มหาไวโรจนสูตร, สรวทุรคติปริโศธนตันตระ และมหาปรินิพพานสูตรมหายาน

### รูปแบบการเก็บข้อมูลสำหรับสายพุทธศิลป์
- ในการแปล Buddhacarita ให้ทำดัชนีประกอบทุกบท: เหตุการณ์ บุคคล พุทธลักษณะ สถานที่ สิ่งประกอบฉาก และภูมิภาคที่พบอิทธิพล
- หมวดสำคัญที่ต้องติดตาม: ประสูติ, อภิเษก/ราชสำนัก, เสด็จออกผนวช, ทุกรกิริยา, มารผจญ, ตรัสรู้, ปฐมเทศนา, พระสาวก และพุทธลักษณะ
- ใช้ Lalitavistara เป็นข้อความเทียบเพื่อแยกสิ่งที่เป็นโครงเรื่องร่วม องค์ประกอบเฉพาะของแต่ละคัมภีร์ และพัฒนาการของภาพพุทธประวัติ

## 2026-09-19 — ปรับขอบเขต Buddhacarita ให้เป็นงานแปลตรง

- ผู้ใช้ยืนยันให้ใช้ **เนื้อหา Buddhacarita ฉบับเต็ม** แปลตามต้นฉบับจริงโดยตรง
- ระยะนี้ **ไม่ต้องเทียบ Lalitavistara หรือคัมภีร์อื่น**, ไม่ต้องทำเฟสวิเคราะห์รวม, ไม่ต้องสรุปเนื้อหา และไม่ต้องทำดัชนีศิลปะระหว่างการแปล
- เป้าหมายเฉพาะหน้า: เตรียมต้นฉบับ Buddhacarita จาก DSBC `book/222` แล้วแปลครบถ้วนเป็นภาษาไทย โดยรักษาลำดับและเนื้อหาตามต้นฉบับ
- ตรวจพบว่า `translations/11_buddhacarita/` เดิมมีเพียงไฟล์ placeholder ที่ระบุผิดเป็น “ปรมิตาอุตตรศัสตรสูตร” จึงนำต้นฉบับ Romanized Buddhacarita จาก DSBC/Intellexus corpus ที่อ้างอิง `book/222` เข้ามาแล้ว แยกเป็น 14 สรรคใน `chapter_001`–`chapter_014` และแก้ metadata เป็น Buddhacarita ของอาจารย์อัศวโฆษ
- การนำเข้าครั้งนี้เป็นเพียงการเตรียมต้นฉบับ ยังไม่ถือว่าแปลแล้ว และยังไม่มีไฟล์คำแปลที่เติมเนื้อหา
- การวิเคราะห์เปรียบเทียบ พุทธศิลป์ และความสัมพันธ์ข้ามภูมิภาคจะทำในเฟสภายหลังเมื่อผู้ใช้สั่งเท่านั้น

# Master Plan: Mahayana Sutra Translation Pipeline

## Goal
โหลด ทำความสะอาด จัดเก็บ แปล แสดงบนเว็บ — 50 Mahayana sutras จาก DSBC list/6

## Pipeline (ต่อ 1 คัมภีร์)
1. **Load** → ดาวน์โหลด Romanized Sanskrit text จาก DSBC API
2. **Clean** → ตัด HTML, extract เฉพาะเนื้อหาสันสกฤต, แบ่งเป็นบท
3. **Store** → จัดเก็บที่ `translations/XX_sutra_name/chapter_XXX/original.txt`
4. **Translate** → แปลเป็นไทย เก็บที่ `translation.md`
5. **Web** → อัปเดต `web/js/data.js` + `app.js` ให้ reader แสดงผลได้

## Priority Order (based on target file + existing work)

### Tier 1: Priority target (7 sutras) — ต้องตั้งค่าแรก
| # | DSBC | Name | Folder | Status |
|---|------|------|--------|--------|
| 1 | 23 | Ajitasenavyākaraṇam | 20_ajitasenavyakarana | pending |
| 2 | 26 | Ārya maitreya-vyākaraṇaṃ | 21_maitreyavyakarana | pending |
| 3 | 42 | Kāraṇḍavyūhaḥ | 22_karandavyuha | pending |
| 4 | 46 | Madhyamaka-śālistambasūtram | 23_madhyamakasalistamba | pending |
| 5 | 59 | Sukhāvatīvyūhaḥ (vistaramātṛkā) | 24_sukhavativyuha_vistara | ✅ completed (1/1) |
| 6 | 818 | Vajrasattvaniṣpādana Sūtra | 25_vajrasattva | pending |
| 7 | 850 | Maitreyavyākaraṇa | 26_maitreyavyakarana | pending |

### Tier 2: Already have original texts — need translation
| # | DSBC | Folder | Chapters | Original | Translation |
|---|------|--------|----------|----------|-------------|
| 1 | 40 | 10_gandavyuha | 56 | ✅ | in_progress |
| 2 | - | 15_manjusrimumlakalpa | 55 | ✅ | pending |
| 3 | - | 16_sarvatathagatatattvasangraha | 26 | ✅ | pending |
| 4 | - | 17_surangama | 1 | ✅ | pending |

### Tier 3: Already translated completely
| # | DSBC | Folder | Status |
|---|------|--------|--------|
| 1 | 45 | 05_lalitavistara | ✅ completed |
| 2 | 35 | 04_vimalakirti | ✅ completed |
| 3 | 53 | 09_lankavatara | ✅ completed |
| 4 | - | 18_mahavairocana | ✅ completed |
| 5 | - | 19_brahmajala | ✅ completed |

### Tier 4: Partially downloaded / stubs — need content
| # | DSBC | Folder | Status |
|---|------|--------|--------|
| 1 | 68 | 01_astasahasrika (Prajñāpāramitā) | stub |
| 2 | 54 | 02_saddharmapundarika | stub |
| 3 | 56 | 03_samadhiraja | stub |
| 4 | 60 | 06_suvarnaprabhasa | stub |
| 5 | 48 | 07_parinirvana | stub |
| 6 | 36 | 08_bhaishajyaguru | stub |
| 7 | - | 11_buddhacarita | stub |
| 8 | - | 12_usnisavijaya | stub |
| 9 | - | 13_sukhavativyuha | stub |
| 10 | - | 14_vajracchedika | stub |
| 11 | 39 | sutra_39 (Daśabhūmika) | stub |
| 12 | 54 | sutra_54 (Saddharmapuṇḍarīka duplicate) | stub |

### Tier 5: Remaining DSBC list/6 sutras not yet in project (need folder + content)
| # | DSBC | Sanskrit Name | Thai Name |
|---|------|---------------|-----------|
| 1 | 24 | Aparimitāyuḥ nāma mahāyāna sūtram | อปริมิตายุรนามมหายานสูตร |
| 2 | 25 | Arthaviniścayasūtram | อรรถวินิจฉัยสูตร |
| 3 | 27 | Āryānityatā sūtram | อารยะอนิจจตาสูตร |
| 4 | 28 | Āryapratītyasamutpādo nāma mahāyānasūtram | อารยประตีตยสมุตบาทนามมหายานสูตร |
| 5 | 29 | Āryarāṣṭrapālaparipṛcchā nāma mahāyānasūtram | อารยราษฏรปาลปริปฤจฉา |
| 6 | 30 | Āryasāgaranāgarājaparipṛcchā nāma mahāyānasūtram | อารยสาครนาคราชปริปฤจฉา |
| 7 | 31 | Āryasaṃghāṭa sūtram | อารยสังฆาฏสูตร |
| 8 | 32 | Āryasarvabuddhaviṣayāvatārajñānālokālaṃkāra | อารยสรรพพุทธวิษยาวตารชญานาโลกาลังการ |
| 9 | 33 | Āryatriratnānusmṛtisūtram | อารยตรีนตรยานุสมฤติสูตร |
| 10 | 34 | Āryatriskandha sūtram | อารยตริสกันธสูตร |
| 11 | 37 | Bhavasaṅkrāntisūtram | ภวสงกรานติสูตร |
| 12 | 38 | catuṣpariṣat sūtram | จตุษปริษัทสูตร |
| 13 | 41 | Guṇakāraṇḍavyūha sūtram | คุณการัณฑวยูหสูตร |
| 14 | 43 | Karuṇāpuṇḍarīka sūtram | กรุณาบุณฑริกสูตร |
| 15 | 44 | Kāśyapaparivarta sūtram | กัศยปปริวรรตสูตร |
| 16 | 47 | Mahāmegha sūtram | มหาเมฆสูตร |
| 17 | 49 | Mahāvadānasūtram | มหาวทานสูตร |
| 18 | 50 | Megha sūtram | เมฆสูตร |
| 19 | 51 | Nairātmyaparipṛcchā nāma mahāyānasūtram | ไนราตมยปริปฤจฉา |
| 20 | 52 | Pañcarakṣā sūtram | ปัญจรักษาสูตร |
| 21 | 55 | Śālistambasūtram | ชาลิสตัมพสูตร (อีกฉบับนอกจาก #46) |
| 22 | 57 | Sarvatathāgatādhiṣṭhānavyūham sūtram | สรรพตถาคตาธิษฐานวยูหสูตร |
| 23 | 58 | Sukhāvatīvyūhaḥ (saṃkṣiptamātṛkā) | สุขาวดีวยูหสูตร (ฉบับย่อ) |
| 24 | 61 | Vimalakīrtinirdeśa sūtram | วิมลกีรตินิรเทศ (อีก ID) |
| 25 | 62 | Vinayaviniścaya upāliparipṛcchā | วินัยวินิจฉัยอุบาลีปริปฤจฉา |
| 26 | 813 | Saddharmasmṛtyupasthānasūtra | สัทธรรมสติปัฏฐานสูตร |
| 27 | 873 | Sarvabuddhaviṣayāvatārajñānālokālaṁkāra | สรรพพุทธวิษยาวตารชญานาโลกาลังการ (อีก ID) |
| 28 | 906 | prahāṇapūrakaśatavandanānāma mahāyānasūtram | ประหาณปูรกศตวันทนานาม |
| 29 | 936 | Ajātaśatrukaukṛtyavinodanāsūtra | อชาตศัตรูเกากฤตยวิโนทนสูตร |
| 30 | 964-969 | Ajātaśatrukaukṛtyavinodanāsūtra (ซ้ำ) | ซ้ำ |

## Immediate Next Actions
1. [x] ตรวจสอบ translations/ — รู้ว่าอันไหนมี/ไม่มี content
2. [ ] สร้าง DSBC_ID→sutra mapping ครบทุก ID
3. [ ] อัปเดต web/js/data.js ให้ครอบคลุมทุกรายการ (50+)
4. [ ] เขียน/อัปเดตสคริปต์ดาวน์โหลดเนื้อหาจริง
5. [ ] รันดาวน์โหลดสำหรับ Tier 4 (stubs → content)
6. [ ] รันดาวน์โหลดสำหรับ Tier 5 (new sutras)
7. [ ] ทำความสะอาด original.txt (clean HTML)

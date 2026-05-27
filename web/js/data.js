// ข้อมูลพระสูตรมหายานสำหรับสำนักพิมพ์
const SUTRAS_DATA = [
    {
        id: 35,
        dsbc_book_id: 35,
        folder: "04_vimalakirti",
        title_thai: "วิมาลากีรตินิเทศสูตร",
        title_sanskrit: "Āryavimalakīrtinirdeśo nāma mahāyānasūtram",
        title_english: "Vimalakีrti's Teaching",
        priority: 1,
        status: "completed",
        description: "สนทนาธรรมระหว่างพระพุทธเจ้ากับคฤหัสถ์ผู้ปฏิบัติดี วิมาลากีรติ",
        chapters_count: 12,
        chapters: [
            { id: 1, title_thai: "พุทธเกษตรบริสุทธิ์", title_sanskrit: "buddhakṣetrapariśuddhinidānam", status: "completed" },
            { id: 2, title_thai: "อุบายอันแยบยลอันอจินไตย", title_sanskrit: "acintyopāyakauśalyam", status: "completed" },
            { id: 3, title_thai: "การส่งพระสาวกและพระโพธิสัตว์", title_sanskrit: "śrāvakabodhisattvapreṣaṇoktam", status: "completed" },
            { id: 4, title_thai: "การสนทนาเรื่องไข้", title_sanskrit: "glānasaṁmodana", status: "completed" },
            { id: 5, title_thai: "การแสดงสมาธิอันอัศจรรย์", title_sanskrit: "acintyavimokṣanirdeśaḥ", status: "completed" },
            { id: 6, title_thai: "เทวี", title_sanskrit: "devī", status: "completed" },
            { id: 7, title_thai: "ตระกูลพระตถาคต", title_sanskrit: "tathāgatagotram", status: "completed" },
            { id: 8, title_thai: "การเข้าสู่ประตูธรรมอันไม่สอง", title_sanskrit: "advayadharmamukhapraveśaḥ", status: "completed" },
            { id: 9, title_thai: "การถวายอาหารสรีระ", title_sanskrit: "nirmāṇabhojyā'dānam", status: "completed" },
            { id: 10, title_thai: "การโต้ตอบธรรมเรื่องความเสื่อมไม่เสื่อม", title_sanskrit: "kṣayākṣayannāma dharmayautakam", status: "completed" },
            { id: 11, title_thai: "ความเพลิดเพลินและภพต่างๆ", title_sanskrit: "abhiratilokadhātvādānaṁ", status: "completed" },
            { id: 12, title_thai: "อดีตชาติและการมอบธรรมอันดี", title_sanskrit: "pūrvayogaḥ saddharmaparīndanā ca", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/35",
        bibliography: {
            editor: "Joshi, Lal Mani & Bhiksu Pasadika",
            publisher: "Central Institute of Higher Tibetan Studies",
            place: "Sarnath",
            year: "1981"
        }
    },
    {
        id: 68,
        dsbc_book_id: 68,
        folder: "01_astasahasrika",
        title_thai: "ปรมิตาอุตตรशัสตรสูตร",
        title_sanskrit: "Aṣṭasāhasrikā prajñāpāramitā",
        title_english: "Perfection of Wisdom in 8,000 Lines",
        priority: 2,
        status: "pending",
        description: "พระสูตรสำคัญที่สุดของมหายาน เกี่ยวกับความสมบูรณ์แห่งปัญญา",
        chapters_count: 32,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" },
            { id: 3, title_thai: "บทที่ 3", status: "pending" },
            { id: 4, title_thai: "บทที่ 4", status: "pending" },
            { id: 5, title_thai: "บทที่ 5", status: "pending" },
            { id: 6, title_thai: "บทที่ 6", status: "pending" },
            { id: 7, title_thai: "บทที่ 7", status: "pending" },
            { id: 8, title_thai: "บทที่ 8", status: "pending" },
            { id: 9, title_thai: "บทที่ 9", status: "pending" },
            { id: 10, title_thai: "บทที่ 10", status: "pending" },
            { id: 11, title_thai: "บทที่ 11", status: "pending" },
            { id: 12, title_thai: "บทที่ 12", status: "pending" },
            { id: 13, title_thai: "บทที่ 13", status: "pending" },
            { id: 14, title_thai: "บทที่ 14", status: "pending" },
            { id: 15, title_thai: "บทที่ 15", status: "pending" },
            { id: 16, title_thai: "บทที่ 16", status: "pending" },
            { id: 17, title_thai: "บทที่ 17", status: "pending" },
            { id: 18, title_thai: "บทที่ 18", status: "pending" },
            { id: 19, title_thai: "บทที่ 19", status: "pending" },
            { id: 20, title_thai: "บทที่ 20", status: "pending" },
            { id: 21, title_thai: "บทที่ 21", status: "pending" },
            { id: 22, title_thai: "บทที่ 22", status: "pending" },
            { id: 23, title_thai: "บทที่ 23", status: "pending" },
            { id: 24, title_thai: "บทที่ 24", status: "pending" },
            { id: 25, title_thai: "บทที่ 25", status: "pending" },
            { id: 26, title_thai: "บทที่ 26", status: "pending" },
            { id: 27, title_thai: "บทที่ 27", status: "pending" },
            { id: 28, title_thai: "บทที่ 28", status: "pending" },
            { id: 29, title_thai: "บทที่ 29", status: "pending" },
            { id: 30, title_thai: "บทที่ 30", status: "pending" },
            { id: 31, title_thai: "บทที่ 31", status: "pending" },
            { id: 32, title_thai: "บทที่ 32", status: "pending" }
        ],
    },
    {
        id: 54,
        dsbc_book_id: 54,
        folder: "02_saddharmapundarika",
        title_thai: "สัทธรรมปุณฑรีกสูตร",
        title_sanskrit: "Saddharmapuṇḍarีkasūtram",
        title_english: "Lotus Sutra",
        priority: 3,
        status: "completed",
        description: "พระสูตรดอกบัวขาว เรื่องเอกภพและพระพุทธเจ้าหลายพระองค์ — คำสอนอุปายกุศล เอกยาน",
        chapters_count: 27,
        chapters: [
            { id: 1, title_thai: "นิทานปริวรรต", title_sanskrit: "nidānaparivartaḥ", status: "completed" },
            { id: 2, title_thai: "อุปายกุศลปริวรรต", title_sanskrit: "upāyakauśalyaparivartaḥ", status: "completed" },
            { id: 3, title_thai: "อุปมยปริวรรต", title_sanskrit: "aupamyaparivartaḥ", status: "completed" },
            { id: 4, title_thai: "อธิมุติปริวรรต", title_sanskrit: "adhimuktiparivartaḥ", status: "completed" },
            { id: 5, title_thai: "โอษธีปริวรรต", title_sanskrit: "oṣadhīparivartaḥ", status: "completed" },
            { id: 6, title_thai: "วยากรณปริวรรต", title_sanskrit: "vyākaraṇaparivartaḥ", status: "completed" },
            { id: 7, title_thai: "ปูรวยอกปริวรรต", title_sanskrit: "pūrvayogaparivartaḥ", status: "completed" },
            { id: 8, title_thai: "ปัญจภิกษุศตวยากรณปริวรรต", title_sanskrit: "pañcabhikṣuśatavyākaraṇaparivartaḥ", status: "completed" },
            { id: 9, title_thai: "อานันทาทิวยากรณปริวรรต", title_sanskrit: "ānandādivyākaraṇaparivartaḥ", status: "completed" },
            { id: 10, title_thai: "ธรรมภณกปริวรรต", title_sanskrit: "dharmabhāṇakaparivartaḥ", status: "completed" },
            { id: 11, title_thai: "สถูปทรรศนปริวรรต", title_sanskrit: "stūpasaṃdarśanaparivartaḥ", status: "completed" },
            { id: 12, title_thai: "อุตสาหปริวรรต", title_sanskrit: "utsāhaparivartaḥ", status: "completed" },
            { id: 13, title_thai: "สุขวิหารปริวรรต", title_sanskrit: "sukhavihāraparivartaḥ", status: "completed" },
            { id: 14, title_thai: "โพธิสัตว์ปฤฐวีวีรสมุทคมปริวรรต", title_sanskrit: "bodhisattvapṛthivīvirasamudgamaparivartaḥ", status: "completed" },
            { id: 15, title_thai: "ตถาคตอายุประมานปริวรรต", title_sanskrit: "tathāgatāyuṣpramāṇaparivartaḥ", status: "completed" },
            { id: 16, title_thai: "ปุณยปรยายปริวรรต", title_sanskrit: "puṇyaparyāyaparivartaḥ", status: "completed" },
            { id: 17, title_thai: "อนุโมทนาปุณยนิรเทศปริวรรต", title_sanskrit: "anumodanāpuṇyanirdeśaparivartaḥ", status: "completed" },
            { id: 18, title_thai: "ธรรมภณกานุสังสาปริวรรต", title_sanskrit: "dharmabhāṇakānuśaṁsāparivartaḥ", status: "completed" },
            { id: 19, title_thai: "สทาปริภูตปริวรรต", title_sanskrit: "sadāparibhūtaparivartaḥ", status: "completed" },
            { id: 20, title_thai: "ตถาคตารธรยภิสังสการปริวรรต", title_sanskrit: "tathāgatāddharyabhisaṃskāraparivartaḥ", status: "completed" },
            { id: 21, title_thai: "ธารณีปริวรรต", title_sanskrit: "dhāraṇīparivartaḥ", status: "completed" },
            { id: 22, title_thai: "ไภษัชยราชปูรวยอกปริวรรต", title_sanskrit: "bhaiṣajyarājapūrvayogaparivartaḥ", status: "completed" },
            { id: 23, title_thai: "คัทคทสวรปริวรรต", title_sanskrit: "gadgadasvaraparivartaḥ", status: "completed" },
            { id: 24, title_thai: "สมนมุขปริวรรต", title_sanskrit: "samantamukhaparivartaḥ", status: "completed" },
            { id: 25, title_thai: "ศุภวยูหราชปูรวยอกปริวรรต", title_sanskrit: "śubhavyūharājapūrvayogaparivartaḥ", status: "completed" },
            { id: 26, title_thai: "สมนตภัทรสาหนปริวรรต", title_sanskrit: "samantabhadrotsāhanaparivartaḥ", status: "completed" },
            { id: 27, title_thai: "อนุปริณทนาปริวรรต", title_sanskrit: "anuparīndanāparivartaḥ", status: "completed" }
        ],
    },
    {
        id: 45,
        dsbc_book_id: 45,
        folder: "05_lalitavistara",
        title_thai: "ลลิตวิสตระสูตร",
        title_sanskrit: "Lalitavistaraḥ",
        title_english: "The Play in Full",
        priority: 4,
        status: "completed",
        description: "ประวัติพระพุทธเจ้าตั้งแต่ประสูติจนถึงตั้งพระธรรมจักร",
        chapters_count: 27,
        chapters: [
            { id: 1, title_thai: "บทนำ", title_sanskrit: "nidānam", status: "completed" },
            { id: 2, title_thai: "การเลือกพระราชา", title_sanskrit: "rājapraṇidhi", status: "completed" },
            { id: 3, title_thai: "การอุทิศทาน", title_sanskrit: "paribhāṇḍa", status: "completed" },
            { id: 4, title_thai: "การสร้างเมือง", title_sanskrit: "nagaranirmāṇa", status: "completed" },
            { id: 5, title_thai: "การประสูติ", title_sanskrit: "janma", status: "completed" },
            { id: 6, title_thai: "การชำระล้าง", title_sanskrit: "snāna", status: "completed" },
            { id: 7, title_thai: "การออกบวช", title_sanskrit: "pravrajyā", status: "completed" },
            { id: 8, title_thai: "การทรมาน", title_sanskrit: "pariśrama", status: "completed" },
            { id: 9, title_thai: "การตรัสรู้", title_sanskrit: "abhisambodhi", status: "completed" },
            { id: 10, title_thai: "การชนะมาร", title_sanskrit: "māravijaya", status: "completed" },
            { id: 11, title_thai: "การแสดงธรรม", title_sanskrit: "dharmacakrapravartana", status: "completed" },
            { id: 12, title_thai: "การโปรดเทพ", title_sanskrit: "devatāparigraha", status: "completed" },
            { id: 13, title_thai: "การสละร่าง", title_sanskrit: "nirmāṇa", status: "completed" },
            { id: 14, title_thai: "การเสด็จสู่สวรรค์", title_sanskrit: "devāvatāra", status: "completed" },
            { id: 15, title_thai: "การสอนเทพ", title_sanskrit: "devānumodana", status: "completed" },
            { id: 16, title_thai: "การกลับมา", title_sanskrit: "punarāvṛtti", status: "completed" },
            { id: 17, title_thai: "การประกอบบุญ", title_sanskrit: "puṇyasaṃbhāra", status: "completed" },
            { id: 18, title_thai: "การแสดงปาฏิหาริย์", title_sanskrit: "prātihārya", status: "completed" },
            { id: 19, title_thai: "การสร้างพุทธเกษตร", title_sanskrit: "buddhakṣetranirmāṇa", status: "completed" },
            { id: 20, title_thai: "การถวายทาน", title_sanskrit: "dāna", status: "completed" },
            { id: 21, title_thai: "การเจริญสมาธิ", title_sanskrit: "dhyāna", status: "completed" },
            { id: 22, title_thai: "การปลอมพระทัต", title_sanskrit: "pratijñā", status: "completed" },
            { id: 23, title_thai: "การยกย่องพระโพธิสัตว์", title_sanskrit: "bodhisattvāṇujñāpti", status: "completed" },
            { id: 24, title_thai: "การประกาศชัย", title_sanskrit: "abhiṣṭhāna", status: "completed" },
            { id: 25, title_thai: "การสรรเสริญ", title_sanskrit: "stava", status: "completed" },
            { id: 26, title_thai: "การปิดท้าย", title_sanskrit: "nidhāna", status: "completed" },
            { id: 27, title_thai: "บทส่งท้าย", title_sanskrit: "parisamāpti", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/45"
    },
    {
        id: 39,
        dsbc_book_id: 39,
        folder: "39_dasabhumikasutram",
        title_thai: "ทศภูมิกสูตร",
        title_sanskrit: "Daśabhūmikasūtram",
        title_english: "Sutra on the Ten Stages",
        priority: 5,
        status: "pending",
        description: "การปฏิบัติของพระโพธิสัตว์ 10 ขั้น",
        chapters_count: 22,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" },
            { id: 3, title_thai: "บทที่ 3", status: "pending" },
            { id: 4, title_thai: "บทที่ 4", status: "pending" },
            { id: 5, title_thai: "บทที่ 5", status: "pending" },
            { id: 6, title_thai: "บทที่ 6", status: "pending" },
            { id: 7, title_thai: "บทที่ 7", status: "pending" },
            { id: 8, title_thai: "บทที่ 8", status: "pending" },
            { id: 9, title_thai: "บทที่ 9", status: "pending" },
            { id: 10, title_thai: "บทที่ 10", status: "pending" },
            { id: 11, title_thai: "บทที่ 11", status: "pending" },
            { id: 12, title_thai: "บทที่ 12", status: "pending" },
            { id: 13, title_thai: "บทที่ 13", status: "pending" },
            { id: 14, title_thai: "บทที่ 14", status: "pending" },
            { id: 15, title_thai: "บทที่ 15", status: "pending" },
            { id: 16, title_thai: "บทที่ 16", status: "pending" },
            { id: 17, title_thai: "บทที่ 17", status: "pending" },
            { id: 18, title_thai: "บทที่ 18", status: "pending" },
            { id: 19, title_thai: "บทที่ 19", status: "pending" },
            { id: 20, title_thai: "บทที่ 20", status: "pending" },
            { id: 21, title_thai: "บทที่ 21", status: "pending" },
            { id: 22, title_thai: "บทที่ 22", status: "pending" }
        ],
    },
    {
        id: 60,
        dsbc_book_id: 60,
        folder: "06_suvarnaprabhasa",
        title_thai: "สุวรรณประภามหาสูตร",
        title_sanskrit: "Suvarṇaprabhāsasūtram",
        title_english: "Sutra of Golden Light",
        priority: 6,
        status: "pending",
        description: "ธรรมะเพื่อปกป้องแผ่นดินและราชวงศ์",
        chapters_count: 21,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" },
            { id: 3, title_thai: "บทที่ 3", status: "pending" },
            { id: 4, title_thai: "บทที่ 4", status: "pending" },
            { id: 5, title_thai: "บทที่ 5", status: "pending" },
            { id: 6, title_thai: "บทที่ 6", status: "pending" },
            { id: 7, title_thai: "บทที่ 7", status: "pending" },
            { id: 8, title_thai: "บทที่ 8", status: "pending" },
            { id: 9, title_thai: "บทที่ 9", status: "pending" },
            { id: 10, title_thai: "บทที่ 10", status: "pending" },
            { id: 11, title_thai: "บทที่ 11", status: "pending" },
            { id: 12, title_thai: "บทที่ 12", status: "pending" },
            { id: 13, title_thai: "บทที่ 13", status: "pending" },
            { id: 14, title_thai: "บทที่ 14", status: "pending" },
            { id: 15, title_thai: "บทที่ 15", status: "pending" },
            { id: 16, title_thai: "บทที่ 16", status: "pending" },
            { id: 17, title_thai: "บทที่ 17", status: "pending" },
            { id: 18, title_thai: "บทที่ 18", status: "pending" },
            { id: 19, title_thai: "บทที่ 19", status: "pending" },
            { id: 20, title_thai: "บทที่ 20", status: "pending" },
            { id: 21, title_thai: "บทที่ 21", status: "pending" }
        ],
    },
    {
        id: 48,
        dsbc_book_id: 48,
        folder: "07_parinirvana",
        title_thai: "มหาปรินิพพานสูตร",
        title_sanskrit: "Mahāparinirvāṇa sūtram",
        title_english: "Mahaparinirvana Sutra",
        priority: 7,
        status: "pending",
        description: "การปรินิพพานและคำสอนสุดท้ายของพระพุทธเจ้า",
        chapters_count: 1,
        chapters: [],
        source_url: "https://www.dsbcproject.org/canon-text/book/48"
    },
    {
        id: 36,
        dsbc_book_id: 36,
        folder: "08_bhaishajyaguru",
        title_thai: "ไภษัชยคุรุสูตร (พระหมอแสงแก้ว)",
        title_sanskrit: "Bhaiṣajyaguruvaidūryaprabharājasūtram",
        title_english: "Medicine Buddha Sutra",
        priority: 8,
        status: "pending",
        description: "พระหมอแสงแก้ว พระพุทธเจ้าผู้รักษาโรค",
        chapters_count: 1,
        chapters: [],
        source_url: "https://www.dsbcproject.org/canon-text/book/36"
    },
    {
        id: 53,
        dsbc_book_id: 53,
        folder: "09_lankavatara",
        title_thai: "ลังกาวตารสูตร",
        title_sanskrit: "Saddharmalaṅkāvatārasūtram",
        title_english: "Lankavatara Sutra",
        title_chinese: "入楞伽經 (T671)",
        priority: 9,
        status: "completed",
        description: "จิตเท่านั้น (cittamātra) — อาลยวิญญาณ ตถาคตครรภ์ ปัญจธรรม ตริสวภาวะ — แก่นโยคาจารจันทน์",
        chapters_count: 10,
        chapters: [
            { id: 1, title_thai: "การอาราธนาของท้าวทศกัณฐ์", title_sanskrit: "Rāvaṇādhyeṣaṇā", status: "completed" },
            { id: 2, title_thai: "รวบรวมธรรม 36,000", title_sanskrit: "Ṣaṭtriṃśatsāhasrasarvadharmasamuccaya", status: "completed" },
            { id: 3, title_thai: "ความไม่เที่ยง", title_sanskrit: "Anityatā", status: "completed" },
            { id: 4, title_thai: "การบรรลุ", title_sanskrit: "Abhisamaya", status: "completed" },
            { id: 5, title_thai: "ความเที่ยง/ไม่เที่ยงของตถาคต", title_sanskrit: "Tathāgatanityānityaprasaṅga", status: "completed" },
            { id: 6, title_thai: "ขณะจิต", title_sanskrit: "Kṣaṇika", status: "completed" },
            { id: 7, title_thai: "นิรมาณ", title_sanskrit: "Nairmāṇika", status: "completed" },
            { id: 8, title_thai: "การไม่กินเนื้อ", title_sanskrit: "Māṃsabhakṣaṇa", status: "completed" },
            { id: 9, title_thai: "ธารณีย์", title_sanskrit: "Dhāraṇī", status: "completed" },
            { id: 10, title_thai: "คาถาปิด", title_sanskrit: "Sagāthaka", status: "completed" }
        ],
        source_url: ""
    },
    {
        id: 18,
        dsbc_book_id: 0,
        folder: "18_mahavairocana",
        title_thai: "มหาไวโรจนสูตร",
        title_sanskrit: "Mahāvairocanābhisaṃbodhi-vikurvitādhiṣṭhāna-sūtram",
        title_english: "Mahavairocana Sutra (T848)",
        priority: 8,
        status: "completed",
        description: "พระสูตรว่าด้วยมหาไวโรจนพุทธเจ้าตรัสรู้ — คัมภีร์หลักของวัชรยานจีน ว่าด้วยโพธิจิต กรุณา อุบาย มณฑล มนตร์ มุทรา และศีลโพธิสัตว์ 7 มัด 31 บท",
        chapters_count: 7,
        chapters: [
            { id: 1, title_thai: "มัดที่ ๑ — เข้าสู่ประตูมนตร์ + มณฑลปัจจัย", title_sanskrit: "mantra-mukha-maṇḍala", status: "completed" },
            { id: 2, title_thai: "มัดที่ ๒ — มณฑลปัจจัยต่อ + ระงับอุปสรรค + มนตร์สากล", title_sanskrit: "maṇḍala-śeṣa", status: "completed" },
            { id: 3, title_thai: "มัดที่ ๓ — ความสำเร็จในโลก + สิทธิปรากฏ + มณฑลอักขระ", title_sanskrit: "siddhi-lābha", status: "completed" },
            { id: 4, title_thai: "มัดที่ ๔ — มุทราลับ (密印品)", title_sanskrit: "mudrā-adhigama", status: "completed" },
            { id: 5, title_thai: "มัดที่ ๕ — มณฑลลับ + ตำแหน่งอาจารย์ + อักขระ", title_sanskrit: "guhya-maṇḍala", status: "completed" },
            { id: 6, title_thai: "มัดที่ ๖ — ร้อยอักขระ + ข้อปฏิบัติศีล", title_sanskrit: "śata-akṣara-śīla", status: "completed" },
            { id: 7, title_thai: "มัดที่ ๗ — หอมะ + มอบหมาย", title_sanskrit: "homa-parīndanā", status: "completed" }
        ],
        source_url: ""
    },
    {
        id: 19,
        dsbc_book_id: 19,
        folder: "19_brahmajala",
        title_thai: "พรหมณชาลสูตร",
        title_sanskrit: "Brahmajālasūtram",
        title_english: "Brahmajala Sutra (T1484)",
        priority: 9,
        status: "completed",
        description: "พระสูตรว่าด้วยศีลโพธิสัตว์ — แสดงโดยพระไวโรจนพุทธเจ้า ประกอบด้วย 40 ระดับจิต (มัด 1) และศีล 10 หนัก 48 เบา (มัด 2) แปลจากภาษาจีนโดยพระกุมารชีวะ ค.ศ. 406",
        chapters_count: 2,
        chapters: [
            { id: 1, title_thai: "มัดที่ ๑ — ๔๐ ระดับจิต (十發趣心·十長養心·十金剛心·十地)", title_sanskrit: "catvāriṃśaccittabhūmayaḥ", status: "completed" },
            { id: 2, title_thai: "มัดที่ ๒ — ศีล ๑๐ หนัก ๔๘ เบา (十重四十八輕戒)", title_sanskrit: "daśa-caturāśīti-śīlāni", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/19"
    },
    {
        id: 40,
        dsbc_book_id: 40,
        folder: "10_gandavyuha",
        title_thai: "คัณฑวยูหะสูตร",
        title_sanskrit: "Gaṇḍavyūha sūtram",
        title_english: "The Wandering of Sudhana",
        priority: 10,
        status: "in_progress",
        description: "การเดินทางแสวงบุญของสุธนกุมาร (สุธรรมกุฏฐะ) เยี่ยมครู ๕๓ ท่าน",
        chapters_count: 56,
        chapters: [
            { id: 1, title_thai: 'นิทานปริวรรต', title_sanskrit: 'nidānam', status: 'completed' },
            { id: 2, title_thai: 'สมันตภัทร', title_sanskrit: 'samantabhadra', status: 'completed' },
            { id: 3, title_thai: 'มัญชุศรี', title_sanskrit: 'mañjuśrīḥ', status: 'completed' },
            { id: 4, title_thai: 'เมฆศรี', title_sanskrit: 'meghaśrīḥ', status: 'completed' },
            { id: 5, title_thai: 'สาครเมฆ', title_sanskrit: 'sāgarameghaḥ', status: 'completed' },
            { id: 6, title_thai: 'สุประธิธิ', title_sanskrit: 'supratiṣṭhitaḥ', status: 'completed' },
            { id: 7, title_thai: 'เมฆะพราหมณ์', title_sanskrit: 'meghaḥ', status: 'completed' },
            { id: 8, title_thai: 'มุกตกะเศรษฐี', title_sanskrit: 'muktakaḥ śreṣṭhī', status: 'completed' },
            { id: 9, title_thai: 'ไภษัชยคุรุ', title_sanskrit: 'bhaiṣajyaguruḥ', status: 'completed' },
            { id: 10, title_thai: 'สารธวัช', title_sanskrit: 'sāradhvaja', status: 'completed' },
            { id: 11, title_thai: 'ภิษโมตตระนิรโธษะ', title_sanskrit: 'bhīṣmottaranirghoṣa', status: 'completed' },
            { id: 12, title_thai: 'ชยตตมะพราหมณ์', title_sanskrit: 'jayottama', status: 'completed' },
            { id: 13, title_thai: 'ไมตราเยณี', title_sanskrit: 'maitrāyaṇī', status: 'completed' },
            { id: 14, title_thai: 'สุทรชะ', title_sanskrit: 'sudarśanaḥ', status: 'completed' },
            { id: 15, title_thai: 'เวศฐิละนักปราชญ์', title_sanskrit: 'veṣṭhilo upāsakaḥ', status: 'completed' },
            { id: 16, title_thai: 'อวโลกิเตศวร', title_sanskrit: 'avalokiteśvara', status: 'completed' },
            { id: 17, title_thai: 'อนันยคามี', title_sanskrit: 'ananyagāmī bodhisattva', status: 'completed' },
            { id: 18, title_thai: 'มหาเทวี', title_sanskrit: 'mahādevī', status: 'completed' },
            { id: 19, title_thai: 'สถาวราเทพธิดา', title_sanskrit: 'sthāvarā pṛthivīdevatā', status: 'completed' },
            { id: 20, title_thai: 'วสันตีเทวี', title_sanskrit: 'vasantī rātridevatā', status: 'completed' },
            { id: 21, title_thai: 'สมันตคัมภีรวระพุทธระศิธวัชะเทวี', title_sanskrit: 'samantagambhīravicitiśrītejoradhvajā rātridevatā', status: 'completed' },
            { id: 22, title_thai: 'ปรมุทิตะนะยะนะเทวี', title_sanskrit: 'pramuditanayanajagadvirocanā rātridevatā', status: 'completed' },
            { id: 23, title_thai: 'สรรพสัตย์', title_sanskrit: 'sarvagāmī', status: 'completed' },
            { id: 24, title_thai: 'อุตพภูติ', title_sanskrit: 'utpalabhūtiḥ', status: 'completed' },
            { id: 25, title_thai: 'สรรพสัตว์ปะริปากะคุณตสาทะศรีเทวี', title_sanskrit: 'sarvasattvaparipākaguṇotsadaśrī rātridevatā', status: 'completed' },
            { id: 26, title_thai: 'ชยตตมเศรษฐี', title_sanskrit: 'jayottamaḥ', status: 'completed' },
            { id: 27, title_thai: 'สรรพพฤกษะประผุลละสัมภวะศรีเทวี', title_sanskrit: 'sarvavṛkṣapraphullasusaṃbhavaśrī rātridevatā', status: 'completed' },
            { id: 28, title_thai: 'วสุมิตรา', title_sanskrit: 'vasumitrā', status: 'completed' },
            { id: 29, title_thai: 'เวษฐิละ', title_sanskrit: 'veṣṭhilaḥ', status: 'completed' },
            { id: 30, title_thai: 'อวโลกิเตศวร', title_sanskrit: 'avalokiteśvaraḥ', status: 'completed' },
            { id: 31, title_thai: 'อนันยคามีสัมมาสัมพุทธเจ้า', title_sanskrit: 'ananyagāmī', status: 'completed' },
            { id: 32, title_thai: 'มหาเทวะ', title_sanskrit: 'mahādevaḥ', status: 'completed' },
            { id: 33, title_thai: 'สถาวราเทพธิดา', title_sanskrit: 'sthāvarā pṛthivīdevatā', status: 'completed' },
            { id: 34, title_thai: 'วสันตีเทวี', title_sanskrit: 'vāsaṃtī rātridevatā', status: 'completed' },
            { id: 35, title_thai: 'สมันตคมภีรวระพุทธระศิธวัชะเทวี', title_sanskrit: 'samantagambhīraśrīvimalaprabhā', status: 'completed' },
            { id: 36, title_thai: 'ปรมุทิตะนะยะนะเทวี', title_sanskrit: 'pramuditanayanajagadvirocanā', status: 'completed' },
            { id: 37, title_thai: 'สมันตสัตตวตราโณชศรี', title_sanskrit: 'samantasattvatrāṇojaḥśrīḥ', status: 'completed' },
            { id: 38, title_thai: 'ประศานตรุตสาครวตี', title_sanskrit: 'praśāntarutasāgaravatī', status: 'completed' },
            { id: 39, title_thai: 'สัพพนครรักษาสัมภวเตชศรี', title_sanskrit: 'sarvanagararakṣāsaṃbhavatejaḥśrīḥ', status: 'completed' },
            { id: 40, title_thai: 'สัพพวรุกขประพูลิตนสุขสังวาส', title_sanskrit: 'sarvavṛkṣapraphullanasukhasaṃvāsā', status: 'completed' },
            { id: 41, title_thai: 'สัพพชครักษปณิธานวีรยประภา', title_sanskrit: 'sarvajagadrakṣāpraṇidhānavīryaprabhā rātridevatā', status: 'completed' },
            { id: 42, title_thai: 'สุเตโชมณฑลรติศรี', title_sanskrit: 'sutejomaṇḍalaratiśrīḥ', status: 'completed' },
            { id: 43, title_thai: 'โคปา', title_sanskrit: 'gopā', status: 'completed' },
            { id: 44, title_thai: 'มายา', title_sanskrit: 'māyā', status: 'completed' },
            { id: 45, title_thai: 'สุเรนทราภา', title_sanskrit: 'surendrābhā devakanyā', status: 'completed' },
            { id: 46, title_thai: 'วิศวามิตร', title_sanskrit: 'viśvāmitro dārakācāryaḥ', status: 'completed' },
            { id: 47, title_thai: 'ศิลปาภิชญ์', title_sanskrit: 'śilpābhijñaḥ', status: 'completed' },
            { id: 48, title_thai: 'ภัทรตฺตมา', title_sanskrit: 'bhadrottamā upāsikā', status: 'completed' },
            { id: 49, title_thai: 'มุกตาสาร', title_sanskrit: 'muktāsāro hairaṇyakaḥ', status: 'completed' },
            { id: 50, title_thai: 'สุจันทระ', title_sanskrit: 'sucandro gṛhapatiḥ', status: 'completed' },
            { id: 51, title_thai: 'อชิตเสน', title_sanskrit: 'ajitaseno gṛhapatiḥ', status: 'completed' },
            { id: 52, title_thai: 'ศิวราคร', title_sanskrit: 'śivarāgro brāhmaṇaḥ', status: 'completed' },
            { id: 53, title_thai: 'ศรีสังภวะและศรีมติ', title_sanskrit: 'śrīsaṃbhavaḥ śrīmatiśca', status: 'completed' },
            { id: 54, title_thai: 'ไมเตรยะ', title_sanskrit: 'maitreyaḥ', status: 'completed' },
            { id: 55, title_thai: 'มัญชุศรี', title_sanskrit: 'mañjuśrīḥ', status: 'completed' },
            { id: 56, title_thai: 'สมันตภัทรจริยาประณิธาน', title_sanskrit: 'samantabhadracaryāpraṇidhānam', status: 'completed' }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/40"
    },
    {
        id: 101,
        dsbc_book_id: 23,
        folder: "20_ajitasenavyakarana",
        title_thai: "อชิตเสนพยากรณสูตร",
        title_sanskrit: "Ajitasenavyākaraṇam",
        title_english: "Prophecy of Ajitasena",
        priority: 11,
        status: "completed",
        description: "พระสูตรว่าด้วยคำทำนายของพระอชิตเสน",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "อชิตเสนพยากรณ์", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/23"
    },
    {
        id: 102,
        dsbc_book_id: 24,
        folder: "24_aparimitayuh",
        title_thai: "อปริมิตายุรนามมหายานสูตร",
        title_sanskrit: "Aparimitāyuḥ nāma mahāyāna sūtram",
        title_english: "The Immeasurable Life Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรมหายานว่าด้วยอายุอันประมาณมิได้ เกี่ยวกับพระอมิตายุส",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/24"
    },
    {
        id: 103,
        dsbc_book_id: 25,
        folder: "25_arthaviniscayasutram",
        title_thai: "อรรถวินิจฉัยสูตร",
        title_sanskrit: "Arthaviniścayasūtram",
        title_english: "Sutra on the Analysis of Meaning",
        priority: 13,
        status: "pending",
        description: "พระสูตรปรัชญาเกี่ยวกับการวิเคราะห์ความหมายของอรรถะ",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/25"
    },
    {
        id: 104,
        dsbc_book_id: 26,
        folder: "21_maitreyavyakarana",
        title_thai: "อารยะไมเตรยพยากรณสูตร",
        title_sanskrit: "Ārya maitreya-vyākaraṇaṃ",
        title_english: "Noble Prophecy of Maitreya",
        priority: 11,
        status: "completed",
        description: "พระสูตรเกี่ยวกับคำทำนายของพระไมเตรยะ (พระศรีอาริย์) จักรพรรดิศังขะ และนครเกตุวดี",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "ไมเตรยพยากรณ์", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/26"
    },
    {
        id: 105,
        dsbc_book_id: 27,
        folder: "27_aryanityata",
        title_thai: "อารยะอนิจจตาสูตร",
        title_sanskrit: "Āryānityatā sūtram",
        title_english: "Noble Sutra on Impermanence",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยความไม่เที่ยงอันประเสริฐ สอนหลักอนิจจัง",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/27"
    },
    {
        id: 106,
        dsbc_book_id: 28,
        folder: "28_aryapratityasamutpado",
        title_thai: "อารยประตีตยสมุตบาทนามมหายานสูตร",
        title_sanskrit: "Āryapratītyasamutpādo nāma mahāyānasūtram",
        title_english: "Noble Mahayana Sutra on Dependent Origination",
        priority: 13,
        status: "pending",
        description: "พระสูตรหลักสอนปฏิจจสมุปบาท (เหตุปัจจัยแห่งการเกิด)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/28"
    },
    {
        id: 107,
        dsbc_book_id: 29,
        folder: "29_aryarastrapalapariprccha",
        title_thai: "อารยราษฏรปาลปริปฤจฉา",
        title_sanskrit: "Āryarāṣṭrapālaparipṛcchā nāma mahāyānasūtram",
        title_english: "Noble Questioning of Rāṣṭrapāla",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับการปกป้องรัฐและธรรมศาสตร์การปกครอง",
        chapters_count: 2,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/29"
    },
    {
        id: 108,
        dsbc_book_id: 30,
        folder: "30_aryasagaranagarajapariprccha",
        title_thai: "อารยสาครนาคราชปริปฤจฉา",
        title_sanskrit: "Āryasāgaranāgarājaparipṛcchā nāma mahāyānasūtram",
        title_english: "Noble Questioning of the Nāga King Sāgara",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยการทูลถามของพญานาคสาคร",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/30"
    },
    {
        id: 109,
        dsbc_book_id: 31,
        folder: "31_aryasamghata",
        title_thai: "อารยสังฆาฏสูตร",
        title_sanskrit: "Āryasaṃghāṭa sūtram",
        title_english: "Noble Saṃghāṭa Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับผ้าสังฆาฏิและวัตถุสงฆ์",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/31"
    },
    {
        id: 110,
        dsbc_book_id: 32,
        folder: "32_aryasarvabuddhavisayavatarajnanalokalamkaranama",
        title_thai: "อารยสรรพพุทธวิษยาวตารชญานาโลกาลังการ",
        title_sanskrit: "Āryasarvabuddhaviṣayāvatārajñānālokālaṃkāranāma mahāyānasūtram",
        title_english: "Noble Array of the Light of Knowledge of All Buddhas' Range",
        priority: 13,
        status: "pending",
        description: "พระสูตรปรัชญาเกี่ยวกับความรู้และการตรัสรู้ของพระพุทธเจ้าทั้งปวง",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/32"
    },
    {
        id: 111,
        dsbc_book_id: 33,
        folder: "33_aryatriratnanusmrtisutram",
        title_thai: "อารยตรีนตรยานุสมฤติสูตร",
        title_sanskrit: "Āryatriratnānusmṛtisūtram",
        title_english: "Noble Sutra on Recollecting the Triple Gem",
        priority: 13,
        status: "pending",
        description: "พระสูตรสอนการระลึกถึงพระพุทธ พระธรรม พระสงฆ์",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/33"
    },
    {
        id: 112,
        dsbc_book_id: 34,
        folder: "34_aryatriskandha",
        title_thai: "อารยตริสกันธสูตร",
        title_sanskrit: "Āryatriskandha sūtram",
        title_english: "Noble Sutra on the Three Aggregates",
        priority: 13,
        status: "pending",
        description: "พระสูตรสามขันธ์ สอนธรรมในสามหมวด (จริยธรรม จิตใจ ปัญญา)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/34"
    },
    {
        id: 113,
        dsbc_book_id: 37,
        folder: "37_bhavasankrantisutram",
        title_thai: "ภวสงกรานติสูตร",
        title_sanskrit: "Bhavasaṅkrāntisūtram",
        title_english: "Sutra on the Transition of Existence",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับการก้าวล่วงภพและการเวียนว่ายตายเกิด",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/37"
    },
    {
        id: 114,
        dsbc_book_id: 38,
        folder: "38_catusparisat",
        title_thai: "จตุษปริษัทสูตร",
        title_sanskrit: "catuṣpariṣat sūtram",
        title_english: "Sutra on the Four Assemblies",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยบริษัทสี่ (ภิกษุ ภิกษุณี อุบาสก อุบาสิกา)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/38"
    },
    {
        id: 115,
        dsbc_book_id: 41,
        folder: "41_gunakarandavyuha",
        title_thai: "คุณการัณฑวยูหสูตร",
        title_sanskrit: "Guṇakāraṇḍavyūha sūtram",
        title_english: "Sutra on the Array of Qualities",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับคุณวิเศษและเครื่องประดับแห่งธรรม",
        chapters_count: 20,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" },
            { id: 3, title_thai: "บทที่ 3", status: "pending" },
            { id: 4, title_thai: "บทที่ 4", status: "pending" },
            { id: 5, title_thai: "บทที่ 5", status: "pending" },
            { id: 6, title_thai: "บทที่ 6", status: "pending" },
            { id: 7, title_thai: "บทที่ 7", status: "pending" },
            { id: 8, title_thai: "บทที่ 8", status: "pending" },
            { id: 9, title_thai: "บทที่ 9", status: "pending" },
            { id: 10, title_thai: "บทที่ 10", status: "pending" },
            { id: 11, title_thai: "บทที่ 11", status: "pending" },
            { id: 12, title_thai: "บทที่ 12", status: "pending" },
            { id: 13, title_thai: "บทที่ 13", status: "pending" },
            { id: 14, title_thai: "บทที่ 14", status: "pending" },
            { id: 15, title_thai: "บทที่ 15", status: "pending" },
            { id: 16, title_thai: "บทที่ 16", status: "pending" },
            { id: 17, title_thai: "บทที่ 17", status: "pending" },
            { id: 18, title_thai: "บทที่ 18", status: "pending" },
            { id: 19, title_thai: "บทที่ 19", status: "pending" },
            { id: 20, title_thai: "บทที่ 20", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/41"
    },
    {
        id: 116,
        dsbc_book_id: 42,
        folder: "22_karandavyuha",
        title_thai: "การัณฑวยูหสูตร",
        title_sanskrit: "Kāraṇḍavyūhaḥ",
        title_english: "Kāraṇḍavyūha (on Avalokiteśvara)",
        priority: 11,
        status: "completed",
        description: "พระสูตรสรรเสริญพระอวโลกิเตศวรโพธิสัตว์ ว่าด้วยการบำเพ็ญบารมีและพระกรุณาของพระองค์",
        chapters_count: 24,
        chapters: [
            { id: 1, title_thai: "พรรณนาเชตวันวิหาร", status: "completed" },
            { id: 2, title_thai: "ทำให้อเวจีเหือดแห้ง", status: "completed" },
            { id: 3, title_thai: "ปลดปล่อยสัตว์โลก", status: "completed" },
            { id: 4, title_thai: "กำเนิดจันทร์อาทิตย์", status: "completed" },
            { id: 5, title_thai: "รัศมีนานาชนิด", status: "completed" },
            { id: 6, title_thai: "สนทนากับพระตถาคต", status: "completed" },
            { id: 7, title_thai: "กองบุญของอวโลกิเตศวร", status: "completed" },
            { id: 8, title_thai: "แสดงธรรมแก่เวไนย", status: "completed" },
            { id: 9, title_thai: "ปลอบโยนอสูร", status: "completed" },
            { id: 10, title_thai: "พื้นดินเป็นทองคำ", status: "completed" },
            { id: 11, title_thai: "ปลอบโยนพระพลิ", status: "completed" },
            { id: 12, title_thai: "ปลอบโยนพวกยักษ์", status: "completed" },
            { id: 13, title_thai: "เที่ยวภพเทวดา", status: "completed" },
            { id: 14, title_thai: "เที่ยวสิงหลทวีป", status: "completed" },
            { id: 15, title_thai: "เที่ยวพาราณสี", status: "completed" },
            { id: 16, title_thai: "เที่ยวมคธ", status: "completed" },
            { id: 17, title_thai: "พรรณนาพระอัศวราช", status: "completed" },
            { id: 18, title_thai: "พรรณนารูขุมชน", status: "completed" },
            { id: 19, title_thai: "มหาวิทยา ๖ อักษร", status: "completed" },
            { id: 20, title_thai: "มณฑลมหาวิทยา", status: "completed" },
            { id: 21, title_thai: "โอวาทมหาวิทยา", status: "completed" },
            { id: 22, title_thai: "มณฑลมหาวิทยา ๒", status: "completed" },
            { id: 23, title_thai: "พยากรณ์แก่พระอิศวร", status: "completed" },
            { id: 24, title_thai: "บทสรุป", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/42"
    },
    {
        id: 117,
        dsbc_book_id: 43,
        folder: "43_karunapundarika",
        title_thai: "กรุณาบุณฑริกสูตร",
        title_sanskrit: "Karuṇāpuṇḍarīka sūtram",
        title_english: "Lotus of Compassion Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรดอกบัวแห่งกรุณา สอนพระกรุณาและเมตตา",
        chapters_count: 6,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" },
            { id: 3, title_thai: "บทที่ 3", status: "pending" },
            { id: 4, title_thai: "บทที่ 4", status: "pending" },
            { id: 5, title_thai: "บทที่ 5", status: "pending" },
            { id: 6, title_thai: "บทที่ 6", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/43"
    },
    {
        id: 118,
        dsbc_book_id: 44,
        folder: "44_kasyapaparivarta",
        title_thai: "กัศยปปริวรรตสูตร",
        title_sanskrit: "Kāśyapaparivarta sūtram",
        title_english: "Kāśyapa's Chapter",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับพระกัศยปะและคำสอนของท่าน",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/44"
    },
    {
        id: 119,
        dsbc_book_id: 46,
        folder: "23_madhyamakasalistamba",
        title_thai: "มัธยมกชาลิสตัมพสูตร",
        title_sanskrit: "Madhyamaka-śālistambasūtram",
        title_english: "Middle Way Rice Seedling Sutra",
        priority: 11,
        status: "completed",
        description: "พระสูตรว่าด้วยปฏิจจสมุปบาท พระสูตรว่าด้วยต้นข้าวสาลีตามแนวคิดมัธยมก",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "ปฏิจจสมุปบาท", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/46"
    },
    {
        id: 120,
        dsbc_book_id: 47,
        folder: "47_mahamegha",
        title_thai: "มหาเมฆสูตร",
        title_sanskrit: "Mahāmegha sūtram",
        title_english: "Great Cloud Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับเมฆและฝนเป็นสัญลักษณ์ธรรม",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/47"
    },
    {
        id: 121,
        dsbc_book_id: 49,
        folder: "49_mahavadanasutram",
        title_thai: "มหาวทานสูตร",
        title_sanskrit: "Mahāvadānasūtram",
        title_english: "Great Legend Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรรวมเรื่องราวอัศจรรย์ในพุทธประวัติ (อวทานอันยิ่งใหญ่)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/49"
    },
    {
        id: 122,
        dsbc_book_id: 50,
        folder: "50_megha_sutram",
        title_thai: "เมฆสูตร",
        title_sanskrit: "Megha sūtram",
        title_english: "Cloud Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรเกี่ยวกับสัญลักษณ์ของเมฆในธรรม",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/50"
    },
    {
        id: 123,
        dsbc_book_id: 51,
        folder: "51_nairatmyapariprccha",
        title_thai: "ไนราตมยปริปฤจฉา",
        title_sanskrit: "Nairātmyaparipṛcchā nāma mahāyānasūtram",
        title_english: "Questioning on Non-Self",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยการทูลถามเรื่องอนัตตา (ความไม่มีตัวตน)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/51"
    },
    {
        id: 124,
        dsbc_book_id: 52,
        folder: "52_pancaraksa",
        title_thai: "ปัญจรักษาสูตร",
        title_sanskrit: "Pañcarakṣā sūtram",
        title_english: "Five Protections Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรแห่งการคุ้มครองทั้งห้า (พระคาถารักษา 5 องค์)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/52"
    },
    {
        id: 125,
        dsbc_book_id: 55,
        folder: "55_salistambasutram",
        title_thai: "ชาลิสตัมพสูตร",
        title_sanskrit: "Śālistambasūtram",
        title_english: "Rice Seedling Sutra",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยต้นข้าวสาลี อุปมาเรื่องปฏิจจสมุปบาท",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/55"
    },
    {
        id: 126,
        dsbc_book_id: 56,
        folder: "03_samadhiraja",
        title_thai: "สมาธิราชสูตร",
        title_sanskrit: "Samādhirājasūtram",
        title_english: "King of Samadhi Sutra",
        priority: 12,
        status: "pending",
        description: "พระสูตรราชาแห่งสมาธิ สอนสมาธิขั้นสูง",
        chapters_count: 40,
        chapters: [
            { id: 1, title_thai: "บทที่ 1", status: "pending" },
            { id: 2, title_thai: "บทที่ 2", status: "pending" },
            { id: 3, title_thai: "บทที่ 3", status: "pending" },
            { id: 4, title_thai: "บทที่ 4", status: "pending" },
            { id: 5, title_thai: "บทที่ 5", status: "pending" },
            { id: 6, title_thai: "บทที่ 6", status: "pending" },
            { id: 7, title_thai: "บทที่ 7", status: "pending" },
            { id: 8, title_thai: "บทที่ 8", status: "pending" },
            { id: 9, title_thai: "บทที่ 9", status: "pending" },
            { id: 10, title_thai: "บทที่ 10", status: "pending" },
            { id: 11, title_thai: "บทที่ 11", status: "pending" },
            { id: 12, title_thai: "บทที่ 12", status: "pending" },
            { id: 13, title_thai: "บทที่ 13", status: "pending" },
            { id: 14, title_thai: "บทที่ 14", status: "pending" },
            { id: 15, title_thai: "บทที่ 15", status: "pending" },
            { id: 16, title_thai: "บทที่ 16", status: "pending" },
            { id: 17, title_thai: "บทที่ 17", status: "pending" },
            { id: 18, title_thai: "บทที่ 18", status: "pending" },
            { id: 19, title_thai: "บทที่ 19", status: "pending" },
            { id: 20, title_thai: "บทที่ 20", status: "pending" },
            { id: 21, title_thai: "บทที่ 21", status: "pending" },
            { id: 22, title_thai: "บทที่ 22", status: "pending" },
            { id: 23, title_thai: "บทที่ 23", status: "pending" },
            { id: 24, title_thai: "บทที่ 24", status: "pending" },
            { id: 25, title_thai: "บทที่ 25", status: "pending" },
            { id: 26, title_thai: "บทที่ 26", status: "pending" },
            { id: 27, title_thai: "บทที่ 27", status: "pending" },
            { id: 28, title_thai: "บทที่ 28", status: "pending" },
            { id: 29, title_thai: "บทที่ 29", status: "pending" },
            { id: 30, title_thai: "บทที่ 30", status: "pending" },
            { id: 31, title_thai: "บทที่ 31", status: "pending" },
            { id: 32, title_thai: "บทที่ 32", status: "pending" },
            { id: 33, title_thai: "บทที่ 33", status: "pending" },
            { id: 34, title_thai: "บทที่ 34", status: "pending" },
            { id: 35, title_thai: "บทที่ 35", status: "pending" },
            { id: 36, title_thai: "บทที่ 36", status: "pending" },
            { id: 37, title_thai: "บทที่ 37", status: "pending" },
            { id: 38, title_thai: "บทที่ 38", status: "pending" },
            { id: 39, title_thai: "บทที่ 39", status: "pending" },
            { id: 40, title_thai: "บทที่ 40", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/56"
    },
    {
        id: 127,
        dsbc_book_id: 57,
        folder: "57_sarvatathagatadhisthanavyuham",
        title_thai: "สรรพตถาคตาธิษฐานวยูหสูตร",
        title_sanskrit: "Sarvatathāgatādhiṣṭhānavyūham sūtram",
        title_english: "Array of all Tathāgatas' Empowerment",
        priority: 13,
        status: "pending",
        description: "พระสูตรปรัชญาเกี่ยวกับพระพุทธเจ้าทั้งหลายและการอธิษฐาน",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/57"
    },
    {
        id: 128,
        dsbc_book_id: 58,
        folder: "13_sukhavativyuha",
        title_thai: "สุขาวดีวยูหสูตร (ฉบับย่อ)",
        title_sanskrit: "Sukhāvatīvyūhaḥ (saṃkṣiptamātṛkā)",
        title_english: "Sukhavati Array (Short Version)",
        priority: 12,
        status: "pending",
        description: "พระสูตรอธิบายดินแดนสุขาวดีแบบสรุป (จุลสุขาวดีวยูหสูตร)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/58"
    },
    {
        id: 129,
        dsbc_book_id: 59,
        folder: "24_sukhavativyuha_vistara",
        title_thai: "สุขาวดีวยูหสูตร (ฉบับขยาย)",
        title_sanskrit: "Sukhāvatīvyūhaḥ (vistaramātṛkā)",
        title_english: "Sukhavati Array (Long Version)",
        priority: 11,
        status: "completed",
        description: "พระสูตรอธิบายดินแดนสุขาวดีแบบละเอียด (มหาสุขาวดีวยูหสูตร)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/59"
    },
    {
        id: 130,
        dsbc_book_id: 61,
        folder: "61_vimalakirtinirdesa",
        title_thai: "วิมลกีรตินิรเทศ (อีก ID)",
        title_sanskrit: "Vimalakīrtinirdeśa sūtram",
        title_english: "Vimalakīrti's Teaching (alternate ID)",
        priority: 13,
        status: "pending",
        description: "พระสูตรวิมลกีรตินิรเทศ หมายเลข DSBC-ID อื่น (ซ้ำกับ book 35)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/61"
    },
    {
        id: 131,
        dsbc_book_id: 62,
        folder: "62_vinayaviniscaya",
        title_thai: "วินัยวินิจฉัยอุบาลีปริปฤจฉา",
        title_sanskrit: "Vinayaviniścaya upāliparipṛcchā",
        title_english: "Upāli's Questions on Vinaya Determination",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยการวินิจฉัยพระวินัยโดยพระอุบาลี",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/62"
    },
    {
        id: 132,
        dsbc_book_id: 813,
        folder: "813_saddharmasmrtyupasthanasutra",
        title_thai: "สัทธรรมสติปัฏฐานสูตร",
        title_sanskrit: "Saddharmasmṛtyupasthānasūtra",
        title_english: "Sutra on the Foundations of Mindfulness",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยการระลึกถึงธรรมอันดี (สติปัฏฐาน)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/813"
    },
    {
        id: 133,
        dsbc_book_id: 818,
        folder: "25_vajrasattva",
        title_thai: "วัชรสัตตวนิษปาทนสูตร",
        title_sanskrit: "Vajrasattvaniṣpādana Sūtra",
        title_english: "Vajrasattva Attainment Sutra",
        priority: 11,
        status: "completed",
        description: "พระสูตรเกี่ยวกับการปฏิบัติเพื่อบรรลุเป็นวัชรสัตตวะ โดยภวตปัตติกรรมแห่งคุหยสมาชมหาโยคตันตระ",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "วัชรสัตตวนิษปาทน", status: "completed" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/818"
    },
    {
        id: 134,
        dsbc_book_id: 850,
        folder: "26_maitreyavyakarana",
        title_thai: "ไมเตรยพยากรณสูตร",
        title_sanskrit: "Maitreyavyākaraṇa",
        title_english: "Prophecy of Maitreya",
        priority: 11,
        status: "pending",
        description: "พระสูตรพยากรณ์พระศรีอาริยเมตไตรย (พระไมเตรยะ)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/850"
    },
    {
        id: 135,
        dsbc_book_id: 873,
        folder: "873_sarvabuddhavisayavatarajnanalokalakara",
        title_thai: "สรรพพุทธวิษยาวตารชญานาโลกาลังการ",
        title_sanskrit: "Sarvabuddhaviṣayāvatārajñānālokālaṁkāra nāma mahāyānasūtra",
        title_english: "Array of the Light of Knowledge of All Buddhas' Range (alt ID)",
        priority: 13,
        status: "pending",
        description: "พระสูตรแห่งแสงสว่างแห่งความรู้ทั่วถึงในพระพุทธเจ้าทั้งหมด (อีก ID)",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/873"
    },
    {
        id: 136,
        dsbc_book_id: 906,
        folder: "906_prahanapurakasatavandana",
        title_thai: "ประหาณปูรกศตวันทนานามมหายานสูตร",
        title_sanskrit: "prahāṇapūrakaśatavandanānāma mahāyānasūtram",
        title_english: "Hundred Homages Completing Abandonment",
        priority: 13,
        status: "pending",
        description: "พระสูตรสรรเสริญด้วยการบูชาร้อยครั้ง",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/906"
    },
    {
        id: 137,
        dsbc_book_id: 936,
        folder: "936_ajatasatrukaukrtyavinodanasutra",
        title_thai: "อชาตศัตรูเกากฤตยวิโนทนสูตร",
        title_sanskrit: "Ajātaśatrukaukṛtyavinodanāsūtra",
        title_english: "Dispelling Ajātaśatru's Remorse",
        priority: 13,
        status: "pending",
        description: "พระสูตรว่าด้วยการบรรเทาความเดือดร้อนใจของพระเจ้าอชาตศัตรู",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/936"
    },
    {
        id: 138,
        dsbc_book_id: 964,
        folder: "964_ajatasatrukaukrtyavinodanasutra",
        title_thai: "อชาตศัตรูเกากฤตยวิโนทนสูตร (ซ้ำ 1)",
        title_sanskrit: "Ajātaśatrukaukṛtyavinodanāsūtra",
        title_english: "Dispelling Ajātaśatru's Remorse (copy 1)",
        priority: 13,
        status: "pending",
        description: "สำเนาซ้ำของพระสูตรอชาตศัตรูเกากฤตยวิโนทนสูตร",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/964"
    },
    {
        id: 139,
        dsbc_book_id: 965,
        folder: "965_ajatasatrukaukrtyavinodanasutra",
        title_thai: "อชาตศัตรูเกากฤตยวิโนทนสูตร (ซ้ำ 2)",
        title_sanskrit: "Ajātaśatrukaukṛtyavinodanāsūtra",
        title_english: "Dispelling Ajātaśatru's Remorse (copy 2)",
        priority: 13,
        status: "pending",
        description: "สำเนาซ้ำของพระสูตรอชาตศัตรูเกากฤตยวิโนทนสูตร",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/965"
    },
    {
        id: 140,
        dsbc_book_id: 966,
        folder: "966_ajatasatrukaukrtyavinodanasutra",
        title_thai: "อชาตศัตรูเกากฤตยวิโนทนสูตร (ซ้ำ 3)",
        title_sanskrit: "Ajātaśatrukaukṛtyavinodanāsūtra",
        title_english: "Dispelling Ajātaśatru's Remorse (copy 3)",
        priority: 13,
        status: "pending",
        description: "สำเนาซ้ำของพระสูตรอชาตศัตรูเกากฤตยวิโนทนสูตร",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/966"
    },
    {
        id: 141,
        dsbc_book_id: 969,
        folder: "969_ajatasatrukaukrtyavinodanasutra",
        title_thai: "อชาตศัตรูเกากฤตยวิโนทนสูตร (ซ้ำ 4)",
        title_sanskrit: "Ajātaśatrukaukṛtyavinodanāsūtra",
        title_english: "Dispelling Ajātaśatru's Remorse (copy 4)",
        priority: 13,
        status: "pending",
        description: "สำเนาซ้ำของพระสูตรอชาตศัตรูเกากฤตยวิโนทนสูตร",
        chapters_count: 1,
        chapters: [
            { id: 1, title_thai: "เนื้อหา", status: "pending" }
        ],
        source_url: "https://www.dsbcproject.org/canon-text/book/969"
    }
];

// เนื้อหาพระสูตร - บทที่ 1 และ 2 วิมาลากีรตินิเทศสูตร
const CHAPTER_CONTENT = {
    "35_1": {
        title: "บทที่ ๑: พุทธเกษตรบริสุทธิ์",
        title_sanskrit: "buddhakṣetrapariśuddhinidānam",
        verses: [
            { sanskrit: "namaḥ sarvātītapratyutpannānāgatebhyo buddhabodhisattvāryaśrāvakapratyekabuddhebhyaḥ", thai: "กราบไหว้แด่พระพุทธเจ้า พระโพธิสัตว์ พระอริยสาวก และพระปัจเจกพุทธเจ้าทั้งหลาย ในอดีต ปัจจุบัน และอนาคต" },
            { sanskrit: "evaṃ mayā śrutam", thai: "ดังเราได้สดับมาแล้ว", commentary: "คำขึ้นต้นพระสูตรทุกสูตร" },
            { sanskrit: "ekasmin samaye bhagavān vaiśālyāṃ viharati sma āmrapālīvane", thai: "ครั้งหนึ่ง พระผู้มีพระภาคเจ้าประทับ ณ เมืองเวสาลี สวนอัมรปานี", commentary: "āmrapālīvana = สวนอัมรปานี; vaiśālี = เวสาลี (เมืองหลวงของลิจฉวี)" },
            { sanskrit: "mahatā bhikṣusaṃghena sārdham aṣṭābhirbhikṣusahasraiḥ sarvairarhadbhiḥ kṣīṇāsravairniḥkleśair", thai: "ทรงห้อมล้อมด้วยภิกษุสงฆ์หมู่ใหญ่ แปดพันรูป ล้วนเป็นพระอรหันต์ ทุกข์ดับแล้ว ไม่มีกิเลส ฝึกตนได้แล้ว หลุดพ้นจากกิเลสแล้ว" },
            { sanskrit: "suvimuktacittaiḥ suvimuktaprajñairājāneyairmahānāgaiḥ kṛtakṛtyaiḥ kṛtakaraṇีyairapahṛtabhārairanuprāptasvakārthaiḥ", thai: "ถึงพร้อมด้วยความหลุดพ้นแห่งจิต ถึงพร้อมด้วยความหลุดพ้นแห่งปัญญา เป็นม้าชั้นดี นาคผู้ยิ่งใหญ่ ทำกิจสำเร็จแล้ว ทำกิจที่พึงทำแล้ว ปลดภาระอันหนักแล้ว ถึงประโยชน์ของตนแล้ว" },
            { sanskrit: "dvātriṃśadā ca bodhisattvasahastraiḥ sārdham-abhijñānābhijñātairbodhisattvair", thai: "ร่วมกับพระโพธิสัตว์สามสิบสองพระองค์ หลายพันรูป เป็นที่รู้จัก ได้รับการฝึกฝนอิทธิฤทธิ์อันยิ่งใหญ่ ได้รับการหนุนนำจากพระพุทธเจ้า เป็นผู้รักษาพระธรรม" },
            { sanskrit: "tato licchavikumāro ratnākaro bodhisatvo licchavikumārāṇām pañcaśatamātrañca saptaratnacchatraṃ samādāya", thai: "ครั้งนั้น รัตนัคระ หนุ่มน้อยชาวลิจฉวี พระโพธิสัตว์ ทรงร่มแก้วเจ็ดประการ พร้อมกับหนุ่มน้อยลิจฉวีประมาณห้าร้อย ออกจากเวสาลีมหาธานี เข้าไปเฝ้าพระผู้มีพระภาคเจ้า", commentary: "ratnākara = รัตนัคระ (ผู้มีสมบัติมาก); licchavi = ลิจฉวี (ตระกูลกษัตริย์ครองเวสาลี)" },
            { sanskrit: "tāni niryātitāni ratnacchatrāṇi samanantaraṃ sadyo buddhānubhāvenaikีbhūtvā", thai: "ร่มแก้วเหล่านั้นเมื่อถวายแล้ว โดยอานุภาพแห่งพระพุทธเจ้า กลับกลายเป็นร่มเดียว", commentary: "นี่คือปาฏิหาริย์ร่มแก้ว - ร่มเจ็ดรวมเป็นหนึ่ง" },
            { sanskrit: "tena ratnacchatreṇāyaṃ sarvatrisāhasramahาสāhasralokadhātuaḥ saṃchāditaḥ pratibhāti sma", thai: "ร่มแก้วเดียวนั้นได้ปกคลุมโลกธาตุสามพันมหาสังสาลิกะทั้งหมด โลกธาตุนั้นมีขนาดเท่ากับร่มแก้วใหญ่", commentary: "trisāhasramahāsāhasralokadhātu = โลกธาตุสามพันมหาสังสาลิกะ (หน่วยวัดจักรวาล)" },
            { sanskrit: "sumeruḥ parvatarājaśca himavantaparvataśca mucilindaparvataśca", thai: "ภูเขาต่างๆ เช่น พระสุเมรุ พระราชาแห่งภูเขา ภูเขาหิมาพาน ภูเขามุจลินทร์ ภูเขามหามุจลินทร์ ภูเขาคันธมาดานะ ภูเขารัตนภูเขา ภูเขากาลภูเขา ภูเขาจักรวาฬ ภูเขามหาจักรวาฬ ทั้งหมดกลับปรากฏอยู่ภายในร่มแก้วนั้น" },
            { sanskrit: "yadasmin trisāhasramahāsāhasralokadhātau kiṃcij jala syāt", thai: "น้ำในโลกธาตุนี้ ไม่ว่าจะเป็นมหาสมุทร ทะเล บึง บ่อ แม่น้ำ ลำธาร ทั้งหมดกลับปรากฏอยู่ภายในร่มแก้วนั้น" },
            { sanskrit: "ādityacandravimānāśva tārakārūpāṇi devabhavanāni ca", thai: "พระอาทิตย์ พระจันทร์ ยานอวกาศ ดวงดาว ที่อยู่ของเทพยดา นครของนาค ที่อยู่ของยักษ์ กินนร ครุฑ มโหราค ปราสาทของจตุโลกบาล เทศ หมู่บ้าน นคร นิคม ราชธานี ทั้งหมดปรากฏแสงแห่งร่มแก้วนั้น" },
            { sanskrit: "daśadigloke bhagavatām buddhānāṃ yā dharmadeśanotpannā, sā'pi tasmādekākino mahāratnachatrān nirgate svare nadati sma", thai: "พระสุรเสียงแสดงธรรมของพระพุทธเจ้าทั้งหลายในสิบทิศ ก็ยังดังก้องออกมาจากร่มแก้วเดียวนั้น", commentary: "ปาฏิหาริย์: เสียงธรรมจากทุกทิศดังก้องจากร่มเดียว" },
            { sanskrit: "atha bhagavato'smin evaṃ rūpe mahāprātihārye dṛṣṭe, sā sarvāvatี parṣadāścaryaprāptā'bhūt", thai: "เมื่อพระผู้มีพระภาคเจ้าทรงแสดงปาฏิหาริย์อันยิ่งใหญ่เช่นนี้ บริษัททั้งหมดต่างประหลาดใจ ยินดี ปิติ บันเทิงใจ ดีใจ สรรเสริญพระตถาคตด้วยตาไม่กระพริบ" },
            { sanskrit: "tato ratnākaro licchavikumāro dakṣiṇaṃ jānumaṇḍalaṃ pṛthivyāṃ pratiṣṭhāpya", thai: "ครั้งนั้น รัตนัคระหนุ่มลิจฉวี เห็นปาฏิหาริย์อันยิ่งใหญ่นี้แล้ว จึงวางเข่าขวาบนพื้นดิน ประสานมือแสดงความเคารพต่อพระผู้มีพระภาคเจ้า แล้วสรรเสริญด้วยคาถาว่า", commentary: "จุดเริ่มต้นคาถาสรรเสริญ 15 บท" },
            { sanskrit: "viśālanetra śuddharucirapadmadalavat | śubhābhiprāya śamathapāragata paramaprāpta ||", thai: "ผู้มีพระเนตรกว้าง ดั่งบัวพ้นน้ำอันบริสุทธิ์ ผู้มีความปรารถนาดี ถึงซึ่งความสงบอันสูงสุด", commentary: "คาถาที่ 1: สรรเสริญพระเนตรกว้างเหมือนบัว" },
            { sanskrit: "kuśalakarmācitavanaprameyaguṇasāgara | namastubhyaṃ śramaṇāya śāntimārgasaṃniśritāya ||", thai: "ผู้สะสมบุญอันประมาณมิได้ ดั่งมหาสมุทร ข้าพระองค์น้อมไหว้ท่าน นักบวชผู้พำนักในหนทางอันสงบ" },
            { sanskrit: "puruṣavṛṣabhasya yūyannāyakasyarddhividhim paśyata | sugatasya sarvāṇyapi kṣetrāṇi pravaravyaktāni dṛśyante ||", thai: "ท่านทั้งหลายจงดูอิทธิฤทธิ์ของผู้นำ บุรุษสุดยอด แห่งพระสุคต แดนทั้งหลายของพระองค์ประจักษ์งามเลิศ" },
            { sanskrit: "tava dharmakathodārāmฤtagā tāni sarvāṇyasmin gaganatale dṛśyante ||", thai: "ธรรมเทศนาของท่าน คือน้ำอมฤต สิ่งเหล่านั้นทั้งหมดปรากฏในฟากฟ้านี้" },
            { sanskrit: "tavottamadharmarājyam idam, dharmarāja | jinena ca jagadbhayo dharmadhanam pradalitam ||", thai: "ธรรมราชาของท่าน คือราชของท่าน พระชินเจ้าทรงประทานธารณีแห่งธรรม แด่โลกผู้กลัวภัย" },
            { sanskrit: "dharmaprabhedanavijñāya paramārthasaṃdarśakāya | dharmeśvarāya dharmarājāya tubhyaṃ śirasā namaḥ ||", thai: "ผู้รู้ธรรม ผู้แสดงพระสัจจธรรมอันสูงสุด ผู้เป็นเจ้าแห่งธรรม ผู้เป็นราชาแห่งธรรม ข้าพระองค์น้อมไหว้ท่าน" },
            { sanskrit: "'astināstya pagatāḥ sarva ime dharmā hetūn pratีtyasamutpannāḥ | eṣvātmavedakakārakā na santi | kuśalapāpakarma kiṃcidavipraṇāśam' iti vacanenopadarśayasi ||", thai: "'มีแล้ว ไม่มีแล้ว ธรรมทั้งหลายเกิดแต่เหตุ ในเหล่านั้นไม่มีตัวตน ไม่มีผู้ทำ กรรมดี กรรมชั่วไม่สูญสิ้น' ท่านแสดงด้วยพระวาจานี้", commentary: "แสดงหลักปฏิจจสมุปบาท" },
            { sanskrit: "tvayā munีndra, mārātibalabalaṃ saṃjitya | paramapraśāntabodhyamaraṇakṣemaṃ prāptam ||", thai: "ผู้เป็นจอมมุนี ทรงชนะอานุภาพของมาร ถึงความสงบอันสูงสุด ความเกษมจากโยธา" },
            { sanskrit: "tattatra nirvedanacittamano'pracāraiaḥ | sarvatีrthikakugaṇairajñātam ||", thai: "ด้วยจิตไม่หวั่นไหว ด้วยความไม่แปรผันแห่งจิต สิ่งนั้นไม่รู้แก่ลัทธิภายนอกทั้งหลาย" },
            { sanskrit: "adbhutaṃ dharmarājadevamanuṣyāṇāmabhimukham | triparivarta bahvākāraṃ praśāntsvabhāvaviśuddhaṃ dharmacakraṃ pravartayasi ||", thai: "ธรรมอันอัศจรรย์ของพระเจ้าจอมเทพ แสดงให้เห็นต่อเทวดาและมนุษย์ ธรรมจักรอันสงบ สามปริวัติ อันไพบูลย์ ท่านทรงตั้งธรรมจักรให้แก่โลก", commentary: "triparivarta = สามปริวัติ - การแสดงธรรม 3 รอบ" },
            { sanskrit: "ye dharmaratnena suvinีtāḥ | te'vitarkā nityapraśāntāḥ ||", thai: "ผู้ถึงฝั่งด้วยธรรมรัตน์ ไม่หวั่นไหว" },
            { sanskrit: "tvaṃ hi jātijarāmaraṇāntago vaidyo varaḥ | aprameyaguṇasāgarāya śirasā namaḥ ||", thai: "ผู้เป็นแพทย์ชั้นยอด ผู้รู้โรคทั้งหลายของสัตว์โลก ข้าพระองค์น้อมไหว้ท่าน" },
            { sanskrit: "satkārasukṛtaissumerurivāprakampyaḥ | śีlavatsu ca duḥśีleṣu ca samam maitrี ||", thai: "ด้วยการบูชาและกรรมดี ดั่งพระสุเมรุไม่หวั่นไหว มีความรักในผู้มีศีล และในผู้ไม่มีศีลเท่าเทียมกัน" },
            { sanskrit: "samatāsaṃprasthito manaśvākāśavat | asmai sattvaratnāya kuryāt pูjānna kaḥ ?", thai: "มีจิตยึดมั่นในความเสมอภาค ดั่งอากาศ ใครเล่าจะไม่บูชาผู้เป็นรัตนะแห่งสัตว์ทั้งหลาย?" },
            { sanskrit: "mahāmune imā hi parṣadaḥ saṃnipatitāḥ | tava mukhaṃ suprasādamanasā prekṣante ||", thai: "มหาบัณฑิต บริษัทเหล่านี้มาประชุมกัน ทุกคนมองพระพักตร์ของท่านด้วยจิตอันผ่องใส" },
            { sanskrit: "sarvairapi jinaḥ svābhimukhe dṛṣṭaḥ | taddhruvam jinasyāveṇikabuddhalakṣaṇam ||", thai: "ทุกคนเห็นพระชินเจ้าอยู่ตรงหน้า แน่นอน นั่นคือลักษณะอันพิเศษแห่งพระตถาคต" },
            { sanskrit: "bhagavata ekavāk pravartitā, paraṃ tu parṣadbhirnānāvākṣu vijñāyate ||", thai: "พระสุรเสียงแห่งพระผู้มีพระภาคเจ้า ดังขึ้นหนึ่งเดียว แต่บริษัทได้ยินต่างกัน ทุกคนเข้าใจประโยชน์ของตนตามควร", commentary: "ปาฏิหาริย์: เสียงเดียว แต่ผู้ฟังได้ยินตามควรแก่ตน" },
            { sanskrit: "tenaikavāksvavaghoṣaṇakāryeṇa| kecit vāsanāparibhāvitāḥ kecit pratipannaḥ", thai: "ด้วยเสียงเดียวนั้นในการประกาศ บ้างได้รับการขัดเกลา บ้างถึงพร้อม ผู้มีความสงสัยและข้อข้องใจ ผู้นำทรงชี้แจงให้กระจ่าง" },
            { sanskrit: "daśabalanāyakavikrāmiṇe tubhyaṃ namaḥ | namaste'bhayāya bhayavipramuktāya ||", thai: "ข้าไหว้ท่าน ผู้กล้าหาญ ผู้มีอิทธิฤทธิ์ ข้าไหว้ท่านผู้ไม่กลัว ผู้หลุดพ้นจากภัยทั้งปวง" },
            { sanskrit: "āveṇikadharmānavasyaṃ supratipannāya | sarvajagannetre tubhyaṃ namaḥ | namaḥ sarvasaṃyojanabandhanacchedakāya ||", thai: "ผู้ถึงพร้อมด้วยธรรมอันพิเศษ ผู้เป็นดวงตาแห่งโลก ข้าไหว้ท่าน ผู้ตัดขาดสายโซ่แห่งพันธะทั้งปวง" },
            { sanskrit: "pāragatāya sthalasthitāya namaḥ | khinnajagattārakāya tubhyaṃ namaḥ | namaḥ saṃsāraprabṛttyām apratiṣṭhitāya ||", thai: "ผู้ถึงฝั่ง ผู้ยืนอยู่บนฝั่ง ข้าไหว้ท่าน ผู้ช่วยโลกอันเหนื่อยล้า ข้าไหว้ท่าน ผู้ไม่ยึดมั่นในการเริ่มวัฏสงสาร" },
            { sanskrit: "sattvagatisaṃprasthitaḥ sarvasahacaraḥ | paraṃ tu sarvagativimuktamanaḥ ||", thai: "ทางแห่งสัตว์ทั้งหลาย พระองค์ทรงดำเนินไปพร้อมสัตว์ทั้งหลาย แต่จิตของพระองค์หลุดพ้นจากภพทั้งปวง" },
            { sanskrit: "pariśuddhapadmamudake jātamudakena paryanupaliptam | munipadmena śūnyatā bhāvitā dhruvam ||", thai: "เกิดในบึงอันบริสุทธิ์ เหมือนดอกบัวเกิดในน้ำ ไม่เปื้อนน้ำ ผู้มีบุญเหมือนบัว ถูกขัดเกลาด้วยความว่างเปล่า แน่นอน" },
            { sanskrit: "sarvākāranimittāni saṃpravāntāni | tvaṃ kasmiṃśvit praṇidhānakārี nāsi ||", thai: "ทิ้งซึ่งเครื่องหมายและรูปทั้งหลาย ท่านไม่ทำด้วยความปรารถนาอันใด" },
            { sanskrit: "pariśuddhasya buddhasya mahānubhāvo'cintyaḥ | ākāśasadṛśam apratiṣṭhitaṃ vandāmyaham ||", thai: "บุญญานุภาพแห่งพระพุทธเจ้าอันบริสุทธิ์นั้น อัศจรรย์ ดั่งอากาศ ไม่มีที่ตั้ง ข้าไหว้พระองค์", commentary: "คาถาสุดท้าย: สรรเสริญพระพุทธเจ้าผู้มีบุญญานุภาพอันอัศจรรย์" },
            { sanskrit: "atha ratnākaro licchavikumāro bhagavantam etad avocat", thai: "เมื่อสรรเสริญพระผู้มีพระภาคเจ้าด้วยคาถาเหล่านั้นแล้ว รัตนัคระหนุ่มลิจฉวีกราบทูลพระผู้มีพระภาคเจ้าว่า" },
            { sanskrit: "'bhagavan, ebhyo licchavikumārebhyaḥ paṃcaśatamātrebhyaḥ sarvebhyo'nuttarasamyak saṃbodhyāṃ saṃpratipannebhyo 'bodhisattvānāṃ pariśuddhaṃ buddhakṣetraṃ kim'- iti pariśuddhaṃ buddhakṣetraṃ pṛcchadbhyo", thai: "\"พระเจ้าข้า หนุ่มน้อยลิจฉวีเหล่านี้ประมาณห้าร้อยรูป ผู้ถึงพร้อมด้วยสัมมาสัมโพธิญาณ ขอพระองค์ตรัสแสดงพุทธเกษตรบริสุทธิ์ของพระโพธิสัตว์เถิด\"" },
            { sanskrit: "evamukte, bhagavān ratnākarāya licchavikumāya sādhukāram adāt- 'sādhu sādhu kumāra'", thai: "พระผู้มีพระภาคเจ้าทรงอนุโมทนาต่อรัตนัคระหนุ่มลิจฉวีว่า \"ดีแล้ว ดีแล้ว กุมาร ดีแล้ว เธอถามเกี่ยวกับพุทธเกษตรบริสุทธิ์ต่อพระตถาคต\"" },
            { sanskrit: "tena hi kumāra tvaṃ śṛṇu sādhu ca suṣṭhu ca manasi kuru | bodhisattvānām pariśuddhaṃ buddha kṣetram ārabhya bhāṣiṣyehaṃ te", thai: "ดังนั้น กุมาร เธอจงฟัง จงพินิจให้ดี เราจะกล่าวเกี่ยวกับพุทธเกษตรบริสุทธิ์ของพระโพธิสัตว์" },
            { sanskrit: "bhagavāṃstānevam āmantrayate sma- 'kulaputra, sattvakṣetraḥ hi bodhisattvasya buddhakṣetram | tatkasya hetoaḥ ? yāvadbodhisattvaḥ sattvānupabṛṃhayati tāvadbuddhakṣetrasya parigrāhakaḥ'", thai: "พระผู้มีพระภาคเจ้าตรัสว่า \"ดูก่อนกุลบุตร สัตว์ทั้งหลายคือพุทธเกษตรของพระโพธิสัตว์ เพราะเหตุใด? เพราะพระโพธิสัตว์ยังสัตว์ทั้งหลายให้เจริญ เท่าไหร่ก็เท่านั้น เป็นผู้รักษาพุทธเกษตร\"", commentary: "หลักสำคัญ: สัตว์ทั้งหลายคือพุทธเกษตร ไม่ใช่สถานที่" },
            { sanskrit: "ratnākara, tadyathā- ākāśasame kicit kartukāmastathā kuryāt kiṃcāpyākāśe hi karaṇe caālaṃkāre ca tathā na yujyate", thai: "รัตนัคระ เหมือนต้องการจะทำในอากาศ ถ้าจะทำอย่างไรในอากาศ การทำและการประดับก็ไม่เหมาะสม" },
            { sanskrit: "ratnākara sarvadharmān ākāśamān jñātvā, bodhisatvo yathā sattvaparipācanārthāya buddhakṣetraṃ kartukāmastathā buddhakṣetraṃ kuryāt", thai: "รัตนัคระ รู้แจ้งธรรมทั้งหลายเหมือนอากาศ พระโพธิสัตว์ถ้าต้องการจะสร้างพุทธเกษตรเพื่อขัดเกลาสัตว์ทั้งหลาย ก็สร้างพุทธเกษตรเช่นนั้น" },
            { sanskrit: "ratnākara, atha cāśayakṣetraṃ hi bodhisattvasya buddhakṣetram", thai: "รัตนัคระ อีกประการหนึ่ง แดนแห่งเจตนาคือพุทธเกษตรของพระโพธิสัตว์" },
            { sanskrit: "tasmāt, kulaputra, bodhisattvena buddhakṣetrapariśuddhaniśvikีrṣayā svacittaparyavadāpanāya prayattavyam| tat kasya hetoḥ ? yathā bodhisattvasya cittaṃ pariśuddham, tādรุśe buddhakṣetram pariśuddham bhavati'", thai: "ดังนั้น กุลบุตร พึงตั้งใจชำระจิตของตนให้บริสุทธิ์ เพื่อปรารถนาพุทธเกษตรบริสุทธิ์ เพราะเหตุใด? เพราะเมื่อจิตของพระโพธิสัตว์บริสุทธิ์ พุทธเกษตรก็บริสุทธิ์", commentary: "หลักสำคัญที่สุด: จิตบริสุทธิ์ พุทธเกษตรก็บริสุทธิ์" },
            { sanskrit: "tato buddhānubhāvenāyuṣmataḥ śāriputrasyaitadabhūt- 'yadi yathā cittaṃ pariśuddham, tādรุśe bodhisattvasya buddhakṣetram pariśuddhaṃ bhavet, bhagavataḥ śākyamunerbodhisattvacaryā carataḥ, tasya cittanna pariśuddhaṃ kim, yathā buddhakṣetram evaṃ rupam pariśuddhanna dṛśyate'?", thai: "ครั้งนั้น โดยอานุภาพแห่งพระพุทธเจ้า มีความคิดเกิดขึ้นในพระสารีบุตรว่า \"ถ้าจิตบริสุทธิ์ พุทธเกษตรก็บริสุทธิ์ ทำไมพระโคตมพุทธเจ้า ผู้ทรงพระชนม์ชีพอย่างพระโพธิสัตว์ พระองค์นี้ พระจิตไม่บริสุทธิ์หรือ ทำไมพุทธเกษตรจึงไม่ปรากฏบริสุทธิ์เช่นนี้\"" },
            { sanskrit: "śāriputra, tat kiṃ manyase? sūryaśva candraḥ kinna pariśuddhau, yathā jātyandhairna dṛśyete ?", thai: "พระผู้มีพระภาคเจ้าตรัสว่า \"สารีบุตร เจ้าเห็นอย่างไร ดวงอาทิตย์และดวงจันทร์บริสุทธิ์หรือไม่ ทำไมคนตาบอดไม่เห็น\"", commentary: "อุปมา: คนตาบอดไม่เห็นดวงอาทิตย์ เพราะตาบอด ไม่ใช่เพราะดวงอาทิตย์ไม่ส่องแสง" },
            { sanskrit: "abravีt- 'no hีdaṃ, bhagavan| tairjātyandhairduṣkṛtam, na tu sūryeṇa ca candreṇa hi duṣkṛtam'", thai: "สารีบุตรกราบทูลว่า \"ไม่เช่นนั้นพระเจ้าข้า นั่นเป็นบาปของคนตาบอด มิใช่ของดวงอาทิตย์และดวงจันทร์\"" },
            { sanskrit: "avocat- 'tathā hi, śāriputra, kenacit sattvena tathāgatasya buddhakṣetraguṇālaṅkāravyūho na dṛśyate, sa sattvājñānena hi doṣaḥ, na tu tathāgatena tasmin doṣaḥ| tathāgatasya buddhakṣetraṃ hi pariśuddham, kiṃ tu tvayā tanna dṛśyate'", thai: "พระผู้มีพระภาคเจ้าตรัสว่า \"เช่นนั้นเหมือนกัน สารีบุตร คนหนึ่งไม่เห็นความประดับด้วยคุณแห่งพุทธเกษตรของพระตถาคต เพราะความไม่รู้ของสัตว์ ไม่ใช่ความผิดของพระตถาคตในที่นั้น พุทธเกษตรของพระตถาคตบริสุทธิ์ แต่เจ้าไม่เห็น\"" },
            { sanskrit: "tato brahmā śikhyāyuṣmantaṃ śāriputramevamabravีt- 'bhadanta śāriputra, tathāgatasya buddhakṣetranna pariśuddham' iti mā bravีḥ'", thai: "ครั้งนั้น พรหมศิกขินตรัสกับสารีบุตรว่า \"ท่านสารีบุตร อย่ากล่าวว่าพุทธเกษตรของพระผู้มีพระภาคเจ้าไม่บริสุทธิ์\"" },
            { sanskrit: "bhadanta śāriputra, pariśuddhaṃ bhagavato buddhakṣetram; tad yathā-paranirmitavaśartidevānām, bhadanta śāriputra, āvāsavyūho yathā, bhagavataḥ śākyamunerbuddhakṣetravyūho'pi mayedรุśo dṛśyate", thai: "ท่านสารีบุตร พุทธเกษตรของพระผู้มีพระภาคเจ้าบริสุทธิ์ เหมือนอย่างปราสาทของเทพผู้ปรารถนาจะเนรมิต ท่านสารีบุตร พุทธเกษตรของพระโคตมพุทธเจ้าก็ปรากฏแก่ข้าพเจ้าเช่นนี้" },
            { sanskrit: "tataḥ śāriputraḥ sthaviro brahmāṇaṃ śikhinamevamabravีt| 'brahman, ahaṃ tvimāṃ mahāpṛthivีmutkūlanikūlakaṇṭakaprapātaśikharaśvabhragūthoḍigalla prākีrṇām paśyāmi'", thai: "สารีบุตรกราบทูลพรหมว่า \"ดูก่อนพราหมณ์ บัดนี้ข้าพเจ้าเห็นแผ่นดินทั้งหลาย เต็มไปด้วยเนินเขา ขุมปล่อง หลุมบ่อ หนทางอันขรุขระ\"" },
            { sanskrit: "brahmā śikhyabravีta- 'tathā hีdrุśaṃ buddhakṣetraṃ pariśuddhanna dṛśyate| bhadanta śāriputra, utkūle nikūle citte buddhajñānāyāśayo niyatamapariśuddhaḥ| yebhyaḥ kebhyaśvit, bhadanta śāriputra, sattveṣu samacittatā ca buddhajñānāyāśayaḥ pariśuddhastairhีdaṃ buddhakṣetram pariśuddhaṃ dรุśyate'", thai: "พรหมศิกขินกล่าวกับสารีบุตรว่า \"ท่านสารีบุตร จิตที่มีเนินเขา ขุมปล่อง จิตที่มีความปรารถนาอันไม่บริสุทธิ์ แน่นอนแล้ว ปัญญาเพื่อพระพุทธเจ้าก็ไม่บริสุทธิ์ ท่านสารีบุตร ผู้มีจิตเป็นกลางต่อสัตว์ทั้งหลาย ผู้มีปัญญาเพื่อพระพุทธเจ้าบริสุทธิ์ เห็นพุทธเกษตรบริสุทธิ์\"", commentary: "จิตบริสุทธิ์ จึงเห็นพุทธเกษตรบริสุทธิ์" },
            { sanskrit: "atha bhagavānimaṃ trisāhasramahāsāhasralokadhātum pādāṅguṣṭhenāhanti sma| samanantarahato'yaṃ lokadhāturanekaratnakūṭamanekaratnaśatasahasrasaṃbhāro", thai: "ครั้งนั้น พระผู้มีพระภาคเจ้าทรงเหยียบโลกธาตุสามพันมหาสังสาลิกะนั้นด้วยปลายพระบาท ในทันที โลกธาตุนั้นกลับกลายเป็นเหมือนแก้วรัตนมีเนินต่างๆ มีเครื่องประดับรัตนะต่างๆ มีรัตนะต่างๆ หลายแสน เหมือนพุทธเกษตรอันประดับด้วยเครื่องประดับแห่งคุณอันไม่มีที่สิ้นสุดของพระตถาคต", commentary: "ปาฏิหาริย์: แสดงให้เห็นว่าพุทธเกษตรบริสุทธิ์เสมอ" },
            { sanskrit: "atha bhagavānāyuṣmantaṃ śāriputramavocat- 'nanu tvaṃ, śāriputra, imaṃ buddhakṣetraguṇavyūhaṃ paśyasi?'", thai: "พระผู้มีพระภาคเจ้าตรัสกับสารีบุตรว่า \"สารีบุตร เจ้าเห็นความประดับด้วยคุณแห่งพุทธเกษตรนี้หรือไม่\"" },
            { sanskrit: "abravีt- 'dhruvam paśyāmi, bhagavan| sandรุśyanta ime'dṛṣṭāśrutapūrvā vyūhāḥ'", thai: "สารีบุตรกราบทูลว่า \"เห็นแล้วพระเจ้าข้า เห็นซึ่งเครื่องประดับที่ไม่เคยเห็น ไม่เคยได้ยินมาก่อน\"" },
            { sanskrit: "abhāṣata- 'śāriputra, idaṃ hi buddhakṣetannityamีdrุśam, ki tu hีnasattvaparipācanārthāya tathāgato buddhakṣetremevaṃ bahudoṣaduṣṭaṃ deśayati'", thai: "พระผู้มีพระภาคเจ้าตรัสว่า \"สารีบุตร พุทธเกษตรเป็นเช่นนี้เสมอ แต่พระตถาคตแสดงพุทธเกษตรที่มีข้อบกพร่องมากมายเช่นนี้ เพื่อขัดเกลาสัตว์ผู้ต่ำทราม\"" },
            { sanskrit: "śāriputra, tadyathāpi nāma devaputrā ekasmin ratnabhājane bhojanaṃ bhakṣanti, api tu yathā-puṇyasaṃnicayabhedena divyāhārāmฤtapratyupasthitāḥ, evameva, śāriputra, sattvā ekasmin buddhakṣetra utpannā yathā-pariśuddhirbuddhānāṃ buddhakṣetraguṇavyūham paśyanti'", thai: "สารีบุตร เหมือนเทพยดาทั้งหลายรับประทานอาหารในภาชนะรัตนใบเดียวกัน แต่ตามบุญที่สะสม อาหารทิพย์น้ำอมฤตก็ปรากฏ เช่นเดียวกัน สารีบุตร สัตว์ที่เกิดในพุทธเกษตรแห่งพระพุทธเจ้าเดียวกัน เห็นความประดับด้วยคุณแห่งพุทธเกษตรตามความบริสุทธิ์ของตน\"" },
            { sanskrit: "asmin buddhakṣetraguṇālaṅkāravyūhe dรุśyamāne, caturaśีtyā prāṇisahasrai- ranuttarasamyaksambodhicittānyutpāditānyabhūvan", thai: "เมื่อเห็นความประดับด้วยคุณแห่งพุทธเกษตรเช่นนี้ มหาชนแปดหมื่นคนเกิดจิตเพื่อพระสัมมาสัมโพธิญาณ" },
            { sanskrit: "ye kecana licchavikumārāṇām pañcaśataṃ licchavikumāreṇa sārdhamupasaṃkrāntāḥ te'pyānulomikีm kṣāntim prāpnuvan", thai: "หนุ่มน้อยลิจฉวีทั้งหลาย cùngกับรัตนัคระ ได้ความอดทนอันเหมาะสม" },
            { sanskrit: "atha bhagavāṃstā ṛdvividhีaḥ piṃḍayati sma; tataśva tadbuddhakṣetraṃ bhūyaḥ pūrvasvabhāvamāpannaṃ dรุśyate sma", thai: "ครั้งนั้น พระผู้มีพระภาคเจ้าทรงแสดงพุทธเกษตรนั้นให้กลับคืนสู่สภาวะเดิม" },
            { sanskrit: "tatra śrāvakayānidevamanuṣyāṇāmetadabhūt- 'anityā vata saṃskārāḥ'", thai: "ในหมู่พระสาวกยาน มนุษย์และเทพยดาเหล่านั้น มีความคิดว่า \"สังขารทั้งหลายไม่เที่ยง\"" },
            { sanskrit: "viditveti dvāṃtriśade prāṇisahasrebhyaḥ sarvadharmeṣu virajo vigatamalaṃ viśuddhaṃ dharmacakṣuḥ; aṣṭābhyo bhikṣusahasrebhyo'nupādāyāśravebhyaścittāni vimuktānyabhūvan", thai: "ด้วยความรู้เห็นนี้ สามสิบสองพันคนเกิดจิตเพื่อพระสัมมาสัมโพธิญาณ พระภิกษุแปดพันรูป ปลดจิตจากความยึดมั่นไม่เหลือ เครื่องกั้นอันบริสุทธิ์" },
            { sanskrit: "catuśีtyāpi buddhakṣetrodārādhimuktikaprāṇisahasraiḥ, sarvadharmān viṭhapana-pratyusthānalakṣaṇān viditvā, anuttarasabhyaksambodhicittānyutpāditāni", thai: "บริษัทแปดหมื่นสัตว์ที่มีความเลื่อมใสอันประเสริฐ รู้แจ้งธรรมทั้งหลาย มีลักษณะแห่งความตั้งอยู่และความดับไป เกิดจิตเพื่อพระสัมมาสัมโพธิญาณ" },
            { sanskrit: "buddhakṣetrapariśuddhinidānasy aparivartaḥ prathamaḥ", thai: "บทที่ ๑ พุทธเกษตรบริสุทธิ์ จบบริบูรณ์" }
        ]
    },
    "35_2": {
        title: "บทที่ ๒: อุบายอันแยบยลอันอจินไตย",
        title_sanskrit: "acintyopāyakauśalyam",
        verses: [
            { sanskrit: "api ca tena kālena vaiśālyāmmahānagaryām eko vimalakีrtirnāma licchavirāsีt", thai: "ในกาลนั้น ณ เมืองเวสาลีมหาธานี มีชาวลิจฉวีผู้หนึ่งชื่อ วิมาลากีรติ", commentary: "วิมาลากีรติ = ผู้มีเกียรติอันบริสุทธิ์" },
            { sanskrit: "pūrvajinakṛtādhikāro'varopitakuśalamūlo'nekbuddhaparyupāsitaḥ kṣāntipratilabdhaḥ", thai: "ได้สร้างบุญมาแต่ครั้งพระพุทธเจ้าก่อน ปลูกต้นเหตุแห่งความดีแล้ว ได้เฝ้าดูแลพระพุทธเจ้ามาหลายพระองค์ ได้รับขันติ" },
            { sanskrit: "pratibhānalabdho mahābhijñāvikrีḍito dhāraṇีpratilabdho vaiśāradyaprāpto nihatamārapratyarthiko", thai: "ได้รับปฏิภาณ เล่นด้วยอิทธิฤทธิ์ใหญ่ ได้รับธารณี ถึงพร้อมด้วยความอาจหาญ ชนะศัตรูแห่งมาร" },
            { sanskrit: "gambhีrdharmanetrี supratipannaḥ prajñāpāramitā niryāta upāyakauśalyagatimgataḥ", thai: "ยืนอยู่ในทางแห่งธรรมอันลึกซึ้ง ถึงแล้วซึ่งปัญญาบารมี เดินไปแล้วในหนทางแห่งอุบายอันแยบยล" },
            { sanskrit: "pratibhānavat sattvāśayacaryāvijñaḥ sattvendriyavarāvarajñānaniryāto yathāpratyarhaṃ dharmaśāstā", thai: "ผู้มีปฏิภาณ รู้จิตและจริตของสัตว์ รู้อินทรีย์อันเลิศและอันหยาบของสัตว์ แสดงธรรมตามควรแก่บุคคล" },
            { sanskrit: "upāyakauśalyena sattvaparipācanārthāya vaiśālyāmmahānagaryā viharan", thai: "เขาอยู่ในเวสาลีมหาธานี เพื่อฝึกฝนสัตว์ทั้งหลายด้วยอุบายอันแยบยล", commentary: "upāyakauśalya = อุบายอันแยบยล - หลักสำคัญของมหายาน" },
            { sanskrit: "'nāthadaridrasattvasaṃgrahāyākṣayabhogaḥ", thai: "เพื่อสงเคราะห์สัตว์ผู้ไม่มีผู้พึ่งและยากจน เขามีความสุขอันไม่สิ้นสุด" },
            { sanskrit: "duḥśีlasattvasaṃgrahāya pariśuddhaśีlaḥ", thai: "เพื่อสงเคราะห์สัตว์ผู้มีศีลไม่บริสุทธิ์ เขามีศีลบริสุทธิ์" },
            { sanskrit: "dviṣṭātidviṣṭavyāpādi duaḥśีlakrodhanasattvasaṃgrahāya kṣāntidamaprāptaḥ", thai: "เพื่อสงเคราะห์สัตว์ผู้โกรธแค้นมาก เขามีความอดทนและความสงบ" },
            { sanskrit: "alasasattvasaṃgrahāyottaptavีryaḥ", thai: "เพื่อสงเคราะห์สัตว์ผู้เกียจคร้าน เขามีวิริยะอันร้อนแรง" },
            { sanskrit: "vikṣiptacittasattvasaṃgrahāya dhyānasmฤtisamādhivihārี", thai: "เพื่อสงเคราะห์สัตว์ผู้จิตฟุ้งซ่าน เขามีที่อยู่แห่งสมาธิ สติ และสมาธิ" },
            { sanskrit: "dauṣprajñasattvasaṃgrahāya prajñāviniścayalābhี", thai: "เพื่อสงเคราะห์สัตว์ผู้มีปัญญาทราม เขามีผลแห่งปัญญา" },
            { sanskrit: "yadyapyavadātavastrapariveṣṭitaḥ śramaṇacarita sampannaḥ", thai: "แม้เขาจะนุ่งห่มผ้าขาว เขาก็สมบูรณ์ด้วยจริยาของนักบวช" },
            { sanskrit: "gṛhāvāse yadyapi viharan, kāmarūpārūpadhātvasaṃsṛṣṭaḥ", thai: "แม้อยู่ในเรือน เขาก็กลมกลืนในกามภพ รูปภพ และอรูปภพ" },
            { sanskrit: "putradārāntaḥpure'pi nityam brahmacārี", thai: "แม้มีภรรยาและบุตร เขาก็เป็นผู้ถือพรหมจรรย์เสมอ", commentary: "วิมาลากีรติเป็นตัวอย่างคฤหัสถ์: อยู่ในโลกแต่ไม่ยึดติด" },
            { sanskrit: "parivāraparivṛto yadyapi dรุśyamānaḥ pravivekacārี", thai: "แม้มีบริวารล้อมรอบ เขาก็ดำรงชีวิตด้วยความสงัด" },
            { sanskrit: "bhūṣaṇālaṃkṛto dรุśyamānaḥ, kiṃ tu lakṣaṇopetaḥ", thai: "แม้ประดับด้วยเครื่องประดับ ก็มีลักษณะอันประดับแล้ว" },
            { sanskrit: "yadyapyāhārapānabhojanaṃ dรุśyamāno bhuñjan, sadā dhyānasya prีtibhojanaṃ paribhuṅkte sma", thai: "แม้รับประทานอาหาร ก็รับประทานด้วยความยินดีแห่งสมาธิเสมอ" },
            { sanskrit: "sarvakrีḍādyūtakoṇeṣu dรุśyamāno'pi, krีḍādyūtaraktān sattvān paripācayati sma nityamamoghacārี", thai: "แม้เห็นในที่เล่นการพนันทั้งหลาย ก็ฝึกฝนสัตว์ผู้ติดการพนัน และเป็นผู้ดำเนินอย่างไม่สูญเปล่าเสมอ" },
            { sanskrit: "sarvapāṣaṇḍikān yadyapi gaveṣี, buddhe'bhedyābhiprāyasampannaḥ", thai: "แม้แสวงหาในลัทธิทั้งหลาย ก็มีจิตมั่นคงในพระพุทธเจ้า" },
            { sanskrit: "lokalokottaramantraśāstravijñāno'pi sadā dharmasammodanandādhimuktaḥ", thai: "แม้รู้มนต์คัมภีร์ทั้งโลกและโลกุตตระ ก็ยินดีในการสนทนาธรรมเสมอ" },
            { sanskrit: "saṃsargasamantamadhye dรุśyamāno'pi, sarvamadhye pramukhaḥ pูjitaḥ", thai: "แม้ปรากฏท่ามกลางชุมชน ก็เป็นผู้นำและได้รับการเคารพในท่ามกลางทั้งปวง" },
            { sanskrit: "dharmaśreṣṭhopadeśakāraṇācchreṣṭhyantare'pi śreṣṭhasammatีyaḥ", thai: "เพราะแสดงธรรมอันประเสริฐ เขาเป็นที่ยกย่องในกลุ่มพ่อค้า" },
            { sanskrit: "sarvagrāhakādānaparicchedakāraṇādgรุhapatyantare ca gรุhapatyammatีyaḥ", thai: "เพราะรู้จักการรับและการให้ เขาเป็นที่ยกย่องในกลุ่มเจ้าหน้าที่" },
            { sanskrit: "kṣāntisauratyabalapratiṣṭhāpanakāraṇāt kṣatriyāntare kṣatriyasammatีyaḥ", thai: "เพราะตั้งความอดทน ความสงบ และกำลัง เขาเป็นที่ยกย่องในกลุ่มกษัตริย์" },
            { sanskrit: " mānamadadarpapraṇāśanakāraṇād brāhmaṇāntare'pi brāhmaṇasammatีyaḥ", thai: "เพราะทำลายความถือตัว ความเมา และความเย่อหยิ่ง เขาเป็นที่ยกย่องในกลุ่มพราหมณ์" },
            { sanskrit: "sarvarājakāryadharmānurūpājñākāraṇādamātyāntare cāmātyasammatีyaḥ", thai: "เพราะรู้จักพระบรมราชโองการ เขาเป็นที่ยกย่องในกลุ่มอำมาตย์" },
            { sanskrit: "rājabhogaiśvaryasaṅgavivartanakāraṇātkumārāntare ca kumārasammatีyaḥ", thai: "เพราะตัดความยึดติดในราชสมบัติ เขาเป็นที่ยกย่องในกลุ่มกุมาร" },
            { sanskrit: "kumārีparipācanakāraṇād antaḥpure'pi kañcukisammatีyaḥ", thai: "เพราะฝึกหญิงสาว เขาเป็นที่ยกย่องในปราสาทใน" },
            { sanskrit: "sa upāyakauśalyenātmānaṃ glānanibhaṃ deśayitvā", thai: "ด้วยอุบายอันแยบยล เขาแสดงตนเหมือนผู้ป่วย", commentary: "นี่คืออุบาย: แสดงตนป่วยเพื่อให้ผู้คนมาเยี่ยม แล้วแสดงธรรม" },
            { sanskrit: "tasya rogapraśnārthāya vaiśālyā mahānagaryā rājāmātyadhipakumāramaṇḍalabrāhmaṇagรุhapatiśreṣṭhinaigamajānapadāḥ, no hีdaṃ-prāṇinām bahusahasraṃ rogapฤcchanāyāgatam", thai: "เพื่อสอบถามปัญหาเรื่องโรค ชาวเวสาลีมหาธานี ราช minister ผู้ใหญ่ กุมาร เจ้าหน้าที่ พราหมณ์ พ่อค้า นาย guild และประชาชนต่างๆ และสัตว์อื่นอีกมากมาย พากันมาเยี่ยมเขาเพื่อสอบถามอาการป่วย" },
            { sanskrit: "tebhyัสtatra samāgatebhyo licchavirvimalakีrtirimameva caturmahābhūtakāyam ārabhya, dharmaṃ deśayati sma", thai: "ต่อสัตว์เหล่านั้นที่มาถึงแล้ว วิมาลากีรติลิจฉวีแสดงธรรมเกี่ยวกับกายอันประกอบด้วยธาตุ 4" },
            { sanskrit: "'mitrāḥ, ayaṃ hi kāya evamanitya evamadhruv'onāśvāsaḥ'", thai: "\"มิตรทั้งหลาย กายนี้ไม่เที่ยงเช่นนี้ ไม่ถาวรเช่นนี้ ไม่น่าเชื่อถือเช่นนี้\"", commentary: "แสดงความจริงเกี่ยวกับกายเพื่อปล่อยวาง" },
            { sanskrit: "sa hy evaṃ durbalo'sārastathā hi luptaḥ parีttakālo duḥkho bahurogo vipariṇāmadharmaḥ", thai: "อ่อนแอเช่นนี้ ไม่มีแก่นเช่นนี้ ชั่วคราวเช่นนี้ เต็มไปด้วยโรคเช่นนี้ เป็นของวิปริตเช่นนี้" },
            { sanskrit: "mitrāḥ, ayaṃ kāyo dhāraṇan-na kṣamamāṇaḥ phenapiṇḍopamaḥ", thai: "\"มิตรทั้งหลาย กายนี้ไม่สามารถจับต้องได้ เหมือนฟองน้ำ\"", commentary: "10 อุปมาแห่งกาย" },
            { sanskrit: "ayaṃ hi kāyo'cirasthitiko budbudopamaḥ", thai: "กายนี้ไม่ยั่งยืน เหมือนฟองอากาศ" },
            { sanskrit: "ayaṃ kāyaḥ kleśatฤṣṇotpanno marีcyupamaḥ", thai: "กายนี้เกิดจากกิเลสและความอยาก เหมือนมายา" },
            { sanskrit: "asāro'yaṃ kāyaḥ kadalีstambhopamaḥ", thai: "กายนี้ไม่มีแก่น เหมือนต้นกล้วย" },
            { sanskrit: "asthirasnāyubandho vatāyaṃ yantropamaḥ", thai: "กายนี้ยึดด้วยกระดูกเอ็น เหมือนเครื่องจักร" },
            { sanskrit: "ayaṃ kāyo hi viparyāsotpanno māyopamaḥ", thai: "กายนี้เกิดจากความผิดพลาด เหมือนมายา" },
            { sanskrit: "abhūtadarśanaṃ hyayaṃ kāyassvapnopamaḥ", thai: "กายนี้เห็นสิ่งไม่จริง เหมือนความฝัน" },
            { sanskrit: "pratibimbopamo'yaṃ kāyaḥ pūrvakarmapratibimbo dรุśyamānaḥ", thai: "กายนี้เป็นเงาสะท้อน เหมือนผลกรรมเก่า" },
            { sanskrit: "ayaṃ kāyaḥ pratyayādhีnaḥ, pratiśrutkopamastat", thai: "กายนี้ขึ้นอยู่กับเหตุปัจจัย เหมือนเสียงก้อง" },
            { sanskrit: "vikṣiptacitto yathā hyayaṃ kāyaḥ patanalakṣaṇo meghopamaḥ", thai: "กายนี้เหมือนเมฆ จิตฟุ้งซ่านเป็นลักษณะ" },
            { sanskrit: "ayaṃ kāyaḥ kṣaṇavināśanasahagataścānavasthito vidyuttulyaḥ", thai: "กายนี้ไม่เที่ยง เหมือนฟ้าแลบ" },
            { sanskrit: "asvāmiko'yaṃ hi kāyo nānāpratyayotpannaḥ", thai: "กายนี้ไม่มีเจ้าของ เกิดจากหลายเหตุ" },
            { sanskrit: "nirvyāpāro hyaṃ kāyaḥ pฤthivีsadรุśaḥ", thai: "กายนี้ว่างจากตัวและของตัว เหมือนดิน" },
            { sanskrit: "āpasadรุśo'yaṃ kāyo'nātmakaḥ", thai: "กายนี้เหมือนน้ำ ไม่มีตัวตน" },
            { sanskrit: "ayaṃ kāyastejassadรุśaḥ nirjีvaḥ", thai: "กายนี้เหมือนไฟ ไม่มีชีวิต" },
            { sanskrit: "ayaṃ kāyo vāyusadรุśaḥ niṣpudgalaḥ", thai: "กายนี้เหมือนลม ไม่มีสาระ" },
            { sanskrit: "ākāśasadรุśo'yaṃ kāyo niḥsvabhāvaḥ", thai: "กายนี้เหมือนอากาศ ไม่มีสภาวะ" },
            { sanskrit: "ayaṃ kāyo mahābhūtasthāno'bhūtaḥ, ātmātmีyarahito'yaṃ kāyaḥ śūnyaḥ", thai: "กายนี้ตั้งอยู่ในธาตุใหญ่แต่ไม่มีจริง ว่างจากตัวและของตัว ว่างเปล่า" },
            { sanskrit: "tฤṇakāṣṭhābhittiloṣṭapratibhāsopamo'yaṃ kāyo jaḍaḥ", thai: "กายนี้เหมือนเครื่องราง หญ้า ไม้ ผนัง ดิน ไร้สติ" },
            { sanskrit: "ayaṃ hi kāyo vātayantrasamanvāgamena yathotpanno vedanārahitaḥ", thai: "กายนี้เกิดจากเครื่องเป่าลม ไม่มีความรู้สึก" },
            { sanskrit: "ayaṃ hi pūyamีḍhasaṃcitaḥ kāyastucchaḥ", thai: "กายนี้เน่าเปื่อย เหมือนซากศพ" },
            { sanskrit: "nityalepaparimardanabhedanavidhvaṃsanadharmo'yaṃ kāyo riktaḥ", thai: "กายนี้มีแต่ความสกปรก ถูกทำลายได้ แตก ฉีก ทุบ" },
            { sanskrit: "ayaṃ hi kāyaścaturadhikacatuḥśatarogopadrutaḥ", thai: "กายนี้ถูกโรค 104 ประการเบียดเบียน" },
            { sanskrit: "sadā jarābhibhūto hyayaṃ kāyo jarodapānasadรุśaḥ", thai: "กายนี้ชราเสมอ เหมือนน้ำในบ่อเก่า" },
            { sanskrit: "maraṇānto'yaṃ kāyo'ntāniśritaḥ", thai: "กายนี้มีความตายเป็นที่สุด" },
            { sanskrit: "ayaṃ hi kāyaḥ skandhadhātvāyatanaparigรุhีto vadhakāśiviṣaśūnyagrāmopamaḥ", thai: "กายนี้ถูกขังในขันธ์ อายตนะ เหมือนคุกที่ว่างเปล่า" },
            { sanskrit: "tasmin yuṣmābhirevaṃkāye nirvidudvegayorutpāditayostathāgatakāyādhimuktirutpādayitavyā", thai: "\"มิตรทั้งหลาย ในกายนี้พึงเกิดความเบื่อหน่ายและสะพรึงกลัว แล้วเกิดความเลื่อมใสในธรรมกายแห่งพระตถาคต\"" },
            { sanskrit: "mitrāḥ, tathāgatakāyo hi dharmakāyo jñānajaḥ", thai: "\"มิตรทั้งหลาย กายแห่งพระตถาคตคือธรรมกาย เกิดจากปัญญา\"", commentary: "ธรรมกาย = กายที่เกิดจากการปฏิบัติธรรม" },
            { sanskrit: "tathāgatakāyaḥ puṇyajo dānajaśśีlajassamādhijaḥ prajñājo vimuktijo vimuktijñānadarśanajo", thai: "กายแห่งพระตถาคตเกิดจากบุญ เกิดจากทาน เกิดจากศีล เกิดจากสมาธิ เกิดจากปัญญา เกิดจากความหลุดพ้น เกิดจากปัญญาและความเห็นแห่งความหลุดพ้น" },
            { sanskrit: "maitrีkaruṇāmuditopekṣotpanno dānadamasaṃyamotpanno daśakuśalakarmapathajaḥ", thai: "เกิดจากเมตตา กรุณา มุทิตา อุเบกขา เกิดจากทาน ความสงบ ความสำรวม ศีล ขันติ วิริยะ ฌาน สมาธิ สมาบัติ" },
            { sanskrit: "kṣāntisauratyajasthiravีryakuśalamūlajo dhyānavimokṣasamādhisamāpattijaḥ", thai: "เกิดจากขันติ ความสงบ กำลัง รากเหง้าแห่งความดี เกิดจากฌาน วิโมกข์ สมาธิ สมาบัติ" },
            { sanskrit: "śrutaprajñopāyajassaptatriṃśadbodhipākṣikadharmajaḥ śamathavipaśyanājo daśabalajaścaturvaiśāradyajo", thai: "เกิดจากศึกษา ปัญญา และอุบาย เกิดจากธรรม 37 โพธิปักขิยธรรม เกิดจากสมาธิและวิปัสสนา เกิดจากฤทธิ์ 10 เกิดจากความอาจหาญ 4" },
            { sanskrit: "'ṣṭādaśāveṇikabuddhadharmajaḥ sarvāparamitotpanno abhijñātrividyotpannaḥ", thai: "เกิดจากอิทธิวิธี 18 เกิดจากความสมบูรณ์แห่งบารมีทั้งหมด เกิดจากอภิญญา 5 เวทนา 4" },
            { sanskrit: "sarvākuśaladharmaprahāṇasarvakuśaladharmasaṃgrahajaḥ satyajassamyaktvo'pramādajaḥ", thai: "เกิดจากการละบาปทั้งหมด เกิดจากการสร้างความดีทั้งหมด เกิดจากสัจจะ เกิดจากความตรง เกิดจากความไม่ประมาท" },
            { sanskrit: "'mitrāḥ, tathāgatakāyo hyapramāṇakuśalakarmajaḥ | tasmin yuṣmābhiravaṃkāye'dhimuktirutpādayitavyā | sarvasattvakleśarogaprajahanārthāya ānuttarasamyaksambodhicittamutpādayitavyam'", thai: "\"มิตรทั้งหลาย กายแห่งพระตถาคตเกิดจากบุญอันประมาณมิได้ ท่านทั้งหลายพึงมีความเลื่อมใสในกายนี้ เพื่อละโรคแห่งกิเลสทั้งหมดของสัตว์ทั้งหลาย พึงเกิดจิตเพื่อพระสัมมาสัมโพธิญาณ\"", commentary: "หลักสำคัญ: ใช้เรื่องกายป่วยเป็นอุบายสอนธรรม ชี้ทางสู่ธรรมกาย" },
            { sanskrit: "evameva licchavirvimalakีrtistathā hi tasmai rogapraśnagaṇāya, yathā bahuśatānāṃ sattvasahasrāṇāmanuttarasamyaksambodhicittamutpāditam", thai: "เมื่อวิมาลากีรติแสดงธรรมอย่างนี้แก่กลุ่มผู้มาเยี่ยมป่วย มหาสัตว์เสียงร้อยพันหมื่นพันก็เกิดจิตเพื่อพระสัมมาสัมโพธิญาณ" },
            { sanskrit: "acintyopāyakauśalyasya parivarto nāma dvitีyaḥ", thai: "บทที่ ๒ อุบายอันแยบยลอันอจินไตย จบบริบูรณ์" }
        ]
    },
    "35_3": {
        title: "บทที่ 3: การส่งพระสาวกและพระโพธิสัตว์",
        title_sanskrit: "śrāvakabodhisattvapreṣaṇoktam",
        verses: [
            {
                sanskrit: "atha vimalakีrtirlicchaviretadabhūt- glāno'ham, tathāgatād arhataḥ samyaksaṃbuddhād alpāpagrahี kasmān na śāstrā paśyati",
                thai: "ครั้งนั้น วิมาลากีรติหนุ่มลิจฉวีมีความคิดขึ้นในใจว่า \"เราเจ็บป่วยนอนอยู่บนเตียงด้วยความทุกข์ทรมาน แต่พระตถาคต พระอรหันต์ สัมมาสัมพุทธเจ้า ไม่ทรงคำนึงถึง ไม่ทรงกรุณาเรา ไม่ทรงส่งใครมาไต่ถามอาการป่วยเลย\"",
                commentary: "วิมาลากีรติแสดงอาการป่วยเป็นอุบายเพื่อสอนธรรม"
            },
            {
                sanskrit: "bhagavān tasya cetaḥ parivitarkam ājñāya āyuṣmantaṃ śāriputram āmantrayate sma",
                thai: "พระผู้มีพระภาคเจ้าทรงทราบความคิดนี้ในใจของวิมาลากีรติ จึงตรัสกับพระสารีบุตรว่า \"สารีบุตร เธอจงไปไต่ถามอาการป่วยของวิมาลากีรติหนุ่มลิจฉวี\"",
                commentary: "พระพุทธเจ้าส่งพระสารีบุตรเป็นคนแรก"
            },
            {
                sanskrit: "śāriputra āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระสารีบุตรทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจที่จะไปไต่ถามอาการป่วยของวิมาลากีรติหนุ่มลิจฉวี เพราะคราวหนึ่งเมื่อข้าพระองค์นั่งบำเพ็ญสมาธิอยู่ที่โคนต้นไม้ เขาได้มาสอนข้าพระองค์ว่า...\"",
                commentary: "สารีบุตรเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องสมาธิที่แท้จริง"
            },
            {
                sanskrit: "nedaṃ śāriputra, dhyānam yad bhavān dhyāyati| dhyānaṃ tu khalu śāriputra, atra na kāyo dรุśyate, na cittaṃ dรุśyate",
                thai: "\"ท่านสารีบุตร นี่ไม่ใช่หนทางแห่งการบำเพ็ญสมาธิ ท่านควรบำเพ็ญสมาธิให้กายและใจไม่ปรากฏในไตรภพใดๆ ท่านควรบำเพ็ญสมาธิให้สามารถแสดงพฤติกรรมของปุถุชนได้โดยไม่ละทิ้งนิโรธ\"",
                commentary: "วิมาลากีรติสอนสมาธิที่แท้จริง: กาย-ใจไม่ปรากฏ แต่ยังแสดงพฤติกรรมได้"
            },
            {
                sanskrit: "bhagavān mahāmaudgalyāyanam āmantrayate sma- gaccha tvaṃ, maudgalyāyana, vimalakีrterlicchaveḥ paryupāsanāya",
                thai: "พระพุทธเจ้าตรัสกับพระมหาโมคคัลลานะว่า \"โมคคัลลานะ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระมหาโมคคัลลานะเป็นคนที่สอง"
            },
            {
                sanskrit: "maudgalyāyana āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระมหาโมคคัลลานะทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์สอนธรรมแก่คฤหัสถ์ เขาสอนข้าพระองค์ว่า...\"",
                commentary: "โมคคัลลานะเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องการสอนธรรมที่แท้จริง"
            },
            {
                sanskrit: "dharmo hi, maudgalyāyana, anātmā, sarvadharmanairātmyatvāt| asattvako hi, nirjีvako hi, nairātmyatvāt",
                thai: "\"ท่านมหาโมคคัลลานะ ธรรมะปราศจากสัตว์ เพราะหลุดพ้นจากฝุ่นแห่งสัตว์ทั้งหลาย ธรรมะไม่มีตัวตน เพราะหลุดพ้นจากตัณหา ธรรมะไม่มีชีวิต เพราะหลุดพ้นจากเกิดและดับ\"",
                commentary: "วิมาลากีรติสอนว่าธรรมะแท้จริงคือความว่างเปล่าจากตัวตน"
            },
            {
                sanskrit: "bhagavān mahākāśyapam āmantrayate sma- gaccha tvaṃ, kāśyapa, vimalakีrterlicchaveḥ paryupāsanāya",
                thai: "พระพุทธเจ้าตรัสกับพระมหากัสสปะว่า \"มหากัสสปะ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระมหากัสสปะเป็นคนที่สาม"
            },
            {
                sanskrit: "kāśyapa āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระมหากัสสปะทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์บิณฑบาตในถนนของคนยากจน เขาสอนข้าพระองค์ว่า...\"",
                commentary: "กัสสปะเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องการบิณฑบาตที่แท้จริง"
            },
            {
                sanskrit: "kāśyapa, dharmatāṃ pratีtya piṇḍapāta pariṣodhaya| na dānapatim āgamya, na daridram āgamya",
                thai: "\"ท่านมหากัสสปะ การหลีกเลี่ยงบ้านของคนมั่งมี และเข้าข้างบ้านของคนยากจน นี่คือความลำเอียงในเมตตา ท่านควรตั้งอยู่ในความจริงแห่งความเสมอภาคของสรรพสิ่ง\"",
                commentary: "สอนความเสมอภาค: ไม่ลำเอียงทั้งคนรวยและคนจน"
            },
            {
                sanskrit: "bhagavān subhūtim āmantrayate sma- gaccha tvaṃ, subhūte, vimalakีrterlicchaveḥ paryupāsanāya",
                thai: "พระพุทธเจ้าตรัสกับพระสุภูติว่า \"สุภูติ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระสุภูติเป็นคนที่สี่"
            },
            {
                sanskrit: "subhūti āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระสุภูติทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์ไปขออาหารที่บ้านของเขา เขาให้เงื่อนไขที่ยากมากว่า...\"",
                commentary: "สุภูติเล่าประสบการณ์ที่ถูกวิมาลากีรติทดสอบด้วยเงื่อนไขที่ท้าทาย"
            },
            {
                sanskrit: "sarveṣāṃ dharmāṇāṃ samatayā labheta| sarveṣāṃ buddhadharmāṇāṃ samatayā labheta",
                thai: "\"ท่านสุภูติ จงรับอาหารนี้ หากท่านเข้าใจความเสมอภาคแห่งสรรพสิ่ง ด้วยความเสมอภาคแห่งวัตถุทางกาย และหากท่านเข้าใจความเสมอภาคแห่งพระพุทธคุณทั้งหมด\"",
                commentary: "การสอนความเสมอภาคในทุกสิ่ง"
            },
            {
                sanskrit: "bhagavān pūrṇamaitrāyaṇีputram āmantrayate sma",
                thai: "พระพุทธเจ้าตรัสกับพระปูรณมัยตรายนีบุตรว่า \"ปูรณะ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระปูรณะเป็นคนที่ห้า"
            },
            {
                sanskrit: "pūrṇa āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระปูรณะทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์สอนธรรมแก่ภิกษุหนุ่ม เขาสอนข้าพระองค์ว่า...\"",
                commentary: "ปูรณะเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องการสอนธรรมแก่ภิกษุหนุ่ม"
            },
            {
                sanskrit: "prāg eva cittaṃ parีkṣya dharmaṃ deśaya| na kūpajalāvatีratnabhājane khādanีyaṃ prakṣipet",
                thai: "\"ท่านปูรณะ ก่อนอื่นจงตั้งจิต ดูจิตใจของภิกษุหนุ่มเหล่านี้ แล้วจึงสอนธรรมแก่พวกเขา อย่าเอาอาหารเน่าใส่ในภาชนะแก้ว!\"",
                commentary: "สอนการรู้จักอัธยาศัยของผู้ฟังก่อนสอนธรรม"
            },
            {
                sanskrit: "bhagavān mahākātyāyanam āmantrayate sma",
                thai: "พระพุทธเจ้าตรัสกับพระมหากัจจายนะว่า \"กัจจายนะ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระมหากัจจายนะเป็นคนที่หก"
            },
            {
                sanskrit: "kātyāyana āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระมหากัจจายนะทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์สอนเรื่องอนิจจัง ทุกข์ อนัตตา และนิโรธ เขาสอนข้าพระองค์ว่า...\"",
                commentary: "กัจจายนะเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนความหมายแท้จริงของอริยสัจ"
            },
            {
                sanskrit: "anityatā katamā? anutpannasyānutpādaḥ, aniruddhasyāniruddhaḥ",
                thai: "\"ท่านมหากัจจายนะ อย่าสอนสัจธรรมที่ประกอบด้วยการกระทำ การเกิด และการดับ! ไม่มีอะไรถูกทำลาย กำลังถูกทำลาย หรือจะถูกทำลาย นี่คือความหมายแห่งอนิจจัง\"",
                commentary: "สอนอนิจจังในระดับลึก: ไม่มีสิ่งใดเกิด-ดับจริง"
            },
            {
                sanskrit: "bhagavān aniruddham āmantrayate sma",
                thai: "พระพุทธเจ้าตรัสกับพระอนิรุทธะว่า \"อนิรุทธะ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระอนิรุทธะเป็นคนที่เจ็ด"
            },
            {
                sanskrit: "aniruddha āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระอนิรุทธะทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์แสดงทิพยจักษุ เขาถามข้าพระองค์ว่า...\"",
                commentary: "อนิรุทธะเล่าประสบการณ์ที่ถูกวิมาลากีรติทดสอบเรื่องทิพยจักษุ"
            },
            {
                sanskrit: "aniruddha, kiṃ te divyaṃ cakṣuḥ saṃskṛtam utāsaṃskṛtam?",
                thai: "\"ท่านอนิรุทธะ ทิพยจักษุของท่านเป็นธรรมชาติที่ประกอบขึ้นหรือไม่ประกอบขึ้น? หากเป็นธรรมชาติที่ประกอบขึ้น ก็เหมือนวิชชาของพวกเดียรถีย์ หากเป็นธรรมชาติที่ไม่ประกอบขึ้น ก็ไม่ได้สร้างขึ้น และเช่นนั้นไม่สามารถมองเห็นได้\"",
                commentary: "ทดสอบความเข้าใจเรื่องทิพยจักษุ: ธรรมชาติที่แท้จริงคืออะไร"
            },
            {
                sanskrit: "bhagavān upālim āmantrayate sma",
                thai: "พระพุทธเจ้าตรัสกับพระอุบาลีว่า \"อุบาลี เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระอุบาลีเป็นคนที่แปด"
            },
            {
                sanskrit: "upāli āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระอุบาลีทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์ตัดสินวินัยของภิกษุสองรูป เขาสอนข้าพระองค์ว่า...\"",
                commentary: "อุบาลีเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องบาปและการหลุดพ้น"
            },
            {
                sanskrit: "upāli, āpattir naivādhyātmaṃ nā bahirdhā na nobhayam antareṇa",
                thai: "\"ท่านอุบาลี บาปไม่อาจเข้าใจได้ภายใน ภายนอก หรือระหว่างทั้งสอง จิตไม่ได้อยู่ภายใน ไม่ได้อยู่ภายนอก บาปก็เหมือนจิต สรรพสิ่งก็เหมือนบาป\"",
                commentary: "สอนธรรมชาติของบาป: บาปคือความคิด ไม่ใช่ตัวตน"
            },
            {
                sanskrit: "bhagavān rāhulam āmantrayate sma",
                thai: "พระพุทธเจ้าตรัสกับพระราหุลว่า \"ราหุล เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระราหุลเป็นคนที่เก้า"
            },
            {
                sanskrit: "rāhula āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระราหุลทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อข้าพระองค์สอนเรื่องการออกบวช เขาสอนข้าพระองค์ว่า...\"",
                commentary: "ราหุลเล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องการออกบวชที่แท้จริง"
            },
            {
                sanskrit: "rāhula, pravrajyā nāma na guṇā na doṣā| saṃskṛtasya guṇādoṣā, asaṃskṛtasya na guṇā na doṣā",
                thai: "\"ท่านราหุล การออกบวชคือการไม่มีคุณธรรมและประโยชน์โดยตัวเอง ท่านอาจกล่าวถึงคุณธรรมและประโยชน์ในสิ่งที่ประกอบขึ้น แต่การออกบวชไม่ได้ประกอบขึ้น\"",
                commentary: "สอนการออกบวชที่แท้จริง: ไม่ใช่เพื่อประโยชน์ส่วนตน"
            },
            {
                sanskrit: "bhagavān ānandam āmantrayate sma",
                thai: "พระพุทธเจ้าตรัสกับพระอานนท์ว่า \"อานนท์ เธอจงไปยังวิมาลากีรติหนุ่มลิจฉวีเพื่อไต่ถามอาการป่วย\"",
                commentary: "พระพุทธเจ้าส่งพระอานนท์เป็นคนที่สิบ"
            },
            {
                sanskrit: "ānanda āha- na me bhagavan, rocamānaṃ vimalakีrterlicchaveḥ paryupāsanam",
                thai: "พระอานนท์ทูลว่า \"พระเจ้าข้า ข้าพระองค์ไม่เต็มใจ เพราะคราวหนึ่งเมื่อพระวรกายของพระผู้มีพระภาคเจ้าปรากฏอาการไม่สบายและทรงต้องการน้ำนม เขาสอนข้าพระองค์ว่า...\"",
                commentary: "อานนท์เล่าประสบการณ์ที่ถูกวิมาลากีรติสอนเรื่องพระวรกายแห่งธรรม"
            },
            {
                sanskrit: "ānanda, māivam vocaḥ| tathāgatasya kāyo vajropamaḥ sarvānuśayakṣayāt",
                thai: "\"ท่านอานนท์ อย่ากล่าวเช่นนั้น! พระวรกายของพระตถาคตแข็งแรงดั่งเพชร ขจัดร่องรอยแห่งความชั่วทั้งหมดแล้ว พระตถาคตมีพระวรกายแห่งธรรม ไม่ใช่พระวรกายที่อาศัยอาหารทางวัตถุ\"",
                commentary: "สอนเรื่องพระวรกาย: พระพุทธเจ้ามีพระวรกายแห่งธรรม ไม่ใช่กายเนื้อ"
            },
            {
                sanskrit: "evaṃ sarve te pañcaśatā śrāvakā vimalakีrtaye nivedayām āsuḥ",
                thai: "ในทำนองเดียวกัน สาวกอีกห้ารูปที่เหลือก็ไม่เต็มใจที่จะไปยังวิมาลากีรติหนุ่มลิจฉวี แต่ละรูปทูลพระพุทธเจ้าถึงประสบการณ์ของตน เล่าการสนทนาทั้งหมดกับวิมาลากีรติ",
                commentary: "สรุปบทที่ 3: สาวกทั้งหมดปฏิเสธไปเยี่ยมวิมาลากีรติ เพราะแต่ละคนเคยถูกเขาสอนธรรมที่ลึกซึ้งกว่า"
            }
        ]
    }
};

// Export สำหรับใช้ใน app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUTRAS_DATA, CHAPTER_CONTENT };
}

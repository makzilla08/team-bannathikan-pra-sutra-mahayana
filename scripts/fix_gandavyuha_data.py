#!/usr/bin/env python3
"""Fix gandavyuha chapter data in data.js"""

# Correct chapter data extracted from actual translation files
CORRECT_CHAPTERS = [
    {"id": 1, "title_thai": "นิทานปริวรรต", "title_sanskrit": "nidānam", "status": "completed"},
    {"id": 2, "title_thai": "สมันตภัทร", "title_sanskrit": "samantabhadra", "status": "completed"},
    {"id": 3, "title_thai": "มัญชุศรี", "title_sanskrit": "mañjuśrīḥ", "status": "completed"},
    {"id": 4, "title_thai": "เมฆศรี", "title_sanskrit": "meghaśrīḥ", "status": "completed"},
    {"id": 5, "title_thai": "สาครเมฆ", "title_sanskrit": "sāgarameghaḥ", "status": "completed"},
    {"id": 6, "title_thai": "สุประธิธิ", "title_sanskrit": "supratiṣṭhitaḥ", "status": "completed"},
    {"id": 7, "title_thai": "เมฆะพราหมณ์", "title_sanskrit": "meghaḥ", "status": "completed"},
    {"id": 8, "title_thai": "มุกตกะเศรษฐี", "title_sanskrit": "muktakaḥ śreṣṭhī", "status": "completed"},
    {"id": 9, "title_thai": "ไภษัชยคุรุ", "title_sanskrit": "bhaiṣajyaguruḥ", "status": "completed"},
    {"id": 10, "title_thai": "สารธวัช", "title_sanskrit": "sāradhvaja", "status": "completed"},
    {"id": 11, "title_thai": "ภิษโมตตระนิรโธษะ", "title_sanskrit": "bhīṣmottaranirghoṣa", "status": "completed"},
    # Chapters 12-56: stubs, need proper translation
    {"id": 12, "title_thai": "ชยตตมะพราหมณ์", "title_sanskrit": "jayottama", "status": "pending"},
    {"id": 13, "title_thai": "สิงหวิชฤมภิตาภิกษุณี", "title_sanskrit": "siṃhavijṛmbhitā bhikṣuṇī", "status": "pending"},
    {"id": 14, "title_thai": "วสุธามิตรนักปราชญ์", "title_sanskrit": "vasumitro upāsakaḥ", "status": "pending"},
    {"id": 15, "title_thai": "เวศฐิละนักปราชญ์", "title_sanskrit": "veṣṭhilo upāsakaḥ", "status": "pending"},
    {"id": 16, "title_thai": "อวโลกิเตศวร", "title_sanskrit": "avalokiteśvara", "status": "pending"},
    {"id": 17, "title_thai": "อนันยคามี", "title_sanskrit": "ananyagāmī bodhisattva", "status": "pending"},
    {"id": 18, "title_thai": "มหาเทวี", "title_sanskrit": "mahādevī", "status": "pending"},
    {"id": 19, "title_thai": "สถาวราเทพธิดา", "title_sanskrit": "sthāvarā pṛthivīdevatā", "status": "pending"},
    {"id": 20, "title_thai": "วสันตีเทวี", "title_sanskrit": "vasantī rātridevatā", "status": "pending"},
    {"id": 21, "title_thai": "สมันตคัมภีรวระพุทธระศิธวัชะเทวี", "title_sanskrit": "samantagambhīravicitiśrītejoradhvajā rātridevatā", "status": "pending"},
    {"id": 22, "title_thai": "ปรมุทิตะนะยะนะเทวี", "title_sanskrit": "pramuditanayanajagadvirocanā rātridevatā", "status": "pending"},
    {"id": 23, "title_thai": "สมันตจักขุวิมะละประทีปะเทวี", "title_sanskrit": "samantacakṣurvimalapradīpā rātridevatā", "status": "pending"},
    {"id": 24, "title_thai": "สรรพนครรักษาสัมภวะศรีเทวี", "title_sanskrit": "sarvanagararakṣāsaṃbhavaśrītejoradhvajā rātridevatā", "status": "pending"},
    {"id": 25, "title_thai": "สรรพสัตว์ปะริปากะคุณตสาทะศรีเทวี", "title_sanskrit": "sarvasattvaparipākaguṇotsadaśrī rātridevatā", "status": "pending"},
    {"id": 26, "title_thai": "สรรพธรรมะนะยะพยูหะศรีเทวี", "title_sanskrit": "sarvadharmanayanavyūhaśrī rātridevatā", "status": "pending"},
    {"id": 27, "title_thai": "สรรพพฤกษะประผุลละสัมภวะศรีเทวี", "title_sanskrit": "sarvavṛkṣapraphullasusaṃbhavaśrī rātridevatā", "status": "pending"},
    {"id": 28, "title_thai": "สรรพวิชชาสัมภวะศรีเทวี", "title_sanskrit": "sarvavidyāsaṃbhavaśrī rātridevatā", "status": "pending"},
    {"id": 29, "title_thai": "สรรพสัตตะปะระติสรณะพยูหะเทวี", "title_sanskrit": "sarvasattvapratiśaraṇavyūhā rātridevatā", "status": "pending"},
    {"id": 30, "title_thai": "มานนะวิธวัมสะนะสมันตะศรีเทวี", "title_sanskrit": "mānavidhvaṃsanasamantatīrthaśrī rātridevatā", "status": "pending"},
    {"id": 31, "title_thai": "ยโสธรา", "title_sanskrit": "gopā śākyakanyā", "status": "pending"},
    {"id": 32, "title_thai": "สิริมหามายา", "title_sanskrit": "māyādevī", "status": "pending"},
    {"id": 33, "title_thai": "สุเรนทราประภาเทพธิดา", "title_sanskrit": "surendrābhā devatā", "status": "pending"},
    {"id": 34, "title_thai": "วิศวมิตรและศิลา", "title_sanskrit": "viśvamitraśile", "status": "pending"},
    {"id": 35, "title_thai": "มุกตาศรี", "title_sanskrit": "muktāśrī upāsikā", "status": "pending"},
    {"id": 36, "title_thai": "สารปราชญ์", "title_sanskrit": "sārottama upāsakaḥ", "status": "pending"},
    {"id": 37, "title_thai": "ภิษมวชิระ", "title_sanskrit": "bhīṣmavajra śreṣṭhī", "status": "pending"},
    {"id": 38, "title_thai": "ชเยตตมะ", "title_sanskrit": "jayottama", "status": "pending"},
    {"id": 39, "title_thai": "มัยตรายะณี", "title_sanskrit": "maitrāyaṇī upāsikā", "status": "pending"},
    {"id": 40, "title_thai": "สุทรรศะนะ", "title_sanskrit": "sudarśana upāsakaḥ", "status": "pending"},
    {"id": 41, "title_thai": "อินทริเยศวร", "title_sanskrit": "indriyeśvara upāsakaḥ", "status": "pending"},
    {"id": 42, "title_thai": "ประภตา", "title_sanskrit": "prabhūtā upāsikā", "status": "pending"},
    {"id": 43, "title_thai": "วิทวัน", "title_sanskrit": "vidvān upāsakaḥ", "status": "pending"},
    {"id": 44, "title_thai": "รัตนะจูดะ", "title_sanskrit": "ratnacūḍa śreṣṭhī", "status": "pending"},
    {"id": 45, "title_thai": "สมันตะประภา", "title_sanskrit": "samantaprabhā upāsikā", "status": "pending"},
    {"id": 46, "title_thai": "ศราวัสตีระ", "title_sanskrit": "śrāvastīra upāsakaḥ", "status": "pending"},
    {"id": 47, "title_thai": "ภัทรศรี", "title_sanskrit": "bhadraśrī upāsikā", "status": "pending"},
    {"id": 48, "title_thai": "ภัทระ", "title_sanskrit": "bhadrā upāsikā", "status": "pending"},
    {"id": 49, "title_thai": "วิชญานะ", "title_sanskrit": "vijñāna upāsakaḥ", "status": "pending"},
    {"id": 50, "title_thai": "ศรีสังภะวะและศรีมะติ", "title_sanskrit": "śrīsaṃbhavaśrīmatī", "status": "pending"},
    {"id": 51, "title_thai": "มัญชุศรี", "title_sanskrit": "mañjuśrī", "status": "pending"},
    {"id": 52, "title_thai": "สมันตภัทร", "title_sanskrit": "samantabhadra", "status": "pending"},
    {"id": 53, "title_thai": "ภัทรจริยาประณิธาน", "title_sanskrit": "bhadracarīpraṇidhāna", "status": "pending"},
    {"id": 54, "title_thai": "สมันตภัทรจริยา", "title_sanskrit": "samantabhadracaryā", "status": "pending"},
    {"id": 55, "title_thai": "ธรรมธาตุปรินิเทศ", "title_sanskrit": "dharmadhātunirdeśa", "status": "pending"},
    {"id": 56, "title_thai": "สมันตภัทรจริยาปรินิเทศ", "title_sanskrit": "samantabhadracaryānirdeśa", "status": "pending"},
]

# Count completed
completed = sum(1 for c in CORRECT_CHAPTERS if c["status"] == "completed")
print(f"Completed: {completed}/56")
print(f"Pending: {56-completed}/56")
print(f"\nChapters marked completed: {', '.join(str(c['id']) for c in CORRECT_CHAPTERS if c['status'] == 'completed')}")

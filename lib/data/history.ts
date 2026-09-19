import { HistoricalEra, TimelineEvent } from './types';
export type { HistoricalEra, TimelineEvent };

export const historicalErasData: HistoricalEra[] = [
  {
    id: 'era-nabataean',
    name: 'Nabataean Civilization',
    arabicName: 'الحضارة النبطية',
    slug: 'nabataean-civilization',
    startYear: -400,
    endYear: 106,
    overview: 'The Nabataean kingdom was an ancient Arab civilization that flourished in northwestern Arabia and the southern Levant. Masters of hydraulic engineering and the ancient incense trade routes, they carved monumental rock-cut architectural wonders at Petra (Jordan) and Hegra (AlUla, Saudi Arabia).',
    origins: 'Originating as nomadic pastoralists in the Arabian Desert, the Nabataeans settled in the sandstone valleys of Edom and Hijaz, establishing Petra as their capital around the 4th century BCE.',
    territory: 'Stretching from the Gulf of Aqaba and Hejaz north to the Syrian Hauran and Damascus.',
    culture: 'Blended Arabian, Hellenistic, and Mesopotamian art styles; pioneered the Nabataean cursive script, the direct evolutionary ancestor of the modern Arabic alphabet.',
    science: 'Engineered sophisticated hidden cisterns, water piping, flood-control dams, and terraced irrigation in arid desert climates.',
    architecture: 'Rock-cut facade tombs with classical pediments, crowstep attics, and carved protective deities in sandstone massifs.',
    legacy: 'Petra and Hegra stand as UNESCO World Heritage sites celebrating ancient Arab engineering.',
    heroImageUrl: '/images/alula.jpg',
    keyRulers: ['King Aretas III ("Philhellene")', 'King Aretas IV Philopatris', 'King Malichus II'],
    keyEvents: [
      { year: '312 BCE', title: 'Antigonus Expedition', description: 'Nabataeans successfully defend Petra against the Macedonian general Antigonus.' },
      { year: '9 BCE – 40 CE', title: 'Golden Age of Aretas IV', description: 'Monumental construction of the Khazneh (Treasury) at Petra and the Qasr al-Bint.' },
      { year: '106 CE', title: 'Roman Annexation', description: 'Emperor Trajan incorporates the Nabataean kingdom into the Roman province of Arabia Petraea.' }
    ]
  },
  {
    id: 'era-umayyad',
    name: 'Umayyad Caliphate',
    arabicName: 'الدولة الأموية',
    slug: 'umayyad-caliphate',
    startYear: 661,
    endYear: 750,
    overview: 'The Umayyad Caliphate was the second Islamic caliphate, established in Damascus by Mu\'awiya I. At its height, it was the largest empire the world had yet seen, spanning from the Atlantic Ocean and Spain in the west to the borders of China and the Indus Valley in the east.',
    origins: 'Founded following the Rashidun Caliphate, centering imperial administration in Syria and Arabizing government administrative registers.',
    territory: 'From Al-Andalus (Iberia) and North Africa across the Levant, Arabian Peninsula, Mesopotamia, Persia, to Transoxiana and Sindh.',
    culture: 'Pioneered monumental Islamic imperial architecture, established Arabic as the universal administrative language, and minted the first distinct epigraphic Islamic dinars.',
    science: 'Pioneered early astronomical observatories and standardized administrative record keeping.',
    architecture: 'The Dome of the Rock in Jerusalem, the Umayyad Great Mosque of Damascus, and desert castles (Qasr Amra, Qasr Al-Kharanah).',
    legacy: 'Established enduring foundations of Islamic art, governance, and urban design; later continued in Spain as the Emirate and Caliphate of Córdoba.',
    heroImageUrl: '/images/history/andalus.jpg',
    keyRulers: ['Mu\'awiya I', 'Abd al-Malik ibn Marwan', 'Al-Walid I', 'Umar ibn Abd al-Aziz'],
    keyEvents: [
      { year: '661 CE', title: 'Foundation in Damascus', description: 'Mu\'awiya I establishes Damascus as the imperial capital.' },
      { year: '691 CE', title: 'Completion of the Dome of the Rock', description: 'Abd al-Malik completes the architectural jewel on the Temple Mount in Jerusalem.' },
      { year: '711 CE', title: 'Crossing into Iberia', description: 'Tariq ibn Ziyad lands in Gibraltar, beginning the 800-year history of Al-Andalus.' }
    ]
  },
  {
    id: 'era-abbasid',
    name: 'Abbasid Caliphate & Golden Age',
    arabicName: 'الدولة العباسية والعصر الذهبي',
    slug: 'abbasid-caliphate',
    startYear: 750,
    endYear: 1258,
    overview: 'The Abbasid Caliphate ruled from their purpose-built round capital of Baghdad. Under their patronage, the Islamic Golden Age reached its intellectual and cultural pinnacle, establishing the House of Wisdom (Bayt al-Hikmah) and advancing human knowledge in mathematics, medicine, optics, philosophy, astronomy, and literature.',
    origins: 'Established after the overthrow of the Umayyads in 750 CE, shifting the empire\'s center eastward to Mesopotamia and fostering a universal cosmopolitan Islamic civilization.',
    territory: 'Covering the Middle East, North Africa, and Central Asia from the Mediterranean to the Persian Gulf and Indian Ocean.',
    culture: 'Flourishing of Arabic literature (One Thousand and One Nights), classical music, paper manufacturing introduced from China, and translation of Greek, Sanskrit, and Persian masterworks into Arabic.',
    science: 'Discovery of algebra (Al-Khwarizmi), optics (Ibn al-Haytham), surgical medicine (Al-Razi, Ibn Sina), and astronomical astrolabes.',
    architecture: 'The Round City of Baghdad, Great Mosque of Samarra with its iconic spiral minaret (Malwiya), and palatial complexes.',
    legacy: 'Preserved and revolutionized human sciences, laying the intellectual foundations for the European Renaissance.',
    heroImageUrl: '/images/history/islamic-golden-age.jpg',
    keyRulers: ['Abu Ja\'far Al-Mansur', 'Harun al-Rashid', 'Al-Ma\'mun', 'Al-Mu\'tasim'],
    keyEvents: [
      { year: '762 CE', title: 'Founding of Baghdad', description: 'Caliph Al-Mansur founds the Round City of Peace (Madinat al-Salam) on the Tigris.' },
      { year: '786–809 CE', title: 'Reign of Harun al-Rashid', description: 'Zenith of prosperity and diplomacy, immortalized in world literature.' },
      { year: '830 CE', title: 'House of Wisdom Golden Age', description: 'Al-Ma\'mun expands Bayt al-Hikmah for international scholars and translation campaigns.' }
    ]
  },
  {
    id: 'era-andalus',
    name: 'Andalusian Civilization',
    arabicName: 'الحضارة الأندلسية',
    slug: 'andalusian-civilization',
    startYear: 711,
    endYear: 1492,
    overview: 'Al-Andalus represents nearly eight centuries of Muslim civilization in the Iberian Peninsula (modern Spain and Portugal), where science, poetry, courtyard architecture, horticulture, and interfaith intellectual exchange flourished in Córdoba, Seville, and Granada.',
    origins: 'Founded in 711 CE and galvanized when the surviving Umayyad prince Abd al-Rahman I ("The Falcon of Quraysh") established the Emirate of Córdoba in 756 CE.',
    territory: 'The southern and central regions of the Iberian Peninsula.',
    culture: 'Moorish poetry, Ziryab’s musical conservatories and court etiquette, and flourishing philosophical dialogue between Ibn Rushd (Averroes) and Maimonides.',
    science: 'Botany, advanced agricultural water wheels (Norias), surgical medicine (Al-Zahrawi / Abulcasis), and celestial astronomy.',
    architecture: 'The Great Mosque of Córdoba (Mezquita), the Alhambra in Granada, the Giralda in Seville, and Madinat al-Zahra.',
    legacy: 'Transmitted ancient sciences and new Arab innovations to Western Europe, inspiring European universities.',
    heroImageUrl: '/images/history/andalus.jpg',
    keyRulers: ['Abd al-Rahman I (The Falcon of Quraysh)', 'Abd al-Rahman III (Caliph of Córdoba)', 'Muhammad I of Granada'],
    keyEvents: [
      { year: '756 CE', title: 'Emirate of Córdoba Established', description: 'Abd al-Rahman I establishes autonomous Umayyad rule in Iberia.' },
      { year: '929 CE', title: 'Caliphate of Córdoba Declared', description: 'Abd al-Rahman III proclaims Córdoba a rival caliphate of unequaled grandeur.' },
      { year: '1238–1492 CE', title: 'Nasrid Kingdom of Granada', description: 'Construction of the legendary Alhambra palace complex.' }
    ]
  },
  {
    id: 'era-modern-gulf',
    name: 'Modern Gulf Renaissance',
    arabicName: 'النهضة الخليجية الحديثة',
    slug: 'modern-gulf-renaissance',
    startYear: 1970,
    endYear: 'Present',
    overview: 'The modern renaissance across the Gulf Cooperation Council nations represents one of the most rapid and sophisticated transformations in modern human history. Combining sovereign wealth management with visionary urban master-planning, world-class aviation, sustainable technologies, and museum patronage, the GCC states have emerged as pivotal international leaders.',
    origins: 'Catalyzed by post-independence state consolidation in the early 1970s, the founding of the GCC in 1981 in Abu Dhabi, and comprehensive modern diversification roadmaps (Vision 2030, Vision 2040).',
    territory: 'Saudi Arabia, United Arab Emirates, Qatar, Kuwait, Bahrain, and Oman.',
    culture: 'Global museum curation (Louvre Abu Dhabi, Museum of Islamic Art Doha, Diriyah Contemporary Art Biennale), space exploration programs, and cultural heritage preservation.',
    science: 'Clean hydrogen, desalination innovation, renewable mega-grids (Masdar, Mohammed bin Rashid Solar Park), aerospace, and artificial intelligence.',
    architecture: 'Burj Khalifa, Kingdom Centre, King Abdullah Financial District, Sheikh Zayed Grand Mosque, Lusail Stadium, and futuristic bioclimatic megastructures.',
    legacy: 'Redefining 21st-century diplomacy, sustainable infrastructure, and cultural custodianship on the world stage.',
    heroImageUrl: '/images/riyadh.jpg',
    keyRulers: ['King Salman & Crown Prince Mohammed bin Salman', 'Sheikh Mohamed bin Zayed', 'Sheikh Tamim bin Hamad', 'Sultan Haitham bin Tariq'],
    keyEvents: [
      { year: '1981', title: 'Establishment of the GCC', description: 'The six Gulf states sign the GCC Charter at the Abu Dhabi summit on 25 May 1981.' },
      { year: '2010', title: 'Burj Khalifa Inauguration', description: 'Dubai opens the world\'s tallest structure at 828 meters.' },
      { year: '2016', title: 'Saudi Vision 2030 Launched', description: 'Landmark socioeconomic blueprint launched in Riyadh.' },
      { year: '2020–2022', title: 'Expo 2020 Dubai & FIFA World Cup Qatar', description: 'The Arab world hosts two of the largest global events in history.' }
    ]
  }
];

export const timelineEventsData: TimelineEvent[] = [
  {
    id: 'evt-1',
    year: 1727,
    century: '18th Century',
    dateString: '22 February 1727',
    title: 'Founding of the First Saudi State in Diriyah',
    arabicTitle: 'تأسيس الدولة السعودية الأولى في الدرعية',
    location: 'Diriyah, Najd',
    countrySlug: 'saudi-arabia',
    dynastySlug: 'house-of-saud',
    category: 'Founding',
    description: 'Imam Muhammad bin Saud assumes leadership of Diriyah, establishing the First Saudi State and beginning the political unification of the Arabian Peninsula.'
  },
  {
    id: 'evt-2',
    year: 1744,
    century: '18th Century',
    title: 'Founding of the Al Said Dynasty in Oman',
    arabicTitle: 'تأسيس الدولة البوسعيدية في عُمان',
    location: 'Muscat, Oman',
    countrySlug: 'oman',
    dynastySlug: 'house-of-al-said',
    category: 'Dynastic',
    description: 'Imam Ahmad bin Said Al Busaidi expels foreign occupation and is elected Imam, founding the enduring Al Said dynasty.'
  },
  {
    id: 'evt-3',
    year: 1752,
    century: '18th Century',
    title: 'Establishment of Al Sabah Governance in Kuwait',
    arabicTitle: 'تولي آل صباح مقاليد الحكم في الكويت',
    location: 'Kuwait City',
    countrySlug: 'kuwait',
    dynastySlug: 'house-of-al-sabah',
    category: 'Dynastic',
    description: 'Sheikh Sabah I bin Jaber is chosen by the community of Kuwait to lead and govern the burgeoning maritime port.'
  },
  {
    id: 'evt-4',
    year: 1783,
    century: '18th Century',
    title: 'Al Khalifa Governance in Bahrain',
    arabicTitle: 'فتح البحرين بقيادة أحمد الفاتح آل خليفة',
    location: 'Bahrain Archipelago',
    countrySlug: 'bahrain',
    dynastySlug: 'house-of-al-khalifa',
    category: 'Dynastic',
    description: 'Sheikh Ahmed bin Muhammad Al Khalifa (Ahmed Al-Fateh) establishes Al Khalifa rule over the Bahrain archipelago.'
  },
  {
    id: 'evt-5',
    year: 1878,
    century: '19th Century',
    dateString: '18 December 1878',
    title: 'Accession of Sheikh Jassim bin Mohammed Al Thani',
    arabicTitle: 'تولي الشيخ جاسم بن محمد آل ثاني مقاليد الحكم وتأسيس قطر',
    location: 'Doha, Qatar',
    countrySlug: 'qatar',
    dynastySlug: 'house-of-al-thani',
    category: 'Founding',
    description: 'Sheikh Jassim bin Mohammed Al Thani unifies the tribes of Qatar, establishing the foundation of the modern State of Qatar.'
  },
  {
    id: 'evt-6',
    year: 1902,
    century: '20th Century',
    dateString: '15 January 1902',
    title: 'Recapture of Masmak Fortress by King Abdulaziz',
    arabicTitle: 'استعادة الرياض وحصن المصمك بقيادة الملك عبد العزيز',
    location: 'Riyadh, Saudi Arabia',
    countrySlug: 'saudi-arabia',
    dynastySlug: 'house-of-saud',
    category: 'Founding',
    description: 'Young Abdulaziz Al Saud executes a daring dawn entry into Riyadh, recapturing the Masmak Fortress and launching the unification of Saudi Arabia.'
  },
  {
    id: 'evt-7',
    year: 1916,
    century: '20th Century',
    dateString: '10 June 1916',
    title: 'Proclamation of the Great Arab Revolt',
    arabicTitle: 'إعلان الثورة العربية الكبرى',
    location: 'Mecca, Hejaz',
    countrySlug: 'jordan',
    dynastySlug: 'hashemite-dynasty',
    category: 'Modern',
    description: 'Sharif Hussein bin Ali fires the first shot in Mecca, launching the Great Arab Revolt for Arab independence and sovereignty.'
  },
  {
    id: 'evt-8',
    year: 1932,
    century: '20th Century',
    dateString: '23 September 1932',
    title: 'Unification of the Kingdom of Saudi Arabia',
    arabicTitle: 'إعلان توحيد المملكة العربية السعودية',
    location: 'Riyadh, Saudi Arabia',
    countrySlug: 'saudi-arabia',
    dynastySlug: 'house-of-saud',
    category: 'Founding',
    description: 'Royal Decree No. 2716 officially unifies the Kingdoms of Hejaz, Najd, and its dependencies into the Kingdom of Saudi Arabia.'
  },
  {
    id: 'evt-9',
    year: 1971,
    century: '20th Century',
    dateString: '2 December 1971',
    title: 'Formation of the United Arab Emirates',
    arabicTitle: 'قيام دولة الإمارات العربية المتحدة',
    location: 'Union House, Dubai',
    countrySlug: 'united-arab-emirates',
    dynastySlug: 'house-of-al-nahyan',
    category: 'Founding',
    description: 'The rulers of six emirates sign the Union Agreement at Union House in Dubai under the leadership of Sheikh Zayed bin Sultan Al Nahyan.'
  },
  {
    id: 'evt-10',
    year: 1981,
    century: '20th Century',
    dateString: '25 May 1981',
    title: 'Establishment of the Gulf Cooperation Council (GCC)',
    arabicTitle: 'تأسيس مجلس التعاون لدول الخليج العربية',
    location: 'Abu Dhabi, UAE',
    category: 'Treaty',
    description: 'The leaders of Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the UAE sign the GCC Charter in Abu Dhabi to foster deep regional economic, political, and cultural integration.'
  }
];

export const getHistoricalEraBySlug = (slug: string): HistoricalEra | undefined => {
  return historicalErasData.find(e => e.slug === slug);
};

import { Article } from './types';
export type { Article };

export const articlesData: Article[] = [
  {
    id: 'art-founding-saudi',
    title: 'The Founding of Saudi Arabia: Three Centuries of Statehood',
    arabicTitle: 'تأسيس المملكة العربية السعودية: ثلاثة قرون من بناء الدولة',
    slug: 'founding-of-saudi-arabia',
    category: 'History',
    readTime: 8,
    status: 'PUBLISHED',
    publishedAt: '2024-02-22',
    heroImageUrl: '/images/palaces/yamamah-palace.jpg',
    leadParagraph: 'The emergence of the modern Kingdom of Saudi Arabia in 1932 is the culmination of three centuries of state-building that began in the oasis citadel of Diriyah in 1727. Through periods of imperial resistance, regional transformation, and diplomatic perseverance, the House of Saud unified the Arabian Peninsula into a sovereign global power.',
    body: 'The narrative of Saudi statehood unfolds across three distinct yet continuous chapters: the First Saudi State (1727–1818), the Second Saudi State (1824–1891), and the Third Saudi State culminating in the unified Kingdom of Saudi Arabia under King Abdulaziz Al Saud in 1932.',
    sections: [
      {
        title: 'The First Saudi State: Diriyah (1727–1818)',
        arabicTitle: 'الدولة السعودية الأولى: عاصمة الدرعية',
        content: 'In 1727, Imam Muhammad bin Saud assumed governance of the Emirate of Diriyah in Najd. Establishing institutional order and securing trade and pilgrimage corridors, Diriyah rapidly emerged as the political epicenter of central Arabia. Despite its tragic fall following an Ottoman-Egyptian siege in 1818, the ideological and political precedent of unified Arabian governance was permanently etched into regional history.'
      },
      {
        title: 'The Second Saudi State: Riyadh (1824–1891)',
        arabicTitle: 'الدولة السعودية الثانية: عاصمة الرياض',
        content: 'Merely six years after the devastation of Diriyah, Imam Turki bin Abdullah Al Saud liberated Riyadh in 1824, establishing it as the new dynastic capital. This second era consolidated administrative systems and defensive alliances across Najd and the eastern Arabian Gulf until late-century tribal conflicts forced the royal family into temporary exile in Kuwait.'
      },
      {
        title: 'The Unification of the Modern Kingdom (1902–1932)',
        arabicTitle: 'الملك عبد العزيز وتوحيد المملكة الحديثة',
        content: 'In January 1902, 26-year-old Abdulaziz Al Saud executed the historic recapture of Masmak Fortress in Riyadh with a small cohort of loyal companions. Over three decades of strategic diplomacy, statecraft, and alliances with Bedouin confederations, King Abdulaziz incorporated Najd, Al-Ahsa (1913), Asir (1922), and Hejaz with the holy cities of Mecca and Medina (1925). On 23 September 1932, Royal Decree No. 2716 officially proclaimed the unified Kingdom of Saudi Arabia.'
      },
      {
        title: 'The Discovery of Petroleum and Modern Renaissance',
        arabicTitle: 'اكتشاف النفط والنهضة التنموية',
        content: 'In March 1938, commercial petroleum was discovered at Dammam Well No. 7 (named the Prosperity Well). Under subsequent reigns spanning King Saud, King Faisal, King Khalid, King Fahd, King Abdullah, and currently King Salman and Crown Prince Mohammed bin Salman, the Kingdom leveraged its sovereign resources into world-class infrastructure, global energy leadership, and the Vision 2030 modernization roadmap.'
      }
    ],
    infoboxData: {
      'Founding Date': '22 February 1727 (First State) / 23 September 1932 (Unified Kingdom)',
      'Founder': 'Imam Muhammad bin Saud / King Abdulaziz Al Saud',
      'Dynasty': 'House of Saud',
      'Capital': 'Diriyah (1727–1818) / Riyadh (1824–Present)',
      'Key Sites': 'At-Turaif, Masmak Fortress, Murabba Palace'
    },
    citations: [
      {
        id: 'cit-art-1',
        citationNumber: 1,
        text: 'King Abdulaziz Foundation for Research and Archives (Darah), Official Historical Chronology, Riyadh, 2021.',
        sourceId: 'src-1'
      },
      {
        id: 'cit-art-2',
        citationNumber: 2,
        text: 'UNESCO World Heritage Citation: At-Turaif District in Ad-Dir\'iyah, 2010.',
        sourceId: 'src-8'
      }
    ],
    relatedArticles: ['rise-of-dubai', 'nabataean-civilization'],
    relatedPeople: ['king-abdulaziz', 'king-salman', 'mohammed-bin-salman']
  },
  {
    id: 'art-rise-of-dubai',
    title: 'The Rise of Dubai: From Pearl Diving Creek to Global Metropolis',
    arabicTitle: 'صعود دبي: من خور الغوص على اللؤلؤ إلى عاصمة عالمية',
    slug: 'rise-of-dubai',
    category: 'History',
    readTime: 7,
    status: 'PUBLISHED',
    publishedAt: '2024-01-15',
    heroImageUrl: '/images/riyadh.jpg',
    leadParagraph: 'Few urban stories in modern human history rival the transformation of Dubai from an 1833 pearl-diving settlement on Dubai Creek into a global epicenter of commerce, aviation, architecture, and technology under the House of Al Maktoum.',
    body: 'Dubai’s evolution was never accidental; it was forged by bold infrastructural decisions, free-trade foresight, and charismatic leadership spanning Sheikh Rashid bin Saeed and Sheikh Mohammed bin Rashid Al Maktoum.',
    sections: [
      {
        title: 'The Creek and the Early Mercantile Hub (1833–1958)',
        arabicTitle: 'الخور والمركز التجاري الأول',
        content: 'In 1833, 800 members of the Bani Yas tribe led by Sheikh Maktoum bin Butti established independent governance along Dubai Creek. Dubai abolished customs tariffs on imports in 1901, attracting Persian, Indian, and Arab merchants and establishing its enduring reputation as the "City of Merchants".'
      },
      {
        title: 'Sheikh Rashid and the Infrastructure Blueprint (1958–1990)',
        arabicTitle: 'الشيخ راشد والمخطط الإنشائي الرائد',
        content: 'Assuming rule in 1958, Sheikh Rashid bin Saeed secured loans to dredge Dubai Creek, allowing deep-draft ocean vessels to berth directly in town. In 1971, he co-founded the UAE with Sheikh Zayed, subsequently constructing Port Rashid and Jebel Ali Port—the largest man-made harbor in the world.'
      },
      {
        title: 'The Global Innovation Capital (1990–Present)',
        arabicTitle: 'عاصمة الابتكار والتواصل العالمي',
        content: 'Under Sheikh Mohammed bin Rashid Al Maktoum, Dubai launched Emirates Airline, the Burj Al Arab, the Palm Jumeirah, Dubai International Financial Centre (DIFC), Dubai Metro, and the world’s tallest tower, the Burj Khalifa (828m), hosting Expo 2020 Dubai.'
      }
    ],
    infoboxData: {
      'Founded': '1833 CE',
      'Ruling House': 'House of Al Maktoum',
      'Key Waterway': 'Dubai Creek (Khor Dubai)',
      'Major Landmark': 'Burj Khalifa (828m)'
    },
    citations: [
      {
        id: 'cit-dubai-1',
        citationNumber: 1,
        text: 'From Trucial States to United Arab Emirates, Frauke Heard-Bey, Longman Press, 2005.',
        sourceId: 'src-2'
      }
    ],
    relatedPeople: ['mohammed-bin-rashid', 'rashid-bin-saeed', 'zayed-bin-sultan']
  },
  {
    id: 'art-nabataean',
    title: 'The Nabataean Civilization: Masters of the Stone and Desert Oases',
    arabicTitle: 'الحضارة النبطية: ملوك الحجر وعباقرة الواحات الصحراوية',
    slug: 'nabataean-civilization',
    category: 'Civilizations',
    readTime: 9,
    status: 'PUBLISHED',
    publishedAt: '2024-03-10',
    heroImageUrl: '/images/alula.jpg',
    leadParagraph: 'Carved into the sheer sandstone massifs of Petra in Jordan and Hegra in Saudi Arabia, the Nabataeans engineered an ancient Arabian commercial empire that controlled the frankincense, myrrh, and spice routes of antiquity.',
    body: 'The Nabataeans combined Arabian desert survival mastery with Hellenistic architectural aesthetics and peerless hydraulic engineering.',
    sections: [
      {
        title: 'The Incense Route and Economic Hegemony',
        arabicTitle: 'طريق البخور والسيادة الاقتصادية',
        content: 'From their capital at Petra and southern metropolis at Hegra, Nabataean merchants levied taxes and protected caravans transporting frankincense from Dhofar and spices from India toward Mediterranean ports.'
      },
      {
        title: 'Hydraulic Mastery in Arid Lands',
        arabicTitle: 'هندسة المياه والري في الصحراء',
        content: 'To sustain populations of tens of thousands in hyper-arid desert canyons, Nabataean engineers constructed subterranean terracotta water pipelines, pressurized cisterns, diversion dams, and silt catchment filtration systems.'
      }
    ],
    infoboxData: {
      'Era': '4th Century BCE – 106 CE',
      'Capitals': 'Petra (Jordan), Hegra / AlUla (Saudi Arabia)',
      'Language': 'Nabataean Aramaic / Early Arabic',
      'UNESCO Sites': 'Petra (1985), Hegra (2008)'
    },
    citations: [
      {
        id: 'cit-nab-1',
        citationNumber: 1,
        text: 'UNESCO World Heritage Citation: Hegra Archaeological Site (Al-Hijr / Madain Salih), 2008.',
        sourceId: 'src-8'
      }
    ],
    relatedArticles: ['founding-of-saudi-arabia'],
    relatedPeople: ['saladin']
  },
  {
    id: 'art-story-andalus',
    title: 'The Story of Al-Andalus: Eight Centuries of Science, Poetry, and Tolerance',
    arabicTitle: 'قصة الأندلس: ثمانية قرون من العلم والشعر والتعايش',
    slug: 'story-of-al-andalus',
    category: 'Civilizations',
    readTime: 10,
    status: 'PUBLISHED',
    publishedAt: '2024-04-05',
    heroImageUrl: '/images/history/andalus.jpg',
    leadParagraph: 'For nearly 800 years (711–1492), Al-Andalus in the Iberian Peninsula represented a radiant beacon of science, philosophical enquiry, architectural magnificence, and interfaith intellectual translation in medieval Europe.',
    body: 'From the foundation of the Emirate of Córdoba by the fugitive Umayyad prince Abd al-Rahman I in 756 CE to the final days of the Nasrid kingdom of Granada in 1492, Al-Andalus fundamentally shaped European and Arab civilization.',
    sections: [
      {
        title: 'The Jewel of the World: Caliphate of Córdoba',
        arabicTitle: 'جوهرة العالم: خلافة قرطبة',
        content: 'Under Abd al-Rahman III and Al-Hakam II in the 10th century, Córdoba possessed over 70 libraries, paved and illuminated streets, public baths, and the monumental Great Mosque (Mezquita), rivaling Baghdad and Constantinople.'
      },
      {
        title: 'The Transmission of Science and Philosophy',
        arabicTitle: 'انتقال العلوم والفلسفة إلى أوروبا',
        content: 'In Toledo and Córdoba, Christian, Jewish, and Muslim scholars translated Arabic treatises on medicine (Al-Zahrawi), astronomy (Al-Zarqali), optics, and Aristotelian philosophy (Ibn Rushd / Averroes), providing the intellectual catalyst for the European Renaissance.'
      }
    ],
    infoboxData: {
      'Duration': '711 — 1492 CE',
      'Major Centers': 'Córdoba, Seville, Granada, Toledo',
      'Architectural Icons': 'Great Mosque of Córdoba, Alhambra Palace, Giralda',
      'Key Figures': 'Abd al-Rahman I, Averroes (Ibn Rushd), Ziryab'
    },
    citations: [
      {
        id: 'cit-and-1',
        citationNumber: 1,
        text: 'A History of Islamic Spain, W. Montgomery Watt, Edinburgh University Press, 1965.',
        sourceId: 'src-7'
      }
    ],
    relatedArticles: ['nabataean-civilization']
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.find(a => a.slug === slug);
};

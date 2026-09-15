import { Landmark } from './types';
export type { Landmark };

export const landmarksData: Landmark[] = [
  {
    id: 'lm-alula',
    name: 'AlUla & Hegra (Madain Salih)',
    arabicName: 'العلا والحِجْر (مدائن صالح)',
    slug: 'alula-hegra',
    country: 'Saudi Arabia',
    countrySlug: 'saudi-arabia',
    city: 'AlUla',
    citySlug: 'alula',
    era: 'Nabataean Civilization (1st Century BCE – 1st Century CE)',
    architectureStyle: 'Nabataean Rock-Cut Monumental Architecture',
    constructionDate: '1st Century BCE',
    overview: 'Hegra (Al-Hijr) was the southern capital of the Nabataean kingdom and became Saudi Arabia’s first UNESCO World Heritage Site in 2008. Situated in the dramatic sandstone desert of AlUla, Hegra features over 111 monumental rock-cut tomb facades with remarkably preserved decorative pediments, eagles, and Nabataean inscriptions.',
    history: 'Located along the lucrative historic Incense Route connecting southern Arabia to Egypt, Syria, and Rome, Hegra flourished under Nabataean kings until the Roman annexation in 106 CE. In recent years, the Royal Commission for AlUla (RCU) has transformed the oasis valley into a global living museum of archaeology and contemporary arts (Maraya Concert Hall, the world’s largest mirrored building).',
    archaeology: 'Includes Qasr al-Farid ("The Solitary Castle"), an unfinished four-story sandstone tomb carved top-down from a single monolithic rock, and the sacred ritual meeting hall of Jabal Ithlib.',
    significance: 'One of the most monumental archaeological preserves on the planet, representing 200,000 years of human heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579606032834-a74bdc18151f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'lm-petra',
    name: 'Petra (The Rose City)',
    arabicName: 'البتراء (المدينة الوردية)',
    slug: 'petra',
    country: 'Jordan',
    countrySlug: 'jordan',
    city: 'Wadi Musa',
    citySlug: 'wadi-musa',
    era: 'Nabataean Civilization (4th Century BCE – 106 CE)',
    architectureStyle: 'Hellenistic-Nabataean Rock-Cut Architecture',
    constructionDate: '4th Century BCE – 1st Century CE',
    overview: 'Petra is an ancient rock-cut city carved into the vibrant pink and red sandstone cliffs of southern Jordan. Capital of the Nabataean kingdom and one of the New Seven Wonders of the World, Petra is approached through the dramatic 1.2-kilometer narrow gorge known as the Siq, which opens dramatically onto the Al-Khazneh (The Treasury).',
    history: 'Prospered as the central nexus of Arabian trade in silk, frankincense, myrrh, and spices. In 106 CE, Petra was annexed into the Roman Empire. Rediscovered to the modern world by Swiss traveler Johann Ludwig Burckhardt in 1812, it was designated a UNESCO World Heritage Site in 1985.',
    archaeology: 'Features the Treasury (Al-Khazneh), the Monastery (Ad-Deir, 48m high), the High Place of Sacrifice, the Roman-style Theatre, and sophisticated subterranean ceramic water channels.',
    significance: 'An unrivaled testament to ancient Arab engineering, hydraulic mastery, and rock architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1579606032834-a74bdc18151f?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1579606032834-a74bdc18151f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'lm-diriyah',
    name: 'At-Turaif District in Diriyah',
    arabicName: 'حي الطريف التاريخي بالدرعية',
    slug: 'diriyah-at-turaif',
    country: 'Saudi Arabia',
    countrySlug: 'saudi-arabia',
    city: 'Diriyah / Riyadh',
    citySlug: 'riyadh',
    era: 'First Saudi State (1727–1818)',
    architectureStyle: 'Najdi Mud-Brick Architecture',
    constructionDate: '1727 CE',
    overview: 'At-Turaif is the historic citadel and birthplace of the Saudi state, situated on the edge of Wadi Hanifa in Diriyah. Designated a UNESCO World Heritage Site in 2010, the district features monumental multi-story mudbrick palaces, courtyards, and mosques showcasing the authentic Najdi architectural style.',
    history: 'Founded in 1446 by Mani\' al-Muraydi, Diriyah became the capital of the First Saudi State in 1727 under Imam Muhammad bin Saud. After enduring the 1818 siege, At-Turaif has been restored as the cultural cornerstone of Saudi national identity through the multi-billion-dollar Diriyah Gate masterplan.',
    archaeology: 'Encompasses Salwa Palace (the largest mud-brick palace in the region), the Imam Muhammad bin Saud Mosque, and restored traditional souqs.',
    significance: 'The cradle of modern Saudi governance and architectural heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'lm-burj-khalifa',
    name: 'Burj Khalifa',
    arabicName: 'برج خليفة',
    slug: 'burj-khalifa',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    city: 'Dubai',
    citySlug: 'dubai',
    era: 'Modern Era (2004–2010)',
    architectureStyle: 'Neo-Futuristic Islamic-Inspired Skyscraper',
    constructionDate: '2004–2010',
    overview: 'Rising 828 meters (2,717 feet) into the sky over Downtown Dubai, the Burj Khalifa is the tallest building and freestanding structure in human history. Designed by Adrian Smith of SOM, the building’s Y-shaped floor plan and tiered setbacks draw direct inspiration from the desert Hymenocallis spider lily and Islamic geometric minaret proportions.',
    history: 'Inaugurated on 4 January 2010 by Sheikh Mohammed bin Rashid Al Maktoum, the skyscraper anchored Dubai’s emergence as a global center of tourism and engineering.',
    significance: 'A global pinnacle of 21st-century civil engineering, wind-engineering aerodynamics, and Gulf ambition.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'lm-sheikh-zayed-mosque',
    name: 'Sheikh Zayed Grand Mosque',
    arabicName: 'جامع الشيخ زايد الكبير',
    slug: 'sheikh-zayed-grand-mosque',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    city: 'Abu Dhabi',
    citySlug: 'abu-dhabi',
    era: 'Contemporary Islamic Era (1996–2007)',
    architectureStyle: 'Mamluk, Ottoman, and Fatimid White Marble Synthesis',
    constructionDate: '1996–2007',
    overview: 'The Sheikh Zayed Grand Mosque in Abu Dhabi is an architectural marvel of pure white Macedonian and Italian marble, featuring 82 domes, 4 minarets reaching 107 meters, over 1,000 jewel-encrusted columns, seven 24-karat gold-gilded Swarovski crystal chandeliers, and the world’s largest hand-knotted Iranian wool carpet.',
    history: 'Commissioned by Founding Father Sheikh Zayed bin Sultan Al Nahyan as an eternal symbol of peace, tolerance, and Islamic artistic mastery, it accommodates over 40,000 worshippers.',
    significance: 'The crowning masterpiece of modern Islamic spiritual architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'lm-sultan-qaboos-mosque',
    name: 'Sultan Qaboos Grand Mosque',
    arabicName: 'جامع السلطان قابوس الأكبر',
    slug: 'sultan-qaboos-grand-mosque',
    country: 'Oman',
    countrySlug: 'oman',
    city: 'Muscat',
    citySlug: 'muscat',
    era: 'Modern Omani Renaissance (1995–2001)',
    architectureStyle: 'Contemporary Omani Islamic Architecture',
    constructionDate: '1995–2001',
    overview: 'Constructed from 300,000 tonnes of Indian sandstone, the Sultan Qaboos Grand Mosque in Muscat is a tranquil sanctuary of Islamic geometry and craftsmanship. It features a central dome soaring 50 meters, a 14-meter Italian crystal chandelier, and a hand-woven Persian prayer carpet made of 1.7 billion knots.',
    history: 'Inaugurated in 2001 by Sultan Qaboos bin Said to commemorate the 30th year of his reign, serving as the spiritual heart of the Sultanate.',
    significance: 'Emblematic of Omani restrained elegance, peaceful contemplation, and fine stone carving.',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'lm-doha-mia',
    name: 'Museum of Islamic Art (Doha)',
    arabicName: 'متحف الفن الإسلامي بالدوحة',
    slug: 'doha-museum-of-islamic-art',
    country: 'Qatar',
    countrySlug: 'qatar',
    city: 'Doha',
    citySlug: 'doha',
    era: 'Contemporary Architectural Masterpiece (2008)',
    architectureStyle: 'Cubist Geometric Islamic Architecture',
    constructionDate: '2008',
    overview: 'Designed by Pritzker Prize-winning architect I.M. Pei at age 91 on a purpose-built island in Doha Bay, the Museum of Islamic Art draws inspiration from the 13th-century Sabil ablution fountain of Cairo’s Mosque of Ibn Tulun, housing one of the world’s most comprehensive collections of Islamic art spanning three continents and 1,400 years.',
    history: 'Opened in 2008 under Qatar Museums, initiating Doha’s reputation as a global cultural capital.',
    significance: 'An icon of geometric purity and Islamic aesthetic scholarship.',
    imageUrl: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const getLandmarkBySlug = (slug: string): Landmark | undefined => {
  return landmarksData.find(l => l.slug === slug);
};

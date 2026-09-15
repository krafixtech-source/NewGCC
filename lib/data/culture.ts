import { CultureTopic } from './types';
export type { CultureTopic };

export const cultureTopicsData: CultureTopic[] = [
  {
    id: 'cul-arch',
    title: 'Arabian Architecture',
    arabicName: 'العمارة العربية والإسلامية',
    slug: 'architecture',
    category: 'Architecture',
    leadParagraph: 'From the monolithic sandstone facades of Hegra and the mud-brick palaces of Najd to wind-tower courtyards and contemporary soaring skylines, Arabian architecture represents a brilliant adaptation to climate, spirituality, and community.',
    overview: 'Arabian architectural identity is rooted in the dialogue between geometry, privacy, light, and climate. Key structural innovations include the courtyard (Finā\'), the Mashrabiya or Roshan (intricate latticed wooden balconies providing ventilation and privacy), the Barjeel (wind towers capturing ambient desert breezes), and geometric Muqarnas vaulting.',
    history: 'Ancient Nabataean and Sabaean stone masonry evolved through the Umayyad and Abbasid eras into distinct regional schools: Najdi mudbrick fortified towers, Gulf coral stone and gypsum coastal dwellings, Levantine stone arcades, and Moorish horseshoe arches in the Maghreb and Al-Andalus.',
    craftsmanship: 'Carved gypsum plasterwork (Juss), hand-cut Zellij glazed tile mosaics, geometric timber joinery without nails, and intricately turned wooden Roshan screens.',
    traditions: 'Spatial organization centered on family privacy, separate reception halls for hospitality (Majlis), and central courtyard microclimates.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'cul-callig',
    title: 'Arabic Calligraphy (Khatt)',
    arabicName: 'فن الخط العربي',
    slug: 'calligraphy',
    category: 'Art & Heritage',
    leadParagraph: 'Arabic calligraphy is universally revered as the supreme visual art form of the Arab and Islamic world, transforming the sacred written word into intricate geometric and flowing masterpieces.',
    overview: 'Inscribed on the UNESCO Representative List of Intangible Cultural Heritage of Humanity, Arabic calligraphy developed six canonical classical scripts (Al-Aqlam Al-Sittah): Kufic, Thuluth, Naskh, Muhaqqaq, Rayhani, and Riqa\', alongside regional styles such as Diwani and Maghrebi.',
    history: 'Originating from the early Nabataean-Aramaic script, calligraphy was refined in Kufa, Basra, Damascus, and Baghdad by master calligraphers Ibn Muqla, Ibn al-Bawwab, and Yaqut al-Musta\'simi, who established mathematical proportionality based on the point (Nuqta) of the reed pen (Qalam).',
    craftsmanship: 'The dried Qalam reed pen carved with a beveled tip, soot-based oak-gall ink (Midad), hand-sized burnished paper treated with egg white and starch (Ahar), and gold leaf illumination (Tadhhib).',
    traditions: 'An unbroken master-to-apprentice lineage sealed by the granting of the formal license (Ijaza) after years of rigorous training.',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'cul-gahwa',
    title: 'Gahwa & Arabian Hospitality (Diyafa)',
    arabicName: 'القهوة العربية وكرم الضيافة',
    slug: 'coffee-and-hospitality',
    category: 'Traditions',
    leadParagraph: 'Arabian coffee (Gahwa) is not merely a beverage but a profound cultural ritual of generosity, honor, and social diplomacy inscribed by UNESCO on the Intangible Cultural Heritage list.',
    overview: 'Served in the Majlis from an ornate brass Dallah coffee pot into small handleless porcelain cups (Finjan), Gahwa is lightly roasted and spiced with green cardamom, saffron, and cloves, accompanied by premium Arabian dates.',
    history: 'First cultivated and brewed as a hot infusion in the highlands of Yemen (Sufi monasteries in Zabid and Mocha) in the 15th century, coffee culture spread across the Arabian Peninsula, Cairo, Damascus, and Mecca, giving birth to the world\'s first coffeehouses.',
    craftsmanship: 'Hand-hammered brass and copper Dallah pots featuring long curved spouts, carved wooden mortar and pestles (Mihbash), and roasting pans (Mahmas).',
    traditions: 'Etiquette dictates serving the guest with the right hand, pouring only one-third of the Finjan, and shaking the cup gently side-to-side when one has finished.',
    imageUrl: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'cul-pearl',
    title: 'Pearl Diving & Maritime Heritage',
    arabicName: 'الغوص على اللؤلؤ والتراث البحري',
    slug: 'pearl-diving',
    category: 'Maritime History',
    leadParagraph: 'For thousands of years prior to the discovery of petroleum, natural pearl diving (Ghows) was the lifeblood and economic heartbeat of the Arabian Gulf.',
    overview: 'Dhow fleets sailed for months during the scorching summer season (Al-Ghows Al-Kabeer) to offshore oyster banks (Hayrat). Divers (Ghais) descended up to 20 meters holding a stone weight and a nose clip made of turtle shell (Fitam).',
    history: 'Referenced in the Epic of Gilgamesh, the natural pearls of Bahrain, Qatar, UAE, and Kuwait were prized in Roman courts, Renaissance Europe, and the Mughal Empire for their unmatched luster (Dana).',
    craftsmanship: 'Hand-built wooden dhow vessels (Boum, Sambuk, Jalboot) crafted from teak without architectural blueprints, using curved ribs and coconut-fiber caulking.',
    traditions: 'Fijiri maritime chants led by the ship\'s singer (Nahham) provided rhythmic coordination and solace across the open sea.',
    imageUrl: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'cul-dress',
    title: 'Traditional Attire & Royal Regalia',
    arabicName: 'الأزياء التقليدية والبشت الملكي',
    slug: 'traditional-attire',
    category: 'Heritage & Craft',
    leadParagraph: 'Traditional Arab attire embodies dignity, climatic suitability, and artisanal embroidery, crowned by the ceremonial Bisht cloak worn by kings, rulers, and dignitaries.',
    overview: 'Consists of the immaculate white ankle-length Thobe (Kandura / Dishdasha), the headcloth (Ghutra / Shemagh) secured with the double black ring cord (Igal), and the Bisht—a gossamer cloak woven from camel hair or wool and edged in 24k gold thread (Zari).',
    history: 'Rooted in pre-Islamic Bedouin pastoralism and courtly Islamic dress, the Bisht remains the definitive symbol of royal protocol, state occasions, and wedding ceremonies across the Gulf and Arab world.',
    craftsmanship: 'The Al-Hasawi Bisht from Al-Ahsa oasis is the most prestigious hand-embroidered cloak in Arabia, requiring weeks of master needlework to apply golden Zari braids.',
    traditions: 'Worn open with right arm through the sleeve in official diplomatic ceremonies, state receptions, and national holidays.',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'cul-poetry',
    title: 'Arabic Poetry & The Mu\'allaqat',
    arabicName: 'الشعر العربي والمعلقات',
    slug: 'poetry-and-literature',
    category: 'Literature',
    leadParagraph: 'Poetry is the eternal register of the Arabs (Diwan al-Arab), capturing historical battles, desert journeys, chivalry, and timeless love since pre-Islamic antiquity.',
    overview: 'The golden zenith of pre-Islamic verse is embodied in the Mu\'allaqat (The Suspended Odes)—seven masterwork poems inscribed in gold and hung upon the curtains of the Kaaba in Mecca, composed by legends including Imru\' al-Qays, Antarah ibn Shaddad, and Zuhayr.',
    history: 'Evolved into complex meter systems codified by Al-Khalil ibn Ahmad al-Farahidi in the 8th century, reaching imperial heights under Al-Mutanabbi and Abu Nuwas, and persisting today in contemporary Nabati verse.',
    craftsmanship: 'Mastery of 16 classical metric meters (Buhur al-Shi\'r) and oral recitation eloquence (Balaagha).',
    traditions: 'Recited around evening desert fires, in royal Majlis sessions, and celebrated in regional poetry competitions such as Million\'s Poet.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&q=85'
  }
];

export const getCultureTopicBySlug = (slug: string): CultureTopic | undefined => {
  return cultureTopicsData.find(c => c.slug === slug);
};

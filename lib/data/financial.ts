export interface CurrencyRate {
  code: string;
  name: string;
  nameAr: string;
  symbol: string;
  symbolAr: string;
  flag: string;
  country: string;
  countryAr: string;
  rateToUSD: number; // e.g. 3.75 for SAR
  isGCC: boolean;
  pegNotice?: string;
  pegNoticeAr?: string;
}

export const ARAB_CURRENCIES: CurrencyRate[] = [
  {
    code: 'SAR',
    name: 'Saudi Riyal',
    nameAr: 'ريال سعودي',
    symbol: '﷼',
    symbolAr: 'ر.س',
    flag: '🇸🇦',
    country: 'Saudi Arabia',
    countryAr: 'المملكة العربية السعودية',
    rateToUSD: 3.75,
    isGCC: true,
    pegNotice: 'Official SAMA Fixed Peg: 1 USD = 3.7500 SAR',
    pegNoticeAr: 'سعر الصرف الرسمي المثبت لدى البنك المركزي السعودي (ساما): 1 دولار = 3.7500 ر.س'
  },
  {
    code: 'AED',
    name: 'UAE Dirham',
    nameAr: 'درهم إماراتي',
    symbol: 'د.إ',
    symbolAr: 'د.إ',
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    countryAr: 'الإمارات العربية المتحدة',
    rateToUSD: 3.6725,
    isGCC: true,
    pegNotice: 'Official CBUAE Fixed Peg: 1 USD = 3.6725 AED',
    pegNoticeAr: 'سعر الصرف الرسمي المثبت لدى مصرف الإمارات المركزي: 1 دولار = 3.6725 د.إ'
  },
  {
    code: 'QAR',
    name: 'Qatari Riyal',
    nameAr: 'ريال قطري',
    symbol: 'ر.ق',
    symbolAr: 'ر.ق',
    flag: '🇶🇦',
    country: 'Qatar',
    countryAr: 'دولة قطر',
    rateToUSD: 3.64,
    isGCC: true,
    pegNotice: 'Official QCB Fixed Peg: 1 USD = 3.6400 QAR',
    pegNoticeAr: 'سعر الصرف الرسمي المثبت لدى مصرف قطر المركزي: 1 دولار = 3.6400 ر.ق'
  },
  {
    code: 'KWD',
    name: 'Kuwaiti Dinar',
    nameAr: 'دينار كويتي',
    symbol: 'د.ك',
    symbolAr: 'د.ك',
    flag: '🇰🇼',
    country: 'Kuwait',
    countryAr: 'دولة الكويت',
    rateToUSD: 0.3068,
    isGCC: true,
    pegNotice: 'Pegged to an undisclosed weighted currency basket (CBK)',
    pegNoticeAr: 'مثبت بسلة عملات غير معلنة لدى بنك الكويت المركزي'
  },
  {
    code: 'BHD',
    name: 'Bahraini Dinar',
    nameAr: 'دينار بحريني',
    symbol: '.د.ب',
    symbolAr: 'د.ب',
    flag: '🇧🇭',
    country: 'Bahrain',
    countryAr: 'مملكة البحرين',
    rateToUSD: 0.376,
    isGCC: true,
    pegNotice: 'Official CBB Fixed Peg: 1 USD = 0.3760 BHD',
    pegNoticeAr: 'سعر الصرف الرسمي المثبت لدى مصرف البحرين المركزي: 1 دولار = 0.3760 د.ب'
  },
  {
    code: 'OMR',
    name: 'Omani Rial',
    nameAr: 'ريال عماني',
    symbol: 'ر.ع',
    symbolAr: 'ر.ع',
    flag: '🇴🇲',
    country: 'Oman',
    countryAr: 'سلطنة عمان',
    rateToUSD: 0.3845,
    isGCC: true,
    pegNotice: 'Official CBO Fixed Peg: 1 USD = 0.3845 OMR',
    pegNoticeAr: 'سعر الصرف الرسمي المثبت لدى البنك المركزي العماني: 1 دولار = 0.3845 ر.ع'
  },
  {
    code: 'USD',
    name: 'US Dollar',
    nameAr: 'دولار أمريكي',
    symbol: '$',
    symbolAr: '$',
    flag: '🇺🇸',
    country: 'United States',
    countryAr: 'الولايات المتحدة',
    rateToUSD: 1.0,
    isGCC: false,
  },
  {
    code: 'EUR',
    name: 'Euro',
    nameAr: 'يورو أوروبي',
    symbol: '€',
    symbolAr: '€',
    flag: '🇪🇺',
    country: 'Eurozone',
    countryAr: 'منطقة اليورو',
    rateToUSD: 0.925,
    isGCC: false,
  },
  {
    code: 'GBP',
    name: 'British Pound',
    nameAr: 'جنيه إسترليني',
    symbol: '£',
    symbolAr: '£',
    flag: '🇬🇧',
    country: 'United Kingdom',
    countryAr: 'المملكة المتحدة',
    rateToUSD: 0.792,
    isGCC: false,
  },
  {
    code: 'EGP',
    name: 'Egyptian Pound',
    nameAr: 'جنيه مصري',
    symbol: 'ج.م',
    symbolAr: 'ج.م',
    flag: '🇪🇬',
    country: 'Egypt',
    countryAr: 'جمهورية مصر العربية',
    rateToUSD: 49.35,
    isGCC: false,
  },
  {
    code: 'JOD',
    name: 'Jordanian Dinar',
    nameAr: 'دينار أردني',
    symbol: 'د.أ',
    symbolAr: 'د.أ',
    flag: '🇯🇴',
    country: 'Jordan',
    countryAr: 'المملكة الأردنية الهاشمية',
    rateToUSD: 0.709,
    isGCC: false,
    pegNotice: 'Official CBJ Fixed Peg: 1 USD = 0.7090 JOD',
    pegNoticeAr: 'سعر الصرف الرسمي المثبت لدى البنك المركزي الأردني: 1 دولار = 0.7090 د.أ'
  },
  {
    code: 'MAD',
    name: 'Moroccan Dirham',
    nameAr: 'درهم مغربي',
    symbol: 'د.م.',
    symbolAr: 'د.م.',
    flag: '🇲🇦',
    country: 'Morocco',
    countryAr: 'المملكة المغربية',
    rateToUSD: 9.95,
    isGCC: false,
  },
  {
    code: 'IQD',
    name: 'Iraqi Dinar',
    nameAr: 'دينار عراقي',
    symbol: 'ع.د',
    symbolAr: 'ع.د',
    flag: '🇮🇶',
    country: 'Iraq',
    countryAr: 'جمهورية العراق',
    rateToUSD: 1310.0,
    isGCC: false,
  },
  {
    code: 'DZD',
    name: 'Algerian Dinar',
    nameAr: 'دينار جزائري',
    symbol: 'د.ج',
    symbolAr: 'د.ج',
    flag: '🇩🇿',
    country: 'Algeria',
    countryAr: 'الجمهورية الجزائرية',
    rateToUSD: 134.2,
    isGCC: false,
  },
  {
    code: 'LYD',
    name: 'Libyan Dinar',
    nameAr: 'دينار ليبي',
    symbol: 'ل.د',
    symbolAr: 'ل.د',
    flag: '🇱🇾',
    country: 'Libya',
    countryAr: 'دولة ليبيا',
    rateToUSD: 4.85,
    isGCC: false,
  },
  {
    code: 'TND',
    name: 'Tunisian Dinar',
    nameAr: 'دينار تونسي',
    symbol: 'د.ت',
    symbolAr: 'د.ت',
    flag: '🇹🇳',
    country: 'Tunisia',
    countryAr: 'الجمهورية التونسية',
    rateToUSD: 3.12,
    isGCC: false,
  },
  {
    code: 'LBP',
    name: 'Lebanese Pound',
    nameAr: 'ليرة لبنانية',
    symbol: 'ل.ل',
    symbolAr: 'ل.ل',
    flag: '🇱🇧',
    country: 'Lebanon',
    countryAr: 'الجمهورية اللبنانية',
    rateToUSD: 89500.0,
    isGCC: false,
  },
  {
    code: 'SYP',
    name: 'Syrian Pound',
    nameAr: 'ليرة سورية',
    symbol: 'ل.س',
    symbolAr: 'ل.س',
    flag: '🇸🇾',
    country: 'Syria',
    countryAr: 'الجمهورية العربية السورية',
    rateToUSD: 13000.0,
    isGCC: false,
  },
  {
    code: 'YER',
    name: 'Yemeni Rial',
    nameAr: 'ريال يمني',
    symbol: '﷼',
    symbolAr: 'ر.ي',
    flag: '🇾🇪',
    country: 'Yemen',
    countryAr: 'الجمهورية اليمنية',
    rateToUSD: 250.0,
    isGCC: false,
  },
  {
    code: 'SDG',
    name: 'Sudanese Pound',
    nameAr: 'جنيه سوداني',
    symbol: 'ج.س.',
    symbolAr: 'ج.س.',
    flag: '🇸🇩',
    country: 'Sudan',
    countryAr: 'جمهورية السودان',
    rateToUSD: 601.0,
    isGCC: false,
  },
  {
    code: 'MRU',
    name: 'Mauritanian Ouguiya',
    nameAr: 'أوقية موريتانية',
    symbol: 'UM',
    symbolAr: 'أ.م',
    flag: '🇲🇷',
    country: 'Mauritania',
    countryAr: 'الجمهورية الإسلامية الموريتانية',
    rateToUSD: 39.8,
    isGCC: false,
  },
  {
    code: 'CHF',
    name: 'Swiss Franc',
    nameAr: 'فرنك سويسري',
    symbol: 'Fr',
    symbolAr: 'فرنك',
    flag: '🇨🇭',
    country: 'Switzerland',
    countryAr: 'سويسرا',
    rateToUSD: 0.88,
    isGCC: false,
  },
  {
    code: 'INR',
    name: 'Indian Rupee',
    nameAr: 'روبية هندية',
    symbol: '₹',
    symbolAr: 'روبية',
    flag: '🇮🇳',
    country: 'India',
    countryAr: 'الهند',
    rateToUSD: 84.5,
    isGCC: false,
  }
];

export interface GoldStandard {
  id: string;
  name: string;
  nameAr: string;
  karat: string;
  purity: number; // e.g. 0.999 for 24K, 0.916 for 22K
  description: string;
  descriptionAr: string;
  badge: string;
  badgeAr: string;
  isPopularGCC?: boolean;
}

export const GOLD_STANDARDS: GoldStandard[] = [
  {
    id: '24k',
    name: '24 Karat (99.9% Pure)',
    nameAr: 'عيار ٢٤ (نقاء ٩٩.٩٪)',
    karat: '24K',
    purity: 0.9999,
    description: 'Investment grade pure bullion bar standard',
    descriptionAr: 'معيار السبائك الاستثمارية الخالصة الأعلى نقاءً',
    badge: 'Investment Grade',
    badgeAr: 'سبائك استثمارية',
    isPopularGCC: true
  },
  {
    id: '22k',
    name: '22 Karat (91.6% Pure)',
    nameAr: 'عيار ٢٢ (نقاء ٩١.٦٪)',
    karat: '22K',
    purity: 0.9167,
    description: 'Gulf standard for traditional crafted jewelry',
    descriptionAr: 'المعيار الخليجي المعتمد للمجوهرات التراثية الفاخرة',
    badge: 'Gulf Traditional',
    badgeAr: 'مجوهرات خليجية',
    isPopularGCC: true
  },
  {
    id: '21k',
    name: '21 Karat (87.5% Pure)',
    nameAr: 'عيار ٢١ (نقاء ٨٧.٥٪)',
    karat: '21K',
    purity: 0.875,
    description: 'The most popular trade standard in Saudi Arabia & GCC',
    descriptionAr: 'العيار الأكثر تداولاً وشعبية في المملكة ودول الخليج',
    badge: 'Most Popular',
    badgeAr: 'الأكثر تداولاً',
    isPopularGCC: true
  },
  {
    id: '18k',
    name: '18 Karat (75.0% Pure)',
    nameAr: 'عيار ١٨ (نقاء ٧٥.٠٪)',
    karat: '18K',
    purity: 0.75,
    description: 'Italian and modern luxury jewelry standard',
    descriptionAr: 'معيار المجوهرات العصرية والأطقم الإيطالية والألماس',
    badge: 'Modern Luxury',
    badgeAr: 'مجوهرات عصرية'
  },
  {
    id: 'ounce',
    name: 'Gold Ounce (31.1035g)',
    nameAr: 'أونصة الذهب (٣١.١٠٣٥ جم)',
    karat: 'XAU',
    purity: 0.9999,
    description: 'International benchmark spot market troy ounce',
    descriptionAr: 'الأونصة الدولية القياسية المعيارية للتداول العالمي',
    badge: 'Global Spot XAU',
    badgeAr: 'المعيار الدولي'
  },
  {
    id: 'sovereign',
    name: 'Gold Sovereign Coin (8g 21.6K)',
    nameAr: 'جنيه الذهب (٨ جرام عيار ٢١.٦)',
    karat: '8g Coin',
    purity: 0.900,
    description: 'Historic George / Islamic gold sovereign coin',
    descriptionAr: 'جنيه الذهب الاستثماري والادخاري الموثق ٨ جرام',
    badge: 'Gold Coin',
    badgeAr: 'عملة ذهبية'
  },
  {
    id: 'kilo',
    name: '1 Kilogram Gold Bar (1000g)',
    nameAr: 'كيلوجرام ذهب (١٠٠٠ جم)',
    karat: '1kg Bar',
    purity: 0.9999,
    description: 'Central bank and institutional bullion bar',
    descriptionAr: 'سبيكة البنوك والمؤسسات المالية الاستثمارية الكبرى',
    badge: 'Institutional Bar',
    badgeAr: 'سبيكة كيلوغرام'
  },
  {
    id: 'silver',
    name: 'Silver Spot (99.9% Pure Gram)',
    nameAr: 'جرام الفضة الخالصة (٩٩.٩٪)',
    karat: 'Silver 999',
    purity: 0.0125, // Relative benchmark value to gold
    description: 'Pure 999 investment grade silver per gram',
    descriptionAr: 'جرام الفضة الاستثمارية النقية عيار ٩٩٩',
    badge: 'Pure Silver',
    badgeAr: 'فضة نقية'
  }
];

// Base gold spot price in USD per Troy Ounce (31.1034768 grams)
export const BASE_GOLD_OUNCE_USD = 2748.50;
export const TROY_OUNCE_GRAMS = 31.1034768;
export const BASE_GRAM_24K_USD = BASE_GOLD_OUNCE_USD / TROY_OUNCE_GRAMS; // ~$88.36 per gram 24K

export interface LiveMarketTick {
  ounceUSD: number;
  gram24kUSD: number;
  change24hPct: number;
  change24hUSD: number;
  dayHighUSD: number;
  dayLowUSD: number;
  lastUpdated: string;
  timestamp: number;
}

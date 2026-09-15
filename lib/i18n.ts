export type Language = 'en' | 'ar';

export interface Translations {
  siteTitle: string;
  tagline: string;
  subtitle: string;
  explore: string;
  countries: string;
  royalty: string;
  history: string;
  culture: string;
  cities: string;
  timeline: string;
  landmarks: string;
  gcc: string;
  compare: string;
  knowledgeGraph: string;
  randomArticle: string;
  search: string;
  searchPlaceholder: string;
  searchPrompt: string;
  noResults: string;
  admin: string;
  sources: string;
  editorialStandards: string;
  corrections: string;
  about: string;
  contact: string;
  legal: string;
  privacy: string;
  terms: string;
  copyright: string;
  allRightsReserved: string;
  viewMore: string;
  readArticle: string;
  exploreCountry: string;
  viewDynasty: string;
  currentRulers: string;
  housesOfRoyalty: string;
  fromTheArchive: string;
  todayInHistory: string;
  featuredQuote: string;
  dailyDiscovery: string;
  newsletterTitle: string;
  newsletterDesc: string;
  subscribe: string;
  quickFacts: string;
  capital: string;
  largestCity: string;
  population: string;
  area: string;
  currency: string;
  language: string;
  government: string;
  headOfState: string;
  foundingDate: string;
  overview: string;
  familyTree: string;
  notableMembers: string;
  references: string;
  filterByRegion: string;
  all: string;
  levant: string;
  northAfrica: string;
  arabianPeninsula: string;
  hornOfAfrica: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    siteTitle: 'GCC',
    tagline: 'The Arab World, Documented.',
    subtitle: 'History. Nations. Royalty. Culture. Legacy.',
    explore: 'Explore',
    countries: 'Countries',
    royalty: 'Royalty',
    history: 'History',
    culture: 'Culture',
    cities: 'Cities',
    timeline: 'Timeline',
    landmarks: 'Landmarks',
    gcc: 'GCC Nations',
    compare: 'Compare Nations',
    knowledgeGraph: 'Knowledge Graph',
    randomArticle: 'Random Article',
    search: 'Search Archive',
    searchPlaceholder: 'Search nations, dynasties, rulers, cities, landmarks...',
    searchPrompt: 'Search across 22 countries, centuries of history and royal dynasties.',
    noResults: 'No records found in the archive.',
    admin: 'Editorial CMS',
    sources: 'Sources & Archives',
    editorialStandards: 'Editorial Standards',
    corrections: 'Request Correction',
    about: 'About GCC',
    contact: 'Contact & Inquiries',
    legal: 'Legal & Custodianship',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    copyright: '© 2026 GCC Archive. Documenting the Arab World with scholarly precision.',
    allRightsReserved: 'All rights reserved.',
    viewMore: 'View Details',
    readArticle: 'Read Full Article',
    exploreCountry: 'Explore Country',
    viewDynasty: 'View Dynasty',
    currentRulers: 'Leadership of the Arab World',
    housesOfRoyalty: 'Houses of Royalty',
    fromTheArchive: 'From the Archive',
    todayInHistory: 'Today in Arab History',
    featuredQuote: 'Archival Inscription',
    dailyDiscovery: 'Daily Discovery',
    newsletterTitle: 'The Archival Dispatch',
    newsletterDesc: 'Receive curated scholarly essays, historical analyses, and cultural discoveries directly to your inbox.',
    subscribe: 'Subscribe to Archive',
    quickFacts: 'Quick Facts',
    capital: 'Capital',
    largestCity: 'Largest City',
    population: 'Population',
    area: 'Area',
    currency: 'Currency',
    language: 'Official Language',
    government: 'Government',
    headOfState: 'Head of State',
    foundingDate: 'Founding Year',
    overview: 'Overview',
    familyTree: 'Genealogical Royal Tree',
    notableMembers: 'Notable Members & Monarchs',
    references: 'Archival References & Citations',
    filterByRegion: 'Filter by Region',
    all: 'All Nations',
    levant: 'Levant',
    northAfrica: 'North Africa',
    arabianPeninsula: 'Arabian Peninsula',
    hornOfAfrica: 'Horn of Africa',
  },
  ar: {
    siteTitle: 'مجلس التعاون والعالم العربي',
    tagline: 'العالم العربي، موثقاً.',
    subtitle: 'تاريخ. دول. ملوك. ثقافة. تراث.',
    explore: 'استكشف',
    countries: 'الدول',
    royalty: 'العائلات الحاكمة',
    history: 'التاريخ',
    culture: 'الثقافة',
    cities: 'المدن',
    timeline: 'الخط الزمني',
    landmarks: 'المعالم',
    gcc: 'دول الخليج',
    compare: 'مقارنة الدول',
    knowledgeGraph: 'خريطة المعرفة',
    randomArticle: 'مقال عشوائي',
    search: 'بحث في الأرشيف',
    searchPlaceholder: 'ابحث عن الدول، الأسر الحاكمة، الملوك، المدن، المعالم...',
    searchPrompt: 'ابحث عبر ٢٢ دولة، وقرون من التاريخ والأسر الملكية الحاكمة.',
    noResults: 'لم يتم العثور على سجلات في الأرشيف.',
    admin: 'لوحة التحرير',
    sources: 'المصادر والمراجع',
    editorialStandards: 'المعايير التحريرية',
    corrections: 'طلب تصحيح',
    about: 'عن المنصة',
    contact: 'اتصل بنا',
    legal: 'الشؤون القانونية',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    copyright: '© ٢٠٢٦ أرشيف العالم العربي. توثيق تاريخي وأكاديمي رصين.',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    viewMore: 'عرض التفاصيل',
    readArticle: 'قراءة المقال كاملاً',
    exploreCountry: 'استكشف الدولة',
    viewDynasty: 'عرض الأسرة الحاكمة',
    currentRulers: 'قادة العالم العربي',
    housesOfRoyalty: 'العائلات والبيوت الملكية',
    fromTheArchive: 'من الأرشيف',
    todayInHistory: 'حدث في مثل هذا اليوم',
    featuredQuote: 'من أقوال التاريخ',
    dailyDiscovery: 'اكتشاف اليوم',
    newsletterTitle: 'النشرة الأرشيفية الدورية',
    newsletterDesc: 'اشترك لتصلك أحدث المقالات التاريخية والدراسات التراثية الموثقة.',
    subscribe: 'اشتراك في الأرشيف',
    quickFacts: 'حقائق سريعة',
    capital: 'العاصمة',
    largestCity: 'أكبر مدينة',
    population: 'عدد السكان',
    area: 'المساحة',
    currency: 'العملة',
    language: 'اللغة الرسمية',
    government: 'نظام الحكم',
    headOfState: 'رئيس الدولة',
    foundingDate: 'سنة التأسيس',
    overview: 'نظرة عامة',
    familyTree: 'شجرة النسب الملكية',
    notableMembers: 'أبرز القادة والملوك',
    references: 'المصادر والمراجع الموثقة',
    filterByRegion: 'تصفية حسب المنطقة',
    all: 'جميع الدول',
    levant: 'بلاد الشام',
    northAfrica: 'شمال أفريقيا',
    arabianPeninsula: 'شبه الجزيرة العربية',
    hornOfAfrica: 'القرن الأفريقي',
  }
};

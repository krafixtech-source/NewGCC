export type SourceTier = 'LEVEL_A' | 'LEVEL_B' | 'LEVEL_C';
export type ArticleStatus = 'DRAFT' | 'RESEARCHING' | 'FACT_CHECKING' | 'EDITORIAL_REVIEW' | 'PUBLISHED' | 'ARCHIVED';
export type FlagType = 'CITATION_NEEDED' | 'DISPUTED' | 'HISTORICAL_UNCERTAINTY' | 'OUTDATED_STATISTIC' | 'POLITICAL_VERIFICATION';

export interface Source {
  id: string;
  title: string;
  author: string;
  publisher: string;
  publicationDate?: string;
  url?: string;
  isbn?: string;
  qualityTier: SourceTier;
  verified: boolean;
}

export interface Citation {
  id: string;
  citationNumber: number;
  text: string;
  sourceId: string;
  source?: Source;
}

export interface NationalSymbol {
  type: 'FLAG' | 'EMBLEM' | 'ANTHEM' | 'ANIMAL' | 'FLOWER' | 'DAY';
  name: string;
  arabicName?: string;
  description: string;
  imageUrl?: string;
}

export interface Country {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  isoCode: string;
  isGCC: boolean;
  region: 'GCC' | 'Levant' | 'North Africa' | 'Arabian Peninsula' | 'Horn of Africa';
  capital: string;
  largestCity: string;
  population: number;
  areaKm2: number;
  currency: string;
  currencySymbol?: string;
  officialLanguage: string;
  governmentType: string;
  headOfState: string;
  headOfGovernment?: string;
  crownPrince?: string;
  demonym: string;
  callingCode: string;
  internetDomain: string;
  timeZone: string;
  foundingYear: number;
  summary: string;
  overview: string;
  historyText: string;
  governmentText: string;
  geographyText: string;
  economyText: string;
  cultureText: string;
  flagUrl: string;
  emblemUrl?: string;
  anthemName?: string;
  heroImageUrl: string;
  latitude: number;
  longitude: number;
  gdpNominalBillion: number;
  gdpPerCapita: number;
  royalDynastySlug?: string;
  nationalSymbols?: NationalSymbol[];
  citations?: Citation[];
  keyFigures?: string[]; // person slugs
  majorCities?: string[]; // city slugs
  landmarks?: string[]; // landmark slugs
}

export interface TreeNode {
  id: string;
  name: string;
  arabicName: string;
  slug?: string;
  title: string;
  birthYear?: number;
  deathYear?: number;
  reign?: string;
  isCurrent?: boolean;
  portraitUrl?: string;
  children?: TreeNode[];
}

export interface RoyalFamily {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  country: string;
  countrySlug: string;
  foundedYear: number;
  founder: string;
  currentHead: string;
  currentTitle: string;
  crestUrl?: string;
  heroImageUrl: string;
  overview: string;
  history: string;
  residences: string[];
  familyTree: TreeNode;
  rulers: {
    name: string;
    arabicName: string;
    slug: string;
    reign: string;
    title: string;
    portraitUrl: string;
    isCurrent?: boolean;
  }[];
  crownPrince?: {
    name: string;
    arabicName: string;
    slug: string;
    title: string;
    portraitUrl: string;
  };
  citations?: Citation[];
}

export interface Person {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  title: string;
  arabicTitle: string;
  birthYear?: number;
  deathYear?: number;
  isCurrent: boolean;
  isRuler: boolean;
  reign?: string;
  reignStart?: string;
  reignEnd?: string;
  country: string;
  countrySlug: string;
  dynasty?: string;
  dynastySlug?: string;
  category: 'Rulers' | 'Royal Family' | 'Historical Figures' | 'Scholars' | 'Scientists' | 'Writers' | 'Artists' | 'Explorers';
  portraitUrl: string;
  biography: string;
  earlyLife: string;
  riseToPower?: string;
  politicalLegacy?: string;
  familyNotes?: string;
  honours: string[];
  timeline: { year: number; event: string }[];
  citations?: Citation[];
  relatedPeople?: string[]; // slugs
}

export interface HistoricalEra {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  startYear: number;
  endYear: number | string;
  overview: string;
  origins: string;
  territory: string;
  culture: string;
  science: string;
  architecture: string;
  legacy: string;
  heroImageUrl: string;
  keyRulers: string[];
  keyEvents: { year: string | number; title: string; description: string }[];
  citations?: Citation[];
}

export interface TimelineEvent {
  id: string;
  year: number;
  century: string;
  dateString?: string;
  title: string;
  arabicTitle: string;
  location: string;
  countrySlug?: string;
  dynastySlug?: string;
  eraSlug?: string;
  category: 'Founding' | 'Treaty' | 'Dynastic' | 'Cultural' | 'Modern' | 'Archaeological';
  description: string;
  relatedPersonSlug?: string;
  relatedArticleSlug?: string;
}

export interface City {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  country: string;
  countrySlug: string;
  population: number;
  isCapital: boolean;
  shortDescription: string;
  history: string;
  architecture: string;
  economy: string;
  culture: string;
  districts: string[];
  transportation: string;
  imageUrl: string;
  landmarks: string[];
  citations?: Citation[];
}

export interface Landmark {
  id: string;
  name: string;
  arabicName: string;
  slug: string;
  country: string;
  countrySlug: string;
  city?: string;
  citySlug?: string;
  era: string;
  architectureStyle: string;
  constructionDate: string;
  overview: string;
  history: string;
  archaeology?: string;
  significance: string;
  imageUrl: string;
  gallery: string[];
  citations?: Citation[];
}

export interface CultureTopic {
  id: string;
  title: string;
  arabicName: string;
  arabicTitle?: string;
  slug: string;
  category: string;
  leadParagraph: string;
  overview: string;
  history: string;
  craftsmanship: string;
  traditions: string;
  imageUrl: string;
  citations?: Citation[];
}


export interface ArticleSection {
  title: string;
  arabicTitle?: string;
  content: string;
}

export interface Article {
  id: string;
  title: string;
  arabicTitle: string;
  slug: string;
  category: 'History' | 'Royalty' | 'Culture' | 'Architecture' | 'Civilizations' | 'People' | 'Geography';
  leadParagraph: string;
  body: string;
  sections?: ArticleSection[];
  heroImageUrl: string;
  readTime: number;
  status: ArticleStatus;
  author?: string;
  publishedAt: string;
  countrySlug?: string;
  infoboxData?: Record<string, string>;
  citations?: Citation[];
  relatedArticles?: string[];
  relatedPeople?: string[];
}

export interface FactCheckItem {
  id: string;
  entityType: 'Article' | 'Leader' | 'Statistic' | 'Claim';
  entityTitle: string;
  flagType: FlagType;
  notes: string;
  editor: string;
  createdAt: string;
  resolved: boolean;
}

export interface RevisionItem {
  id: string;
  entityType: string;
  entityTitle: string;
  editorName: string;
  changeSummary: string;
  revisionNumber: number;
  timestamp: string;
}

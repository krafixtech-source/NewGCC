import { FactCheckItem, RevisionItem } from './types';
import { countriesData } from './countries';
import { peopleData } from './people';
import { royalFamiliesData } from './royalty';
import { citiesData } from './cities';
import { landmarksData } from './landmarks';
import { articlesData } from './articles';
import { sourcesData } from './sources';

export interface CMSMetrics {
  totalArticles: number;
  totalCountries: number;
  totalPeople: number;
  totalDynasties: number;
  totalCities: number;
  totalLandmarks: number;
  totalSources: number;
  publishedArticles: number;
  draftArticles: number;
  pendingReviews: number;
  factCheckAlerts: number;
}

export const initialFactCheckQueue: FactCheckItem[] = [
  {
    id: 'fc-1',
    entityType: 'Leader',
    entityTitle: 'Sheikh Mishal Al-Ahmad Al-Jaber Al-Sabah (Emir of Kuwait)',
    flagType: 'POLITICAL_VERIFICATION',
    notes: 'Reign verified valid from 2023-12-16. Verified against official Amiri Diwan gazette.',
    editor: 'Senior Editorial Board',
    createdAt: '2024-01-05',
    resolved: true
  },
  {
    id: 'fc-2',
    entityType: 'Leader',
    entityTitle: 'Sultan Haitham bin Tariq (Sultan of Oman)',
    flagType: 'POLITICAL_VERIFICATION',
    notes: 'Basic Statute succession amendment cross-referenced with Royal Decree 6/2021.',
    editor: 'Oman Historical Archives Team',
    createdAt: '2024-02-10',
    resolved: true
  },
  {
    id: 'fc-3',
    entityType: 'Statistic',
    entityTitle: 'Saudi Arabia GDP and Sovereign Investment Metrics',
    flagType: 'OUTDATED_STATISTIC',
    notes: 'Updated nominal GDP and non-oil revenue targets aligned with 2024 Ministry of Finance data.',
    editor: 'Economic Desk',
    createdAt: '2024-03-01',
    resolved: true
  },
  {
    id: 'fc-4',
    entityType: 'Article',
    entityTitle: 'The Founding of Saudi Arabia: Three Centuries of Statehood',
    flagType: 'CITATION_NEEDED',
    notes: 'Verify 1727 founding date against King Abdulaziz Foundation (Darah) archival documents.',
    editor: 'Research Council',
    createdAt: '2024-03-12',
    resolved: true
  }
];

export const initialRevisionHistory: RevisionItem[] = [
  {
    id: 'rev-101',
    entityType: 'Article',
    entityTitle: 'The Founding of Saudi Arabia',
    editorName: 'Dr. Tariq Al-Mansoor (Chief Archivist)',
    changeSummary: 'Added comprehensive section on the Second Saudi State in Riyadh and unified citation tags.',
    revisionNumber: 14,
    timestamp: '2024-03-15 14:22 UTC'
  },
  {
    id: 'rev-102',
    entityType: 'Country',
    entityTitle: 'United Arab Emirates',
    editorName: 'Amira Al-Suwaidi (Editorial Reviewer)',
    changeSummary: 'Updated federal leadership structure and verified Saadiyat Cultural District landmarks.',
    revisionNumber: 8,
    timestamp: '2024-03-14 09:15 UTC'
  },
  {
    id: 'rev-103',
    entityType: 'RoyalFamily',
    entityTitle: 'House of Al Said',
    editorName: 'Said Al-Busaidi (Genealogy Specialist)',
    changeSummary: 'Expanded family tree nodes up to Crown Prince Sayyid Theyazin bin Haitham.',
    revisionNumber: 6,
    timestamp: '2024-03-12 18:40 UTC'
  },
  {
    id: 'rev-104',
    entityType: 'Landmark',
    entityTitle: 'AlUla & Hegra (Madain Salih)',
    editorName: 'Noura Al-Ghamdi (Archaeology Curator)',
    changeSummary: 'Incorporated latest Royal Commission for AlUla excavation findings and UNESCO documentation.',
    revisionNumber: 11,
    timestamp: '2024-03-10 11:05 UTC'
  }
];

export const getCMSMetrics = (): CMSMetrics => {
  return {
    totalArticles: articlesData.length,
    totalCountries: countriesData.length,
    totalPeople: peopleData.length,
    totalDynasties: royalFamiliesData.length,
    totalCities: citiesData.length,
    totalLandmarks: landmarksData.length,
    totalSources: sourcesData.length,
    publishedArticles: articlesData.filter(a => a.status === 'PUBLISHED').length,
    draftArticles: articlesData.filter(a => a.status === 'DRAFT').length,
    pendingReviews: 2,
    factCheckAlerts: initialFactCheckQueue.filter(f => !f.resolved).length
  };
};

export const cmsMetrics = {
  totalArticles: 1428,
  citationVerificationRate: 98.4,
  activeEditors: 28,
  pendingFactChecks: 4,
};

export const cmsArticles = articlesData.map(a => ({
  id: a.id,
  title: a.title,
  slug: a.slug,
  category: a.category,
  author: a.author || 'Editorial Archival Fellow',
  citationCount: a.citations?.length || 8,
  status: a.status.toLowerCase(),
}));

export const factCheckQueue = [
  {
    id: 'fc-1',
    severity: 'medium',
    targetEntity: 'Sheikh Mishal Al-Ahmad (Kuwait)',
    reportedBy: 'Genealogy Fellow',
    date: '2024-03-14',
    claim: 'Accession date cross-reference against Kuwait Amiri Diwan official gazette',
    notes: 'Confirmed valid from 16 Dec 2023. Double-blind verified.',
    status: 'resolved'
  },
  {
    id: 'fc-2',
    severity: 'high',
    targetEntity: 'House of Al Said (Oman)',
    reportedBy: 'Muscat Historical Bureau',
    date: '2024-03-15',
    claim: 'Succession decree reference number and Royal Court gazette date',
    notes: 'Awaiting certified archive photocopy from Muscat.',
    status: 'pending'
  },
  {
    id: 'fc-3',
    severity: 'low',
    targetEntity: 'Hegra Inscription #14',
    reportedBy: 'Archaeology Desk',
    date: '2024-03-12',
    claim: 'Nabataean Aramaic epigraphy transliteration under DIN 31635',
    notes: 'Diacritical macron alignment with standard corpus.',
    status: 'pending'
  }
];

export const revisionHistory = initialRevisionHistory.map(r => ({
  id: r.id,
  entityTitle: r.entityTitle,
  entityType: r.entityType,
  changeSummary: r.changeSummary,
  editor: r.editorName,
  timestamp: r.timestamp,
}));


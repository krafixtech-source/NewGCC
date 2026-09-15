import { Source } from './types';

export const sourcesData: Source[] = [
  {
    id: 'src-1',
    title: 'The Kingdom of Saudi Arabia: A Constitutional and Historical Study',
    author: 'King Abdulaziz Foundation for Research and Archives (Darah)',
    publisher: 'Darah Academic Press, Riyadh',
    publicationDate: '2021',
    url: 'https://darah.org.sa',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-2',
    title: 'From Trucial States to United Arab Emirates',
    author: 'Frauke Heard-Bey',
    publisher: 'Longman / National Library and Archives of the UAE',
    publicationDate: '2005',
    isbn: '978-0582277281',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-3',
    title: 'Qatar: A Modern History',
    author: 'Allen J. Fromherz',
    publisher: 'Georgetown University Press',
    publicationDate: '2012',
    isbn: '978-1589019102',
    qualityTier: 'LEVEL_B',
    verified: true,
  },
  {
    id: 'src-4',
    title: 'Oman in History',
    author: 'Ministry of Information, Sultanate of Oman',
    publisher: 'Immel Publishing, London & Muscat',
    publicationDate: '1995',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-5',
    title: 'The History of Kuwait',
    author: 'Abdulaziz Al-Rashid',
    publisher: 'Kuwait Center for Research and Studies',
    publicationDate: '1971',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-6',
    title: 'Bahrain: Through the Ages — The Archaeology and History',
    author: 'Shaikha Haya Ali Al Khalifa & Michael Rice',
    publisher: 'Kegan Paul International / Bahrain Authority for Culture and Antiquities',
    publicationDate: '1993',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-7',
    title: 'A History of the Arab Peoples',
    author: 'Albert Hourani',
    publisher: 'Harvard University Press',
    publicationDate: '1991',
    isbn: '978-0674395657',
    qualityTier: 'LEVEL_B',
    verified: true,
  },
  {
    id: 'src-8',
    title: 'UNESCO World Heritage Archives: Hegra Archaeological Site (Al-Hijr / Madain Salih)',
    author: 'UNESCO World Heritage Centre',
    publisher: 'United Nations Educational, Scientific and Cultural Organization',
    publicationDate: '2008',
    url: 'https://whc.unesco.org/en/list/1293',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-9',
    title: 'The Charter of the Cooperation Council for the Arab States of the Gulf',
    author: 'GCC Secretariat General',
    publisher: 'Gulf Cooperation Council Official Gazette, Abu Dhabi & Riyadh',
    publicationDate: '1981',
    url: 'https://www.gcc-sg.org',
    qualityTier: 'LEVEL_A',
    verified: true,
  },
  {
    id: 'src-10',
    title: 'The Nabataeans: Builders of Petra and Hegra',
    author: 'Dan Gibson',
    publisher: 'Independent Scholars Press',
    publicationDate: '2004',
    qualityTier: 'LEVEL_B',
    verified: true,
  }
];

export const sourcesBibliography = sourcesData.map(s => ({
  id: s.id,
  title: s.title,
  author: s.author,
  publisher: s.publisher,
  year: s.publicationDate,
  type: s.qualityTier === 'LEVEL_A' ? 'primary_treaty' : s.publisher.includes('University') ? 'academic_press' : 'archival_monograph',
  tier: s.qualityTier === 'LEVEL_A' ? 'A' : s.qualityTier === 'LEVEL_B' ? 'B' : 'C',
  description: s.isbn ? `ISBN: ${s.isbn}` : undefined,
  url: s.url,
}));

export const getSourceById = (id: string): Source | undefined => {
  return sourcesData.find(s => s.id === id);
};




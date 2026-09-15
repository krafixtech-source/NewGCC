export * from './types';
export * from './sources';
export * from './countries';
export * from './royalty';
export * from './people';
export * from './history';
export * from './cities';
export * from './landmarks';
export * from './culture';
export * from './articles';
export * from './cms';

import { countriesData } from './countries';
import { royalFamiliesData } from './royalty';
import { peopleData } from './people';
import { citiesData } from './cities';
import { landmarksData } from './landmarks';
import { historicalErasData, timelineEventsData } from './history';
import { articlesData } from './articles';
import { cultureTopicsData } from './culture';

export interface SearchResultItem {
  id: string;
  title: string;
  arabicTitle?: string;
  category: 'Country' | 'Royalty' | 'Leader' | 'Person' | 'City' | 'Landmark' | 'Era' | 'Article' | 'Culture';
  description: string;
  url: string;
  imageUrl?: string;
}

export const searchEncyclopedia = (query: string): SearchResultItem[] => {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();

  const results: SearchResultItem[] = [];

  // Search countries
  countriesData.forEach(c => {
    if (
      c.name.toLowerCase().includes(q) ||
      c.arabicName.includes(q) ||
      c.capital.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q)
    ) {
      results.push({
        id: `country-${c.id}`,
        title: c.name,
        arabicTitle: c.arabicName,
        category: 'Country',
        description: `${c.region} · Capital: ${c.capital} · Pop: ${(c.population / 1000000).toFixed(1)}M`,
        url: `/countries/${c.slug}`,
        imageUrl: c.heroImageUrl
      });
    }
  });

  // Search royal families
  royalFamiliesData.forEach(rf => {
    if (
      rf.name.toLowerCase().includes(q) ||
      rf.arabicName.includes(q) ||
      rf.country.toLowerCase().includes(q) ||
      rf.founder.toLowerCase().includes(q)
    ) {
      results.push({
        id: `rf-${rf.id}`,
        title: rf.name,
        arabicTitle: rf.arabicName,
        category: 'Royalty',
        description: `${rf.country} · Founded in ${rf.foundedYear} by ${rf.founder}`,
        url: `/royalty/${rf.slug}`,
        imageUrl: rf.heroImageUrl
      });
    }
  });

  // Search people / rulers
  peopleData.forEach(p => {
    if (
      p.name.toLowerCase().includes(q) ||
      p.arabicName.includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q)
    ) {
      results.push({
        id: `person-${p.id}`,
        title: p.name,
        arabicTitle: p.arabicName,
        category: p.isRuler ? 'Leader' : 'Person',
        description: `${p.title} · ${p.country} (${p.reign || (p.birthYear ? `b. ${p.birthYear}` : '')})`,
        url: `/people/${p.slug}`,
        imageUrl: p.portraitUrl
      });
    }
  });

  // Search cities
  citiesData.forEach(city => {
    if (
      city.name.toLowerCase().includes(q) ||
      city.arabicName.includes(q) ||
      city.country.toLowerCase().includes(q) ||
      city.shortDescription.toLowerCase().includes(q)
    ) {
      results.push({
        id: `city-${city.id}`,
        title: city.name,
        arabicTitle: city.arabicName,
        category: 'City',
        description: `${city.country} · Population: ${(city.population / 1000000).toFixed(1)}M`,
        url: `/cities/${city.slug}`,
        imageUrl: city.imageUrl
      });
    }
  });

  // Search landmarks
  landmarksData.forEach(lm => {
    if (
      lm.name.toLowerCase().includes(q) ||
      lm.arabicName.includes(q) ||
      lm.country.toLowerCase().includes(q) ||
      lm.overview.toLowerCase().includes(q)
    ) {
      results.push({
        id: `lm-${lm.id}`,
        title: lm.name,
        arabicTitle: lm.arabicName,
        category: 'Landmark',
        description: `${lm.country} · ${lm.era}`,
        url: `/landmarks/${lm.slug}`,
        imageUrl: lm.imageUrl
      });
    }
  });

  // Search historical eras
  historicalErasData.forEach(era => {
    if (
      era.name.toLowerCase().includes(q) ||
      era.arabicName.includes(q) ||
      era.overview.toLowerCase().includes(q)
    ) {
      results.push({
        id: `era-${era.id}`,
        title: era.name,
        arabicTitle: era.arabicName,
        category: 'Era',
        description: `${era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — ${typeof era.endYear === 'number' && era.endYear < 0 ? `${Math.abs(era.endYear)} BCE` : era.endYear}`,
        url: `/history/${era.slug}`,
        imageUrl: era.heroImageUrl
      });
    }
  });

  // Search articles
  articlesData.forEach(art => {
    if (
      art.title.toLowerCase().includes(q) ||
      art.arabicTitle.includes(q) ||
      art.leadParagraph.toLowerCase().includes(q)
    ) {
      results.push({
        id: `article-${art.id}`,
        title: art.title,
        arabicTitle: art.arabicTitle,
        category: 'Article',
        description: `${art.category} · ${art.readTime} min read`,
        url: `/articles/${art.slug}`,
        imageUrl: art.heroImageUrl
      });
    }
  });

  // Search culture
  cultureTopicsData.forEach(cul => {
    if (
      cul.title.toLowerCase().includes(q) ||
      cul.arabicName.includes(q) ||
      cul.overview.toLowerCase().includes(q)
    ) {
      results.push({
        id: `culture-${cul.id}`,
        title: cul.title,
        arabicTitle: cul.arabicName,
        category: 'Culture',
        description: `${cul.category} · Heritage Overview`,
        url: `/culture/${cul.slug}`,
        imageUrl: cul.imageUrl
      });
    }
  });

  return results;
};

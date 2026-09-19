'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroStatementSection } from '@/components/home/IntroStatementSection';
import { MarketRatesRowSection } from '@/components/home/MarketRatesRowSection';
import { InteractiveMapSection } from '@/components/home/InteractiveMapSection';
import { FeaturedCountrySection } from '@/components/home/FeaturedCountrySection';
import { CountryDiscoverySection } from '@/components/home/CountryDiscoverySection';
import { CompareSection } from '@/components/home/CompareSection';
import { EditorialDocumentaryVideoSection } from '@/components/home/EditorialDocumentaryVideoSection';
import { RoyalHousesSection } from '@/components/home/RoyalHousesSection';
import { RoyaltyVideoBreakSection } from '@/components/home/RoyaltyVideoBreakSection';
import { CurrentLeadershipSection } from '@/components/home/CurrentLeadershipSection';
import { InsideTheArchiveSection } from '@/components/home/InsideTheArchiveSection';
import { HistoryFilmSection } from '@/components/home/HistoryFilmSection';
import { CivilizationsSection } from '@/components/home/CivilizationsSection';
import { LandmarkStoriesSection } from '@/components/home/LandmarkStoriesSection';
import { CitiesSection } from '@/components/home/CitiesSection';
import { TodayInHistorySection } from '@/components/home/TodayInHistorySection';
import { ModernGulfStorySection } from '@/components/home/ModernGulfStorySection';
import { FeaturedQuoteSection } from '@/components/home/FeaturedQuoteSection';
import { GCCFocusSection } from '@/components/home/GCCFocusSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink selection:bg-antiqueGold selection:text-ink">
      {/* 01 / Monarchs & Sovereign Rulers Hero Spotlight */}
      <HeroSection />

      {/* 02 / Intro Statement Section */}
      <IntroStatementSection />

      {/* 03 / Live Gold Bullion & Currency Converter (Side-by-Side Row) */}
      <MarketRatesRowSection />

      {/* 04 / Interactive Arab World Map & Regional Atlas */}
      <InteractiveMapSection />

      {/* 05 / Featured Country Editorial Spread (Saudi Arabia) */}
      <FeaturedCountrySection />

      {/* 06 / Sovereign Nations Discovery & Hover Motion */}
      <CountryDiscoverySection />

      {/* 07 / Sovereign Nations Comparison Matrix */}
      <CompareSection />

      {/* 08 / Museum Quality Archival Full-Screen Film Break */}
      <EditorialDocumentaryVideoSection />

      {/* 09 / Royal Houses Editorial Index */}
      <RoyalHousesSection />

      {/* 10 / Royalty Documentary Video Break */}
      <RoyaltyVideoBreakSection />

      {/* 11 / Current Monarchs & Heads of State Catalogue */}
      <CurrentLeadershipSection />

      {/* 12 / Inside the Archive (Scholarly Research Table & Viewer) */}
      <InsideTheArchiveSection />

      {/* 14 / History Full-Screen Film Break */}
      <HistoryFilmSection />

      {/* 15 / Historical Civilizations & Classical Eras */}
      <CivilizationsSection />

      {/* 16 / Landmark Stories (Interactive Video Explorer) */}
      <LandmarkStoriesSection />

      {/* 17 / Major Arab Cities */}
      <CitiesSection />

      {/* 18 / Today in Arab History */}
      <TodayInHistorySection />

      {/* 19 / The Making of the Modern Gulf (Scrolling Historical Stages) */}
      <ModernGulfStorySection />

      {/* 20 / Fullscreen Photographic Quotes */}
      <FeaturedQuoteSection />

      {/* 21 / GCC Regional Institutional Focus */}
      <GCCFocusSection />

      {/* 22 / Newsletter & Editorial Scholarly Dispatch */}
      <NewsletterSection />
    </main>
  );
}


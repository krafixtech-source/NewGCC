'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroStatementSection } from '@/components/home/IntroStatementSection';
import { MarketRatesRowSection } from '@/components/home/MarketRatesRowSection';
import { FeaturedCountrySection } from '@/components/home/FeaturedCountrySection';
import { CompareSection } from '@/components/home/CompareSection';
import { EditorialDocumentaryVideoSection } from '@/components/home/EditorialDocumentaryVideoSection';
import { CurrentLeadershipSection } from '@/components/home/CurrentLeadershipSection';
import { CitiesSection } from '@/components/home/CitiesSection';
import { FeaturedQuoteSection } from '@/components/home/FeaturedQuoteSection';
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

      {/* 04 / Major Arab Cities */}
      <CitiesSection />

      {/* 05 / Featured Country Editorial Spread (Saudi Arabia) */}
      <FeaturedCountrySection />

      {/* 07 / Sovereign Nations Comparison Matrix */}
      <CompareSection />

      {/* 08 / Museum Quality Archival Full-Screen Film Break */}
      <EditorialDocumentaryVideoSection />

      {/* 11 / Current Monarchs & Heads of State Catalogue */}
      <CurrentLeadershipSection />

      {/* 20 / Fullscreen Photographic Quotes */}
      <FeaturedQuoteSection />

      {/* 22 / Newsletter & Editorial Scholarly Dispatch */}
      <NewsletterSection />
    </main>
  );
}

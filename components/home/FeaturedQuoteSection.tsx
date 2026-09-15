'use client';

import React from 'react';
import { useLanguage } from '../LanguageProvider';

export const FeaturedQuoteSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-canvas-white border-b border-border">
      {/* Full-width Archival Photograph */}
      <div className="w-full h-64 sm:h-96 relative overflow-hidden bg-canvas-paper border-b border-border">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-canvas/10 pointer-events-none" />
      </div>

      {/* Large Quote on Pure Editorial White Below */}
      <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <blockquote className="font-serif text-2xl sm:text-4xl text-ink font-bold leading-relaxed italic">
          {language === 'ar' ? (
            '«إن بناء الإنسان هو الأساس، والاهتمام بالثروة الحقيقية للوطن يكمن في أبنائه وتاريخهم وتراثهم الخالد.»'
          ) : (
            '“History is a continuous chain of events. The present is only an extension of the past, and a nation that does not know its past cannot live its present or build its future.”'
          )}
        </blockquote>

        <div className="w-12 h-[1px] bg-antiqueGold mx-auto my-4" />

        <div className="space-y-1">
          <cite className="font-serif font-bold text-lg text-forest not-italic block">
            Sheikh Zayed bin Sultan Al Nahyan
          </cite>
          <div className="text-xs font-mono text-ink-muted">
            Founding Father & First President of the United Arab Emirates · 1971 CE
          </div>
          <div className="text-[11px] font-sans text-ink-subtle italic max-w-md mx-auto pt-1">
            Address on the inauguration of the federal union and cultural preservation council.
          </div>
        </div>
      </div>
    </section>
  );
};

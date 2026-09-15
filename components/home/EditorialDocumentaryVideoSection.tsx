'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const EditorialDocumentaryVideoSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section 
      className="relative w-full min-h-[90vh] lg:min-h-screen bg-black overflow-hidden flex items-center justify-start border-b border-border"
      aria-label="Museum Archival Documentary Film"
    >
      {/* Full Screen Cinematic Background Video (Continuous loop, muted, no stop) */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/Create_a_museum_quality_docume.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />

        {/* Multi-layered Atmospheric Gradient Overlays for Crystal Clear Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-[#153B32]/10 mix-blend-color pointer-events-none" />
      </div>

      {/* Pure Editorial Content Overlay directly on Video */}
      <div className="relative z-20 mx-auto max-w-archival w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          
          {/* Archival Gold Badge */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-antiqueGold shadow-[0_0_10px_rgba(184,154,97,0.9)]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E5C98E] font-bold [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
              {language === 'ar' ? 'فيلم توثيقي أرشيفي' : 'Museum Archival Monograph'}
            </span>
          </div>

          {/* Grand Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] [text-shadow:_0_3px_16px_rgba(0,0,0,0.85)]">
            {language === 'ar' ? (
              <>السِّيَادَة، المَعَالِم<br /><span className="text-[#E5C98E]">وَالإِرثُ الحَضَارِيّ الخَالِد</span></>
            ) : (
              <>SOVEREIGNTY, LEGACY<br /><span className="text-[#E5C98E]">& SACRED HORIZONS</span></>
            )}
          </h2>

          {/* Descriptive Body */}
          <p className="text-sm sm:text-lg text-white font-sans font-normal max-w-2xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.85)] leading-relaxed">
            {language === 'ar'
              ? 'رحلة سينمائية وتوثيقية آسرة تستعرض المعالم التاريخية الشامخة، وقصور الحكم، والآفاق الجغرافية الممتدة عبر العالم العربي.'
              : 'An observational cinematographic journey capturing the architectural grandeur, institutional legacy, and sovereign heritage across the Arab world.'}
          </p>

          {/* Action Buttons Directly on Video */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-antiqueGold hover:bg-[#c9aa6d] text-forest font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>{language === 'ar' ? 'استكشف الأرشيف الشامل' : 'Explore Complete Archive'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="/countries"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/15 hover:bg-white/25 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-full border border-white/30 hover:border-white/60 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <Compass className="w-4 h-4 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'سجل الدول (٢٢)' : '22 Nations Index'}</span>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
};


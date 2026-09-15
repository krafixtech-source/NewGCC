'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Crown, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export const RoyaltyVideoBreakSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section 
      className="relative w-full min-h-[100dvh] h-[100dvh] bg-black overflow-hidden flex items-center justify-start border-b border-border"
      aria-label="Dynasties, Leadership & Legacy Full Screen Film"
    >
      {/* 100% Full-Screen Background Video / Visual */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/legacy.mp4"
          poster="/images/craftsmanship.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />

        {/* Multi-layered Atmospheric Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#153B32]/15 mix-blend-color pointer-events-none" />
      </div>

      {/* Floating Top Label */}
      <div className="absolute top-8 left-6 sm:top-12 sm:left-12 z-20">
        <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-[#E5C98E] shadow-xl">
          <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-bold uppercase tracking-wider">
            {language === 'ar' ? 'السُّلالات الحَاكِمَة وَالتَّارِيخ' : 'Dynastic Archive Film'}
          </span>
        </div>
      </div>

      {/* Editorial Content Overlay */}
      <div className="relative z-20 mx-auto max-w-archival w-full px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          
          {/* Grand Heading */}
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] [text-shadow:_0_3px_20px_rgba(0,0,0,0.9)]">
            {language === 'ar' ? (
              <>السُّلالات الحَاكِمَة،<br /><span className="text-[#E5C98E]">القِيَادَة وَالإِرثُ السِّيَادِيّ</span></>
            ) : (
              <>DYNASTIES,<br /><span className="text-[#E5C98E]">LEADERSHIP & LEGACY</span></>
            )}
          </h2>

          {/* Descriptive Body */}
          <p className="text-sm sm:text-lg text-white/90 leading-relaxed font-sans font-normal max-w-2xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            {language === 'ar'
              ? 'توثيق تاريخي لمقار الحكم التاريخية، وقاعات المراسم، والوثائق الملكية، والمراسيم التأسيسية عبر قرون من السيادة المتواصلة في العالم العربي.'
              : 'Archival documentation of historic royal residences, ceremonial architecture, official state treaties, and unbroken lines of constitutional sovereignty across the Arab world.'}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/royalty"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-antiqueGold hover:bg-[#c9aa6d] text-forest font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>{language === 'ar' ? 'استعراض موسوعة الأسر الحاكمة' : 'Explore All Royal Houses'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="/people"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/15 hover:bg-white/25 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-full border border-white/25 hover:border-white/50 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <BookOpen className="w-4 h-4 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'سجل القادة والحكام' : 'Sovereigns Catalogue'}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Subtle Bottom-Right Caption Inscription */}
      <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-12 z-20 max-w-sm hidden md:block">
        <p className="text-[11px] font-mono text-white/75 bg-black/50 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-xl leading-relaxed">
          {language === 'ar'
            ? 'أروقة القصور التاريخية، والتفاصيل الخشبية المنحوتة للمراسم، والأختام السيادية المعتمدة في أرشيف المتاحف الوطنية.'
            : 'Historic palace corridors, ceremonial carved timber details, and authenticated state seals in national museum archives.'}
        </p>
      </div>

    </section>
  );
};

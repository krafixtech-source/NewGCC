'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Crown, 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { peopleData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const HeroSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  
  // Filter for ruling monarchs & prominent historic/contemporary kings and sovereigns
  const kings = peopleData.filter(p => 
    p.portraitUrl && (p.isRuler || p.category === 'Rulers' || p.category === 'Royal Family')
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const DURATION = 2500; // 2.5 seconds per slide

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % kings.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + kings.length) % kings.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Continuous auto slide effect every 2.5 seconds (never pauses on hover)
  useEffect(() => {
    if (kings.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % kings.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [kings.length, currentIndex]);

  const currentKing = kings[currentIndex];

  if (!currentKing) return null;

  return (
    <section 
      dir="ltr"
      className="relative w-full min-h-[100dvh] h-[100dvh] pt-[65px] bg-white flex flex-col justify-between overflow-hidden border-b border-[#E5E7EB]"
      aria-label="Monarchs & Sovereign Rulers Full Screen Hero"
    >
      {/* Edge-to-Edge Full Screen Split Container */}
      <div className="relative w-full h-full flex-1 flex flex-col lg:flex-row items-stretch overflow-hidden">
        
        {/* LEFT SIDE: Full-Bleed Grand Monarch Portrait with Atmospheric Blend */}
        <div className="relative w-full lg:w-[46%] xl:w-[44%] 2xl:w-[42%] h-[40vh] sm:h-[45vh] lg:h-full flex-shrink-0 bg-[#0F241F] overflow-hidden">
          {/* Background Portrait */}
          <img
            key={currentKing.id}
            src={currentKing.portraitUrl || '/images/leaders/king-salman.jpg'}
            alt={currentKing.name}
            className="w-full h-full object-cover object-top sm:object-center transform scale-100 transition-all duration-700 ease-out"
          />
          
          {/* Atmospheric Multi-Directional Gradient Fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
          <div className="hidden lg:block absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

          {/* Bottom Overlay: Nation Label, Sovereign Status Badge, & Monarch Name */}
          <div className="absolute bottom-8 left-8 right-8 z-10 text-white flex flex-col items-start gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E5C98E] font-bold block drop-shadow-md">
              {currentKing.country}
            </span>

            {/* Sovereign Badge (Positioned between Country Name and Monarch Name) */}
            <div className="inline-flex items-center gap-2 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 text-xs font-mono text-[#E5C98E] shadow-xl my-0.5">
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold">
                {currentKing.isCurrent 
                  ? (language === 'ar' ? 'حاكم معاصر' : 'Reigning Sovereign') 
                  : (language === 'ar' ? 'شخصية تاريخية' : 'Historic Monarch')}
              </span>
            </div>

            <span className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight block drop-shadow-md">
              {currentKing.name}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Full-Bleed Archival Dossier & Information */}
        <div 
          dir={isRTL ? 'rtl' : 'ltr'}
          className="w-full flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 2xl:p-20 bg-white relative overflow-y-auto lg:overflow-visible"
        >
          
          <div className="space-y-5 lg:space-y-6 max-w-3xl">
            
            {/* Dynastic Lineage Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F3F4F6]">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E5E7EB] text-[#153B32] font-mono text-xs font-bold uppercase tracking-wider">
                  {currentKing.dynasty || 'Royal Sovereign'}
                </span>
                {currentKing.reign && (
                  <span className="text-xs sm:text-sm font-mono text-[#6B7280]">
                    {language === 'ar' ? `فترة الحكم: ${currentKing.reign}` : `Reign: ${currentKing.reign}`}
                  </span>
                )}
              </div>
            </div>

            {/* Monarch Full Name & Arabic Title */}
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#153B32] leading-tight tracking-tight">
                {currentKing.name}
              </h2>
              
              {currentKing.arabicName && (
                <div className="font-arabicHeading text-xl sm:text-2xl lg:text-3xl text-[#B89A61] font-semibold">
                  {currentKing.arabicName}
                </div>
              )}
              
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#4B5563] font-medium pt-0.5">
                {currentKing.title}
              </p>
            </div>

            {/* Biography Excerpt Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5E7EB] shadow-sm">
              <p className="text-xs sm:text-sm lg:text-base text-[#374151] leading-relaxed font-sans line-clamp-3 sm:line-clamp-4">
                {currentKing.biography}
              </p>
            </div>

            {/* Key Sovereign Achievements & Legacy */}
            {currentKing.politicalLegacy && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#153B32] tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#B89A61]" />
                  <span>{language === 'ar' ? 'المكتسبات والإنجازات السيادية' : 'Key Achievements & Legacy'}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-sans line-clamp-2">
                  {currentKing.politicalLegacy}
                </p>
              </div>
            )}
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 mt-4 border-t border-[#F3F4F6] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/people/${currentKing.slug}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#153B32] hover:bg-[#1E5044] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-full transition-all shadow-sm hover:shadow"
              >
                <span>{language === 'ar' ? 'السيرة التوثيقية الكاملة' : 'Full Biography'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>

              {currentKing.dynastySlug && (
                <Link
                  href={`/royalty/${currentKing.dynastySlug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-[#FAF8F5] text-[#153B32] border border-[#D1D5DB] hover:border-[#B89A61] text-xs font-mono uppercase tracking-wider font-semibold rounded-full transition-all shadow-sm"
                >
                  <span>{language === 'ar' ? 'سجل الأسرة الحاكمة' : 'Royal House Record'}</span>
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Floating Edge Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center h-12 w-12 rounded-full bg-white/90 hover:bg-[#153B32] text-[#153B32] hover:text-white border border-[#D8D0C1] hover:border-[#153B32] shadow-museum hover:scale-105 backdrop-blur-md transition-all duration-200"
        aria-label="Previous Monarch"
      >
        <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center h-12 w-12 rounded-full bg-white/90 hover:bg-[#153B32] text-[#153B32] hover:text-white border border-[#D8D0C1] hover:border-[#153B32] shadow-museum hover:scale-105 backdrop-blur-md transition-all duration-200"
        aria-label="Next Monarch"
      >
        <ChevronRight className="w-5 h-5 rtl:rotate-180" />
      </button>

      {/* Bottom Pagination Dots */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2 pointer-events-auto" role="tablist" aria-label="Monarch Slides">
        {kings.map((king, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={king.id}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? 'w-8 h-2 bg-[#B89A61] shadow-sm'
                  : 'w-2 h-2 bg-[#D8D0C1] hover:bg-[#B89A61]/70'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${king.name}`}
              aria-selected={isActive}
              role="tab"
            />
          );
        })}
      </div>
    </section>
  );
};

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Crown, ArrowRight, ShieldCheck } from 'lucide-react';
import { peopleData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const KingsAutoSlideSection: React.FC = () => {
  const { language } = useLanguage();
  
  // Filter for ruling monarchs & prominent historic/contemporary kings and sovereigns
  const kings = peopleData.filter(p => 
    p.portraitUrl && (p.isRuler || p.category === 'Rulers' || p.category === 'Royal Family')
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const DURATION = 5000; // 5 seconds per slide
  const TICK = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % kings.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (TICK / DURATION) * 100;
      });
    }, TICK);

    intervalRef.current = timer;
    return () => clearInterval(timer);
  }, [isHovered, kings.length]);

  const currentKing = kings[currentIndex];

  if (!currentKing) return null;

  return (
    <section 
      className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#E5E7EB] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#E5E7EB] gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#153B32] font-bold tracking-tight">
              {language === 'ar' ? 'ملوك وقادة ورؤساء العالم العربي' : 'Monarchs & Sovereign Rulers'}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <Link
              href="/people"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#D8D0C1] bg-white hover:bg-[#F9FAFB] text-xs font-mono uppercase tracking-wider text-[#153B32] font-bold transition-colors shadow-sm"
            >
              <span>{language === 'ar' ? 'كافة الشخصيات' : 'All Monarchs'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>

        {/* Compact Auto-Sliding Card (Sleek Reduced Image Size on Left, Info on Right) */}
        <div className="relative bg-white rounded-3xl border border-[#E5E7EB] shadow-md overflow-hidden flex flex-col md:flex-row items-center transition-all duration-500">
          
          {/* LEFT SIDE: Compact Sized Monarch Portrait */}
          <div className="w-full md:w-auto p-4 sm:p-6 flex items-center justify-center shrink-0">
            <div className="relative aspect-[4/5] w-[180px] sm:w-[200px] rounded-2xl overflow-hidden shadow-sm border border-[#E5E7EB] bg-[#1E2D27]">
              <img
                key={currentKing.id}
                src={currentKing.portraitUrl || '/images/leaders/king-salman.jpg'}
                alt={currentKing.name}
                className="w-full h-full object-cover object-top sm:object-center transform scale-100 transition-all duration-700 ease-out"
              />
              
              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Nation Label & Reign Status Badge */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-white flex flex-col items-start gap-1">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E5C98E] font-bold block">
                  {currentKing.country}
                </span>

                <div className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 text-[9px] font-mono text-[#E5C98E]">
                  <Crown className="w-2.5 h-2.5 text-[#D4AF37]" />
                  <span>{currentKing.isCurrent ? (language === 'ar' ? 'حاكم معاصر' : 'Reigning Sovereign') : (language === 'ar' ? 'شخصية تاريخية' : 'Historic Monarch')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Monarch Archival Information */}
          <div className="w-full md:flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Dynastic Lineage & Category Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F3F4F6]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#F3F4F6] text-[#153B32] font-mono text-[11px] font-bold uppercase tracking-wider">
                    {currentKing.dynasty || 'Royal Sovereign'}
                  </span>
                  <span className="text-xs font-mono text-[#6B7280]">
                    {currentKing.reign ? `Reign: ${currentKing.reign}` : ''}
                  </span>
                </div>

                <span className="font-mono text-xs text-[#B89A61] font-bold">
                  {currentIndex + 1} / {kings.length}
                </span>
              </div>

              {/* Monarch Full Name & Arabic Title */}
              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#153B32] leading-tight">
                  {currentKing.name}
                </h3>
                
                {currentKing.arabicName && (
                  <div className="font-arabic text-base sm:text-lg text-[#B89A61] font-semibold">
                    {currentKing.arabicName}
                  </div>
                )}
                
                <p className="font-sans text-xs sm:text-sm text-[#4B5563] font-medium pt-0.5">
                  {currentKing.title}
                </p>
              </div>

              {/* Biography Excerpt */}
              <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#F3F4F6]">
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-sans line-clamp-3">
                  {currentKing.biography}
                </p>
              </div>

              {/* Key Political Legacy / Highlights */}
              {currentKing.politicalLegacy && (
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#153B32]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89A61]" />
                    <span>{language === 'ar' ? 'المكتسبات والإنجازات السيادية' : 'Key Achievements & Legacy'}</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed font-sans line-clamp-2">
                    {currentKing.politicalLegacy}
                  </p>
                </div>
              )}
            </div>

            {/* Footer Action Links & Progress Line */}
            <div className="pt-6 border-t border-[#F3F4F6] space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/people/${currentKing.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#153B32] hover:bg-[#1E5044] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-full transition-all shadow-sm"
                >
                  <span>{language === 'ar' ? 'السيرة التوثيقية الكاملة' : 'Full Biography'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>

                {currentKing.dynastySlug && (
                  <Link
                    href={`/royalty/${currentKing.dynastySlug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F9FAFB] text-[#153B32] border border-[#D1D5DB] text-xs font-mono uppercase tracking-wider font-semibold rounded-full transition-all shadow-sm"
                  >
                    <span>{language === 'ar' ? 'سجل الأسرة الحاكمة' : 'Royal House Record'}</span>
                  </Link>
                )}
              </div>

              {/* Auto Slide Progress Line */}
              <div className="w-full bg-[#F3F4F6] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#B89A61] h-full transition-all duration-75 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Compact Thumbnail Selector Strip Below Card */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {kings.map((king, idx) => (
            <button
              key={king.id}
              onClick={() => goToSlide(idx)}
              className={`flex items-center gap-2.5 p-2 rounded-xl border transition-all shrink-0 text-left ${
                currentIndex === idx
                  ? 'bg-white border-[#B89A61] shadow-md ring-2 ring-[#B89A61]/20'
                  : 'bg-white hover:bg-[#F9FAFB] border-[#E5E7EB] opacity-75 hover:opacity-100'
              }`}
            >
              <img
                src={king.portraitUrl || '/images/leaders/king-salman.jpg'}
                alt={king.name}
                className="w-8 h-8 rounded-lg object-cover object-top border border-[#E5E7EB]"
              />
              <div className="pr-2">
                <div className="font-serif font-bold text-xs text-[#153B32] line-clamp-1 max-w-[120px]">
                  {king.name}
                </div>
                <div className="text-[10px] font-mono text-[#6B7280]">
                  {king.country}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

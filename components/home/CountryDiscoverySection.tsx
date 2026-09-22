'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { countriesData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const CountryDiscoverySection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const countries = countriesData;
  // Number of cards visible per view on desktop is 4, on tablet 2, mobile 1
  const visibleCards = 4;
  const maxIndex = Math.max(0, countries.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calculate total pagination pages
  const totalPages = Math.ceil(countries.length / visibleCards);
  const currentPage = Math.floor(currentIndex / visibleCards);

  return (
    <section 
      className="bg-antiqueGold py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-forest/20 overflow-hidden relative"
      aria-label="Sovereign States of the Arab World Carousel"
    >
      <div className="mx-auto max-w-archival">
        
        {/* Section Header with Title only */}
        <div className="mb-10 pb-6 border-b border-forest/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-forest shadow-[0_0_6px_rgba(21,59,50,0.6)]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-forest font-extrabold">
              {language === 'ar' ? 'الموسوعة الجيوسياسية' : 'Sovereign Roster'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-bold tracking-tight">
            {language === 'ar' ? 'سجل الدول ذات السيادة' : 'Sovereign States of the Arab World'}
          </h2>
        </div>

        {/* Carousel Slider Stage with Left and Right Floating Arrows */}
        <div className="relative pt-1 pb-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-forest text-white hover:bg-forest-dark border border-forest shadow-lg transition-all duration-200 cursor-pointer backdrop-blur-sm group"
            aria-label="Previous Countries"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-forest text-white hover:bg-forest-dark border border-forest shadow-lg transition-all duration-200 cursor-pointer backdrop-blur-sm group"
            aria-label="Next Countries"
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Slider Viewport Container */}
          <div className="overflow-hidden px-1">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-out gap-6 [--card-step:calc(100%+24px)] sm:[--card-step:calc((100%+24px)/2)] lg:[--card-step:calc((100%+24px)/4)]"
              style={{
                transform: isRTL 
                  ? `translateX(calc(${currentIndex} * var(--card-step)))` 
                  : `translateX(calc(-${currentIndex} * var(--card-step)))`,
              }}
            >
            {countries.map((country) => {
              return (
                <div
                  key={country.id}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0"
                >
                  <Link
                    href={`/countries/${country.slug}`}
                    onMouseEnter={() => setHoveredSlug(country.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    className="group relative flex flex-col justify-between aspect-[3/4.2] sm:aspect-[3/4.4] w-full bg-slate-950 border border-forest/30 hover:border-forest transition-all duration-300 overflow-hidden shadow-md hover:shadow-2xl"
                  >
                    {/* Background Image with Hover Zoom */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${country.heroImageUrl || "/images/alula.jpg"}')` }}
                    />

                    {/* Gradient Overlay for Maximum Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-50% to-black/30 group-hover:from-black transition-colors duration-300 pointer-events-none" />

                    {/* Top Badges (Region, GCC, ISO) */}
                    <div className="relative z-10 p-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-forest/90 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                        {country.region}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {country.isGCC && (
                          <span className="px-2.5 py-1 bg-antiqueGold text-forest text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                            GCC
                          </span>
                        )}
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black/60 backdrop-blur-md text-white border border-white/20">
                          {country.isoCode}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Overlay Information */}
                    <div className="relative z-10 p-5 flex flex-col justify-end">
                      <div className="mb-2">
                        <span className="text-xs font-arabicHeading font-bold text-[#E5C98E] block mb-0.5">
                          {country.arabicName}
                        </span>
                        <h3 className="font-serif font-bold text-2xl text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                          {country.name}
                        </h3>
                      </div>

                      {/* Metadata details (Capital & Population) */}
                      <div className="space-y-1 text-xs text-white/80 font-sans mb-3 pt-2.5 border-t border-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">{language === 'ar' ? 'العاصمة:' : 'Capital:'}</span>
                          <span className="font-semibold text-white">{country.capital}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">{language === 'ar' ? 'السكان:' : 'Population:'}</span>
                          <span className="font-semibold text-white">{(country.population / 1000000).toFixed(1)}M</span>
                        </div>
                      </div>

                      {/* Action Link */}
                      <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-mono text-antiqueGold-light group-hover:text-white font-semibold transition-colors">
                        <span>{language === 'ar' ? 'استعراض السجل الكامل' : 'Read Monograph'}</span>
                        <span className="group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {/* Carousel Bottom Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Country Pages">
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const isActive = currentPage === pageIdx;
            return (
              <button
                key={pageIdx}
                onClick={() => goToSlide(pageIdx * visibleCards)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2.5 bg-forest shadow-sm'
                    : 'w-2.5 h-2.5 bg-forest/30 hover:bg-forest'
                }`}
                aria-label={`Go to slide page ${pageIdx + 1}`}
                aria-selected={isActive}
                role="tab"
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { countriesData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const InteractiveMapSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('GCC');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const regions = [
    { id: 'GCC', name: 'GCC Countries', nameAr: 'دول مجلس التعاون', count: 6 },
    { id: 'Levant', name: 'The Levant', nameAr: 'بلاد الشام', count: 4 },
    { id: 'North Africa', name: 'North Africa', nameAr: 'شمال أفريقيا', count: 7 },
    { id: 'Arabian Peninsula', name: 'Peninsula', nameAr: 'شبه الجزيرة العربية', count: 2 },
    { id: 'Horn of Africa', name: 'Horn of Africa', nameAr: 'القرن الأفريقي', count: 3 },
  ];

  const filteredCountries = countriesData.filter((c) => {
    if (selectedRegion === 'GCC') return c.isGCC;
    return c.region === selectedRegion;
  });

  const totalPop = filteredCountries.reduce((acc, c) => acc + c.population, 0);
  const totalArea = filteredCountries.reduce((acc, c) => acc + c.areaKm2, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredCountries.length - itemsPerView);

  // Clamp or reset index when region or viewport changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const handleRegionChange = (regionId: string) => {
    setSelectedRegion(regionId);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch swipe gestures
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > minSwipeDistance) {
      if (isRTL) prevSlide();
      else nextSlide();
    } else {
      if (isRTL) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section className="bg-canvas-white py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-antiqueGold font-bold mb-2 block">
              {language === 'ar' ? 'الأطلس الجغرافي والديموغرافي' : 'Geopolitical & Regional Atlas'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'خريطة العالم العربي والأقاليم' : 'The Arab World: Regional Atlas'}
            </h2>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-2">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => handleRegionChange(reg.id)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all rounded-full shadow-sm cursor-pointer ${
                selectedRegion === reg.id
                  ? 'bg-forest text-canvas-white font-bold border border-forest shadow-md'
                  : 'bg-canvas-paper text-ink border border-border hover:bg-border/60'
              }`}
            >
              <span>{language === 'ar' ? reg.nameAr : reg.name}</span>
              <span className="opacity-70 text-[10px] ml-1.5 font-sans">({reg.count})</span>
            </button>
          ))}
        </div>

        {/* Region Stats Overview Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-canvas-paper border border-border rounded-2xl mb-8 shadow-sm">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-antiqueGold block mb-1">
              Active Region
            </span>
            <div className="font-serif font-bold text-lg text-ink">
              {regions.find(r => r.id === selectedRegion)?.name}
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-antiqueGold block mb-1">
              Member Nations
            </span>
            <div className="font-serif font-bold text-lg text-ink">
              {filteredCountries.length} Sovereign States
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-antiqueGold block mb-1">
              Combined Population
            </span>
            <div className="font-serif font-bold text-lg text-ink">
              {(totalPop / 1000000).toFixed(1)} Million
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-antiqueGold block mb-1">
              Total Landmass
            </span>
            <div className="font-serif font-bold text-lg text-ink">
              {totalArea.toLocaleString()} km²
            </div>
          </div>
        </div>

        {/* Countries Carousel Slider Stage */}
        <div className="relative">
          {/* Left Arrow Button */}
          {filteredCountries.length > itemsPerView && (
            <button
              type="button"
              onClick={isRTL ? nextSlide : prevSlide}
              aria-label={language === 'ar' ? 'السابق' : 'Previous nation'}
              className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-canvas-white/95 hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest shadow-editorial flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow Button */}
          {filteredCountries.length > itemsPerView && (
            <button
              type="button"
              onClick={isRTL ? prevSlide : nextSlide}
              aria-label={language === 'ar' ? 'التالي' : 'Next nation'}
              className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-canvas-white/95 hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest shadow-editorial flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Viewport & Track */}
          <div
            className="overflow-hidden py-3 px-1"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: isRTL
                  ? `translateX(calc(${currentIndex} * ((100% + 1.5rem) / ${itemsPerView})))`
                  : `translateX(calc(-${currentIndex} * ((100% + 1.5rem) / ${itemsPerView})))`
              }}
            >
              {filteredCountries.map((country) => (
                <div
                  key={country.id}
                  className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 flex flex-col justify-between bg-canvas-white border border-border hover:border-antiqueGold transition-all duration-300 rounded-2xl shadow-editorial hover:shadow-xl overflow-hidden group min-h-[440px]"
                >
                  <div>
                    {/* Country Image Banner */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-canvas-paper">
                      <img
                        src={country.heroImageUrl || country.flagUrl || 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=80'}
                        alt={country.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      
                      {/* Floating Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white border border-white/15 rounded-full text-xs font-mono shadow-sm">
                          <span>🏛️</span>
                          <span className="font-bold">{country.isoCode}</span>
                        </span>
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-antiqueGold-light border border-white/15 rounded-full text-xs font-arabic font-semibold shadow-sm">
                          {country.arabicName}
                        </span>
                      </div>

                      {/* Bottom Image Caption */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                        <div>
                          <h3 className="font-serif font-bold text-xl sm:text-2xl text-white group-hover:text-antiqueGold-light transition-colors drop-shadow-md leading-tight">
                            {country.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="p-5">
                      <p className="text-xs text-ink-muted leading-relaxed line-clamp-2 mb-4 font-sans">
                        {country.summary}
                      </p>

                      <div className="space-y-1.5 text-xs text-ink-muted font-mono pt-3 border-t border-border/70">
                        <div className="flex justify-between gap-2">
                          <span className="shrink-0">Capital:</span>
                          <strong className="text-ink font-sans truncate text-right">{country.capital}</strong>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span className="shrink-0">Population:</span>
                          <strong className="text-ink font-sans">{(country.population / 1000000).toFixed(1)}M</strong>
                        </div>
                        <div className="flex justify-between gap-2">
                          <span className="shrink-0">Head of State:</span>
                          <strong className="text-ink font-sans truncate max-w-[150px] text-right">{country.headOfState}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="px-5 pb-5">
                    <Link
                      href={`/countries/${country.slug}`}
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-canvas-paper hover:bg-forest hover:text-canvas-white text-ink border border-border hover:border-forest text-xs font-mono uppercase tracking-wider font-semibold transition-all rounded-xl shadow-sm group/btn"
                    >
                      <span>{language === 'ar' ? 'عرض الدراسة التوثيقية' : 'View Full Monograph'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 text-antiqueGold group-hover/btn:text-canvas-white transition-transform group-hover/btn:translate-x-1 ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          {filteredCountries.length > itemsPerView && (
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={language === 'ar' ? `الانتقال إلى الشريحة ${idx + 1}` : `Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer ${
                      isActive
                        ? 'w-8 h-2.5 bg-antiqueGold shadow-sm'
                        : 'w-2.5 h-2.5 bg-border hover:bg-antiqueGold/60'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


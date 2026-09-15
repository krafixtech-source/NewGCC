'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { historicalErasData } from '@/lib/data/history';
import { useLanguage } from '../LanguageProvider';

export const CivilizationsSection: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

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

  const maxIndex = Math.max(0, historicalErasData.length - itemsPerView);

  // Clamp index if viewport resize changes maxIndex
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch swipe support
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
      // Swiped left
      if (isRTL) prevSlide();
      else nextSlide();
    } else {
      // Swiped right
      if (isRTL) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section className="bg-canvas-white py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-antiqueGold font-bold mb-2 block">
              {language === 'ar' ? 'التسلسل الزمني والملاحم' : 'Chronological Heritage'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'العصور والحضارات التاريخية' : 'Civilizational Eras'}
            </h2>
          </div>
          <Link
            href="/history"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-antiqueGold hover:text-forest font-bold transition-colors"
          >
            <span>{language === 'ar' ? 'استعراض كافة العصور' : 'Explore All Eras'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        {/* Carousel Stage */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={isRTL ? nextSlide : prevSlide}
            aria-label={language === 'ar' ? 'السابق' : 'Previous era'}
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-canvas-white/95 hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest shadow-editorial flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={isRTL ? prevSlide : nextSlide}
            aria-label={language === 'ar' ? 'التالي' : 'Next era'}
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-canvas-white/95 hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest shadow-editorial flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

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
              {historicalErasData.map((era) => (
                <div
                  key={era.id}
                  className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 flex flex-col justify-between bg-canvas-white border border-border hover:border-antiqueGold transition-all duration-300 p-6 shadow-editorial rounded-2xl hover:shadow-lg min-h-[380px]"
                >
                  <div>
                    {/* Era Duration Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-antiqueGold flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — {typeof era.endYear === 'number' && era.endYear < 0 ? `${Math.abs(era.endYear)} BCE` : era.endYear}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-forest transition-colors mb-1">
                      {era.name}
                    </h3>
                    <div className="font-arabic text-sm text-forest font-semibold mb-3">
                      {era.arabicName}
                    </div>

                    <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 mb-4 font-sans">
                      {era.overview}
                    </p>

                    {/* Highlights */}
                    <div className="border-t border-border/70 pt-3 mb-4 space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between gap-2">
                        <span className="text-ink-muted shrink-0">Science & Trade:</span>
                        <span className="font-semibold text-ink truncate text-right font-sans">{era.science}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-ink-muted shrink-0">Architecture:</span>
                        <span className="font-semibold text-ink truncate text-right font-sans">{era.architecture}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <Link
                    href={`/history/${era.slug}`}
                    className="group inline-flex items-center justify-between py-2.5 px-5 bg-canvas-paper hover:bg-forest hover:text-canvas-white text-ink border border-border hover:border-forest text-xs font-mono uppercase tracking-wider font-semibold transition-all rounded-full shadow-sm mt-2"
                  >
                    <span>{language === 'ar' ? 'قراءة الدراسة' : 'Read Monograph'}</span>
                    <ArrowRight className={`h-3.5 w-3.5 text-antiqueGold group-hover:text-canvas-white transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={language === 'ar' ? `الانتقال إلى الشريحة ${idx + 1}` : `Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 ${
                    isActive
                      ? 'w-8 h-2.5 bg-antiqueGold shadow-sm'
                      : 'w-2.5 h-2.5 bg-border hover:bg-antiqueGold/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


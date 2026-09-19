'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { peopleData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const CurrentLeadershipSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Current ruling monarchs & leaders
  const currentRulers = peopleData.filter(p => p.isCurrent && p.isRuler);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, currentRulers.length - itemsPerView);

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
    <section className="bg-canvas py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-antiqueGold font-bold mb-2 block">
              {language === 'ar' ? 'القيادة والحكم الرشيد' : 'Sovereign Rulers & Royal Houses'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'سجل الحكام ورؤساء الدول المعاصرين' : 'Current Monarchs & Heads of State'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/people"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-antiqueGold hover:text-forest font-bold transition-colors"
            >
              <span>{language === 'ar' ? 'استعراض كافة السير الرسمية' : 'View All Biographies'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>

        {/* Carousel Slider Stage */}
        <div className="relative">
          {/* Left Arrow Button */}
          {currentRulers.length > itemsPerView && (
            <button
              type="button"
              onClick={isRTL ? nextSlide : prevSlide}
              aria-label={language === 'ar' ? 'السابق' : 'Previous leader'}
              className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-canvas-white/95 hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest shadow-editorial flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow Button */}
          {currentRulers.length > itemsPerView && (
            <button
              type="button"
              onClick={isRTL ? prevSlide : nextSlide}
              aria-label={language === 'ar' ? 'التالي' : 'Next leader'}
              className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-canvas-white/95 hover:bg-forest text-ink hover:text-canvas-white border border-border hover:border-forest shadow-editorial flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer"
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
              {currentRulers.map((leader) => (
                <Link
                  key={leader.id}
                  href={`/people/${leader.slug}`}
                  className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)] shrink-0 group flex flex-col bg-canvas-white border border-border hover:border-antiqueGold transition-all overflow-hidden shadow-sm hover:shadow-lg min-h-[460px]"
                >
                  {/* 4:5 Official Portrait Frame with thin 1px border */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas-paper border-b border-border">
                    <div
                      className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url('${leader.portraitUrl || "/images/riyadh.jpg"}')` }}
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-canvas-white/95 text-forest text-[10px] font-mono font-bold tracking-wider uppercase border border-border shadow-sm">
                        {language === 'ar' ? 'حاكم معاصر' : 'Reigning'}
                      </span>
                    </div>
                  </div>

                  {/* Portrait Catalogue Monograph Info */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[10px] font-mono text-antiqueGold uppercase tracking-wider mb-1 font-semibold">
                        {leader.title.includes('King') || leader.title.includes('Sultan') ? 'H.M.' : 'H.H.'} · {leader.country}
                      </div>

                      <h3 className="font-serif font-bold text-lg text-ink group-hover:text-forest transition-colors mb-1 line-clamp-1">
                        {leader.name}
                      </h3>

                      <div className="font-arabic text-xs text-ink-muted mb-3 line-clamp-1">
                        {leader.arabicName}
                      </div>

                      <p className="text-[11px] text-ink-muted leading-relaxed line-clamp-2 font-sans mb-3">
                        {leader.title}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-ink-muted">
                        Reign: <strong className="text-ink font-semibold">{leader.reign || 'Present'}</strong>
                      </span>
                      <span className="text-antiqueGold group-hover:text-forest font-bold transition-colors">
                        {language === 'ar' ? 'السيرة ←' : 'Profile →'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          {currentRulers.length > itemsPerView && (
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={language === 'ar' ? `الانتقال إلى الشريحة ${idx + 1}` : `Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-antiqueGold/50 cursor-pointer ${
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


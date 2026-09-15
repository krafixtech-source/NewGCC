'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { VideoPlayer } from '../VideoPlayer';
import { useLanguage } from '../LanguageProvider';

export const HistoryFilmSection: React.FC = () => {
  const { language } = useLanguage();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Show editorial title tag after 2 seconds as requested
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-canvas overflow-hidden border-b border-border flex items-end">
      {/* 85-90vh Full Width Video Element */}
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          src="/videos/history.mp4"
          posterImage="/images/hero.jpg"
          aspectRatio="auto"
          className="w-full h-full border-none"
          autoPlayInView={true}
          loop={true}
          showControls={true}
        />
        {/* Very subtle 10-15% warm overlay */}
        <div className="absolute inset-0 bg-[#F7F4ED]/10 pointer-events-none" />
      </div>

      {/* Bottom-left Editorial Floating Box appears after 2s */}
      <div className="relative z-10 mx-auto max-w-archival w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div 
          className={`max-w-md bg-canvas-white/95 backdrop-blur-md p-6 sm:p-8 border border-border shadow-museum rounded-2xl transition-all duration-700 ${
            showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-tight mb-4">
            {language === 'ar' ? (
              <>العَالَم العَرَبِي<br />عَبْر التَّارِيخ</>
            ) : (
              <>THE ARAB WORLD<br />THROUGH TIME</>
            )}
          </h2>

          <p className="text-xs text-ink-muted leading-relaxed font-sans mb-6">
            From early Semitic trade kingdoms and Nabataean water engineers to the intellectual height of the Umayyad and Abbasid Caliphates.
          </p>

          <Link
            href="/history"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-canvas-white hover:bg-forest-light text-xs font-mono uppercase tracking-wider font-semibold transition-colors group rounded-full shadow-md hover:shadow-lg"
          >
            <span>{language === 'ar' ? 'استكشف العصور التاريخية' : 'Explore History'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

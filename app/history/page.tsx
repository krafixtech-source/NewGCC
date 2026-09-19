'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Landmark, ArrowRight, Sparkles, BookOpen, Compass } from 'lucide-react';
import { historicalErasData } from '@/lib/data/history';
import { useLanguage } from '@/components/LanguageProvider';

export default function HistoryPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-canvas min-h-screen text-ink">
      
      {/* History Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transform duration-1000"
            style={{ backgroundImage: "url('/images/history/andalus.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-archival text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-[0.25em] text-antiqueGold-light font-bold mb-4">
            <Clock className="h-3.5 w-3.5 text-antiqueGold" />
            <span>{language === 'ar' ? 'تاريخ الحضارات والإمبراطوريات' : 'Centuries of Civilizations'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {language === 'ar' ? 'تاريخ وحضارات العالم العربي' : 'History & Civilizations of Arabia'}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6">
            {language === 'ar'
              ? 'رحلة عبر آلاف السنين من الإنجازات الحضارية: من مملكة الأنباط والدولة الأموية إلى العصر العباسي الذهبي والأندلس والنهضة الحديثة.'
              : 'A monumental journey through millennia of civilizations, empires, scientific breakthroughs, and modern transformations across the Arab world.'}
          </p>

          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-antiqueGold text-forest text-xs font-mono uppercase tracking-wider font-bold hover:bg-antiqueGold-light transition-all shadow-lg cursor-pointer"
          >
            <Compass className="h-4 w-4" />
            <span>{language === 'ar' ? 'استعراض الخط الزمني التاريخي التفاعلي' : 'Launch Chronological Timeline Explorer'}</span>
          </Link>
        </div>
      </section>

      {/* Historical Eras Grid */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {historicalErasData.map(era => (
            <Link
              key={era.id}
              href={`/history/${era.slug}`}
              className="group relative flex flex-col justify-between aspect-[3/4.2] sm:aspect-[3/4.4] w-full bg-slate-950 border border-border hover:border-antiqueGold transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Background Era Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${era.heroImageUrl || "/images/alula.jpg"}')` }}
              />

              {/* Dark Vignette Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35 group-hover:from-black transition-colors duration-300 pointer-events-none" />

              {/* Top Era Dates Badge */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-forest text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-antiqueGold" />
                  {era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — {typeof era.endYear === 'number' && era.endYear < 0 ? `${Math.abs(era.endYear)} BCE` : era.endYear}
                </span>
              </div>

              {/* Bottom Information Overlaid on Image */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="text-sm font-arabicHeading font-bold text-[#E5C98E] block mb-1">
                    {era.arabicName}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                    {era.name}
                  </h3>
                </div>

                <p className="text-xs text-white/75 font-sans leading-relaxed line-clamp-2 mb-4">
                  {era.overview}
                </p>

                {/* Legacy Highlights */}
                <div className="space-y-1 text-xs text-white/85 font-sans mb-4 pt-3 border-t border-white/20">
                  <div className="flex items-start gap-1">
                    <span className="text-white/60 text-[10px] uppercase font-mono flex-shrink-0">
                      {language === 'ar' ? 'العلوم:' : 'Science:'}
                    </span>
                    <span className="font-medium text-white/90 truncate">
                      {era.science}
                    </span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-antiqueGold-light group-hover:text-white font-semibold transition-colors">
                  <span>{language === 'ar' ? 'استعراض دراسة الحقبة التاريخية' : 'Explore Historical Era Treatise'}</span>
                  <span className="group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

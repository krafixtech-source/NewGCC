'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { royalFamiliesData } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const RoyalHousesSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-canvas-white py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'الأسر والسلالات الحاكمة في شبه الجزيرة' : 'Ruling Dynasties of Arabia'}
            </h2>
          </div>
          <Link
            href="/royalty/explorer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-antiqueGold hover:text-forest font-bold transition-colors"
          >
            <span>{language === 'ar' ? 'مخطط الأنساب وشجرة العائلة' : 'Explore Genealogical Trees'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Oversized Editorial Rows */}
        <div className="divide-y divide-border border-t border-b border-border">
          {royalFamiliesData.map((rf, idx) => {
            const rowNumber = (idx + 1).toString().padStart(2, '0');

            return (
              <Link
                key={rf.id}
                href={`/royalty/${rf.slug}`}
                className="group py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:bg-canvas-paper/40 transition-all px-4 sm:px-6 rounded-2xl"
              >
                {/* 01 Numbering */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-antiqueGold">
                    {rowNumber}
                  </span>
                </div>

                {/* House Name & Country */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-forest transition-colors">
                      {rf.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
                    <span className="font-arabic text-sm text-ink">{rf.arabicName}</span>
                    <span>·</span>
                    <span className="font-sans text-ink-muted">{rf.country}</span>
                  </div>
                </div>

                {/* Era / Tenure */}
                <div className="lg:col-span-2">
                  <span className="text-[11px] font-mono text-antiqueGold uppercase block mb-0.5">
                    Dynastic Reign
                  </span>
                  <span className="font-mono text-sm font-semibold text-ink">
                    {rf.foundedYear} — Present
                  </span>
                </div>

                {/* Authentic Architectural Thumbnail (Grows ~3% on hover) */}
                <div className="lg:col-span-3">
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-border rounded-xl bg-canvas-paper shadow-sm">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url('${rf.heroImageUrl || "/images/alula.jpg"}')` }}
                    />
                  </div>
                </div>

                {/* Action Arrow */}
                <div className="lg:col-span-1 text-right rtl:text-left">
                  <span className="inline-block p-2 text-ink-muted group-hover:text-forest group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

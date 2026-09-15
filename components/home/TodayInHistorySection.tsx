'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { timelineEventsData } from '@/lib/data/history';
import { useLanguage } from '../LanguageProvider';

export const TodayInHistorySection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-canvas-white py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'حدث في مثل هذا اليوم من تاريخ العرب' : 'Today in Arab History'}
            </h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-canvas-paper border border-border text-xs font-mono text-ink rounded-full shadow-sm">
            <Clock className="w-3.5 h-3.5 text-antiqueGold" />
            <span>Active Archival Calendar: 10 September</span>
          </div>
        </div>

        {/* Chronological Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineEventsData.slice(0, 6).map((evt) => (
            <div
              key={evt.id}
              className="group flex flex-col justify-between bg-canvas-white border border-border hover:border-antiqueGold transition-all p-6 shadow-editorial rounded-2xl hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-bold text-forest">
                    {evt.year} CE
                  </span>
                  <span className="px-2.5 py-0.5 bg-canvas-paper text-[10px] font-mono uppercase tracking-wider text-ink-muted border border-border rounded-full">
                    {evt.category}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-ink group-hover:text-forest transition-colors mb-1">
                  {evt.title}
                </h3>
                <div className="font-arabic text-xs text-antiqueGold font-medium mb-3">
                  {evt.arabicTitle}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-ink-muted font-mono mb-3">
                  <MapPin className="h-3.5 w-3.5 text-antiqueGold shrink-0" />
                  <span>{evt.location}</span>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed font-sans line-clamp-3">
                  {evt.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs font-mono text-antiqueGold group-hover:text-forest font-semibold">
                <span>Inspect Event Record</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Timeline */}
        <div className="mt-12 text-center">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-canvas-white hover:bg-forest-light text-xs font-mono uppercase tracking-wider font-semibold transition-colors rounded-full shadow-md hover:shadow-lg"
          >
            <span>Open Complete Chronological Timeline Explorer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

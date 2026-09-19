'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Calendar, MapPin, Filter, ArrowRight, LayoutList, Columns, ChevronRight, Sparkles } from 'lucide-react';
import { timelineEventsData, TimelineEvent } from '@/lib/data/history';
import { useLanguage } from '@/components/LanguageProvider';

export default function TimelineExplorerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCentury, setSelectedCentury] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');
  const { language } = useLanguage();

  const categories = ['All', 'Founding', 'Dynastic', 'Treaty', 'Modern'];
  const centuries = ['All', '18th Century', '19th Century', '20th Century'];

  const filtered = timelineEventsData.filter(evt => {
    const matchesCat = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesCent = selectedCentury === 'All' || evt.century === selectedCentury;
    return matchesCat && matchesCent;
  });

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Archival Hero Header */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/history/islamic-golden-age.jpg"
            alt="Historical Timeline"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <Link href="/history" className="hover:text-[#E5C98E] transition-colors">History</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Chronological Timeline</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <Clock className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'المخطط الزمني التاريخي' : 'Chronological Explorer'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'التسلسل الزمني لأحداث العالم العربي' : 'Interactive Historical Timeline'}
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {language === 'ar'
                ? 'استكشف المحطات التأسيسية، والمعاهدات الدولية، والتعاقب السلالي، والتحولات الكبرى في تاريخ الجزيرة العربية والعالم العربي.'
                : 'Navigate through pivotal founding charters, monarchical successions, territorial unifications, and historical milestones across the Arab world.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#E5C98E]">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <span>⏳</span> {timelineEventsData.length} Milestone Events
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <span>📜</span> Primary Treaties & Proclamations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Controls Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-5 border border-[#E5C98E]/30 shadow-sm">
          
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            <span className="text-xs text-[#123C33] font-serif font-bold uppercase flex items-center gap-1">
              <Filter className="h-3.5 w-3.5 text-[#C6A15B]" /> Category:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-serif font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#123C33] text-[#E5C98E] font-bold shadow-sm'
                    : 'bg-[#FAF9F5] text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Century Filter & View Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-1.5 text-xs font-serif">
              <span className="text-stone-500">Century:</span>
              <select
                value={selectedCentury}
                onChange={e => setSelectedCentury(e.target.value)}
                className="bg-[#FAF9F5] border border-stone-300 px-3 py-1.5 text-xs text-stone-800 focus:outline-none focus:border-[#C6A15B]"
              >
                {centuries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1 border border-stone-300 bg-[#FAF9F5] p-1">
              <button
                onClick={() => setViewMode('vertical')}
                className={`p-1.5 ${viewMode === 'vertical' ? 'bg-[#123C33] text-[#E5C98E]' : 'text-stone-500 hover:text-black'}`}
                title="Vertical Timeline"
              >
                <LayoutList className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('horizontal')}
                className={`p-1.5 ${viewMode === 'horizontal' ? 'bg-[#123C33] text-[#E5C98E]' : 'text-stone-500 hover:text-black'}`}
                title="Horizontal Timeline"
              >
                <Columns className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Timeline Content */}
        {viewMode === 'vertical' ? (
          <div className="relative max-w-4xl mx-auto py-8">
            {/* Center Vertical Stem Line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-[#E5C98E]/60" />

            <div className="space-y-12">
              {filtered.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={evt.id}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 pl-10 sm:pl-0`}
                  >
                    {/* Event Year Node */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center border-2 border-[#E5C98E] bg-[#123C33] text-xs font-bold font-serif text-[#E5C98E] shadow-md z-10">
                      {evt.year.toString().slice(-2)}
                    </div>

                    {/* Card Content */}
                    <div className="w-full sm:w-[calc(50%-2.5rem)] border border-[#E5C98E]/30 bg-white p-6 shadow-sm hover:border-[#E5C98E] hover:shadow-lg transition-all space-y-2">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                        <span className="font-serif text-xl font-bold text-[#123C33]">
                          {evt.year} CE
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#FAF9F5] border border-stone-200 text-[#C6A15B]">
                          {evt.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#123C33]">
                        {evt.title}
                      </h3>
                      <span className="font-arabicHeading text-xs text-[#C6A15B] font-medium block">
                        {evt.arabicTitle}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-stone-500 py-1">
                        <MapPin className="h-3 w-3 text-[#C6A15B]" />
                        <span>{evt.location}</span>
                      </div>

                      <p className="text-xs text-stone-600 font-light leading-relaxed pt-1 border-t border-stone-100">
                        {evt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Horizontal Timeline View */
          <div className="overflow-x-auto py-8 scrollbar-thin">
            <div className="flex gap-6 min-w-max pb-4">
              {filtered.map(evt => (
                <div
                  key={evt.id}
                  className="w-80 border border-[#E5C98E]/30 bg-white p-6 shadow-sm hover:border-[#E5C98E] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                      <span className="font-serif text-2xl font-bold text-[#123C33]">{evt.year}</span>
                      <span className="text-[10px] uppercase font-bold text-[#C6A15B] bg-[#FAF9F5] px-2.5 py-0.5 border border-stone-200">
                        {evt.category}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#123C33]">
                      {evt.title}
                    </h4>
                    <span className="font-arabicHeading text-xs text-[#C6A15B] block">
                      {evt.arabicTitle}
                    </span>

                    <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-4 pt-1">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 flex items-center gap-1 font-serif">
                    <MapPin className="h-3 w-3 text-[#C6A15B]" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
}

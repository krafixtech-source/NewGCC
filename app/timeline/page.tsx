'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, Calendar, MapPin, Filter, ArrowRight, LayoutList, Columns } from 'lucide-react';
import { timelineEventsData, TimelineEvent } from '@/lib/data/history';
import { useLanguage } from '@/components/LanguageProvider';

export default function TimelineExplorerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCentury, setSelectedCentury] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');
  const { t } = useLanguage();

  const categories = ['All', 'Founding', 'Dynastic', 'Treaty', 'Modern'];
  const centuries = ['All', '18th Century', '19th Century', '20th Century'];

  const filtered = timelineEventsData.filter(evt => {
    const matchesCat = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesCent = selectedCentury === 'All' || evt.century === selectedCentury;
    return matchesCat && matchesCent;
  });

  return (
    <div className="pt-24 pb-24 bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-border text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-1 text-xs font-serif uppercase tracking-widest text-forest font-semibold mb-4 shadow-sm">
            <Clock className="h-3.5 w-3.5 text-antiqueGold" />
            <span>Chronological Explorer</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink mb-4">
            Interactive Historical Timeline
          </h1>
          <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
            Navigate through pivotal founding charters, monarchical successions, territorial unifications, and historical milestones across the Arab world.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="my-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F9FAFB] p-5 rounded-2xl border border-border">
          
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            <span className="text-xs text-forest font-semibold uppercase flex items-center gap-1">
              <Filter className="h-3.5 w-3.5 text-antiqueGold" /> Category:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-forest text-white font-bold shadow-sm'
                    : 'bg-white text-ink-muted hover:bg-gray-100 border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Century Filter & View Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-ink-muted">Century:</span>
              <select
                value={selectedCentury}
                onChange={e => setSelectedCentury(e.target.value)}
                className="bg-white border border-border rounded-full px-3 py-1.5 text-xs text-ink focus:outline-none focus:border-antiqueGold"
              >
                {centuries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-border bg-white p-1">
              <button
                onClick={() => setViewMode('vertical')}
                className={`p-1.5 rounded-full ${viewMode === 'vertical' ? 'bg-forest text-white' : 'text-ink-muted hover:text-ink'}`}
                title="Vertical Timeline"
              >
                <LayoutList className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('horizontal')}
                className={`p-1.5 rounded-full ${viewMode === 'horizontal' ? 'bg-forest text-white' : 'text-ink-muted hover:text-ink'}`}
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
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-[#E5E7EB]"></div>

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
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-antiqueGold bg-white text-xs font-bold font-serif text-forest shadow-sm z-10">
                      {evt.year.toString().slice(-2)}
                    </div>

                    {/* Card Content */}
                    <div className="w-full sm:w-[calc(50%-2rem)] rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-antiqueGold hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-lg font-bold text-forest">
                          {evt.year} CE
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F9FAFB] border border-border text-ink-muted">
                          {evt.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-ink mb-1">
                        {evt.title}
                      </h3>
                      <span className="font-arabicHeading text-xs text-antiqueGold font-medium block mb-2">
                        {evt.arabicTitle}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-3">
                        <MapPin className="h-3 w-3 text-antiqueGold" />
                        <span>{evt.location}</span>
                      </div>

                      <p className="text-xs text-ink-muted leading-relaxed">
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
                  className="w-80 rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-antiqueGold hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-2xl font-bold text-forest">{evt.year}</span>
                      <span className="text-[10px] uppercase font-bold text-ink-muted bg-[#F9FAFB] px-2.5 py-0.5 rounded-full border border-border">
                        {evt.category}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-ink mb-1">
                      {evt.title}
                    </h4>
                    <span className="font-arabicHeading text-xs text-antiqueGold block mb-2">
                      {evt.arabicTitle}
                    </span>

                    <p className="text-xs text-ink-muted leading-relaxed line-clamp-4">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border text-xs text-ink-muted flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-antiqueGold" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

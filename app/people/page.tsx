'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, ArrowRight, ShieldCheck, MapPin, Search, Calendar } from 'lucide-react';
import { peopleData } from '@/lib/data/people';
import { useLanguage } from '@/components/LanguageProvider';

export default function PeopleDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  const categories = ['All', 'Rulers', 'Royal Family', 'Historical Figures', 'Scientists', 'Explorers'];

  const filtered = peopleData.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.arabicName.includes(searchQuery) ||
      p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-24 pb-24 bg-white text-charcoal min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-sand/60 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-4 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold mb-4">
            <User className="h-3.5 w-3.5 text-gold-dark" />
            <span>Biographical & Prosopographical Archives</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight mb-4">
            People of the Arab World
          </h1>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            Verified biographies of reigning monarchs, founding fathers, scholars, scientists, explorers, and historical personalities who shaped civilizations.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="my-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald text-ivory border border-gold shadow-sm'
                    : 'bg-white text-stone-dark hover:bg-sand/30 border border-sand/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by name, title, country..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-sand bg-white text-xs text-midnight placeholder-stone/60 focus:outline-none focus:border-gold shadow-sm"
            />
          </div>
        </div>

        {/* People Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(person => (
            <div
              key={person.id}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-canvas-white shadow-sm hover:shadow-xl hover:border-antiqueGold transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* 4:5 Portrait Frame if available */}
                {person.portraitUrl && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-paper border-b border-border">
                    <div
                      className="absolute inset-0 bg-cover bg-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      style={{ backgroundImage: `url('${person.portraitUrl}')` }}
                    />
                    {person.isCurrent && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-canvas-white/95 text-forest text-[10px] font-mono font-bold tracking-wider uppercase border border-border shadow-sm">
                          Reigning
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-antiqueGold font-bold">
                      {person.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-ink-muted font-semibold">
                      <MapPin className="h-3 w-3 text-antiqueGold" />
                      {person.country}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink group-hover:text-forest transition-colors line-clamp-1">
                    {person.name}
                  </h3>
                  <div className="font-arabic text-xs text-ink-muted font-semibold mb-2">
                    {person.arabicName}
                  </div>

                  <p className="text-xs text-forest font-medium mb-3 line-clamp-1">
                    {person.title}
                  </p>

                  <p className="text-xs text-ink-muted line-clamp-3 leading-relaxed mb-4">
                    {person.biography}
                  </p>

                  {person.reign && (
                    <div className="flex items-center gap-1.5 text-xs text-ink bg-canvas-paper px-3 py-1.5 rounded-xl border border-border mb-4 font-mono">
                      <Calendar className="h-3 w-3 text-antiqueGold" />
                      <span>Reign: <strong className="font-semibold">{person.reign}</strong></span>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href={`/people/${person.slug}`}
                  className="inline-flex items-center justify-between w-full rounded-full border border-forest/30 bg-canvas-paper px-4 py-2.5 text-xs font-semibold text-forest hover:bg-forest hover:text-canvas-white hover:border-forest transition-all"
                >
                  <span>Read Full Biography</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

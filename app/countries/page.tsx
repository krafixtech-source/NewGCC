'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, ShieldCheck, MapPin, Search } from 'lucide-react';
import { countriesData } from '@/lib/data/countries';
import { useLanguage } from '@/components/LanguageProvider';

export default function CountriesDirectoryPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  const regions = ['All', 'GCC', 'Levant', 'North Africa', 'Arabian Peninsula', 'Horn of Africa'];

  const filtered = countriesData.filter(c => {
    const matchesRegion =
      selectedRegion === 'All'
        ? true
        : selectedRegion === 'GCC'
        ? c.isGCC
        : c.region === selectedRegion;
    const matchesQuery =
      searchQuery.trim() === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.arabicName.includes(searchQuery) ||
      c.capital.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen text-charcoal">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="py-12 border-b border-sand/60 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-4 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold mb-4">
            <Globe className="h-3.5 w-3.5 text-gold-dark" />
            <span>Sovereign States & Territories</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight mb-4">
            Countries of the Arab World
          </h1>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            A comprehensive digital registry of the 22 sovereign nations comprising the Arab League and Gulf Cooperation Council.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="my-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRegion === r
                    ? 'bg-emerald text-ivory border border-gold shadow-sm'
                    : 'bg-white text-stone-dark hover:bg-sand/30 border border-sand/60'
                }`}
              >
                {r === 'All' ? 'All 22 Nations' : r}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by country, capital..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-sand bg-white text-xs text-midnight placeholder-stone/60 focus:outline-none focus:border-gold shadow-sm"
            />
          </div>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <div
              key={c.id}
              className="group flex flex-col justify-between rounded-2xl border border-sand bg-white p-6 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-serif uppercase tracking-wider text-gold-dark font-bold">
                    {c.region}
                  </span>
                  {c.isGCC && (
                    <span className="rounded-full bg-emerald-dark px-2.5 py-0.5 text-[10px] font-bold text-ivory">
                      GCC Member
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl font-bold text-midnight group-hover:text-emerald transition-colors">
                    {c.name}
                  </h3>
                  <span className="font-arabicHeading text-sm font-semibold text-stone-dark">
                    {c.arabicName}
                  </span>
                </div>

                <p className="text-xs text-stone line-clamp-3 leading-relaxed mb-4">
                  {c.summary}
                </p>

                <div className="grid grid-cols-2 gap-2 border-t border-b border-sand/40 py-3 mb-4 text-xs">
                  <div>
                    <span className="text-stone block text-[10px] uppercase">Capital</span>
                    <span className="font-semibold text-midnight">{c.capital}</span>
                  </div>
                  <div>
                    <span className="text-stone block text-[10px] uppercase">Population</span>
                    <span className="font-semibold text-midnight">{(c.population / 1000000).toFixed(2)}M</span>
                  </div>
                  <div>
                    <span className="text-stone block text-[10px] uppercase">Government</span>
                    <span className="font-semibold text-midnight truncate block">{c.governmentType}</span>
                  </div>
                  <div>
                    <span className="text-stone block text-[10px] uppercase">Currency</span>
                    <span className="font-semibold text-midnight">{c.currency}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/countries/${c.slug}`}
                className="inline-flex items-center justify-between rounded-full border border-emerald/30 bg-ivory-muted px-4 py-2.5 text-xs font-semibold text-emerald-dark hover:bg-emerald hover:text-ivory hover:border-emerald transition-all"
              >
                <span>Explore Country Encyclopedia</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

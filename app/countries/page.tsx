'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, ShieldCheck, MapPin, Search } from 'lucide-react';
import { countriesData } from '@/lib/data/countries';
import { useLanguage } from '@/components/LanguageProvider';

export default function CountriesDirectoryPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { language, isRTL } = useLanguage();

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
    <div className="bg-canvas min-h-screen text-ink">
      
      {/* Editorial Monumental Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transform duration-1000"
            style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-archival text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-[0.25em] text-antiqueGold-light font-bold mb-4">
            <Globe className="h-3.5 w-3.5 text-antiqueGold" />
            <span>{language === 'ar' ? 'سجل الدول والسيادة' : 'Sovereign States & Territories'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            {language === 'ar' ? 'دول العالم العربي' : 'Countries of the Arab World'}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            {language === 'ar'
              ? 'سجل موسوعي شامل يوثق الـ 22 دولة ذات السيادة المنضوية تحت مظلة جامعة الدول العربية ومجلس التعاون الخليجي.'
              : 'A comprehensive digital registry documenting the 22 sovereign nations comprising the Arab League and the Gulf Cooperation Council.'}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-border">
          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedRegion === r
                    ? 'bg-forest text-white border border-forest shadow-sm'
                    : 'bg-white text-ink-muted hover:bg-canvas-subtle hover:text-ink border border-border'
                }`}
              >
                {r === 'All' ? (language === 'ar' ? 'جميع الدول (22)' : 'All 22 Nations') : r}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted rtl:left-auto rtl:right-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'ar' ? 'ابحث باسم الدولة أو العاصمة...' : 'Search by country, capital...'}
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 border border-border bg-white text-xs text-ink placeholder-ink-muted/60 focus:outline-none focus:border-antiqueGold shadow-sm"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-ink-muted">
          <span>{filtered.length} {language === 'ar' ? 'دولة مسجلة' : 'Sovereign States'}</span>
          <span className="text-antiqueGold font-semibold">{language === 'ar' ? 'توثيق معتمد' : 'Archival Verified'}</span>
        </div>

        {/* Country Photographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(c => (
            <Link
              key={c.id}
              href={`/countries/${c.slug}`}
              className="group relative flex flex-col justify-between aspect-[3/4.2] sm:aspect-[3/4.4] w-full bg-slate-950 border border-border hover:border-antiqueGold transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${c.heroImageUrl || "/images/alula.jpg"}')` }}
              />

              {/* Gradient Overlays for High Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-50% to-black/30 group-hover:from-black transition-colors duration-300 pointer-events-none" />

              {/* Top Badges (Region, GCC, ISO) */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-forest text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                  {c.region}
                </span>

                <div className="flex items-center gap-1.5">
                  {c.isGCC && (
                    <span className="px-2.5 py-1 bg-antiqueGold text-forest text-[9px] font-mono font-bold uppercase tracking-wider shadow-sm">
                      GCC
                    </span>
                  )}
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {c.isoCode}
                  </span>
                </div>
              </div>

              {/* Bottom Information Overlaid on Image */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <div className="mb-3">
                  <span className="text-sm font-arabicHeading font-bold text-[#E5C98E] block mb-1">
                    {c.arabicName}
                  </span>
                  <h3 className="font-serif font-bold text-3xl text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                    {c.name}
                  </h3>
                </div>

                {/* Metadata details (Capital, Population, Gov) */}
                <div className="space-y-1.5 text-xs text-white/85 font-sans mb-4 pt-3 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">{language === 'ar' ? 'العاصمة:' : 'Capital:'}</span>
                    <span className="font-semibold text-white">{c.capital}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">{language === 'ar' ? 'السكان:' : 'Population:'}</span>
                    <span className="font-semibold text-white">{(c.population / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">{language === 'ar' ? 'نظام الحكم:' : 'Government:'}</span>
                    <span className="font-semibold text-white truncate max-w-[140px]">{c.governmentType}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-antiqueGold-light group-hover:text-white font-semibold transition-colors">
                  <span>{language === 'ar' ? 'استعراض السجل الكامل' : 'Read Monograph'}</span>
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

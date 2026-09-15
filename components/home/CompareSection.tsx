'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scale, ArrowRight, Plus, X, Globe, Building2, Users, MapPin, Landmark, DollarSign, Award, ChevronRight, Compass } from 'lucide-react';
import { countriesData, Country } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

export const CompareSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Preset comparison profiles
  const presets = [
    {
      id: 'gcc-trio',
      name: 'GCC Gulf Trio',
      nameAr: 'ثلاثي الخليج العربي',
      slugs: ['saudi-arabia', 'united-arab-emirates', 'qatar'],
    },
    {
      id: 'ancient-civilizations',
      name: 'Historic Empires & Civilizations',
      nameAr: 'الحضارات التاريخية الكبرى',
      slugs: ['egypt', 'saudi-arabia', 'iraq', 'jordan'],
    },
    {
      id: 'economic-powerhouses',
      name: 'Leading Economies',
      nameAr: 'أكبر الاقتصادات العربية',
      slugs: ['saudi-arabia', 'united-arab-emirates', 'egypt', 'kuwait'],
    },
    {
      id: 'maghreb-levant',
      name: 'Maghreb & Levant',
      nameAr: 'المغرب العربي والمشرق',
      slugs: ['morocco', 'algeria', 'lebanon', 'oman'],
    },
  ];

  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([
    'saudi-arabia',
    'united-arab-emirates',
    'qatar',
  ]);

  const [activePreset, setActivePreset] = useState<string>('gcc-trio');

  const handleCountryChange = (index: number, newSlug: string) => {
    const updated = [...selectedSlugs];
    updated[index] = newSlug;
    setSelectedSlugs(updated);
    setActivePreset('');
  };

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setSelectedSlugs(preset.slugs);
    setActivePreset(preset.id);
  };

  const addColumn = () => {
    if (selectedSlugs.length < 4) {
      const unselected = countriesData.find((c) => !selectedSlugs.includes(c.slug));
      if (unselected) {
        setSelectedSlugs([...selectedSlugs, unselected.slug]);
        setActivePreset('');
      }
    }
  };

  const removeColumn = (index: number) => {
    if (selectedSlugs.length > 2) {
      setSelectedSlugs(selectedSlugs.filter((_, i) => i !== index));
      setActivePreset('');
    }
  };

  const selectedCountries: Country[] = selectedSlugs
    .map((slug) => countriesData.find((c) => c.slug === slug))
    .filter((c): c is Country => Boolean(c));

  // Max values across entire dataset for realistic proportional gauges
  const maxPop = Math.max(...countriesData.map((c) => c.population));
  const maxArea = Math.max(...countriesData.map((c) => c.areaKm2));
  const maxGdp = Math.max(...countriesData.map((c) => c.gdpNominalBillion));

  return (
    <section className="relative bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden">
      {/* Decorative Background Arabesque Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-forest">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-border gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E5E7EB] text-antiqueGold text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Scale className="h-3.5 w-3.5" />
              <span>{language === 'ar' ? 'مصفوفة المقارنة التفاعلية' : 'Comparative Analytics Matrix'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'مقارنة دول العالم العربي' : 'Compare Arab Sovereign Nations'}
            </h2>
            <p className="text-ink-muted text-sm sm:text-base mt-3 leading-relaxed">
              {language === 'ar'
                ? 'مقارنة إحصائية وجيوسياسية واقتصادية متعددة الأبعاد تتيح فحص مؤشرات السكان والمساحة والناتج المحلي وأنظمة الحكم جنباً إلى جنب.'
                : 'Explore multi-dimensional demographic, geopolitical, and macroeconomic comparisons side-by-side across the 22 sovereign nations of the Arab World.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-white hover:bg-forest-light text-xs font-semibold tracking-wider transition-all shadow-sm hover:shadow"
            >
              <span>{language === 'ar' ? 'فتح المصفوفة الكاملة' : 'Full 22-Nation Matrix'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Quick Presets & Control Bar */}
        <div className="bg-[#FAF8F5] border border-border rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mr-1">
              {language === 'ar' ? 'مجموعات سريعة:' : 'Presets:'}
            </span>
            {presets.map((preset) => {
              const isActive = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleApplyPreset(preset)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-forest text-white shadow-sm'
                      : 'bg-white border border-border text-ink hover:border-antiqueGold hover:text-forest'
                  }`}
                >
                  {language === 'ar' ? preset.nameAr : preset.name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-xs text-ink-muted font-mono">
              {language === 'ar'
                ? `${selectedCountries.length} دول مختارة`
                : `${selectedCountries.length} of 4 Nations`}
            </span>
            {selectedSlugs.length < 4 && (
              <button
                onClick={addColumn}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border hover:border-antiqueGold text-forest text-xs font-semibold transition-colors shadow-sm"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>{language === 'ar' ? 'إضافة دولة' : 'Add Nation'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Comparative Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${selectedCountries.length} gap-6`}>
          {selectedCountries.map((country, idx) => {
            const popPercent = Math.min(100, Math.round((country.population / maxPop) * 100));
            const areaPercent = Math.min(100, Math.round((country.areaKm2 / maxArea) * 100));
            const gdpPercent = Math.min(100, Math.round((country.gdpNominalBillion / maxGdp) * 100));

            return (
              <div
                key={country.slug || idx}
                className="group relative flex flex-col bg-white border border-border hover:border-antiqueGold rounded-2xl overflow-hidden shadow-sm hover:shadow-museum transition-all duration-300"
              >
                {/* Card Top: Country Selector & Header */}
                <div className="p-5 border-b border-border bg-[#FCFBF8]">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <select
                      value={country.slug}
                      onChange={(e) => handleCountryChange(idx, e.target.value)}
                      className="w-full text-xs font-serif font-bold text-forest bg-white border border-border rounded-xl px-3 py-1.5 focus:outline-none focus:border-antiqueGold shadow-sm cursor-pointer"
                    >
                      {countriesData.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name} ({c.arabicName})
                        </option>
                      ))}
                    </select>
                    {selectedSlugs.length > 2 && (
                      <button
                        onClick={() => removeColumn(idx)}
                        className="p-1.5 text-ink-muted hover:text-red-600 rounded-lg hover:bg-white transition-colors"
                        title="Remove column"
                        aria-label={`Remove ${country.name}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Country Flag & Names */}
                  <div className="flex items-center gap-3.5 pt-1">
                    <div className="relative w-12 h-8 rounded-lg overflow-hidden border border-border shadow-sm flex-shrink-0 bg-stone-100">
                      <img
                        src={country.flagUrl || '/images/hero.jpg'}
                        alt={`${country.name} Flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif font-bold text-lg text-ink truncate leading-tight">
                        {country.name}
                      </h3>
                      <div className="text-xs font-arabicHeading text-antiqueGold truncate">
                        {country.arabicName}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body: Metric Comparison Rows */}
                <div className="p-5 space-y-4 flex-1 text-xs">
                  {/* Region & Government */}
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-subtle">
                    <div>
                      <span className="block text-[11px] font-mono text-ink-muted uppercase">
                        {language === 'ar' ? 'الإقليم' : 'Region'}
                      </span>
                      <span className="font-semibold text-ink mt-0.5 inline-block">
                        {country.region}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-ink-muted uppercase">
                        {language === 'ar' ? 'العاصمة' : 'Capital'}
                      </span>
                      <span className="font-semibold text-ink mt-0.5 inline-block">
                        {country.capital}
                      </span>
                    </div>
                  </div>

                  {/* Government System */}
                  <div className="pb-3 border-b border-subtle">
                    <span className="block text-[11px] font-mono text-ink-muted uppercase">
                      {language === 'ar' ? 'نظام الحكم' : 'Governance System'}
                    </span>
                    <span className="font-medium text-ink mt-0.5 block leading-snug">
                      {country.governmentType}
                    </span>
                  </div>

                  {/* Head of State */}
                  <div className="pb-3 border-b border-subtle">
                    <span className="block text-[11px] font-mono text-ink-muted uppercase">
                      {language === 'ar' ? 'رأس الدولة' : 'Head of State'}
                    </span>
                    <span className="font-semibold text-forest mt-0.5 block truncate leading-snug" title={country.headOfState}>
                      {country.headOfState}
                    </span>
                  </div>

                  {/* Population with Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-ink">
                      <span className="text-[11px] font-mono text-ink-muted uppercase flex items-center gap-1">
                        <Users className="h-3 w-3 text-antiqueGold" />
                        {language === 'ar' ? 'السكان' : 'Population'}
                      </span>
                      <span className="font-bold text-ink">
                        {(country.population / 1_000_000).toFixed(2)}M
                      </span>
                    </div>
                    <div className="w-full bg-[#EFEFEF] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-forest h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(4, popPercent)}%` }}
                      />
                    </div>
                  </div>

                  {/* Land Area with Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-ink">
                      <span className="text-[11px] font-mono text-ink-muted uppercase flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-antiqueGold" />
                        {language === 'ar' ? 'المساحة' : 'Land Area'}
                      </span>
                      <span className="font-bold text-ink">
                        {country.areaKm2.toLocaleString()} km²
                      </span>
                    </div>
                    <div className="w-full bg-[#EFEFEF] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-antiqueGold h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(4, areaPercent)}%` }}
                      />
                    </div>
                  </div>

                  {/* GDP Nominal with Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-ink">
                      <span className="text-[11px] font-mono text-ink-muted uppercase flex items-center gap-1">
                        <DollarSign className="h-3 w-3 text-antiqueGold" />
                        {language === 'ar' ? 'الناتج الاسمي' : 'Nominal GDP'}
                      </span>
                      <span className="font-bold text-forest">
                        ${country.gdpNominalBillion.toLocaleString()}B
                      </span>
                    </div>
                    <div className="w-full bg-[#EFEFEF] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-forest-light h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(4, gdpPercent)}%` }}
                      />
                    </div>
                  </div>

                  {/* GDP Per Capita & Currency */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-border">
                      <span className="block text-[10px] font-mono text-ink-muted uppercase">
                        {language === 'ar' ? 'دخل الفرد' : 'Per Capita'}
                      </span>
                      <span className="font-bold text-forest text-xs mt-0.5 block">
                        ${country.gdpPerCapita.toLocaleString()}
                      </span>
                    </div>
                    <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-border">
                      <span className="block text-[10px] font-mono text-ink-muted uppercase">
                        {language === 'ar' ? 'العملة' : 'Currency'}
                      </span>
                      <span className="font-semibold text-ink text-xs mt-0.5 block truncate" title={country.currency}>
                        {country.currencySymbol || country.currency.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Link to Country Page */}
                <div className="p-4 pt-0">
                  <Link
                    href={`/countries/${country.slug}`}
                    className="w-full py-2 px-3 rounded-xl bg-[#FAF8F5] hover:bg-forest text-forest hover:text-white border border-border text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-200"
                  >
                    <span>{language === 'ar' ? 'استعراض السجل الكامل' : 'View Full Profile'}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-forest to-forest-dark text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-museum">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm text-antiqueGold">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                {language === 'ar' ? 'مقارنة شاملة لكافة الدول الـ ٢٢' : 'Comprehensive 22-Nation Analytical Matrix'}
              </h4>
              <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                {language === 'ar'
                  ? 'قارن بين المؤشرات التاريخية والرموز الوطنية والمدن الكبرى لكافة أرجاء العالم العربي.'
                  : 'Examine complete geopolitical indices, national symbols, and constitutional records in high-density matrix format.'}
              </p>
            </div>
          </div>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-antiqueGold hover:bg-antiqueGold-dark text-forest font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 shadow"
          >
            <span>{language === 'ar' ? 'دخول المصفوفة الكاملة' : 'Launch Full Matrix'}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

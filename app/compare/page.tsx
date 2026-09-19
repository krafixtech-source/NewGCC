'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scale, ArrowRight, ChevronRight, Plus, X, Globe, BarChart2 } from 'lucide-react';
import { countriesData } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function ComparePage() {
  const { language } = useLanguage();
  
  // Default selected countries: KSA, UAE, Qatar, Egypt
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([
    'saudi-arabia',
    'united-arab-emirates',
    'qatar',
    'egypt',
  ]);

  const handleCountryChange = (index: number, newSlug: string) => {
    const updated = [...selectedSlugs];
    updated[index] = newSlug;
    setSelectedSlugs(updated);
  };

  const addColumn = () => {
    if (selectedSlugs.length < 4) {
      const unselected = countriesData.find(c => !selectedSlugs.includes(c.slug));
      if (unselected) {
        setSelectedSlugs([...selectedSlugs, unselected.slug]);
      }
    }
  };

  const removeColumn = (index: number) => {
    if (selectedSlugs.length > 2) {
      setSelectedSlugs(selectedSlugs.filter((_, i) => i !== index));
    }
  };

  const selectedCountries = selectedSlugs.map(slug => 
    countriesData.find(c => c.slug === slug) || countriesData[0]
  );

  const maxPop = Math.max(...countriesData.map(c => c.population));
  const maxArea = Math.max(...countriesData.map(c => c.areaKm2));
  const maxGdp = Math.max(...countriesData.map(c => c.gdpNominalBillion));

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Archival Hero Header */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/arab-leaders-summit.jpg"
            alt="Comparative Analytics Matrix"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <Link href="/countries" className="hover:text-[#E5C98E] transition-colors">Countries</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Comparative Matrix</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <Scale className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'مصفوفة المقارنة الإحصائية' : 'Comparative Analytics Matrix'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'مقارنة دول العالم العربي' : 'Compare Arab Sovereign Nations'}
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {language === 'ar'
                ? 'مقارنة إحصائية وجيوسياسية وتراثية متعددة الأبعاد بين الدول العربية جنباً إلى جنب مع مؤشرات المساحة والسكان والناتج المحلي ونظم الحكم.'
                : 'Multi-dimensional geopolitical, demographic, and historical comparison across Arab nations with normalized metrics, heritage indicators, and economic indices.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#E5C98E]">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <Globe className="h-3.5 w-3.5" /> 22 Sovereign Datasets
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <BarChart2 className="h-3.5 w-3.5" /> Normalized Economic Metrics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Matrix Controls */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5C98E]/30">
          <div className="text-xs font-serif text-stone-600 font-medium">
            {language === 'ar' 
              ? `عرض ${selectedCountries.length} دول للمقارنة جنباً إلى جنب (الحد الأقصى ٤)`
              : `Comparing ${selectedCountries.length} nations side-by-side (max 4)`}
          </div>
          {selectedSlugs.length < 4 && (
            <button
              onClick={addColumn}
              className="px-4 py-2 bg-[#123C33] text-[#E5C98E] hover:bg-[#1a4f44] text-xs font-serif font-bold transition-all flex items-center gap-1.5 shadow-sm border border-[#E5C98E]/40"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>{language === 'ar' ? 'إضافة دولة للمقارنة' : 'Add Nation'}</span>
            </button>
          )}
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto bg-white shadow-sm border border-[#E5C98E]/30">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-[#FAF9F5]">
                <th className="p-4 sm:p-6 w-1/5 min-w-[180px] text-xs uppercase font-serif font-bold tracking-wider text-[#123C33]">
                  {language === 'ar' ? 'المؤشر / المعيار' : 'Metric / Dimension'}
                </th>
                {selectedCountries.map((country, idx) => (
                  <th key={idx} className="p-4 sm:p-6 min-w-[220px] text-left border-l border-stone-200 bg-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <select
                        value={country.slug}
                        onChange={(e) => handleCountryChange(idx, e.target.value)}
                        className="w-full text-xs font-serif font-bold text-[#123C33] bg-[#FAF9F5] border border-stone-300 p-2 focus:outline-none focus:border-[#C6A15B]"
                      >
                        {countriesData.map(c => (
                          <option key={c.slug} value={c.slug}>
                            {c.name} ({c.arabicName})
                          </option>
                        ))}
                      </select>
                      {selectedSlugs.length > 2 && (
                        <button
                          onClick={() => removeColumn(idx)}
                          className="text-stone-400 hover:text-red-600 p-1"
                          title="Remove from comparison"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-serif font-bold text-lg text-[#123C33] leading-tight">
                          {country.name}
                        </div>
                        <div className="text-xs font-arabic text-[#C6A15B] font-semibold">
                          {country.arabicName}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
              {/* Region */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'الإقليم الجغرافي' : 'Geographic Region'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    <span className="px-2.5 py-1 text-xs bg-[#123C33]/10 text-[#123C33] font-serif font-semibold border border-[#123C33]/20">
                      {c.region}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Capital City */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'العاصمة السياسية' : 'National Capital'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800 font-serif font-bold">
                    {c.capital}
                  </td>
                ))}
              </tr>

              {/* Government System */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'نظام الحكم' : 'Governance Structure'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    {c.governmentType}
                  </td>
                ))}
              </tr>

              {/* Head of State */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'رأس الدولة والحاكم' : 'Head of State'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-[#123C33] font-serif font-semibold">
                    {c.headOfState}
                  </td>
                ))}
              </tr>

              {/* Population & Bar */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'عدد السكان' : 'Population'}
                </td>
                {selectedCountries.map((c, i) => {
                  const percent = Math.round((c.population / maxPop) * 100);
                  return (
                    <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                      <div className="font-serif font-bold text-[#123C33] mb-1 text-base">
                        {(c.population / 1000000).toFixed(2)} Million
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 overflow-hidden">
                        <div className="bg-[#123C33] h-full" style={{ width: `${percent}%` }} />
                      </div>
                      <div className="text-[11px] text-stone-500 mt-1">{c.population.toLocaleString()} citizens</div>
                    </td>
                  );
                })}
              </tr>

              {/* Land Area */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'المساحة الإجمالية' : 'Total Land Area'}
                </td>
                {selectedCountries.map((c, i) => {
                  const percent = Math.round((c.areaKm2 / maxArea) * 100);
                  return (
                    <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                      <div className="font-serif font-bold text-[#123C33] mb-1 text-base">
                        {c.areaKm2.toLocaleString()} km²
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 overflow-hidden">
                        <div className="bg-[#C6A15B] h-full" style={{ width: `${percent}%` }} />
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* GDP Nominal */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'الناتج المحلي الإجمالي' : 'Nominal GDP'}
                </td>
                {selectedCountries.map((c, i) => {
                  const percent = Math.round((c.gdpNominalBillion / maxGdp) * 100);
                  return (
                    <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                      <div className="font-serif font-bold text-[#123C33] mb-1 text-base">
                        ${c.gdpNominalBillion.toLocaleString()} Billion
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 overflow-hidden">
                        <div className="bg-[#123C33] h-full" style={{ width: `${percent}%` }} />
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* GDP Per Capita */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'نصيب الفرد من الناتج' : 'GDP Per Capita'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800 font-serif font-bold text-base text-[#123C33]">
                    ${c.gdpPerCapita.toLocaleString()}
                  </td>
                ))}
              </tr>

              {/* Currency */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'العملة الوطنية' : 'Currency'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800 font-serif">
                    {c.currency} {c.currencySymbol && `(${c.currencySymbol})`}
                  </td>
                ))}
              </tr>

              {/* ISO Code & Calling Code */}
              <tr className="hover:bg-[#FAF9F5]">
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'الرمز الدولي ورمز الاتصال' : 'ISO & Calling Code'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800 font-mono text-xs">
                    {c.isoCode} · {c.callingCode}
                  </td>
                ))}
              </tr>

              {/* Actions / Full Encyclopedia */}
              <tr>
                <td className="p-4 sm:p-6 font-serif font-bold text-[#123C33] bg-[#FAF9F5]/60">
                  {language === 'ar' ? 'الملف التوثيقي الكامل' : 'Archival Record'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200">
                    <Link
                      href={`/countries/${c.slug}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-[#123C33] text-[#E5C98E] text-xs font-serif font-bold hover:bg-[#1a4f44] transition-colors shadow-sm"
                    >
                      {language === 'ar' ? 'عرض الموسوعة الكاملة' : 'View Encyclopedia →'}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { countriesData } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function ComparePage() {
  const { language, isRTL } = useLanguage();
  
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
      // Find first unselected country
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
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antique-gold-100 text-antique-gold-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>⚖️</span>
            <span>{language === 'ar' ? 'مصفوفة المقارنة الإحصائية' : 'Comparative Analytics Matrix'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'مقارنة دول العالم العربي' : 'Compare Arab Sovereign Nations'}
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'مقارنة إحصائية وجيوسياسية وتراثية متعددة الأبعاد بين الدول العربية جنباً إلى جنب مع مؤشرات المساحة والسكان والناتج المحلي ومواقع التراث العالمي.'
              : 'Multi-dimensional geopolitical, demographic, and historical comparison across Arab nations with normalized metrics, heritage indicators, and economic indices.'}
          </p>
        </div>

        {/* Matrix Controls */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
          <div className="text-xs text-stone-500 font-medium">
            {language === 'ar' 
              ? `عرض ${selectedCountries.length} دول للمقارنة (الحد الأقصى ٤)`
              : `Comparing ${selectedCountries.length} nations (max 4)`}
          </div>
          {selectedSlugs.length < 4 && (
            <button
              onClick={addColumn}
              className="px-4 py-2 bg-emerald-900 text-antique-gold-300 hover:bg-emerald-800 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>+</span>
              <span>{language === 'ar' ? 'إضافة دولة للمقارنة' : 'Add Nation'}</span>
            </button>
          )}
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-stone-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-sand-100/50">
                <th className="p-4 sm:p-6 w-1/5 min-w-[180px] text-xs uppercase font-bold tracking-wider text-emerald-950">
                  {language === 'ar' ? 'المؤشر / المعيار' : 'Metric / Dimension'}
                </th>
                {selectedCountries.map((country, idx) => (
                  <th key={idx} className="p-4 sm:p-6 min-w-[220px] text-left border-l border-stone-200">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <select
                        value={country.slug}
                        onChange={(e) => handleCountryChange(idx, e.target.value)}
                        className="w-full text-xs font-serif font-bold text-emerald-950 bg-white border border-stone-300 rounded-lg p-2 focus:outline-none focus:border-antique-gold-500 shadow-sm"
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
                          className="text-stone-400 hover:text-red-600 text-xs p-1"
                          title="Remove from comparison"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏛️</span>
                      <div>
                        <div className="font-serif font-bold text-base text-emerald-950 leading-tight">
                          {country.name}
                        </div>
                        <div className="text-xs font-arabic text-stone-500">
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
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'الإقليم الجغرافي' : 'Region'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    <span className="px-2 py-0.5 rounded text-xs bg-emerald-100 text-emerald-900 font-medium">
                      {c.region}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Capital City */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'العاصمة' : 'Capital'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    <div className="font-medium">{c.capital}</div>
                  </td>
                ))}
              </tr>

              {/* Government System */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'نظام الحكم' : 'Government System'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    {c.governmentType}
                  </td>
                ))}
              </tr>

              {/* Head of State */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'رأس الدولة' : 'Head of State'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800 font-medium text-emerald-950">
                    {c.headOfState}
                  </td>
                ))}
              </tr>

              {/* Population & Bar */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'عدد السكان' : 'Population'}
                </td>
                {selectedCountries.map((c, i) => {
                  const percent = Math.round((c.population / maxPop) * 100);
                  return (
                    <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                      <div className="font-bold text-emerald-950 mb-1">
                        {(c.population / 1000000).toFixed(2)} Million
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-800 h-full rounded-full" style={{ width: `${percent}%` }} />
                      </div>
                      <div className="text-[10px] text-stone-400 mt-1">{c.population.toLocaleString()} citizens</div>
                    </td>
                  );
                })}
              </tr>

              {/* Land Area */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'المساحة الإجمالية' : 'Total Land Area'}
                </td>
                {selectedCountries.map((c, i) => {
                  const percent = Math.round((c.areaKm2 / maxArea) * 100);
                  return (
                    <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                      <div className="font-bold text-emerald-950 mb-1">
                        {c.areaKm2.toLocaleString()} km²
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-antique-gold-600 h-full rounded-full" style={{ width: `${percent}%` }} />
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* GDP Nominal */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'الناتج المحلي الاسمي' : 'Nominal GDP'}
                </td>
                {selectedCountries.map((c, i) => {
                  const percent = Math.round((c.gdpNominalBillion / maxGdp) * 100);
                  return (
                    <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                      <div className="font-bold text-emerald-950 mb-1">
                        ${c.gdpNominalBillion.toLocaleString()} Billion
                      </div>
                      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-700 h-full rounded-full" style={{ width: `${percent}%` }} />
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* GDP Per Capita */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'نصيب الفرد من الناتج' : 'GDP Per Capita'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800 font-bold text-emerald-950">
                    ${c.gdpPerCapita.toLocaleString()}
                  </td>
                ))}
              </tr>

              {/* Currency */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'العملة الوطنية' : 'Currency'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    {c.currency} {c.currencySymbol && `(${c.currencySymbol})`}
                  </td>
                ))}
              </tr>

              {/* ISO Code & Calling Code */}
              <tr className="hover:bg-sand-50/50">
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'الرمز الدولي ورمز الاتصال' : 'ISO & Calling Code'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200 text-stone-800">
                    <span className="font-mono text-xs">{c.isoCode} · {c.callingCode}</span>
                  </td>
                ))}
              </tr>

              {/* Actions / Full Encyclopedia */}
              <tr>
                <td className="p-4 sm:p-6 font-semibold text-stone-700 bg-sand-50/30">
                  {language === 'ar' ? 'الملف التوثيقي الكامل' : 'Archival Record'}
                </td>
                {selectedCountries.map((c, i) => (
                  <td key={i} className="p-4 sm:p-6 border-l border-stone-200">
                    <Link
                      href={`/countries/${c.slug}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-emerald-900 text-antique-gold-300 text-xs font-semibold rounded-full hover:bg-emerald-800 transition-colors shadow-sm"
                    >
                      {language === 'ar' ? 'عرض الموسوعة الكاملة' : 'View Encyclopedia →'}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

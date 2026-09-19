'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  ArrowRightLeft, 
  ChevronDown, 
  Users, 
  MapPin, 
  DollarSign, 
  Building2, 
  Landmark, 
  Coins, 
  Globe2, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  Award,
  ShieldCheck,
  Percent,
  Compass,
  Crown
} from 'lucide-react';
import { countriesData, citiesData, Country, City } from '@/lib/data';
import { useLanguage } from '../LanguageProvider';

type CompareMode = 'countries' | 'cities';
type MetricCategory = 'economy' | 'demographics' | 'geography' | 'governance' | 'all';

export const CompareSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [mode, setMode] = useState<CompareMode>('countries');
  
  // Default open tab is 'Economy & Wealth'
  const [category, setCategory] = useState<MetricCategory>('economy');

  // Country Comparison State (Default 2 countries)
  const [countryA, setCountryA] = useState<string>('saudi-arabia');
  const [countryB, setCountryB] = useState<string>('united-arab-emirates');
  const [isRotating, setIsRotating] = useState<boolean>(false);

  // City Comparison State (Default 2 cities)
  const [cityA, setCityA] = useState<string>('riyadh');
  const [cityB, setCityB] = useState<string>('dubai');

  // Selected Objects
  const selectedCountryA = useMemo(() => {
    return countriesData.find((c) => c.slug === countryA) || countriesData[0];
  }, [countryA]);

  const selectedCountryB = useMemo(() => {
    return countriesData.find((c) => c.slug === countryB) || countriesData[1];
  }, [countryB]);

  const selectedCityA = useMemo(() => {
    return citiesData.find((c) => c.slug === cityA) || citiesData[0];
  }, [cityA]);

  const selectedCityB = useMemo(() => {
    return citiesData.find((c) => c.slug === cityB) || citiesData[1];
  }, [cityB]);

  // Swap function
  const handleSwap = () => {
    setIsRotating(true);
    if (mode === 'countries') {
      const temp = countryA;
      setCountryA(countryB);
      setCountryB(temp);
    } else {
      const temp = cityA;
      setCityA(cityB);
      setCityB(temp);
    }
    setTimeout(() => setIsRotating(false), 300);
  };

  // Maximum benchmark values for relative visual ratio bars
  const maxPop = Math.max(selectedCountryA.population, selectedCountryB.population, 1);
  const maxArea = Math.max(selectedCountryA.areaKm2, selectedCountryB.areaKm2, 1);
  const maxGdp = Math.max(selectedCountryA.gdpNominalBillion, selectedCountryB.gdpNominalBillion, 1);
  const maxGdpCapita = Math.max(selectedCountryA.gdpPerCapita, selectedCountryB.gdpPerCapita, 1);

  const maxCityPop = Math.max(selectedCityA.population, selectedCityB.population, 1);

  // Tab definitions: Economy first, All Metrics last
  const metricTabs = [
    { id: 'economy', label: 'Economy & Wealth', labelAr: 'الاقتصاد والناتج', icon: DollarSign },
    { id: 'demographics', label: 'Demographics & Society', labelAr: 'السكان والمجتمع', icon: Users },
    { id: 'geography', label: 'Land & Territory', labelAr: 'المساحة والجغرافيا', icon: MapPin },
    { id: 'governance', label: 'Governance & Capital', labelAr: 'نظام الحكم والعاصمة', icon: Landmark },
    { id: 'all', label: 'All Metrics', labelAr: 'كافة المؤشرات', icon: Scale },
  ];

  return (
    <section 
      id="compare-section"
      className="relative bg-[#FAF9F6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden"
      aria-label="Compare Arab Sovereign Nations"
    >
      {/* Expanded Container Width to max-w-6xl for generous, spacious presentation */}
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border/80 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D5CDBC] text-antiqueGold text-xs font-mono font-semibold uppercase tracking-wider mb-2 shadow-2xs">
              <Scale className="h-3.5 w-3.5" />
              <span>{language === 'ar' ? 'مقارنة مباشرة ثنائية' : 'Side-by-Side Comparison'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' 
                ? (mode === 'countries' ? 'مقارنة الدول العربية جنباً إلى جنب' : 'مقارنة الحواضر والمدن العربية')
                : (mode === 'countries' ? 'Compare Arab Sovereign Nations' : 'Compare Arab Metropolises & Cities')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-sans mt-2 max-w-3xl">
              {language === 'ar'
                ? 'تحليل إحصائي واقتصادي ومؤسسي دقيق ومباشر بين دولتين أو مدينتين مع مقارنة المؤشرات التنموية والمالية.'
                : 'Direct statistical, macroeconomic, and institutional metrics comparison between sovereign nations and key metropolises across the Arab world.'}
            </p>
          </div>

          {/* Mode Switcher: Countries vs Cities */}
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#D5CDBC] shadow-sm shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setMode('countries')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer ${
                mode === 'countries'
                  ? 'bg-forest text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {language === 'ar' ? 'الدول (٢٢)' : 'Countries (22)'}
            </button>
            <button
              type="button"
              onClick={() => setMode('cities')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-semibold transition-all cursor-pointer ${
                mode === 'cities'
                  ? 'bg-forest text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {language === 'ar' ? 'المدن' : 'Cities'}
            </button>
          </div>
        </div>

        {/* ================= GOOGLE-STYLE EXPANDED COMPARISON CARD ================= */}
        <div className="bg-gradient-to-b from-white via-[#FCFBF9] to-white rounded-3xl border border-[#D5CDBC]/90 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-12 mb-10 transition-all">
          
          {/* Dual Dropdown Selectors & Linked Highlight Cards with Central Swap */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-6 items-center mb-8">
            
            {/* Left Column: Side A */}
            <div className="lg:col-span-5 space-y-3">
              {/* Selector A */}
              <div className="relative">
                <select
                  value={mode === 'countries' ? countryA : cityA}
                  onChange={(e) => mode === 'countries' ? setCountryA(e.target.value) : setCityA(e.target.value)}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-2xl border border-gray-300 bg-white text-gray-900 font-sans font-semibold text-sm sm:text-base hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest cursor-pointer shadow-xs transition-all"
                >
                  {mode === 'countries'
                    ? countriesData.map((c) => (
                        <option key={c.slug} value={c.slug} disabled={c.slug === countryB}>
                          {c.name} ({language === 'ar' ? c.arabicName : c.isoCode})
                        </option>
                      ))
                    : citiesData.map((c) => (
                        <option key={c.slug} value={c.slug} disabled={c.slug === cityB}>
                          {c.name} ({c.country})
                        </option>
                      ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Linked Summary Card A */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#D5CDBC]/70 bg-gradient-to-br from-[#FAF9F6] to-white shadow-inner flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider font-bold">
                    {mode === 'countries' ? (language === 'ar' ? 'الناتج الاسمي' : 'Nominal GDP') : (language === 'ar' ? 'الدولة' : 'Country')}
                  </span>
                  <div className="font-sans font-bold text-xl sm:text-2xl text-forest mt-0.5">
                    {mode === 'countries' ? `$${selectedCountryA.gdpNominalBillion.toLocaleString()}B` : selectedCityA.country}
                  </div>
                  <span className="text-xs text-gray-500 font-sans">
                    {mode === 'countries' ? `${selectedCountryA.capital} (Capital)` : (selectedCityA.isCapital ? 'National Capital' : 'Major Metropolis')}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider font-bold">
                    {language === 'ar' ? 'السكان' : 'Population'}
                  </span>
                  <div className="font-sans font-bold text-lg sm:text-xl text-gray-900 mt-0.5">
                    {mode === 'countries' ? `${(selectedCountryA.population / 1_000_000).toFixed(2)}M` : `${(selectedCityA.population / 1_000_000).toFixed(2)}M`}
                  </div>
                  <span className="text-xs font-mono font-bold text-antiqueGold">
                    {mode === 'countries' ? selectedCountryA.currencySymbol || selectedCountryA.currency.split(' ')[0] : (selectedCityA.isCapital ? 'Capital' : 'Metropolis')}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Swap Button */}
            <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
              <button
                onClick={handleSwap}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-forest text-gray-700 hover:text-white border-2 border-[#D5CDBC] hover:border-forest shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                title="Swap Selection"
                aria-label="Swap Selection"
              >
                <ArrowRightLeft className={`w-5 h-5 transition-transform duration-300 ${isRotating ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Right Column: Side B */}
            <div className="lg:col-span-5 space-y-3">
              {/* Selector B */}
              <div className="relative">
                <select
                  value={mode === 'countries' ? countryB : cityB}
                  onChange={(e) => mode === 'countries' ? setCountryB(e.target.value) : setCityB(e.target.value)}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-2xl border border-gray-300 bg-white text-gray-900 font-sans font-semibold text-sm sm:text-base hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest cursor-pointer shadow-xs transition-all"
                >
                  {mode === 'countries'
                    ? countriesData.map((c) => (
                        <option key={c.slug} value={c.slug} disabled={c.slug === countryA}>
                          {c.name} ({language === 'ar' ? c.arabicName : c.isoCode})
                        </option>
                      ))
                    : citiesData.map((c) => (
                        <option key={c.slug} value={c.slug} disabled={c.slug === cityA}>
                          {c.name} ({c.country})
                        </option>
                      ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Linked Summary Card B */}
              <div className="p-4 sm:p-5 rounded-2xl border border-[#D5CDBC]/70 bg-gradient-to-br from-[#FAF9F6] to-white shadow-inner flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider font-bold">
                    {mode === 'countries' ? (language === 'ar' ? 'الناتج الاسمي' : 'Nominal GDP') : (language === 'ar' ? 'الدولة' : 'Country')}
                  </span>
                  <div className="font-sans font-bold text-xl sm:text-2xl text-antiqueGold mt-0.5">
                    {mode === 'countries' ? `$${selectedCountryB.gdpNominalBillion.toLocaleString()}B` : selectedCityB.country}
                  </div>
                  <span className="text-xs text-gray-500 font-sans">
                    {mode === 'countries' ? `${selectedCountryB.capital} (Capital)` : (selectedCityB.isCapital ? 'National Capital' : 'Major Metropolis')}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider font-bold">
                    {language === 'ar' ? 'السكان' : 'Population'}
                  </span>
                  <div className="font-sans font-bold text-lg sm:text-xl text-gray-900 mt-0.5">
                    {mode === 'countries' ? `${(selectedCountryB.population / 1_000_000).toFixed(2)}M` : `${(selectedCityB.population / 1_000_000).toFixed(2)}M`}
                  </div>
                  <span className="text-xs font-mono font-bold text-antiqueGold">
                    {mode === 'countries' ? selectedCountryB.currencySymbol || selectedCountryB.currency.split(' ')[0] : (selectedCityB.isCapital ? 'Capital' : 'Metropolis')}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Metric Category Tabs: Economy First, All Metrics at the End */}
          <div className="flex items-center gap-2 sm:gap-2.5 mb-8 overflow-x-auto pb-2 scrollbar-none">
            {metricTabs.map((tab) => {
              const isActive = category === tab.id;
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCategory(tab.id as MetricCategory)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-sans transition-all cursor-pointer whitespace-nowrap font-medium ${
                    isActive
                      ? 'bg-gray-900 text-white font-bold shadow-sm'
                      : 'bg-gray-100/80 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'ar' ? tab.labelAr : tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ================= DETAILED COMPARISON BREAKDOWN (THE RESULT) ================= */}
          {mode === 'countries' ? (
            <div className="space-y-6">
              
              {/* 1. Nominal GDP (Economy) */}
              {(category === 'economy' || category === 'all') && (
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-emerald-50 text-forest">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-gray-900">
                          {language === 'ar' ? 'الناتج المحلي الإجمالي الاسمي' : 'Nominal Gross Domestic Product'}
                        </h4>
                        <span className="text-[11px] font-mono text-gray-500">
                          {language === 'ar' ? 'بالمليار دولار أمريكي' : 'Nominal GDP in USD Billions'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-sans">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryA.name}</span>
                        <span className="font-bold text-forest text-base sm:text-lg">${selectedCountryA.gdpNominalBillion.toLocaleString()}B</span>
                      </div>
                      <span className="text-gray-300 font-light text-lg">vs</span>
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryB.name}</span>
                        <span className="font-bold text-antiqueGold text-base sm:text-lg">${selectedCountryB.gdpNominalBillion.toLocaleString()}B</span>
                      </div>
                    </div>
                  </div>

                  {/* Dual-Sided Proportional Bar */}
                  <div className="grid grid-cols-2 gap-2 h-3.5 bg-gray-100 rounded-full p-0.5 overflow-hidden">
                    <div className="flex justify-end">
                      <div 
                        className="bg-forest h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryA.gdpNominalBillion / maxGdp) * 100))}%` }}
                      />
                    </div>
                    <div className="flex justify-start">
                      <div 
                        className="bg-antiqueGold h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryB.gdpNominalBillion / maxGdp) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 2. GDP Per Capita (Economy) */}
              {(category === 'economy' || category === 'all') && (
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-amber-50 text-antiqueGold">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-gray-900">
                          {language === 'ar' ? 'متوسط نصيب الفرد من الناتج' : 'GDP Per Capita Income'}
                        </h4>
                        <span className="text-[11px] font-mono text-gray-500">
                          {language === 'ar' ? 'الدخل السنوي للفرد بالدولار' : 'Annual Income per Citizen (USD)'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-sans">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryA.name}</span>
                        <span className="font-bold text-forest text-base sm:text-lg">${selectedCountryA.gdpPerCapita.toLocaleString()}</span>
                      </div>
                      <span className="text-gray-300 font-light text-lg">vs</span>
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryB.name}</span>
                        <span className="font-bold text-antiqueGold text-base sm:text-lg">${selectedCountryB.gdpPerCapita.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 h-3.5 bg-gray-100 rounded-full p-0.5 overflow-hidden">
                    <div className="flex justify-end">
                      <div 
                        className="bg-forest h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryA.gdpPerCapita / maxGdpCapita) * 100))}%` }}
                      />
                    </div>
                    <div className="flex justify-start">
                      <div 
                        className="bg-antiqueGold h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryB.gdpPerCapita / maxGdpCapita) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Total Population (Demographics) */}
              {(category === 'demographics' || category === 'all') && (
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-gray-900">
                          {language === 'ar' ? 'إجمالي التعداد السكاني' : 'Sovereign Population'}
                        </h4>
                        <span className="text-[11px] font-mono text-gray-500">
                          {language === 'ar' ? 'التعداد الموثق بالأمم المتحدة' : 'UN Verified Demographic Baseline'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-sans">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryA.name}</span>
                        <span className="font-bold text-forest text-base sm:text-lg">{(selectedCountryA.population / 1_000_000).toFixed(2)}M</span>
                      </div>
                      <span className="text-gray-300 font-light text-lg">vs</span>
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryB.name}</span>
                        <span className="font-bold text-antiqueGold text-base sm:text-lg">{(selectedCountryB.population / 1_000_000).toFixed(2)}M</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 h-3.5 bg-gray-100 rounded-full p-0.5 overflow-hidden">
                    <div className="flex justify-end">
                      <div 
                        className="bg-forest h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryA.population / maxPop) * 100))}%` }}
                      />
                    </div>
                    <div className="flex justify-start">
                      <div 
                        className="bg-antiqueGold h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryB.population / maxPop) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Land Area (Geography) */}
              {(category === 'geography' || category === 'all') && (
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-gray-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-gray-900">
                          {language === 'ar' ? 'المساحة الجغرافية الكلية' : 'Total Territorial Land Area'}
                        </h4>
                        <span className="text-[11px] font-mono text-gray-500">
                          {language === 'ar' ? 'بالكيلومتر المربع' : 'Square Kilometers (km²)'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-sans">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryA.name}</span>
                        <span className="font-bold text-forest text-base sm:text-lg">{selectedCountryA.areaKm2.toLocaleString()} km²</span>
                      </div>
                      <span className="text-gray-300 font-light text-lg">vs</span>
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 block">{selectedCountryB.name}</span>
                        <span className="font-bold text-antiqueGold text-base sm:text-lg">{selectedCountryB.areaKm2.toLocaleString()} km²</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 h-3.5 bg-gray-100 rounded-full p-0.5 overflow-hidden">
                    <div className="flex justify-end">
                      <div 
                        className="bg-forest h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryA.areaKm2 / maxArea) * 100))}%` }}
                      />
                    </div>
                    <div className="flex justify-start">
                      <div 
                        className="bg-antiqueGold h-full rounded-full transition-all duration-700 shadow-2xs"
                        style={{ width: `${Math.max(8, Math.round((selectedCountryB.areaKm2 / maxArea) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Qualitative Governance & Capital Matrix */}
              {(category === 'governance' || category === 'all') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card A Details */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-serif font-bold text-lg text-gray-900">
                          {selectedCountryA.name}
                        </h4>
                        <span className="text-xs font-arabicHeading font-semibold text-antiqueGold">
                          {selectedCountryA.arabicName}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-gray-200 text-xs font-mono font-bold text-forest">
                        {selectedCountryA.region}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs font-sans">
                      <div className="flex items-center justify-between py-1 border-b border-gray-50 text-gray-600">
                        <span>{language === 'ar' ? 'العاصمة الرسمية:' : 'National Capital:'}</span>
                        <span className="font-bold text-gray-900">{selectedCountryA.capital}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-gray-50 text-gray-600">
                        <span>{language === 'ar' ? 'العملة الوطنية:' : 'Official Currency:'}</span>
                        <span className="font-bold text-gray-900">{selectedCountryA.currency}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-gray-50 text-gray-600">
                        <span>{language === 'ar' ? 'نظام الحكم:' : 'Government System:'}</span>
                        <span className="font-bold text-gray-900">{selectedCountryA.governmentType}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 text-gray-600">
                        <span>{language === 'ar' ? 'سنة التأسيس / التوحيد:' : 'Founding / Union Year:'}</span>
                        <span className="font-bold text-forest">{selectedCountryA.foundingYear || 'Historic'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card B Details */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-serif font-bold text-lg text-gray-900">
                          {selectedCountryB.name}
                        </h4>
                        <span className="text-xs font-arabicHeading font-semibold text-antiqueGold">
                          {selectedCountryB.arabicName}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-gray-200 text-xs font-mono font-bold text-antiqueGold">
                        {selectedCountryB.region}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs font-sans">
                      <div className="flex items-center justify-between py-1 border-b border-gray-50 text-gray-600">
                        <span>{language === 'ar' ? 'العاصمة الرسمية:' : 'National Capital:'}</span>
                        <span className="font-bold text-gray-900">{selectedCountryB.capital}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-gray-50 text-gray-600">
                        <span>{language === 'ar' ? 'العملة الوطنية:' : 'Official Currency:'}</span>
                        <span className="font-bold text-gray-900">{selectedCountryB.currency}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-gray-50 text-gray-600">
                        <span>{language === 'ar' ? 'نظام الحكم:' : 'Government System:'}</span>
                        <span className="font-bold text-gray-900">{selectedCountryB.governmentType}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 text-gray-600">
                        <span>{language === 'ar' ? 'سنة التأسيس / التوحيد:' : 'Founding / Union Year:'}</span>
                        <span className="font-bold text-forest">{selectedCountryB.foundingYear || 'Historic'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* City Comparison Breakdown */
            <div className="space-y-6">
              
              {/* City Population Row */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-gray-900">
                        {language === 'ar' ? 'سكان الحاضرة الكبرى' : 'Metropolitan Urban Population'}
                      </h4>
                      <span className="text-[11px] font-mono text-gray-500">
                        {language === 'ar' ? 'التعداد الحضري للمدينة' : 'Municipal Census Data'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm font-sans">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] font-mono text-gray-400 block">{selectedCityA.name}</span>
                      <span className="font-bold text-forest text-base sm:text-lg">{(selectedCityA.population / 1_000_000).toFixed(2)}M</span>
                    </div>
                    <span className="text-gray-300 font-light text-lg">vs</span>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 block">{selectedCityB.name}</span>
                      <span className="font-bold text-antiqueGold text-base sm:text-lg">{(selectedCityB.population / 1_000_000).toFixed(2)}M</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 h-3.5 bg-gray-100 rounded-full p-0.5 overflow-hidden">
                  <div className="flex justify-end">
                    <div 
                      className="bg-forest h-full rounded-full transition-all duration-700 shadow-2xs"
                      style={{ width: `${Math.max(8, Math.round((selectedCityA.population / maxCityPop) * 100))}%` }}
                    />
                  </div>
                  <div className="flex justify-start">
                    <div 
                      className="bg-antiqueGold h-full rounded-full transition-all duration-700 shadow-2xs"
                      style={{ width: `${Math.max(8, Math.round((selectedCityB.population / maxCityPop) * 100))}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* City Qualitative Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* City A Card */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-gray-900">
                        {selectedCityA.name}
                      </h4>
                      <span className="text-xs font-arabicHeading font-semibold text-antiqueGold">
                        {selectedCityA.arabicName}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-gray-200 text-xs font-mono font-bold text-forest">
                      {selectedCityA.country}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs font-sans">
                    <div>
                      <span className="block text-gray-500 text-[11px] mb-1 font-semibold">{language === 'ar' ? 'المرتكز الاقتصادي والصناعي:' : 'Economic & Commercial Anchor:'}</span>
                      <p className="font-medium text-gray-800 leading-relaxed bg-[#FAF9F6] p-3 rounded-xl border border-gray-100">{selectedCityA.economy}</p>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-[11px] mb-1 font-semibold">{language === 'ar' ? 'أبرز الأحياء والمعالم:' : 'Key Historic & Urban Districts:'}</span>
                      <p className="font-medium text-gray-800 bg-[#FAF9F6] p-3 rounded-xl border border-gray-100">{selectedCityA.districts ? selectedCityA.districts.join(' · ') : 'Central & Historic'}</p>
                    </div>
                  </div>
                </div>

                {/* City B Card */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-gray-900">
                        {selectedCityB.name}
                      </h4>
                      <span className="text-xs font-arabicHeading font-semibold text-antiqueGold">
                        {selectedCityB.arabicName}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-gray-200 text-xs font-mono font-bold text-antiqueGold">
                      {selectedCityB.country}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs font-sans">
                    <div>
                      <span className="block text-gray-500 text-[11px] mb-1 font-semibold">{language === 'ar' ? 'المرتكز الاقتصادي والصناعي:' : 'Economic & Commercial Anchor:'}</span>
                      <p className="font-medium text-gray-800 leading-relaxed bg-[#FAF9F6] p-3 rounded-xl border border-gray-100">{selectedCityB.economy}</p>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-[11px] mb-1 font-semibold">{language === 'ar' ? 'أبرز الأحياء والمعالم:' : 'Key Historic & Urban Districts:'}</span>
                      <p className="font-medium text-gray-800 bg-[#FAF9F6] p-3 rounded-xl border border-gray-100">{selectedCityB.districts ? selectedCityB.districts.join(' · ') : 'Central & Historic'}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Footer Navigation & Full Dossier Links */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'ar' ? 'بيانات حكومية موثقة من الهيئات الإحصائية المركزية' : 'Verified sovereign intelligence from Central Statistical Authorities'}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href={mode === 'countries' ? `/countries/${selectedCountryA.slug}` : `/cities`}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold font-sans text-center transition-colors cursor-pointer"
              >
                {language === 'ar' ? `سجل ${selectedCountryA.arabicName} الكامل` : `View ${selectedCountryA.name} Dossier`}
              </Link>
              <Link
                href={mode === 'countries' ? `/countries/${selectedCountryB.slug}` : `/cities`}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-forest hover:bg-[#102D26] text-white text-xs font-bold font-sans text-center transition-colors cursor-pointer"
              >
                {language === 'ar' ? `سجل ${selectedCountryB.arabicName} الكامل` : `View ${selectedCountryB.name} Dossier`}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

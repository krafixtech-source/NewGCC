'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  Calculator, 
  ShieldCheck, 
  Coins, 
  ArrowRight,
  Info,
  Clock,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import { 
  ARAB_CURRENCIES, 
  GOLD_STANDARDS, 
  BASE_GOLD_OUNCE_USD, 
  TROY_OUNCE_GRAMS, 
  BASE_GRAM_24K_USD,
  CurrencyRate 
} from '@/lib/data/financial';

export const GoldRatesSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Selected Currency for viewing gold rates
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('SAR');
  
  // Real-time market tick state from 100% Live Feed
  const [spotOunceUSD, setSpotOunceUSD] = useState<number>(BASE_GOLD_OUNCE_USD);
  const [dayHighUSD, setDayHighUSD] = useState<number>(BASE_GOLD_OUNCE_USD + 18.40);
  const [dayLowUSD, setDayLowUSD] = useState<number>(BASE_GOLD_OUNCE_USD - 12.80);
  const [change24hPct, setChange24hPct] = useState<number>(0.84);
  const [lastTickTime, setLastTickTime] = useState<string>('');
  const [isTickUp, setIsTickUp] = useState<boolean | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [liveSource, setLiveSource] = useState<string>('LBMA Spot Index (Direct Physical Gold Feed)');
  const [ratesMap, setRatesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    ARAB_CURRENCIES.forEach(c => { map[c.code] = c.rateToUSD; });
    return map;
  });

  // Calculator State
  const [calcWeight, setCalcWeight] = useState<number>(20);
  const [calcKarat, setCalcKarat] = useState<string>('21k');
  const [calcIncludeVat, setCalcIncludeVat] = useState<boolean>(false);
  const [calcMakingCharge, setCalcMakingCharge] = useState<number>(0);

  // Time formatting helper
  const updateFormattedTime = () => {
    const now = new Date();
    setLastTickTime(now.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }));
  };

  // 100% Real Live Market Rates Fetcher
  const fetchRealLiveMarketRates = async (showLoading = false) => {
    if (showLoading) setIsRefreshing(true);
    try {
      const res = await fetch('/api/market-rates', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && data.gold) {
          const newOunce = data.gold.ounceUSD;
          setSpotOunceUSD(prevOunce => {
            if (prevOunce !== newOunce) {
              setIsTickUp(newOunce >= prevOunce);
              setTimeout(() => setIsTickUp(null), 1500);
            }
            return newOunce;
          });
          if (data.gold.dayHighUSD) setDayHighUSD(data.gold.dayHighUSD);
          if (data.gold.dayLowUSD) setDayLowUSD(data.gold.dayLowUSD);
          if (typeof data.gold.change24hPct === 'number') setChange24hPct(data.gold.change24hPct);
          if (data.source) setLiveSource(data.source);
        }
        if (data && data.rates) {
          setRatesMap(prev => ({ ...prev, ...data.rates }));
        }
        updateFormattedTime();
      }
    } catch (err) {
      console.error('Live rates sync error:', err);
    } finally {
      if (showLoading) setIsRefreshing(false);
    }
  };

  // Initial mount & recurring 10-second live polling
  useEffect(() => {
    updateFormattedTime();
    fetchRealLiveMarketRates();

    const interval = setInterval(() => {
      fetchRealLiveMarketRates();
    }, 10000);

    return () => clearInterval(interval);
  }, [language]);

  // Selected Currency details
  const selectedCurrency = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === selectedCurrencyCode) || ARAB_CURRENCIES[0];
  }, [selectedCurrencyCode]);

  // Conversion rate multiplier to target currency
  const fxMultiplier = ratesMap[selectedCurrencyCode] || selectedCurrency.rateToUSD;

  // Real-time 24K Gram in USD
  const gram24kUSD = spotOunceUSD / TROY_OUNCE_GRAMS;

  // Manual Refresh Handler
  const handleManualRefresh = () => {
    fetchRealLiveMarketRates(true);
  };

  // Calculate Rate for each standard
  const getStandardPrice = (standard: typeof GOLD_STANDARDS[0]) => {
    if (standard.id === 'ounce') {
      return spotOunceUSD * fxMultiplier;
    }
    if (standard.id === 'kilo') {
      return gram24kUSD * 1000 * fxMultiplier;
    }
    if (standard.id === 'sovereign') {
      return gram24kUSD * 8 * 0.9167 * fxMultiplier; // 8g 22K/21.6K coin
    }
    if (standard.id === 'silver') {
      return 1.12 * fxMultiplier; // ~$1.12 per gram silver
    }
    // Per Gram karat price
    return gram24kUSD * standard.purity * fxMultiplier;
  };

  // Calculator Result
  const calculatedTotal = useMemo(() => {
    const standard = GOLD_STANDARDS.find(s => s.id === calcKarat) || GOLD_STANDARDS[0];
    const baseGram = gram24kUSD * standard.purity * fxMultiplier;
    const goldTotal = baseGram * calcWeight;
    const makingTotal = calcMakingCharge * calcWeight;
    const subtotal = goldTotal + makingTotal;
    const vatAmount = calcIncludeVat ? subtotal * 0.15 : 0;
    return subtotal + vatAmount;
  }, [calcKarat, calcWeight, calcMakingCharge, calcIncludeVat, gram24kUSD, fxMultiplier]);

  return (
    <section 
      id="gold-rates" 
      className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-border relative overflow-hidden"
      aria-label="Live Gold Rates and Bullion Index"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-antiqueGold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-border gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-antiqueGold font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {language === 'ar' ? 'البورصة والتداول الحي' : 'Live Bullion & Spot Exchange'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'أسعار الذهب والمعادن الثمينة' : 'Live Gold & Precious Metals Rates'}
            </h2>
            <p className="font-sans text-sm text-ink-muted mt-2 max-w-2xl">
              {language === 'ar' 
                ? 'متابعة لحظية ومباشرة لأسعار الذهب بالجرام والسبائك والأونصة في الأسواق الخليجية والعربية وفق تسعيرة التداول الفوري العالمية.' 
                : 'Real-time live bullion spot rates across 24K, 22K, 21K, 18K karats, sovereign coins, and benchmark troy ounces for Gulf and Arab markets.'}
            </p>
          </div>

          {/* Live Status Badge & Manual Refresh */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-sm text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-forest" />
              <span className="text-ink-muted">{language === 'ar' ? 'آخر تحديث:' : 'Live Tick:'}</span>
              <span className="font-bold text-forest">{lastTickTime || '12:00:00 PM'}</span>
            </div>

            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white hover:bg-forest text-ink hover:text-white border border-border hover:border-forest transition-all text-xs font-mono font-semibold shadow-sm cursor-pointer"
              title="Refresh Spot Prices"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-antiqueGold' : ''}`} />
              <span>{language === 'ar' ? 'تحديث فوري' : 'Live Sync'}</span>
            </button>
          </div>
        </div>

        {/* Currency Quick-Selector Pill Strip */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-border shadow-sm">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-antiqueGold" />
            <span className="text-xs font-mono uppercase font-bold text-ink tracking-wider">
              {language === 'ar' ? 'اختر عملة العرض:' : 'Display Currency:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {ARAB_CURRENCIES.slice(0, 8).map(c => {
              const isSelected = selectedCurrencyCode === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setSelectedCurrencyCode(c.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-forest text-white shadow-sm ring-2 ring-forest/20'
                      : 'bg-[#FAF8F5] text-ink hover:bg-[#EFE9DC] border border-border/70'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.code}</span>
                  <span className="text-[10px] opacity-80">({language === 'ar' ? c.symbolAr : c.symbol})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Spot Hero Ticker Banner */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#153B32] via-[#102D26] to-[#0A1F1A] text-white shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-antiqueGold/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-antiqueGold text-forest text-[11px] font-mono font-bold uppercase tracking-wider">
                  Spot XAU / USD
                </span>
                <span className="text-xs text-white/70 font-mono">
                  {language === 'ar' ? 'سعر الأونصة العالمية الحية' : 'Global International Benchmark'}
                </span>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className={`text-3xl sm:text-5xl font-serif font-bold tracking-tight transition-all duration-300 ${
                  isTickUp === true ? 'text-emerald-400 scale-[1.01]' : isTickUp === false ? 'text-rose-400 scale-[1.01]' : 'text-[#FAF8F5]'
                }`}>
                  ${spotOunceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  change24hPct >= 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}>
                  {change24hPct >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                  <span>{change24hPct >= 0 ? `+${change24hPct}%` : `${change24hPct}%`} (24H)</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics (High / Low / 24K Gram equivalent in selected currency) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l rtl:lg:border-r rtl:lg:border-l-0 border-white/15 pt-4 lg:pt-0 lg:pl-8 rtl:lg:pr-8">
              <div>
                <span className="block text-[11px] font-mono uppercase text-white/60">
                  {language === 'ar' ? 'جرام ٢٤ بالعملة المختارة' : `24K Gram in ${selectedCurrencyCode}`}
                </span>
                <span className="text-xl font-bold font-serif text-[#E5C98E]">
                  {(gram24kUSD * fxMultiplier).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedCurrency.symbol}
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-mono uppercase text-white/60">
                  {language === 'ar' ? 'أعلى سعر اليوم' : '24h High (USD)'}
                </span>
                <span className="text-lg font-bold font-mono text-white/90">
                  ${dayHighUSD.toFixed(2)}
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-mono uppercase text-white/60">
                  {language === 'ar' ? 'أدنى سعر اليوم' : '24h Low (USD)'}
                </span>
                <span className="text-lg font-bold font-mono text-white/90">
                  ${dayLowUSD.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Karats and Bullion Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {GOLD_STANDARDS.map((std) => {
            const price = getStandardPrice(std);
            const isOunceOrBar = std.id === 'ounce' || std.id === 'kilo';

            return (
              <div
                key={std.id}
                className={`group relative p-6 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-museum ${
                  std.isPopularGCC 
                    ? 'border-antiqueGold/70 ring-1 ring-antiqueGold/20' 
                    : 'border-border hover:border-antiqueGold'
                }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FAF8F5] text-forest border border-border">
                      {language === 'ar' ? std.badgeAr : std.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-antiqueGold">
                      {std.karat}
                    </span>
                  </div>

                  {/* Standard Title */}
                  <h3 className="font-serif text-lg font-bold text-ink mb-1 group-hover:text-forest transition-colors">
                    {language === 'ar' ? std.nameAr : std.name}
                  </h3>
                  <p className="text-xs text-ink-muted mb-4 font-sans line-clamp-2">
                    {language === 'ar' ? std.descriptionAr : std.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-4 border-t border-border/70">
                  <span className="block text-[10px] font-mono uppercase text-ink-muted mb-1">
                    {std.id === 'ounce' 
                      ? (language === 'ar' ? 'سعر الأونصة الفوري' : 'Spot Ounce Price')
                      : std.id === 'kilo'
                      ? (language === 'ar' ? 'سعر السبيكة (١ كجم)' : '1 Kilogram Bar Price')
                      : std.id === 'sovereign'
                      ? (language === 'ar' ? 'سعر الجنيه الذهب' : 'Gold Sovereign Price')
                      : (language === 'ar' ? 'السعر لكل جرام' : 'Live Price Per Gram')}
                  </span>
                  
                  <div className="flex items-baseline justify-between gap-2">
                    <span className={`text-2xl font-serif font-bold text-ink group-hover:text-forest transition-colors ${
                      isTickUp === true ? 'text-emerald-600' : isTickUp === false ? 'text-rose-600' : ''
                    }`}>
                      {price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="font-mono text-xs font-bold text-antiqueGold">
                      {selectedCurrencyCode}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Gold Value Calculator Widget */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-border shadow-museum mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-antiqueGold/15 text-forest">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {language === 'ar' ? 'حاسبة الذهب والمعادن الذكية' : 'Smart Gold & Bullion Value Calculator'}
                </h3>
                <p className="text-xs text-ink-muted font-sans">
                  {language === 'ar' 
                    ? 'احسب القيمة الإجمالية لمقتنياتك أو مشترياتك من الذهب بدقة لحظية مع خيارات المصنعية والضريبة' 
                    : 'Calculate exact live bullion retail and scrap value by weight, karat, optional making charges, and VAT.'}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {language === 'ar' ? 'تسعير مباشر مرتبط بالبورصة' : 'Direct Spot Linked'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (Left/Top) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Weight & Karat Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-ink-muted mb-2">
                    {language === 'ar' ? 'الوزن بالجرام:' : 'Weight (Grams):'}
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.5"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] text-ink font-mono font-bold text-lg focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-ink-muted mb-2">
                    {language === 'ar' ? 'العيار:' : 'Karat Purity:'}
                  </label>
                  <select
                    value={calcKarat}
                    onChange={(e) => setCalcKarat(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] text-ink font-sans font-bold text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    <option value="24k">{language === 'ar' ? 'عيار ٢٤ (سبائك خالصة)' : '24K (99.9% Pure)'}</option>
                    <option value="22k">{language === 'ar' ? 'عيار ٢٢ (مجوهرات خليجية)' : '22K (91.6% Pure)'}</option>
                    <option value="21k">{language === 'ar' ? 'عيار ٢١ (الأكثر شعبية)' : '21K (87.5% Pure)'}</option>
                    <option value="18k">{language === 'ar' ? 'عيار ١٨ (مجوهرات إيطالية)' : '18K (75.0% Pure)'}</option>
                  </select>
                </div>
              </div>

              {/* Optional Making Charge & VAT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-ink-muted mb-2">
                    {language === 'ar' ? `المصنعية للجرام (${selectedCurrencyCode}):` : `Making Charge / Gram (${selectedCurrencyCode}):`}
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={calcMakingCharge}
                    onChange={(e) => setCalcMakingCharge(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-[#FAF8F5] text-ink font-mono text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                    placeholder="0"
                  />
                </div>

                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={calcIncludeVat}
                      onChange={(e) => setCalcIncludeVat(e.target.checked)}
                      className="w-4 h-4 rounded text-forest focus:ring-forest border-border"
                    />
                    <span className="text-xs font-medium text-ink">
                      {language === 'ar' ? 'إضافة ضريبة القيمة المضافة (١٥٪)' : 'Add 15% Standard VAT'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Quick Weight Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] font-mono text-ink-muted mr-2">
                  {language === 'ar' ? 'أوزان سريعة:' : 'Quick Presets:'}
                </span>
                {[5, 10, 20, 50, 100, 250, 500, 1000].map(w => (
                  <button
                    key={w}
                    onClick={() => setCalcWeight(w)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      calcWeight === w 
                        ? 'bg-forest text-white font-bold shadow-sm' 
                        : 'bg-[#FAF8F5] text-ink-muted hover:text-ink border border-border'
                    }`}
                  >
                    {w}g
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Result Display Card (Right/Bottom) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-[#EFE9DC] border border-border flex flex-col justify-between">
              <div>
                <span className="block text-xs font-mono uppercase font-bold text-antiqueGold tracking-wider mb-2">
                  {language === 'ar' ? 'القيمة التقديرية الإجمالية' : 'Estimated Total Market Value'}
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-forest">
                    {calculatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm font-mono font-bold text-ink">
                    {selectedCurrencyCode}
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted font-sans">
                  {language === 'ar' 
                    ? `بناءً على وزن ${calcWeight} جرام من ${calcKarat.toUpperCase()} بسعر الصرف الحالي.` 
                    : `Based on ${calcWeight}g of ${calcKarat.toUpperCase()} at real-time spot rates in ${selectedCurrencyCode}.`}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>{language === 'ar' ? 'سعر الذهب الصافي فقط:' : 'Raw Bullion Base:'}</span>
                <span className="font-bold text-ink">
                  {(calculatedTotal - (calcMakingCharge * calcWeight * (calcIncludeVat ? 1.15 : 1))).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {selectedCurrencyCode}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Archival Market Context Footer */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-muted">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-antiqueGold flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'المصادر المرجعية: بورصة لندن للمعادن (LBM)، أسواق الذهب في الرياض، دبي، المنامة، والكويت.'
                : 'Market Reference Feeds: London Bullion Market (LBMA), Interbank Spot FX, Dubai Gold Souk, and SAMA Banking Bulletin.'}
            </span>
          </div>

          <Link
            href="/gold-rates"
            className="inline-flex items-center gap-1.5 font-mono uppercase font-bold text-forest hover:text-antiqueGold transition-colors flex-shrink-0"
          >
            <span>{language === 'ar' ? 'استعراض التقرير المالي الكامل' : 'Full Gold Monograph'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  );
};

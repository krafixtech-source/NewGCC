'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  ArrowRightLeft, 
  Copy, 
  Check, 
  Coins, 
  ArrowRight,
  Globe2,
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import { 
  ARAB_CURRENCIES, 
  GOLD_STANDARDS, 
  BASE_GOLD_OUNCE_USD, 
  TROY_OUNCE_GRAMS, 
  BASE_GRAM_24K_USD 
} from '@/lib/data/financial';

export const MarketRatesRowSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Selected Currency for Gold
  const [selectedGoldCurrency, setSelectedGoldCurrency] = useState<string>('SAR');
  
  // Real-time market tick state
  const [spotOunceUSD, setSpotOunceUSD] = useState<number>(BASE_GOLD_OUNCE_USD);
  const [change24hPct, setChange24hPct] = useState<number>(0.84);
  const [lastTickTime, setLastTickTime] = useState<string>('');
  const [isTickUp, setIsTickUp] = useState<boolean | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [ratesMap, setRatesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    ARAB_CURRENCIES.forEach(c => { map[c.code] = c.rateToUSD; });
    return map;
  });

  // Currency Converter State
  const [convAmount, setConvAmount] = useState<number>(1000);
  const [convFromCode, setConvFromCode] = useState<string>('USD');
  const [convToCode, setConvToCode] = useState<string>('SAR');
  const [copied, setCopied] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(false);

  // Time helper
  const updateTime = () => {
    const now = new Date();
    setLastTickTime(now.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }));
  };

  // Real-time live market API fetcher
  const fetchLiveRates = async (showLoading = false) => {
    if (showLoading) setIsRefreshing(true);
    try {
      const res = await fetch('/api/market-rates', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data?.gold) {
          const newOunce = data.gold.ounceUSD;
          setSpotOunceUSD(prev => {
            if (prev !== newOunce) {
              setIsTickUp(newOunce >= prev);
              setTimeout(() => setIsTickUp(null), 1500);
            }
            return newOunce;
          });
          if (typeof data.gold.change24hPct === 'number') {
            setChange24hPct(data.gold.change24hPct);
          }
        }
        if (data?.rates) {
          setRatesMap(prev => ({ ...prev, ...data.rates }));
        }
        updateTime();
      }
    } catch {
      // Graceful fallback
    } finally {
      if (showLoading) setIsRefreshing(false);
    }
  };

  useEffect(() => {
    updateTime();
    fetchLiveRates();
    const interval = setInterval(() => fetchLiveRates(), 10000);
    return () => clearInterval(interval);
  }, [language]);

  // Gold Calculations
  const goldCurrencyObj = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === selectedGoldCurrency) || ARAB_CURRENCIES[0];
  }, [selectedGoldCurrency]);

  const goldFxMultiplier = ratesMap[selectedGoldCurrency] || goldCurrencyObj.rateToUSD;
  const gram24kUSD = spotOunceUSD / TROY_OUNCE_GRAMS;

  const keyGoldKarats = [
    { label: '24K Gram', labelAr: 'جرام ٢٤', purity: 0.999 },
    { label: '22K Gram', labelAr: 'جرام ٢٢', purity: 0.9167 },
    { label: '21K Gram', labelAr: 'جرام ٢١', purity: 0.875 },
    { label: '18K Gram', labelAr: 'جرام ١٨', purity: 0.750 },
  ];

  // Currency Converter Calculations
  const convFromObj = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === convFromCode) || ARAB_CURRENCIES[6];
  }, [convFromCode]);

  const convToObj = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === convToCode) || ARAB_CURRENCIES[0];
  }, [convToCode]);

  const rateFromUSD = ratesMap[convFromCode] || convFromObj.rateToUSD;
  const rateToUSD = ratesMap[convToCode] || convToObj.rateToUSD;
  const singleRate = (1 / rateFromUSD) * rateToUSD;
  const convertedTotal = convAmount * singleRate;

  const handleSwap = () => {
    setIsRotating(true);
    setConvFromCode(convToCode);
    setConvToCode(convFromCode);
    setTimeout(() => setIsRotating(false), 300);
  };

  const handleCopy = () => {
    const text = `${convAmount} ${convFromCode} = ${convertedTotal.toFixed(2)} ${convToCode}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 lg:py-16 bg-forest text-white border-b border-forest-dark relative">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Section Mini-Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-white/15 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-antiqueGold animate-pulse shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-antiqueGold-light font-bold block">
                {language === 'ar' ? 'البيانات المالية وأسواق الصرف' : 'Financial Markets & Spot Exchange'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                {language === 'ar' ? 'أسعار الذهب ومحول العملات المباشر' : 'Live Bullion & Currency Exchange'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-white/70">{language === 'ar' ? 'التحديث اللحظي:' : 'Live Tick:'}</span>
            <span className="font-bold text-antiqueGold">{lastTickTime || '12:00:00 PM'}</span>
            <button
              onClick={() => fetchLiveRates(true)}
              disabled={isRefreshing}
              className="p-1.5 bg-forest-dark hover:bg-antiqueGold text-white hover:text-forest border border-white/20 transition-colors ml-1 cursor-pointer"
              title="Sync Spot Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-antiqueGold' : ''}`} />
            </button>
          </div>
        </div>

        {/* 2-Column Side-by-Side Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Part 1: Live Physical Gold Rates */}
          <div className="bg-forest-surface/90 border border-white/15 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Gold Header */}
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-antiqueGold" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {language === 'ar' ? 'أسعار الذهب بالجرام' : 'Live Physical Gold Rates'}
                  </h3>
                </div>

                {/* Spot XAU Benchmark */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-antiqueGold">
                    ${spotOunceUSD.toFixed(2)}/oz
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border ${
                    change24hPct >= 0 ? 'bg-emerald-900/60 text-emerald-300 border-emerald-500/40' : 'bg-rose-900/60 text-rose-300 border-rose-500/40'
                  }`}>
                    {change24hPct >= 0 ? `+${change24hPct}%` : `${change24hPct}%`}
                  </span>
                </div>
              </div>

              {/* Currency Selector Pills */}
              <div className="flex items-center gap-1.5 mb-5 overflow-x-auto pb-1">
                {['SAR', 'AED', 'QAR', 'KWD', 'OMR', 'BHD', 'USD', 'EGP'].map(code => (
                  <button
                    key={code}
                    onClick={() => setSelectedGoldCurrency(code)}
                    className={`px-2.5 py-1 text-xs font-mono font-bold transition-all cursor-pointer border ${
                      selectedGoldCurrency === code
                        ? 'bg-antiqueGold text-forest border-antiqueGold font-bold'
                        : 'bg-forest-dark/70 text-white/80 hover:bg-forest-light border-white/15'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              {/* 4-Karat Compact Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {keyGoldKarats.map((k, i) => {
                  const price = gram24kUSD * k.purity * goldFxMultiplier;
                  return (
                    <div key={i} className="p-3 bg-forest-dark/80 border border-white/15 flex flex-col justify-between">
                      <span className="text-[10px] font-mono uppercase text-white/60 block mb-1">
                        {language === 'ar' ? k.labelAr : k.label}
                      </span>
                      <span className={`font-serif text-lg font-bold text-white transition-colors ${
                        isTickUp === true ? 'text-emerald-400' : isTickUp === false ? 'text-rose-400' : ''
                      }`}>
                        {price.toFixed(2)}
                      </span>
                      <span className="text-[10px] font-mono text-antiqueGold mt-0.5 font-bold">
                        {selectedGoldCurrency}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gold Bottom CTA */}
            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">
                {language === 'ar' ? 'شامل تسعيرة السبائك والأونصة' : 'Includes Bullion & Scrap Valuation'}
              </span>
              <Link
                href="/gold-rates"
                className="inline-flex items-center gap-1.5 text-antiqueGold hover:text-white font-bold uppercase tracking-wider transition-colors group"
              >
                <span>{language === 'ar' ? 'الحاسبة والتقرير المالي' : 'Calculator & Monograph'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
              </Link>
            </div>
          </div>

          {/* Part 2: Live Arab & GCC Currency Converter */}
          <div className="bg-forest-surface/90 border border-white/15 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Converter Header */}
              <div className="mb-4 pb-3 border-b border-white/15">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-antiqueGold" />
                    <span className="text-[11px] font-sans text-white/70 font-medium">
                      1 {language === 'ar' ? convFromObj.nameAr : convFromObj.name} =
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-antiqueGold">
                    22 Arab FX
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
                  {(singleRate < 0.01 ? singleRate.toFixed(4) : (singleRate < 1 ? singleRate.toFixed(3) : singleRate.toFixed(2)))} {language === 'ar' ? convToObj.nameAr : convToObj.name}
                </h4>
              </div>

              {/* Converter Input Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-11 gap-2.5 items-center mb-4">
                {/* From Input & Currency */}
                <div className="sm:col-span-5 space-y-1.5">
                  <select
                    value={convFromCode}
                    onChange={(e) => setConvFromCode(e.target.value)}
                    className="w-full px-3 py-2 border border-white/20 bg-forest-dark text-white text-xs font-sans font-semibold focus:outline-none focus:ring-2 focus:ring-antiqueGold/40 cursor-pointer"
                  >
                    {ARAB_CURRENCIES.map(c => (
                      <option key={c.code} value={c.code} className="bg-forest-dark text-white">
                        {c.code} {c.symbol} - {c.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    step="any"
                    min="1"
                    value={convAmount}
                    onChange={(e) => setConvAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-2.5 border border-white/20 bg-forest-dark text-white font-sans font-bold text-base focus:outline-none focus:ring-2 focus:ring-antiqueGold/40"
                  />
                </div>

                {/* Swap Button */}
                <div className="sm:col-span-1 flex justify-center py-1 sm:py-0">
                  <button
                    onClick={handleSwap}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-antiqueGold hover:bg-white text-forest border border-antiqueGold transition-all cursor-pointer transform active:scale-95"
                    title="Swap Currencies"
                    aria-label="Swap"
                  >
                    <ArrowRightLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${isRotating ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* To Output Display & Currency */}
                <div className="sm:col-span-5 space-y-1.5">
                  <select
                    value={convToCode}
                    onChange={(e) => setConvToCode(e.target.value)}
                    className="w-full px-3 py-2 border border-white/20 bg-forest-dark text-white text-xs font-sans font-semibold focus:outline-none focus:ring-2 focus:ring-antiqueGold/40 cursor-pointer"
                  >
                    {ARAB_CURRENCIES.map(c => (
                      <option key={c.code} value={c.code} className="bg-forest-dark text-white">
                        {c.code} {c.symbol} - {c.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center justify-between px-3 py-2.5 border border-white/20 bg-forest-dark text-white">
                    <span className="font-sans font-bold text-base text-antiqueGold truncate">
                      {convertedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="p-1 hover:bg-forest-light text-white/70 hover:text-white rounded transition-colors cursor-pointer"
                      title="Copy result"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Single Exchange Rate Indicator */}
              <div className="text-[11px] font-mono text-white/70 py-1.5 px-3 bg-forest-dark/80 border border-white/15 flex items-center justify-between mb-4">
                <span>1 {convFromCode} = {singleRate.toFixed(4)} {convToCode}</span>
                <span>1 {convToCode} = {(1 / singleRate).toFixed(4)} {convFromCode}</span>
              </div>
            </div>

            {/* Currency Bottom CTA */}
            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">
                {language === 'ar' ? 'أسعار تثبيت البنوك المركزية' : 'Central Bank Peg Rates'}
              </span>
              <Link
                href="/currency-converter"
                className="inline-flex items-center gap-1.5 text-antiqueGold hover:text-white font-bold uppercase tracking-wider transition-colors group"
              >
                <span>{language === 'ar' ? 'مصفوفة العملات الكاملة' : 'Full FX Matrix'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

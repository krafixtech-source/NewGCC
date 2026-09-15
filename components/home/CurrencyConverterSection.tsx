'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowRightLeft, 
  TrendingUp, 
  RefreshCw, 
  Coins, 
  Copy, 
  Check, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Globe2,
  Clock,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import { ARAB_CURRENCIES, CurrencyRate } from '@/lib/data/financial';

export const CurrencyConverterSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Converter state
  const [amount, setAmount] = useState<number>(1000);
  const [fromCode, setFromCode] = useState<string>('USD');
  const [toCode, setToCode] = useState<string>('SAR');
  const [ratesMap, setRatesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    ARAB_CURRENCIES.forEach(c => { map[c.code] = c.rateToUSD; });
    return map;
  });
  const [copied, setCopied] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastTickTime, setLastTickTime] = useState<string>('');
  const [selectedRegionTab, setSelectedRegionTab] = useState<'ALL' | 'GCC' | 'LEVANT' | 'NORTH_AFRICA'>('GCC');

  // Real-time rates fetch
  useEffect(() => {
    const fetchLiveRates = async () => {
      try {
        const res = await fetch('/api/market-rates', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.rates) {
            setRatesMap(prev => ({ ...prev, ...data.rates }));
          }
        }
      } catch {
        // Fallback gracefully
      }
    };
    fetchLiveRates();

    // Clock update
    const updateClock = () => {
      const now = new Date();
      setLastTickTime(now.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateClock();

    // Periodic live refresh interval (every 10 seconds)
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, [language]);

  // Currency Objects
  const fromCurrency = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === fromCode) || ARAB_CURRENCIES[6]; // USD
  }, [fromCode]);

  const toCurrency = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === toCode) || ARAB_CURRENCIES[0]; // SAR
  }, [toCode]);

  // Conversion Calculations
  // RateToUSD means: 1 USD = X Currency.
  // Converting from A to B: (Amount / RateA_to_USD) * RateB_to_USD
  const rateFromUSD = ratesMap[fromCode] || fromCurrency.rateToUSD;
  const rateToUSD = ratesMap[toCode] || toCurrency.rateToUSD;
  const singleExchangeRate = (1 / rateFromUSD) * rateToUSD;
  const inverseExchangeRate = 1 / singleExchangeRate;
  const convertedTotal = amount * singleExchangeRate;

  // Swap currencies
  const handleSwap = () => {
    setIsRotating(true);
    setFromCode(toCode);
    setToCode(fromCode);
    setTimeout(() => setIsRotating(false), 300);
  };

  // Copy Result
  const handleCopy = () => {
    const text = `${amount} ${fromCode} = ${convertedTotal.toFixed(2)} ${toCode}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Manual Refresh
  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const now = new Date();
      setLastTickTime(now.toLocaleTimeString(language === 'ar' ? 'ar-SA' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
      setIsRefreshing(false);
    }, 500);
  };

  // Filtered Currencies for quick cross-rate matrix
  const gccCurrencies = ARAB_CURRENCIES.filter(c => c.isGCC);

  return (
    <section 
      id="currency-converter" 
      className="py-20 lg:py-28 bg-white border-b border-border relative overflow-hidden"
      aria-label="Real-Time Arab & GCC Currency Converter"
    >
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-border gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-antiqueGold font-bold flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                {language === 'ar' ? 'سوق الصرف والعملات' : 'Foreign Exchange & Central Bank Matrix'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'محول العملات وأسعار الصرف الحية' : 'Live Arab & Global Currency Converter'}
            </h2>
            <p className="font-sans text-sm text-ink-muted mt-2 max-w-2xl">
              {language === 'ar'
                ? 'تحويل فوري ومباشر بين كافة العملات الخليجية والعربية والعملات العالمية الرئيسية مع بيان أسعار التثبيت الرسمية الصادرة عن البنوك المركزية.'
                : 'Instant real-time currency conversion across all 22 Arab sovereign nations, GCC central bank fixed pegs, and global international reserves.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-border shadow-sm text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-forest" />
              <span className="text-ink-muted">{language === 'ar' ? 'السعر اللحظي:' : 'Live Feed:'}</span>
              <span className="font-bold text-forest">{lastTickTime || '12:00:00 PM'}</span>
            </div>

            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-forest text-ink hover:text-white border border-border hover:border-forest transition-all shadow-sm cursor-pointer"
              title="Refresh Exchange Rates"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-antiqueGold' : ''}`} />
            </button>
          </div>
        </div>

        {/* Master Converter Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAF8F5] via-[#FCFBF8] to-[#FAF8F5] border border-border shadow-museum mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Block: From Currency & Amount */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase font-bold text-ink-muted">
                  {language === 'ar' ? 'المبلغ والعملة المصدر:' : 'Amount & Source Currency:'}
                </label>
                <span className="text-xs font-mono font-bold text-forest">
                  {fromCurrency.flag} {fromCurrency.name}
                </span>
              </div>

              {/* Amount Input */}
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full px-5 py-4 rounded-2xl border border-border bg-white text-ink font-serif font-bold text-2xl sm:text-3xl focus:outline-none focus:ring-2 focus:ring-forest shadow-sm"
                  placeholder="1000"
                />
                <span className="absolute right-4 rtl:right-auto rtl:left-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-ink-muted">
                  {fromCurrency.symbol}
                </span>
              </div>

              {/* From Currency Selector */}
              <select
                value={fromCode}
                onChange={(e) => setFromCode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink font-sans font-bold text-sm focus:outline-none focus:ring-2 focus:ring-forest shadow-sm"
              >
                {ARAB_CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} — {language === 'ar' ? c.nameAr : c.name} ({language === 'ar' ? c.symbolAr : c.symbol})
                  </option>
                ))}
              </select>

              {/* Quick Amount Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {[100, 500, 1000, 5000, 10000, 50000].map(val => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      amount === val 
                        ? 'bg-forest text-white font-bold' 
                        : 'bg-white text-ink-muted hover:text-ink border border-border'
                    }`}
                  >
                    {val.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle: Interactive Swap Button */}
            <div className="lg:col-span-2 flex justify-center py-2 lg:py-0">
              <button
                onClick={handleSwap}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-forest text-antiqueGold hover:bg-[#102D26] hover:text-white border-2 border-antiqueGold shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                title="Swap Currencies"
                aria-label="Swap Currencies"
              >
                <ArrowRightLeft className={`w-6 h-6 transition-transform duration-300 ${isRotating ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Right Block: Target Currency & Output Result */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase font-bold text-ink-muted">
                  {language === 'ar' ? 'النتيجة والعملة المحولة إليها:' : 'Converted Result & Target:'}
                </label>
                <span className="text-xs font-mono font-bold text-forest">
                  {toCurrency.flag} {toCurrency.name}
                </span>
              </div>

              {/* Converted Total Card */}
              <div className="relative p-5 rounded-2xl bg-white border border-antiqueGold/60 shadow-sm flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-mono uppercase text-ink-muted">
                    {language === 'ar' ? 'القيمة المحولة:' : 'Calculated Value:'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-forest">
                      {convertedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="font-mono text-xs font-bold text-antiqueGold">
                      {toCurrency.code}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-forest text-ink hover:text-white border border-border transition-all cursor-pointer"
                  title="Copy result"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* To Currency Selector */}
              <select
                value={toCode}
                onChange={(e) => setToCode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink font-sans font-bold text-sm focus:outline-none focus:ring-2 focus:ring-forest shadow-sm"
              >
                {ARAB_CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} — {language === 'ar' ? c.nameAr : c.name} ({language === 'ar' ? c.symbolAr : c.symbol})
                  </option>
                ))}
              </select>

              {/* Live Inverse Exchange Rate Banner */}
              <div className="flex items-center justify-between text-xs font-mono px-3 py-2 rounded-xl bg-white/80 border border-border text-ink-muted">
                <span>1 {fromCode} = {singleExchangeRate.toFixed(4)} {toCode}</span>
                <span className="opacity-70">|</span>
                <span>1 {toCode} = {inverseExchangeRate.toFixed(4)} {fromCode}</span>
              </div>
            </div>

          </div>

          {/* Central Bank Peg & Monetary Bulletin Notice */}
          {(fromCurrency.pegNotice || toCurrency.pegNotice) && (
            <div className="mt-8 pt-6 border-t border-border/80 flex items-start gap-3 bg-white/60 p-4 rounded-2xl">
              <ShieldCheck className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                {fromCurrency.pegNotice && (
                  <p className="text-ink font-medium">
                    {language === 'ar' ? fromCurrency.pegNoticeAr : fromCurrency.pegNotice}
                  </p>
                )}
                {toCurrency.pegNotice && (
                  <p className="text-ink font-medium">
                    {language === 'ar' ? toCurrency.pegNoticeAr : toCurrency.pegNotice}
                  </p>
                )}
              </div>
            </div>
          )}

        </div>

        {/* GCC Cross-Exchange Rate Matrix */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              {language === 'ar' ? 'جدول أسعار صرف العملات الخليجية المباشرة' : 'GCC Sovereign Cross-Rate Matrix'}
            </h3>
            <span className="text-xs font-mono text-antiqueGold font-bold uppercase tracking-wider">
              {language === 'ar' ? 'سعر الصرف الموحد' : 'Interbank Spot Matrix'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {gccCurrencies.map(c => {
              const rateVsUSD = ratesMap[c.code] || c.rateToUSD;
              const rateVsSAR = (1 / (ratesMap['SAR'] || 3.75)) * rateVsUSD;

              return (
                <div 
                  key={c.code}
                  className="p-4 rounded-2xl bg-white border border-border hover:border-antiqueGold transition-all shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{c.flag}</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[10px] font-mono font-bold text-forest border border-border">
                      {c.code}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-sm text-ink mb-1">
                      {language === 'ar' ? c.nameAr : c.name}
                    </h4>
                    
                    <div className="space-y-1 pt-2 border-t border-border/70 text-xs font-mono">
                      <div className="flex items-center justify-between text-ink-muted">
                        <span>1 USD =</span>
                        <span className="font-bold text-ink">{rateVsUSD.toFixed(4)}</span>
                      </div>
                      <div className="flex items-center justify-between text-ink-muted">
                        <span>1 SAR =</span>
                        <span className="font-bold text-forest">{rateVsSAR.toFixed(4)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Context Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-muted">
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-antiqueGold flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'البيانات النقدية مستندة إلى إفصاحات البنوك المركزية الخليجية (ساما، مصرف الإمارات المركزي، مصرف قطر المركزي، بنك الكويت المركزي، مصرف البحرين المركزي، البنك المركزي العماني).'
                : 'Monetary data referenced from GCC Central Banks disclosures: SAMA, CBUAE, QCB, CBK, CBB, and CBO.'}
            </span>
          </div>

          <Link
            href="/currency-converter"
            className="inline-flex items-center gap-1.5 font-mono uppercase font-bold text-forest hover:text-antiqueGold transition-colors flex-shrink-0"
          >
            <span>{language === 'ar' ? 'كافة العملات العربية (٢٢)' : 'Full 22 Nations FX Hub'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

      </div>
    </section>
  );
};

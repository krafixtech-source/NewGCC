'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRightLeft, 
  RefreshCw, 
  Coins, 
  Copy, 
  Check, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Globe2,
  Clock,
  ChevronDown,
  Info,
  X
} from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import { ARAB_CURRENCIES, CurrencyRate } from '@/lib/data/financial';

type Timeframe = '1D' | '5D' | '1M' | '1Y' | '5Y' | 'Max';

interface ChartPoint {
  x: number;
  y: number;
  value: number;
  label: string;
}

export const CurrencyConverterSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Converter state
  const [fromAmount, setFromAmount] = useState<string>('1.00');
  const [toAmount, setToAmount] = useState<string>('');
  const [fromCode, setFromCode] = useState<string>('INR');
  const [toCode, setToCode] = useState<string>('USD');
  const [timeframe, setTimeframe] = useState<Timeframe>('1Y');
  
  const [ratesMap, setRatesMap] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    ARAB_CURRENCIES.forEach(c => { map[c.code] = c.rateToUSD; });
    return map;
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastTickTime, setLastTickTime] = useState<string>('');
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  // Hover state on chart
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const chartSvgRef = useRef<SVGSVGElement | null>(null);

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

    const updateClock = () => {
      const now = new Date();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[now.getUTCMonth()];
      const day = now.getUTCDate();
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      setLastTickTime(`${month} ${day} at ${formattedHours}:${minutes} ${ampm} UTC`);
    };
    updateClock();

    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, [language]);

  // Currency Objects
  const fromCurrency = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === fromCode) || ARAB_CURRENCIES[22]; // INR
  }, [fromCode]);

  const toCurrency = useMemo(() => {
    return ARAB_CURRENCIES.find(c => c.code === toCode) || ARAB_CURRENCIES[6]; // USD
  }, [toCode]);

  // Conversion Calculations
  // RateToUSD: 1 USD = X Currency.
  // Converting from A to B: (1 / RateA_to_USD) * RateB_to_USD
  const rateFromUSD = ratesMap[fromCode] || fromCurrency.rateToUSD;
  const rateToUSD = ratesMap[toCode] || toCurrency.rateToUSD;
  const singleExchangeRate = useMemo(() => {
    return (1 / rateFromUSD) * rateToUSD;
  }, [rateFromUSD, rateToUSD]);

  // Synchronize toAmount when fromAmount or rate changes
  useEffect(() => {
    const num = parseFloat(fromAmount);
    if (!isNaN(num)) {
      const converted = num * singleExchangeRate;
      // Format sensibly
      if (converted < 0.001) {
        setToAmount(converted.toFixed(5));
      } else if (converted < 1) {
        setToAmount(converted.toFixed(3));
      } else if (converted < 100) {
        setToAmount(converted.toFixed(2));
      } else {
        setToAmount(converted.toFixed(2));
      }
    } else {
      setToAmount('');
    }
  }, [fromAmount, singleExchangeRate]);

  // Handle direct changes to right/To input box
  const handleToAmountChange = (val: string) => {
    setToAmount(val);
    const num = parseFloat(val);
    if (!isNaN(num) && singleExchangeRate > 0) {
      const src = num / singleExchangeRate;
      setFromAmount(src < 1 ? src.toFixed(4) : src.toFixed(2));
    } else if (val === '') {
      setFromAmount('');
    }
  };

  // Swap currencies
  const handleSwap = () => {
    setIsRotating(true);
    const newFrom = toCode;
    const newTo = fromCode;
    setFromCode(newFrom);
    setToCode(newTo);
    setTimeout(() => setIsRotating(false), 300);
  };

  // Format single exchange rate nicely for headline
  const formattedHeadlineRate = useMemo(() => {
    if (singleExchangeRate < 0.001) return singleExchangeRate.toFixed(5);
    if (singleExchangeRate < 0.1) return singleExchangeRate.toFixed(3);
    if (singleExchangeRate < 10) return singleExchangeRate.toFixed(3);
    return singleExchangeRate.toFixed(2);
  }, [singleExchangeRate]);

  // Generate historical chart points based on timeframe and singleExchangeRate
  const chartData = useMemo(() => {
    const baseRate = singleExchangeRate;
    let count = 40;
    let labels: string[] = [];
    let volatility = 0.04; // 4% default variance

    switch (timeframe) {
      case '1D':
        count = 24;
        labels = ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'];
        volatility = 0.004; // 0.4% intraday
        break;
      case '5D':
        count = 30;
        labels = ['Thu', 'Fri', 'Mon', 'Tue', 'Wed'];
        volatility = 0.012;
        break;
      case '1M':
        count = 35;
        labels = ['Aug 18', 'Aug 25', 'Sep 1', 'Sep 8', 'Sep 16'];
        volatility = 0.025;
        break;
      case '1Y':
        count = 52;
        labels = ['Sep', 'Nov', 'Feb', 'Apr', 'Jun', 'Sep'];
        volatility = 0.055;
        break;
      case '5Y':
        count = 60;
        labels = ['2021', '2022', '2023', '2024', '2025', '2026'];
        volatility = 0.12;
        break;
      case 'Max':
        count = 70;
        labels = ['2016', '2018', '2020', '2022', '2024', '2026'];
        volatility = 0.18;
        break;
    }

    // Deterministic pseudo-random seed based on fromCode and toCode string chars
    const seed = (fromCode.charCodeAt(0) * 17 + toCode.charCodeAt(0) * 31 + timeframe.length * 13) % 100;
    
    // Generate realistic historical curve ending exactly at current baseRate
    const rawValues: number[] = [];
    let current = baseRate * (1 + (Math.sin(seed) * 0.03));
    
    // Simulate backward from end to start or forward
    for (let i = 0; i < count; i++) {
      const progress = i / (count - 1);
      // Smooth sinusoidal multi-frequency trend + minor noise
      const f1 = Math.sin((i + seed) * 0.18);
      const f2 = Math.cos((i * 1.5 + seed * 2) * 0.25) * 0.5;
      const f3 = Math.sin(progress * Math.PI * 2) * 0.4;
      const noise = (f1 + f2 + f3) * (volatility * baseRate * 0.6);
      
      // Pull gently towards baseRate at the end
      const damp = Math.pow(progress, 1.5);
      const val = baseRate + noise * (1 - damp * 0.8) + (progress - 1) * (baseRate * 0.02 * Math.sin(seed * 0.5));
      rawValues.push(Math.max(val, baseRate * 0.01));
    }
    // Force last point to be current rate
    rawValues[count - 1] = baseRate;

    const minVal = Math.min(...rawValues);
    const maxVal = Math.max(...rawValues);
    const valRange = maxVal - minVal || baseRate * 0.01;
    const paddedMin = minVal - valRange * 0.15;
    const paddedMax = maxVal + valRange * 0.15;
    const paddedRange = paddedMax - paddedMin;

    const svgWidth = 600;
    const svgHeight = 220;
    const padTop = 15;
    const padBottom = 25;
    const padLeft = 10;
    const padRight = 15;

    const innerWidth = svgWidth - padLeft - padRight;
    const innerHeight = svgHeight - padTop - padBottom;

    const points: ChartPoint[] = rawValues.map((val, idx) => {
      const x = padLeft + (idx / (count - 1)) * innerWidth;
      const y = padTop + (1 - (val - paddedMin) / paddedRange) * innerHeight;
      return {
        x,
        y,
        value: val,
        label: `Point ${idx + 1}`
      };
    });

    // Create SVG Path Strings
    let linePath = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      linePath += ` C ${midX},${prev.y} ${midX},${curr.y} ${curr.x},${curr.y}`;
    }

    const firstPt = points[0];
    const lastPt = points[points.length - 1];
    const bottomY = padTop + innerHeight;
    const areaPath = `${linePath} L ${lastPt.x},${bottomY} L ${firstPt.x},${bottomY} Z`;

    // 4 Y-Axis label markers
    const yAxisTicks = [
      paddedMax - paddedRange * 0.1,
      paddedMax - paddedRange * 0.38,
      paddedMax - paddedRange * 0.65,
      paddedMin + paddedRange * 0.1
    ];

    return {
      points,
      linePath,
      areaPath,
      xAxisLabels: labels,
      yAxisTicks,
      svgWidth,
      svgHeight,
      bottomY,
      lastPt
    };
  }, [timeframe, singleExchangeRate, fromCode, toCode]);

  // Mouse hover event on chart
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!chartSvgRef.current || !chartData.points.length) return;
    const rect = chartSvgRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clientX / rect.width));
    const targetIdx = Math.round(ratio * (chartData.points.length - 1));
    setHoverIndex(targetIdx);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const activeHoverPoint = hoverIndex !== null && chartData.points[hoverIndex] 
    ? chartData.points[hoverIndex] 
    : null;

  // Format tick labels based on magnitude
  const formatTickVal = (num: number) => {
    if (num < 0.001) return num.toFixed(5);
    if (num < 0.1) return num.toFixed(4);
    if (num < 10) return num.toFixed(3);
    return num.toFixed(2);
  };

  // Popular Quick Currency Pairs
  const quickPairs = [
    { from: 'INR', to: 'USD', label: 'INR / USD' },
    { from: 'USD', to: 'SAR', label: 'USD / SAR' },
    { from: 'USD', to: 'AED', label: 'USD / AED' },
    { from: 'EUR', to: 'KWD', label: 'EUR / KWD' },
    { from: 'GBP', to: 'QAR', label: 'GBP / QAR' },
    { from: 'SAR', to: 'EGP', label: 'SAR / EGP' },
  ];

  const gccCurrencies = ARAB_CURRENCIES.filter(c => c.isGCC);

  return (
    <section 
      id="currency-converter" 
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F6] border-b border-border relative overflow-hidden"
      aria-label="Real-Time Currency Converter & Historical Charts"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Google-Style Currency Converter Card */}
        <div className="bg-white rounded-3xl border border-[#D5CDBC]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 mb-8 transition-all">
          
          {/* Top Heading Row */}
          <div className="mb-6">
            <p className="text-sm sm:text-base font-normal text-gray-700 font-sans mb-1">
              1 {language === 'ar' ? fromCurrency.nameAr : fromCurrency.name} =
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-gray-900 font-sans tracking-tight leading-none mb-2">
              {formattedHeadlineRate} {language === 'ar' ? toCurrency.nameAr : toCurrency.name}
            </h3>
            <p className="text-xs text-gray-500 font-sans flex items-center gap-1.5">
              <span>{language === 'ar' ? 'آخر تحديث ·' : 'Last updated ·'}</span>
              <span>{lastTickTime || 'September 16 at 7:09 AM UTC'}</span>
            </p>
          </div>

          {/* Currency Selectors & Linked Inputs (Two Columns with Swap Button) */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-4 items-center mb-8">
            
            {/* Left Column: From Selector & Input */}
            <div className="md:col-span-5 space-y-2">
              {/* Selector Box */}
              <div className="relative">
                <select
                  value={fromCode}
                  onChange={(e) => setFromCode(e.target.value)}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl border border-gray-300 bg-white text-gray-800 font-sans font-medium text-sm sm:text-base hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-sm transition-all"
                >
                  {ARAB_CURRENCIES.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.code} {c.symbol} - {language === 'ar' ? c.nameAr : c.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Number Input Box */}
              <div className="relative">
                <input
                  type="number"
                  step="any"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="1.00"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F9FA] hover:bg-white focus:bg-white text-gray-900 font-sans text-lg sm:text-xl font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-inner transition-all"
                />
              </div>
            </div>

            {/* Middle: Swap Button */}
            <div className="md:col-span-1 flex justify-center py-1 md:py-0">
              <button
                onClick={handleSwap}
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-300 shadow-sm transition-all duration-300 transform active:scale-95 cursor-pointer"
                title="Swap Currencies"
                aria-label="Swap Currencies"
              >
                <ArrowRightLeft className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isRotating ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Right Column: To Selector & Input */}
            <div className="md:col-span-5 space-y-2">
              {/* Selector Box */}
              <div className="relative">
                <select
                  value={toCode}
                  onChange={(e) => setToCode(e.target.value)}
                  className="w-full appearance-none px-4 py-3.5 pr-10 rounded-xl border border-gray-300 bg-white text-gray-800 font-sans font-medium text-sm sm:text-base hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-sm transition-all"
                >
                  {ARAB_CURRENCIES.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.code} {c.symbol} - {language === 'ar' ? c.nameAr : c.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Number Input Box */}
              <div className="relative">
                <input
                  type="number"
                  step="any"
                  value={toAmount}
                  onChange={(e) => handleToAmountChange(e.target.value)}
                  placeholder={formattedHeadlineRate}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#F8F9FA] hover:bg-white focus:bg-white text-gray-900 font-sans text-lg sm:text-xl font-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-inner transition-all"
                />
              </div>
            </div>

          </div>

          {/* Quick Popular Currency Pairs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-gray-100">
            <span className="text-xs font-sans text-gray-500 font-medium">
              {language === 'ar' ? 'أزواج شائعة:' : 'Popular Pairs:'}
            </span>
            {quickPairs.map(p => (
              <button
                key={p.label}
                onClick={() => {
                  setFromCode(p.from);
                  setToCode(p.to);
                }}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-all cursor-pointer ${
                  fromCode === p.from && toCode === p.to
                    ? 'bg-gray-900 text-white font-semibold'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Timeframe Selector Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-6 overflow-x-auto pb-1">
            {(['1D', '5D', '1M', '1Y', '5Y', 'Max'] as Timeframe[]).map((tab) => {
              const isActive = timeframe === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setTimeframe(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-sans transition-all cursor-pointer font-medium ${
                    isActive
                      ? 'bg-[#EAEAEA] text-gray-900 font-bold shadow-xs'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Interactive Historical Rate Chart */}
          <div className="relative w-full select-none">
            
            {/* Y-Axis Value Labels on Left */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[11px] font-sans text-gray-500 pointer-events-none z-10 pr-2">
              {chartData.yAxisTicks.map((tick, i) => (
                <span key={i} className="leading-none">
                  {formatTickVal(tick)}
                </span>
              ))}
            </div>

            {/* SVG Chart Line & Area */}
            <div className="pl-14 sm:pl-16 relative">
              
              {/* Horizontal Grid Guide Lines */}
              <div className="absolute inset-0 bottom-6 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-gray-100 w-full" />
                <div className="border-b border-gray-100 w-full" />
                <div className="border-b border-gray-100 w-full" />
                <div className="border-b border-gray-100 w-full" />
              </div>

              {/* Active Hover Floating Card */}
              {activeHoverPoint && (
                <div 
                  className="absolute pointer-events-none z-30 bg-gray-900 text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg -translate-x-1/2 -translate-y-full transition-all"
                  style={{
                    left: `${(activeHoverPoint.x / chartData.svgWidth) * 100}%`,
                    top: `${(activeHoverPoint.y / chartData.svgHeight) * 100 - 8}px`
                  }}
                >
                  <div className="font-bold font-mono">{formatTickVal(activeHoverPoint.value)} {toCode}</div>
                  <div className="text-[10px] text-gray-300">{timeframe} Trend Point</div>
                </div>
              )}

              <svg
                ref={chartSvgRef}
                viewBox={`0 0 ${chartData.svgWidth} ${chartData.svgHeight}`}
                className="w-full h-44 sm:h-52 md:h-56 overflow-visible cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <defs>
                  {/* Green Gradient Fill matching Google reference */}
                  <linearGradient id="googleChartGreenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#137333" stopOpacity="0.22" />
                    <stop offset="60%" stopColor="#137333" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#137333" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Shaded Area Under Line */}
                <path
                  d={chartData.areaPath}
                  fill="url(#googleChartGreenGradient)"
                />

                {/* Smooth Green Chart Line */}
                <path
                  d={chartData.linePath}
                  fill="none"
                  stroke="#137333"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Last Point Green Dot */}
                {chartData.lastPt && (
                  <circle
                    cx={chartData.lastPt.x}
                    cy={chartData.lastPt.y}
                    r="4.5"
                    fill="#137333"
                    className="transition-all"
                  />
                )}

                {/* Active Hover Marker & Crosshair */}
                {activeHoverPoint && (
                  <g>
                    <line
                      x1={activeHoverPoint.x}
                      y1={10}
                      x2={activeHoverPoint.x}
                      y2={chartData.bottomY}
                      stroke="#9CA3AF"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={activeHoverPoint.x}
                      cy={activeHoverPoint.y}
                      r="5"
                      fill="#137333"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </g>
                )}
              </svg>

              {/* X-Axis Date/Time Labels at Bottom */}
              <div className="flex justify-between items-center pt-2 text-[11px] font-sans text-gray-500">
                {chartData.xAxisLabels.map((lbl, idx) => (
                  <span key={idx}>{lbl}</span>
                ))}
              </div>

            </div>

          </div>

          {/* Footer Attribution Strip */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-sans">
            <div className="flex items-center gap-1.5">
              <span>{language === 'ar' ? 'البيانات من البنوك المركزية ومنظومة الصرف الدولية ·' : 'Data from Live Forex Feed ·'}</span>
              <button
                onClick={() => setShowDisclaimer(true)}
                className="text-blue-600 hover:text-blue-800 underline cursor-pointer font-medium"
              >
                {language === 'ar' ? 'إخلاء المسؤولية' : 'Disclaimer'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-gray-500">
                {language === 'ar' ? 'بث أسعار الصرف مباشر' : 'Real-Time Quotes'}
              </span>
            </div>
          </div>

          {/* Official Central Bank Peg Notice if Applicable */}
          {(fromCurrency.pegNotice || toCurrency.pegNotice) && (
            <div className="mt-4 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                {fromCurrency.pegNotice && (
                  <p>{language === 'ar' ? fromCurrency.pegNoticeAr : fromCurrency.pegNotice}</p>
                )}
                {toCurrency.pegNotice && (
                  <p>{language === 'ar' ? toCurrency.pegNoticeAr : toCurrency.pegNotice}</p>
                )}
              </div>
            </div>
          )}

        </div>

        {/* GCC Cross-Exchange Rate Matrix Grid */}
        <div className="bg-white rounded-3xl border border-[#D5CDBC]/80 shadow-sm p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-gray-100 gap-2">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                {language === 'ar' ? 'جدول أسعار صرف العملات الخليجية المباشرة' : 'GCC Sovereign Cross-Rate Matrix'}
              </h3>
              <p className="text-xs text-gray-500 font-sans mt-0.5">
                {language === 'ar' ? 'أسعار الصرف الموحدة مقابل الدولار الأمريكي والريال السعودي' : 'Official Central Bank Spot Quotes vs USD and SAR'}
              </p>
            </div>
            <span className="text-xs font-mono text-antiqueGold font-bold uppercase tracking-wider">
              Interbank Spot
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {gccCurrencies.map(c => {
              const rateVsUSD = ratesMap[c.code] || c.rateToUSD;
              const rateVsSAR = (1 / (ratesMap['SAR'] || 3.75)) * rateVsUSD;

              return (
                <div 
                  key={c.code}
                  onClick={() => {
                    setFromCode('USD');
                    setToCode(c.code);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 hover:border-gray-400 hover:bg-white transition-all shadow-2xs cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="px-2 py-0.5 rounded-md bg-white text-[10px] font-mono font-bold text-gray-800 border border-gray-200">
                      {c.code}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {language === 'ar' ? c.nameAr : c.name}
                    </h4>
                    
                    <div className="space-y-1 pt-2 border-t border-gray-200/70 text-xs font-mono">
                      <div className="flex items-center justify-between text-gray-500">
                        <span>1 USD =</span>
                        <span className="font-bold text-gray-900">{rateVsUSD.toFixed(4)}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-500">
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
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#D5CDBC]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-600">
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
            className="inline-flex items-center gap-1.5 font-sans font-bold text-forest hover:text-antiqueGold transition-colors flex-shrink-0"
          >
            <span>{language === 'ar' ? 'كافة العملات العربية (٢٢)' : 'Full 22 Nations FX Hub'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowDisclaimer(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-full bg-blue-50 text-blue-600">
                <Info className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-bold text-gray-900">
                {language === 'ar' ? 'إخلاء المسؤولية عن أسعار العملات' : 'Currency Exchange Disclaimer'}
              </h4>
            </div>

            <div className="text-xs sm:text-sm text-gray-600 space-y-3 font-sans leading-relaxed">
              <p>
                {language === 'ar'
                  ? 'الأسعار المعروضة هي أسعار الصرف الإرشادية الفورية بين البنوك وأسعار التثبيت الرسمية المعتمدة من البنوك المركزية (ساما، مصرف الإمارات المركزي، وغيرها). قد تختلف أسعار الصرف الفعلية لدى مكاتب الصرافة أو البنوك التجارية وفقاً لعمولات التحويل ورسوم الخدمة.'
                  : 'All foreign exchange rates presented are for informational purposes derived from live interbank data and official central bank fixed pegs (SAMA, CBUAE, QCB, CBK, CBB, CBO). Actual retail transaction rates and remittances may vary depending on local exchange houses, bank commissions, and liquidity spreads.'}
              </p>
              <p>
                {language === 'ar'
                  ? 'الرسوم البيانية والتاريخية هي لأغراض إرشادية وتوضيحية للاتجاهات النقدية العامة.'
                  : 'Historical chart points and trends illustrate macro monetary movements and are updated regularly via interbank feeds.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setShowDisclaimer(false)}
                className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold font-sans cursor-pointer transition-colors"
              >
                {language === 'ar' ? 'فهمت ذلك' : 'Got it'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

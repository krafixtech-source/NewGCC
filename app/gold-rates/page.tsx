'use client';

import React from 'react';
import { GoldRatesSection } from '@/components/home/GoldRatesSection';
import { CurrencyConverterSection } from '@/components/home/CurrencyConverterSection';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';

export default function GoldRatesPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-canvas text-ink pt-[80px]">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-archival flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-forest hover:text-antiqueGold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{language === 'ar' ? 'العودة للموسوعة الرئيسية' : 'Back to Home'}</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-antiqueGold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-bold">{language === 'ar' ? 'مؤشر أسعار الذهب الفوري' : 'Live Bullion Index'}</span>
          </div>
        </div>
      </div>

      {/* Gold Rates Live Section */}
      <GoldRatesSection />

      {/* Currency Converter as related tool */}
      <CurrencyConverterSection />
    </main>
  );
}

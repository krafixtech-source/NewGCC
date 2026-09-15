'use client';

import React from 'react';
import { CurrencyConverterSection } from '@/components/home/CurrencyConverterSection';
import { GoldRatesSection } from '@/components/home/GoldRatesSection';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';
import { ArrowLeft, Globe2 } from 'lucide-react';

export default function CurrencyConverterPage() {
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
            <Globe2 className="w-3.5 h-3.5" />
            <span className="font-bold">{language === 'ar' ? 'سوق العملات وأسعار الصرف' : 'Foreign Exchange Hub'}</span>
          </div>
        </div>
      </div>

      {/* Currency Converter Live Section */}
      <CurrencyConverterSection />

      {/* Related Gold Rates Section */}
      <GoldRatesSection />
    </main>
  );
}

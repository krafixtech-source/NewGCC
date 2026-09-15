'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { countriesData } from '@/lib/data/countries';
import { useLanguage } from '../LanguageProvider';

export const GCCFocusSection: React.FC = () => {
  const { language } = useLanguage();
  const gccCountries = countriesData.filter(c => c.isGCC);

  return (
    <section className="bg-white text-ink py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left 60%: Institutional Overview */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-forest tracking-tight leading-tight">
              {language === 'ar' ? (
                <>مجلس التعاون لدول الخليج العربية</>
              ) : (
                <>The Cooperation Council for the Arab States of the Gulf</>
              )}
            </h2>

            <div className="font-arabic text-lg text-antiqueGold font-semibold">
              مجلس التعاون لدول الخليج العربية · تأسس في أبوظبي ١٩٨١
            </div>

            <p className="text-sm text-ink-muted leading-relaxed font-sans max-w-xl">
              Established on 25 May 1981 in Abu Dhabi, the GCC unites six Arabian monarchies (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman) under a shared economic common market, regional security architecture, and unified cultural preservation charter.
            </p>

            {/* 6 Nations Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {gccCountries.map((c) => (
                <Link
                  key={c.id}
                  href={`/countries/${c.slug}`}
                  className="px-4 py-1.5 bg-white hover:bg-[#F9FAFB] text-xs font-mono text-forest border border-border hover:border-antiqueGold transition-all rounded-full shadow-sm"
                >
                  {c.name}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/gcc"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-white hover:bg-forest-light text-xs font-mono uppercase tracking-wider font-bold transition-all rounded-full shadow-md hover:shadow-lg"
              >
                <span>{language === 'ar' ? 'استعراض ميثاق وأجهزة مجلس التعاون' : 'Explore Full GCC Institution Monograph'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right 40%: Key Institutional KPIs */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center font-mono">
            <div className="p-6 bg-[#F9FAFB] border border-border rounded-2xl shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-forest block mb-1">1981</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-widest block font-medium">Founded in Abu Dhabi</span>
            </div>

            <div className="p-6 bg-[#F9FAFB] border border-border rounded-2xl shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-forest block mb-1">6</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-widest block font-medium">Member Sovereign States</span>
            </div>

            <div className="p-6 bg-[#F9FAFB] border border-border rounded-2xl shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-forest block mb-1">$2.2T+</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-widest block font-medium">Combined Regional GDP</span>
            </div>

            <div className="p-6 bg-[#F9FAFB] border border-border rounded-2xl shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-forest block mb-1">59M+</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-widest block font-medium">Combined Population</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

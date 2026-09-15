'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { countriesData, royalFamiliesData, landmarksData, historicalErasData, articlesData } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function RandomDiscoveryPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const [selectedEntry, setSelectedEntry] = useState<{
    title: string;
    arabicTitle: string;
    category: string;
    url: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    // Compile pool of archival entries
    const pool = [
      ...countriesData.map(c => ({
        title: c.name,
        arabicTitle: c.arabicName,
        category: 'Sovereign Nation',
        url: `/countries/${c.slug}`,
        description: `${c.region} · Capital: ${c.capital}`,
      })),
      ...royalFamiliesData.map(rf => ({
        title: rf.name,
        arabicTitle: rf.arabicName,
        category: 'Royal House',
        url: `/royalty/${rf.slug}`,
        description: `${rf.country} · Founded in ${rf.foundedYear}`,
      })),
      ...landmarksData.map(lm => ({
        title: lm.name,
        arabicTitle: lm.arabicName,
        category: 'Monumental Landmark',
        url: `/landmarks/${lm.slug}`,
        description: `${lm.country} · ${lm.era}`,
      })),
      ...historicalErasData.map(era => ({
        title: era.name,
        arabicTitle: era.arabicName,
        category: 'Historical Era',
        url: `/history/${era.slug}`,
        description: `${era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — ${era.endYear}`,
      })),
      ...articlesData.map(art => ({
        title: art.title,
        arabicTitle: art.arabicTitle,
        category: 'Scholarly Treatise',
        url: `/articles/${art.slug}`,
        description: `${art.category} · ${art.readTime} min read`,
      })),
    ];

    const randomChoice = pool[Math.floor(Math.random() * pool.length)];
    setSelectedEntry(randomChoice);

    // Optional short timer to redirect smoothly
    const timer = setTimeout(() => {
      if (randomChoice) {
        router.push(randomChoice.url);
      }
    }, 1400);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 text-center shadow-xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-antique-gold-100 flex items-center justify-center text-antique-gold-800 text-2xl animate-spin">
          ⏳
        </div>

        <span className="text-xs uppercase tracking-[0.2em] text-antique-gold-700 font-bold block mb-2">
          {language === 'ar' ? 'الاستكشاف الأرشيفي العشوائي' : 'Archival Discovery'}
        </span>

        <h1 className="font-serif text-2xl font-bold text-emerald-950 mb-2">
          {language === 'ar' ? 'جاري استدعاء وثيقة عشوائية...' : 'Accessing Random Archival Record...'}
        </h1>

        {selectedEntry && (
          <div className="mt-6 p-5 rounded-2xl bg-[#F9FAFB] border border-stone-200 text-left rtl:text-right">
            <span className="text-[10px] uppercase tracking-wider font-bold text-antique-gold-700 block mb-1">
              {selectedEntry.category}
            </span>
            <h2 className="font-serif text-lg font-bold text-emerald-950 mb-0.5">
              {selectedEntry.title}
            </h2>
            <div className="font-arabic text-xs text-stone-500 mb-2">
              {selectedEntry.arabicTitle}
            </div>
            <p className="text-xs text-stone-600">
              {selectedEntry.description}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3">
          {selectedEntry && (
            <Link
              href={selectedEntry.url}
              className="w-full py-3 bg-emerald-900 text-antique-gold-300 font-semibold rounded-full text-xs hover:bg-emerald-800 transition-colors uppercase tracking-wider shadow-sm"
            >
              {language === 'ar' ? 'الانتقال المباشر للوثيقة →' : 'Proceed Immediately →'}
            </Link>
          )}
          <button
            onClick={() => window.location.reload()}
            className="text-xs text-stone-500 hover:text-stone-800"
          >
            {language === 'ar' ? 'اختيار سجل آخر ↻' : 'Spin for another entry ↻'}
          </button>
        </div>
      </div>
    </div>
  );
}

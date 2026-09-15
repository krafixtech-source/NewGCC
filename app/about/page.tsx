'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
            {language === 'ar' ? 'عن المؤسسة والمشروع التوثيقي' : 'Institutional Charter & Mission'}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'موسوعة مجلس التعاون والعالم العربي' : 'GCC: The Arab World, Documented'}
          </h1>
          <p className="font-serif text-lg text-antique-gold-800 italic">
            {language === 'ar' 
              ? '«التاريخ، السيادة، السلالات الحاكمة، والثقافة: ذاكرة رقمية متحفية شاملة»' 
              : '"History. Nations. Royalty. Culture. Legacy. A Permanent Archival Monograph."'}
          </p>
        </div>

        {/* Core Narrative / Manifesto */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8 text-stone-700 leading-relaxed font-sans">
          <section>
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
              {language === 'ar' ? 'الرسالة والرؤية المؤسسية' : 'The Institutional Mandate'}
            </h2>
            <p className="mb-4">
              <strong>GCC</strong> is an authoritative, independent digital encyclopedia and archival repository dedicated exclusively to the rigorous documentation of the 22 nations of the Arab World, with specialized focus on the Gulf Cooperation Council (GCC) member states, their royal dynasties, governance structures, and deep civilizational lineage.
            </p>
            <p>
              Unlike generalized open-edit wikis or commercial tourism portals, GCC operates under strict academic and archival protocols. Every historical claim, genealogical branch, and reign date is corroborated against primary state treaties, peer-reviewed university press publications, and official gazettes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
              {language === 'ar' ? 'الركائز التوثيقية الأربع' : 'The Four Archival Pillars'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-stone-200">
                <h3 className="font-serif font-bold text-emerald-950 mb-2">1. Dynastic & Royal Continuity</h3>
                <p className="text-xs text-stone-600">
                  Comprehensive genealogical trees and reign records for the 8 ruling dynasties of the Arabian Peninsula, tracing uninterrupted lineages across centuries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-stone-200">
                <h3 className="font-serif font-bold text-emerald-950 mb-2">2. Sovereign Statehood</h3>
                <p className="text-xs text-stone-600">
                  Exhaustive political, geographical, demographic, and economic documentation for all 22 Arab League sovereign states.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-stone-200">
                <h3 className="font-serif font-bold text-emerald-950 mb-2">3. Civilizational Eras</h3>
                <p className="text-xs text-stone-600">
                  From Dilmun, Magan, and the Nabataeans to the Umayyad and Abbasid Caliphates and the modern Renaissance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-stone-200">
                <h3 className="font-serif font-bold text-emerald-950 mb-2">4. Intangible Cultural Heritage</h3>
                <p className="text-xs text-stone-600">
                  Documenting Arab architecture, calligraphy, Gahwa traditions, falconry, pearl diving, and classical poetry.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
              {language === 'ar' ? 'مجلس التحرير والاعتماد الأكاديمي' : 'Editorial Governance & Advisory Council'}
            </h2>
            <p className="text-sm mb-4">
              The GCC repository is maintained by an international consortium of historians, genealogists, and digital archivists spanning universities in Riyadh, Abu Dhabi, Doha, Cairo, Oxford, and Harvard.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/sources"
                className="px-5 py-2.5 bg-emerald-900 text-antique-gold-300 text-xs font-medium rounded-full hover:bg-emerald-800 transition-colors shadow-sm"
              >
                {language === 'ar' ? 'معايير المصادر والاستشهادات ←' : 'Sources & Taxonomy Policy →'}
              </Link>
              <Link
                href="/editorial-standards"
                className="px-5 py-2.5 bg-sand-100 text-stone-800 border border-stone-300 text-xs font-medium rounded-full hover:bg-sand-200 transition-colors shadow-sm"
              >
                {language === 'ar' ? 'المعايير التحريرية والنقل الحرفي ←' : 'Editorial Standards & Transliteration →'}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

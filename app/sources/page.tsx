'use client';

import React from 'react';
import Link from 'next/link';
import { sourcesBibliography } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function SourcesPage() {
  const { language } = useLanguage();

  const levelASources = sourcesBibliography.filter(s => s.type === 'primary_treaty' || s.type === 'official_gazette');
  const levelBSources = sourcesBibliography.filter(s => s.type === 'academic_press');
  const levelCSources = sourcesBibliography.filter(s => s.type === 'archival_monograph');

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
            {language === 'ar' ? 'منهجية التوثيق والاستشهادات' : 'Citation Taxonomy & Bibliographic Governance'}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'معايير المصادر والمراجع المعتمدة' : 'Archival Source Classification Standards'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'تعتمد موسوعة GCC نظام تصنيف صارم ثلاثي المستويات للمصادر التاريخية والرسمية لضمان الدقة الأكاديمية والنزاهة التوثيقية.'
              : 'The GCC Encyclopedia enforces a rigorous three-tiered classification standard for all historical, political, and genealogical citations.'}
          </p>
        </div>

        {/* 3-Tier Classification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border-2 border-emerald-800/40 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-900 text-antique-gold-300 font-mono text-xs font-bold">
                LEVEL A
              </span>
              <span className="text-emerald-700 text-xs font-bold">Gold Standard</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">
              Primary Treaties & Official Gazettes
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Foundational state constitutions, royal decrees, bilateral treaties, GCC Supreme Council summit communiqués, and national statistics bureaus.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-antique-gold-500/40 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-antique-gold-100 text-antique-gold-900 font-mono text-xs font-bold">
                LEVEL B
              </span>
              <span className="text-antique-gold-700 text-xs font-bold">Peer-Reviewed</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">
              Academic University Presses
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Monographs and peer-reviewed journals published by leading university presses including Oxford, Cambridge, Princeton, Harvard, and Edinburgh.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-stone-300 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 font-mono text-xs font-bold">
                LEVEL C
              </span>
              <span className="text-stone-600 text-xs font-bold">Institutional</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">
              Authoritative Heritage Archives
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Publications by specialized heritage foundations such as King Abdulaziz Foundation (Darah), UNESCO World Heritage Centre, and the Arab League.
            </p>
          </div>
        </div>

        {/* Master Archival Bibliography List */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-6 pb-2 border-b border-stone-100">
            {language === 'ar' ? 'المراجع الببليوغرافية الأساسية' : 'Primary Archival Bibliography'}
          </h2>

          <div className="space-y-4">
            {sourcesBibliography.map((source) => (
              <div 
                key={source.id}
                className="p-5 rounded-xl bg-[#F9FAFB] border border-stone-200/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold ${
                      source.tier === 'A' ? 'bg-emerald-900 text-antique-gold-300' :
                      source.tier === 'B' ? 'bg-antique-gold-200 text-antique-gold-900' :
                      'bg-stone-200 text-stone-800'
                    }`}>
                      Tier {source.tier}
                    </span>
                    <span className="font-serif font-bold text-emerald-950 text-sm">
                      {source.title}
                    </span>
                  </div>
                  <div className="text-xs text-stone-600 font-sans">
                    <strong>{source.author}</strong> ({source.year}) · <em>{source.publisher}</em>
                  </div>
                  {source.description && (
                    <div className="text-xs text-stone-500 mt-1">
                      {source.description}
                    </div>
                  )}
                </div>

                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-antique-gold-700 hover:text-antique-gold-900 shrink-0"
                  >
                    View Official Document ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

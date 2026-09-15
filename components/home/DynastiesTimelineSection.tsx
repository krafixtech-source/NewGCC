'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { royalFamiliesData } from '@/lib/data/royalty';
import { useLanguage } from '../LanguageProvider';

export const DynastiesTimelineSection: React.FC = () => {
  const [selectedDynasty, setSelectedDynasty] = useState(royalFamiliesData[0]);
  const { language } = useLanguage();

  return (
    <section className="bg-canvas py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              {language === 'ar' ? 'التسلسل الزمني للأسر الحاكمة' : 'Dynasties Through Time'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md">
            {language === 'ar'
              ? 'تتبع تاريخ تأسيس وسلالات الحكم في شبه الجزيرة العربية عبر أربعة قرون من التاريخ الموثق.'
              : 'Chronological timeline of establishment, sovereign lineages, and historical milestones across four centuries.'}
          </p>
        </div>

        {/* Horizontal Dynasty Selectors Ribbon */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10">
          {royalFamiliesData.map((rf) => {
            const isSelected = selectedDynasty.id === rf.id;
            return (
              <button
                key={rf.id}
                onClick={() => setSelectedDynasty(rf)}
                className={`px-4 py-2.5 border rounded-xl text-left rtl:text-right transition-all whitespace-nowrap shrink-0 shadow-sm ${
                  isSelected
                    ? 'bg-forest text-canvas-white font-bold border-forest shadow-md'
                    : 'bg-canvas-white text-ink border-border hover:bg-canvas-paper'
                }`}
              >
                <div className="font-serif text-xs font-bold">{rf.name}</div>
                <div className={`text-[10px] font-mono ${isSelected ? 'text-antiqueGold-light' : 'text-ink-muted'}`}>
                  Est. {rf.foundedYear} · {rf.country}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Dynasty Showcase Card */}
        <div className="bg-canvas-white border border-border rounded-2xl p-8 sm:p-10 shadow-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Dynasty Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-antiqueGold font-mono font-bold">
                  {selectedDynasty.country}
                </span>
                <span className="px-3 py-0.5 bg-canvas-paper border border-border text-xs font-mono font-semibold text-ink rounded-full">
                  Est. {selectedDynasty.foundedYear} CE
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                {selectedDynasty.name}
              </h3>
              <div className="font-arabic text-base text-forest font-semibold">
                {selectedDynasty.arabicName}
              </div>

              <p className="text-xs text-ink-muted leading-relaxed font-sans">
                {selectedDynasty.overview}
              </p>

              <div className="space-y-2 border-t border-border/80 pt-3 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Founder:</span>
                  <span className="font-semibold text-ink font-sans">{selectedDynasty.founder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Current Head:</span>
                  <span className="font-semibold text-ink font-sans">{selectedDynasty.currentHead}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Historical Seat:</span>
                  <span className="font-semibold text-ink font-sans truncate max-w-[180px]">{selectedDynasty.residences[0]}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/royalty/${selectedDynasty.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-canvas-white hover:bg-forest-light text-xs font-mono uppercase tracking-wider font-semibold transition-colors rounded-full shadow-md"
                >
                  <span>Explore {selectedDynasty.name} Lineage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Monarchs & Successions */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-antiqueGold mb-4">
                Historical Succession & Monarchs
              </h4>

              <div className="space-y-3">
                {selectedDynasty.rulers.map((ruler, idx) => (
                  <div
                    key={ruler.slug}
                    className="flex items-center justify-between p-3.5 border border-border bg-canvas-paper/40 hover:bg-canvas-paper hover:border-antiqueGold transition-all rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center bg-canvas-white border border-border text-ink text-xs font-mono font-bold rounded-full">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="font-serif text-xs font-bold text-ink">{ruler.name}</h5>
                        <span className="font-arabic text-[10px] text-ink-muted">{ruler.arabicName}</span>
                      </div>
                    </div>

                    <div className="text-right rtl:text-left">
                      <span className="block text-xs font-mono font-bold text-forest">{ruler.reign}</span>
                      <span className="block text-[10px] text-ink-muted truncate max-w-[130px] font-sans">{ruler.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

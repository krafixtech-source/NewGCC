'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, Compass, MapPin, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { royalFamiliesData } from '@/lib/data/royalty';
import { useLanguage } from '@/components/LanguageProvider';

export default function RoyaltyExplorerPage() {
  const [selectedSlug, setSelectedSlug] = useState<string>('house-of-saud');
  const { t } = useLanguage();

  const selectedFamily = royalFamiliesData.find(rf => rf.slug === selectedSlug) || royalFamiliesData[0];

  return (
    <div className="pt-24 pb-24 bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="py-8 text-center max-w-3xl mx-auto border-b border-border mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-1 text-xs font-serif uppercase tracking-widest text-forest font-semibold mb-3 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-antiqueGold" />
            <span>Cartographic Dynastic Intelligence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            Arabian Peninsula Royalty Explorer
          </h1>
          <p className="text-sm text-ink-muted font-light mt-2">
            Select a nation across the Arabian Peninsula to inspect its hereditary royal dynasty, founder, current head, and succession lineage.
          </p>
        </div>

        {/* Explorer Interface: Split Peninsula Map & Dynasty Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Peninsula Dynasties Ribbon & Selector */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xs font-bold uppercase tracking-widest text-forest border-b border-border pb-2">
              Select Arabian Peninsula Sovereign
            </h3>
            
            <div className="space-y-3">
              {royalFamiliesData.map(rf => {
                const isSelected = selectedSlug === rf.slug;
                return (
                  <div
                    key={rf.id}
                    onClick={() => setSelectedSlug(rf.slug)}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-forest bg-forest text-white shadow-md -translate-y-0.5'
                        : 'border-border bg-white text-ink hover:border-antiqueGold hover:bg-[#F9FAFB]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${
                        isSelected ? 'border-white/30 bg-white/10 text-white' : 'border-border bg-[#F9FAFB] text-antiqueGold'
                      }`}>
                        <Crown className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className={`font-serif text-sm font-bold ${isSelected ? 'text-white' : 'text-ink'}`}>{rf.name}</h4>
                        <span className={`font-arabicHeading text-xs font-semibold ${isSelected ? 'text-antiqueGold-light' : 'text-antiqueGold'}`}>{rf.arabicName}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`block text-xs font-semibold ${isSelected ? 'text-white' : 'text-forest'}`}>{rf.country}</span>
                      <span className={`block text-[10px] ${isSelected ? 'text-white/80' : 'text-ink-muted'}`}>Est. {rf.foundedYear} CE</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Dynasty Profile Inspection Card */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-[#F9FAFB] p-8 shadow-sm space-y-6">
            
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="text-xs font-serif uppercase tracking-widest text-antiqueGold font-bold">
                  {selectedFamily.country}
                </span>
                <h2 className="font-serif text-3xl font-bold text-forest mt-1">
                  {selectedFamily.name}
                </h2>
                <span className="font-arabicHeading text-lg text-antiqueGold font-semibold">
                  {selectedFamily.arabicName}
                </span>
              </div>

              <div className="text-right">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-forest font-serif border border-border shadow-sm">
                  {2026 - selectedFamily.foundedYear} Years of Heritage
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-serif">
              {selectedFamily.overview}
            </p>

            {/* Key Dynastic Positions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-2xl border border-border text-xs shadow-sm">
              <div>
                <span className="text-ink-subtle block text-[10px] uppercase">Dynasty Founder</span>
                <span className="font-serif text-sm font-bold text-ink">{selectedFamily.founder}</span>
                <span className="text-antiqueGold text-[11px] block">Founded in {selectedFamily.foundedYear} CE</span>
              </div>
              <div>
                <span className="text-ink-subtle block text-[10px] uppercase">Reigning Monarch & Head</span>
                <span className="font-serif text-sm font-bold text-forest">{selectedFamily.currentHead}</span>
                <span className="text-ink-muted text-[11px] block">{selectedFamily.currentTitle}</span>
              </div>
              {selectedFamily.crownPrince && (
                <div className="sm:col-span-2 border-t border-border pt-2">
                  <span className="text-ink-subtle block text-[10px] uppercase">Crown Prince & Heir</span>
                  <span className="font-serif text-sm font-bold text-ink">{selectedFamily.crownPrince.name}</span>
                  <span className="text-antiqueGold text-[11px] block">{selectedFamily.crownPrince.title}</span>
                </div>
              )}
            </div>

            {/* Historical Residences */}
            <div className="space-y-2">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-forest">
                Historical Dynastic Residences
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedFamily.residences.map((res, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border border-border bg-white text-ink shadow-sm">
                    {res}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/royalty/${selectedFamily.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-antiqueGold bg-forest px-6 py-3 text-xs font-bold text-white hover:bg-forest-light transition-all shadow-md flex-1"
              >
                <span>View Full Genealogical Family Tree</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/countries/${selectedFamily.countrySlug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-xs font-semibold text-ink hover:border-antiqueGold hover:bg-[#F9FAFB] transition-all shadow-sm"
              >
                <span>Inspect {selectedFamily.country} Profile</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

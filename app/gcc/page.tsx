import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Shield, Globe, Users, ArrowRight, Building2, Scale, Clock, Award, CheckCircle2 } from 'lucide-react';
import { countriesData } from '@/lib/data/countries';

export const metadata: Metadata = {
  title: 'The Gulf Cooperation Council (GCC) — History, Charter & Member States | GCC',
  description: 'Comprehensive historical and institutional documentation of the Gulf Cooperation Council (GCC), established in 1981 by Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the UAE.',
};

export default function GCCPage() {
  const gccCountries = countriesData.filter(c => c.isGCC);

  const summits = [
    { year: 1981, location: 'Abu Dhabi, UAE', title: 'Inaugural Summit & Charter Signing', desc: 'The founding Charter of the GCC was officially signed by the six heads of state on 25 May 1981.' },
    { year: 1984, location: 'Kuwait City, Kuwait', title: 'Peninsula Shield Force Formed', desc: 'Creation of the joint military defensive alliance mechanism.' },
    { year: 2001, location: 'Muscat, Oman', title: 'GCC Economic Agreement Adopted', desc: 'Adoption of the unified economic agreement paving the way for customs union.' },
    { year: 2003, location: 'Doha, Qatar', title: 'GCC Customs Union Inauguration', desc: 'Implementation of the unified external customs tariff across all ports.' },
    { year: 2008, location: 'Doha, Qatar', title: 'GCC Common Market Launched', desc: 'Granting full freedom of movement, employment, and investment for all GCC citizens.' },
    { year: 2021, location: 'AlUla, Saudi Arabia', title: 'AlUla Declaration (41st Summit)', desc: 'Historical reconciliation affirming full regional solidarity and economic acceleration.' }
  ];

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen text-ink selection:bg-gold selection:text-midnight">
      
      {/* 1. Hero Header */}
      <section className="relative py-16 bg-white text-ink border-b border-border overflow-hidden">
        <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-4 py-1 text-xs font-serif uppercase tracking-widest text-forest font-semibold mb-4 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-antiqueGold" />
            <span>Regional Integration Framework</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-forest">
            The Gulf Cooperation Council
          </h1>
          <div className="font-arabicHeading text-2xl sm:text-3xl text-antiqueGold mt-2 font-semibold">
            مجلس التعاون لدول الخليج العربية
          </div>

          <p className="mt-6 text-sm sm:text-base text-ink-muted font-light leading-relaxed">
            Established on 25 May 1981 in Abu Dhabi, the Cooperation Council for the Arab States of the Gulf is a regional intergovernmental political and economic union comprising Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* 2. Key Statistical Indicators */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-sand bg-white p-5 text-center shadow-royal">
            <span className="font-serif text-3xl font-bold text-emerald block">1981</span>
            <span className="text-xs text-stone uppercase tracking-wider block mt-1">Founded in Abu Dhabi</span>
          </div>
          <div className="rounded-2xl border border-sand bg-white p-5 text-center shadow-royal">
            <span className="font-serif text-3xl font-bold text-emerald block">6 Nations</span>
            <span className="text-xs text-stone uppercase tracking-wider block mt-1">Sovereign Member States</span>
          </div>
          <div className="rounded-2xl border border-sand bg-white p-5 text-center shadow-royal">
            <span className="font-serif text-3xl font-bold text-emerald block">$2.2 Trillion</span>
            <span className="text-xs text-stone uppercase tracking-wider block mt-1">Combined Nominal GDP</span>
          </div>
          <div className="rounded-2xl border border-sand bg-white p-5 text-center shadow-royal">
            <span className="font-serif text-3xl font-bold text-emerald block">59.5 Million</span>
            <span className="text-xs text-stone uppercase tracking-wider block mt-1">Combined Population</span>
          </div>
        </div>
      </div>

      {/* 3. Main Content Columns */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section: What is the GCC? */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
              The Founding Charter & Purpose
            </h2>
            <p className="text-sm text-stone-dark leading-relaxed">
              Article 4 of the GCC Charter stipulates the core objectives: effecting coordination, integration, and inter-connection between member states in all fields in order to achieve unity between them; deepening ties between their peoples; establishing similar regulations in various fields including economy, finance, trade, customs, tourism, legislation, and administration; and fostering scientific and technological progress.
            </p>
            <p className="text-sm text-stone-dark leading-relaxed">
              Headquartered in Riyadh, Saudi Arabia, the GCC operates through three principal organs: the Supreme Council (the highest authority comprising heads of state), the Ministerial Council (foreign ministers), and the Secretariat General.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-gold/30 bg-emerald p-7 text-ivory space-y-4 shadow-royal">
            <h3 className="font-serif text-lg font-bold text-gold-light border-b border-emerald-light/40 pb-2">
              Principal Governance Organs
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-ivory block text-sm">1. Supreme Council:</strong>
                <span className="text-sand-light">Highest authority consisting of the six heads of state, meeting annually in rotating presidencies.</span>
              </div>
              <div>
                <strong className="text-ivory block text-sm">2. Ministerial Council:</strong>
                <span className="text-sand-light">Composed of foreign ministers meeting quarterly to formulate joint policies.</span>
              </div>
              <div>
                <strong className="text-ivory block text-sm">3. Secretariat General:</strong>
                <span className="text-sand-light">Executive administrative body based in Riyadh, headed by the Secretary General.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 6 Member States Cards */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-midnight">
              The Six Sovereign Member States
            </h2>
            <p className="text-xs sm:text-sm text-stone mt-1">
              Click any member state to explore its dedicated digital encyclopedia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gccCountries.map(c => (
              <Link
                key={c.id}
                href={`/countries/${c.slug}`}
                className="group rounded-2xl border border-sand bg-white p-6 shadow-sm hover:border-gold hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-serif font-bold text-emerald-dark">
                    Member Since 1981
                  </span>
                  <span className="font-arabicHeading text-xs text-gold-dark font-semibold">
                    {c.arabicName}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-midnight group-hover:text-emerald transition-colors">
                  {c.name}
                </h3>

                <p className="text-xs text-stone-dark mt-2 line-clamp-2 leading-relaxed">
                  {c.summary}
                </p>

                <div className="grid grid-cols-2 gap-2 border-t border-sand/40 pt-3 mt-4 text-xs">
                  <div>
                    <span className="text-stone block text-[10px]">Capital:</span>
                    <span className="font-bold text-midnight">{c.capital}</span>
                  </div>
                  <div>
                    <span className="text-stone block text-[10px]">Head of State:</span>
                    <span className="font-semibold text-midnight truncate block">{c.headOfState}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Milestone Summits Timeline */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
            Major Historical GCC Summits & Milestones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summits.map(s => (
              <div key={s.year} className="rounded-2xl border border-sand bg-white p-6 shadow-sm space-y-2 hover:border-gold transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-emerald-dark">{s.year}</span>
                  <span className="text-[11px] font-semibold text-stone">{s.location}</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-midnight">{s.title}</h4>
                <p className="text-xs text-stone-dark leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

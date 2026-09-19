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
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-ink">
              The Six Sovereign Member States
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1 font-sans">
              Click any member state to explore its dedicated digital encyclopedia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gccCountries.map(c => (
              <Link
                key={c.id}
                href={`/countries/${c.slug}`}
                className="group relative flex flex-col justify-between aspect-[3/4.2] sm:aspect-[3/4.4] w-full bg-slate-950 border border-border hover:border-antiqueGold transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl"
              >
                {/* Background Image with Zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${c.heroImageUrl || "/images/alula.jpg"}')` }}
                />

                {/* Dark Vignette Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/35 group-hover:from-black transition-colors duration-300 pointer-events-none" />

                {/* Top Badges */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-forest text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                    Member Since 1981
                  </span>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 bg-antiqueGold text-forest shadow-sm">
                    {c.isoCode}
                  </span>
                </div>

                {/* Bottom Information Overlaid on Image */}
                <div className="relative z-10 p-6 flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="text-sm font-arabicHeading font-bold text-[#E5C98E] block mb-1">
                      {c.arabicName}
                    </span>
                    <h3 className="font-serif font-bold text-3xl text-white group-hover:text-[#E5C98E] transition-colors leading-tight">
                      {c.name}
                    </h3>
                  </div>

                  <p className="text-xs text-white/75 font-sans leading-relaxed line-clamp-2 mb-4">
                    {c.summary}
                  </p>

                  {/* Metadata details */}
                  <div className="space-y-1 text-xs text-white/85 font-sans mb-4 pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Capital:</span>
                      <span className="font-semibold text-white">{c.capital}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Head of State:</span>
                      <span className="font-semibold text-white truncate max-w-[160px]">{c.headOfState}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-antiqueGold-light group-hover:text-white font-semibold transition-colors">
                    <span>Explore Sovereign Profile</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
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

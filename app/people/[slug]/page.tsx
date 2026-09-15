import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { User, Crown, Calendar, MapPin, Award, Clock, ArrowRight, ChevronRight, FileText } from 'lucide-react';
import { peopleData, getPersonBySlug } from '@/lib/data/people';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return peopleData.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getPersonBySlug(slug);
  if (!person) return { title: 'Person Not Found | GCC' };

  return {
    title: `${person.name} (${person.arabicName}) — Biography, Reign & Legacy | GCC`,
    description: `Biographical archive and historical reign documentation of ${person.name}, ${person.title}.`,
  };
}

export default async function PersonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-ink selection:bg-antiqueGold selection:text-ink pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone mb-6 font-serif">
          <Link href="/" className="hover:text-emerald">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/people" className="hover:text-emerald">People</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-dark font-semibold">{person.name}</span>
        </nav>

        {/* Hero Header Card */}
        <div className="rounded-2xl border border-border bg-canvas-white p-8 sm:p-10 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Portrait Image if available */}
            {person.portraitUrl && (
              <div className="relative w-48 sm:w-56 aspect-[4/5] rounded-xl overflow-hidden bg-canvas-paper border border-border shrink-0 shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-top"
                  style={{ backgroundImage: `url('${person.portraitUrl}')` }}
                />
                {person.isCurrent && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-canvas-white/95 text-forest text-[10px] font-mono font-bold tracking-wider uppercase border border-border shadow-sm">
                      Reigning
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-3 flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="rounded bg-forest text-canvas-white px-2.5 py-0.5 text-[11px] font-bold font-mono uppercase">
                  {person.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-ink-muted">
                  <MapPin className="h-3.5 w-3.5 text-antiqueGold" />
                  {person.country}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
                {person.name}
              </h1>
              <div className="font-arabic text-xl sm:text-2xl text-forest font-semibold">
                {person.arabicName}
              </div>

              <p className="text-base text-antiqueGold font-medium">
                {person.title}
              </p>
            </div>

            {/* Quick Timeline Facts */}
            <div className="rounded-xl border border-border bg-canvas-paper p-5 space-y-2 text-xs text-ink-muted w-full md:w-auto md:min-w-[240px] font-mono">
              {person.reign && (
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-ink-muted">Reign:</span>
                  <span className="font-bold text-ink">{person.reign}</span>
                </div>
              )}
              {person.birthYear && (
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-ink-muted">Born:</span>
                  <span className="font-semibold text-ink">{person.birthYear} CE</span>
                </div>
              )}
              {person.deathYear && (
                <div className="flex justify-between border-b border-border/60 pb-1.5">
                  <span className="text-ink-muted">Died:</span>
                  <span className="font-semibold text-ink">{person.deathYear} CE</span>
                </div>
              )}
              {person.dynasty && (
                <div className="flex justify-between">
                  <span className="text-ink-muted">Dynasty:</span>
                  <span className="font-semibold text-forest">{person.dynasty}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Biography */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                Biographical Overview
              </h2>
              <p className="text-sm sm:text-base text-stone-dark leading-relaxed font-serif">
                {person.biography}
              </p>
            </section>

            {/* Early Life */}
            {person.earlyLife && (
              <section className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                  Early Life & Formative Years
                </h3>
                <p className="text-sm text-stone-dark leading-relaxed">
                  {person.earlyLife}
                </p>
              </section>
            )}

            {/* Rise to Power / Accomplishments */}
            {person.riseToPower && (
              <section className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                  Rise to Leadership & Statecraft
                </h3>
                <p className="text-sm text-stone-dark leading-relaxed">
                  {person.riseToPower}
                </p>
              </section>
            )}

            {/* Political Legacy */}
            {person.politicalLegacy && (
              <section className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                  Historical Legacy & Civilizational Impact
                </h3>
                <p className="text-sm text-stone-dark leading-relaxed">
                  {person.politicalLegacy}
                </p>
              </section>
            )}

            {/* Chronological Milestones Timeline */}
            {person.timeline && person.timeline.length > 0 && (
              <section className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold-dark" />
                  <span>Biographical Chronology</span>
                </h3>
                <div className="space-y-3">
                  {person.timeline.map((evt, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-sand">
                      <span className="font-serif text-sm font-bold text-emerald-dark shrink-0">{evt.year}</span>
                      <p className="text-xs text-stone-dark">{evt.event}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* References */}
            <section className="rounded-xl border border-sand bg-white p-5 space-y-2 text-xs text-stone-dark">
              <div className="flex items-center gap-1.5 text-gold-dark font-serif font-bold uppercase text-[11px]">
                <FileText className="h-4 w-4" />
                <span>Peer-Reviewed Biographical Sources</span>
              </div>
              <p>
                [1] National Biographical Registries, State Archives, and verified historical documentation.
              </p>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Honours & Titles */}
            {person.honours && person.honours.length > 0 && (
              <div className="rounded-xl border border-sand bg-white p-6 space-y-3 shadow-sm">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-dark flex items-center gap-1.5 border-b border-sand/40 pb-2">
                  <Award className="h-4 w-4 text-gold-dark" />
                  <span>Honours & Orders</span>
                </h4>
                <ul className="space-y-2 text-xs text-stone-dark">
                  {person.honours.map((honour, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald font-bold">•</span>
                      <span>{honour}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Country Association */}
            <div className="rounded-xl border border-sand bg-white p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-serif uppercase tracking-widest text-stone font-bold">
                Country of Governance / Heritage
              </span>
              <h4 className="font-serif text-xl font-bold text-midnight">
                {person.country}
              </h4>
              <Link
                href={`/countries/${person.countrySlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-dark font-bold hover:underline"
              >
                <span>Explore {person.country} Archive</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

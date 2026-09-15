import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, Landmark, Calendar, MapPin, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { historicalErasData, getHistoricalEraBySlug } from '@/lib/data/history';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return historicalErasData.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const era = getHistoricalEraBySlug(slug);
  if (!era) return { title: 'Era Not Found | GCC' };

  return {
    title: `${era.name} (${era.arabicName}) — History, Culture & Architecture | GCC`,
    description: `Comprehensive historical study of ${era.name}: origins, territorial span, scientific achievements, architecture, and enduring civilizational legacy.`,
  };
}

export default async function HistoricalEraDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const era = getHistoricalEraBySlug(slug);

  if (!era) {
    notFound();
  }

  return (
    <div className="bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 font-serif">
          <Link href="/" className="hover:text-forest">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/history" className="hover:text-forest">History</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-forest font-semibold">{era.name}</span>
        </nav>

        {/* Hero Banner */}
        <div className="rounded-2xl border border-border bg-[#F9FAFB] p-8 sm:p-12 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-forest mb-3 font-semibold shadow-sm">
                <Clock className="h-3.5 w-3.5 text-antiqueGold" />
                <span>
                  {era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — {typeof era.endYear === 'number' && era.endYear < 0 ? `${Math.abs(era.endYear)} BCE` : era.endYear}
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink">
                {era.name}
              </h1>
              <div className="font-arabicHeading text-2xl sm:text-3xl text-antiqueGold font-semibold mt-1">
                {era.arabicName}
              </div>
            </div>

            <Link
              href="/timeline"
              className="rounded-full border border-antiqueGold bg-forest px-6 py-3 text-xs font-bold text-white hover:bg-forest-light transition-all shrink-0 shadow-md"
            >
              View on Timeline Explorer
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <section className="space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest border-b border-border pb-2">
                Overview & Historical Significance
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed font-serif">
                {era.overview}
              </p>
            </section>

            {/* Origins & Territory */}
            <section className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-border pb-2">
                Geographic Span & Origins
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {era.origins}
              </p>
              <div className="rounded-xl border border-border bg-[#F9FAFB] p-4 text-xs text-ink-muted">
                <strong className="text-forest block mb-1">Territorial Extent:</strong>
                {era.territory}
              </div>
            </section>

            {/* Science & Culture */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-white p-5 space-y-2 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-forest">Science & Knowledge</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{era.science}</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-5 space-y-2 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-forest">Culture & Arts</h4>
                <p className="text-xs text-ink-muted leading-relaxed">{era.culture}</p>
              </div>
            </section>

            {/* Architecture */}
            <section className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-border pb-2">
                Monumental Architecture & Urbanism
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {era.architecture}
              </p>
            </section>

            {/* Key Events */}
            <section className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-border pb-2 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-antiqueGold" />
                <span>Pivotal Historical Events</span>
              </h3>
              <div className="space-y-3">
                {era.keyEvents.map((evt, idx) => (
                  <div key={idx} className="rounded-xl border border-border bg-[#F9FAFB] p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-forest">{evt.title}</span>
                      <span className="text-xs text-antiqueGold font-bold">{evt.year}</span>
                    </div>
                    <p className="text-xs text-ink-muted">{evt.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Legacy */}
            <section className="space-y-3 rounded-xl border border-border bg-[#F9FAFB] p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-forest">
                Enduring Civilizational Legacy
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {era.legacy}
              </p>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Key Rulers */}
            <div className="rounded-xl border border-border bg-[#F9FAFB] p-6 space-y-3 shadow-sm">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-forest border-b border-border pb-2">
                Prominent Sovereigns & Leaders
              </h4>
              <ul className="space-y-2 text-xs text-ink-muted">
                {era.keyRulers.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-antiqueGold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline Explorer banner */}
            <div className="rounded-xl border border-border bg-white p-6 space-y-3 text-center shadow-sm">
              <Clock className="h-8 w-8 text-antiqueGold mx-auto" />
              <h4 className="font-serif text-base font-bold text-forest">
                Chronological Explorer
              </h4>
              <p className="text-xs text-ink-muted">
                Inspect cross-dynasty timelines spanning four millennia.
              </p>
              <Link
                href="/timeline"
                className="inline-block w-full rounded-full border border-antiqueGold bg-forest py-2.5 text-xs font-bold text-white hover:bg-forest-light transition-all shadow-md"
              >
                Open Timeline
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

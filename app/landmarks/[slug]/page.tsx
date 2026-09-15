import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Landmark as LandmarkIcon, MapPin, Calendar, Sparkles, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { landmarksData, getLandmarkBySlug } from '@/lib/data/landmarks';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return landmarksData.map(l => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landmark = getLandmarkBySlug(slug);
  if (!landmark) return { title: 'Landmark Not Found | GCC' };

  return {
    title: `${landmark.name} (${landmark.arabicName}) — History, Architecture & Archaeology | GCC`,
    description: `Architectural and archaeological documentation of ${landmark.name}, ${landmark.country}.`,
  };
}

export default async function LandmarkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const landmark = getLandmarkBySlug(slug);

  if (!landmark) {
    notFound();
  }

  return (
    <div className="bg-white text-ink min-h-screen selection:bg-gold selection:text-midnight pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 font-serif">
          <Link href="/" className="hover:text-forest">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/landmarks" className="hover:text-forest">Landmarks</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-forest font-semibold">{landmark.name}</span>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border border-border bg-[#F9FAFB] p-8 sm:p-12 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-forest mb-2 font-semibold shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-antiqueGold" />
                <span>{landmark.country} {landmark.city ? `· ${landmark.city}` : ''}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink">
                {landmark.name}
              </h1>
              <div className="font-arabicHeading text-2xl sm:text-3xl text-antiqueGold font-semibold">
                {landmark.arabicName}
              </div>

              <p className="font-display text-lg text-ink-muted italic mt-2">
                {landmark.architectureStyle}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 space-y-2 text-xs text-ink-muted min-w-[220px] shadow-sm">
              <div className="flex justify-between border-b border-border pb-1.5">
                <span className="text-ink-subtle">Era:</span>
                <span className="font-bold text-ink">{landmark.era}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-subtle">Construction:</span>
                <span className="font-semibold text-forest font-bold">{landmark.constructionDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <section className="space-y-4 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest border-b border-border pb-2">
                Monuments Overview & Significance
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed font-serif">
                {landmark.overview}
              </p>
            </section>

            {/* History */}
            <section className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-border pb-2">
                Historical Context & Construction
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {landmark.history}
              </p>
            </section>

            {/* Archaeology (if applicable) */}
            {landmark.archaeology && (
              <section className="space-y-3 rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-forest">
                  Archaeological Excavation & Structure
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {landmark.archaeology}
                </p>
              </section>
            )}

            {/* Significance */}
            <section className="space-y-3 rounded-2xl border border-border bg-[#F9FAFB] p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-forest">
                Civilizational & Heritage Significance
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {landmark.significance}
              </p>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Country Card Link */}
            <div className="rounded-2xl border border-border bg-[#F9FAFB] p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-serif uppercase tracking-widest text-antiqueGold font-bold">
                Location
              </span>
              <h4 className="font-serif text-2xl font-bold text-forest">
                {landmark.country}
              </h4>
              <Link
                href={`/countries/${landmark.countrySlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-forest font-bold hover:underline"
              >
                <span>View {landmark.country} Encyclopedia</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

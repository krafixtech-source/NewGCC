import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Building2, MapPin, Users, Globe, ArrowRight, ChevronRight, FileText, Bus } from 'lucide-react';
import { citiesData, getCityBySlug } from '@/lib/data/cities';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return citiesData.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: 'City Not Found | GCC' };

  return {
    title: `${city.name} (${city.arabicName}) — History, Districts & Architecture | GCC`,
    description: `Comprehensive urban and historical profile of ${city.name}, ${city.country}.`,
  };
}

export default async function CityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-ink selection:bg-antiqueGold selection:text-ink pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone mb-6 font-serif">
          <Link href="/" className="hover:text-emerald">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/cities" className="hover:text-emerald">Cities</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-dark font-semibold">{city.name}</span>
        </nav>

        {/* Hero Card */}
        <div className="rounded-3xl border border-sand bg-white p-8 sm:p-12 shadow-royal mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-xs font-semibold text-gold-dark font-serif uppercase">
                  <MapPin className="h-3.5 w-3.5" />
                  {city.country}
                </span>
                {city.isCapital && (
                  <span className="rounded-full bg-emerald-dark text-ivory px-2.5 py-0.5 text-[10px] font-bold">
                    National Capital
                  </span>
                )}
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight">
                {city.name}
              </h1>
              <div className="font-arabicHeading text-2xl text-emerald-dark font-semibold">
                {city.arabicName}
              </div>

              <p className="text-sm text-stone max-w-2xl mt-2 leading-relaxed">
                {city.shortDescription}
              </p>
            </div>

            <div className="rounded-2xl border border-sand bg-ivory-muted p-5 space-y-2 text-xs text-stone-dark min-w-[220px]">
              <div className="flex justify-between border-b border-sand/40 pb-1.5">
                <span className="text-stone">Population:</span>
                <span className="font-bold text-midnight">{(city.population / 1000000).toFixed(2)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone">Country:</span>
                <span className="font-semibold text-emerald-dark">{city.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* History */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                Urban History & Evolution
              </h2>
              <p className="text-sm text-stone-dark leading-relaxed font-serif">
                {city.history}
              </p>
            </section>

            {/* Architecture */}
            <section className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                Architectural Identity
              </h3>
              <p className="text-sm text-stone-dark leading-relaxed">
                {city.architecture}
              </p>
            </section>

            {/* Economy & Culture */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-sand bg-white p-6 space-y-2 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-midnight">Economic Dynamics</h4>
                <p className="text-xs text-stone-dark leading-relaxed">{city.economy}</p>
              </div>
              <div className="rounded-2xl border border-sand bg-white p-6 space-y-2 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-midnight">Cultural Vitality</h4>
                <p className="text-xs text-stone-dark leading-relaxed">{city.culture}</p>
              </div>
            </section>

            {/* Transportation */}
            <section className="space-y-3 rounded-2xl border border-sand bg-white p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-midnight flex items-center gap-2">
                <Bus className="h-4 w-4 text-emerald-dark" />
                <span>Transportation Infrastructure</span>
              </h3>
              <p className="text-xs text-stone-dark leading-relaxed">
                {city.transportation}
              </p>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Prominent Districts */}
            <div className="rounded-2xl border border-sand bg-white p-6 space-y-3 shadow-sm">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-dark border-b border-sand/40 pb-2">
                Notable Districts & Quarters
              </h4>
              <div className="flex flex-wrap gap-2">
                {city.districts.map((dist, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-ivory-muted border border-sand text-stone-dark">
                    {dist}
                  </span>
                ))}
              </div>
            </div>

            {/* Country Association */}
            <div className="rounded-2xl border border-sand bg-white p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-serif uppercase tracking-widest text-stone font-bold">
                Nation Profile
              </span>
              <h4 className="font-serif text-xl font-bold text-midnight">
                {city.country}
              </h4>
              <Link
                href={`/countries/${city.countrySlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-dark font-bold hover:underline"
              >
                <span>View {city.country} Encyclopedia</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Globe, Shield, Building2, Crown, Users, MapPin, Landmark as LandmarkIcon, 
  Calendar, FileText, ArrowRight, ExternalLink, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { countriesData, getCountryBySlug } from '@/lib/data/countries';
import { getRoyalFamilyBySlug } from '@/lib/data/royalty';
import { peopleData } from '@/lib/data/people';
import { citiesData } from '@/lib/data/cities';
import { landmarksData } from '@/lib/data/landmarks';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return countriesData.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: 'Country Not Found | GCC' };

  return {
    title: `${country.name} (${country.arabicName}) — History, Royal Family, Culture & Facts | GCC`,
    description: `Explore ${country.name}'s comprehensive digital encyclopedia: history, government, royal dynasty, economy, major cities, landmarks, and verified historical citations.`,
    openGraph: {
      title: `${country.name} — Arab World Digital Encyclopedia`,
      description: country.summary,
      images: [country.heroImageUrl],
    }
  };
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const royalFamily = country.royalDynastySlug ? getRoyalFamilyBySlug(country.royalDynastySlug) : null;
  const countryCities = citiesData.filter(city => city.countrySlug === country.slug);
  const countryLandmarks = landmarksData.filter(lm => lm.countrySlug === country.slug);
  const countryPeople = peopleData.filter(p => p.countrySlug === country.slug);

  const sectionsNav = [
    { id: 'overview', label: 'Overview' },
    { id: 'history', label: 'History & Milestones' },
    { id: 'government', label: 'Government & Leadership' },
    ...(royalFamily ? [{ id: 'royalty', label: 'Royal Family & Dynasty' }] : []),
    { id: 'geography', label: 'Geography & Terrain' },
    { id: 'economy', label: 'Economy & Development' },
    { id: 'culture', label: 'Culture & Heritage' },
    ...(countryCities.length > 0 ? [{ id: 'cities', label: 'Major Cities' }] : []),
    ...(countryLandmarks.length > 0 ? [{ id: 'landmarks', label: 'Landmarks' }] : []),
    ...(country.nationalSymbols && country.nationalSymbols.length > 0 ? [{ id: 'symbols', label: 'National Symbols' }] : []),
    ...(countryPeople.length > 0 ? [{ id: 'people', label: 'Notable Figures' }] : []),
    { id: 'references', label: 'References & Citations' },
  ];

  return (
    <div className="bg-white min-h-screen text-ink selection:bg-antiqueGold selection:text-ink">
      
      {/* 1. Monumental Hero Section */}
      <section className="relative min-h-[50vh] flex items-end pb-12 pt-28 bg-white border-b border-[#E5E7EB] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={country.heroImageUrl}
            alt={country.name}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-archival px-4 sm:px-6 lg:px-8 w-full text-ivory">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-sand-light/80 mb-4 font-serif">
            <Link href="/" className="hover:text-gold">Arab World Archive</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/countries" className="hover:text-gold">{country.region}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold font-semibold">{country.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              {country.isGCC && (
                <span className="inline-block rounded-full bg-emerald px-3 py-1 text-[11px] font-bold text-ivory uppercase tracking-wider mb-2 border border-gold/30 shadow-sm">
                  Gulf Cooperation Council (GCC) Member State
                </span>
              )}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory">
                {country.name}
              </h1>
              <div className="font-arabicHeading text-2xl sm:text-3xl text-gold-light font-semibold mt-1">
                {country.arabicName}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/compare"
                className="rounded-full border border-gold/40 bg-midnight/80 px-5 py-2 text-xs font-semibold text-ivory hover:border-gold hover:text-gold transition-all"
              >
                Compare with other Nations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Sidebar Grid */}
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Navigation & Table of Contents (Desktop Left) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4">
            <div className="rounded-2xl border border-sand bg-white p-5 shadow-sm">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-dark mb-3 border-b border-sand/40 pb-2">
                Table of Contents
              </h4>
              <nav className="space-y-1 text-xs">
                {sectionsNav.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-1.5 px-2.5 rounded-lg text-stone-dark hover:bg-emerald/10 hover:text-emerald font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-emerald p-5 text-ivory text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-serif font-bold text-gold-light uppercase text-[10px]">
                <Shield className="h-3.5 w-3.5 text-gold" />
                <span>Archival Certification</span>
              </div>
              <p className="text-[11px] text-sand-light/90 leading-relaxed">
                This country profile is maintained by the GCC Historical Council according to Level A & B peer-reviewed documentation.
              </p>
            </div>
          </div>

          {/* Center Column: Long-form Encyclopedia Content */}
          <div className="lg:col-span-6 space-y-14">
            
            {/* Overview Section */}
            <section id="overview" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                Overview & Introduction
              </h2>
              <p className="text-sm sm:text-base text-stone-dark leading-relaxed font-serif">
                {country.overview}
                <a href="#references" className="citation-badge">[1]</a>
              </p>
              <div className="rounded-2xl bg-sand/20 border border-sand/60 p-5 text-xs text-stone-dark leading-relaxed">
                <strong className="text-midnight block mb-1 font-serif text-sm">Encyclopedic Abstract:</strong>
                {country.summary}
                <a href="#references" className="citation-badge">[2]</a>
              </div>
            </section>

            {/* History Section */}
            <section id="history" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2 flex items-center justify-between">
                <span>History & Foundation</span>
                <span className="text-xs font-sans text-stone">Est. {country.foundingYear} CE</span>
              </h2>
              <p className="text-sm text-stone-dark leading-relaxed">
                {country.historyText}
              </p>
            </section>

            {/* Government Section */}
            <section id="government" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                Government & Political Structure
              </h2>
              <p className="text-sm text-stone-dark leading-relaxed">
                {country.governmentText}
              </p>

              <div className="grid grid-cols-2 gap-3 bg-white p-5 rounded-2xl border border-sand text-xs shadow-sm">
                <div>
                  <span className="text-stone block text-[10px] uppercase">Government Model</span>
                  <span className="font-semibold text-midnight">{country.governmentType}</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Head of State</span>
                  <span className="font-semibold text-midnight">{country.headOfState}</span>
                </div>
                {country.crownPrince && (
                  <div>
                    <span className="text-stone block text-[10px] uppercase">Crown Prince / Heir</span>
                    <span className="font-semibold text-midnight">{country.crownPrince}</span>
                  </div>
                )}
                {country.headOfGovernment && (
                  <div>
                    <span className="text-stone block text-[10px] uppercase">Head of Government</span>
                    <span className="font-semibold text-midnight">{country.headOfGovernment}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Royal Family Section (if applicable) */}
            {royalFamily && (
              <section id="royalty" className="space-y-4 rounded-2xl border border-gold/40 bg-emerald p-6 sm:p-8 text-ivory shadow-royal">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif uppercase tracking-widest text-gold-light font-bold flex items-center gap-1.5">
                    <Crown className="h-4 w-4 text-gold" />
                    Ruling Dynasty
                  </span>
                  <Link
                    href={`/royalty/${royalFamily.slug}`}
                    className="text-xs text-gold hover:underline font-semibold"
                  >
                    Open Royal House Page →
                  </Link>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ivory">
                  {royalFamily.name} ({royalFamily.arabicName})
                </h3>

                <p className="text-xs text-sand-light leading-relaxed">
                  {royalFamily.overview}
                </p>

                <div className="pt-3 border-t border-emerald-light/30 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gold-light block text-[10px] uppercase">Founder:</span>
                    <span className="font-semibold">{royalFamily.founder} ({royalFamily.foundedYear} CE)</span>
                  </div>
                  <div>
                    <span className="text-gold-light block text-[10px] uppercase">Current Monarch:</span>
                    <span className="font-semibold">{royalFamily.currentHead}</span>
                  </div>
                </div>
              </section>
            )}

            {/* Geography Section */}
            <section id="geography" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                Geography & Topography
              </h2>
              <p className="text-sm text-stone-dark leading-relaxed">
                {country.geographyText}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-white p-5 rounded-2xl border border-sand shadow-sm">
                <div>
                  <span className="text-stone block text-[10px] uppercase">Total Land Area</span>
                  <span className="font-bold text-midnight">{country.areaKm2.toLocaleString()} km²</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Latitude / Longitude</span>
                  <span className="font-bold text-midnight">{country.latitude.toFixed(2)}° N, {country.longitude.toFixed(2)}° E</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Time Zone</span>
                  <span className="font-bold text-midnight">{country.timeZone}</span>
                </div>
              </div>
            </section>

            {/* Economy Section */}
            <section id="economy" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                Economy & Sovereign Finance
              </h2>
              <p className="text-sm text-stone-dark leading-relaxed">
                {country.economyText}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-5 rounded-2xl border border-sand text-xs shadow-sm">
                <div>
                  <span className="text-stone block text-[10px] uppercase">Nominal GDP</span>
                  <span className="font-bold text-midnight text-sm">${country.gdpNominalBillion} Billion</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">GDP Per Capita</span>
                  <span className="font-bold text-midnight text-sm">${country.gdpPerCapita.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-stone block text-[10px] uppercase">Currency</span>
                  <span className="font-bold text-midnight">{country.currency}</span>
                </div>
              </div>
            </section>

            {/* Culture Section */}
            <section id="culture" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                Culture, Traditions & Architecture
              </h2>
              <p className="text-sm text-stone-dark leading-relaxed">
                {country.cultureText}
              </p>
            </section>

            {/* Major Cities */}
            {countryCities.length > 0 && (
              <section id="cities" className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                  Major Metropolitan & Historical Cities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {countryCities.map(city => (
                    <Link
                      key={city.id}
                      href={`/cities/${city.slug}`}
                      className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:border-gold hover:shadow-md transition-all"
                    >
                      <h4 className="font-serif text-base font-bold text-midnight group-hover:text-emerald">
                        {city.name} ({city.arabicName})
                      </h4>
                      <p className="text-xs text-stone mt-1 line-clamp-2">
                        {city.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Landmarks */}
            {countryLandmarks.length > 0 && (
              <section id="landmarks" className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                  Monumental Landmarks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {countryLandmarks.map(lm => (
                    <Link
                      key={lm.id}
                      href={`/landmarks/${lm.slug}`}
                      className="group rounded-2xl border border-sand bg-white p-5 shadow-sm hover:border-gold hover:shadow-md transition-all"
                    >
                      <span className="text-[10px] font-serif uppercase tracking-wider text-gold-dark font-semibold block">
                        {lm.architectureStyle}
                      </span>
                      <h4 className="font-serif text-base font-bold text-midnight group-hover:text-emerald mt-0.5">
                        {lm.name}
                      </h4>
                      <p className="text-xs text-stone mt-1 line-clamp-2">
                        {lm.overview}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* National Symbols */}
            {country.nationalSymbols && country.nationalSymbols.length > 0 && (
              <section id="symbols" className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight border-b border-sand/60 pb-2">
                  National Symbols & Emblems
                </h2>
                <div className="space-y-3">
                  {country.nationalSymbols.map((sym, idx) => (
                    <div key={idx} className="rounded-2xl bg-white border border-sand p-5 text-xs shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif font-bold text-midnight text-sm">
                          {sym.name}
                        </span>
                        {sym.arabicName && (
                          <span className="font-arabicHeading text-xs text-emerald-dark font-semibold">
                            {sym.arabicName}
                          </span>
                        )}
                      </div>
                      <p className="text-stone-dark">{sym.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Citations & References Section */}
            <section id="references" className="space-y-4 pt-6 border-t border-sand">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold-dark" />
                <h2 className="font-serif text-2xl font-bold text-midnight">
                  Archival References & Citations
                </h2>
              </div>
              <div className="rounded-2xl bg-white border border-sand p-6 space-y-3 text-xs text-stone-dark shadow-sm">
                {country.citations && country.citations.length > 0 ? (
                  country.citations.map((c, i) => (
                    <div key={c.id} className="flex items-start gap-2">
                      <span className="font-bold text-emerald font-serif">[{c.citationNumber || i + 1}]</span>
                      <p className="flex-1 text-stone-dark">
                        {c.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-emerald font-serif">[1]</span>
                    <p className="flex-1">
                      GCC National Gazettes and Sovereign Archives, Verified State Documentation Series, 2024.
                    </p>
                  </div>
                )}
              </div>
            </section>

          </div>

          {/* Quick Facts Information Card Sidebar (Desktop Right) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-3xl border border-sand bg-white p-6 shadow-royal space-y-5">
              <div className="border-b border-sand/50 pb-3 text-center">
                <span className="text-[11px] font-serif uppercase tracking-widest text-gold-dark font-bold block">
                  Sovereign Infobox
                </span>
                <h3 className="font-serif text-xl font-bold text-midnight mt-1">
                  {country.name}
                </h3>
                <span className="font-arabicHeading text-xs text-emerald-dark font-semibold">
                  {country.arabicName}
                </span>
              </div>

              {/* Facts List */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Official Name:</span>
                  <span className="font-semibold text-midnight text-right">{country.name}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Capital:</span>
                  <span className="font-semibold text-midnight text-right">{country.capital}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Largest City:</span>
                  <span className="font-semibold text-midnight text-right">{country.largestCity}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Population:</span>
                  <span className="font-semibold text-midnight text-right">{(country.population / 1000000).toFixed(2)}M</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Total Area:</span>
                  <span className="font-semibold text-midnight text-right">{country.areaKm2.toLocaleString()} km²</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Government:</span>
                  <span className="font-semibold text-midnight text-right truncate max-w-[130px]">{country.governmentType}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Head of State:</span>
                  <span className="font-semibold text-midnight text-right truncate max-w-[130px]">{country.headOfState}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Official Currency:</span>
                  <span className="font-semibold text-midnight text-right">{country.currency}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Calling Code:</span>
                  <span className="font-semibold text-midnight text-right">{country.callingCode}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Internet TLD:</span>
                  <span className="font-semibold text-midnight text-right font-mono">{country.internetDomain}</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-1.5">
                  <span className="text-stone">Time Zone:</span>
                  <span className="font-semibold text-midnight text-right">{country.timeZone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone">ISO 3166-1:</span>
                  <span className="font-semibold text-midnight text-right font-mono">{country.isoCode}</span>
                </div>
              </div>

              {/* Compare Button */}
              <Link
                href="/compare"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald/40 bg-ivory-muted py-2.5 text-xs font-semibold text-emerald-dark hover:bg-emerald hover:text-ivory hover:border-emerald transition-all"
              >
                <span>Compare Metrics</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

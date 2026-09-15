import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Sparkles, ArrowRight, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { cultureTopicsData, getCultureTopicBySlug } from '@/lib/data/culture';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cultureTopicsData.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getCultureTopicBySlug(slug);
  if (!topic) return { title: 'Topic Not Found | GCC' };

  return {
    title: `${topic.title} (${topic.arabicName}) — Culture & Heritage Treatise | GCC`,
    description: `Comprehensive cultural study of ${topic.title} in Arab civilization.`,
  };
}

export default async function CultureTopicDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getCultureTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-ink selection:bg-antiqueGold selection:text-ink pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone mb-6 font-serif">
          <Link href="/" className="hover:text-emerald">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/culture" className="hover:text-emerald">Culture</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-dark font-semibold">{topic.title}</span>
        </nav>

        {/* Hero Card */}
        <div className="rounded-2xl border border-sand bg-white p-8 sm:p-12 shadow-royal mb-12">
          <div className="space-y-2 max-w-3xl">
            <span className="rounded bg-emerald-dark text-ivory px-2.5 py-0.5 text-xs font-bold font-serif uppercase inline-block">
              {topic.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight">
              {topic.title}
            </h1>
            <div className="font-arabicHeading text-2xl text-emerald-dark font-semibold">
              {topic.arabicName}
            </div>
            <p className="text-base sm:text-lg text-stone font-serif italic mt-3 leading-relaxed">
              {topic.leadParagraph}
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                Overview & Societal Role
              </h2>
              <p className="text-sm sm:text-base text-stone-dark leading-relaxed font-serif">
                {topic.overview}
              </p>
            </section>

            {/* History */}
            <section className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-midnight border-b border-sand/60 pb-2">
                Historical Origins & Development
              </h3>
              <p className="text-sm text-stone-dark leading-relaxed">
                {topic.history}
              </p>
            </section>

            {/* Craftsmanship & Traditions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-sand bg-white p-5 space-y-2">
                <h4 className="font-serif text-lg font-bold text-midnight">Artisanal Craftsmanship</h4>
                <p className="text-xs text-stone-dark leading-relaxed">{topic.craftsmanship}</p>
              </div>
              <div className="rounded-xl border border-sand bg-white p-5 space-y-2">
                <h4 className="font-serif text-lg font-bold text-midnight">Living Traditions & Etiquette</h4>
                <p className="text-xs text-stone-dark leading-relaxed">{topic.traditions}</p>
              </div>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-sand bg-white p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-serif uppercase tracking-widest text-gold-dark font-bold">
                UNESCO Status
              </span>
              <h4 className="font-serif text-base font-bold text-midnight">
                Representative List of Intangible Cultural Heritage
              </h4>
              <p className="text-xs text-stone leading-relaxed">
                Documented and recognized for its vital transmission across generations of Arab practitioners.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

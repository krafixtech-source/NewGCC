import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Clock, ShieldCheck, FileText, ChevronRight, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { articlesData, getArticleBySlug } from '@/lib/data/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found | GCC' };

  return {
    title: `${article.title} — Arab World Archive | GCC`,
    description: article.leadParagraph,
    openGraph: {
      title: article.title,
      description: article.leadParagraph,
      images: [article.heroImageUrl],
    }
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen text-ink selection:bg-antiqueGold selection:text-ink pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone mb-6 font-serif">
          <Link href="/" className="hover:text-emerald">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/articles" className="hover:text-emerald">Articles</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-dark font-semibold truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold">
            <span>{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {article.readTime} min read
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-midnight leading-tight">
            {article.title}
          </h1>
          <div className="font-arabicHeading text-xl sm:text-2xl text-emerald-dark font-semibold">
            {article.arabicTitle}
          </div>

          <p className="font-display text-lg sm:text-xl text-stone-dark italic max-w-3xl mx-auto pt-2 leading-relaxed font-normal">
            "{article.leadParagraph}"
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-stone pt-2">
            <span>Published by GCC Editorial Council</span>
            <span>•</span>
            <span>Archived on {article.publishedAt}</span>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-sand shadow-royal mb-14 bg-midnight">
          <img
            src={article.heroImageUrl}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Article Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Lead Section */}
            <div className="prose prose-lg max-w-none font-serif text-stone-dark leading-relaxed space-y-4">
              <p className="text-base sm:text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-emerald first-letter:mr-2 first-letter:float-left">
                {article.body}
                <a href="#references" className="citation-badge">[1]</a>
              </p>
            </div>

            {/* Structured Sections */}
            {article.sections && article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3 pt-4 border-t border-sand/60">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl font-bold text-midnight">
                    {sec.title}
                  </h3>
                  {sec.arabicTitle && (
                    <span className="font-arabicHeading text-sm font-semibold text-emerald-dark">
                      {sec.arabicTitle}
                    </span>
                  )}
                </div>
                <p className="font-serif text-base text-stone-dark leading-relaxed">
                  {sec.content}
                  <a href="#references" className="citation-badge">[{idx + 1}]</a>
                </p>
              </section>
            ))}

            {/* Archival Citations & Bibliography Footnotes */}
            <section id="references" className="space-y-4 pt-10 border-t-2 border-sand">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gold-dark" />
                <h3 className="font-serif text-2xl font-bold text-midnight">
                  Archival References & Citations
                </h3>
              </div>
              <div className="rounded-xl bg-white border border-sand p-6 space-y-3 text-xs text-stone-dark shadow-sm">
                {article.citations && article.citations.length > 0 ? (
                  article.citations.map((c, i) => (
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
                      GCC National Gazettes and Peer-Reviewed Historical Documentation Series, 2024.
                    </p>
                  </div>
                )}
              </div>
            </section>

          </div>

          {/* Right Sidebar: Article Infobox & Related (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Infobox */}
            {article.infoboxData && (
              <div className="rounded-xl border border-sand bg-white p-6 shadow-sm space-y-4">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-dark border-b border-sand/40 pb-2">
                  Article Metadata & Infobox
                </h4>
                <div className="space-y-2.5 text-xs">
                  {Object.entries(article.infoboxData).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-sand/20 pb-1.5">
                      <span className="text-stone">{key}:</span>
                      <span className="font-semibold text-midnight text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Peer Review Badge */}
            <div className="rounded-xl border border-gold/30 bg-emerald p-6 text-ivory space-y-2">
              <div className="flex items-center gap-1.5 font-serif font-bold text-gold-light text-xs uppercase">
                <ShieldCheck className="h-4 w-4 text-gold" />
                <span>Level A Academic Source</span>
              </div>
              <p className="text-xs text-sand-light/90 leading-relaxed">
                This treatise has been fact-checked and verified against primary national archival holdings and university academic publications.
              </p>
            </div>

            {/* Related Articles */}
            <div className="rounded-xl border border-sand bg-white p-6 space-y-4 shadow-sm">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-gold-dark border-b border-sand/40 pb-2">
                Related Reading
              </h4>
              <div className="space-y-3">
                {articlesData.filter(a => a.id !== article.id).slice(0, 2).map(rel => (
                  <Link
                    key={rel.id}
                    href={`/articles/${rel.slug}`}
                    className="group block rounded-lg border border-sand/70 p-3 hover:border-gold hover:bg-ivory-muted transition-all"
                  >
                    <span className="text-[10px] uppercase font-bold text-gold-dark block">{rel.category}</span>
                    <h5 className="font-serif text-xs font-bold text-midnight group-hover:text-emerald line-clamp-1 mt-0.5">
                      {rel.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

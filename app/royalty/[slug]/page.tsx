import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Crown, Shield, Calendar, MapPin, ArrowRight, ChevronRight, User, Home, FileText } from 'lucide-react';
import { royalFamiliesData, getRoyalFamilyBySlug } from '@/lib/data/royalty';
import { TreeNode } from '@/lib/data/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return royalFamiliesData.map(rf => ({ slug: rf.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const rf = getRoyalFamilyBySlug(slug);
  if (!rf) return { title: 'Dynasty Not Found | GCC' };

  return {
    title: `${rf.name} (${rf.arabicName}) — Royal Family Tree, History & Rulers | GCC`,
    description: `Genealogical tree, historical succession, and biographical documentation of the ${rf.name} of ${rf.country}.`,
  };
}

const FamilyTreeNodeView: React.FC<{ node: TreeNode }> = ({ node }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm min-w-[200px] max-w-[260px] hover:border-antiqueGold hover:shadow-md transition-all">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F9FAFB] border border-border text-forest">
            <Crown className="h-4 w-4 text-antiqueGold" />
          </div>
          <span className="font-serif text-sm font-bold text-ink leading-tight">
            {node.name}
          </span>
        </div>
        <div className="font-arabicHeading text-xs text-antiqueGold font-medium">
          {node.arabicName}
        </div>
        {node.title && (
          <p className="text-[11px] text-ink-muted mt-1 leading-snug">
            {node.title}
          </p>
        )}
        {node.reign && (
          <span className="inline-block mt-2 rounded-full bg-[#F9FAFB] px-3 py-0.5 text-[9px] font-bold text-forest border border-border">
            Reign: {node.reign}
          </span>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <div className="relative pt-6 flex flex-col items-center">
          {/* Vertical connector line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[#E5E7EB]"></div>
          
          <div className="flex gap-6 items-start pt-2">
            {node.children.map((child, i) => (
              <FamilyTreeNodeView key={child.id || i} node={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default async function RoyalFamilyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const rf = getRoyalFamilyBySlug(slug);

  if (!rf) {
    notFound();
  }

  return (
    <div className="bg-white text-ink min-h-screen selection:bg-antiqueGold selection:text-ink pt-24 pb-24">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 font-serif">
          <Link href="/" className="hover:text-forest">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/royalty" className="hover:text-forest">Royal Houses</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-forest font-semibold">{rf.name}</span>
        </nav>

        {/* Hero Header Card */}
        <div className="rounded-3xl border border-border bg-[#F9FAFB] p-8 sm:p-12 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-forest mb-3 font-semibold shadow-sm">
                <Crown className="h-3.5 w-3.5 text-antiqueGold" />
                <span>Ruling Dynasty of {rf.country}</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink">
                {rf.name}
              </h1>
              <div className="font-arabicHeading text-2xl sm:text-3xl text-antiqueGold font-semibold mt-1">
                {rf.arabicName}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 space-y-2 text-xs text-ink-muted min-w-[240px] shadow-sm">
              <div className="flex justify-between">
                <span className="text-ink-subtle">Established:</span>
                <span className="font-semibold text-ink">{rf.foundedYear} CE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-subtle">Founder:</span>
                <span className="font-semibold text-ink">{rf.founder}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-subtle">Current Head:</span>
                <span className="font-semibold text-forest font-bold">{rf.currentHead}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & History */}
            <section className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-forest border-b border-border pb-2">
                Dynastic History & State Origins
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed font-serif">
                {rf.overview}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {rf.history}
              </p>
            </section>

            {/* Interactive Genealogical Tree Section */}
            <section className="rounded-3xl border border-border bg-[#F9FAFB] p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest flex items-center gap-2">
                    <Crown className="h-5 w-5 text-antiqueGold" />
                    Genealogical Royal Family Tree
                  </h3>
                  <p className="text-xs text-ink-muted mt-0.5">
                    Generational lineage tracing the founding ancestors, sovereign monarchs, and heirs.
                  </p>
                </div>
              </div>

              {/* Scrollable Tree Canvas */}
              <div className="overflow-x-auto py-6 px-4 bg-white rounded-2xl border border-border scrollbar-thin shadow-inner">
                <div className="min-w-[600px] flex justify-center">
                  <FamilyTreeNodeView node={rf.familyTree} />
                </div>
              </div>
            </section>

            {/* Monarchs & Successions */}
            <section className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-border pb-2">
                Monarchs & Historical Sovereigns
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rf.rulers.map(ruler => (
                  <div
                    key={ruler.slug}
                    className="rounded-2xl border border-border bg-white p-5 flex items-start gap-3.5 hover:border-antiqueGold hover:shadow-md transition-all shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9FAFB] border border-border text-forest shrink-0">
                      <Crown className="h-5 w-5 text-antiqueGold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-ink">{ruler.name}</h4>
                      <span className="font-arabicHeading text-xs text-antiqueGold font-medium">{ruler.arabicName}</span>
                      <span className="block text-xs font-semibold text-forest mt-1">{ruler.reign}</span>
                      <p className="text-[11px] text-ink-muted mt-0.5">{ruler.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section className="rounded-2xl border border-border bg-[#F9FAFB] p-6 space-y-2 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5 text-forest font-serif font-bold uppercase text-[11px]">
                <FileText className="h-4 w-4 text-antiqueGold" />
                <span>Genealogical References & State Archives</span>
              </div>
              <p>
                [1] State Gazettes and Royal Court Registries. Verified and archived in collaboration with national foundations and peer-reviewed historical documentation.
              </p>
            </section>

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Country Connection */}
            <div className="rounded-2xl border border-border bg-[#F9FAFB] p-6 space-y-3 shadow-sm">
              <span className="text-[10px] font-serif uppercase tracking-widest text-antiqueGold font-bold">
                Associated Nation
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest">
                {rf.country}
              </h3>
              <Link
                href={`/countries/${rf.countrySlug}`}
                className="inline-flex items-center gap-1.5 text-xs text-forest font-bold hover:underline"
              >
                <span>View Country Mini-Encyclopedia</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Historical Residences */}
            <div className="rounded-2xl border border-border bg-white p-6 space-y-3 shadow-sm">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-forest flex items-center gap-1.5 border-b border-border pb-2">
                <Home className="h-4 w-4 text-antiqueGold" />
                <span>Historical Royal Residences</span>
              </h4>
              <ul className="space-y-2 text-xs text-ink-muted">
                {rf.residences.map((res, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-antiqueGold">•</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Royalty Explorer Banner */}
            <div className="rounded-2xl border border-border bg-[#F9FAFB] p-6 space-y-3 text-center shadow-sm">
              <Crown className="h-8 w-8 text-antiqueGold mx-auto" />
              <h4 className="font-serif text-base font-bold text-forest">
                Explore All Arabian Monarchies
              </h4>
              <p className="text-xs text-ink-muted">
                Inspect the ruling dynasties across the entire Arabian Peninsula map.
              </p>
              <Link
                href="/royalty/explorer"
                className="inline-block w-full rounded-full border border-antiqueGold bg-forest py-2.5 text-xs font-bold text-white hover:bg-forest-light transition-all shadow-sm"
              >
                Open Royalty Explorer
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

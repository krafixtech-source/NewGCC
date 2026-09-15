'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

interface ArchiveDocument {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'Manuscript' | 'Treaty' | 'Cartography' | 'Photograph' | 'Gazette';
  date: string;
  origin: string;
  collection: string;
  source: string;
  rights: string;
  summary: string;
  imageUrl: string;
  relatedArticleSlug?: string;
  relatedArticleTitle?: string;
}

const archiveItems: ArchiveDocument[] = [
  {
    id: 'doc-1',
    title: 'Treaty of Darin (1915 CE)',
    arabicTitle: 'معاهدة دارين التاريخية',
    category: 'Treaty',
    date: '26 December 1915',
    origin: 'Darin, Tarout Island, Arabian Gulf',
    collection: 'National Archives & Royal Historical Records',
    source: 'King Abdulaziz Foundation for Research and Archives (Darah)',
    rights: 'Public Domain / Certified Archival Reproduction',
    summary: 'Historic treaty between Abdulaziz bin Abdul Rahman Al Saud and the British government, formalizing mutual recognition and regional sovereignty.',
    imageUrl: '/images/craftsmanship.jpg',
    relatedArticleSlug: 'founding-of-saudi-arabia',
    relatedArticleTitle: 'The Founding of Saudi Arabia: Three Centuries of Statehood',
  },
  {
    id: 'doc-2',
    title: 'Astronomical & Astrolabe Manuscript Folio',
    arabicTitle: 'مخطوطة الفلك والإسطرلاب العربي',
    category: 'Manuscript',
    date: 'circa 1185 CE (581 AH)',
    origin: 'Damascus, Syria',
    collection: 'Imperial Scientific Manuscript Corpus',
    source: 'Institute of Arabic Scientific Heritage',
    rights: 'Scholarly Archival Open Access',
    summary: 'Illuminated parchment detailing spherical trigonometry and planetary celestial calculations crafted by medieval Arab astronomers.',
    imageUrl: '/images/hero.jpg',
    relatedArticleSlug: 'nabataean-civilization',
    relatedArticleTitle: 'Arab Scientific Heritage',
  },
  {
    id: 'doc-3',
    title: 'Historical Map of the Arabian Peninsula',
    arabicTitle: 'خريطة شبه الجزيرة العربية التاريخية',
    category: 'Cartography',
    date: '1740 CE',
    origin: 'Amsterdam / Gulf Trade Routes',
    collection: 'Royal Geographic Cartographic Treasury',
    source: 'Arabian Peninsula Cartographic Foundation',
    rights: 'Historical Reproduction / High-Resolution Scan',
    summary: 'Detailed engraved map illustrating historical Arabian tribes, coastal pearl banks (Hayrat), desert wells, and ancient caravan routes.',
    imageUrl: '/images/riyadh.jpg',
    relatedArticleSlug: 'rise-of-dubai',
    relatedArticleTitle: 'Trade Routes & Pearl Diving in the Gulf',
  },
  {
    id: 'doc-4',
    title: 'Original Charter of the Gulf Cooperation Council',
    arabicTitle: 'النظام الأساسي لمجلس التعاون لدول الخليج العربية',
    category: 'Gazette',
    date: '25 May 1981',
    origin: 'Abu Dhabi, United Arab Emirates',
    collection: 'GCC Secretariat General Official Gazette',
    source: 'GCC Supreme Council Records, Riyadh & Abu Dhabi',
    rights: 'Official Diplomatic Record',
    summary: 'Foundational charter signed by the six Heads of State in Abu Dhabi, establishing the economic, political, and cultural integration framework.',
    imageUrl: '/images/alula.jpg',
    relatedArticleSlug: 'founding-of-saudi-arabia',
    relatedArticleTitle: 'The Formation of the GCC',
  }
];

export const InsideTheArchiveSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeDoc, setActiveDoc] = useState<ArchiveDocument | null>(null);

  return (
    <section className="bg-canvas-paper py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-archival">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-bold tracking-tight">
              {language === 'ar' ? 'داخل الأرشيف والوثائق التاريخية' : 'Inside the Archive'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md">
            {language === 'ar'
              ? 'مخطوطات، وخرائط أثرية، ومعاهدات تأسيسية، ومراسيم ملكية محفوظة ومفهرسة وفق أعلى معايير الحفظ الأرشيفي.'
              : 'Scholarly examination table displaying rare manuscripts, historical cartography, state treaties, and official gazettes.'}
          </p>
        </div>

        {/* Archival Research Table Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {archiveItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveDoc(item)}
              className="group cursor-pointer bg-canvas-white border border-border hover:border-antiqueGold transition-all p-5 flex flex-col justify-between shadow-editorial rounded-2xl hover:shadow-lg"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-paper border border-border mb-4 rounded-xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    style={{ backgroundImage: `url('${item.imageUrl}')` }}
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 bg-canvas-white/95 text-ink text-[10px] font-mono uppercase tracking-wider border border-border rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-antiqueGold uppercase tracking-wider mb-1 font-semibold">
                  {item.date} · {item.origin}
                </div>

                <h3 className="font-serif font-bold text-lg text-ink group-hover:text-forest transition-colors mb-1 leading-snug">
                  {item.title}
                </h3>

                <div className="font-arabic text-xs text-ink-muted mb-3">
                  {item.arabicTitle}
                </div>

                <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed font-sans">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-mono text-antiqueGold group-hover:text-forest font-semibold">
                <span>Inspect Document</span>
                <span>↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Modal Viewer */}
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-canvas-white border border-border shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded-3xl">
              <button
                onClick={() => setActiveDoc(null)}
                className="absolute top-5 right-5 p-2 bg-canvas-paper hover:bg-border text-ink border border-border text-xs rounded-full transition-colors shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 bg-canvas-paper text-antiqueGold text-[11px] font-mono uppercase tracking-wider border border-border font-bold inline-block mb-3 rounded-full">
                    {activeDoc.category} Record · {activeDoc.id}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                    {activeDoc.title}
                  </h3>
                  <div className="font-arabic text-base text-forest mt-1">
                    {activeDoc.arabicTitle}
                  </div>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed font-sans">
                  {activeDoc.summary}
                </p>

                {/* Structured Scholarly Metadata Grid */}
                <div className="bg-canvas-paper p-5 border border-border divide-y divide-border/80 text-xs font-mono rounded-2xl">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-ink-muted uppercase">Archival Date:</span>
                    <strong className="text-ink font-sans">{activeDoc.date}</strong>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-ink-muted uppercase">Geographic Origin:</span>
                    <strong className="text-ink font-sans">{activeDoc.origin}</strong>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-ink-muted uppercase">Holding Collection:</span>
                    <strong className="text-ink font-sans">{activeDoc.collection}</strong>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-ink-muted uppercase">Primary Source:</span>
                    <strong className="text-ink font-sans">{activeDoc.source}</strong>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-ink-muted uppercase">Rights & Provenance:</span>
                    <strong className="text-ink font-sans">{activeDoc.rights}</strong>
                  </div>
                </div>

                {/* Related Monograph Link */}
                {activeDoc.relatedArticleSlug && (
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={`/articles/${activeDoc.relatedArticleSlug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-canvas-white hover:bg-forest-light text-xs font-mono uppercase tracking-wider font-semibold transition-colors rounded-full shadow-md"
                    >
                      <span>Read Related Archival Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

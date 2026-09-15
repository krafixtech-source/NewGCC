import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Building2, Compass, Layers, ShieldCheck, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Arabian Architecture Encyclopedia — Ancient, Islamic & Modern | GCC',
  description: 'Comprehensive architectural encyclopedia documenting Arab and Islamic structural systems: Nabataean rock-cut, Najdi mudbrick, Gulf wind towers, and contemporary skyscrapers.',
};

export default function ArchitectureEncyclopediaPage() {
  const elements = [
    { name: 'Mashrabiya / Roshan', arabic: 'المشربية والرواشن', desc: 'Projecting oriel wooden lattice window screens engineered to provide natural ventilation, soft diffused lighting, and complete domestic privacy.' },
    { name: 'Barjeel (Wind Tower)', arabic: 'البراجيل (ملقف الهواء)', desc: 'Traditional passive architectural cooling towers that capture high-altitude desert breezes and channel them downwards through interior courtyards.' },
    { name: 'Finā\' (Central Courtyard)', arabic: 'الفناء الداخلي', desc: 'The private open-air heart of Arabian homes, functioning as a microclimatic thermal buffer and family gathering sanctuary.' },
    { name: 'Muqarnas (Corbel Vaulting)', arabic: 'المقرنصات الهندسية', desc: 'Three-dimensional geometric architectural vaulting creating transitional honeycombed brackets beneath domes and arches.' },
    { name: 'Horseshoe & Ogee Arches', arabic: 'العقود الأندلسية والإسلامية', desc: 'Iconic curved and pointed arch forms distributing ceiling loads across stone arcades with aesthetic elegance.' },
    { name: 'Najdi Triangular Crenellations', arabic: 'الشرفات والمثلثات النجدية', desc: 'Distinctive triangular parapet perforations atop fortified mudbrick walls in central Arabia serving defensive and ventilation roles.' }
  ];

  return (
    <div className="pt-24 pb-24 bg-white text-charcoal min-h-screen selection:bg-gold selection:text-midnight">
      <div className="mx-auto max-w-archival px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone mb-6 font-serif">
          <Link href="/" className="hover:text-emerald">Archive</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/culture" className="hover:text-emerald">Culture</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-emerald-dark font-semibold">Architecture Encyclopedia</span>
        </nav>

        {/* Page Hero */}
        <div className="py-12 border-b border-sand/60 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-sand/30 px-4 py-1 text-xs font-serif uppercase tracking-widest text-emerald-dark font-semibold mb-4">
            <Building2 className="h-3.5 w-3.5 text-gold-dark" />
            <span>Structural & Spatial Geometry</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-midnight mb-4">
            Arabian Architecture Encyclopedia
          </h1>
          <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
            A specialized treatise documenting millennia of structural innovations, thermal passive engineering, sacred geometries, and modern iconic megastructures across the Arab world.
          </p>
        </div>

        {/* Key Architectural Elements Breakdown with Educational Diagrams */}
        <div className="py-16 border-b border-sand/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-midnight">
              Canonical Architectural Elements
            </h2>
            <p className="text-xs sm:text-sm text-stone mt-1">
              Structural vocabulary and climate-responsive innovations of traditional Arab architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((el, i) => (
              <div key={i} className="rounded-xl border border-sand bg-white p-6 shadow-sm space-y-2 hover:border-gold transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xs font-bold text-gold-dark uppercase tracking-wider">Element 0{i + 1}</span>
                  <span className="font-arabicHeading text-xs text-emerald-dark font-bold">{el.arabic}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-midnight">{el.name}</h3>
                <p className="text-xs text-stone leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chronological Eras of Arab Architecture */}
        <div className="py-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-midnight">
              Architectural Eras & Typologies
            </h2>
            <p className="text-xs sm:text-sm text-stone mt-1">
              From rock-carved sanctuaries to soaring skyscrapers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-sand bg-white p-8 space-y-4 shadow-sm">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-dark font-bold">1. Ancient Rock-Cut Architecture</span>
              <h3 className="font-serif text-2xl font-bold text-midnight">Nabataean & Sabaean Masonry</h3>
              <p className="text-xs text-stone-dark leading-relaxed">
                Carved directly into sandstone massifs at Petra and Hegra (AlUla), utilizing classical Hellenistic pediments blended with Arabian crowstep attics and sophisticated hidden ceramic water pressure pipes.
              </p>
            </div>

            <div className="rounded-xl border border-sand bg-white p-8 space-y-4 shadow-sm">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-dark font-bold">2. Najdi Mudbrick Architecture</span>
              <h3 className="font-serif text-2xl font-bold text-midnight">At-Turaif & Salmani Style</h3>
              <p className="text-xs text-stone-dark leading-relaxed">
                Multi-story rammed-earth and adobe palaces of central Arabia engineered with thick thermal mass walls, courtyards, and triangular ventilation holes, revived today in Riyadh's contemporary Salmani architectural code.
              </p>
            </div>

            <div className="rounded-xl border border-sand bg-white p-8 space-y-4 shadow-sm">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-dark font-bold">3. Gulf Coastal Vernacular</span>
              <h3 className="font-serif text-2xl font-bold text-midnight">Wind Towers & Coral Stone</h3>
              <p className="text-xs text-stone-dark leading-relaxed">
                Coastal towns of Dubai, Muharraq, and Kuwait City built with porous marine coral stone and gypsum (Juss), crowned by four-directional Barjeel wind catchers creating cooling draft circulation.
              </p>
            </div>

            <div className="rounded-xl border border-sand bg-white p-8 space-y-4 shadow-sm">
              <span className="text-xs font-serif uppercase tracking-widest text-gold-dark font-bold">4. Modern Gulf Megastructures</span>
              <h3 className="font-serif text-2xl font-bold text-midnight">Neo-Futuristic Islamic Synthesis</h3>
              <p className="text-xs text-stone-dark leading-relaxed">
                Burj Khalifa (828m, SOM), Museum of the Future (Killa Design), Louvre Abu Dhabi (Jean Nouvel), and Museum of Islamic Art Doha (I.M. Pei), harmonizing fluid computational aerodynamics with classical Islamic geometry.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Share2, Search, ArrowRight, ChevronRight, Sparkles, Globe, Layers } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { countriesData, royalFamiliesData, historicalErasData, landmarksData, cultureTopicsData } from '@/lib/data';

interface GraphNode {
  id: string;
  label: string;
  arabicLabel: string;
  type: 'country' | 'royalty' | 'era' | 'landmark' | 'culture';
  category: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  url: string;
  summary: string;
}

interface GraphLink {
  source: string;
  target: string;
  relation: string;
}

export default function KnowledgeGraphPage() {
  const { language } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNode, setActiveNode] = useState<GraphNode | null>(null);

  // Build Graph Nodes & Edges
  const { nodes, links } = useMemo(() => {
    const rawNodes: GraphNode[] = [];
    const rawLinks: GraphLink[] = [];

    // Central Core Hubs (Key Countries)
    const keyCountries = countriesData.slice(0, 8);
    keyCountries.forEach((c, idx) => {
      const angle = (idx / keyCountries.length) * 2 * Math.PI;
      const radius = 220;
      rawNodes.push({
        id: `country-${c.slug}`,
        label: c.name,
        arabicLabel: c.arabicName,
        type: 'country',
        category: 'Sovereign Nation',
        x: 450 + radius * Math.cos(angle),
        y: 350 + radius * Math.sin(angle),
        radius: 28,
        color: '#123C33', // Royal Emerald
        url: `/countries/${c.slug}`,
        summary: `${c.region} · Capital: ${c.capital} · Pop: ${(c.population / 1000000).toFixed(1)}M`,
      });
    });

    // Royal Families
    royalFamiliesData.forEach((rf, idx) => {
      const angle = (idx / royalFamiliesData.length) * 2 * Math.PI + 0.4;
      const radius = 340;
      const nodeId = `rf-${rf.slug}`;
      rawNodes.push({
        id: nodeId,
        label: rf.name,
        arabicLabel: rf.arabicName,
        type: 'royalty',
        category: 'Royal House',
        x: 450 + radius * Math.cos(angle),
        y: 350 + radius * Math.sin(angle),
        radius: 22,
        color: '#C6A15B', // Antique Gold
        url: `/royalty/${rf.slug}`,
        summary: `Reigning in ${rf.country} since ${rf.foundedYear} · Founded by ${rf.founder}`,
      });

      // Link to country
      const countryMatch = countriesData.find(c => c.name.toLowerCase().includes(rf.country.toLowerCase()));
      if (countryMatch) {
        rawLinks.push({
          source: nodeId,
          target: `country-${countryMatch.slug}`,
          relation: 'Reigns Over',
        });
      }
    });

    // Landmarks
    landmarksData.forEach((lm, idx) => {
      const angle = (idx / landmarksData.length) * 2 * Math.PI + 0.8;
      const radius = 130;
      const nodeId = `lm-${lm.slug}`;
      rawNodes.push({
        id: nodeId,
        label: lm.name,
        arabicLabel: lm.arabicName,
        type: 'landmark',
        category: 'Monumental Landmark',
        x: 450 + radius * Math.cos(angle),
        y: 350 + radius * Math.sin(angle),
        radius: 18,
        color: '#8B5A2B', // Ochre Sandstone
        url: `/landmarks/${lm.slug}`,
        summary: `${lm.country} · ${lm.era}`,
      });

      const countryMatch = countriesData.find(c => c.name.toLowerCase().includes(lm.country.toLowerCase()));
      if (countryMatch) {
        rawLinks.push({
          source: nodeId,
          target: `country-${countryMatch.slug}`,
          relation: 'Located In',
        });
      }
    });

    // Historical Eras
    historicalErasData.forEach((era, idx) => {
      const angle = (idx / historicalErasData.length) * 2 * Math.PI + 1.2;
      const radius = 420;
      const nodeId = `era-${era.slug}`;
      rawNodes.push({
        id: nodeId,
        label: era.name,
        arabicLabel: era.arabicName,
        type: 'era',
        category: 'Historical Era',
        x: 450 + radius * Math.cos(angle),
        y: 350 + radius * Math.sin(angle),
        radius: 20,
        color: '#2C5E55', // Sage
        url: `/history/${era.slug}`,
        summary: `${era.startYear < 0 ? `${Math.abs(era.startYear)} BCE` : `${era.startYear} CE`} — ${era.endYear}`,
      });

      rawLinks.push({
        source: nodeId,
        target: 'country-saudi-arabia',
        relation: 'Historical Roots',
      });
    });

    // Culture Topics
    cultureTopicsData.forEach((cul, idx) => {
      const angle = (idx / cultureTopicsData.length) * 2 * Math.PI + 1.6;
      const radius = 270;
      const nodeId = `cul-${cul.slug}`;
      rawNodes.push({
        id: nodeId,
        label: cul.title,
        arabicLabel: cul.arabicName,
        type: 'culture',
        category: 'Cultural Pillar',
        x: 450 + radius * Math.cos(angle),
        y: 350 + radius * Math.sin(angle),
        radius: 19,
        color: '#4A3B32', // Deep Umber
        url: `/culture/${cul.slug}`,
        summary: `${cul.category} · Heritage Overview`,
      });

      rawLinks.push({
        source: nodeId,
        target: 'country-united-arab-emirates',
        relation: 'Intangible Heritage',
      });
    });

    return { nodes: rawNodes, links: rawLinks };
  }, []);

  // Filter nodes
  const filteredNodes = nodes.filter(n => {
    const matchesType = selectedType === 'all' || n.type === selectedType;
    const matchesQuery = searchQuery === '' || 
      n.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.arabicLabel.includes(searchQuery);
    return matchesType && matchesQuery;
  });

  const activeNodeLinks = useMemo(() => {
    if (!activeNode) return [];
    return links.filter(l => l.source === activeNode.id || l.target === activeNode.id);
  }, [activeNode, links]);

  return (
    <div className="bg-[#FAF9F5] text-charcoal min-h-screen selection:bg-antiqueGold selection:text-black">
      
      {/* Archival Hero Header */}
      <section className="relative overflow-hidden bg-black text-white pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5C98E]/30">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about/archival-library.jpg"
            alt="Knowledge Graph"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6 font-serif">
            <Link href="/" className="hover:text-[#E5C98E] transition-colors">Archive</Link>
            <ChevronRight className="h-3 w-3 text-white/40" />
            <span className="text-[#E5C98E] font-semibold">Knowledge Graph</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#E5C98E]/40 bg-[#123C33]/60 backdrop-blur-md px-3.5 py-1 text-xs font-serif uppercase tracking-widest text-[#E5C98E] font-semibold mb-4">
              <Share2 className="h-3.5 w-3.5 text-[#E5C98E]" />
              <span>{language === 'ar' ? 'مخطط المعرفة التفاعلي' : 'Interactive Graph Ontology'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              {language === 'ar' ? 'شبكة العلاقات والمفاهيم التاريخية' : 'Arab World Knowledge Graph'}
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {language === 'ar'
                ? 'استكشف الترابط العضوي بين الدول، والأسر الحاكمة، والمعالم الأثرية، والعصور التاريخية في شبكة بصرية تفاعلية.'
                : 'Explore interconnected sovereign nations, dynasties, historical eras, monumental landmarks, and cultural pillars.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-serif text-[#E5C98E]">
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <Layers className="h-3.5 w-3.5" /> 5 Relational Entity Layers
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 border border-[#E5C98E]/30 px-3 py-1">
                <Globe className="h-3.5 w-3.5" /> Multi-Domain Arab Taxonomy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Graph Canvas & Drawer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Controls and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E5C98E]/30">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Entities', labelAr: 'كافة الكيانات' },
              { id: 'country', label: 'Nations (22)', labelAr: 'الدول' },
              { id: 'royalty', label: 'Dynasties (8)', labelAr: 'الأسر الحاكمة' },
              { id: 'era', label: 'Historical Eras', labelAr: 'العصور التاريخية' },
              { id: 'landmark', label: 'Landmarks', labelAr: 'المعالم الأثرية' },
              { id: 'culture', label: 'Culture & Heritage', labelAr: 'التراث والثقافة' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-4 py-2 text-xs font-serif font-semibold transition-all ${
                  selectedType === tab.id
                    ? 'bg-[#123C33] text-[#E5C98E] font-bold shadow-sm border border-[#E5C98E]/40'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {language === 'ar' ? tab.labelAr : tab.label}
              </button>
            ))}
          </div>

          {/* Search within graph */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ar' ? 'بحث في العقد...' : 'Filter nodes...'}
              className="px-4 py-2 bg-white border border-stone-300 text-xs font-serif text-[#123C33] focus:outline-none focus:border-[#C6A15B] shadow-sm w-full md:w-64"
            />
          </div>
        </div>

        {/* Interactive Canvas & Detail Side-Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Main Visualizer SVG Card */}
          <div className="lg:col-span-3 bg-white border border-[#E5C98E]/30 p-3 sm:p-5 shadow-sm overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm border border-[#E5C98E]/40 px-3.5 py-1.5 text-[11px] font-serif text-[#E5C98E] shadow-sm">
              💡 {language === 'ar' ? 'انقر على أي عقدة لاستعراض تفاصيلها وعلاقاتها' : 'Click any node to explore its relational links'}
            </div>

            <div className="w-full overflow-auto">
              <svg 
                viewBox="0 0 900 700" 
                className="w-full h-auto min-w-[700px] select-none bg-[#FAF9F5]"
              >
                {/* Background Grid Pattern */}
                <defs>
                  <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(198,161,91,0.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="900" height="700" fill="url(#graph-grid)" />

                {/* Edges / Links */}
                <g className="links">
                  {links.map((link, idx) => {
                    const sourceNode = nodes.find(n => n.id === link.source);
                    const targetNode = nodes.find(n => n.id === link.target);
                    if (!sourceNode || !targetNode) return null;

                    const isHighlighted = activeNode && (activeNode.id === link.source || activeNode.id === link.target);

                    return (
                      <line
                        key={idx}
                        x1={sourceNode.x}
                        y1={sourceNode.y}
                        x2={targetNode.x}
                        y2={targetNode.y}
                        stroke={isHighlighted ? '#C6A15B' : '#D1D5DB'}
                        strokeWidth={isHighlighted ? 2.5 : 1}
                        strokeDasharray={isHighlighted ? 'none' : '4 4'}
                        opacity={isHighlighted ? 1 : 0.6}
                      />
                    );
                  })}
                </g>

                {/* Nodes */}
                <g className="nodes">
                  {filteredNodes.map((node) => {
                    const isSelected = activeNode?.id === node.id;

                    return (
                      <g
                        key={node.id}
                        transform={`translate(${node.x}, ${node.y})`}
                        onClick={() => setActiveNode(node)}
                        className="cursor-pointer group"
                      >
                        {/* Halo on selection */}
                        {isSelected && (
                          <circle
                            r={node.radius + 8}
                            fill="none"
                            stroke="#C6A15B"
                            strokeWidth="3"
                            className="animate-pulse"
                          />
                        )}

                        {/* Base Circle */}
                        <circle
                          r={node.radius}
                          fill={node.color}
                          stroke="#ffffff"
                          strokeWidth="2"
                          className="transition-transform group-hover:scale-110 duration-200"
                        />

                        {/* Label text */}
                        <text
                          y={node.radius + 14}
                          textAnchor="middle"
                          className="font-serif font-bold text-[11px] fill-[#123C33] pointer-events-none drop-shadow-sm"
                        >
                          {node.label}
                        </text>
                        <text
                          y={node.radius + 25}
                          textAnchor="middle"
                          className="font-arabic text-[9px] fill-stone-500 pointer-events-none"
                        >
                          {node.arabicLabel}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>

          {/* Node Detail Drawer Card */}
          <div className="lg:col-span-1 bg-white border border-[#E5C98E]/30 p-6 shadow-sm">
            {activeNode ? (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-serif uppercase font-bold tracking-wider px-3 py-1 bg-[#123C33] text-[#E5C98E]">
                    {activeNode.category}
                  </span>
                  <button
                    onClick={() => setActiveNode(null)}
                    className="flex h-6 w-6 items-center justify-center bg-stone-100 text-stone-500 hover:text-black text-xs font-bold"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#123C33] mb-1">
                  {activeNode.label}
                </h3>
                <div className="font-arabic text-sm text-[#C6A15B] font-semibold mb-4">
                  {activeNode.arabicLabel}
                </div>

                <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
                  {activeNode.summary}
                </p>

                {/* Connected Edges */}
                <div className="mb-6 border-t border-stone-200 pt-4">
                  <h4 className="text-xs uppercase font-serif tracking-wider font-bold text-[#123C33] mb-2">
                    {language === 'ar' ? 'الروابط الشبكية المتصلة' : 'Connected Relationships'}
                  </h4>
                  {activeNodeLinks.length > 0 ? (
                    <ul className="space-y-2 text-xs">
                      {activeNodeLinks.map((link, idx) => {
                        const otherNodeId = link.source === activeNode.id ? link.target : link.source;
                        const otherNode = nodes.find(n => n.id === otherNodeId);
                        if (!otherNode) return null;

                        return (
                          <li key={idx} className="flex items-center justify-between p-2.5 bg-[#FAF9F5] border border-stone-200">
                            <div>
                              <div className="font-serif font-bold text-[#123C33]">{otherNode.label}</div>
                              <div className="text-[10px] text-stone-500">{link.relation}</div>
                            </div>
                            <button
                              onClick={() => setActiveNode(otherNode)}
                              className="text-[10px] text-[#C6A15B] font-serif font-bold hover:underline"
                            >
                              Inspect →
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-xs text-stone-400 italic font-serif">No direct links in current projection</p>
                  )}
                </div>

                <Link
                  href={activeNode.url}
                  className="block text-center w-full py-2.5 bg-[#123C33] text-[#E5C98E] font-serif font-bold text-xs hover:bg-[#1a4f44] transition-colors shadow-sm"
                >
                  {language === 'ar' ? 'عرض السجل التوثيقي الكامل' : 'Open Full Archival Entry →'}
                </Link>
              </div>
            ) : (
              <div className="text-center py-12 text-stone-400">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-serif font-bold text-[#123C33] mb-1">
                  {language === 'ar' ? 'حدد عقدة في المخطط' : 'Select a Knowledge Node'}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed font-light">
                  {language === 'ar'
                    ? 'انقر على أي دولة، أسرة حاكمة، معلَم، أو عصر تاريخي لعرض تفاصيله الدقيقة وشبكة علاقاته.'
                    : 'Click any node to explore historical ties, sovereignty relations, and foundational documentation.'}
                </p>
              </div>
            )}
          </div>
        </div>

      </section>

    </div>
  );
}

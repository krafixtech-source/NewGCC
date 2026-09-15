'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
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

      // Connect to KSA or Egypt as legacy bridges
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
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-stone-200 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
              {language === 'ar' ? 'مخطط المعرفة التفاعلي' : 'Interactive Graph Ontology'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-emerald-950 font-bold">
              {language === 'ar' ? 'شبكة العلاقات والمفاهيم التاريخية' : 'Arab World Knowledge Graph'}
            </h1>
            <p className="text-stone-600 text-sm mt-1 max-w-2xl">
              {language === 'ar'
                ? 'استكشف الترابط العضوي بين الدول، الأسر الحاكمة، المعالم الأثرية، والعصور التاريخية في شبكة بصرية تفاعلية.'
                : 'Explore interconnected sovereign nations, dynasties, historical eras, monumental landmarks, and cultural pillars.'}
            </p>
          </div>

          {/* Search within graph */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ar' ? 'بحث في العقد...' : 'Filter nodes...'}
              className="px-4 py-2 bg-white border border-stone-300 rounded-full text-xs text-emerald-950 focus:outline-none focus:border-antique-gold-500 shadow-sm"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { id: 'all', label: 'All Entities', labelAr: 'كافة الكيانات', color: 'bg-stone-800' },
            { id: 'country', label: 'Nations (22)', labelAr: 'الدول', color: 'bg-emerald-900' },
            { id: 'royalty', label: 'Dynasties (8)', labelAr: 'الأسر الحاكمة', color: 'bg-antique-gold-600' },
            { id: 'era', label: 'Historical Eras', labelAr: 'العصور التاريخية', color: 'bg-emerald-700' },
            { id: 'landmark', label: 'Landmarks', labelAr: 'المعالم الأثرية', color: 'bg-amber-800' },
            { id: 'culture', label: 'Culture & Heritage', labelAr: 'التراث والثقافة', color: 'bg-stone-700' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedType === tab.id
                  ? 'bg-emerald-950 text-antique-gold-300 shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {language === 'ar' ? tab.labelAr : tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Canvas & Detail Side-Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Main Visualizer SVG Card */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-stone-200 p-3 sm:p-5 shadow-sm overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10 bg-sand-50/90 backdrop-blur-sm border border-stone-200 px-3.5 py-1.5 rounded-full text-[11px] text-stone-600 shadow-sm">
              💡 {language === 'ar' ? 'انقر على أي عقدة لاستعراض تفاصيلها وعلاقاتها' : 'Click any node to explore its relational links'}
            </div>

            <div className="w-full overflow-auto">
              <svg 
                viewBox="0 0 900 700" 
                className="w-full h-auto min-w-[700px] select-none bg-stone-900/5 rounded-lg"
              >
                {/* Background Grid Pattern */}
                <defs>
                  <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
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
                          className="font-serif font-bold text-[11px] fill-emerald-950 pointer-events-none drop-shadow-sm"
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
          <div className="lg:col-span-1 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            {activeNode ? (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-antique-gold-100 text-antique-gold-900">
                    {activeNode.category}
                  </span>
                  <button
                    onClick={() => setActiveNode(null)}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:text-stone-800 text-xs"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-1">
                  {activeNode.label}
                </h3>
                <div className="font-arabic text-sm text-antique-gold-700 mb-4">
                  {activeNode.arabicLabel}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  {activeNode.summary}
                </p>

                {/* Connected Edges */}
                <div className="mb-6 border-t border-stone-100 pt-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                    {language === 'ar' ? 'الروابط الشبكية المتصلة' : 'Connected Relationships'}
                  </h4>
                  {activeNodeLinks.length > 0 ? (
                    <ul className="space-y-2 text-xs">
                      {activeNodeLinks.map((link, idx) => {
                        const otherNodeId = link.source === activeNode.id ? link.target : link.source;
                        const otherNode = nodes.find(n => n.id === otherNodeId);
                        if (!otherNode) return null;

                        return (
                          <li key={idx} className="flex items-center justify-between p-3 rounded-xl bg-sand-50 border border-stone-100">
                            <div>
                              <div className="font-medium text-emerald-950">{otherNode.label}</div>
                              <div className="text-[10px] text-stone-400">{link.relation}</div>
                            </div>
                            <button
                              onClick={() => setActiveNode(otherNode)}
                              className="text-[10px] text-antique-gold-700 font-bold hover:underline"
                            >
                              Inspect →
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-xs text-stone-400 italic">No direct links in current projection</p>
                  )}
                </div>

                <Link
                  href={activeNode.url}
                  className="block text-center w-full py-2.5 bg-emerald-900 text-antique-gold-300 font-semibold rounded-full text-xs hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  {language === 'ar' ? 'عرض السجل التوثيقي الكامل' : 'Open Full Archival Entry →'}
                </Link>
              </div>
            ) : (
              <div className="text-center py-12 text-stone-400">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-serif font-bold text-emerald-950 mb-1">
                  {language === 'ar' ? 'حدد عقدة في المخطط' : 'Select a Knowledge Node'}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {language === 'ar'
                    ? 'انقر على أي دولة، أسرة حاكمة، معلَم، أو عصر تاريخي لعرض تفاصيله الدقيقة وشبكة علاقاته.'
                    : 'Click any node to explore historical ties, sovereignty relations, and foundational documentation.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

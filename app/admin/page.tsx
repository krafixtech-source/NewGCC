'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cmsMetrics, cmsArticles, factCheckQueue, revisionHistory } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';

export default function AdminDashboardPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'workflow' | 'factcheck' | 'revisions' | 'integrity'>('workflow');
  const [articles, setArticles] = useState(cmsArticles);
  const [flags, setFlags] = useState(factCheckQueue);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleStatusChange = (id: string, newStatus: any) => {
    setArticles(articles.map(a => a.id === id ? { ...a, status: newStatus } : a));
    showToast(`Article status updated to ${newStatus}`);
  };

  const handleResolveFlag = (id: string) => {
    setFlags(flags.map(f => f.id === id ? { ...f, status: 'resolved' } : f));
    showToast('Fact-check item verified and resolved');
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 bg-antique-gold-600 text-stone-950 font-bold px-5 py-2.5 rounded-full shadow-lg animate-bounce text-xs">
          ✓ {notification}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-400 font-mono">
                GCC Archival Repository CMS v2.4
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-white mt-1">
              {language === 'ar' ? 'لوحة التحكم وهيئة التحرير الأرشيفية' : 'Editorial & Archival Governance Dashboard'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-xs font-mono text-stone-300 transition-colors border border-stone-700"
            >
              ← {language === 'ar' ? 'العودة للموسوعة' : 'Back to Public Portal'}
            </Link>
            <button
              onClick={() => showToast('Cache purged and static ISR rebuild triggered')}
              className="px-4 py-2 rounded-full bg-antique-gold-600 hover:bg-antique-gold-500 text-stone-950 text-xs font-bold transition-colors shadow-sm"
            >
              ⚡ {language === 'ar' ? 'إعادة بناء الفهرس' : 'Re-index Encyclopedia'}
            </button>
          </div>
        </div>

        {/* High-level KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700">
            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">
              {language === 'ar' ? 'إجمالي السجلات الموثقة' : 'Total Archival Entries'}
            </div>
            <div className="text-3xl font-serif font-bold text-white">
              {cmsMetrics.totalArticles.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-400 mt-2">↑ +14 new peer-reviewed this month</div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700">
            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">
              {language === 'ar' ? 'نسبة الاستشهادات المؤكدة (Level A)' : 'Level A Citations Ratio'}
            </div>
            <div className="text-3xl font-serif font-bold text-antique-gold-400">
              {cmsMetrics.citationVerificationRate}%
            </div>
            <div className="text-[11px] text-stone-400 mt-2">Target benchmark: &gt;95.0%</div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700">
            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">
              {language === 'ar' ? 'قائمة التدقيق والمراجعة' : 'Pending Fact-Checks'}
            </div>
            <div className="text-3xl font-serif font-bold text-amber-400">
              {flags.filter(f => f.status === 'pending').length}
            </div>
            <div className="text-[11px] text-amber-400/80 mt-2">Requires Editorial Board Sign-off</div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700">
            <div className="text-xs text-stone-400 font-mono uppercase tracking-wider mb-1">
              {language === 'ar' ? 'الباحثون وهيئة التحكيم' : 'Editorial Fellows'}
            </div>
            <div className="text-3xl font-serif font-bold text-emerald-400">
              {cmsMetrics.activeEditors}
            </div>
            <div className="text-[11px] text-stone-400 mt-2">Across 14 Academic Institutions</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 mb-6 gap-2">
          {[
            { id: 'workflow', label: 'Article Workflow & Publications', icon: '📝' },
            { id: 'factcheck', label: 'Fact-Check Verification Queue', icon: '🔍' },
            { id: 'revisions', label: 'Revision History & Audit Log', icon: '📜' },
            { id: 'integrity', label: 'System & Archival Integrity', icon: '⚙️' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 text-xs font-mono font-semibold transition-all border-b-2 rounded-t-xl flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-antique-gold-500 text-antique-gold-400 bg-stone-800/50'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content: Article Workflow */}
        {activeTab === 'workflow' && (
          <div className="bg-stone-800/50 rounded-3xl border border-stone-700 overflow-hidden">
            <div className="p-5 border-b border-stone-700 flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-white">
                Archival Publications Pipeline
              </h3>
              <span className="text-xs text-stone-400 font-mono">
                {articles.length} manuscripts tracked
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-800 text-stone-400 uppercase font-mono tracking-wider border-b border-stone-700">
                    <th className="p-4">Title / Topic</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Author / Fellow</th>
                    <th className="p-4">Citations</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-700/60 font-sans">
                  {articles.map((art) => (
                    <tr key={art.id} className="hover:bg-stone-800/80 transition-colors">
                      <td className="p-4">
                        <div className="font-serif font-bold text-stone-200 text-sm">{art.title}</div>
                        <div className="text-[11px] text-stone-500 font-mono">{art.slug}</div>
                      </td>
                      <td className="p-4 text-stone-300">
                        <span className="px-2.5 py-0.5 rounded-full bg-stone-700 text-[10px] font-mono">
                          {art.category}
                        </span>
                      </td>
                      <td className="p-4 text-stone-300">{art.author}</td>
                      <td className="p-4 font-mono text-antique-gold-400">
                        {art.citationCount} sources
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase ${
                          art.status === 'published' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                          art.status === 'fact_checked' ? 'bg-blue-950 text-blue-300 border border-blue-800' :
                          art.status === 'under_review' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                          'bg-stone-700 text-stone-300'
                        }`}>
                          {art.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={art.status}
                          onChange={(e) => handleStatusChange(art.id, e.target.value)}
                          className="bg-stone-900 border border-stone-700 text-stone-200 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-antique-gold-500"
                        >
                          <option value="draft">Draft</option>
                          <option value="under_review">Under Review</option>
                          <option value="fact_checked">Fact Checked</option>
                          <option value="published">Published</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Fact-Check Queue */}
        {activeTab === 'factcheck' && (
          <div className="space-y-4">
            {flags.map((flag) => (
              <div 
                key={flag.id}
                className={`p-6 rounded-2xl border transition-all ${
                  flag.status === 'resolved' 
                    ? 'bg-stone-800/30 border-stone-800 opacity-60' 
                    : 'bg-stone-800/90 border-amber-500/40 shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${
                      flag.severity === 'high' ? 'bg-red-950 text-red-300 border border-red-800' :
                      flag.severity === 'medium' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                      'bg-stone-700 text-stone-300'
                    }`}>
                      {flag.severity} Priority
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      Target: <strong className="text-stone-200">{flag.targetEntity}</strong>
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono">
                    Reported by {flag.reportedBy} · {flag.date}
                  </span>
                </div>

                <div className="text-sm text-stone-200 font-serif mb-2">
                  <strong>Claim under audit:</strong> &ldquo;{flag.claim}&rdquo;
                </div>
                <div className="text-xs text-stone-400 font-sans mb-4">
                  <strong>Editorial note:</strong> {flag.notes}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-700/60">
                  <span className="text-xs font-mono text-stone-400">
                    Status: <strong className="text-white">{flag.status.toUpperCase()}</strong>
                  </span>
                  {flag.status === 'pending' && (
                    <button
                      onClick={() => handleResolveFlag(flag.id)}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-xs font-mono font-bold transition-colors shadow-sm"
                    >
                      ✓ Verify & Resolve Fact Check
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Revision History */}
        {activeTab === 'revisions' && (
          <div className="bg-stone-800/50 rounded-3xl border border-stone-700 overflow-hidden">
            <div className="p-5 border-b border-stone-700">
              <h3 className="font-serif font-bold text-base text-white">
                Archival Audit Trail & Revisions
              </h3>
            </div>
            <div className="divide-y divide-stone-700/60 font-mono text-xs">
              {revisionHistory.map((rev) => (
                <div key={rev.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-800/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-antique-gold-400">{rev.entityTitle}</span>
                      <span className="text-stone-500">({rev.entityType})</span>
                    </div>
                    <div className="text-stone-300 font-sans text-xs">{rev.changeSummary}</div>
                  </div>
                  <div className="text-right text-stone-400 text-[11px]">
                    <div>by <span className="text-stone-200 font-semibold">{rev.editor}</span></div>
                    <div className="text-stone-500">{rev.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Archival Integrity */}
        {activeTab === 'integrity' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-stone-800/50 border border-stone-700">
              <h3 className="font-serif font-bold text-lg text-white mb-4">
                Prisma Relational Database Status
              </h3>
              <ul className="space-y-3 text-xs font-mono text-stone-300">
                <li className="flex justify-between pb-2 border-b border-stone-700">
                  <span>Connection Pooling:</span>
                  <span className="text-emerald-400">ACTIVE (SSL)</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-stone-700">
                  <span>Foreign Key Constraints:</span>
                  <span className="text-emerald-400">ENFORCED</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-stone-700">
                  <span>Genealogical Trees Integrity:</span>
                  <span className="text-emerald-400">100% VALIDATED</span>
                </li>
                <li className="flex justify-between">
                  <span>Historical Reign Timeline Overlaps:</span>
                  <span className="text-emerald-400">0 CONFLICTS</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-stone-800/50 border border-stone-700">
              <h3 className="font-serif font-bold text-lg text-white mb-4">
                Search & Citation Governance
              </h3>
              <ul className="space-y-3 text-xs font-mono text-stone-300">
                <li className="flex justify-between pb-2 border-b border-stone-700">
                  <span>Global In-Memory Search Index:</span>
                  <span className="text-emerald-400">SYNCHRONIZED</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-stone-700">
                  <span>Level A Primary Treaty Index:</span>
                  <span className="text-emerald-400">184 RECORDS</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-stone-700">
                  <span>DIN 31635 Transliteration Audit:</span>
                  <span className="text-emerald-400">PASS (0 WARN)</span>
                </li>
                <li className="flex justify-between">
                  <span>ISR Revalidation Cadence:</span>
                  <span className="text-antique-gold-400">3,600s ON DEMAND</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function CorrectionsPage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    entity: '',
    claim: '',
    proposedCorrection: '',
    sourceCitation: '',
    submitterName: '',
    academicAffiliation: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const publicCorrectionsLog = [
    {
      id: 'COR-2026-08',
      entity: 'House of Al Said (Oman)',
      claim: 'Accession date of Sultan Said bin Sultan in Muscat',
      resolution: 'Verified against Omani National Archives and updated from 1804 to 20 November 1804 (Gregorian).',
      dateResolved: '2026-08-14',
      tier: 'Level A (Muscat Archives)',
    },
    {
      id: 'COR-2026-05',
      entity: 'Diriyah & At-Turaif District',
      claim: 'Reconstructed defensive wall perimeter in 1744 CE',
      resolution: 'Cross-referenced with Darah archaeological report; footnote [4] appended with excavation citation.',
      dateResolved: '2026-05-22',
      tier: 'Level C (Darah Report #42)',
    },
    {
      id: 'COR-2026-02',
      entity: 'Nabataean Trade Routes',
      claim: 'Hegra to Petra caravan journey transit duration',
      resolution: 'Text amended to reflect 35–40 days standard camel caravan transit during 1st century BCE.',
      dateResolved: '2026-02-09',
      tier: 'Level B (Cambridge UP)',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
            {language === 'ar' ? 'النزاهة الأكاديمية والتصويب' : 'Scholarly Integrity & Peer Review'}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'سياسة التصحيحات والمراجعة النظيرة' : 'Corrections Policy & Scholarly Peer Review'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'تلتزم موسوعة مجلس التعاون والعالم العربي بأعلى معايير الدقة العلمية؛ ونرحب بأي تدقيق أو تصويب مدعوم بمصادر أولية معتمدة.'
              : 'The GCC Encyclopedia operates on transparent peer-review. We maintain a public log of all factual amendments and welcome scholarly submissions.'}
          </p>
        </div>

        {/* Public Corrections Log */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm mb-12">
          <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
            {language === 'ar' ? 'سجل التصويبات والتدقيقات المعتمدة حديثاً' : 'Recent Public Corrections Log'}
          </h2>
          <div className="space-y-4">
            {publicCorrectionsLog.map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-[#F9FAFB] border border-stone-200 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full text-[11px]">
                      {item.id}
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-sm">
                      {item.entity}
                    </span>
                  </div>
                  <span className="font-mono text-stone-500 text-[11px]">
                    Resolved on {item.dateResolved}
                  </span>
                </div>
                <p className="text-stone-700 mb-1">
                  <strong>Original Item:</strong> {item.claim}
                </p>
                <p className="text-emerald-950 font-medium">
                  <strong>Resolution:</strong> {item.resolution}
                </p>
                <div className="mt-2 text-[10px] text-stone-500 font-mono">
                  Corroborated by: {item.tier}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarly Correction Submission Form */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-2">
            {language === 'ar' ? 'تقديم طلب تصحيح أو إضافة ببليوغرافية' : 'Submit a Scholarly Correction or Addendum'}
          </h2>
          <p className="text-xs text-stone-600 mb-6 leading-relaxed">
            Please provide exact page numbers, archival accession numbers, or DOI links for any proposed amendment. Our editorial board reviews submissions within 5 business days.
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-900/10 border border-emerald-900/30 text-center">
              <div className="text-3xl mb-2">✓</div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-1">
                Correction Proposal Received
              </h3>
              <p className="text-xs text-stone-600">
                Your submission has been queued for the GCC Editorial Board under tracking reference <strong>#SUB-{Math.floor(1000 + Math.random() * 9000)}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Target Article / Entity *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kingdom of Saudi Arabia, House of Saud"
                    value={formData.entity}
                    onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Specific Passage / Claim *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Section 4, Paragraph 2"
                    value={formData.claim}
                    onChange={(e) => setFormData({ ...formData, claim: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Proposed Scholarly Amendment *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the necessary correction with exact dates, names, or figures..."
                  value={formData.proposedCorrection}
                  onChange={(e) => setFormData({ ...formData, proposedCorrection: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Primary / Academic Source Citation *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cambridge History of Arabia, Vol 2, p. 184; or Official Gazette No. 4920"
                  value={formData.sourceCitation}
                  onChange={(e) => setFormData({ ...formData, sourceCitation: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Submitter Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. / Prof. / Researcher Name"
                    value={formData.submitterName}
                    onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Academic Affiliation</label>
                  <input
                    type="text"
                    placeholder="e.g. King Saud University, Oxford"
                    value={formData.academicAffiliation}
                    onChange={(e) => setFormData({ ...formData, academicAffiliation: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="fellow@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-900 text-antique-gold-300 font-bold uppercase tracking-wider rounded-full hover:bg-emerald-800 transition-colors shadow-md"
                >
                  {language === 'ar' ? 'إرسال طلب التدقيق لهيئة التحرير' : 'Submit Correction Proposal to Editorial Board'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function EditorialStandardsPage() {
  const { language } = useLanguage();

  const transliterationTable = [
    { arabic: 'ء / أ', latin: 'ʾ', name: 'Hamza (Glottal Stop)', example: 'Al-Qurʾān' },
    { arabic: 'ع', latin: 'ʿ', name: 'ʿAyn (Voiced pharyngeal fricative)', example: 'Saʿūd, ʿUmar' },
    { arabic: 'ح', latin: 'ḥ', name: 'Ḥāʾ (Voiceless pharyngeal fricative)', example: 'Muḥammad, Ḥaʾil' },
    { arabic: 'خ', latin: 'kh / ḫ', name: 'Khāʾ (Voiceless velar fricative)', example: 'Khalīfah' },
    { arabic: 'ص', latin: 'ṣ', name: 'Ṣād (Emphatic S)', example: 'Ṣabāḥ, Ṣanʿāʾ' },
    { arabic: 'ض', latin: 'ḍ', name: 'Ḍād (Emphatic D)', example: 'Al-Riyāḍ' },
    { arabic: 'ط', latin: 'ṭ', name: 'Ṭāʾ (Emphatic T)', example: 'Ṭarīq' },
    { arabic: 'ظ', latin: 'ẓ', name: 'Ẓāʾ (Emphatic Z)', example: 'Ẓufār' },
    { arabic: 'غ', latin: 'gh / ġ', name: 'Ghayn (Voiced velar fricative)', example: 'Baghdād' },
    { arabic: 'ق', latin: 'q', name: 'Qāf (Voiceless uvular plosive)', example: 'Qaṭar, Al-Quds' },
    { arabic: 'ا / ى', latin: 'ā', name: 'Alif / Alif Maqṣūrah (Long A)', example: 'Al-Manāmah' },
    { arabic: 'و', latin: 'ū', name: 'Wāw (Long U)', example: 'Dubayy, Saʿūd' },
    { arabic: 'ي', latin: 'ī', name: 'Yāʾ (Long I)', example: 'Amīr, Madīnah' },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
            {language === 'ar' ? 'المعايير والضوابط التحريرية' : 'Editorial Canon & Historiographical Standards'}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'المعايير التحريرية ودليل النقل الحرفي' : 'Editorial Standards & Transliteration'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'مجموعة الإرشادات الصارمة التي تحكم تدقيق الحقائق، التوثيق الأنسابي، والتعريب اللاتيني الموحد وفق مقاييس DIN 31635 الدولية.'
              : 'The editorial guidelines governing double-blind fact verification, royal genealogical auditing, and IJMES/DIN 31635 transliteration.'}
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-10 text-stone-700 font-sans">
          {/* Section 1: Verification Protocol */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
              1. Double-Source Verification Protocol
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              No historical assertion, date of accession, or geopolitical boundary is published in the GCC Encyclopedia without confirmation from at least two independent primary (Tier A) or peer-reviewed academic (Tier B) sources.
            </p>
            <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-emerald-900/20 text-xs text-emerald-950">
              <strong>Rule on Reign Timelines:</strong> Dynastic succession dates must specify both the Common Era (CE) and Hijri calendar (AH) years, alongside the official instrument of succession (e.g., Royal Decree, Allegiance Council resolution, or constitutional proclamation).
            </div>
          </section>

          {/* Section 2: Transliteration Guide */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
              2. Scientific Transliteration (DIN 31635 / IJMES)
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              To ensure phonetic fidelity while preserving scholarly searchability, all Arabic names, titles, and locations are indexed in both standard English convention and exact academic transliteration:
            </p>

            <div className="overflow-x-auto border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F9FAFB] text-emerald-950 font-serif font-bold border-b border-stone-200">
                    <th className="p-3">Arabic</th>
                    <th className="p-3 font-mono">Latin Char</th>
                    <th className="p-3">Phonetic Name</th>
                    <th className="p-3">Encyclopedia Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {transliterationTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="p-3 font-arabic font-bold text-base text-emerald-900">{row.arabic}</td>
                      <td className="p-3 font-mono font-bold text-antique-gold-800 text-sm">{row.latin}</td>
                      <td className="p-3 text-stone-700">{row.name}</td>
                      <td className="p-3 font-serif italic text-stone-900">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Royal Genealogies & Neutrality */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-4 pb-2 border-b border-stone-100">
              3. Genealogical Integrity & Historiographical Neutrality
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Genealogies of the 8 Royal Houses (Al Saud, Al Nahyan, Al Maktoum, Al Thani, Al Sabah, Al Khalifa, Al Said, and the Hashemite dynasty) are audited against recognized tribal monographs, official family archives, and constitutional succession gazettes.
            </p>
            <p className="text-sm leading-relaxed">
              Where historical sources present divergent accounts (e.g., precise founding dates in pre-modern Arabian tribal history), both viewpoints are cited with respective scholarly attributions in explanatory footnotes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

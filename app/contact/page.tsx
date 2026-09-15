'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactPage() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    department: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-antique-gold-700 font-semibold mb-2 block">
            {language === 'ar' ? 'التواصل والتعاون المؤسسي' : 'Institutional Liaison & Editorial Inquiries'}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-bold tracking-tight mb-4">
            {language === 'ar' ? 'تواصل مع هيئة الموسوعة' : 'Contact the Editorial Secretariat'}
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === 'ar'
              ? 'نرحب باستفسارات الباحثين والمؤسسات الأكاديمية والمكتبات الوطنية للتعاون التوثيقي وتبادل المخطوطات.'
              : 'Direct communication channels for academic fellows, national libraries, university presses, and diplomatic research missions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Institutional Contact Info & Offices */}
          <div className="md:col-span-1 space-y-6 text-xs text-stone-600">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <h3 className="font-serif font-bold text-base text-emerald-950 mb-3">
                Editorial Secretariat
              </h3>
              <p className="mb-2">
                <strong>General Inquiries:</strong><br />
                <span className="text-antique-gold-700 font-mono">editorial@gcc-encyclopedia.org</span>
              </p>
              <p className="mb-2">
                <strong>Archival Submissions:</strong><br />
                <span className="text-antique-gold-700 font-mono">archives@gcc-encyclopedia.org</span>
              </p>
              <p>
                <strong>Academic Partnerships:</strong><br />
                <span className="text-antique-gold-700 font-mono">fellowships@gcc-encyclopedia.org</span>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <h3 className="font-serif font-bold text-base text-emerald-950 mb-3">
                Liaison Delegations
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong className="text-stone-900">Riyadh Liaison:</strong><br />
                  Diplomatic Quarter, Riyadh 11564, Kingdom of Saudi Arabia
                </li>
                <li>
                  <strong className="text-stone-900">Abu Dhabi Office:</strong><br />
                  Al Maryah Cultural Center, Abu Dhabi, United Arab Emirates
                </li>
                <li>
                  <strong className="text-stone-900">European Academic Desk:</strong><br />
                  Oxford Middle East Centre, Woodstock Road, Oxford, UK
                </li>
              </ul>
            </div>
          </div>

          {/* Form Card */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-2">
              {language === 'ar' ? 'نموذج المراسلة الأكاديمية' : 'Submit an Institutional Inquiry'}
            </h2>
            <p className="text-xs text-stone-500 mb-6">
              All communications are routed directly to the appropriate senior editor or research archivist.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-900/10 border border-emerald-900/30 text-center">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="font-serif font-bold text-xl text-emerald-950 mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Thank you for contacting the GCC Editorial Secretariat. A research fellow will review your communication and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Prof. / Ambassador Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Affiliated Institution</label>
                    <input
                      type="text"
                      placeholder="University / Embassy / Foundation"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="fellow@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Department / Inquiry Focus *</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500 bg-white"
                    >
                      <option value="general">General Editorial Inquiry</option>
                      <option value="monograph">Monograph & Research Collaboration</option>
                      <option value="genealogy">Genealogical & Royal House Records</option>
                      <option value="licensing">Archival Digitization & Access</option>
                      <option value="press">Institutional Communications</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Inquiry Details *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide detailed context regarding your academic inquiry, treaty citation, or research partnership proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-antique-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-900 text-antique-gold-300 font-bold uppercase tracking-wider rounded-full hover:bg-emerald-800 transition-colors shadow-md"
                >
                  {language === 'ar' ? 'إرسال الرسالة إلى الأمانة التحريرية' : 'Transmit Inquiry to Editorial Secretariat'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

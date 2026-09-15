import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GCC — The Arab World, Documented | Encyclopedia & Archive',
  description: 'An authoritative digital encyclopedia and historical repository dedicated exclusively to the nations, dynasties, monarchs, cities, landmarks, culture, and civilizational legacy of the Arab world.',
  keywords: [
    'Arab World Encyclopedia',
    'GCC History',
    'Saudi Arabia',
    'House of Saud',
    'United Arab Emirates',
    'Al Nahyan',
    'Al Maktoum',
    'Qatar',
    'Al Thani',
    'Kuwait',
    'Al Sabah',
    'Bahrain',
    'Al Khalifa',
    'Oman',
    'Al Said',
    'Arab Dynasties',
    'Islamic Golden Age',
    'Petra',
    'AlUla',
    'Arabian Architecture',
    'Arabic Calligraphy'
  ],
  authors: [{ name: 'GCC Archival & Historical Editorial Board' }],
  openGraph: {
    title: 'GCC — The Arab World, Documented',
    description: 'An authoritative living encyclopedia of Arab history, nations, royalty, culture, and civilizational legacy.',
    url: 'https://gcc-archive.org',
    siteName: 'GCC Encyclopedia',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1600,
        height: 900,
        alt: 'The Arab World — Architecture & Heritage Archive',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCC — The Arab World, Documented',
    description: 'An authoritative living encyclopedia of Arab history, nations, royalty, and culture.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'GCC — The Arab World, Documented',
    url: 'https://gcc-archive.org',
    logo: 'https://gcc-archive.org/images/hero.jpg',
    description: 'Comprehensive digital encyclopedia documenting Arab history, royal houses, countries, architecture, and cultural heritage.',
    sameAs: [
      'https://en.wikipedia.org/wiki/Arab_world',
      'https://en.wikipedia.org/wiki/Gulf_Cooperation_Council'
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Noto+Kufi+Arabic:wght@400;500;600;700;800&family=Noto+Sans+Arabic:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-ink antialiased selection:bg-antiqueGold selection:text-canvas-white font-sans">
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

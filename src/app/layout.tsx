import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gildasattachi.com'),
  title: {
    default: 'Gildas Attachi, Adm. A - Communications et marketing | Montréal, Québec',
    template: '%s | Gildas Attachi'
  },
  description: "Conseiller en communications et en marketing au Québec. Plans de communication, campagnes d'acquisition, contenu et événements, et des outils numériques conçus avec l'IA. Adm. A., praticien certifié Prosci, MBA en cours (ESG-UQAM).",
  keywords: [
    'conseiller communications Montréal',
    'communications stratégiques Québec',
    'marketing et acquisition Québec',
    'communications événementielles',
    'gestion du changement Prosci',
    'stratégie de contenu et SEO',
    'marque employeur Canada',
    'Adm A communications marketing'
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    alternateLocale: 'en_CA',
    url: 'https://gildasattachi.com',
    siteName: 'Gildas Attachi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Gildas Attachi - Communications et marketing' }]
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${bricolage.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

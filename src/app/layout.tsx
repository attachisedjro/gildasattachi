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
    default: 'Gildas Attachi, Adm. A - Spécialiste de la communication stratégique | Montréal, Québec',
    template: '%s | Gildas Attachi'
  },
  description: "Professionnel senior en communications au Québec. 10 ans d'expérience en communication interne, marque employeur, RP et stratégie corporative. Adm. A., certifié Prosci.",
  keywords: [
    'conseiller communications Montréal',
    'communication interne Québec',
    'marque employeur Canada',
    'gestion du changement Prosci',
    'communications stratégiques Québec',
    'communication externe',
    'Adm A communications'
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    alternateLocale: 'en_CA',
    url: 'https://gildasattachi.com',
    siteName: 'Gildas Attachi',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Gildas Attachi - Spécialiste de la communication stratégique' }]
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

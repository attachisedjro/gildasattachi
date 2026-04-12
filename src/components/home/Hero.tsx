"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const content = {
  fr: {
    marquee: ["Communication 360°", "Marque employeur", "Relations publiques", "Bilingue FR-EN", "Membre de l'Ordre des Adm. A.", "Certifié Change Management Practitioner - Prosci", "Gestion du changement", "Communication interne"],
    h1: ["Dix ans à bâtir des ponts", "entre les organisations"],
    h1italic: "et leurs publics.",
    subtitle: "Spécialiste de la communication stratégique, je traduis les enjeux organisationnels en récits cohérents et en actions mesurables. 10 ans d'expérience entre le Québec et l'Afrique de l'Ouest, en communication interne, marque employeur et relations publiques.",
    ctaPrimary: "Voir mon dossier",
    ctaPrimaryHref: "/dossier",
    ctaSecondary: "Me contacter",
    ctaSecondaryHref: "/contact",
    stats: [
      { val: "10 ans+", label: "d'expérience" },
      { val: "+70 %",   label: "ouverture infolettre · NMG" },
      { val: "50+",     label: "commandites gérées · NMG" },
      { val: "+86 %",   label: "croissance followers · SOBEBRA" },
      { val: "+50 %",   label: "engagement · Yellowbet" },
      { val: "95 %",    label: "fidélisation · SPIRO" },
    ],
  },
  en: {
    marquee: ["360° Communications", "Employer Branding", "Public Relations", "Bilingual FR-EN", "Member of the Ordre des Adm. A.", "Certified Change Management Practitioner - Prosci", "Change Management", "Internal Communications"],
    h1: ["Ten years building bridges", "between organizations"],
    h1italic: "and their audiences.",
    subtitle: "Strategic communications specialist translating organizational challenges into coherent narratives and measurable actions. 10 years of experience between Quebec and West Africa, in internal communications, employer branding, and public relations.",
    ctaPrimary: "View my portfolio",
    ctaPrimaryHref: "/en/dossier",
    ctaSecondary: "Get in touch",
    ctaSecondaryHref: "/en/contact",
    stats: [
      { val: "10 yrs+", label: "of experience" },
      { val: "+70%",    label: "newsletter open rate · NMG" },
      { val: "50+",     label: "sponsorships managed · NMG" },
      { val: "+86%",    label: "follower growth · SOBEBRA" },
      { val: "+50%",    label: "engagement · Yellowbet" },
      { val: "95%",     label: "retention · SPIRO" },
    ],
  },
};

export function Hero({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = content[locale];
  return (
    <>
      <section className="grain relative min-h-screen flex items-center overflow-hidden bg-[#fdf9f6] pt-28 pb-20">

        {/* Cercle décoratif de fond — top right */}
        <div
          className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f1edea 0%, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />

        <div className="container-custom w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ── Colonne texte ── */}
            <div className="lg:col-span-7 order-2 lg:order-1">

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-[#26170c] leading-[0.88] tracking-[-0.04em] mb-8"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
              >
                {c.h1[0]}<br />
                {c.h1[1]}<br />
                <span className="italic font-light text-stroke">{c.h1italic}</span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[#4f453f] text-lg leading-relaxed mb-10 max-w-lg"
              >
                {c.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-3 mb-16"
              >
                <Link
                  href={c.ctaPrimaryHref}
                  className="inline-block bg-[#26170c] text-white px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d2b1f] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  {c.ctaPrimary}
                </Link>
                <Link
                  href={c.ctaSecondaryHref}
                  className="inline-block border border-[#d2c4bc] text-[#26170c] px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#775a19] hover:text-[#775a19] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  {c.ctaSecondary}
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-8 border-t border-[#d2c4bc]/50"
              >
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-mono font-bold text-2xl text-[#26170c] tracking-tight leading-none mb-1">
                      {s.val}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#81756e] leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Colonne photo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-64 sm:w-80 lg:w-full max-w-sm">
                {/* Fond doré décalé */}
                <div
                  className="absolute bg-[#e9c176]/25 pointer-events-none"
                  style={{
                    inset: 0,
                    transform: "translate(12px, 12px)",
                    borderRadius: "2px",
                  }}
                />
                {/* Photo avec clip diagonal */}
                <div
                  className="relative overflow-hidden aspect-[3/4] bg-[#ebe7e4]"
                  style={{
                    borderRadius: "2px",
                    clipPath: "polygon(0 0, 100% 0, 100% 92%, 85% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src="/gildas-portrait.jpeg"
                    alt="Gildas Attachi, Adm. A — Spécialiste en communications"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 320px, (max-width: 1280px) 380px, 420px"
                  />
                  {/* Overlay léger pour cohérence avec la palette */}
                  <div className="absolute inset-0 bg-[#26170c]/10 mix-blend-multiply" />
                </div>
                {/* Badge flottant */}
                <div
                  className="absolute -bottom-5 -left-5 bg-[#26170c] text-white px-5 py-4 z-10"
                  style={{ borderRadius: "2px" }}
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] font-bold text-[#e9c176] mb-1">
                    Credentials
                  </div>
                  <div className="font-display font-bold text-sm leading-snug">Adm. A. · MBA · Prosci</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="py-10 bg-[#26170c] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...c.marquee, ...c.marquee].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[#e9c176]/30 font-display text-xl tracking-widest mx-8">•</span>
              <span className="text-white font-display text-lg uppercase tracking-[0.2em]">{item}</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

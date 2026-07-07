"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

/* ─── EXPERTISE ─── */
const domains = [
  {
    num: "01",
    title: "Communication interne\n& marque employeur",
    description: "Aligner les équipes, clarifier les messages, faire vivre la culture. J'ai structuré des communications internes dans des organisations de 50 à 1 800 employés, produit les outils qui portent la voix de l'entreprise (guides de prise de parole, rapport annuel, rapport ESG), et accompagné des directions sur des enjeux sensibles.",
    tags: ["Communication interne", "Marque employeur", "Rapport annuel & ESG", "Gestion du changement", "Communication de crise"],
  },
  {
    num: "02",
    title: "Communication externe\n& relations publiques",
    description: "Positionner une organisation, gérer sa réputation, parler aux bons publics. J'ai piloté des campagnes 360°, coordonné des relations médias, préparé des porte-paroles, géré des situations de crise, et orchestré des communications événementielles de bout en bout, du brief aux fournisseurs jusqu'à la coordination sur place.",
    tags: ["Relations médias", "Campagnes 360°", "Communications événementielles", "Gestion de fournisseurs", "Préparation porte-paroles"],
  },
  {
    num: "03",
    title: "Marketing numérique\n& contenu",
    description: "Créer de l'engagement, mesurer les résultats, optimiser ce qui fonctionne. J'ai géré des communautés sur plusieurs marchés, déployé des campagnes multicanales, utilisé les données pour ajuster les stratégies, et bâti une stratégie d'influenceurs avec des agences externes.",
    tags: ["Stratégie de contenu", "Médias sociaux", "Campagnes multicanales", "Analytics", "SEO & Ads"],
  },
  {
    num: "04",
    title: "Intelligence artificielle\nappliquée",
    description: "Concevoir et mettre en ligne mes propres produits logiciels avec l'IA. Ronde Sécurité, une plateforme d'inspection de véhicules commerciaux au Québec, et Le Dépôt, une plateforme pour les professionnels de la communication et les TPE, avec environ 300 membres.",
    tags: ["Next.js", "Vercel", "API Claude", "SEO & GEO", "Automatisation"],
  },
];

type Result = { val: string; label: string };

/* ─── TIMELINE ─── */
const experiences: {
  period: string;
  title: string;
  org: string;
  sector: string;
  current?: boolean;
  badge?: string;
  points: string[];
  results?: Result[];
  parallel?: { period: string; org: string; note: string }[];
  link?: string;
}[] = [
  {
    period: "Fév. 2025 -présent",
    title: "Conseiller principal, Communication 360°",
    org: "Nouveau Monde Graphite (NMG)",
    sector: "Secteur minier · Québec",
    current: true,
    points: [
      "Élaboration et déploiement de plans de communication interne et externe pour les initiatives et programmes de l'organisation",
      "Production d'outils corporatifs : infolettres, présentation d'accueil, one-pagers, guides de prise de parole, contenus web et médias sociaux",
      "Contribution au rapport annuel et au rapport ESG de l'entreprise",
      "Communications événementielles : plans, outils promotionnels, coordination des photographes, et gestion du programme de dons et commandites",
      "Coordination de fournisseurs et de pigistes : brief, devis, suivi des livrables",
      "Rôle-conseil auprès des directions et cohérence des messages à l'échelle de l'organisation",
    ],
    results: [
      { val: "+70 %", label: "Ouverture infolettre interne" },
      { val: "+1 000", label: "Abonnés LinkedIn en 11 mois" },
      { val: "50+", label: "Commandites gérées" },
      { val: "15+", label: "Communiqués de presse" },
      { val: "4", label: "Événements coordonnés" },
      { val: "6+", label: "Kits de communication produits" },
    ],
  },
  {
    period: "Jan. 2024 -Jan. 2025",
    title: "Conseiller, Communication et Marketing",
    org: "Iron Talent Canada",
    sector: "Agence · Québec",
    points: [
      "Stratégies de communication web sur mesure pour différents clients",
      "Gestion de médias sociaux : contenus, animation de communautés, analyse de performance",
      "Coordination de campagnes numériques multicanal",
    ],
    results: [
      { val: "6", label: "Clients simultanés" },
      { val: "2", label: "Mandats longs terme" },
    ],
    parallel: [
      { period: "Nov. 2024 -Jan. 2025", org: "Coffrets Prestige", note: "Pigiste · Storytelling & e-commerce" },
      { period: "Mai -Juil. 2024", org: "La Maison du Bleuet", note: "Pigiste · Communication numérique" },
    ],
  },
  {
    period: "Mai -Déc. 2023",
    title: "Gestionnaire, Marketing et Communication",
    org: "SPIRO",
    sector: "Mobilité électrique · Bénin",
    points: [
      "Campagnes 360° avec partenaires GSM atteignant 95 % de fidélisation",
      "Communication interne et marketing RH",
      "Relations médias, activations terrain et gestion budgétaire",
    ],
    results: [
      { val: "95 %", label: "Fidélisation client" },
      { val: "2", label: "Offres partenaires GSM" },
    ],
  },
  {
    period: "Avr. 2021 -Avr. 2023",
    title: "Gestionnaire, Marketing et Communication",
    org: "Yellowbet & LNBPari",
    sector: "iGaming · Afrique de l'Ouest",
    points: [
      "Stratégie de communication annuelle pour l'expansion multi-marchés",
      "Campagnes multicanal ayant augmenté l'engagement de 50 %",
      "Rebranding Yellowbet et lancement LNBPari",
    ],
    results: [
      { val: "+50 %", label: "Engagement client" },
      { val: "×2", label: "Revenus Guinée en 3 mois" },
      { val: "~35M$", label: "Volume de paris · Bénin 2021" },
      { val: "~44M$", label: "Volume de paris · Bénin 2022" },
    ],
  },
  {
    period: "Déc. 2018 -Mars 2021",
    title: "Conseiller en Communication",
    org: "SOBEBRA",
    sector: "Brasserie · Bénin",
    points: [
      "16 pages réseaux sociaux -croissance de 86 % des followers",
      "Campagnes 360° et rebranding de marques panafricaines",
      "Supervision terrain : production vidéo, événements corporatifs",
      "Collaboration avec des agences externes et mise en place d'une stratégie d'influenceurs",
    ],
    results: [
      { val: "300K+", label: "Abonnés cumulés (+86 %)" },
      { val: "30+", label: "Campagnes digitales" },
      { val: "200K+", label: "Vues / série vidéo" },
      { val: "10K+", label: "Abonnés SOBEBRA Express" },
    ],
  },
  {
    period: "Mars -Nov. 2018",
    title: "Conseiller, Communication numérique",
    org: "Open SI",
    sector: "Agence · Bénin",
    points: [
      "Mandats Ecobank Bénin : campagne Ecobank Mobile, contenu quotidien",
      "Mandat goMediCAL : campagne #StopAutomédication, lancement du blog",
    ],
    results: [
      { val: "50K+", label: "Téléchargements Ecobank Mobile" },
      { val: "90 %", label: "Avis positifs appli" },
      { val: "#1", label: "Appli e-santé au Bénin (goMediCAL)" },
      { val: "200+", label: "Rendez-vous médicaux / mois" },
    ],
  },
  {
    period: "2017 -présent",
    title: "Co-fondateur & Directeur Communication",
    org: "Monwaih",
    sector: "Média · Culture africaine · Bénin",
    badge: "Entrepreneuriat",
    points: [
      "Co-fondation du premier média 100 % culture africaine au Bénin",
      "Ligne éditoriale, coordination des contenus et animation des communautés",
      "Audience construite sans publicité",
    ],
    results: [
      { val: "#1", label: "Meilleur blog communautaire Bénin 2017" },
      { val: "5K+", label: "Visites uniques / jour" },
      { val: "55K+", label: "Pages vues / jour" },
    ],
  },
  {
    period: "Avril 2020",
    title: "Initiative de communication publique",
    org: "Vidéo COVID-19",
    sector: "Initiative citoyenne · Bénin",
    badge: "Initiative citoyenne",
    points: [
      "Production d'une vidéo de sensibilisation aux gestes barrières",
      "Sélectionnée et relayée officiellement par le gouvernement béninois",
      "Intégrée aux initiatives solidaires nationales",
    ],
    results: [
      { val: "Officielle", label: "Approuvée par le gouvernement béninois" },
    ],
    link: "https://youtu.be/gSFKaTe9zr0",
  },
];

const education = [
  { degree: "MBA, Conseil en management", school: "ESG-UQAM", period: "En cours · décembre 2027" },
  { degree: "Certification Prosci -Change Management Practitioner", school: "Prosci", period: "Avril 2026" },
  { degree: "Maîtrise, Marketing et Communications", school: "ESEF, Université Mohammed 1er", period: "2024" },
  { degree: "Maîtrise, Gestion des ressources humaines", school: "UPI-ONM", period: "2015 · reconnue MIFI" },
];

const tools = ["HubSpot", "Cyberimpact", "Hootsuite", "Mailchimp", "GA4", "Google Ads", "Canva", "WordPress", "CapCut", "Zoom", "Suite Microsoft & Google", "Claude · ChatGPT · Copilot", "Next.js", "Vercel"];

/* ─── COMPOSANTS ─── */
function DomainRow({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-[#d2c4bc]/30">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-6 md:gap-12 py-9 text-left group">
        <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#d2c4bc] mt-2 flex-shrink-0 w-8">{domain.num}</span>
        <h3 className="font-display font-bold text-[#26170c] leading-[0.9] tracking-[-0.03em] flex-1 whitespace-pre-line transition-colors group-hover:text-[#775a19]"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}>
          {domain.title}
        </h3>
        <span className="flex-shrink-0 w-8 h-8 border border-[#d2c4bc] flex items-center justify-center mt-1 transition-all duration-300 group-hover:border-[#775a19] group-hover:text-[#775a19] text-lg font-light"
          style={{ borderRadius: "2px", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
        <div className="pl-14 md:pl-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <p className="text-[#4f453f] text-lg leading-relaxed">{domain.description}</p>
          <div className="flex flex-wrap gap-2 content-start">
            {domain.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 border border-[#d2c4bc] text-[#81756e]"
                style={{ borderRadius: "2px" }}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function DossierPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#26170c]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-white leading-[0.88] tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>
                Ce que je fais.<br />
                <span className="text-[#e9c176] italic font-light">La preuve.</span>
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-4">
              <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#e9c176] pl-6">
                Quatre domaines d'expertise. Dix ans de résultats mesurés.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-[#fdf9f6]">
        <div className="container-custom">
          <h2 className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em] mb-2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>Ce que je fais.</h2>
          <p className="text-[#81756e] text-sm mb-12 max-w-md">
            Quatre domaines où j'interviens depuis plus de dix ans.
          </p>
          {domains.map((d, i) => <DomainRow key={d.num} domain={d} index={i} />)}
          <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="pull-quote mt-16 text-xl md:text-2xl max-w-2xl">
            La communication qui fonctionne, c'est celle qui part des gens. Pas des PowerPoints.
          </motion.blockquote>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#f1edea]">
        <div className="container-custom">
          <h2 className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em] mb-16"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>D'où ça vient.</h2>
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 mb-12 border-b border-[#d2c4bc]/25 last:border-0 last:mb-0 last:pb-0">

                {/* Colonne gauche : période + meta */}
                <div className="lg:col-span-3 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-[#81756e]">{exp.period}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d2c4bc]">{exp.sector}</span>
                  {exp.current && (
                    <span className="inline-block w-fit text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-[#775a19] text-white mt-1"
                      style={{ borderRadius: "2px" }}>Actuel</span>
                  )}
                  {exp.badge && !exp.current && (
                    <span className="inline-block w-fit text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-[#26170c]/10 text-[#775a19] border border-[#d2c4bc] mt-1"
                      style={{ borderRadius: "2px" }}>{exp.badge}</span>
                  )}
                </div>

                {/* Colonne droite : contenu */}
                <div className="lg:col-span-9">
                  <h3 className="font-display font-bold text-[#26170c] text-xl mb-0.5">{exp.title}</h3>
                  <p className="text-[#775a19] font-bold text-sm mb-4">{exp.org}</p>

                  <ul className="flex flex-col gap-2 mb-6">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[#4f453f] text-sm leading-relaxed">
                        <span className="text-[#e9c176] flex-shrink-0 mt-0.5">›</span>{p}
                      </li>
                    ))}
                  </ul>

                  {/* Résultats mesurés */}
                  {exp.results && exp.results.length > 0 && (
                    <div className={`grid gap-px bg-[#d2c4bc]/30 border border-[#d2c4bc]/30 mb-5`}
                      style={{
                        borderRadius: "2px",
                        gridTemplateColumns: `repeat(${Math.min(exp.results.length, 4)}, 1fr)`,
                      }}>
                      {exp.results.map((r) => (
                        <div key={r.label} className="bg-[#fdf9f6] px-4 py-3">
                          <div className="font-mono font-bold text-[#775a19] leading-none mb-1"
                            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                            {r.val}
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#81756e] leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mandats parallèles */}
                  {exp.parallel && (
                    <div className="flex flex-col sm:flex-row gap-3">
                      {exp.parallel.map((p) => (
                        <div key={p.org} className="flex-1 bg-[#ebe7e4] p-4" style={{ borderRadius: "2px" }}>
                          <span className="font-mono text-[10px] text-[#81756e] block mb-1">{p.period}</span>
                          <span className="font-bold text-[#26170c] text-sm block">{p.org}</span>
                          <span className="text-[11px] text-[#81756e]">{p.note}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Lien externe (ex : vidéo COVID) */}
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#775a19] hover:text-[#26170c] transition-colors mt-3">
                      <span>Voir la vidéo</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation & Outils */}
      <section className="section-padding bg-[#26170c]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-white leading-tight tracking-[-0.03em] mb-10"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>Formation.</h2>
              {education.map((e, i) => (
                <motion.div key={e.degree} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col sm:flex-row sm:justify-between gap-1 py-5 border-b border-white/10">
                  <div>
                    <div className="font-body font-semibold text-white">{e.degree}</div>
                    <div className="text-white/50 text-sm mt-0.5">{e.school}</div>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#e9c176] flex-shrink-0 sm:text-right">{e.period}</span>
                </motion.div>
              ))}
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-white leading-tight tracking-[-0.03em] mb-10"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>Outils.</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-2 border border-white/10 text-white/60 hover:border-[#e9c176] hover:text-[#e9c176] transition-colors"
                    style={{ borderRadius: "2px" }}>{t}</span>
                ))}
              </div>
              <div className="mt-12 pt-10 border-t border-white/10">
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#e9c176] mb-4">Engagement envers différentes causes</h3>
                <div className="flex flex-col gap-2 text-white/60 text-sm">
                  <span>Fonds Héritage pour l&apos;Environnement -bénévole depuis avril 2026</span>
                  <span>Jeux de Montréal 2024</span>
                  <span>Rotary International -membre actif depuis 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#fdf9f6] border-t border-[#d2c4bc]/30">
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            Vous voulez travailler<br />
            <span className="italic font-light text-stroke">ensemble ?</span>
          </h2>
          <Link href="/contact"
            className="flex-shrink-0 inline-block bg-[#26170c] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d2b1f] transition-colors"
            style={{ borderRadius: "2px" }}>
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}

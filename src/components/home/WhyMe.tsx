"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = {
  fr: {
    title: "Pourquoi moi ?",
    subtitle: "Ce qui distingue mon approche, entre communications et marketing.",
    items: [
      { num: "01", title: "Deux marchés.\nUn seul standard.", text: "10 ans entre l'Afrique de l'Ouest et le Québec. Les contextes changent, l'exigence de résultats, non.", stat: "+50%", statLabel: "engagement moyen sur ses mandats" },
      { num: "02", title: "Interne et externe\nsans frontière.", text: "Je couvre les deux périmètres sans silo. Ce que je dis à l'externe est cohérent avec ce que vivent les employés.", stat: "360°", statLabel: "couverture de la communication" },
      { num: "03", title: "Le plan,\net l'outil qui va avec.", text: "Quand l'outil dont j'ai besoin n'existe pas, je le construis. Ronde Sécurité et Le Dépôt sont deux logiciels que j'ai conçus et mis en ligne avec l'IA, à côté de mon travail de tous les jours en communications.", stat: "2", statLabel: "logiciels conçus et livrés avec l'IA" },
      { num: "04", title: "La stratégie et\nl'exécution, ensemble.", text: "Je construis les plans et je les mets en œuvre. Pas de remise de rapport sans suivi de résultats.", stat: "95%", statLabel: "fidélisation client SPIRO" },
    ],
  },
  en: {
    title: "Why me?",
    subtitle: "What sets my approach apart, between communications and marketing.",
    items: [
      { num: "01", title: "Two markets.\nOne standard.", text: "10 years between West Africa and Quebec. Contexts change. The demand for results does not.", stat: "+50%", statLabel: "average engagement across mandates" },
      { num: "02", title: "Internal and external\nwithout silos.", text: "I cover both perimeters without walls. What I communicate externally is aligned with what employees actually experience.", stat: "360°", statLabel: "communications coverage" },
      { num: "03", title: "The plan,\nand the tool to match.", text: "When the tool I need doesn't exist, I build it. Ronde Sécurité and Le Dépôt are two pieces of software I designed and shipped with AI, alongside my day-to-day work in communications.", stat: "2", statLabel: "software products designed and shipped with AI" },
      { num: "04", title: "Strategy and\nexecution, together.", text: "I build the plans and implement them. No deliverable without follow-up on results.", stat: "95%", statLabel: "client retention at SPIRO" },
    ],
  },
};

type DiffItem = { num: string; title: string; text: string; stat: string; statLabel: string };
function Item({ item, index }: { item: DiffItem; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 py-20 border-b border-[#d2c4bc]/20 overflow-hidden"
    >
      {/* Numéro watermark en fond — parallaxe */}
      <motion.span
        className="absolute select-none font-display font-bold text-[#26170c] leading-none pointer-events-none"
        aria-hidden
        style={{
          y,
          fontSize: "clamp(8rem, 22vw, 18rem)",
          opacity: 0.04,
          top: "50%",
          left: isEven ? "-2%" : "auto",
          right: isEven ? "auto" : "-2%",
          transform: "translateY(-50%)",
          letterSpacing: "-0.05em",
        }}
      >
        {item.num}
      </motion.span>

      {/* Layout alterné */}
      {isEven ? (
        <>
          {/* Numéro + Stat — gauche */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-8 lg:pr-8">
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#d2c4bc]">
              {item.num}
            </span>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div
                className="font-mono font-bold text-[#775a19] leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {item.stat}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#81756e] mt-2 leading-tight max-w-[120px]">
                {item.statLabel}
              </div>
            </motion.div>
          </div>

          {/* Titre — centre */}
          <div className="lg:col-span-6 flex items-center lg:px-8">
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display font-bold text-[#26170c] leading-[0.9] tracking-[-0.04em] whitespace-pre-line"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              {item.title}
            </motion.h3>
          </div>

          {/* Texte — droite */}
          <div className="lg:col-span-4 flex items-center lg:pl-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#4f453f] leading-relaxed border-l-2 border-[#e9c176] pl-6"
            >
              {item.text}
            </motion.p>
          </div>
        </>
      ) : (
        <>
          {/* Texte — gauche */}
          <div className="lg:col-span-4 flex items-center lg:pr-8 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#4f453f] leading-relaxed border-l-2 border-[#e9c176] pl-6"
            >
              {item.text}
            </motion.p>
          </div>

          {/* Titre — centre */}
          <div className="lg:col-span-6 flex items-center lg:px-8 order-1 lg:order-2">
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display font-bold text-[#26170c] leading-[0.9] tracking-[-0.04em] whitespace-pre-line"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              {item.title}
            </motion.h3>
          </div>

          {/* Numéro + Stat — droite */}
          <div className="lg:col-span-2 flex flex-col justify-between items-end gap-8 lg:pl-8 order-3">
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#d2c4bc]">
              {item.num}
            </span>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block text-right"
            >
              <div
                className="font-mono font-bold text-[#775a19] leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {item.stat}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#81756e] mt-2 leading-tight max-w-[120px] ml-auto">
                {item.statLabel}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export function WhyMe({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = content[locale];
  return (
    <section className="section-padding bg-[#fdf9f6]">
      <div className="container-custom">

        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          <div>
            <h2
              className="font-display font-bold text-[#26170c] leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              {c.title}
            </h2>
          </div>
          <p className="text-[#81756e] text-sm max-w-xs leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* Items */}
        {c.items.map((item, i) => (
          <Item key={item.num} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "What I've consistently appreciated is his ability to combine strategic thinking with sharp execution. He always had a clear sense of direction, knew how to rally others around a vision, and most importantly,he delivered.",
    name: "Nkurunziza K. Dominique",
    role: "VP Operations @ Djamo (YC W21)",
    context: "Supérieur direct chez Yellowbet et SPIRO",
  },
  {
    quote: "Sa capacité d'adaptation, sa recherche constante de bonnes et de nouvelles pratiques, ainsi que sa bonhomie, font de lui un allié de choix et de poids dans une équipe.",
    name: "Doria Rey",
    role: "Responsable des opérations, Country Manager",
    context: "Supérieur direct chez Open SI",
  },
  {
    quote: "Il possède une vision stratégique forte et une capacité à mobiliser les équipes autour d'initiatives à fort impact. Bilingue et doté d'excellentes compétences rédactionnelles, il sait adapter son discours aux différents publics.",
    name: "Brice Houndonougbo",
    role: "CFO · CEO Bénin chez SPIRO",
    context: "Supérieur direct chez SPIRO",
  },
  {
    quote: "Jamais avare de nouvelles idées, Gildas n'a pas usurpé son surnom de 'couteau suisse'. Capable d'éditer une stratégie digitale, de la mettre en action, d'analyser les KPIs,mais aussi de tourner derrière une caméra, de prendre des photos, de réaliser des visuels.",
    name: "Morel Hounkpevi",
    role: "Digital Manager @ SOBEBRA",
    context: "Supérieur direct chez SOBEBRA",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="section-padding bg-[#fdf9f6]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2
              className="font-display font-bold text-[#26170c] leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Ce qu'ils disent.
            </h2>
          </div>
          {/* Dots navigation */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: i === active ? "2.5rem" : "0.75rem",
                  height: "3px",
                  background: i === active ? "#775a19" : "#d2c4bc",
                }}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Citation */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Guillemet décoratif */}
                <div
                  className="font-display font-bold text-[#e9c176] leading-none mb-6 select-none"
                  style={{ fontSize: "6rem", lineHeight: "0.7" }}
                >
                  "
                </div>
                <blockquote className="font-body text-[#26170c] text-xl md:text-2xl leading-relaxed italic mb-10">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-5 pt-8 border-t border-[#d2c4bc]/40">
                  <div
                    className="w-10 h-10 bg-[#26170c] text-white flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                    style={{ borderRadius: "2px" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#26170c] text-lg leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[#4f453f] text-sm mt-0.5">{t.role}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#81756e] mt-1">
                      {t.context}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cartes latérales,autres témoignages */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-5 transition-all duration-300 border"
                style={{
                  borderRadius: "2px",
                  background: i === active ? "#26170c" : "#f1edea",
                  borderColor: i === active ? "#26170c" : "transparent",
                }}
              >
                <div
                  className="font-display font-bold text-sm leading-tight mb-1"
                  style={{ color: i === active ? "#e9c176" : "#26170c" }}
                >
                  {item.name}
                </div>
                <div
                  className="text-[11px] leading-tight"
                  style={{ color: i === active ? "rgba(255,255,255,0.5)" : "#81756e" }}
                >
                  {item.role}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

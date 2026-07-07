"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xvzwdewa", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-[#26170c]">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Parlons-en.<br />
            <span className="text-[#e9c176] italic font-light">Vraiment.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/50 text-lg mt-8 max-w-md"
          >
            Un projet, une opportunité, une question. Je réponds sous 48 h.
          </motion.p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-padding bg-[#fdf9f6]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-10"
          >
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#81756e] mb-4">LinkedIn</p>
              <a
                href="https://linkedin.com/in/gildas-attachi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-[#26170c] text-xl hover:text-[#775a19] transition-colors"
              >
                gildas-attachi
              </a>
            </div>
            <div className="pt-8 border-t border-[#d2c4bc]/30">
              <p className="text-[#81756e] text-sm leading-relaxed">
                Communications et marketing. Basé à Montréal, Québec.
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-start gap-6 py-12">
                <div className="w-12 h-12 bg-[#775a19] flex items-center justify-center" style={{ borderRadius: "2px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-display font-bold text-[#26170c] text-2xl mb-2">Message envoyé.</h2>
                  <p className="text-[#4f453f] leading-relaxed">Je reviens vers vous sous 48 h.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#775a19] hover:text-[#26170c] transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#81756e]">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom complet"
                      className="bg-white border border-[#d2c4bc] text-[#26170c] placeholder:text-[#c0b5ae] px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#775a19] transition-colors"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#81756e]">
                      Courriel
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@courriel.com"
                      className="bg-white border border-[#d2c4bc] text-[#26170c] placeholder:text-[#c0b5ae] px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#775a19] transition-colors"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#81756e]">
                    Objet
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="bg-white border border-[#d2c4bc] text-[#26170c] px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#775a19] transition-colors appearance-none"
                    style={{ borderRadius: "2px" }}
                  >
                    <option value="" disabled>Sélectionnez un objet</option>
                    <option value="Opportunité d'emploi">Opportunité d'emploi</option>
                    <option value="Mandat de consultation">Mandat de consultation</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#81756e]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="bg-white border border-[#d2c4bc] text-[#26170c] placeholder:text-[#c0b5ae] px-4 py-3.5 text-sm font-body focus:outline-none focus:border-[#775a19] transition-colors resize-none"
                    style={{ borderRadius: "2px" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Une erreur est survenue. Réessayez ou écrivez directement à gildasattachi@gmail.com.</p>
                )}

                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-[#26170c] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d2b1f] transition-colors disabled:opacity-50"
                    style={{ borderRadius: "2px" }}
                  >
                    {status === "sending" ? "Envoi..." : "Envoyer le message"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

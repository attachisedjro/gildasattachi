import { Hero } from "@/components/home/Hero";
import { WhyMe } from "@/components/home/WhyMe";
import { Testimonials } from "@/components/home/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyMe />
      <Testimonials />

      {/* CTA final */}
      <section className="section-padding bg-[#26170c] overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <h2
                className="font-display font-bold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Bâtissons le<br />
                <span className="text-[#e9c176] italic font-light">Futur.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Disponible pour des mandats de conseil stratégique et des opportunités seniors en communications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#e9c176] text-[#26170c] px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#ffdea5] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Démarrer une conversation
                </Link>
                <Link
                  href="/dossier"
                  className="inline-block border border-white/20 text-white px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#e9c176] hover:text-[#e9c176] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Voir mon dossier
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Déco */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d2b1f] rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </section>
    </>
  );
}

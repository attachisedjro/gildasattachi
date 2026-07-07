import { Hero } from "@/components/home/Hero";
import { WhyMe } from "@/components/home/WhyMe";
import { Testimonials } from "@/components/home/Testimonials";
import Link from "next/link";

export const metadata = {
  title: "Gildas Attachi, Adm. A — Communications & Marketing | Montreal, Quebec",
  description: "Communications and marketing advisor. Communication plans, acquisition campaigns, content and events, plus digital tools built with AI. Adm. A., certified Prosci practitioner, MBA in progress (ESG-UQAM).",
};

export default function HomeEN() {
  return (
    <>
      <Hero locale="en" />
      <WhyMe locale="en" />
      <Testimonials locale="en" />

      {/* Final CTA */}
      <section className="section-padding bg-[#26170c] overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <h2
                className="font-display font-bold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Let's build the<br />
                <span className="text-[#e9c176] italic font-light">Future.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Available for senior communications and marketing opportunities, with AI as an accelerator.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/en/contact"
                  className="inline-block bg-[#e9c176] text-[#26170c] px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#ffdea5] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  Start a conversation
                </Link>
                <Link
                  href="/en/dossier"
                  className="inline-block border border-white/20 text-white px-7 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-[#e9c176] hover:text-[#e9c176] transition-colors"
                  style={{ borderRadius: "2px" }}
                >
                  View my portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d2b1f] rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </section>
    </>
  );
}

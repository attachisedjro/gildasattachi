"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const domains = [
  {
    num: "01",
    title: "Internal Communications\n& Employer Branding",
    description: "Aligning teams, clarifying messages, bringing culture to life. I've structured internal communications in organizations from 50 to 1,800 employees, produced the tools that carry a company's voice (talking-point guides, annual report, ESG report), and advised leadership on sensitive communications.",
    tags: ["Internal Communications", "Employer Branding", "Annual & ESG Reporting", "Change Management", "Crisis Communications"],
  },
  {
    num: "02",
    title: "External Communications\n& Public Relations",
    description: "Positioning an organization, managing its reputation, reaching the right audiences. I've led 360° campaigns, coordinated media relations, prepared spokespersons, managed crisis situations, and run event communications end to end, from vendor briefs to on-site coordination.",
    tags: ["Media Relations", "360° Campaigns", "Event Communications", "Vendor Management", "Spokesperson Preparation"],
  },
  {
    num: "03",
    title: "Digital Marketing\n& Content",
    description: "Creating engagement, measuring results, optimizing what works. I've managed communities across multiple markets, deployed multichannel campaigns, used data to refine strategies, and built an influencer strategy with external agencies.",
    tags: ["Content Strategy", "Social Media", "Multichannel Campaigns", "Analytics", "SEO & Ads"],
  },
  {
    num: "04",
    title: "Applied\nArtificial Intelligence",
    description: "Designing and shipping my own software products with AI. Ronde Sécurité, a commercial vehicle inspection platform in Quebec, and Le Dépôt, a platform for communications professionals and small businesses, with around 300 members.",
    tags: ["Next.js", "Vercel", "Claude API", "SEO & GEO", "Automation"],
  },
];

type Result = { val: string; label: string };

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
    period: "Feb. 2025 – present",
    title: "Senior Advisor, 360° Communications",
    org: "Nouveau Monde Graphite (NMG)",
    sector: "Mining sector · Quebec",
    current: true,
    points: [
      "Development and rollout of internal and external communication plans for the organization's initiatives and programs",
      "Production of corporate tools: newsletters, onboarding presentation, one-pagers, talking-point guides, web and social content",
      "Contribution to the company's annual report and ESG report",
      "Event communications: plans, promotional materials, photographer coordination, and management of the donations and sponsorships program",
      "Coordination of vendors and freelancers: briefs, quotes, deliverable follow-up",
      "Advisory role to leadership and message consistency across the organization",
    ],
    results: [
      { val: "+70%", label: "Internal newsletter open rate" },
      { val: "+1,000", label: "LinkedIn followers in 11 months" },
      { val: "50+", label: "Sponsorships managed" },
      { val: "15+", label: "Press releases" },
      { val: "4", label: "Events coordinated" },
      { val: "6+", label: "Communication kits produced" },
    ],
  },
  {
    period: "Jan. 2024 – Jan. 2025",
    title: "Advisor, Communications and Marketing",
    org: "Iron Talent Canada",
    sector: "Agency · Quebec",
    points: [
      "Tailored web communications strategies for various clients",
      "Social media management: content, community engagement, performance analysis",
      "Coordination of multichannel digital campaigns",
    ],
    results: [
      { val: "6", label: "Simultaneous clients" },
      { val: "2", label: "Long-term mandates" },
    ],
    parallel: [
      { period: "Nov. 2024 – Jan. 2025", org: "Coffrets Prestige", note: "Freelance · Storytelling & e-commerce" },
      { period: "May – Jul. 2024", org: "La Maison du Bleuet", note: "Freelance · Digital communications" },
    ],
  },
  {
    period: "May – Dec. 2023",
    title: "Manager, Marketing and Communications",
    org: "SPIRO",
    sector: "Electric Mobility · Benin",
    points: [
      "360° campaigns with telecom partners achieving 95% customer retention",
      "Internal communications and HR marketing",
      "Media relations, field activations, and budget management",
    ],
    results: [
      { val: "95%", label: "Customer retention" },
      { val: "2", label: "Telecom partner offers" },
    ],
  },
  {
    period: "Apr. 2021 – Apr. 2023",
    title: "Manager, Marketing and Communications",
    org: "Yellowbet & LNBPari",
    sector: "iGaming · West Africa",
    points: [
      "Annual communications strategy for multi-market expansion",
      "Multichannel campaigns driving 50% engagement increase",
      "Yellowbet rebrand and LNBPari launch",
    ],
    results: [
      { val: "+50%", label: "Customer engagement" },
      { val: "×2", label: "Guinea revenue in 3 months" },
      { val: "~$35M", label: "Betting volume · Benin 2021" },
      { val: "~$44M", label: "Betting volume · Benin 2022" },
    ],
  },
  {
    period: "Dec. 2018 – Mar. 2021",
    title: "Communications Advisor",
    org: "SOBEBRA",
    sector: "Brewery · Benin",
    points: [
      "16 social media pages – 86% follower growth",
      "360° campaigns and rebranding of pan-African brands",
      "Field supervision: video production, corporate events",
      "Collaboration with external agencies and rollout of an influencer strategy",
    ],
    results: [
      { val: "300K+", label: "Cumulative followers (+86%)" },
      { val: "30+", label: "Digital campaigns" },
      { val: "200K+", label: "Views / video series" },
      { val: "10K+", label: "SOBEBRA Express subscribers" },
    ],
  },
  {
    period: "Mar. – Nov. 2018",
    title: "Advisor, Digital Communications",
    org: "Open SI",
    sector: "Agency · Benin",
    points: [
      "Ecobank Benin mandates: Ecobank Mobile campaign, daily content",
      "goMediCAL mandate: #StopSelfMedication campaign, blog launch",
    ],
    results: [
      { val: "50K+", label: "Ecobank Mobile downloads" },
      { val: "90%", label: "Positive app reviews" },
      { val: "#1", label: "Health app in Benin (goMediCAL)" },
      { val: "200+", label: "Medical appointments / month" },
    ],
  },
  {
    period: "2017 – present",
    title: "Co-founder & Communications Director",
    org: "Monwaih",
    sector: "Media · African Culture · Benin",
    badge: "Entrepreneurship",
    points: [
      "Co-founded the first 100% African culture media outlet in Benin",
      "Editorial direction, content coordination, and community management",
      "Audience built without advertising",
    ],
    results: [
      { val: "#1", label: "Community blog Benin 2017" },
      { val: "5K+", label: "Unique visits / day" },
      { val: "55K+", label: "Page views / day" },
    ],
  },
  {
    period: "April 2020",
    title: "Public Communications Initiative",
    org: "COVID-19 Video",
    sector: "Civic Initiative · Benin",
    badge: "Civic Initiative",
    points: [
      "Production of a public health awareness video on barrier gestures",
      "Selected and officially relayed by the Beninese government",
      "Integrated into national solidarity initiatives",
    ],
    results: [
      { val: "Official", label: "Approved by the Beninese government" },
    ],
    link: "https://youtu.be/gSFKaTe9zr0",
  },
];

const education = [
  { degree: "MBA, Management Consulting", school: "ESG-UQAM", period: "In progress · December 2027" },
  { degree: "Prosci Change Management Practitioner Certification", school: "Prosci", period: "April 2026" },
  { degree: "Master's, Marketing and Communications", school: "ESEF, Mohammed 1st University", period: "2024" },
  { degree: "Master's, Human Resources Management", school: "UPI-ONM", period: "2015 · recognized MIFI" },
];

const tools = ["HubSpot", "Cyberimpact", "Hootsuite", "Mailchimp", "GA4", "Google Ads", "Canva", "WordPress", "CapCut", "Zoom", "Microsoft & Google Suite", "Claude · ChatGPT · Copilot", "Next.js", "Vercel"];

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

export default function DossierPageEN() {
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
                What I do.<br />
                <span className="text-[#e9c176] italic font-light">The proof.</span>
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-4">
              <p className="text-white/60 text-lg leading-relaxed border-l-2 border-[#e9c176] pl-6">
                Four areas of expertise. Ten years of measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-[#fdf9f6]">
        <div className="container-custom">
          <h2 className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em] mb-2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>What I do.</h2>
          <p className="text-[#81756e] text-sm mb-12 max-w-md">
            Four areas where I've worked for over ten years.
          </p>
          {domains.map((d, i) => <DomainRow key={d.num} domain={d} index={i} />)}
          <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="pull-quote mt-16 text-xl md:text-2xl max-w-2xl">
            The communications that work are the ones that start with people. Not PowerPoints.
          </motion.blockquote>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#f1edea]">
        <div className="container-custom">
          <h2 className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em] mb-16"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>The journey.</h2>
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 mb-12 border-b border-[#d2c4bc]/25 last:border-0 last:mb-0 last:pb-0">

                <div className="lg:col-span-3 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-[#81756e]">{exp.period}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d2c4bc]">{exp.sector}</span>
                  {exp.current && (
                    <span className="inline-block w-fit text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-[#775a19] text-white mt-1"
                      style={{ borderRadius: "2px" }}>Current</span>
                  )}
                  {exp.badge && !exp.current && (
                    <span className="inline-block w-fit text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-[#26170c]/10 text-[#775a19] border border-[#d2c4bc] mt-1"
                      style={{ borderRadius: "2px" }}>{exp.badge}</span>
                  )}
                </div>

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

                  {exp.results && exp.results.length > 0 && (
                    <div className="grid gap-px bg-[#d2c4bc]/30 border border-[#d2c4bc]/30 mb-5"
                      style={{ borderRadius: "2px", gridTemplateColumns: `repeat(${Math.min(exp.results.length, 4)}, 1fr)` }}>
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

                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#775a19] hover:text-[#26170c] transition-colors mt-3">
                      <span>Watch the video</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Tools */}
      <section className="section-padding bg-[#26170c]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold text-white leading-tight tracking-[-0.03em] mb-10"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>Education.</h2>
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
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>Tools.</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-2 border border-white/10 text-white/60 hover:border-[#e9c176] hover:text-[#e9c176] transition-colors"
                    style={{ borderRadius: "2px" }}>{t}</span>
                ))}
              </div>
              <div className="mt-12 pt-10 border-t border-white/10">
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#e9c176] mb-4">Commitment to different causes</h3>
                <div className="flex flex-col gap-2 text-white/60 text-sm">
                  <span>Fonds Héritage pour l&apos;Environnement – volunteer since April 2026</span>
                  <span>Jeux de Montréal 2024</span>
                  <span>Rotary International – active member since 2017</span>
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
            Ready to work<br />
            <span className="italic font-light text-stroke">together?</span>
          </h2>
          <Link href="/en/contact"
            className="flex-shrink-0 inline-block bg-[#26170c] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d2b1f] transition-colors"
            style={{ borderRadius: "2px" }}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

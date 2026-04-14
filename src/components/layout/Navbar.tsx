"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  const isEn = pathname?.startsWith("/en");

  const navLinks = isEn
    ? [
        { name: "Dossier",      href: "/en/dossier" },
        { name: "Publications", href: "/en/publications" },
        { name: "Blog",         href: "/en/blog" },
        { name: "Contact",      href: "/en/contact" },
      ]
    : [
        { name: "Dossier",      href: "/dossier" },
        { name: "Publications", href: "/publications" },
        { name: "Blog",         href: "/blog" },
        { name: "Contact",      href: "/contact" },
      ];

  const ctaLabel = isEn ? "Get in touch" : "Me contacter";
  const ctaHref  = isEn ? "/en/contact" : "/contact";
  const logoHref = isEn ? "/en" : "/";

  const switchPath = (() => {
    if (isEn) {
      const without = pathname?.replace(/^\/en/, "") || "";
      if (without.startsWith("/blog/")) return "/blog";
      return without || "/";
    } else {
      if (pathname?.startsWith("/blog/")) return "/en/blog";
      return "/en" + (pathname === "/" ? "" : pathname);
    }
  })();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(253,249,246,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(210,196,188,0.3)" : "none",
        paddingTop: scrolled ? "1rem" : "1.75rem",
        paddingBottom: scrolled ? "1rem" : "1.75rem",
      }}
    >
      <div className="container-custom flex justify-between items-center">

        {/* Logo */}
        <Link href={logoHref} className="flex items-center gap-3 group">
          <div
            className="bg-[#26170c] text-white font-display font-bold w-9 h-9 flex items-center justify-center text-base transition-transform group-hover:scale-105"
            style={{ borderRadius: "2px" }}
          >
            GA
          </div>
          <span className="font-display font-bold text-sm tracking-tight uppercase text-[#26170c] hidden sm:block">
            Gildas Attachi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-bold transition-colors"
                style={{ color: active ? "#775a19" : "#81756e" }}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Switcher FR / EN */}
          <div className="flex items-center gap-1 ml-2 border border-[#d2c4bc] px-3 py-1.5" style={{ borderRadius: "2px" }}>
            <Link
              href={isEn ? switchPath : pathname || "/"}
              className="text-[10px] font-bold tracking-[0.15em] transition-colors"
              style={{ color: !isEn ? "#26170c" : "#81756e" }}
            >
              FR
            </Link>
            <span className="text-[#d2c4bc] text-[10px] mx-0.5">|</span>
            <Link
              href={isEn ? pathname || "/en" : switchPath}
              className="text-[10px] font-bold tracking-[0.15em] transition-colors"
              style={{ color: isEn ? "#26170c" : "#81756e" }}
            >
              EN
            </Link>
          </div>

          <Link
            href={ctaHref}
            className="ml-2 bg-[#26170c] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2.5 transition-colors hover:bg-[#3d2b1f]"
            style={{ borderRadius: "2px" }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-[#26170c]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#fdf9f6] z-[200] lg:hidden flex flex-col px-8 pt-28 pb-16 gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-display font-bold text-[#26170c] py-6 border-b border-[#d2c4bc]/40 tracking-tight"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-4">
            {/* Mobile switcher */}
            <div className="flex items-center gap-3">
              <Link href={isEn ? switchPath : pathname || "/"} className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: !isEn ? "#26170c" : "#81756e" }}>FR</Link>
              <span className="text-[#d2c4bc]">|</span>
              <Link href={isEn ? pathname || "/en" : switchPath} className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: isEn ? "#26170c" : "#81756e" }}>EN</Link>
            </div>
            <Link
              href={ctaHref}
              className="block w-full text-center bg-[#26170c] text-white text-[11px] font-bold tracking-[0.25em] uppercase py-5"
              style={{ borderRadius: "2px" }}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

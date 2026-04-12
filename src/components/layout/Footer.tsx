import Link from "next/link";

const links = [
  { name: "Dossier",      href: "/dossier" },
  { name: "Publications", href: "/publications" },
  { name: "Blog",         href: "/blog" },
  { name: "Contact",      href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1c1b1a] text-white pt-24 pb-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          {/* Gauche */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="bg-[#e9c176] text-[#26170c] font-display font-bold w-9 h-9 flex items-center justify-center text-sm"
                style={{ borderRadius: "2px" }}
              >
                GA
              </div>
              <span className="font-display font-bold text-sm tracking-tight uppercase text-white/80">
                Gildas Attachi, Adm. A
              </span>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-xs">
              Spécialiste de la communication stratégique. Montréal, Québec.
            </p>
          </div>

          {/* Droite */}
          <div className="flex gap-10">
            <a
              href="https://linkedin.com/in/gildas-attachi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-[#e9c176] transition-colors"
            >
              LinkedIn
            </a>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-[#e9c176] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} Gildas Attachi, Adm. A. · Montréal, Québec</p>
        </div>
      </div>
    </footer>
  );
}

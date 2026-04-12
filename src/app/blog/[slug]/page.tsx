import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";

const PILLARS: Record<string, string> = {
  changement: "Gestion du changement",
  employeur:  "Marque employeur",
  interne:    "Communication interne",
  crise:      "Communication de crise",
  rp:         "Relations publiques",
  numerique:  "Marketing numérique",
  leadership: "Leadership & management",
};

type Post = {
  titre: string;
  slug: { current: string };
  pilier?: string;
  resume?: string;
  datePublication?: string;
  langue?: string;
  corps?: unknown[];
};

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug && publie == true][0] {
      titre, slug, pilier, resume, datePublication, langue, corps
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

function formatDate(d?: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" });
}

const portableComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[#4f453f] leading-relaxed text-lg mb-6">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-bold text-[#26170c] text-2xl md:text-3xl tracking-tight mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display font-bold text-[#26170c] text-xl tracking-tight mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-[#e9c176] pl-6 my-8 text-xl italic text-[#4f453f] leading-relaxed">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-[#26170c]">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer"
        className="text-[#775a19] underline underline-offset-2 hover:text-[#26170c] transition-colors">
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-[#26170c]">
        <div className="container-custom max-w-3xl">
          <Link href="/blog"
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-[#e9c176] transition-colors mb-10">
            ← Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.pilier && (
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border border-white/20 text-[#e9c176]"
                style={{ borderRadius: "2px" }}>
                {PILLARS[post.pilier] ?? post.pilier}
              </span>
            )}
            {post.datePublication && (
              <span className="font-mono text-[11px] text-white/40">{formatDate(post.datePublication)}</span>
            )}
          </div>
          <h1 className="font-display font-bold text-white leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            {post.titre}
          </h1>
          {post.resume && (
            <p className="text-white/60 text-lg leading-relaxed mt-6 border-l-2 border-[#e9c176] pl-6">
              {post.resume}
            </p>
          )}
        </div>
      </section>

      {/* Corps */}
      <section className="section-padding bg-[#fdf9f6]">
        <div className="container-custom max-w-2xl">
          {post.corps && (
            <PortableText value={post.corps as Parameters<typeof PortableText>[0]["value"]} components={portableComponents} />
          )}

          {/* Retour */}
          <div className="mt-16 pt-10 border-t border-[#d2c4bc]/30">
            <Link href="/blog"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#775a19] hover:text-[#26170c] transition-colors">
              ← Retour au blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "article" && publie == true]{ slug }`
  );
  return slugs.map((s) => ({ slug: s.slug.current }));
}

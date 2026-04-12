import Link from "next/link";
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
  _id: string;
  titre: string;
  slug: { current: string };
  pilier?: string;
  resume?: string;
  datePublication?: string;
  langue?: string;
};

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "article" && publie == true] | order(datePublication desc) {
      _id, titre, slug, pilier, resume, datePublication, langue
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

function formatDate(d?: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-[#26170c]">
        <div className="container-custom">
          <h1 className="font-display font-bold text-white leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            Réflexions.<br />
            <span className="text-[#e9c176] italic font-light">Sur la com.</span>
          </h1>
          <p className="text-white/50 text-lg mt-8 max-w-md">
            Gestion du changement, marque employeur, communication interne. Ce que je pense, ce que j'observe.
          </p>
        </div>
      </section>

      {/* Liste d'articles */}
      <section className="section-padding bg-[#fdf9f6]">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display font-bold text-[#d2c4bc] text-2xl">Les articles arrivent bientôt.</p>
              <p className="text-[#81756e] mt-3 text-sm">Revenez dans quelques jours.</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {posts.map((post, i) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-[#d2c4bc]/25 last:border-0 hover:bg-[#f7f3ef] transition-colors -mx-4 px-4"
                  style={{ borderRadius: "2px" }}
                >
                  {/* Meta gauche */}
                  <div className="lg:col-span-3 flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#d2c4bc]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {post.datePublication && (
                      <span className="font-mono text-[11px] text-[#81756e]">{formatDate(post.datePublication)}</span>
                    )}
                    {post.pilier && (
                      <span className="inline-block w-fit text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border border-[#d2c4bc] text-[#775a19]"
                        style={{ borderRadius: "2px" }}>
                        {PILLARS[post.pilier] ?? post.pilier}
                      </span>
                    )}
                    {post.langue && post.langue === "Anglais" && (
                      <span className="inline-block w-fit text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 bg-[#26170c]/5 text-[#81756e]"
                        style={{ borderRadius: "2px" }}>EN</span>
                    )}
                  </div>

                  {/* Contenu droite */}
                  <div className="lg:col-span-9">
                    <h2 className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.02em] mb-3 group-hover:text-[#775a19] transition-colors"
                      style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                      {post.titre}
                    </h2>
                    {post.resume && (
                      <p className="text-[#4f453f] leading-relaxed text-sm max-w-xl">{post.resume}</p>
                    )}
                    <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#775a19] group-hover:text-[#26170c] transition-colors">
                      Lire l'article ›
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

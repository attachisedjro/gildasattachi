import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

type Livre = {
  _id: string;
  titre: string;
  sousTitre?: string;
  couverture?: SanityImageSource & { alt?: string };
  annee?: number;
  editeur?: string;
  extrait?: string;
  lienAchat?: string;
  ordre?: number;
};

async function getLivres(): Promise<Livre[]> {
  return client.fetch(
    `*[_type == "livre"] | order(ordre asc, annee desc) {
      _id, titre, sousTitre, couverture, annee, editeur, extrait, lienAchat, ordre
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export const metadata = {
  title: "Publications — Gildas Attachi",
  description: "Books and written works by Gildas Attachi.",
};

export default async function PublicationsPageEN() {
  const livres = await getLivres();

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-[#26170c]">
        <div className="container-custom">
          <h1
            className="font-display font-bold text-white leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Publications.<br />
            <span className="text-[#e9c176] italic font-light">In writing too.</span>
          </h1>
          <p className="text-white/50 text-lg mt-8 max-w-md">
            What I think, I write. Here, in book form.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="section-padding bg-[#fdf9f6]">
        <div className="container-custom">
          {livres.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display font-bold text-[#d2c4bc] text-2xl">Coming soon.</p>
              <p className="text-[#81756e] mt-3 text-sm">Publications coming soon.</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {livres.map((livre, i) => {
                const isEven = i % 2 === 0;
                const imgUrl = livre.couverture
                  ? urlFor(livre.couverture).width(600).height(800).fit("crop").url()
                  : null;

                return (
                  <div
                    key={livre._id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-16 border-b border-[#d2c4bc]/25 last:border-0 items-center"
                  >
                    <div className={`lg:col-span-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {imgUrl ? (
                        <div
                          className="relative overflow-hidden shadow-2xl"
                          style={{ aspectRatio: "3/4", borderRadius: "2px", boxShadow: "8px 12px 40px rgba(38,23,12,0.2)" }}
                        >
                          <Image
                            src={imgUrl}
                            alt={(livre.couverture as { alt?: string })?.alt ?? livre.titre}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div
                          className="bg-[#ebe7e4] flex items-center justify-center"
                          style={{ aspectRatio: "3/4", borderRadius: "2px" }}
                        >
                          <span className="text-[#d2c4bc] font-display font-bold text-4xl">GA</span>
                        </div>
                      )}
                    </div>

                    <div className={`lg:col-span-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-4 mb-6">
                        {livre.annee && (
                          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#81756e]">{livre.annee}</span>
                        )}
                        {livre.editeur && (
                          <>
                            <span className="text-[#d2c4bc]">·</span>
                            <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#81756e] uppercase">{livre.editeur}</span>
                          </>
                        )}
                      </div>

                      <h2
                        className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em] mb-2"
                        style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                      >
                        {livre.titre}
                      </h2>

                      {livre.sousTitre && (
                        <p className="text-[#775a19] font-bold text-lg mb-6">{livre.sousTitre}</p>
                      )}

                      {livre.extrait && (
                        <p className="text-[#4f453f] text-lg leading-relaxed border-l-2 border-[#e9c176] pl-5 mb-8 max-w-xl">
                          {livre.extrait}
                        </p>
                      )}

                      {livre.lienAchat && (
                        <a
                          href={livre.lienAchat}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#26170c] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d2b1f] transition-colors"
                          style={{ borderRadius: "2px" }}
                        >
                          Get the book
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f1edea] border-t border-[#d2c4bc]/30">
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2
            className="font-display font-bold text-[#26170c] leading-tight tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            A question about my work?<br />
            <span className="italic font-light text-stroke">Write to me.</span>
          </h2>
          <Link
            href="/en/contact"
            className="flex-shrink-0 inline-block bg-[#26170c] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#3d2b1f] transition-colors"
            style={{ borderRadius: "2px" }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

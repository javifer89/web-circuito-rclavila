import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ArrowRight } from "@/components/ui/button";
import { posts, formatPostDate } from "@/content/noticias";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: ["Noticias RC La Vila", "Últimas novedades"].join(" · "),
  description:
    "Noticias del club RC La Vila: avances de obra, resultados de las pruebas sociales y novedades de la instalación.",
  keywords: ["circuito", "rc", "villajoyosa", "noticias", "pruebas", "campeonato", "instalación"],
  openGraph: {
    title: "Noticias RC La Vila - Últimas novedades",
    description:
      "Noticias del club RC La Vila: avances de obra, resultados de las pruebas sociales y novedades de la instalación.",
    url: "https://www.rclavila.com/noticias",
    site: "@rclavila",
    images: [
      {
        url: "https://www.rclavila.com/noticias",
        width: 1200,
        height: 630,
        alt: "Portada de noticia RC La Vila",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias RC La Vila - Últimas novedades",
    description:
      "Noticias del club RC La Vila: avances de obra, resultados de las pruebas sociales y novedades de la instalación.",
    images: ["https://www.rclavila.com/noticias"],
    site: "@rclavila",
  },
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="Noticias"
        title="Lo último del club"
        description="Avisos de la instalación, resultados de las pruebas y novedades del campeonato social."
      />

      <Section>
        {featured ? (
          <article className="grid gap-8 border border-line bg-surface lg:grid-cols-2">
            <MediaPlaceholder
              label="Imagen de portada"
              note="Pendiente de contenido oficial"
              ratio="aspect-[16/10]"
              className="border-0 lg:aspect-auto lg:h-full"
            />
            <div className="p-7 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
                {featured.tag} · {formatPostDate(featured.date)}
              </p>
              <h2 className="display-lg mt-4 text-3xl text-dust sm:text-4xl">
                <Link href={`/noticias/${featured.slug}`} className="hover:text-accent">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
              <Link
                href={`/noticias/${featured.slug}`}
                className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-dust hover:text-accent"
              >
                Leer la noticia <ArrowRight />
              </Link>
            </div>
          </article>
        ) : null}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <article key={post.slug} className="border border-line bg-asphalt">
              <MediaPlaceholder
                label="Imagen de la noticia"
                ratio="aspect-[16/9]"
                className="border-0 border-b border-line"
              />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
                  {post.tag} · {formatPostDate(post.date)}
                </p>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-dust">
                  <Link href={`/noticias/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <Link
                  href={`/noticias/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-dust hover:text-accent"
                >
                  Leer <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

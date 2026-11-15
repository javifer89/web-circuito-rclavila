import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ButtonLink, ArrowRight } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { posts, getPost, formatPostDate } from "@/content/noticias";
import { site } from "@/content/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Noticia no encontrada" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/noticias/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      url: `${site.url}/noticias/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          datePublished: post.date,
          description: post.excerpt,
          articleSection: post.tag,
          publisher: {
            "@type": "Organization",
            name: site.legalName,
            url: site.url,
          },
          mainEntityOfPage: `${site.url}/noticias/${post.slug}`,
        }}
      />

      <article>
        <header className="border-b border-line bg-surface/50">
          <Container className="py-14 sm:py-20">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-dust"
            >
              <ArrowRight className="rotate-180" /> Noticias
            </Link>
            <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-accent">
              {post.tag} · {formatPostDate(post.date)}
            </p>
            <h1 className="display-lg mt-4 max-w-4xl text-4xl text-dust sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{post.excerpt}</p>
          </Container>
        </header>

        <Container className="py-12">
          <MediaPlaceholder
            label="Imagen de la noticia"
            note="Pendiente de contenido oficial"
            ratio="aspect-[21/9]"
          />
        </Container>

        <Container className="pb-16">
          <div className="max-w-3xl space-y-6">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <Section className="border-t border-line bg-surface/60">
        <div className="flex items-end justify-between gap-6">
          <h2 className="display-lg text-3xl text-dust sm:text-4xl">Sigue leyendo</h2>
          <ButtonLink href="/noticias" variant="outline">
            Todas
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {others.map((item) => (
            <article key={item.slug} className="border border-line bg-asphalt p-6">
              <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
                {item.tag} · {formatPostDate(item.date)}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-dust">
                <Link href={`/noticias/${item.slug}`} className="hover:text-accent">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

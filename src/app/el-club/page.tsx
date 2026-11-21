import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { history, board, documents, values } from "@/content/el-club";
import { site } from "@/content/site";
import fotoSocios from "@/assets/foto sudaderas nuevas.jpeg";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: ["El club RC La Vila", "Historia y junta directiva"].join(" · "),
  description:
    "Historia, junta directiva y normativa del club RC La Vila, circuito de radiocontrol de Villajoyosa (Alicante). Conoce quiénes somos y la documentación del club.",
  keywords: ["circuito", "rc", "villajoyosa", "club", "historia", "junta", "normativa"],
  openGraph: {
    title: "El club RC La Vila - Historia y junta directiva",
    description:
      "Historia, junta directiva y normativa del club RC La Vila, circuito de radiocontrol de Villajoyosa.",
    url: "https://www.rclavila.com/el-club",
    siteName: site.name,
    images: [
      {
        url: "https://www.rclavila.com/socios",
        width: 1200,
        height: 630,
        alt: "Socios del RC La Vila",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El club RC La Vila - Historia y junta directiva",
    description:
      "Historia y junta directiva del circuito RC La Vila en Villajoyosa.",
    images: ["https://www.rclavila.com/socios"],
    site: "@rclavila",
  },
  alternates: { canonical: "/el-club" },
};

export default function ElClubPage() {
  return (
    <>
      <PageHeader
        eyebrow="El club"
        title="Quiénes somos"
        description="Un club de pilotos que construyó su propia pista para no depender de un solar prestado."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <p className="eyebrow">Historia</p>
            <h2 className="display-lg text-4xl text-dust sm:text-5xl">
              De rodar donde se podía a tener pista propia
            </h2>
            {history.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-sm leading-relaxed text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src={fotoSocios}
              alt="Socios del RC La Vila con sus coches en la pista"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <SectionHeading eyebrow="Cómo funciona el club" title="Tres ideas que nos definen" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="border border-line bg-asphalt p-6">
              <h3 className="display-md text-lg text-dust">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Junta directiva</p>
            <h2 className="display-lg mt-3 text-3xl text-dust sm:text-4xl">Quién lleva el club</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              La junta se elige en asamblea y no cobra por el cargo. Para cualquier tema, escribe al
              email del club y te derivamos a la persona correspondiente.
            </p>

            <dl className="mt-8 border-t border-line">
              {board.map((member) => (
                <div
                  key={member.role}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {member.role}
                  </dt>
                  <dd className="text-sm text-dust">{member.name}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="documentos" className="scroll-mt-28">
            <p className="eyebrow">Documentación</p>
            <h2 className="display-lg mt-3 text-3xl text-dust sm:text-4xl">Normativa y documentos</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              El reglamento interno es de obligado cumplimiento para socios y visitantes. Incluye
              horarios, normas de seguridad y convivencia en boxes.
            </p>

            <ul className="mt-8 space-y-4">
              {documents.map((document) => (
                <li key={document.title} className="border border-line bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-sm font-semibold text-dust">{document.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
                      {document.meta}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{document.description}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-muted/70">
              Los documentos se publicarán en PDF cuando la junta cierre la versión definitiva. Hasta
              entonces, se solicitan por email a{" "}
              <a href={`mailto:${site.contact.email}`} className="text-dust underline underline-offset-2">
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <SectionHeading
          eyebrow="Colaboradores"
          title="Marcas y tiendas que apoyan al club"
          description="Espacio reservado para patrocinadores y tiendas colaboradoras del circuito."
        />
        <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {["Patrocinador", "Tienda", "Patrocinador", "Colaborador"].map((label, index) => (
            <div
              key={`${label}-${index}`}
              className="flex aspect-[3/2] items-center justify-center bg-asphalt p-4"
            >
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted/60">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display-lg text-3xl text-dust sm:text-4xl">¿Quieres formar parte?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              El club crece con cada socio. Si te gusta el radiocontrol, aquí tienes pista, gente y
              un sitio donde pasar los domingos.
            </p>
          </div>
          <ButtonLink href="/hazte-socio">Hazte socio</ButtonLink>
        </div>
      </Section>
    </>
  );
}

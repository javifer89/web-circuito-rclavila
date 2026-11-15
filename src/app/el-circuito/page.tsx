import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink, ArrowRight } from "@/components/ui/button";
import { specs, facilities, classes } from "@/content/circuito";
import vistaAerea from "@/assets/vista aerea circuito.jpeg";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "El circuito",
  description:
    "Ficha técnica del circuito de radiocontrol RC La Vila en Villajoyosa: superficie, firme, categorías, boxes cubiertos, iluminación y cronometraje.",
  alternates: { canonical: "/el-circuito" },
};

export default function ElCircuitoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Instalaciones"
        title="El circuito"
        description="Una pista permanente de tierra en Villajoyosa, preparada para entrenar cualquier día del año y para organizar carreras con garantías."
      >
        <ButtonLink href="/hazte-socio">Hazte socio</ButtonLink>
        <ButtonLink href="/contacto" variant="outline">
          Visitar la pista
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Ficha técnica</p>
            <h2 className="display-lg mt-3 text-4xl text-dust sm:text-5xl">Lo que hay en pista</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Datos de la instalación. Si necesitas confirmar alguna medida para una prueba oficial,
              escríbenos antes de la inscripción.
            </p>
            <ButtonLink href="/contacto" variant="ghost" className="mt-6 px-0">
              Consultar detalles <ArrowRight />
            </ButtonLink>
          </div>

          <dl className="border-t border-line">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[0.9fr_1.1fr] sm:gap-6"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {spec.label}
                </dt>
                <dd className="text-sm text-dust">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <SectionHeading
          eyebrow="Equipamiento"
          title="Instalaciones para pasar el día"
          description="Todo lo necesario para llegar con el coche, montar y rodar sin depender de nadie."
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <article key={item.title} className="bg-asphalt p-6">
              <h3 className="display-md text-lg text-dust">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Categorías"
          title="Qué se puede correr aquí"
          description="El club organiza mangas separadas por categoría. Estas son las que tienen actividad regular."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {classes.map((item) => (
            <article key={item.name} className="border border-line bg-surface p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="display-md text-2xl text-dust">{item.name}</h3>
                <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {item.engine}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="El trazado"
          title="La pista, vista desde el aire"
          description="El recorrido completo de un vistazo: recta principal, enlazadas y la zona de boxes al fondo del recinto."
          action={
            <ButtonLink href="/galeria" variant="outline">
              Ver galería
            </ButtonLink>
          }
        />
        <div className="mt-12">
          <div className="relative aspect-[16/9] overflow-hidden border border-line">
            <Image
              src={vistaAerea}
              alt="Vista aérea del trazado del circuito RC La Vila"
              placeholder="blur"
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted">
            Vista aérea del trazado
          </p>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display-lg text-3xl text-dust sm:text-4xl">¿Vienes a verla antes de decidirte?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Puedes visitar la instalación en horario de apertura. Escríbenos y te decimos el mejor
              momento para que haya gente en pista.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contacto">Contactar</ButtonLink>
            <Link
              href="/tarifas"
              className="inline-flex items-center justify-center border border-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:border-dust"
            >
              Ver tarifas
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

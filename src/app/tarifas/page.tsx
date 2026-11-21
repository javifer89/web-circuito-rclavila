import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/ui/faq";
import { ButtonLink, ArrowRight } from "@/components/ui/button";
import { plans, dayPass, included, notIncluded } from "@/content/tarifas";
import { cn } from "@/lib/cn";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: ["Tarifas RC La Vila", "Cuotas de socio"].join(" · "),
  description:
    "Cuotas de socio del circuito RC La Vila: mensual, trimestral y juvenil. Incluye acceso libre a la pista, boxes y pruebas sociales del club. Sin permanencia obligatoria ni letra pequeña.",
  keywords: ["circuito", "rc", "villajoyosa", "cuotas", "socio", "precio", "day pass"],
  openGraph: {
    title: "Tarifas RC La Vila - Cuotas de socio",
    description:
      "Cuotas de socio del circuito RC La Vila: mensual, trimestral y juvenil. Acceso a pista, boxes y pruebas sociales. Sin permanencia obligatoria.",
    url: "https://www.rclavila.com/tarifas",
    site: "@rclavila",
    images: [
      {
        url: "https://www.rclavila.com/precios",
        width: 1200,
        height: 630,
        alt: "Tarifas y cuotas del circuito RC La Vila",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifas RC La Vila - Cuotas de socio",
    description:
      "Cuotas de socio del circuito RC La Vila. Acceso a pista, boxes y sin permanencia.",
    images: ["https://www.rclavila.com/precios"],
    site: "@rclavila",
  },
  alternates: { canonical: "/tarifas" },
};

const faqs = [
  {
    q: "¿La cuota incluye seguro?",
    a: "No. La cuota cubre el uso de la instalación. La responsabilidad civil deportiva se contrata aparte, y es obligatoria para participar en pruebas oficiales.",
  },
  {
    q: "¿Puedo venir a probar antes de hacerme socio?",
    a: "Sí. Organizamos jornadas de puertas abiertas con coche de alquiler y monitor. Escríbenos y te avisamos de la próxima fecha.",
  },
  {
    q: "¿Hace falta licencia federativa?",
    a: "Solo para pruebas puntuables de ámbito autonómico o nacional. Para entrenar y para el campeonato social no es necesaria.",
  },
  {
    q: "¿Cómo se paga la cuota?",
    a: "Por transferencia, domiciliación bancaria o en efectivo en secretaría. La domiciliación es la opción más cómoda y evita olvidos en la renovación.",
  },
  {
    q: "¿Qué pasa si quiero darme de baja?",
    a: "Basta con comunicarlo por escrito a la junta. La cuota se mantiene hasta el final del periodo en curso y después se devuelve la llave de acceso.",
  },
  {
    q: "¿Puedo llevar acompañantes?",
    a: "Sí, pueden entrar contigo. Solo los socios pueden pilotar; los acompañantes no tienen acceso a pista.",
  },
];

export default function TarifasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifas"
        title="Cuotas de socio"
        description="Sin permanencia obligatoria y sin letra pequeña. El acceso a la pista va incluido en todas las modalidades."
      >
        <ButtonLink href="/hazte-socio">Solicitar alta</ButtonLink>
        <ButtonLink href="/contacto" variant="outline">
          Resolver dudas
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn("flex flex-col bg-asphalt p-7", plan.highlight && "bg-surface")}
            >
              {plan.highlight ? (
                <p className="mb-4 inline-flex w-fit bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-asphalt">
                  Más elegida
                </p>
              ) : null}

              <h2 className="display-md text-2xl text-dust">{plan.name}</h2>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="display-xl text-5xl text-dust">{plan.price}</span>
                <span className="text-xs uppercase tracking-[0.12em] text-muted">{plan.period}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="/hazte-socio"
                variant={plan.highlight ? "primary" : "outline"}
                className="mt-7"
              >
                Solicitar
              </ButtonLink>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-5 border border-lime/25 bg-lime/[0.04] p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="display-md text-xl text-dust">{dayPass.title}</h2>
              <span className="border border-lime/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-lime">
                {dayPass.status}
              </span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{dayPass.description}</p>
          </div>
          <p className="display-xl shrink-0 text-4xl text-lime">{dayPass.price}</p>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-md text-2xl text-dust">Qué incluye la cuota</h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-lime">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display-md text-2xl text-dust">Qué no incluye</h2>
            <ul className="mt-6 space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-muted/60">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-accent pl-4 text-xs leading-relaxed text-muted">
              Un transpondedor personal se puede comprar en tienda especializada o alquilar en pista
              el día de la carrera.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading eyebrow="Dudas" title="Preguntas frecuentes" />
        <div className="mt-10 max-w-3xl">
          <Faq items={faqs} />
        </div>
        <ButtonLink href="/hazte-socio" variant="ghost" className="mt-8 px-0">
          Todo claro, quiero asociarme <ArrowRight />
        </ButtonLink>
      </Section>
    </>
  );
}

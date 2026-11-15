import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Faq } from "@/components/ui/faq";
import { MembershipForm } from "@/components/forms/membership-form";
import { site, whatsappUrl } from "@/content/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Hazte socio",
  description:
    "Solicita el alta como socio del circuito RC La Vila. Acceso libre a la pista, cuota mensual desde 15 € y participación en el campeonato social.",
  alternates: { canonical: "/hazte-socio" },
};

const benefits = [
  {
    title: "Acceso con llave propia",
    description:
      "Entras cuando quieras, dentro del horario de apertura. Sin reservas ni llamadas previas.",
  },
  {
    title: "Entrenamiento libre",
    description: "Pista disponible todos los días, también entre semana y con luz artificial.",
  },
  {
    title: "Pruebas del club",
    description:
      "Participación en el campeonato social y en las jornadas de entrenamiento con cronometraje.",
  },
  {
    title: "Voz en el club",
    description: "Derecho a voto en asamblea y acceso a las cuentas del ejercicio.",
  },
];

const steps = [
  {
    title: "Rellena la solicitud",
    description: "Con tus datos y la modalidad de cuota que prefieras. Tarda menos de dos minutos.",
  },
  {
    title: "Te llamamos",
    description:
      "La junta revisa la solicitud y te contacta para confirmar la plaza y la forma de pago.",
  },
  {
    title: "Recoges la llave",
    description:
      "Con el alta pagada, recibes la llave de acceso al recinto y el alta en el grupo del club.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda el alta?",
    a: "Normalmente menos de una semana. Si hay plazas libres, puede cerrarse en pocos días.",
  },
  {
    q: "¿Hay límite de socios?",
    a: "Sí, el aforo de boxes marca el máximo. Cuando se llena, se abre lista de espera por orden de solicitud.",
  },
  {
    q: "¿Necesito tener coche para asociarme?",
    a: "No. Hay socios que empiezan alquilando material en pista y compran su primer coche más adelante.",
  },
  {
    q: "¿Puedo asociar a un menor?",
    a: "Sí, con la autorización de un tutor legal. Los menores tienen cuota juvenil reducida.",
  },
];

export default function HazteSocioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Alta de socio"
        title="Hazte socio"
        description="La cuota se destina íntegramente al mantenimiento de la pista y a las mejoras de la instalación. Sin intermediarios."
      >
        <a
          href={whatsappUrl("Hola, quiero hacerme socio del circuito RC La Vila.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-accent-soft"
        >
          Preguntar por WhatsApp
        </a>
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center justify-center border border-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:border-dust"
        >
          Escribir por email
        </a>
      </PageHeader>

      <Section>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="bg-asphalt p-6">
              <h2 className="display-md text-lg text-dust">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <SectionHeading eyebrow="Cómo va" title="Tres pasos, sin burocracia" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="display-xl text-5xl text-accent/30">0{index + 1}</p>
              <h3 className="display-md mt-3 text-xl text-dust">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Solicitud</p>
            <h2 className="display-lg mt-3 text-4xl text-dust sm:text-5xl">Pide tu alta</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Rellena el formulario y elige cómo quieres enviarlo. No se cobra nada en este paso:
              primero confirmamos la plaza y después se formaliza el pago.
            </p>

            <div className="mt-8 border border-line bg-surface p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-dust">
                Ten a mano
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>· Documento de identidad del socio</li>
                <li>· Documento de identidad del tutor, si es menor</li>
                <li>· Un teléfono de contacto operativo</li>
                <li>· La modalidad de cuota que prefieres</li>
              </ul>
            </div>
          </div>

          <div>
            <MembershipForm />
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <SectionHeading eyebrow="Dudas" title="Antes de asociarte" />
        <div className="mt-10 max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  );
}

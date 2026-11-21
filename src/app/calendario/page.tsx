import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { Faq } from "@/components/ui/faq";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ButtonLink } from "@/components/ui/button";
import { events, eventTypes, formatEventDate, eventDayMonth, type CircuitEvent } from "@/content/eventos";
import { whatsappUrl } from "@/content/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: ["Calendario RC La Vila", "Próximos eventos"].join(" · "),
  description:
    "Calendario de eventos del circuito RC La Vila: pruebas sociales, campeonato interno, entrenamientos con cronometraje y pruebas abiertas a pilotos de fuera del club. Consulta fechas e inscripciones.",
  keywords: ["circuito", "rc", "villajoyosa", "calendario", "eventos", "pruebas", "carreras"],
  openGraph: {
    title: "Calendario RC La Vila - Próximos eventos",
    description:
      "Calendario de eventos del circuito RC La Vila: pruebas sociales, campeonato interno, entrenamientos y carreras abiertas.",
    url: "https://www.rclavila.com/calendario",
    site: "@rclavila",
    images: [
      {
        url: "https://www.rclavila.com/calendario",
        width: 1200,
        height: 630,
        alt: "Calendario de eventos RC La Vila",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendario RC La Vila - Próximos eventos",
    description:
      "Calendario de eventos del circuito RC La Vila: fechas de pruebas y carreras.",
    images: ["https://www.rclavila.com/calendario"],
    site: "@rclavila",
  },
  alternates: { canonical: "/calendario" },
};

const faqs = [
  {
    q: "¿Hace falta inscribirse antes?",
    a: "Para las pruebas sociales y el campeonato, sí. La inscripción se cierra el viernes anterior o cuando se llenan las mangas.",
  },
  {
    q: "¿Cómo se paga la inscripción a una carrera?",
    a: "En pista el día del evento, en efectivo. Si necesitas justificante para una federación, pídelo al inscribirte.",
  },
  {
    q: "¿Qué pasa si llueve?",
    a: "La pista de tierra aguanta bien la lluvia ligera. Si el evento se cancela, se avisa en las redes del club y se devuelve la inscripción.",
  },
  {
    q: "¿Puedo entrenar el día de una carrera?",
    a: "No. El día de carrera la pista se reserva para los participantes. Consulta el calendario antes de venir.",
  },
];

function groupByMonth(list: CircuitEvent[]) {
  const groups = new Map<string, CircuitEvent[]>();
  for (const event of list) {
    const key = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(
      new Date(`${event.date}T00:00:00`),
    );
    const current = groups.get(key) ?? [];
    current.push(event);
    groups.set(key, current);
  }
  return Array.from(groups.entries());
}

export default function CalendarioPage() {
  const grouped = groupByMonth(events);

  return (
    <>
      <PageHeader
        eyebrow="Calendario"
        title="Próximos eventos"
        description="Pruebas sociales, campeonato interno, entrenamientos con cronometraje y pruebas abiertas a pilotos de fuera del club."
      >
        <ButtonLink href={whatsappUrl("Hola, quiero inscribirme en una prueba del calendario.")} external>
          Inscribirme
        </ButtonLink>
        <ButtonLink href="/tarifas" variant="outline">
          Ver tarifas
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="flex flex-wrap gap-4 border-b border-line pb-6">
          {Object.entries(eventTypes).map(([key, value]) => (
            <span
              key={key}
              className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${value.className}`}
            >
              {value.label}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-14">
          {grouped.map(([month, monthEvents]) => (
            <div key={month}>
              <h2 className="display-md border-b border-line pb-3 text-xl capitalize text-dust">
                {month}
              </h2>

              <div className="divide-y divide-line">
                {monthEvents.map((event) => {
                  const date = eventDayMonth(event.date);
                  const type = eventTypes[event.type];
                  return (
                    <article
                      key={event.id}
                      className="flex flex-col gap-4 py-7 sm:flex-row sm:items-start sm:gap-8"
                    >
                      <div className="flex w-20 shrink-0 items-baseline gap-2 sm:flex-col sm:gap-0">
                        <span className="display-md text-4xl text-dust">{date.day}</span>
                        <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                          {date.month}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="display-md text-xl text-dust">{event.title}</h3>
                          <span
                            className={`border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${type.className}`}
                          >
                            {type.label}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{event.summary}</p>
                        <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-muted/70">
                          {formatEventDate(event.date)}
                        </p>
                      </div>

                      <div className="shrink-0 sm:text-right">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                          {event.entry ? "Inscripción" : "Acceso"}
                        </p>
                        <p className="mt-1 text-sm text-dust">
                          {event.entry ?? event.status ?? "Socios"}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <MediaPlaceholder label="Cartel del evento" note="Pendiente de cartelería oficial" ratio="aspect-[4/3]" />
          <div>
            <h2 className="display-lg text-3xl text-dust sm:text-4xl">¿Organizas una prueba?</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              El circuito se puede reservar para entrenamientos privados y pruebas de club. Si
              necesitas la instalación en exclusiva, escríbenos con la fecha y el número estimado de
              pilotos.
            </p>
            <ButtonLink href="/contacto" className="mt-7">
              Consultar disponibilidad
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <h2 className="display-lg text-3xl text-dust sm:text-4xl">Preguntas sobre el calendario</h2>
        <div className="mt-10 max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  );
}

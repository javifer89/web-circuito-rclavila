import Link from "next/link";
import { ButtonLink, ArrowRight } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { site, whatsappUrl } from "@/content/site";
import { classes } from "@/content/circuito";
import { upcomingEvents, eventDayMonth, eventTypes } from "@/content/eventos";
import { posts, formatPostDate } from "@/content/noticias";

export const ensureStatic = "navigation";

const heroStats = [
  { value: "1.250 m²", label: "de pista" },
  { value: "4", label: "categorías" },
  { value: "7 días", label: "acceso socios" },
  { value: "AMB", label: "cronometraje" },
];

export default function HomePage() {
  const nextEvents = upcomingEvents(3);
  const latestPosts = posts.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,77,0,0.16),transparent_55%)]"
        />
        <div aria-hidden="true" className="stripe-pattern absolute inset-0 opacity-60" />

        <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">Villajoyosa · Alicante</p>
            <h1 className="display-xl mt-4 text-[13vw] leading-[0.88] text-dust sm:text-7xl lg:text-[5.5rem]">
              Circuito de
              <br />
              radiocontrol
              <br />
              <span className="text-accent">en Villajoyosa</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Pista permanente de tierra para buggy, truggy y short course. Acceso libre para socios
              todos los días del año, con boxes cubiertos, iluminación y cronometraje.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/hazte-socio">
                Hazte socio <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/el-circuito" variant="outline">
                Ver el circuito
              </ButtonLink>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="display-md text-2xl text-dust">{stat.value}</dd>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <MediaPlaceholder
              label="Foto del circuito"
              note="Pendiente de contenido oficial"
              ratio="aspect-[4/5]"
              className="lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-4 -left-4 hidden bg-accent px-4 py-3 sm:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-asphalt">
                Acceso con llave
              </p>
              <p className="display-md text-lg text-asphalt">Todos los días</p>
            </div>
          </div>
        </Container>
      </section>

      {/* El circuito */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">El circuito</p>
            <h2 className="display-lg mt-3 text-4xl text-dust sm:text-5xl">
              Una pista pensada para rodar, no para lucirse
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Trazado de tierra tratada y regada a diario, con ancho suficiente para adelantar de
              verdad. Boxes cubiertos con corriente en cada mesa, podio sobre el pit lane y zona de
              lavado con agua y aire comprimido.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Firme de tierra con riego automático y mantenimiento semanal.",
                "Pit lane elevado para no cortar el paso a los coches en pista.",
                "Iluminación en pista y boxes: se puede entrenar de noche.",
                "Cronometraje AMB / MyLaps en todas las pruebas del club.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/el-circuito" variant="ghost" className="mt-8 px-0">
              Ficha técnica completa <ArrowRight />
            </ButtonLink>
          </div>

          <div className="order-1 grid gap-4 lg:order-2">
            <MediaPlaceholder label="Vista aérea de la pista" note="Pendiente de contenido oficial" ratio="aspect-[16/10]" />
            <div className="grid grid-cols-2 gap-4">
              <MediaPlaceholder label="Zona de boxes" ratio="aspect-square" />
              <MediaPlaceholder label="Podio y pit lane" ratio="aspect-square" />
            </div>
          </div>
        </div>
      </Section>

      {/* Categorías */}
      <Section className="border-t border-line bg-surface/60">
        <SectionHeading
          eyebrow="Categorías"
          title="Cuatro formas de estar en pista"
          description="Cada categoría corre con su propia manga. No hace falta tener el coche más rápido para empezar: hace falta tener uno que aguante."
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((item, index) => (
            <article key={item.name} className="group bg-asphalt p-6 transition-colors hover:bg-surface-2">
              <p className="display-md text-3xl text-line">0{index + 1}</p>
              <h3 className="display-md mt-4 text-xl text-dust">{item.name}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-accent">{item.engine}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.note}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Próximos eventos */}
      <Section>
        <SectionHeading
          eyebrow="Calendario"
          title="Próximas citas"
          action={
            <ButtonLink href="/calendario" variant="outline">
              Ver calendario
            </ButtonLink>
          }
        />

        <div className="mt-12 border-t border-line">
          {nextEvents.map((event) => {
            const date = eventDayMonth(event.date);
            const type = eventTypes[event.type];
            return (
              <article
                key={event.id}
                className="group flex flex-col gap-4 border-b border-line py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex w-16 shrink-0 items-baseline gap-2 sm:flex-col sm:gap-0">
                  <span className="display-md text-3xl text-dust">{date.day}</span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                    {date.month}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-dust">{event.title}</h3>
                    <span
                      className={`border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${type.className}`}
                    >
                      {type.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{event.summary}</p>
                </div>

                <div className="shrink-0 text-sm text-muted sm:text-right">
                  <p className="text-[11px] uppercase tracking-[0.12em]">Inscripción</p>
                  <p className="mt-1 text-dust">{event.entry ?? event.status ?? "—"}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Noticias */}
      <Section className="border-t border-line bg-surface/60">
        <SectionHeading
          eyebrow="Noticias"
          title="Lo último del club"
          action={
            <ButtonLink href="/noticias" variant="outline">
              Todas las noticias
            </ButtonLink>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {latestPosts.map((post) => (
            <article key={post.slug} className="border border-line bg-asphalt">
              <MediaPlaceholder label="Imagen de la noticia" ratio="aspect-[16/9]" className="border-0 border-b border-line" />
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-accent">
                  {post.tag} · {formatPostDate(post.date)}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-dust">
                  <Link href={`/noticias/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
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

      {/* CTA socio */}
      <section className="bg-accent">
        <Container className="flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-asphalt/70">
              Socio RC La Vila
            </p>
            <h2 className="display-lg mt-2 text-4xl text-asphalt sm:text-5xl">
              La pista está abierta.
              <br />
              Solo falta tu coche.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-asphalt/80">
              Cuota mensual desde 15 €. Acceso con llave propia, entrenamiento libre y participación
              en las pruebas sociales del club.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/hazte-socio"
              className="inline-flex items-center justify-center bg-asphalt px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:bg-surface-2"
            >
              Quiero ser socio
            </Link>
            <a
              href={whatsappUrl("Hola, quiero información para hacerme socio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-asphalt/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:border-asphalt"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Ubicación */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Cómo llegar</p>
            <h2 className="display-lg mt-3 text-4xl text-dust sm:text-5xl">
              A cinco minutos de la costa
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              La parcela está en el término de {site.address.town}, con acceso para coche y
              remolque y aparcamiento dentro del recinto.
            </p>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Dirección
                </dt>
                <dd className="mt-1 text-sm text-dust">
                  {site.address.street}, {site.address.postalCode} {site.address.town}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Horario
                </dt>
                <dd className="mt-1 space-y-1 text-sm text-dust">
                  {site.hours.map((item) => (
                    <span key={item.days} className="block">
                      {item.days}: {item.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contacto">Contacto y ubicación</ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="outline" external>
                Escribir por WhatsApp
              </ButtonLink>
            </div>
          </div>

          <MediaPlaceholder
            label="Mapa de ubicación"
            note="Se sustituye por el mapa embebido real"
            ratio="aspect-[4/3]"
          />
        </div>
      </Section>
    </>
  );
}

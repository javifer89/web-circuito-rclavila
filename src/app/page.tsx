import Image from "next/image";
import Link from "next/link";
import { ButtonLink, ArrowRight } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { site, whatsappUrl } from "@/content/site";
import { classes } from "@/content/circuito";
import { upcomingEvents, eventDayMonth, eventTypes } from "@/content/eventos";
import { posts, formatPostDate } from "@/content/noticias";
import fotoSocios from "@/assets/foto sudaderas nuevas.jpeg";
import vistaAerea from "@/assets/vista aerea circuito.jpeg";

export const ensureStatic = "navigation";

const heroStats = [
  { value: "3000 m² parcela", label: "superficie" },
  { value: "3 escalas", label: "escalas" },
  { value: "llave propia", label: "acceso" },
  { value: "LAPMONITOR", label: "cronometraje" },
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(228,36,124,0.10),transparent_55%)]"
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
            <div className="relative aspect-[4/3] overflow-hidden border border-line">
              <Image
                src={fotoSocios}
                alt="Socios del RC La Vila con sus coches delante de la zona de boxes"
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-full w-full object-cover object-center"
              />
            </div>
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
                "Firme de tierra con moqueta en zonas de saltos y recepciones.",
                "Pit lane en mejora: expansión de mesas de boxes.",
                "Sin iluminación artificial (entrenamiento diurno).",
                "Cronometraje LAPMONITOR — cada piloto su transponder.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Mejoras en curso: vallado perimetral, aumento de mesas de boxes y zona de sombra prevista.
            </p>
            <ButtonLink href="/el-circuito" variant="ghost" className="mt-8 px-0">
              Ficha técnica completa <ArrowRight />
            </ButtonLink>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden border border-line">
              <Image
                src={vistaAerea}
                alt="Vista aérea del trazado del circuito RC La Vila"
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted">
              Vista aérea del trazado
            </p>
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
          {nextEvents.length > 0 ? (
            nextEvents.map((event) => {
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
            })
          ) : (
            <div className="mt-12 text-center py-8">
              <p className="text-muted/60">Ahora mismo no hay pruebas programadas.</p>
              <p className="mt-4 text-dust/70">Cuando el club convoque la primera, la verás aquí y en el calendario.</p>
              <ButtonLink href="/calendario" variant="outline">
                Ver calendario
              </ButtonLink>
            </div>
          )}
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
              Cuota mensual desde 10 €, semestral 60 € o anual 120 €. Acceso con llave propia
              para socios; usuarios externos por día, previo contacto con el club.
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
              La parcela está en Partida Atalayas, Villajoyosa (Alicante), frente al Centro
              Ocupacional Les Talaies. Acceso para coche y remolque, aparcamiento dentro del recinto.
            </p>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Dirección
                </dt>
                <dd className="mt-1 text-sm text-dust">
                  Partida Atalayas, s/n — Villajoyosa (Alicante)
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Horario
                </dt>
                <dd className="mt-1 text-sm text-dust">
                  Contactar para más información
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contacto">Contacto y ubicación</ButtonLink>
              <a
                href="https://www.instagram.com/rclavila"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-asphalt/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:border-asphalt"
              >
                Instagram
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d322.85825396956795!2d-0.18863109984290002!3d38.52485821506854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1794780048269!5m2!1ses!2ses"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación del circuito RC La Vila en Villajoyosa"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
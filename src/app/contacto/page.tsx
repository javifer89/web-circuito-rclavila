import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { Faq } from "@/components/ui/faq";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ContactForm } from "@/components/forms/contact-form";
import { site, whatsappUrl, mapsUrl } from "@/content/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con el circuito de radiocontrol RC La Vila en Villajoyosa: teléfono, email, WhatsApp, horario y ubicación.",
  alternates: { canonical: "/contacto" },
};

const faqs = [
  {
    q: "¿Cuál es el horario de apertura?",
    a: "El recinto abre todos los días. Los socios acceden con su propia llave dentro del horario, y la oficina atiende en horario de mañana.",
  },
  {
    q: "¿Se puede llegar con caravana o remolque?",
    a: "Sí. El acceso está dimensionado para vehículo con remolque y hay aparcamiento dentro de la parcela.",
  },
  {
    q: "¿Hay transporte público hasta el circuito?",
    a: "La parada de autobús más cercana está en la carretera general. Desde allí se llega andando en unos minutos; con material, lo cómodo es venir en coche.",
  },
  {
    q: "¿Puedo reservar la pista para un grupo?",
    a: "Sí, para entrenamientos privados y eventos de empresa. Escríbenos con la fecha y el número de participantes.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablamos"
        description="Para dudas sobre cuotas, visitas, alquiler de pista o inscripciones en pruebas. Respondemos en horario de oficina."
      >
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-accent-soft"
        >
          WhatsApp
        </a>
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center justify-center border border-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:border-dust"
        >
          {site.contact.email}
        </a>
      </PageHeader>

      <Section>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-asphalt p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Teléfono</p>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-dust hover:text-accent"
            >
              {site.contact.phone}
            </a>
          </div>
          <div className="bg-asphalt p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Email</p>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-2 block break-all text-sm text-dust hover:text-accent"
            >
              {site.contact.email}
            </a>
          </div>
          <div className="bg-asphalt p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Dirección</p>
            <p className="mt-2 text-sm text-dust">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.town}
            </p>
          </div>
          <div className="bg-asphalt p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">Horario</p>
            <div className="mt-2 space-y-1 text-sm text-dust">
              {site.hours.map((item) => (
                <p key={item.days}>
                  {item.days}
                  <span className="block text-xs text-muted">{item.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <MediaPlaceholder
            label="Mapa de ubicación"
            note="Aquí va el mapa embebido con la ubicación real"
            ratio="aspect-[4/3]"
          />
          <div>
            <p className="eyebrow">Cómo llegar</p>
            <h2 className="display-lg mt-3 text-3xl text-dust sm:text-4xl">
              Villajoyosa, a cinco minutos de la costa
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              La parcela se encuentra en el término municipal de {site.address.town}, con acceso
              directo desde la carretera y aparcamiento dentro del recinto.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                En coche: acceso rodado hasta la zona de boxes, apto para remolque.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                Aparcamiento gratuito dentro de la parcela.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                Autobús hasta la carretera general y pocos minutos andando.
              </li>
            </ul>

            <a
              href={mapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center border border-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:border-dust"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Formulario</p>
            <h2 className="display-lg mt-3 text-3xl text-dust sm:text-4xl">Escríbenos</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Cuéntanos qué necesitas y te respondemos por email o WhatsApp, como prefieras.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-muted/70">
              El formulario prepara el mensaje con tus datos y te deja elegir el canal de envío. No
              guardamos nada en servidores del club.
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <h2 className="display-lg text-3xl text-dust sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-10 max-w-3xl">
          <Faq items={faqs} />
        </div>
      </Section>
    </>
  );
}

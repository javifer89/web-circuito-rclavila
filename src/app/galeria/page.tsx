import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappUrl } from "@/content/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos y vídeos del circuito RC La Vila: pista, boxes, pruebas sociales y campeonato.",
  alternates: { canonical: "/galeria" },
};

const albums = [
  {
    title: "La pista",
    description: "Vistas del trazado, las curvas técnicas y la recta principal.",
    items: ["Recta principal", "Curva norte", "Doble de boxes", "Salto central"],
  },
  {
    title: "Boxes y podio",
    description: "La zona de trabajo, el pit lane y el podio cubierto.",
    items: ["Mesa de boxes", "Pit lane elevado", "Podio", "Zona de lavado"],
  },
  {
    title: "Carreras",
    description: "Mangas, finales y ambiente de las pruebas sociales.",
    items: ["Salida de manga", "Final buggy", "Entrega de trofeos", "Público"],
  },
  {
    title: "Detrás del club",
    description: "Mantenimiento, mejoras y trabajo de fin de semana.",
    items: ["Riego de pista", "Cerramiento", "Cuadrilla", "Montaje de boxes"],
  },
];

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="El circuito, en imágenes"
        description="La galería se irá llenando con material del club. Mientras tanto, esta es la estructura prevista por bloques."
      >
        <ButtonLink href={whatsappUrl("Hola, tengo fotos o vídeos del circuito para la galería.")} external>
          Enviar material
        </ButtonLink>
      </PageHeader>

      <Section>
        <div className="space-y-16">
          {albums.map((album) => (
            <section key={album.title}>
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
                <div>
                  <h2 className="display-md text-2xl text-dust">{album.title}</h2>
                  <p className="mt-2 text-sm text-muted">{album.description}</p>
                </div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                  {album.items.length} imágenes
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {album.items.map((item) => (
                  <MediaPlaceholder key={item} label={item} ratio="aspect-[4/3]" />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display-lg text-3xl text-dust sm:text-4xl">¿Tienes material del circuito?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Si has grabado una manga o tienes fotos de la pista, envíalas y las publicamos con tu
              crédito. También aceptamos vídeos onboard para la portada.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href={`mailto:${site.contact.email}`}>Escribir al club</ButtonLink>
            <ButtonLink href="/contacto" variant="outline">
              Formulario
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

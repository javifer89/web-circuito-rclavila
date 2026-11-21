import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappUrl } from "@/content/site";
import vistaAerea from "@/assets/vista aerea circuito.jpeg";
import fotoSocios from "@/assets/foto sudaderas nuevas.jpeg";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: ["Galería RC La Vila", "El circuito en imágenes"].join(" · "),
  description:
    "Fotos y vídeos del circuito RC La Vila: pista, boxes, pruebas sociales y campeonato. El galería se irá llenando con material del club.",
  keywords: ["circuito", "rc", "villajoyosa", "galería", "fotos", "videos", "pista"],
  openGraph: {
    title: "Galería RC La Vila - El circuito en imágenes",
    description:
      "Fotos y vídeos del circuito RC La Vila: pista, boxes, pruebas sociales y campeonato.",
    url: "https://www.rclavila.com/galeria",
    siteName: site.name,
    images: [
      {
        url: "https://www.rclavila.com/galeria",
        width: 1200,
        height: 630,
        alt: "Galería de fotos RC La Vila",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galería RC La Vila - El circuito en imágenes",
    description:
      "Fotos y vídeos del circuito RC La Vila: pista, boxes y pruebas sociales.",
    images: ["https://www.rclavila.com/galeria"],
    site: "@rclavila",
  },
  alternates: { canonical: "/galeria" },
};

type Photo = {
  label: string;
  image?: StaticImageData;
  alt?: string;
};

const albums: Array<{ title: string; description: string; photos: Photo[] }> = [
  {
    title: "La pista",
    description: "El trazado completo, las curvas técnicas y la recta principal.",
    photos: [
      {
        label: "Vista aérea",
        image: vistaAerea,
        alt: "Vista aérea del trazado del circuito RC La Vila",
      },
      { label: "Recta principal" },
      { label: "Curva norte" },
      { label: "Doble de boxes" },
    ],
  },
  {
    title: "El club",
    description: "Los socios, las sudaderas del club y el ambiente de los domingos.",
    photos: [
      {
        label: "Socios en pista",
        image: fotoSocios,
        alt: "Socios del RC La Vila con sus coches delante de la zona de boxes",
      },
      { label: "Trabajo de cuadrilla" },
      { label: "Iniciación" },
      { label: "Asamblea" },
    ],
  },
  {
    title: "Boxes y podio",
    description: "La zona de trabajo, el pit lane y el podio cubierto.",
    photos: [
      { label: "Mesa de boxes" },
      { label: "Pit lane elevado" },
      { label: "Podio" },
      { label: "Zona de lavado" },
    ],
  },
  {
    title: "Carreras",
    description: "Mangas, finales y ambiente de las pruebas sociales.",
    photos: [
      { label: "Salida de manga" },
      { label: "Final buggy" },
      { label: "Entrega de trofeos" },
      { label: "Público" },
    ],
  },
  {
    title: "Detrás del club",
    description: "Mantenimiento, mejoras y trabajo de fin de semana.",
    photos: [
      { label: "Riego de pista" },
      { label: "Cerramiento" },
      { label: "Cuadrilla" },
      { label: "Montaje de boxes" },
    ],
  },
];

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="El circuito, en imágenes"
        description="La galería se irá llenando con material del club. Lo que ya hay publicado es del propio circuito; el resto son huecos reservados."
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
                  {album.photos.length} imágenes
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {album.photos.map((photo) => {
                  if (!photo.image) {
                    return <MediaPlaceholder key={photo.label} label={photo.label} ratio="aspect-[4/3]" />;
                  }

                  return (
                    <figure key={photo.label} className="group relative">
                      <div className="relative aspect-[4/3] overflow-hidden border border-line">
                        <Image
                          src={photo.image}
                          alt={photo.alt ?? photo.label}
                          placeholder="blur"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <figcaption className="mt-2 text-[10px] uppercase tracking-[0.14em] text-muted">
                        {photo.label}
                      </figcaption>
                    </figure>
                  );
                })}
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

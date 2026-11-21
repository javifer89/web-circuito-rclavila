import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { site, formattedAddress } from "@/content/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: ["Aviso legal y privacidad", site.name].join(" · "),
  description:
    "Aviso legal, política de privacidad y política de cookies del circuito de radiocontrol RC La Vila. Datos del titular y protección de datos personales.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Aviso legal, privacidad y cookies"
        description="Información sobre el titular del sitio, el tratamiento de datos personales y el uso de cookies."
      />

      <Section className="py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="border rounded-lg bg-surface p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-4">
              Aviso legal
            </h3>
            <p className="text-sm leading-relaxed text-muted/70">
              En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la
              Información y Comercio Electrónico, se informa de los datos del titular de este
              sitio web.
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              <li className="flex items-baseline gap-2">
                <span className="font-medium text-dust">Titular:</span>
                <span>{site.legalName}</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="font-medium text-dust">Domicilio:</span>
                <span>{formattedAddress()}</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="font-medium text-dust">Email:</span>
                <a href={`mailto:${site.contact.email}`} className="text-dust underline">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="font-medium text-dust">Teléfono:</span>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-dust underline">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="font-medium text-dust">Web:</span>
                <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-dust underline">
                  {site.url}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted/60">
              Inscrita en el: <span className="font-mono text-dust">Registro correspondiente</span>.
              Se establece domicilio en Villajoyosa (Alicante).
            </p>
          </div>

          <div className="border rounded-lg bg-surface p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-4">
              Política de privacidad
            </h3>
            <p className="text-sm leading-relaxed text-muted/70">
              Los datos que facilitas a través de los formularios de contacto y de alta de socio se
              utilizan exclusivamente para responder a tu consulta o gestionar tu condición de
              socio del circuito RC La Vila.
            </p>
            <div className="space-y-4">
              <p>
                <span className="font-medium text-dust">Base jurídica:</span>
                consentimiento del interesado y ejecución de la relación asociativa.
              </p>
              <p>
                <span className="font-medium text-dust">Conservación:</span>
                los datos de consultas se conservan durante un año; los datos de socios, mientras
                se mantenga la relación y durante los plazos legales aplicables.
              </p>
              <p>
                <span className="font-medium text-dust">Destinatarios:</span>
                no se ceden datos a terceros salvo obligación legal.
              </p>
              <p>
                <span className="font-medium text-dust">Derechos:</span>
                puedes ejercer los derechos de acceso, rectificación, supresión, oposición,
                limitación y portabilidad escribiendo a
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-dust underline underline-offset-2"
                >
                  {site.contact.email}
                </a>
                .
              </p>
              <p className="text-xs leading-relaxed text-muted/60">
                Los formularios de este sitio no envían datos a ningún servidor: preparan el mensaje
                en tu dispositivo y lo envía desde tu propio cliente de correo o de mensajería.
              </p>
            </div>
          </div>

          <div className="border rounded-lg bg-surface p-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-4">
              Política de cookies
            </h3>
            <p className="text-sm leading-relaxed text-muted/70">
              Este sitio no utiliza cookies de publicidad ni de seguimiento. Únicamente puede usar
              cookies técnicas necesarias para el funcionamiento de la web y del reproductor de
              mapas, si se activa.
            </p>
            <p className="text-xs leading-relaxed text-muted/60">
              Si en el futuro se incorporan herramientas de analítica o vídeos embebidos, se
              solicitará consentimiento previo mediante un panel de configuración.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
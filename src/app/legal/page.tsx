import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/container";
import { site, formattedAddress } from "@/content/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Aviso legal y privacidad",
  description:
    "Aviso legal, política de privacidad y política de cookies del circuito de radiocontrol RC La Vila.",
  alternates: { canonical: "/legal" },
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Aviso legal, privacidad y cookies"
        description="Información sobre el titular del sitio, el tratamiento de datos personales y el uso de cookies."
      />

      <Section>
        <div className="max-w-3xl space-y-14">
          <div className="border border-accent/30 bg-accent/[0.05] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Pendiente de revisión
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Este texto es una base de trabajo. Antes de publicar el sitio hay que completar los
              datos del titular (CIF, registro) y revisarlo con asesoría legal.
            </p>
          </div>

          <section id="aviso-legal" className="scroll-mt-28">
            <h2 className="display-lg text-3xl text-dust">Aviso legal</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la
                Información y Comercio Electrónico, se informa de los datos del titular de este
                sitio web.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-dust">Titular:</span> {site.legalName}
                </li>
                <li>
                  <span className="text-dust">Domicilio:</span> {formattedAddress()}
                </li>
                <li>
                  <span className="text-dust">Email:</span> {site.contact.email}
                </li>
                <li>
                  <span className="text-dust">CIF:</span> pendiente de indicar
                </li>
                <li>
                  <span className="text-dust">Registro:</span> pendiente de indicar
                </li>
              </ul>
              <p>
                El acceso a este sitio implica la aceptación de las presentes condiciones. El titular
                no se responsabiliza del uso indebido de los contenidos ni de las interrupciones del
                servicio ajenas a su control.
              </p>
            </div>
          </section>

          <section id="privacidad" className="scroll-mt-28">
            <h2 className="display-lg text-3xl text-dust">Política de privacidad</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Los datos que facilitas a través de los formularios de contacto y de alta de socio se
                utilizan exclusivamente para responder a tu consulta o gestionar tu condición de
                socio.
              </p>
              <p>
                <span className="text-dust">Base jurídica:</span> consentimiento del interesado y
                ejecución de la relación asociativa.
              </p>
              <p>
                <span className="text-dust">Conservación:</span> los datos de consultas se conservan
                durante un año; los datos de socios, mientras se mantenga la relación y durante los
                plazos legales aplicables.
              </p>
              <p>
                <span className="text-dust">Destinatarios:</span> no se ceden datos a terceros salvo
                obligación legal.
              </p>
              <p>
                <span className="text-dust">Derechos:</span> puedes ejercer los derechos de acceso,
                rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-dust underline underline-offset-2"
                >
                  {site.contact.email}
                </a>
                .
              </p>
              <p>
                Los formularios de este sitio no envían datos a ningún servidor: preparan el mensaje
                en tu dispositivo y lo envían desde tu propio cliente de correo o de mensajería.
              </p>
            </div>
          </section>

          <section id="cookies" className="scroll-mt-28">
            <h2 className="display-lg text-3xl text-dust">Política de cookies</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
              <p>
                Este sitio no utiliza cookies de publicidad ni de seguimiento. Únicamente puede usar
                cookies técnicas necesarias para el funcionamiento de la web y del reproductor de
                mapas, si se activa.
              </p>
              <p>
                Si en el futuro se incorporan herramientas de analítica o vídeos embebidos, se
                solicitará consentimiento previo mediante un panel de configuración.
              </p>
            </div>
          </section>
        </div>
      </Section>
    </>
  );
}

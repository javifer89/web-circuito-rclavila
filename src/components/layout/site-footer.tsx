import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { getCopyrightYear } from "@/lib/build-year";

export async function SiteFooter() {
  const year = await getCopyrightYear();

  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="display-md text-xl text-dust">RC La Vila</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{site.claim}.</p>
            <div className="mt-5 flex gap-3">
              {site.contact.instagram ? (
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-dust hover:text-dust"
                >
                  Instagram
                </a>
              ) : null}
              {site.contact.facebook ? (
                <a
                  href={site.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-dust hover:text-dust"
                >
                  Facebook
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dust">Web</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-dust">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dust">Club</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/hazte-socio" className="text-sm text-muted transition-colors hover:text-dust">
                  Hazte socio
                </Link>
              </li>
              <li>
                <Link href="/el-club" className="text-sm text-muted transition-colors hover:text-dust">
                  Junta directiva
                </Link>
              </li>
              <li>
                <Link href="/el-club#documentos" className="text-sm text-muted transition-colors hover:text-dust">
                  Normativa
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted transition-colors hover:text-dust">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dust">Dónde estamos</p>
            <address className="mt-4 space-y-1 text-sm not-italic text-muted">
              <span className="block">{site.address.street}</span>
              <span className="block">
                {site.address.postalCode} {site.address.town}, {site.address.province}
              </span>
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="block text-muted hover:text-dust">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="block text-muted hover:text-dust">
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/legal" className="hover:text-dust">
              Aviso legal
            </Link>
            <Link href="/legal#privacidad" className="hover:text-dust">
              Privacidad
            </Link>
            <Link href="/legal#cookies" className="hover:text-dust">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

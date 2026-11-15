import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ButtonLink, ArrowRight } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(228,36,124,0.10),transparent_60%)]"
      />
      <Container className="relative flex flex-col items-start py-24 sm:py-32">
        <p className="eyebrow">Error 404</p>
        <h1 className="display-xl mt-4 text-6xl text-dust sm:text-8xl">Fuera de pista</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          La página que buscas no existe o ha cambiado de sitio. Vuelve al aparcamiento y elige otro
          camino.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">
            Volver al inicio <ArrowRight />
          </ButtonLink>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center border border-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:border-dust"
          >
            Contactar
          </Link>
        </div>
      </Container>
    </section>
  );
}

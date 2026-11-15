import type { ReactNode } from "react";
import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface/50">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(255,77,0,0.12),transparent_60%)]"
      />
      <Container className="relative py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-xl mt-4 max-w-3xl text-5xl text-dust sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
        ) : null}
        {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
      </Container>
    </section>
  );
}

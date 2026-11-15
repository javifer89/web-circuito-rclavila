"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import logo from "@/assets/logo-rclavila.png";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-asphalt/85 backdrop-blur-md">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-asphalt"
        >
          Saltar al contenido
        </a>

        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} — inicio`}>
            <Image
              src={logo}
              alt=""
              priority
              sizes="(min-width: 1024px) 90px, 68px"
              className="h-11 w-auto sm:h-12 lg:h-16"
            />
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors",
                  isActive(pathname, item.href)
                    ? "text-accent"
                    : "text-dust/70 hover:text-dust",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/hazte-socio"
              className="hidden bg-dust px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-accent sm:inline-flex"
            >
              Hazte socio
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex h-10 w-10 items-center justify-center border border-line text-dust lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside the header: its backdrop-blur creates a containing block,
          which would collapse `fixed` descendants to the header box. */}
      {open ? (
        <div
          id="menu-movil"
          className="fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto overscroll-contain bg-asphalt lg:hidden"
        >
          <nav aria-label="Navegación móvil" className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "display-md border-b border-line py-4 text-2xl",
                  isActive(pathname, item.href) ? "text-accent" : "text-dust",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/hazte-socio"
              onClick={() => setOpen(false)}
              className="mt-6 bg-accent px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-asphalt"
            >
              Hazte socio
            </Link>
            <a
              href={`mailto:${site.contact.email}`}
              onClick={() => setOpen(false)}
              className="mt-4 text-center text-sm text-muted"
            >
              {site.contact.email}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}

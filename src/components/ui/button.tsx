import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-none px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200";

const variants = {
  primary: "bg-accent text-asphalt hover:bg-accent-soft",
  outline: "border border-line text-dust hover:border-dust hover:bg-surface-2",
  ghost: "text-dust hover:text-accent",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

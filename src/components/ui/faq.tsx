import { cn } from "@/lib/cn";

export function Faq({ items, className }: { items: { q: string; a: string }[]; className?: string }) {
  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-sm font-semibold text-dust marker:content-none">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-accent transition-transform group-open:rotate-45"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl pr-8 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

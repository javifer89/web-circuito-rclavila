import { cn } from "@/lib/cn";

/**
 * Stand-in for real photography. Replace with <Image /> once the club
 * provides photos of the track.
 */
export function MediaPlaceholder({
  label,
  note,
  className,
  ratio = "aspect-[16/9]",
}: {
  label: string;
  note?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "stripe-pattern relative flex items-center justify-center overflow-hidden border border-line bg-surface",
        ratio,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,0,0.12),transparent_60%)]"
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          className="h-6 w-6 text-muted"
        >
          <path d="M3 7h3l2-2h8l2 2h3v12H3z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
        {note ? <p className="max-w-[22ch] text-[11px] leading-snug text-muted/70">{note}</p> : null}
      </div>
    </div>
  );
}

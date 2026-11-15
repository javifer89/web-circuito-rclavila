import { site } from "@/content/site";

export function WorksNotice() {
  if (!site.works.active) return null;

  return (
    <div className="border-b border-line/70 bg-surface">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-2.5 sm:px-8">
        <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-lime" aria-hidden="true" />
        <p className="text-[11px] leading-snug text-muted sm:text-xs">
          <span className="font-semibold uppercase tracking-[0.12em] text-dust">
            {site.works.title}:
          </span>{" "}
          {site.works.message}
        </p>
      </div>
    </div>
  );
}

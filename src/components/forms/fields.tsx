import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const inputClass =
  "w-full border border-line bg-asphalt px-4 py-3 text-sm text-dust placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-[11px] leading-snug text-muted/70">{hint}</p> : null}
    </div>
  );
}

export function ConsentField({
  id,
  checked,
  onChange,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        required
        className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
      />
      <label htmlFor={id} className="text-xs leading-relaxed text-muted">
        {children}
      </label>
    </div>
  );
}

export function FormHandoff({
  mailtoHref,
  whatsappHref,
  onReset,
}: {
  mailtoHref: string;
  whatsappHref: string;
  onReset: () => void;
}) {
  return (
    <div className="border border-accent/40 bg-accent/[0.06] p-6 sm:p-8">
      <p className="eyebrow">Mensaje preparado</p>
      <h3 className="display-md mt-2 text-2xl text-dust">Elige cómo enviarlo</h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
        Hemos preparado tu mensaje con todos los datos. Envíalo por el canal que prefieras y te
        respondemos en horario de oficina.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center bg-accent px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-accent-soft"
        >
          Enviar por email
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-line px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-dust transition-colors hover:border-dust"
        >
          Enviar por WhatsApp
        </a>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center px-4 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-dust"
        >
          Editar
        </button>
      </div>
    </div>
  );
}

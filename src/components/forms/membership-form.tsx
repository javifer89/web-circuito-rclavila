"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/content/site";
import { buildMailto, formatFields } from "@/lib/mailto";
import { ConsentField, Field, FormHandoff, inputClass } from "./fields";

const modalities = ["Cuota mensual", "Cuota trimestral", "Cuota juvenil"] as const;
const categories = [
  "Buggy 1/8",
  "Truggy 1/8",
  "Short course 1/10",
  "E-buggy 1/8",
  "Todavía no compito",
] as const;
const paymentMethods = ["Transferencia", "Domiciliación bancaria", "Efectivo en secretaría"] as const;

type Prepared = { mailto: string; whatsapp: string } | null;

export function MembershipForm() {
  const [prepared, setPrepared] = useState<Prepared>(null);
  const [consent, setConsent] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    category: categories[0] as string,
    modality: modalities[0] as string,
    payment: paymentMethods[0] as string,
    notes: "",
  });

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;

    const fullName = `${values.firstName} ${values.lastName}`.trim();

    const mailto = buildMailto({
      to: site.contact.email,
      subject: `Alta de socio · ${fullName}`,
      lines: [
        ...formatFields([
          ["Nombre", fullName],
          ["Email", values.email],
          ["Teléfono", values.phone],
          ["Fecha de nacimiento", values.birthDate],
          ["Categoría", values.category],
          ["Modalidad de cuota", values.modality],
          ["Forma de pago preferida", values.payment],
        ]),
        "",
        "Comentarios:",
        values.notes || "—",
        "",
        "Solicito el alta como socio del club y declaro haber leído el reglamento interno.",
      ],
    });

    setPrepared({
      mailto,
      whatsapp: whatsappUrl(
        `Hola, quiero hacerme socio. Nombre: ${fullName}. Categoría: ${values.category}. Modalidad: ${values.modality}. Email: ${values.email} · Tel: ${values.phone}`,
      ),
    });
  }

  if (prepared) {
    return (
      <FormHandoff
        mailtoHref={prepared.mailto}
        whatsappHref={prepared.whatsapp}
        onReset={() => setPrepared(null)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="member-first-name" required>
          <input
            id="member-first-name"
            required
            autoComplete="given-name"
            value={values.firstName}
            onChange={(event) => update("firstName", event.target.value)}
            className={inputClass}
            placeholder="Nombre"
          />
        </Field>

        <Field label="Apellidos" htmlFor="member-last-name" required>
          <input
            id="member-last-name"
            required
            autoComplete="family-name"
            value={values.lastName}
            onChange={(event) => update("lastName", event.target.value)}
            className={inputClass}
            placeholder="Apellidos"
          />
        </Field>

        <Field label="Email" htmlFor="member-email" required>
          <input
            id="member-email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            placeholder="tu@email.com"
          />
        </Field>

        <Field label="Teléfono" htmlFor="member-phone" required>
          <input
            id="member-phone"
            type="tel"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
            placeholder="600 000 000"
          />
        </Field>

        <Field label="Fecha de nacimiento" htmlFor="member-birth" required>
          <input
            id="member-birth"
            type="date"
            required
            value={values.birthDate}
            onChange={(event) => update("birthDate", event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Categoría" htmlFor="member-category" required>
          <select
            id="member-category"
            required
            value={values.category}
            onChange={(event) => update("category", event.target.value)}
            className={inputClass}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Modalidad de cuota" htmlFor="member-modality" required>
          <select
            id="member-modality"
            required
            value={values.modality}
            onChange={(event) => update("modality", event.target.value)}
            className={inputClass}
          >
            {modalities.map((modality) => (
              <option key={modality} value={modality}>
                {modality}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Forma de pago preferida"
          htmlFor="member-payment"
          required
          hint="La domiciliación y los datos bancarios se formalizan en secretaría."
        >
          <select
            id="member-payment"
            required
            value={values.payment}
            onChange={(event) => update("payment", event.target.value)}
            className={inputClass}
          >
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Comentarios" htmlFor="member-notes">
        <textarea
          id="member-notes"
          rows={4}
          value={values.notes}
          onChange={(event) => update("notes", event.target.value)}
          className={inputClass}
          placeholder="Material que usas, si vienes de otro club, dudas sobre el alta…"
        />
      </Field>

      <ConsentField id="member-consent" checked={consent} onChange={setConsent}>
        Acepto el{" "}
        <a href="/el-club#documentos" className="text-dust underline underline-offset-2">
          reglamento interno
        </a>{" "}
        y la{" "}
        <a href="/legal#privacidad" className="text-dust underline underline-offset-2">
          política de privacidad
        </a>
        . Autorizo al club a usar mis datos para la gestión de la condición de socio.
      </ConsentField>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={!consent}
          className="inline-flex items-center justify-center bg-accent px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
        >
          Preparar solicitud
        </button>
        <p className="text-[11px] text-muted">Sin compromiso. Te llamamos antes de formalizar nada.</p>
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/content/site";
import { buildMailto, formatFields } from "@/lib/mailto";
import { ConsentField, Field, FormHandoff, inputClass } from "./fields";

const topics = [
  "Información general",
  "Quiero hacerme socio",
  "Alquiler de pista",
  "Eventos y carreras",
  "Prensa y colaboraciones",
] as const;

type Prepared = { mailto: string; whatsapp: string } | null;

export function ContactForm() {
  const [prepared, setPrepared] = useState<Prepared>(null);
  const [consent, setConsent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    topic: topics[0] as string,
    message: "",
  });

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;

    const mailto = buildMailto({
      to: site.contact.email,
      subject: `Web · ${values.topic} · ${values.name}`,
      lines: [
        ...formatFields([
          ["Nombre", values.name],
          ["Email", values.email],
          ["Teléfono", values.phone],
          ["Asunto", values.topic],
        ]),
        "",
        "Mensaje:",
        values.message,
      ],
    });

    setPrepared({
      mailto,
      whatsapp: whatsappUrl(
        `Hola, soy ${values.name}. Asunto: ${values.topic}. ${values.message} — Email: ${values.email}${
          values.phone ? ` · Tel: ${values.phone}` : ""
        }`,
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
        <Field label="Nombre" htmlFor="contact-name" required>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass}
            placeholder="Nombre y apellidos"
          />
        </Field>

        <Field label="Email" htmlFor="contact-email" required>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            placeholder="tu@email.com"
          />
        </Field>

        <Field label="Teléfono" htmlFor="contact-phone">
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
            placeholder="600 000 000"
          />
        </Field>

        <Field label="Asunto" htmlFor="contact-topic" required>
          <select
            id="contact-topic"
            name="topic"
            required
            value={values.topic}
            onChange={(event) => update("topic", event.target.value)}
            className={inputClass}
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensaje" htmlFor="contact-message" required>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={inputClass}
          placeholder="Cuéntanos qué necesitas."
        />
      </Field>

      <ConsentField id="contact-consent" checked={consent} onChange={setConsent}>
        He leído y acepto la{" "}
        <a href="/legal#privacidad" className="text-dust underline underline-offset-2">
          política de privacidad
        </a>
        . Los datos se utilizan únicamente para responder a esta consulta.
      </ConsentField>

      <div>
        <button
          type="submit"
          disabled={!consent}
          className="inline-flex items-center justify-center bg-accent px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:border disabled:border-line disabled:bg-transparent disabled:text-muted"
        >
          Preparar mensaje
        </button>
      </div>
    </form>
  );
}

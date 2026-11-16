"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/content/site";

type FormMode = "mailto" | "formspree";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  category: string;
  modality: string;
  payment: string;
  notes: string;
  consent: boolean;
};

export function MembershipForm({ formMode = "mailto", formspreeId }: { formMode?: FormMode; formspreeId?: string }) {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    category: "Buggy 1/8",
    modality: "Cuota mensual",
    payment: "Transferencia",
    notes: "",
    consent: false,
  });

  function update<K extends keyof FormValues>(key: K, value: string | boolean) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!values.consent) {
      update("consent", false);
      return;
    }

    // Modo formspree
    if (formMode === "formspree" && formspreeId) {
      const formData = new FormData(event.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      
      fetch(`https://formspree.io/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          setValues({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            birthDate: "",
            category: "Buggy 1/8",
            modality: "Cuota mensual",
            payment: "Transferencia",
            notes: "",
            consent: false,
          });
        }
      })
      .catch(error => {
        console.error("Error enviando a formspree:", error);
      });
      return;
    }

    // Modo mailto (original)
    const fullName = `${values.firstName} ${values.lastName}`.trim();
    
    const mailto = `
      subject: Alta de socio · ${fullName}
      lines: [
        ["Nombre", fullName],
        ["Email", values.email],
        ["Teléfono", values.phone],
        ["Fecha de nacimiento", values.birthDate],
        ["Categoría", values.category],
        ["Modalidad de cuota", values.modality],
        ["Forma de pago preferida", values.payment],
      ],
      "",
      "Comentarios:",
      values.notes || "—",
      "",
      "Solicito el alta como socio del club y declaro haber leído el reglamento interno.",
    `;

    window.location.href = `mailto:${site.contact.email}?${encodeURIComponent(mailto)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" autoComplete="off">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="firstName"
            required
            value={values.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
            placeholder="Nombre"
            autoComplete="given-name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Apellidos
          </label>
          <input
            type="text"
            name="lastName"
            required
            value={values.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
            placeholder="Apellidos"
            autoComplete="family-name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
            placeholder="tu@email.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
            placeholder="600 000 000"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="birthDate"
            required
            value={values.birthDate}
            onChange={(e) => update("birthDate", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Categoría
          </label>
          <select
            name="category"
            required
            value={values.category}
            onChange={(e) => update("category", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          >
            <option value="Buggy 1/8">Buggy 1/8</option>
            <option value="Truggy 1/8">Truggy 1/8</option>
            <option value="Short course 1/10">Short course 1/10</option>
            <option value="E-buggy 1/8">E-buggy 1/8</option>
            <option value="Todavía no compito">Todavía no compito</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Modalidad de cuota
          </label>
          <select
            name="modality"
            required
            value={values.modality}
            onChange={(e) => update("modality", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          >
            <option value="Cuota mensual">Cuota mensual</option>
            <option value="Cuota trimestral">Cuota trimestral</option>
            <option value="Cuota juvenil">Cuota juvenil</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Forma de pago preferida
          </label>
          <select
            name="payment"
            required
            value={values.payment}
            onChange={(e) => update("payment", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          >
            <option value="Transferencia">Transferencia</option>
            <option value="Domiciliación bancaria">Domiciliación bancaria</option>
            <option value="Efectivo en secretaría">Efectivo en secretaría</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dust mb-2">
          Comentarios (opcional)
        </label>
        <textarea
          name="notes"
          rows={4}
          value={values.notes}
          onChange={(e) => update("notes", e.target.value)}
          className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          placeholder="Material que usas, dudas sobre el alta…"
        ></textarea>
      </div>

      <div className="mt-4 flex items-start">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="w-4 h-4 rounded border-accent focus:ring-accent"
          />
          <span className="text-sm text-dust">
            Acepto el reglamento interno y la política de privacidad
          </span>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="flex-1 bg-accent text-asphalt py-3 px-6 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-accent-soft"
        >
          {formMode === "formspree" && formspreeId
            ? "Enviar a formspree"
            : "Preparar solicitud"}
        </button>
        {formMode === "formspree" && formspreeId && (
          <a
            href={whatsappUrl(`Hola, quiero hacerme socio. Nombre: ${values.firstName} ${values.lastName}. Categoría: ${values.category}. Modalidad: ${values.modality}. Email: ${values.email} · Tel: ${values.phone}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-asphalt/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-asphalt transition-colors hover:border-asphalt"
          >
            WhatsApp
          </a>
        )}
      </div>
    </form>
  );
}

export default MembershipForm;
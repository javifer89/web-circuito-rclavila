"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/content/site";

type FormMode = "mailto" | "formspree";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
};

export function ContactForm({ formMode = "mailto", formspreeId }: { formMode?: FormMode; formspreeId?: string }) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    topic: "Información general",
    message: "",
    consent: false,
  });

  function update<K extends keyof FormValues>(key: K, value: string | boolean) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!values.consent) {
      // Marcar consent como falso si no está marcado
      update("consent", false);
      return;
    }

    // Modo formspree
    if (formMode === "formspree" && formspreeId) {
      // Crear form data y enviarlo a formspree
      const formData = new FormData(event.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      
      // Enviar a formspree
      fetch(`https://formspree.io/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          // Éxito - podría resetear el formulario o mostrar mensaje
          setValues({
            name: "",
            email: "",
            phone: "",
            topic: "Información general",
            message: "",
            consent: false,
          });
        } else {
          throw new Error("Error al enviar");
        }
      })
      .catch(error => {
        console.error("Error enviando a formspree:", error);
      });
      return;
    }

    // Modo mailto (original)
    const mailto = `
      subject: Web · ${values.topic} · ${values.name}
      lines: [
        ["Nombre", values.name],
        ["Email", values.email],
        ["Teléfono", values.phone],
        ["Asunto", values.topic],
      ],
      "",
      "Mensaje:",
      values.message
    `;

    // Abrir cliente de correo
    window.location.href = `mailto:${site.contact.email}?${encodeURIComponent(mailto)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" autoComplete="off">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-dust mb-2">
            Nombre y apellidos
          </label>
          <input
            type="text"
            name="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
            placeholder="Nombre y apellidos"
            autoComplete="name"
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
            Asunto
          </label>
          <select
            name="topic"
            required
            value={values.topic}
            onChange={(e) => update("topic", e.target.value)}
            className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          >
            <option value="Información general">Información general</option>
            <option value="Quiero hacerme socio">Quiero hacerme socio</option>
            <option value="Alquiler de pista">Alquiler de pista</option>
            <option value="Eventos y carreras">Eventos y carreras</option>
            <option value="Prensa y colaboraciones">Prensa y colaboraciones</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dust mb-2">
          Mensaje
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full px-4 py-3 border border-line rounded-md focus:outline-none focus:border-accent"
          placeholder="Cuéntanos qué necesitas..."
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
            He leído y acepto la política de privacidad
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
            : "Preparar mensaje"}
        </button>
        {formMode === "formspree" && formspreeId && (
          <a
            href={whatsappUrl(`Hola, soy ${values.name}. Asunto: ${values.topic}. ${values.message} — Email: ${values.email}${
              values.phone ? ` · Tel: ${values.phone}` : ""
            }`)}
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

export default ContactForm;
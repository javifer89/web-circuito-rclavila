export type EventType = "social" | "campeonato" | "entrenamiento" | "open";

export type CircuitEvent = {
  id: string;
  date: string; // ISO date, no time
  title: string;
  type: EventType;
  summary: string;
  entry?: string;
  status?: string;
};

export const eventTypes: Record<EventType, { label: string; className: string }> = {
  social: { label: "Prueba social", className: "text-dust border-line bg-surface-2" },
  campeonato: { label: "Campeonato", className: "text-asphalt border-accent bg-accent" },
  entrenamiento: { label: "Entrenamiento", className: "text-muted border-line bg-transparent" },
  open: { label: "Open", className: "text-accent-soft border-accent-soft/40 bg-transparent" },
};

// TODO(contenido): sustituir por el calendario real del club.
export const events: CircuitEvent[] = [
  {
    id: "social-diciembre",
    date: "2026-12-13",
    title: "Prueba social de diciembre",
    type: "social",
    summary:
      "Tres mangas clasificatorias y una final por categoría. Inscripción en pista hasta las 09:30.",
    entry: "Socios: 5 € · No socios: 15 €",
  },
  {
    id: "navidad",
    date: "2026-12-20",
    title: "Carrera de Navidad",
    type: "social",
    summary:
      "Jornada abierta con categoría de iniciación y concurso de mecánicos. Comida de club al mediodía.",
    entry: "Socios: 5 € · No socios: 15 €",
  },
  {
    id: "campeonato-1",
    date: "2027-01-17",
    title: "Campeonato Social · 1.ª prueba",
    type: "campeonato",
    summary:
      "Primera cita del campeonato interno. Cuatro categorías, dos clasificatorias y finales.",
    entry: "Socios: 10 € · No socios: 25 €",
  },
  {
    id: "entrenamiento-tecnico",
    date: "2027-01-31",
    title: "Entrenamiento con cronometraje",
    type: "entrenamiento",
    summary:
      "Pista abierta todo el día con transpondedor y tiempos en directo. Sin inscripción previa.",
    status: "Solo socios",
  },
  {
    id: "campeonato-2",
    date: "2027-02-14",
    title: "Campeonato Social · 2.ª prueba",
    type: "campeonato",
    summary: "Segunda prueba puntuable del campeonato interno, con reparto de puntos.",
    entry: "Socios: 10 € · No socios: 25 €",
  },
  {
    id: "open-la-vila",
    date: "2027-03-14",
    title: "Open RC La Vila",
    type: "open",
    summary:
      "Prueba abierta a pilotos de toda la provincia. Dos días de carrera con entrenos el sábado.",
    entry: "Inscripción: 35 €",
  },
];

export function formatEventDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function eventDayMonth(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  return {
    day: new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("es-ES", { month: "short" }).format(date).replace(".", ""),
  };
}

export function upcomingEvents(limit?: number) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

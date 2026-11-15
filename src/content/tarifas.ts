/**
 * Pricing. TODO(contenido): confirmar importes y condiciones con la junta.
 */

export const plans = [
  {
    name: "Socio adulto",
    price: "25 €",
    period: "al mes",
    highlight: true,
    description: "Acceso libre a la pista todos los días del año, de apertura a cierre.",
    features: [
      "Acceso con llave propia 7 días a la semana",
      "Entrenamiento libre sin reserva",
      "Participación en pruebas sociales del club",
      "Cuota de inscripción: 30 € (una vez)",
    ],
  },
  {
    name: "Socio juvenil",
    price: "15 €",
    period: "al mes",
    highlight: false,
    description: "Para socios menores de 18 años, con la misma pista y el mismo acceso.",
    features: [
      "Acceso completo en horario de apertura",
      "Tarifa reducida en escuelas y cursillos",
      "Cuota de inscripción: 20 € (una vez)",
      "Requiere autorización de un tutor legal",
    ],
  },
  {
    name: "Cuota trimestral",
    price: "65 €",
    period: "al trimestre",
    highlight: false,
    description: "Mismas ventajas que la cuota mensual, con un descuento por pago anticipado.",
    features: [
      "Acceso libre durante tres meses naturales",
      "Ahorro de 10 € frente al pago mensual",
      "Renovación automática si se domicilia",
      "Cuota de inscripción: 30 € (una vez)",
    ],
  },
] as const;

export const dayPass = {
  price: "10 €",
  title: "Día completo",
  status: "Próximamente",
  description:
    "Acceso de un día para visitantes, disponible cuando finalice el cerramiento perimetral. Incluye pista y boxes; no incluye material ni coche.",
};

export const included = [
  "Uso de pista y boxes durante todo el horario",
  "Tomas eléctricas y zona de lavado",
  "Cronometraje en las pruebas organizadas",
  "Acceso al calendario de eventos del club",
];

export const notIncluded = [
  "Coche, emisora, baterías o combustible",
  "Transpondedor personal (se puede alquilar en pista)",
  "Seguro de responsabilidad civil deportiva",
  "Licencia federativa anual",
];

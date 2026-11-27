/**
 * Track data. TODO(contenido): confirmar medidas y equipamiento real.
 */

export const specs = [
  { label: "Superficie de la parcela", value: "5.400 m²" },
  { label: "Superficie de pista", value: "1.250 m²" },
  { label: "Tipo de firme", value: "Tierra prensada, con posibilidad de regado" },
  { label: "Escalas", value: "1/8, 1/10 y 1/14" },
  { label: "Categorías", value: "Buggy, truggy, short course y e-buggy" },
  { label: "Ancho mínimo de pista", value: "3,5 m" },
  { label: "Voltaje de boxes", value: "220 V en cada mesa" },
  { label: "Cronometraje", value: "AMB / MyLaps" },
];

export const facilities = [
  //TODO: BOXES EN PROCESO
  {
    title: "Boxes cubiertos",
    description:
      "Zona de boxes con mesa de trabajo y bancada para más de 40 pilotos.",
  },
  //todo: PODIO EN PROCESO, LA ZONA DE MECÁNICOS ESTARÁ EN UN FUTURO, AHORA MISMO SOLO DISPONEMOS DEL CONTENEDOR MARITIMO PARA HACER DE PODIO.
  {
    title: "Podio y zona de mecánicos",
    description:
      "Contenedor de barco sobre el pit lane, aún en proceso de adecuación (escaleras, barandillas, etc.). Podio cubierto con mesa de mecánicos protegida de la lluvia.",
  },
  //TODO: REVISAR COMO ESTA PLANTEADA LA FRASE
  {
    title: "Pit lane",
    description:
      "Entrada y salida de boxes para no cortar el paso a los coches que ruedan.",
  },
  //todo: todavia no esta la zona de limpieza (agua y aire)
  {
    title: "Limpieza y carburación",
    description:
      "Zona de lavado con agua y mesa de carburación separada. No dispone de compresor de aire.",
  },
  {
    title: "Iluminación",
    description:
      "Torres de luz sobre pista y boxes para poder entrenar con luz artificial.",
  },
  //TODO: todavia no hay servicios para los pilotos que acudan al circuito, el acceso sí que esta acotado por el vallado ya finalizado
  {
    title: "Servicios y acceso",
    description:
      "Aseos, cafetería y aparcamiento dentro de la parcela. El vallado perimetral está prácticamente acabado, por lo que el acceso al circuito deberá gestionarse poniéndose en contacto con el club.",
  },
];

export const classes = [
  {
    name: "1/10 eco",
    engine: "Buggy eléctrico",
    note: "La categoría de iniciación sobre tierra. Coches accesibles y carreras ajustadas. Solo eléctrico.",
  },
  {
    name: "1/8 buggy ECO",
    engine: "Buggy eléctrico",
    note: "Cero ruido y menos mantenimiento. Buena opción para entrenar entre semana.",
  },
  {
    name: "1/8 buggy GAS",
    engine: "Buggy nitro",
    note: "La categoría clásica de buggy nitro. Alta participación en pruebas sociales.",
  },
  {
    name: "1/8 truggy ECO",
    engine: "Truggy eléctrico",
    note: "Vía ancha, estable y muy resistente. Ideal para iniciarse en 1/8 eléctrico.",
  },
  {
    name: "1/8 truggy GAS",
    engine: "Truggy nitro",
    note: "Vía ancha, estable y muy resistente. Ideal para iniciarse en 1/8 nitro.",
  },
];

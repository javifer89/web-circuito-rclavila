export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  body: string[];
};

// TODO(contenido): sustituir por noticias reales del club.
export const posts: Post[] = [
  {
    slug: "cerramiento-perimetral",
    date: "2026-11-08",
    title: "Arranca el cerramiento perimetral de la parcela",
    excerpt:
      "Las obras de vallado y cierre del recinto ya están en marcha. La pista sigue operativa para socios durante toda la ejecución.",
    tag: "Instalaciones",
    body: [
      "Esta semana han comenzado los trabajos de cerramiento perimetral de la parcela. La actuación incluye el vallado completo del recinto, la puerta de acceso de vehículos y la señalización de la zona de boxes.",
      "Durante la ejecución de las obras la pista permanece abierta para socios en el horario habitual. Los trabajos se concentran en el perímetro exterior, por lo que no afectan a la zona de boxes ni al pit lane.",
      "Con el cerramiento terminado, el club podrá abrir la instalación al público general y poner en marcha la tarifa de día completo para visitantes.",
    ],
  },
  {
    slug: "resultados-social-octubre",
    date: "2026-10-26",
    title: "Resultados de la prueba social de octubre",
    excerpt:
      "Cuarenta y dos pilotos en pista, con finales decididas por menos de dos segundos en buggy 1/8 y short course.",
    tag: "Resultados",
    body: [
      "La prueba social de octubre reunió a cuarenta y dos pilotos repartidos en cuatro categorías. La jornada arrancó con la pista húmeda y fue secando a lo largo de la mañana, lo que obligó a casi todos a cambiar de neumático entre clasificatorias.",
      "En buggy 1/8 la final se resolvió por menos de dos segundos tras seis minutos de carrera. En short course, la categoría de iniciación, hubo hasta siete pilotos nuevos compitiendo por primera vez.",
      "La clasificación completa está disponible en pista y se publicará en la sección de resultados junto con el resto del campeonato social.",
    ],
  },
  {
    slug: "jornada-puertas-abiertas",
    date: "2026-09-30",
    title: "Jornada de puertas abiertas para nuevos pilotos",
    excerpt:
      "Coche de alquiler, emisora y monitor incluidos. Pensada para quien nunca ha pilotado y quiere probar sin comprar material.",
    tag: "Club",
    body: [
      "El club organiza una jornada de puertas abiertas orientada a quienes nunca han pilotado un coche de radiocontrol. La actividad incluye coche de alquiler, emisora, baterías y un monitor en pista durante toda la sesión.",
      "El objetivo es claro: que cualquiera pueda probar el hobby sin desembolsar el coste de un equipo completo. Las plazas son limitadas y se asignan por orden de inscripción.",
      "Los menores de edad deben acudir acompañados de un tutor legal. Para reservar plaza, escribe al club indicando nombre, edad y teléfono de contacto.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

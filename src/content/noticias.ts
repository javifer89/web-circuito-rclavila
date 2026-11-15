export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  body: string[];
};

// Nueva noticia: Ayuntameto de Villajoyosa cede parcela al RC La Vila
export const ayuntamientoCesionPost: Post = {
  slug: "cesion-parcela-ayuntamiento",
  date: "2026-10-23",
  title: "Ayuntamiento de Villajoyosa cede la parcela al RC La Vila",
  excerpt:
    "El consistorio visitó la pista para conocer la actividad del club y formalizar la cesión del terreno. La visita se compartirá también en los canales municipales como punto de partida del radiocontrol en la ciudad.",
  tag: "Instalaciones",
  body: [
    "El consistorio visitó la pista para conocer de primera mano la actividad del club y formalizar la cesión del terreno.",
    "La visita contó con la presencia de representantes municipales y miembros de la junta directiva del RC La Vila.",
    "Este hito marca el inicio oficial del circuito como instalación municipal, permitiendo al club organizar pruebas y eventos con el apoyo del ayuntamiento.",
    "La noticia también se ha publicado en los canales oficiales del Ayuntamiento de Villajoyosa, destacando el compromiso del consistorio con el deporte del radiocontrol en la ciudad.",
  ],
};

// Posts existentes (pronto se sustituirán por contenido real del club)
export const posts: Post[] = [
  ayuntamientoCesionPost,
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
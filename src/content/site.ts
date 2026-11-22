/**
 * Central site configuration.
 * Replace the TODO values with the club's real data before going live.
 */

export const site = {
  name: "RC La Vila",
  legalName: "Circuito de Radiocontrol RC La Vila",
  claim: "El circuito de radiocontrol de la Marina Baixa",
  description:
    "Circuito permanente de radiocontrol de tierra en Villajoyosa (Alicante). Buggy, truggy y short course, con boxes cubiertos, iluminación y cronometraje.",
  url: "https://www.rclavila.com",

  /** Update this when the content changes; it drives the sitemap dates. */
  lastUpdated: "2026-11-15",
  // TODO(contenido): sustituir por los datos reales de contacto.
  contact: {
    email: "info@rclavila.com",
    phone: "+34 600 000 000",
    whatsapp: "34600000000",
    instagram: "https://www.instagram.com/rclavila",
    facebook: "https://www.facebook.com/rclavila",
    tiktok: "https://www.tiktok.com/@rclavila",
    youtube: "",
    mapsQuery: "RC La Vila Villajoyosa Alicante",
  },

  // TODO(contenido): dirección exacta y enlace real de Google Maps.
  address: {
    street: "Partida Atalayas, 1",
    postalCode: "03570",
    town: "Villajoyosa",
    province: "Alicante",
    region: "Comunidad Valenciana",
    mapsQuery: "RC La Vila Villajoyosa Alicante",
  },

  hours: [
    { days: "Lunes a viernes", time: "10:00 – 20:00" },
    { days: "Sábados y domingos", time: "09:00 – 21:00" },
  ],

  // TODO(contenido): ajustar el mensaje según el estado real de las obras.
  works: {
    active: true,
    title: "Instalaciones en mejora",
    message:
      "Cerramiento perimetral en ejecución. El acceso a socios se mantiene abierto durante las obras.",
  },
} as const;

export const nav = [
  { href: "/el-circuito", label: "El circuito" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/calendario", label: "Calendario" },
  { href: "/noticias", label: "Noticias" },
  { href: "/galeria", label: "Galería" },
  { href: "/el-club", label: "El club" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function whatsappUrl(message = "Hola, me gustaría recibir información sobre el circuito.") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.street)}`;
}

export function formattedAddress() {
  const { street, postalCode, town, province } = site.address;
  return `${street}, ${postalCode} ${town} (${province})`;
}

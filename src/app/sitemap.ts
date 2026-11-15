import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { posts } from "@/content/noticias";

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/el-circuito", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tarifas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/hazte-socio", priority: 0.9, changeFrequency: "monthly" },
  { path: "/calendario", priority: 0.8, changeFrequency: "weekly" },
  { path: "/noticias", priority: 0.7, changeFrequency: "weekly" },
  { path: "/galeria", priority: 0.6, changeFrequency: "monthly" },
  { path: "/el-club", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(`${site.lastUpdated}T00:00:00`);

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: updated,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/noticias/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

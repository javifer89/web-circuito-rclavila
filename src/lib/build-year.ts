/**
 * Copyright year resolved once at build time.
 * Reading `new Date()` during prerender is rejected by Cache Components,
 * so the value is cached instead of recomputed on every render.
 */
export async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

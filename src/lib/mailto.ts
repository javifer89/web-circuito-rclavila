export function formatFields(fields: Array<[string, string | undefined]>): string[] {
  return fields
    .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`);
}

export function buildMailto({
  to,
  subject,
  lines,
}: {
  to: string;
  subject: string;
  lines: string[];
}): string {
  // Keep the body within the practical URL length that mail clients accept.
  const body = lines.join("\n").slice(0, 1800);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

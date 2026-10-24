const DEFAULT_SITE_URL = "https://eastway-logistics.vercel.app";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost.replace(/\/$/, "")}`;

  return DEFAULT_SITE_URL;
}

export const SITE_URL = resolveSiteUrl();

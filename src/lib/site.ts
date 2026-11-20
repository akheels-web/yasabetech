// Override at build time for your production domain or a staging environment.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://misyatech.com"
).replace(/\/$/, "");

export const BRAND_NAME = "Misyatech";
export const BRAND_NAME_AR = "ميسياتك";
export const BRAND_DOMAIN = "misyatech.com";

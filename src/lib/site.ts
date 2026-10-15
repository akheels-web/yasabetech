// Override at build time for your production domain or a staging environment.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://yasabetech.com"
).replace(/\/$/, "");

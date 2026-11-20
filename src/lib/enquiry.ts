export const SALES_EMAIL = "sales@misyatech.com";

export const PROJECT_TIMELINES = [
  "Planning / exploring options",
  "Within 1–2 weeks",
  "Within a month",
  "Within 3 months",
  "Tender / BOQ pricing",
] as const;

export const PROJECT_TIMELINES_AR: Record<(typeof PROJECT_TIMELINES)[number], string> = {
  "Planning / exploring options": "التخطيط واستكشاف الخيارات",
  "Within 1–2 weeks": "خلال أسبوع إلى أسبوعين",
  "Within a month": "خلال شهر واحد",
  "Within 3 months": "خلال ٣ أشهر",
  "Tender / BOQ pricing": "مناقصة أو تسعير جدول كميات (BOQ)",
};

import { handleEnquiry } from "../../server/enquiry.mjs";

interface Env {
  ZOHO_EMAIL_API_KEY?: string;
  ZOHO_EMAIL_FROM?: string;
  ZOHO_EMAIL_API_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

export function onRequest({ request, env }: { request: Request; env: Env }) {
  return handleEnquiry(request, env);
}

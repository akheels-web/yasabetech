export interface EnquiryEnv {
  ZOHO_EMAIL_API_KEY?: string;
  ZOHO_EMAIL_FROM?: string;
  ZOHO_EMAIL_API_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

export function handleEnquiry(
  request: Request,
  env: EnquiryEnv,
  options?: { fetchImpl?: typeof fetch },
): Promise<Response>;

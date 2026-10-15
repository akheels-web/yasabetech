const SALES_EMAIL = "sales@yasabetech.com";
const MAX_BODY_BYTES = 16384;
const SERVICES = {
  networking: "Enterprise networking",
  ai: "Private AI, IoT & smart systems",
  "managed-it": "Cloud, cybersecurity & managed IT",
  telecom: "Mobility & telecom",
  "av-elv": "AV, communications & building systems",
  digital: "Digital platforms & services",
  "hardware-boq": "Hardware sourcing / BOQ",
};
const TIMELINES = [
  "Planning / exploring options",
  "Within 1–2 weeks",
  "Within a month",
  "Within 3 months",
  "Tender / BOQ pricing",
];
const unavailableMessage = `Online enquiries are temporarily unavailable. Please email ${SALES_EMAIL}.`;
const reply = (status, message, extra = {}) =>
  Response.json(
    { message, ...extra },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
const singleLine = (value, max, required = false) =>
  typeof value === "string" &&
  value.length <= max &&
  !/[\r\n\u0000-\u001f\u007f]/.test(value) &&
  (!required || value.trim().length > 0);

async function readBody(request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("invalid");
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("oversized");
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}

// Credentials come only from Pages runtime bindings; this module is never imported by the client.
export async function handleEnquiry(request, env, { fetchImpl = fetch } = {}) {
  if (request.method !== "POST")
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "POST", "Cache-Control": "no-store" },
    });
  const url = new URL(request.url);
  if (request.headers.get("Origin") !== url.origin)
    return reply(403, "Please submit your enquiry from this website.");
  if (
    request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() !==
    "application/json"
  )
    return reply(415, "Please send a JSON enquiry.");
  if (Number(request.headers.get("Content-Length")) > MAX_BODY_BYTES)
    return reply(
      413,
      "Your enquiry is too long. Please shorten the project details.",
    );
  let data;
  try {
    data = await readBody(request);
  } catch (error) {
    return reply(
      error.message === "oversized" ? 413 : 400,
      "Please check your enquiry details and try again.",
    );
  }
  if (!data || typeof data !== "object" || Array.isArray(data))
    return reply(400, "Please check your enquiry details.");
  const {
    company,
    email,
    phone = "",
    timeline,
    scope = "",
    services,
    turnstileToken,
    website = "",
  } = data;
  if (
    !singleLine(company, 120, true) ||
    !singleLine(email, 180, true) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !singleLine(phone, 40) ||
    !TIMELINES.includes(timeline) ||
    typeof scope !== "string" ||
    scope.length > 2000 ||
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(scope) ||
    !Array.isArray(services) ||
    services.length < 1 ||
    services.length > 7 ||
    services.some(
      (service) =>
        typeof service !== "string" || !Object.hasOwn(SERVICES, service),
    ) ||
    typeof website !== "string" ||
    website !== ""
  )
    return reply(
      400,
      "Please check your company, email, services and project details.",
    );
  if (
    !env.ZOHO_EMAIL_API_KEY ||
    !env.ZOHO_EMAIL_FROM ||
    !env.TURNSTILE_SECRET_KEY
  )
    return reply(503, unavailableMessage);
  if (
    typeof turnstileToken !== "string" ||
    !turnstileToken ||
    turnstileToken.length > 2048
  )
    return reply(400, "Please complete the verification and try again.");

  let endpoint;
  try {
    endpoint = new URL(
      env.ZOHO_EMAIL_API_URL || "https://cpaas.zoho.com/v1.1/email",
    );
    if (
      endpoint.protocol !== "https:" ||
      !/^(api\.zeptomail|cpaas\.zoho)\.(com|in|eu|com\.au|jp|ca|sa)$/.test(
        endpoint.hostname,
      ) ||
      endpoint.pathname !== "/v1.1/email" ||
      endpoint.username ||
      endpoint.password ||
      endpoint.port ||
      endpoint.search
    )
      throw new Error("invalid endpoint");
    if (
      !singleLine(env.ZOHO_EMAIL_FROM, 180, true) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(env.ZOHO_EMAIL_FROM)
    )
      throw new Error("invalid sender");
  } catch {
    return reply(503, unavailableMessage);
  }

  let verification;
  try {
    const response = await fetchImpl(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!response.ok)
      return reply(
        503,
        "Verification is unavailable. Please try again shortly.",
      );
    verification = await response.json();
  } catch {
    return reply(503, "Verification is unavailable. Please try again shortly.");
  }
  if (
    !verification ||
    !verification.success ||
    verification.hostname !== url.hostname ||
    verification.action !== "enquiry"
  )
    return reply(403, "Verification expired or failed. Please verify again.");

  const reference = crypto.randomUUID();
  const names = [...new Set(services)]
    .map((service) => SERVICES[service])
    .join(", ");
  const textbody = `New website enquiry\nReference: ${reference}\n\nCompany: ${company.trim()}\nWork email: ${email.trim()}\nPhone: ${phone.trim() || "Not provided"}\nServices: ${names}\nTimeline: ${timeline}\n\nProject details:\n${scope.trim() || "To be discussed"}`;
  try {
    const apiKey = env.ZOHO_EMAIL_API_KEY.trim();
    const response = await fetchImpl(endpoint.href, {
      method: "POST",
      redirect: "error",
      signal: AbortSignal.timeout(12000),
      headers: {
        Authorization: apiKey.startsWith("Zoho-enczapikey ")
          ? apiKey
          : `Zoho-enczapikey ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from: { address: env.ZOHO_EMAIL_FROM, name: "Yasabe website" },
        to: [{ email_address: { address: SALES_EMAIL, name: "Yasabe Sales" } }],
        reply_to: [{ address: email.trim(), name: company.trim() }],
        subject: `Website enquiry — ${company.trim()}`,
        textbody,
        client_reference: reference,
        track_opens: false,
        track_clicks: false,
      }),
    });
    const result = await response.json();
    if (
      !response.ok ||
      !Array.isArray(result.data) ||
      !result.data.some((item) => item.code === "EM_104")
    )
      return reply(
        502,
        `We couldn’t confirm your submission. Please try again or email ${SALES_EMAIL}.`,
      );
  } catch {
    return reply(
      502,
      `We couldn’t confirm your submission. Please try again or email ${SALES_EMAIL}.`,
    );
  }
  return reply(200, "Your enquiry has been accepted for email delivery.", {
    reference,
  });
}

import test from "node:test";
import assert from "node:assert/strict";
import { handleEnquiry } from "../server/enquiry.mjs";

const env = {
  ZOHO_EMAIL_API_KEY: "fake-test-key",
  ZOHO_EMAIL_FROM: "website@yasabetech.com",
  TURNSTILE_SECRET_KEY: "fake-test-secret",
};
const valid = {
  company: "Example Company",
  email: "buyer@example.com",
  phone: "+966 11 123 4567",
  timeline: "Within a month",
  scope: "Three sites and a private AI workload.",
  services: ["ai", "networking"],
  turnstileToken: "fake-test-token",
  website: "",
};
const request = (data = valid, headers = {}) =>
  new Request("https://yasabetech.com/api/enquiry", {
    method: "POST",
    headers: {
      Origin: "https://yasabetech.com",
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
const verification = (data = {}) =>
  Response.json({
    success: true,
    hostname: "yasabetech.com",
    action: "enquiry",
    ...data,
  });
const forbiddenFetch = async () => {
  throw new Error("External fetch must not run");
};

test("valid enquiry is sent only to sales, from the verified sender, with visitor Reply-To", async () => {
  const calls = [];
  const response = await handleEnquiry(request(), env, {
    fetchImpl: async (url, options) => {
      calls.push({ url, options });
      return calls.length === 1
        ? verification()
        : Response.json({ data: [{ code: "EM_104" }], message: "OK" });
    },
  });
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.match(result.reference, /^[a-f0-9-]{36}$/);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].options.body.get("secret"), env.TURNSTILE_SECRET_KEY);
  assert.equal(calls[1].url, "https://cpaas.zoho.com/v1.1/email");
  assert.equal(
    calls[1].options.headers.Authorization,
    "Zoho-enczapikey fake-test-key",
  );
  const payload = JSON.parse(calls[1].options.body);
  assert.equal(payload.to[0].email_address.address, "sales@yasabetech.com");
  assert.equal(payload.from.address, "website@yasabetech.com");
  assert.equal(payload.reply_to[0].address, "buyer@example.com");
  assert.match(payload.textbody, /Three sites/);
  assert.match(payload.textbody, /Private AI, IoT/);
  assert.equal(payload.track_opens, false);
});

test("visitor-supplied recipient and sender cannot override mail routing", async () => {
  let outbound;
  await handleEnquiry(
    request({
      ...valid,
      to: "attacker@example.com",
      from: "spoof@example.com",
    }),
    env,
    {
      fetchImpl: async (url, options) => {
        if (url.includes("siteverify")) return verification();
        outbound = JSON.parse(options.body);
        return Response.json({ data: [{ code: "EM_104" }] });
      },
    },
  );
  assert.equal(outbound.to[0].email_address.address, "sales@yasabetech.com");
  assert.equal(outbound.from.address, env.ZOHO_EMAIL_FROM);
});

for (const [name, changes] of [
  ["invalid email", { email: "not-an-email" }],
  ["header injection", { company: "Company\r\nBcc: attacker@example.com" }],
  ["unknown service", { services: ["constructor"] }],
  ["no service", { services: [] }],
  ["unknown timeline", { timeline: "next-century" }],
  ["oversized scope", { scope: "x".repeat(2001) }],
  ["honeypot", { website: "https://spam.example" }],
])
  test(`rejects ${name} before contacting providers`, async () => {
    const response = await handleEnquiry(
      request({ ...valid, ...changes }),
      env,
      { fetchImpl: forbiddenFetch },
    );
    assert.equal(response.status, 400);
  });

test("missing configuration fails closed without claiming success", async () => {
  const response = await handleEnquiry(
    request(),
    {},
    { fetchImpl: forbiddenFetch },
  );
  assert.equal(response.status, 503);
  assert.equal((await response.json()).reference, undefined);
});

for (const [name, changes] of [
  ["failed token", { success: false }],
  ["wrong hostname", { hostname: "other.example" }],
  ["wrong action", { action: "login" }],
])
  test(`rejects ${name} without sending mail`, async () => {
    let calls = 0;
    const response = await handleEnquiry(request(), env, {
      fetchImpl: async () => {
        calls++;
        return verification(changes);
      },
    });
    assert.equal(response.status, 403);
    assert.equal(calls, 1);
  });

test("email provider errors are not exposed to the visitor", async () => {
  const response = await handleEnquiry(request(), env, {
    fetchImpl: async (url) =>
      url.includes("siteverify")
        ? verification()
        : Response.json(
            { message: "private-provider-diagnostic" },
            { status: 401 },
          ),
  });
  assert.equal(response.status, 502);
  assert.doesNotMatch(
    await response.text(),
    /private-provider-diagnostic|fake-test-key/,
  );
});

test("unexpected provider success response cannot produce a success message", async () => {
  const response = await handleEnquiry(request(), env, {
    fetchImpl: async (url) =>
      url.includes("siteverify")
        ? verification()
        : Response.json({ unexpected: true }),
  });
  assert.equal(response.status, 502);
});

test("malformed verification response is rejected without sending mail", async () => {
  let calls = 0;
  const response = await handleEnquiry(request(), env, {
    fetchImpl: async () => {
      calls++;
      return Response.json(null);
    },
  });
  assert.equal(response.status, 403);
  assert.equal(calls, 1);
});

test("rejects other origins, unsupported content types and oversized bodies", async () => {
  assert.equal(
    (
      await handleEnquiry(
        request(valid, { Origin: "https://other.example" }),
        env,
        { fetchImpl: forbiddenFetch },
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await handleEnquiry(
        request(valid, { "Content-Type": "text/plain" }),
        env,
        { fetchImpl: forbiddenFetch },
      )
    ).status,
    415,
  );
  assert.equal(
    (
      await handleEnquiry(
        request({ ...valid, unexpected: "x".repeat(17000) }),
        env,
        { fetchImpl: forbiddenFetch },
      )
    ).status,
    413,
  );
  assert.equal(
    (
      await handleEnquiry(
        new Request("https://yasabetech.com/api/enquiry"),
        env,
        { fetchImpl: forbiddenFetch },
      )
    ).status,
    405,
  );
});

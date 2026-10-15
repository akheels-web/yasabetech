"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};

export function EnquiryVerification({
  siteKey,
  onToken,
}: {
  siteKey: string;
  onToken: (token: string) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const tokenCallback = useRef(onToken);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    tokenCallback.current = onToken;
  }, [onToken]);
  useEffect(() => {
    const turnstile = (window as Window & { turnstile?: Turnstile }).turnstile;
    if (!loaded || !turnstile || !container.current) return;
    const id = turnstile.render(container.current, {
      sitekey: siteKey,
      action: "enquiry",
      theme: "light",
      size: "flexible",
      callback: (token: string) => {
        tokenCallback.current(token);
        setFailed(false);
      },
      "expired-callback": () => tokenCallback.current(""),
      "error-callback": () => {
        tokenCallback.current("");
        setFailed(true);
      },
    });
    return () => {
      turnstile.remove(id);
      tokenCallback.current("");
    };
  }, [loaded, siteKey]);
  return (
    <>
      <Script
        id="enquiry-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
      <div ref={container} className="min-h-[65px]" />
      {failed && (
        <p role="status" className="text-xs text-slate-600">
          Verification could not load. Check your connection and try again, or
          email our team directly.
        </p>
      )}
    </>
  );
}

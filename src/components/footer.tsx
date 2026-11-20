"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Clock, Copy, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { RFQModal } from "@/components/rfq-modal";
import { Separator } from "@/components/ui/separator";
import { SALES_EMAIL } from "@/lib/enquiry";

export function Footer() {
  const { isRtl, t } = useLanguage();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [gulfTime, setGulfTime] = useState("");
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setGulfTime(`${formatted} GST`);
      } catch {
        setGulfTime("UTC+4");
      }
    };

    const rafId = window.requestAnimationFrame(updateClock);
    const interval = window.setInterval(updateClock, 30000);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearInterval(interval);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SALES_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback safely if clipboard permissions are restricted
    }
  };

  const handleWatermarkMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = footerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--fx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--fy", `${event.clientY - rect.top}px`);
  };

  return (
    <footer
      ref={footerRef}
      onPointerMove={handleWatermarkMove}
      className="relative overflow-hidden bg-[#050E1E] text-[#F4F8FF] border-t border-[#93C5FD]/15"
    >
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-65"
      />

      <div className="site-container relative z-10 pt-16 lg:pt-20 pb-8">
        {/* Integrated Executive CTA Band */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center pb-14 border-b border-[#93C5FD]/15">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7DD3FC] mb-3">
              {t.footer.ctaEyebrow}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.08]">
              {t.footer.ctaTitle}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <MagneticButton
              variant="azure"
              size="lg"
              label={t.footer.ctaButton}
              onClick={() => setQuoteOpen(true)}
            />

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#93C5FD]/25 bg-white/6 px-4 text-xs sm:text-sm font-semibold text-[#DCE6F5] transition-colors hover:border-[#38BDF8] hover:text-white cursor-pointer"
            >
              {copied ? (
                <>
                  <Check aria-hidden="true" className="h-4 w-4 text-[#38BDF8]" />
                  <span>{t.footer.copiedEmail}</span>
                </>
              ) : (
                <>
                  <Copy aria-hidden="true" className="h-4 w-4 text-[#7DD3FC]" />
                  <span>{t.footer.copyEmail}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 py-14">
          <div>
            <Link
              href="/"
              aria-label={isRtl ? "الرئيسية - ميسياتك" : "Misyatech home"}
              className="inline-block"
            >
              <BrandLogo variant="dark" isArabic={isRtl} />
            </Link>
            <p className="mt-5 max-w-xs text-xs sm:text-sm leading-relaxed text-[#CBD5E1]">
              {t.footer.summary}
            </p>
            <span className="mt-4 inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#7DD3FC]">
              {t.brandTagline}
            </span>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#7DD3FC] mb-5">
              {t.footer.expertiseTitle}
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#CBD5E1]">
              {t.footer.linksExpertise.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#7DD3FC] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#7DD3FC] mb-5">
              {t.footer.discoverTitle}
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#CBD5E1]">
              {t.footer.linksDiscover.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#7DD3FC] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#7DD3FC] mb-5">
              {t.footer.connectTitle}
            </h3>
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white hover:text-[#7DD3FC] transition-colors"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-[#38BDF8]" />
              <span>{SALES_EMAIL}</span>
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>

            <p className="flex items-start gap-2 text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#38BDF8] mt-0.5"
              />
              <span>{t.footer.regions}</span>
            </p>

            {gulfTime && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#93C5FD]/20 bg-[#0D1F3C] px-3 py-1.5 text-[11px] font-mono text-[#BAE6FD]">
                <Clock aria-hidden="true" className="h-3.5 w-3.5 text-[#38BDF8]" />
                <span>
                  {t.footer.timeLabel}: {gulfTime}
                </span>
              </div>
            )}
          </div>
        </div>

        <Separator tone="dark" className="mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-400">
          <span>
            © {new Date().getFullYear()} {t.footer.copyright}
          </span>
          <a
            href="#main-content"
            className="font-semibold text-[#7DD3FC] hover:text-white transition-colors"
          >
            {t.footer.backToTop}
          </a>
        </div>

        {/* Signature Interactive Oversized Architectural Wordmark */}
        <div
          aria-hidden="true"
          className="mt-8 select-none overflow-hidden text-center"
        >
          <span className="footer-wordmark-lit block font-heading text-[clamp(3.6rem,14vw,11.5rem)] font-bold leading-[0.86] tracking-[0.04em]">
            MISYATECH
          </span>
        </div>
      </div>

      <RFQModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </footer>
  );
}

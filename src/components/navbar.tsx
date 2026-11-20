"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { Button } from "@/components/ui/button";
import { RFQModal } from "@/components/rfq-modal";
import { SALES_EMAIL } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { lang, isRtl, toggleLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const links = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.solutions, href: "/solutions" },
    { name: t.nav.about, href: "/about" },
  ];

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        toggleRef.current?.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  const isCurrent = (href: string) =>
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  return (
    <>
      <div className="bg-[#050E1E] text-[#DCE6F5] border-b border-[#93C5FD]/15 text-[11px]">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 py-1.5">
          <span className="truncate font-medium tracking-wide">
            {t.utilityBarLeft}
          </span>
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-[#7DD3FC] hover:text-white transition-colors shrink-0"
          >
            <span>{SALES_EMAIL}</span>
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#DCE6F5]/90 bg-white/95 backdrop-blur-md">
        <div className="site-container flex h-20 sm:h-[86px] items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={isRtl ? "الرئيسية - ميسياتك" : "Misyatech home"}
            className="shrink-0 focus-visible:rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            <BrandLogo variant="light" isArabic={isRtl} />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8"
          >
            {links.map((link) => {
              const current = isCurrent(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "relative py-7 text-[13.5px] font-semibold transition-colors",
                    current
                      ? "text-[#07142B]"
                      : "text-[#4A5E7A] hover:text-[#1D4ED8]",
                  )}
                >
                  {link.name}
                  {current && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-5 inset-x-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.nav.langLabel}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#DCE6F5] bg-[#F4F8FF] px-3.5 text-xs font-bold text-[#07142B] transition-all hover:border-[#38BDF8] hover:bg-[#EAF2FF] hover:text-[#1D4ED8]"
            >
              <Globe aria-hidden="true" className="h-3.5 w-3.5 text-[#1D4ED8]" />
              <span>{t.nav.langToggle}</span>
            </button>

            <MagneticButton
              variant="default"
              label={t.nav.cta}
              onClick={() => setQuoteOpen(true)}
            />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.nav.langLabel}
              className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-[#DCE6F5] bg-[#F4F8FF] px-3 text-xs font-bold text-[#07142B]"
            >
              <Globe aria-hidden="true" className="h-3.5 w-3.5 text-[#1D4ED8]" />
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>

            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE6F5] bg-white text-[#07142B]"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="md:hidden site-container flex flex-col gap-1 border-t border-[#DCE6F5] py-4"
          >
            {links.map((link) => {
              const current = isCurrent(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3.5 border-b border-[#DCE6F5] text-[15px] font-semibold",
                    current ? "text-[#1D4ED8]" : "text-[#08152B]",
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#1D4ED8]" />
                </Link>
              );
            })}
            <Button
              variant="default"
              className="mt-4 w-full"
              onClick={() => {
                setMenuOpen(false);
                setQuoteOpen(true);
              }}
            >
              {t.nav.cta}
              <ArrowUpRight aria-hidden="true" className="ms-2 h-4 w-4" />
            </Button>
          </nav>
        )}
      </header>

      <RFQModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
}

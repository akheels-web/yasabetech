"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RFQModal } from "@/components/rfq-modal";

const links = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "About Yasabe", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
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
      <div className="utility-bar">
        <div className="site-container">
          <span>Enterprise networking, private AI & managed IT</span>
          <a href="mailto:sales@yasabetech.com">
            Let’s talk about your next project{" "}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link
            href="/"
            aria-label="Yasabe Technologies home"
            className="brand-link"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.webp"
              alt="Yasabe Technologies"
              width={180}
              height={54}
              priority
              className="brand-image"
            />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Button
            onClick={() => setQuoteOpen(true)}
            variant="brand"
            className="header-cta"
          >
            Discuss your project <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav site-container"
          >
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
            <Button
              variant="brand"
              onClick={() => {
                setMenuOpen(false);
                setQuoteOpen(true);
              }}
            >
              Discuss your project <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        )}
      </header>
      <RFQModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
}

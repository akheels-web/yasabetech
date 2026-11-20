"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroShowcaseProps {
  onOpenQuote: (trigger?: HTMLButtonElement | null, category?: string, scope?: string) => void;
}

export function HeroShowcase({ onOpenQuote }: HeroShowcaseProps) {
  const { t } = useLanguage();
  const scenes = t.hero.scenes;
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const ratio = Math.min(1, Math.max(0, window.scrollY / 680));
      setScrollFactor(ratio);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const currentScene = scenes[activeIdx] ?? scenes[0];

  return (
    <section
      aria-labelledby="home-title"
      className="relative overflow-hidden bg-[#07142B] text-[#F4F8FF]"
    >
      {/* Crossfading 3-Scene Parallax Image Stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollFactor * 54}px, 0) scale(${1.04 + scrollFactor * 0.06})`,
        }}
      >
        {scenes.map((scene, idx) => (
          <Image
            key={scene.id}
            src={scene.image}
            alt={scene.alt}
            fill
            sizes="100vw"
            preload={idx === 0}
            className={cn(
              "object-cover object-center brightness-[1.03] saturate-[1.06] transition-opacity duration-700",
              idx === activeIdx ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      {/* Optical Royal Indigo-Violet Directional Veil + Top-Right Prism Wash */}
      <div
        aria-hidden="true"
        className="img-veil-hero pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#7C3AED]/18 via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0"
      />

      <div className="site-container relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-end">
          {/* Left Monumental Proposition */}
          <div>
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7DD3FC] mb-5">
              <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#A78bfa]" />
              <span>{t.hero.eyebrow}</span>
            </p>

            <h1
              id="home-title"
              className="font-heading text-4xl sm:text-6xl lg:text-[74px] font-semibold leading-[1.04] text-white text-balance"
            >
              {t.hero.titleStart}{" "}
              <span className="bg-gradient-to-r from-[#7DD3FC] via-[#C4B5FD] to-[#38BDF8] bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#DCE6F5]">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="azure"
                size="lg"
                label={t.hero.primaryCta}
                onClick={(event) => onOpenQuote(event.currentTarget)}
              />

              <Button variant="glass" size="lg" asChild>
                <Link href="/solutions">
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="ms-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1"
                  />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Interactive Regional Lens Selector */}
          <div className="rounded-2xl border border-[#A78BFA]/30 bg-[#0F1035]/72 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
            <div
              role="tablist"
              aria-label="Regional lens"
              className="grid grid-cols-3 gap-1.5 rounded-xl border border-[#A78BFA]/20 bg-[#0B0D2B]/75 p-1"
            >
              {scenes.map((scene, idx) => {
                const active = idx === activeIdx;
                return (
                  <button
                    key={scene.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "rounded-lg px-2.5 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                      active
                        ? "bg-gradient-to-r from-[#2563EB] to-[#6D28D9] text-white shadow-sm"
                        : "text-[#CBD5E1] hover:text-white hover:bg-white/8",
                    )}
                  >
                    {scene.tab}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-2.5 min-h-[118px]">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#7DD3FC]">
                <span>{currentScene.coord}</span>
                <span>0{activeIdx + 1} / 0{scenes.length}</span>
              </div>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-white">
                {currentScene.label}
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#CBD5E1]">
                {currentScene.caption}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#93C5FD]/15 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {scenes.map((scene, idx) => (
                  <button
                    key={scene.id}
                    type="button"
                    aria-label={scene.tab}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                      idx === activeIdx
                        ? "w-8 bg-[#38BDF8]"
                        : "w-2.5 bg-[#93C5FD]/30 hover:bg-[#93C5FD]/60",
                    )}
                  />
                ))}
              </div>
              <a
                href="#delivery-journey"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7DD3FC] hover:text-white transition-colors"
              >
                <span>{t.hero.bottomLink}</span>
                <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

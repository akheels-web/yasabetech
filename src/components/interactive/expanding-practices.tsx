"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { cn } from "@/lib/utils";

interface ExpandingPracticesProps {
  onOpenQuote: (
    trigger?: HTMLButtonElement | null,
    category?: string,
    scope?: string,
  ) => void;
}

export function ExpandingPractices({ onOpenQuote }: ExpandingPracticesProps) {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrismMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${event.clientX - rect.left}px`);
    el.style.setProperty("--py", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="site-container py-16 lg:py-24 scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
            {t.practices.eyebrow}
          </p>
          <h2
            id="expertise-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#08152B]"
          >
            {t.practices.title}
          </h2>
        </div>

        <div className="max-w-sm space-y-2.5">
          <p className="text-xs sm:text-sm text-[#4A5E7A] leading-relaxed">
            {t.practices.aside}
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] hover:text-[#07142B] transition-colors"
          >
            <span>{t.practices.allSolutions}</span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Desktop Expanding Architectural Accordion Panels */}
      <div className="flex flex-col lg:flex-row gap-4 lg:h-[540px]">
        {t.practices.items.map((item, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIdx(idx)}
              onPointerMove={handlePrismMove}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-[#1B1145] transition-[flex-grow,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "lg:min-w-0",
                isActive
                  ? "lg:flex-[2.3] border-[#A78BFA]/55 shadow-[0_24px_54px_-22px_rgba(91,33,182,0.45)]"
                  : "lg:flex-[0.85] border-[#DCE6F5]/40 hover:border-[#A78BFA]/45",
              )}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className={cn(
                  "object-cover transition-all duration-700",
                  isActive
                    ? "scale-[1.04] opacity-100 saturate-110"
                    : "scale-100 opacity-95 saturate-[0.95]",
                )}
              />

              {/* Optical Purple-Indigo Veil (never muddying photography with black) */}
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute inset-0 transition-opacity duration-500",
                  isActive ? "img-veil-panel-active" : "img-veil-panel-idle",
                )}
              />

              {/* Cursor-tracked lavender/sky prism sheen */}
              <div
                aria-hidden="true"
                className="img-prism-sheen pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Clickable selector overlay for collapsed panels */}
              {!isActive && (
                <button
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={item.label}
                  className="hidden lg:flex absolute inset-0 z-10 flex-col justify-between p-6 text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-heading text-sm font-bold text-[#DDD6FE]">
                      {item.index}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 text-[#C4B5FD]/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>

                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DDD6FE] mb-2">
                      {item.label}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white leading-snug">
                      {item.tab}
                    </h3>
                  </div>
                </button>
              )}

              {/* Expanded Content */}
              <div
                className={cn(
                  "relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 text-[#F4F8FF]",
                  isActive ? "flex" : "flex lg:hidden",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#C4B5FD]/35 bg-[#1B1145]/75 px-3 py-1 text-xs font-semibold text-[#E0E7FF] backdrop-blur-md">
                    <span>{item.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.label}</span>
                  </span>
                </div>

                <div className="mt-10 lg:mt-auto space-y-4 max-w-xl">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#E0E7FF]">
                    {item.description}
                  </p>

                  <ul className="grid gap-2 pt-1">
                    {item.includes.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-xs sm:text-[13px] text-white"
                      >
                        <Check
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-[#7DD3FC]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <MagneticButton
                      variant="azure"
                      size="default"
                      label={t.practices.discussCta}
                      onClick={(event) =>
                        onOpenQuote(
                          event.currentTarget,
                          item.id,
                          `${item.label} — ${item.title}`,
                        )
                      }
                    />
                    <Link
                      href={`/solutions#${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#DDD6FE] hover:text-white transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 rtl:rotate-180"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

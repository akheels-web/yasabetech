"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { TiltCard } from "@/components/interactive/tilt-card";
import { Button } from "@/components/ui/button";
import { solutionAreas } from "@/lib/solution-areas";
import { cn } from "@/lib/utils";

interface CapabilityIndexProps {
  onOpenQuote: (
    trigger?: HTMLButtonElement | null,
    category?: string,
    scope?: string,
  ) => void;
}

export function CapabilityIndex({ onOpenQuote }: CapabilityIndexProps) {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [selectedId, setSelectedId] = useState<string>(solutionAreas[0].id);

  const selectedArea =
    solutionAreas.find((area) => area.id === selectedId) ?? solutionAreas[0];
  const title = isAr ? selectedArea.titleAr : selectedArea.title;
  const description = isAr
    ? selectedArea.descriptionAr
    : selectedArea.description;
  const useCases = isAr ? selectedArea.useCasesAr : selectedArea.useCases;
  const includes = isAr ? selectedArea.includesAr : selectedArea.includes;

  return (
    <section
      aria-labelledby="portfolio-title"
      className="site-container py-16 lg:py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
            {t.capabilityIndex.eyebrow}
          </p>
          <h2
            id="portfolio-title"
            className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]"
          >
            {t.capabilityIndex.title}
          </h2>
          <p className="mt-2 text-sm text-[#4A5E7A]">
            {t.capabilityIndex.subtitle}
          </p>
        </div>

        <Button variant="outline" size="lg" asChild>
          <Link href="/solutions#calculator">
            <span>{t.capabilityIndex.plannerCta}</span>
            <ArrowUpRight aria-hidden="true" className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
        {/* Left Hairline Architectural Index (01 - 08) */}
        <div className="border-t border-[#DCE6F5]">
          {solutionAreas.map((area, idx) => {
            const active = area.id === selectedArea.id;
            const rowTitle = isAr ? area.titleAr : area.title;
            const rowNum = String(idx + 1).padStart(2, "0");

            return (
              <button
                key={area.id}
                type="button"
                onMouseEnter={() => setSelectedId(area.id)}
                onFocus={() => setSelectedId(area.id)}
                onClick={() => setSelectedId(area.id)}
                className={cn(
                  "group w-full flex items-center justify-between gap-4 border-b border-[#DCE6F5] py-4 sm:py-4.5 px-3 text-start transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:bg-[#F4F8FF]",
                  active ? "bg-[#F4F8FF]" : "hover:bg-[#F4F8FF]/60",
                )}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span
                    className={cn(
                      "font-heading text-xs font-bold tabular-nums transition-colors",
                      active ? "text-[#1D4ED8]" : "text-[#4A5E7A]",
                    )}
                  >
                    {rowNum}
                  </span>
                  <span
                    className={cn(
                      "font-heading text-base sm:text-lg font-semibold truncate transition-transform duration-200",
                      active
                        ? "text-[#07142B] translate-x-1 rtl:-translate-x-1"
                        : "text-[#08152B] group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
                    )}
                  >
                    {rowTitle}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full transition-colors",
                    active ? "bg-[#38BDF8]" : "bg-[#DCE6F5]",
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Right Live Pinned Scope Preview TiltCard */}
        <TiltCard variant="dark" className="p-7 sm:p-8 lg:sticky lg:top-28">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7DD3FC]">
              {t.capabilityIndex.useCasePrefix}: {useCases}
            </span>
          </div>

          <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#DCE6F5]">
            {description}
          </p>

          <ul className="mt-6 space-y-2.5 border-t border-[#93C5FD]/15 pt-5">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white"
              >
                <Check
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#38BDF8] mt-0.5"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <MagneticButton
              variant="azure"
              size="default"
              label={t.capabilityIndex.discussLink}
              onClick={(event) =>
                onOpenQuote(event.currentTarget, selectedArea.category, title)
              }
            />
            <Link
              href={`/solutions#${selectedArea.id}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7DD3FC] hover:text-white transition-colors"
            >
              <span>{t.capabilityIndex.moreLink}</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 rtl:rotate-180"
              />
            </Link>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

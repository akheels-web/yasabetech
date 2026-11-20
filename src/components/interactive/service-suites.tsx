"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Clock,
  Globe,
  HardDrive,
  Laptop,
  LayoutTemplate,
  MapPinned,
  Network,
  PhoneCall,
  Search,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { TiltCard } from "@/components/interactive/tilt-card";
import { Input } from "@/components/ui/input";
import {
  allSpecializedServices,
  serviceSuites,
} from "@/lib/specialized-services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, typeof Globe> = {
  "website-designing": LayoutTemplate,
  crm: Users,
  hrm: HardDrive,
  "fleet-management": MapPinned,
  "field-dispatch": Globe,
  "ai-voice-calling": PhoneCall,
  "private-ai-assistants": Sparkles,
  "project-amc": Wrench,
  intune: Laptop,
  "ad-management": ShieldCheck,
  "ntp-server": Clock,
  "dhcp-failover": ServerCog,
  "dns-management": Network,
};

interface ServiceSuitesProps {
  enableSearch?: boolean;
  onOpenQuote: (
    trigger?: HTMLButtonElement | null,
    category?: string,
    scope?: string,
  ) => void;
}

export function ServiceSuites({
  enableSearch = false,
  onOpenQuote,
}: ServiceSuitesProps) {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const [activeSuiteId, setActiveSuiteId] = useState<string>(
    serviceSuites[0].id,
  );
  const [activeServiceId, setActiveServiceId] = useState<string>(
    serviceSuites[0].services[0].id,
  );
  const [query, setQuery] = useState("");

  const handlePrismMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${event.clientX - rect.left}px`);
    el.style.setProperty("--py", `${event.clientY - rect.top}px`);
  };

  const trimmedQuery = query.trim().toLowerCase();
  const searchResults = trimmedQuery
    ? allSpecializedServices.filter((svc) => {
        const haystack = [
          svc.title,
          svc.titleAr,
          svc.tagline,
          svc.taglineAr,
          svc.suiteLabel,
          svc.suiteLabelAr,
          ...svc.deliverables,
          ...svc.deliverablesAr,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(trimmedQuery);
      })
    : [];

  const activeSuite =
    serviceSuites.find((s) => s.id === activeSuiteId) ?? serviceSuites[0];
  const activeService =
    activeSuite.services.find((svc) => svc.id === activeServiceId) ??
    activeSuite.services[0];

  const handleSelectSuite = (suiteId: string) => {
    setActiveSuiteId(suiteId);
    const nextSuite = serviceSuites.find((s) => s.id === suiteId);
    if (nextSuite?.services[0]) {
      setActiveServiceId(nextSuite.services[0].id);
    }
  };

  const ActiveIcon = serviceIcons[activeService.id] ?? Globe;
  const serviceTitle = isAr ? activeService.titleAr : activeService.title;
  const serviceTagline = isAr ? activeService.taglineAr : activeService.tagline;
  const serviceOutcome = isAr ? activeService.outcomeAr : activeService.outcome;
  const serviceDeliverables = isAr
    ? activeService.deliverablesAr
    : activeService.deliverables;

  return (
    <section
      id="specialized-services"
      aria-labelledby="specialized-services-title"
      className="site-container py-16 lg:py-24 scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
            {t.serviceSuites.eyebrow}
          </p>
          <h2
            id="specialized-services-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#08152B]"
          >
            {t.serviceSuites.title}
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#4A5E7A]">
          {t.serviceSuites.subtitle}
        </p>
      </div>

      {/* Optional Instant Service Search (enabled on /solutions) */}
      {enableSearch && (
        <div className="mb-8 max-w-xl">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4A5E7A]"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.serviceSuites.searchPlaceholder}
              aria-label={t.serviceSuites.searchPlaceholder}
              className="ps-10 pe-10 h-12 rounded-xl border-[#DCE6F5] bg-[#F4F8FF]/65 focus-visible:bg-white"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t.serviceSuites.clearSearch}
                className="absolute end-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#4A5E7A] hover:bg-[#EAF2FF] hover:text-[#07142B]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Search Results Mode */}
      {trimmedQuery ? (
        searchResults.length === 0 ? (
          <div className="rounded-2xl border border-[#DCE6F5] bg-[#F4F8FF] p-8 text-center">
            <p className="text-sm font-medium text-[#4A5E7A]">
              {t.serviceSuites.searchEmpty}
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-4 inline-flex items-center rounded-xl border border-[#DCE6F5] bg-white px-4 py-2 text-xs font-semibold text-[#1D4ED8] hover:border-[#38BDF8]"
            >
              {t.serviceSuites.clearSearch}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {searchResults.map((svc) => {
              const Icon = serviceIcons[svc.id] ?? Globe;
              const title = isAr ? svc.titleAr : svc.title;
              const tagline = isAr ? svc.taglineAr : svc.tagline;
              const deliverables = isAr ? svc.deliverablesAr : svc.deliverables;

              return (
                <TiltCard
                  key={svc.id}
                  variant="white"
                  className="p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1D4ED8]">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="text-[11px] font-semibold text-[#4A5E7A]">
                        {isAr ? svc.suiteLabelAr : svc.suiteLabel}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#08152B]">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#4A5E7A]">
                      {tagline}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-[#DCE6F5] pt-4">
                      {deliverables.slice(0, 3).map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-xs text-[#08152B]"
                        >
                          <Check
                            aria-hidden="true"
                            className="h-3.5 w-3.5 shrink-0 text-[#1D4ED8] mt-0.5"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <MagneticButton
                      variant="default"
                      size="sm"
                      className="w-full"
                      label={t.serviceSuites.discussService}
                      onClick={(event) =>
                        onOpenQuote(event.currentTarget, svc.category, title)
                      }
                    />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        )
      ) : (
        <>
          {/* 4 Suite Switcher Tabs */}
          <div
            role="tablist"
            aria-label={t.serviceSuites.eyebrow}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 rounded-2xl border border-[#DCE6F5] bg-[#F4F8FF] p-2 mb-8"
          >
            {serviceSuites.map((suite, idx) => {
              const active = suite.id === activeSuite.id;
              return (
                <button
                  key={suite.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleSelectSuite(suite.id)}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-start transition-all duration-200 cursor-pointer",
                    active
                      ? "bg-[#07142B] text-white shadow-md"
                      : "text-[#4A5E7A] hover:bg-white hover:text-[#07142B]",
                  )}
                >
                  <div className="min-w-0">
                    <span
                      className={cn(
                        "block font-mono text-[10px] font-semibold",
                        active ? "text-[#7DD3FC]" : "text-[#1D4ED8]",
                      )}
                    >
                      0{idx + 1} · {suite.services.length}{" "}
                      {t.serviceSuites.servicesCountLabel}
                    </span>
                    <span className="block truncate font-heading text-sm font-semibold mt-0.5">
                      {isAr ? suite.labelAr : suite.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Split Interactive Creative Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-6 lg:gap-8 items-stretch">
            {/* Left Bespoke WebP Creative Frame with Optical Purple-Indigo Veil */}
            <div
              onPointerMove={handlePrismMove}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#A78BFA]/35 bg-[#1B1145] min-h-[380px] sm:min-h-[460px] shadow-[0_24px_56px_-22px_rgba(79,70,229,0.38)]"
            >
              <Image
                key={activeSuite.image}
                src={activeSuite.image}
                alt={isAr ? activeSuite.imageAltAr : activeSuite.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div
                aria-hidden="true"
                className="img-veil-card pointer-events-none absolute inset-0"
              />
              <div
                aria-hidden="true"
                className="img-prism-sheen pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative z-10 p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C4B5FD]/35 bg-[#1B1145]/75 px-3.5 py-1.5 text-xs font-semibold text-[#E0E7FF] backdrop-blur-md">
                  {isAr ? activeSuite.labelAr : activeSuite.label}
                </span>
              </div>

              <div className="relative z-10 p-5 sm:p-6 space-y-4">
                <p className="font-heading text-lg sm:text-xl font-semibold text-white max-w-md">
                  {isAr ? activeSuite.captionAr : activeSuite.caption}
                </p>

                {/* Interactive Service Pills Inside the Creative */}
                <div className="flex flex-wrap gap-2">
                  {activeSuite.services.map((svc) => {
                    const selected = svc.id === activeService.id;
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setActiveServiceId(svc.id)}
                        className={cn(
                          "rounded-lg border px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all cursor-pointer",
                          selected
                            ? "border-[#7DD3FC] bg-[#38BDF8] text-[#050E1E] shadow-sm"
                            : "border-[#C4B5FD]/30 bg-[#1B1145]/70 text-[#E0E7FF] hover:border-[#7DD3FC]/70 hover:text-white",
                        )}
                      >
                        {isAr ? svc.titleAr : svc.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Interactive Service List + Live Detail Card */}
            <div className="flex flex-col justify-between gap-5">
              {/* Selectable Service Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {activeSuite.services.map((svc, idx) => {
                  const selected = svc.id === activeService.id;
                  const Icon = serviceIcons[svc.id] ?? Globe;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setActiveServiceId(svc.id)}
                      onMouseEnter={() => setActiveServiceId(svc.id)}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-start transition-all duration-200 cursor-pointer",
                        selected
                          ? "border-[#2563EB] bg-[#EAF2FF] text-[#07142B] shadow-xs"
                          : "border-[#DCE6F5] bg-white text-[#4A5E7A] hover:border-[#38BDF8]/70 hover:bg-[#F4F8FF]",
                      )}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                            selected
                              ? "bg-[#07142B] text-[#7DD3FC]"
                              : "bg-[#F4F8FF] text-[#1D4ED8]",
                          )}
                        >
                          <Icon aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <span className="truncate font-heading text-sm font-semibold">
                          {isAr ? svc.titleAr : svc.title}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-[#1D4ED8] shrink-0">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Service Detail Card */}
              <TiltCard variant="dark" className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#7DD3FC]">
                      <ActiveIcon aria-hidden="true" className="h-4 w-4" />
                      <span>{t.serviceSuites.outcomesLabel}</span>
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#BAE6FD]">
                    {serviceOutcome}
                  </p>

                  <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
                    {serviceTitle}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#DCE6F5]">
                    {serviceTagline}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-[#93C5FD]/15 pt-4">
                    {serviceDeliverables.map((item) => (
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
                </div>

                <div className="mt-6 pt-2">
                  <MagneticButton
                    variant="azure"
                    size="lg"
                    className="w-full"
                    label={t.serviceSuites.discussService}
                    onClick={(event) =>
                      onOpenQuote(
                        event.currentTarget,
                        activeService.category,
                        serviceTitle,
                      )
                    }
                  />
                </div>
              </TiltCard>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

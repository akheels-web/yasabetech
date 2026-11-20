"use client";

import { useState } from "react";
import { Check, Compass, Layers, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { solutionCategories } from "@/lib/solution-categories";
import { cn } from "@/lib/utils";

interface ScopeEstimatorProps {
  onApplyBlueprint: (category: string, scope: string) => void;
}

export function ScopeEstimator({ onApplyBlueprint }: ScopeEstimatorProps) {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const [regionId, setRegionId] = useState<string>(t.estimator.regions[0].id);
  const [selectedPillars, setSelectedPillars] = useState<string[]>([
    "networking",
    "ai",
  ]);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [scaleId, setScaleId] = useState<string>(t.estimator.scales[1].id);

  const togglePillar = (id: string) => {
    setSelectedPillars((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id],
    );
  };

  const toggleModule = (name: string) => {
    setSelectedModules((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  const regionObj =
    t.estimator.regions.find((r) => r.id === regionId) ??
    t.estimator.regions[0];
  const scaleObj =
    t.estimator.scales.find((s) => s.id === scaleId) ?? t.estimator.scales[0];
  const pillarNames = selectedPillars.map((id) => {
    const found = solutionCategories.find((c) => c.id === id);
    if (!found) return id;
    return isAr ? found.labelAr : found.label;
  });

  const handleCarry = () => {
    const primaryCategory = selectedPillars[0] ?? "networking";
    const moduleNote = selectedModules.length
      ? isAr
        ? ` | الخدمات المتخصصة: ${selectedModules.join("، ")}`
        : ` | Modules: ${selectedModules.join(", ")}`
      : "";
    const summaryText = isAr
      ? `النطاق المختار — المنطقة: ${regionObj.label} | الحجم: ${scaleObj.label} | المجالات: ${pillarNames.join("، ")}${moduleNote}`
      : `Configured Scope — Region: ${regionObj.label} | Scale: ${scaleObj.label} | Capabilities: ${pillarNames.join(", ")}${moduleNote}`;
    onApplyBlueprint(primaryCategory, summaryText);
  };

  return (
    <section
      id="calculator"
      aria-labelledby="scope-planner-title"
      className="py-16 lg:py-20 bg-[#F4F8FF] border-y border-[#DCE6F5] scroll-mt-28"
    >
      <div className="site-container">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
            {t.estimator.eyebrow}
          </p>
          <h2
            id="scope-planner-title"
            className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]"
          >
            {t.estimator.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A5E7A] leading-relaxed">
            {t.estimator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          {/* Controls Column */}
          <div className="space-y-7 rounded-2xl border border-[#DCE6F5] bg-white p-6 sm:p-8 shadow-xs">
            {/* 1. Region */}
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-3">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {t.estimator.stepRegion}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {t.estimator.regions.map((reg) => {
                  const active = reg.id === regionId;
                  return (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => setRegionId(reg.id)}
                      className={cn(
                        "rounded-xl border px-3.5 py-3 text-start text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                        active
                          ? "border-[#1D4ED8] bg-[#EAF2FF] text-[#07142B] shadow-xs"
                          : "border-[#DCE6F5] bg-[#F4F8FF]/60 text-[#4A5E7A] hover:border-[#38BDF8]",
                      )}
                    >
                      {reg.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Capabilities */}
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-3">
                <Layers aria-hidden="true" className="h-4 w-4" />
                {t.estimator.stepPillars}
              </p>
              <div className="flex flex-wrap gap-2">
                {solutionCategories.map((cat) => {
                  const active = selectedPillars.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => togglePillar(cat.id)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                        active
                          ? "border-[#07142B] bg-[#07142B] text-[#7DD3FC] shadow-xs"
                          : "border-[#DCE6F5] bg-white text-[#4A5E7A] hover:border-[#1D4ED8]",
                      )}
                    >
                      {active && (
                        <Check aria-hidden="true" className="h-3.5 w-3.5 text-[#38BDF8]" />
                      )}
                      <span>{isAr ? cat.labelAr : cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Specialized Modules */}
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-3">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                {t.estimator.stepModules}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.estimator.modules.map((mod) => {
                  const active = selectedModules.includes(mod);
                  return (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => toggleModule(mod)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer",
                        active
                          ? "border-[#2563EB] bg-[#EAF2FF] text-[#1D4ED8]"
                          : "border-[#DCE6F5] bg-[#F4F8FF]/50 text-[#4A5E7A] hover:border-[#38BDF8]",
                      )}
                    >
                      {active && <Check aria-hidden="true" className="h-3 w-3" />}
                      <span>{mod}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Scale */}
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-3">
                <Compass aria-hidden="true" className="h-4 w-4" />
                {t.estimator.stepScale}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {t.estimator.scales.map((scale) => {
                  const active = scale.id === scaleId;
                  return (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setScaleId(scale.id)}
                      className={cn(
                        "rounded-xl border px-3.5 py-3 text-start text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                        active
                          ? "border-[#1D4ED8] bg-[#EAF2FF] text-[#07142B] shadow-xs"
                          : "border-[#DCE6F5] bg-[#F4F8FF]/60 text-[#4A5E7A] hover:border-[#38BDF8]",
                      )}
                    >
                      {scale.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Plan Card */}
          <div className="rounded-2xl border border-[#38BDF8]/30 bg-[#07142B] p-6 sm:p-8 text-[#F4F8FF] shadow-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7DD3FC]">
              {t.estimator.outputEyebrow}
            </span>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
              {t.estimator.outputTitle}
            </h3>

            <div className="mt-5 rounded-xl border border-[#93C5FD]/15 bg-[#0D1F3C] p-4 space-y-2 text-xs sm:text-sm">
              <div className="text-[11px] uppercase tracking-wider text-slate-400">
                {t.estimator.summaryLabel}
              </div>
              <p className="font-semibold text-[#7DD3FC]">{regionObj.label}</p>
              <p className="text-slate-200">{scaleObj.label}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pillarNames.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border border-[#38BDF8]/35 bg-[#1D4ED8]/25 px-2.5 py-0.5 text-[11px] font-medium text-[#BAE6FD]"
                  >
                    {name}
                  </span>
                ))}
                {selectedModules.map((mod) => (
                  <span
                    key={mod}
                    className="rounded-md border border-[#A78BFA]/40 bg-[#4F46E5]/25 px-2.5 py-0.5 text-[11px] font-medium text-[#DDD6FE]"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            <ol className="mt-6 space-y-3 border-t border-white/12 pt-5">
              {t.estimator.outputStages.map((stage, i) => (
                <li
                  key={stage}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#38BDF8]/40 bg-[#1D4ED8]/30 font-heading text-[11px] font-bold text-[#7DD3FC]">
                    0{i + 1}
                  </span>
                  <span className="pt-0.5">{stage}</span>
                </li>
              ))}
            </ol>

            <div className="mt-7">
              <MagneticButton
                type="button"
                variant="azure"
                size="lg"
                className="w-full"
                label={t.estimator.outputCta}
                onClick={handleCarry}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

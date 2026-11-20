"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function ScrollStory() {
  const { t } = useLanguage();
  const chapters = t.scrollStory.chapters;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [manualIdx, setManualIdx] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const totalTravel = Math.max(1, rect.height - window.innerHeight * 0.65);
      const passed = window.innerHeight * 0.35 - rect.top;
      const ratio = Math.min(1, Math.max(0, passed / totalTravel));
      setScrollRatio(ratio);
      setManualIdx(null);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const computedIdx = Math.min(
    chapters.length - 1,
    Math.floor(scrollRatio * chapters.length),
  );
  const activeIndex = manualIdx ?? computedIdx;
  const activeChapter = chapters[activeIndex] ?? chapters[0];
  const lineFill =
    manualIdx !== null
      ? ((manualIdx + 1) / chapters.length) * 100
      : Math.max(12, scrollRatio * 100);

  return (
    <section
      ref={sectionRef}
      id="delivery-journey"
      aria-labelledby="delivery-journey-title"
      className="relative bg-[#07142B] text-[#F4F8FF] py-20 lg:py-28 border-y border-[#93C5FD]/15 scroll-mt-24"
    >
      <div
        aria-hidden="true"
        className="bg-architectural-grid pointer-events-none absolute inset-0"
      />

      <div className="site-container relative z-10">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7DD3FC] mb-3">
            {t.scrollStory.eyebrow}
          </p>
          <h2
            id="delivery-journey-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.12] text-white"
          >
            {t.scrollStory.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
          {/* Left Narrative Rail Driven by Real Scroll Progress */}
          <div className="relative ps-6 space-y-5">
            <div
              aria-hidden="true"
              className="absolute start-0 top-2 bottom-2 w-[2.5px] rounded-full bg-[#93C5FD]/15 overflow-hidden"
            >
              <div
                className="w-full rounded-full bg-gradient-to-b from-[#38BDF8] via-[#6366F1] to-[#A855F7] transition-[height] duration-150"
                style={{ height: `${lineFill}%` }}
              />
            </div>

            {chapters.map((chapter, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => setManualIdx(idx)}
                  className={cn(
                    "w-full text-start rounded-2xl border p-6 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]",
                    isActive
                      ? "border-[#38BDF8]/65 bg-[#0D1F3C] shadow-[0_18px_42px_-22px_rgba(56,189,248,0.4)]"
                      : "border-[#93C5FD]/12 bg-[#0D1F3C]/40 opacity-70 hover:opacity-100 hover:border-[#93C5FD]/35",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        isActive ? "text-[#7DD3FC]" : "text-slate-400",
                      )}
                    >
                      {chapter.tag}
                    </span>
                    <span
                      className={cn(
                        "font-heading text-xs font-bold px-2.5 py-0.5 rounded-full border",
                        isActive
                          ? "border-[#38BDF8]/50 bg-[#1D4ED8]/30 text-[#BAE6FD]"
                          : "border-white/15 text-slate-400",
                      )}
                    >
                      {chapter.step}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-xl font-semibold text-white leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#CBD5E1]">
                    {chapter.description}
                  </p>

                  <ul className="mt-4 grid gap-2 border-t border-white/10 pt-3.5">
                    {chapter.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs text-[#E0F2FE]"
                      >
                        <Check
                          aria-hidden="true"
                          className="h-3.5 w-3.5 shrink-0 text-[#38BDF8]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Right Sticky Clip-Path Reveal Visual Stage */}
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-2xl border border-[#A78BFA]/30 bg-[#1B1145] shadow-[0_24px_56px_-22px_rgba(79,70,229,0.45)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-[#A78BFA]/70 to-[#38BDF8]/70"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {chapters.map((chapter, idx) => {
                  const isShown = idx <= activeIndex;
                  return (
                    <div
                      key={chapter.id}
                      style={{
                        clipPath: isShown
                          ? "inset(0% 0% 0% 0%)"
                          : "inset(100% 0% 0% 0%)",
                        zIndex: idx + 1,
                      }}
                      className="absolute inset-0 transition-[clip-path] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      <Image
                        src={chapter.image}
                        alt={chapter.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                      />
                    </div>
                  );
                })}
                <div
                  aria-hidden="true"
                  className="img-veil-card pointer-events-none absolute inset-0 z-10"
                />
              </div>

              <div className="relative z-20 p-6 sm:p-7 -mt-20">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C4B5FD]/35 bg-[#1B1145]/78 px-3 py-1 text-[11px] font-semibold text-[#DDD6FE] backdrop-blur-md">
                  <span>{activeChapter.step}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeChapter.tag}</span>
                </span>
                <p className="mt-3 font-heading text-xl font-semibold text-white">
                  {activeChapter.title}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  {chapters.map((chapter, idx) => (
                    <button
                      key={chapter.id}
                      type="button"
                      aria-label={`${chapter.step}: ${chapter.tag}`}
                      onClick={() => setManualIdx(idx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        idx === activeIndex
                          ? "w-10 bg-gradient-to-r from-[#38BDF8] to-[#A78BFA]"
                          : "w-3 bg-[#C4B5FD]/30 hover:bg-[#C4B5FD]/60",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

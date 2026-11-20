import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Set USE_CUSTOM_LOGO_IMAGE = true after placing your final brand artwork at
 * public/logo.webp (or generating it via scripts/generate-brand-assets.mjs).
 */
export const USE_CUSTOM_LOGO_IMAGE = false;

interface BrandLogoProps {
  variant?: "light" | "dark";
  isArabic?: boolean;
  className?: string;
}

export function BrandLogo({
  variant = "light",
  isArabic = false,
  className,
}: BrandLogoProps) {
  if (USE_CUSTOM_LOGO_IMAGE) {
    return (
      <Image
        src="/logo.webp"
        alt="Misyatech"
        width={196}
        height={42}
        className={cn("h-10 w-auto object-contain", className)}
        loading="eager"
      />
    );
  }

  const isDarkSurface = variant === "dark";

  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="misyatech-tile" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isDarkSurface ? "#0D1F3C" : "#050E1E"} />
            <stop offset="100%" stopColor="#07142B" />
          </linearGradient>
          <linearGradient id="misyatech-cobalt" x1="12" y1="14" x2="36" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="misyatech-sky" x1="30" y1="48" x2="52" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="15" fill="url(#misyatech-tile)" />
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="14"
          stroke="#7DD3FC"
          strokeOpacity={isDarkSurface ? "0.42" : "0.24"}
          strokeWidth="1.5"
        />
        <path d="M15 47 V19 L32 36 L32 44 L21 33 V47 Z" fill="url(#misyatech-cobalt)" />
        <path d="M49 47 V19 L32 36 L32 44 L43 33 V47 Z" fill="url(#misyatech-sky)" />
        <polygon points="32,12 36,16 32,20 28,16" fill="#BAE6FD" />
      </svg>

      <span className="flex flex-col leading-none text-start">
        <span className="flex items-baseline gap-2">
          <span
            className={cn(
              "font-heading text-[18px] sm:text-[19px] font-bold tracking-[0.06em]",
              isDarkSurface ? "text-[#F4F8FF]" : "text-[#07142B]",
            )}
          >
            MISYATECH
          </span>
          {isArabic && (
            <span
              className={cn(
                "text-xs font-semibold",
                isDarkSurface ? "text-[#7DD3FC]" : "text-[#1D4ED8]",
              )}
            >
              ميسياتك
            </span>
          )}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold tracking-[0.18em] uppercase",
            isDarkSurface ? "text-[#7DD3FC]/90" : "text-[#1D4ED8]",
          )}
        >
          {isArabic ? "عُمان · دبي" : "Oman · Dubai"}
        </span>
      </span>
    </span>
  );
}

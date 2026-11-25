import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const isDarkSurface = variant === "dark";

  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <Image
        src={isDarkSurface ? "/logo-dark.webp" : "/logo.webp"}
        alt="Misyatech"
        width={960}
        height={165}
        loading="eager"
        className="h-7 sm:h-8 w-auto object-contain"
      />
      {isArabic && (
        <span
          className={cn(
            "text-xs font-semibold border-s ps-2.5",
            isDarkSurface
              ? "border-[#93C5FD]/25 text-[#7DD3FC]"
              : "border-[#DCE6F5] text-[#1D4ED8]",
          )}
        >
          ميسياتك
        </span>
      )}
    </span>
  );
}

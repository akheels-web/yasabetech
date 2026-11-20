"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "mist" | "white";
}

export function TiltCard({
  variant = "white",
  className,
  children,
  onPointerMove,
  onPointerLeave,
  ...props
}: TiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      el.style.setProperty("--mx", `${px}px`);
      el.style.setProperty("--my", `${py}px`);

      if (
        typeof window !== "undefined" &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        window.matchMedia("(pointer: fine)").matches
      ) {
        const rx = ((py / rect.height) - 0.5) * -5.5;
        const ry = ((px / rect.width) - 0.5) * 6.5;
        el.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-2px)`;
      }
    }
    onPointerMove?.(event);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (el) {
      el.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    }
    onPointerLeave?.(event);
  };

  const variantClasses = {
    dark: "border-[#93C5FD]/15 bg-[#0D1F3C] text-[#F4F8FF]",
    mist: "border-[#DCE6F5] bg-[#F4F8FF] text-[#08152B]",
    white: "border-[#DCE6F5] bg-white text-[#08152B]",
  }[variant];

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "tilt-border-glow rounded-2xl border transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform shadow-[0_8px_28px_-20px_rgba(7,20,43,0.18)] hover:shadow-[0_20px_44px_-22px_rgba(29,78,216,0.28)]",
        variantClasses,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

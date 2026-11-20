"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  label: string;
  showArrow?: boolean;
}

export function MagneticButton({
  label,
  showArrow = true,
  className,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const wrapRef = React.useRef<HTMLSpanElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const el = wrapRef.current;
    if (
      el &&
      typeof window !== "undefined" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(pointer: fine)").matches
    ) {
      const rect = el.getBoundingClientRect();
      const dx = ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 10;
      const dy = ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 8;
      el.style.transform = `translate3d(${Math.max(-6, Math.min(6, dx))}px, ${Math.max(-5, Math.min(5, dy))}px, 0)`;
    }
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (wrapRef.current) {
      wrapRef.current.style.transform = "translate3d(0, 0, 0)";
    }
    onMouseLeave?.(event);
  };

  return (
    <span
      ref={wrapRef}
      className="inline-block transition-transform duration-300 ease-out will-change-transform"
    >
      <Button
        className={cn(className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span className="kinetic-btn-track">
          <span className="kinetic-btn-primary">{label}</span>
          <span className="kinetic-btn-clone" aria-hidden="true">
            {label}
          </span>
        </span>
        {showArrow && (
          <ArrowUpRight
            aria-hidden="true"
            className="kinetic-arrow ms-2 h-4 w-4 shrink-0"
          />
        )}
      </Button>
    </span>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  ornament?: boolean;
  tone?: "light" | "dark";
}

export function Separator({
  ornament = false,
  tone = "light",
  className,
  ...props
}: SeparatorProps) {
  const lineColor =
    tone === "dark" ? "bg-[#93C5FD]/15" : "bg-[#DCE6F5]";
  const accentColor =
    tone === "dark" ? "border-[#38BDF8]/50" : "border-[#2563EB]/40";

  if (!ornament) {
    return (
      <div
        role="separator"
        className={cn("h-px w-full", lineColor, className)}
        {...props}
      />
    );
  }

  return (
    <div
      role="separator"
      className={cn("flex items-center gap-3 w-full", className)}
      {...props}
    >
      <span className={cn("h-px flex-1", lineColor)} />
      <span
        aria-hidden="true"
        className={cn("h-2 w-2 rotate-45 border", accentColor)}
      />
      <span className={cn("h-px flex-1", lineColor)} />
    </div>
  );
}

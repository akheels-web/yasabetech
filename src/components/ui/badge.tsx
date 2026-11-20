import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#EAF2FF] text-[#1D4ED8] border-[#BFDBFE]",
        sky: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]",
        navy: "bg-[#07142B] text-[#7DD3FC] border-[#38BDF8]/35",
        mist: "bg-[#F4F8FF] text-[#08152B] border-[#DCE6F5]",
        glass: "bg-white/10 text-[#F4F8FF] border-[#93C5FD]/30 backdrop-blur-md",
        secondary: "bg-[#EAF2FF] text-[#4A5E7A] border-[#DCE6F5]",
        destructive: "bg-red-50 text-red-700 border-red-200",
        outline: "text-[#4A5E7A] border-[#DCE6F5] bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

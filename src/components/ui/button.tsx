import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#07142B] text-[#F4F8FF] border border-[#07142B] shadow-[0_8px_24px_-10px_rgba(7,20,43,0.45)] hover:bg-[#1D4ED8] hover:border-[#2563EB] hover:shadow-[0_14px_30px_-10px_rgba(29,78,216,0.5)] hover:-translate-y-0.5",
        brand:
          "bg-[#1D4ED8] text-white border border-[#1D4ED8] shadow-[0_8px_24px_-10px_rgba(29,78,216,0.45)] hover:bg-[#2563EB] hover:border-[#38BDF8]/60 hover:shadow-[0_14px_32px_-10px_rgba(56,189,248,0.45)] hover:-translate-y-0.5",
        azure:
          "bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#38BDF8] bg-[length:200%_100%] bg-left hover:bg-right text-[#050E1E] font-bold shadow-[0_12px_32px_-10px_rgba(56,189,248,0.65)] hover:shadow-[0_16px_38px_-8px_rgba(125,211,252,0.75)] hover:-translate-y-0.5",
        glass:
          "border border-[#93C5FD]/30 bg-white/8 text-white backdrop-blur-md hover:bg-[#38BDF8]/16 hover:border-[#7DD3FC]/70 hover:-translate-y-0.5",
        outline:
          "border border-[#DCE6F5] bg-white text-[#08152B] shadow-xs hover:border-[#2563EB]/60 hover:bg-[#EAF2FF] hover:text-[#1D4ED8] hover:-translate-y-0.5",
        secondary:
          "bg-[#EAF2FF] text-[#08152B] hover:bg-[#DCE6F5] border border-[#DCE6F5]",
        ghost: "hover:bg-[#EAF2FF] text-[#4A5E7A] hover:text-[#07142B]",
        link: "text-[#1D4ED8] underline-offset-4 hover:underline",
        destructive: "bg-red-600 text-white hover:bg-red-500 shadow-sm",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-[15px] font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

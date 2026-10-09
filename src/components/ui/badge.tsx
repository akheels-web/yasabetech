import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-sky-50 text-sky-700 border-sky-200",
        secondary:
          "bg-slate-100 text-slate-700 border-slate-200",
        destructive:
          "bg-red-50 text-red-700 border-red-200",
        outline:
          "text-slate-700 border-slate-300 bg-white",
        emerald:
          "bg-emerald-50 text-emerald-700 border-emerald-200",
        purple:
          "bg-indigo-50 text-indigo-700 border-indigo-200",
        amber:
          "bg-amber-50 text-amber-800 border-amber-200",
        navy:
          "bg-[#0b1a3d]/10 text-[#0b1a3d] border-[#0b1a3d]/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base: rectangulaire (pas de border-radius), bordure 2px
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-none text-sm font-medium whitespace-nowrap transition-all duration-150 outline-none border-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A1A1A] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:fill-current",
  {
    variants: {
      variant: {
        default:
          "bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#333333] hover:border-[#333333]",
        outline:
          "bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#FAFAFA]",
        secondary:
          "bg-[#F5F5F5] text-[#1A1A1A] border-[#E5E5E5] hover:bg-[#E5E5E5] hover:border-[#D4D4D4]",
        ghost:
          "bg-transparent text-[#1A1A1A] border-transparent hover:bg-[#F5F5F5]",
        link:
          "bg-transparent text-[#1A1A1A] border-transparent underline underline-offset-4 hover:text-[#333333]",
        destructive:
          "bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600",
      },
      size: {
        default: "h-11 px-6 py-2",
        xs: "h-7 gap-1 px-2 text-xs",
        sm: "h-9 gap-1.5 px-4",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
        "icon-xs": "size-7",
        "icon-sm": "size-9",
        "icon-lg": "size-14",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  fullWidth = false,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    fullWidth?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

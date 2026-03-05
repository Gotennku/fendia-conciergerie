import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles
  `inline-flex items-center justify-center gap-2
   font-medium transition-all duration-150 ease-out
   border-2 outline-none
   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
   active:scale-[0.98]
   disabled:pointer-events-none disabled:opacity-50
   [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        primary: `
          bg-[#1A1A1A] text-white border-[#1A1A1A]
          hover:bg-[#333333] hover:border-[#333333]
        `,
        secondary: `
          bg-white text-[#1A1A1A] border-[#1A1A1A]
          hover:bg-[#FAFAFA]
        `,
        ghost: `
          bg-transparent text-[#1A1A1A] border-transparent
          hover:bg-[#F5F5F5]
        `,
        link: `
          bg-transparent text-[#1A1A1A] border-transparent
          underline underline-offset-4
          hover:text-[#333333]
        `,
        destructive: `
          bg-red-500 text-white border-red-500
          hover:bg-red-600 hover:border-red-600
        `,
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        md: "h-11 px-6 text-base [&_svg]:size-5",
        lg: "h-14 px-8 text-lg [&_svg]:size-5",
        icon: "h-11 w-11 [&_svg]:size-5",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            <span>Chargement...</span>
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center border rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-blue-600 text-white hover:bg-blue-700",
                outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
                ghost: "bg-transparent hover:bg-gray-300 text-gray-700",
            },
            size: {
                default: "h-D10 px-4 py-6",
                sm: "h-8 px-3 text-sm",
                lg: "h-12 px-6 text-lg",
            },
            elevate: {
                true: "hover:shadow-2xl hover:-translate-y-1 transition-transform duration-200",
                false: "",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, elevate, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp className={cn(buttonVariants({ elevate, variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button";
export { Button }
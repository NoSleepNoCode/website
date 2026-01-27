import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-accent-primary text-white shadow hover:bg-accent-primary/90 glow-indigo",
                secondary:
                    "bg-accent-secondary text-white shadow hover:bg-accent-secondary/90 glow-purple",
                glass:
                    "glass text-white hover:bg-white/10",
                ghost: "hover:bg-white/5 text-text-secondary hover:text-white",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 px-4",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    magnetic?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, magnetic = false, ...props }, ref) => {
        // Magnetic effect logic
        const x = useMotionValue(0)
        const y = useMotionValue(0)

        const springConfig = { damping: 15, stiffness: 150 }
        const springX = useSpring(x, springConfig)
        const springY = useSpring(y, springConfig)

        const handleMouseMove = (e: React.MouseEvent) => {
            if (!magnetic) return
            const { clientX, clientY, currentTarget } = e as any
            const { left, top, width, height } = currentTarget.getBoundingClientRect()
            const centerX = left + width / 2
            const centerY = top + height / 2
            const distanceX = clientX - centerX
            const distanceY = clientY - centerY

            x.set(distanceX * 0.3)
            y.set(distanceY * 0.3)
        }

        const handleMouseLeave = () => {
            x.set(0)
            y.set(0)
        }

        if (asChild) {
            return (
                <motion.div
                    onMouseMove={handleMouseMove as any}
                    onMouseLeave={handleMouseLeave}
                    style={{ x: springX, y: springY } as any}
                    className={cn(buttonVariants({ variant, size, className }))}
                >
                    <Slot ref={ref as any} {...(props as any)} />
                </motion.div>
            )
        }

        return (
            <motion.button
                ref={ref as any}
                onMouseMove={handleMouseMove as any}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY } as any}
                className={cn(buttonVariants({ variant, size, className }))}
                {...(props as any)}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

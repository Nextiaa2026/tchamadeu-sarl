"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  as?: "div" | "section" | "article"
}

const directionClasses = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  })

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView
          ? "translate-x-0 translate-y-0 opacity-100"
          : cn("opacity-0", directionClasses[direction]),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

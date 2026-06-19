import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  className?: string
  dark?: boolean
  showGoldBar?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  dark = false,
  showGoldBar = true,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {showGoldBar && <div className="mb-6 h-2 w-full bg-brand-gold" />}
      {label && (
        <p
          className={cn(
            "font-display mb-4 text-sm uppercase tracking-[0.2em]",
            dark ? "text-brand-gold" : "text-brand-gold"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-brand-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

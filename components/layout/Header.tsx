"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const homeHref = pathname === "/" ? "#accueil" : "/"

  return (
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href={homeHref} className="relative h-10 w-40 shrink-0">
          <Image
            src={siteConfig.logos.header}
            alt={`${siteConfig.name} — BTP, construction et immobilier`}
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display text-sm tracking-wide transition-colors",
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-brand-gold"
                  : "text-white/80 hover:text-brand-gold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </div>

      <nav
        className={cn(
          "border-t border-white/10 bg-brand-dark md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-sm tracking-wide text-white/80 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

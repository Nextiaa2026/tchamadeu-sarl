import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="relative mb-6 h-12 w-44">
              <Image
                src={siteConfig.logos.footer}
                alt={`${siteConfig.name} — BTP, construction et immobilier`}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-display text-sm leading-relaxed text-white/70">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Navigation
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-brand-gold"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-brand-gold"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {year} {siteConfig.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

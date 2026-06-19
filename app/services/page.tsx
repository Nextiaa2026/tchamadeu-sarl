import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { TeamSection } from "@/components/sections/TeamSection"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez les services TCHAMADEU SARL : BTP, immobilier, vente de terrains, location, construction et prestations de service au Cameroun.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              label="Nos Services"
              title="Bâtiment, immobilier et prestations"
              description={siteConfig.slogan}
              className="mb-10 max-w-3xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-14 max-w-3xl text-center text-sm leading-relaxed text-brand-gold md:mx-auto md:text-base">
              {siteConfig.services.map((s) => s.title).join(" ~ ")}
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  alt={service.alt}
                  href={`/services/${service.slug}`}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-16 text-center">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 border border-brand-dark px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Demander un devis
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
      <TeamSection />
    </>
  )
}

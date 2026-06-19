import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteConfig } from "@/lib/site-config"

export function ServicesSection() {
  return (
    <section id="services" className="bg-brand-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Nos Services"
            title="Une expertise complète en bâtiment et immobilier"
            description="Du BTP à l'immobilier, en passant par la vente de terrains et les prestations de service, nous couvrons l'ensemble de vos besoins."
            className="mb-14 max-w-2xl"
          />
        </Reveal>

        <div className="mb-10 hidden text-center text-sm text-brand-gold md:block">
          <p className="leading-relaxed">
            {siteConfig.services.map((s) => s.title).join(" ~ ")}
          </p>
        </div>

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

        <Reveal delay={200} className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold transition-colors hover:text-brand-dark"
          >
            Voir tous nos services
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

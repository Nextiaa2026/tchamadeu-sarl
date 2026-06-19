import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ServiceCard } from "@/components/ui/ServiceCard"
import {
  getAllServiceSlugs,
  getServiceBySlug,
  siteConfig,
} from "@/lib/site-config"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.description,
    keywords: [
      service.title,
      service.shortTitle,
      siteConfig.name,
      "Cameroun",
      ...siteConfig.keywords,
    ],
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      images: [{ url: service.image, alt: service.alt }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const otherServices = siteConfig.services.filter((s) => s.slug !== slug)

  return (
    <>
      <section className="relative min-h-[50vh] bg-brand-dark text-white">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <p className="font-display mb-4 text-sm uppercase tracking-[0.2em] text-brand-gold">
              {service.shortTitle}
            </p>
            <h1 className="font-heading mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              showGoldBar={false}
              title="Notre expertise"
              description={service.longDescription}
            />
            <ul className="mt-8 space-y-4">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckIcon
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-gold"
                    weight="bold"
                  />
                  <span className="text-brand-dark">{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="group mt-10 inline-flex items-center gap-3 border border-brand-dark px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Demander un devis
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <Reveal delay={150} direction="right">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              label="Autres services"
              title="Découvrez notre gamme complète"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.slice(0, 3).map((s, index) => (
              <Reveal key={s.slug} delay={index * 100}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  image={s.image}
                  alt={s.alt}
                  href={`/services/${s.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

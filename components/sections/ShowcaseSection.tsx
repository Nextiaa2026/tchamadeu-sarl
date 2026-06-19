import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteConfig } from "@/lib/site-config"

export function ShowcaseSection() {
  return (
    <section id="realisations" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="Réalisations"
            title="Votre projet, notre engagement"
            showGoldBar={false}
            className="max-w-2xl"
          />
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Découvrez la qualité de nos réalisations à travers une sélection de
            projets en construction, immobilier et infrastructures.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.showcase.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 100}
              className={index === 1 ? "lg:mt-12" : ""}
            >
              <article>
                <div className="relative mb-5 aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-heading mb-2 text-lg font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16">
          <div className="relative aspect-[21/9] min-h-[300px] overflow-hidden">
            <Image
              src="/images/cta.jpg"
              alt="Projet immobilier et construction — TCHAMADEU SARL"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-brand-dark/50" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16">
              <h2 className="font-heading mb-4 max-w-xl text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                La ville à votre porte
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                Des projets pensés pour s&apos;intégrer harmonieusement dans leur
                environnement et enrichir les communautés qu&apos;ils desservent.
              </p>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand-dark"
              >
                Nous contacter
                <ArrowRightIcon
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

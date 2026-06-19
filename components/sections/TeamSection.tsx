import Image from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { siteConfig } from "@/lib/site-config"

export function TeamSection() {
  return (
    <section id="team" className="relative">
      <div className="relative aspect-[21/9] min-h-[400px] w-full md:aspect-[21/7]">
        <Image
          src="/images/team.jpg"
          alt="Équipe professionnelle TCHAMADEU SARL — expertise en construction et immobilier"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <p className="font-display mb-4 text-sm uppercase tracking-[0.2em] text-brand-gold">
                Notre expertise
              </p>
              <h2 className="font-heading max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Des visionnaires au service de vos projets
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Avec un portefeuille reconnu pour son intégrité architecturale et sa
                qualité supérieure, {siteConfig.name} s&apos;engage à créer des
                ouvrages emblématiques qui résistent à l&apos;épreuve du temps.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

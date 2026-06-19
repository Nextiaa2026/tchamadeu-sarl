import Image from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteConfig } from "@/lib/site-config"

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col justify-center">
          <SectionHeading
            label="Notre philosophie"
            title="Conçu pour l'excellence et la solidité"
            dark
            showGoldBar={false}
          />
          <p className="mb-6 text-base leading-relaxed text-white/75 md:text-lg">
            {siteConfig.name} est bien plus qu&apos;une entreprise de construction ;
            c&apos;est un engagement. Chaque projet est mené avec une attention
            méticuleuse aux détails, pour garantir des ouvrages durables et une
            qualité irréprochable.
          </p>
          <p className="text-base leading-relaxed text-white/60">
            De la fondation à la finition, nous mettons notre expertise au service
            de vos ambitions en bâtiment, travaux publics et immobilier.
          </p>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={100} direction="left">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Chantier de construction professionnel — TCHAMADEU SARL"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={200} direction="left">
            <div className="relative aspect-[16/9] overflow-hidden lg:max-w-[70%]">
              <Image
                src="/images/showcase-1.jpg"
                alt="Architecture résidentielle moderne — TCHAMADEU SARL"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

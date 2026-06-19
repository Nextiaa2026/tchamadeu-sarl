import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { siteConfig } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section id="accueil" className="grid min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-brand-cream px-6 py-16 lg:px-16 lg:py-24">
        <Reveal>
          <p className="font-display mb-4 text-sm uppercase tracking-[0.2em] text-brand-gold">
            {siteConfig.name}
          </p>
          <h1 className="font-heading mb-6 text-4xl font-bold leading-tight tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            {siteConfig.slogan}
          </h1>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Expert en BTP, construction et immobilier, nous accompagnons vos projets
            avec rigueur et excellence — de la fondation à la finition.
          </p>
          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 border border-brand-dark px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            Nous contacter
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>

      <Reveal direction="right" delay={150} className="relative min-h-[50vh] lg:min-h-full">
        <Image
          src="/images/hero.jpg"
          alt="Bâtiment moderne et architecture contemporaine — TCHAMADEU SARL"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </Reveal>
    </section>
  )
}

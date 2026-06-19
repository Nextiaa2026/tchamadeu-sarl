import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TeamSection } from "@/components/sections/TeamSection"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Notre Équipe",
  description:
    "Découvrez l'équipe TCHAMADEU SARL — des experts en BTP, construction et immobilier au Cameroun.",
  keywords: [
    ...siteConfig.keywords,
    "équipe TCHAMADEU",
    "experts construction",
    "professionnels BTP",
  ],
}

export default function TeamPage() {
  return (
    <>
      <TeamSection showAll />

      <section className="border-t border-border bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              label="Rejoignez-nous"
              title="Construisons ensemble"
              description="Vous souhaitez collaborer avec TCHAMADEU SARL ou rejoindre notre équipe ? Contactez-nous pour en discuter."
              className="mb-10 max-w-2xl"
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 border border-brand-dark px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Nous contacter
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

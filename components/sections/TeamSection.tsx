import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TeamMemberCard } from "@/components/ui/TeamMemberCard"
import { siteConfig } from "@/lib/site-config"

type TeamSectionProps = {
  showAll?: boolean
}

export function TeamSection({ showAll = false }: TeamSectionProps) {
  const members = showAll
    ? siteConfig.team
    : siteConfig.team.slice(0, 4)

  return (
    <section id="team" className="bg-brand-cream">
      <div className="relative aspect-[21/9] min-h-[360px] w-full md:aspect-[21/7]">
        <Image
          src="/images/team.jpg"
          alt="Équipe professionnelle TCHAMADEU SARL — expertise en construction et immobilier"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/65" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <p className="font-display mb-4 text-sm uppercase tracking-[0.2em] text-brand-gold">
                Notre équipe
              </p>
              <h2 className="font-heading max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Des experts au service de vos projets
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Une équipe passionnée et expérimentée, engagée à livrer des ouvrages
                solides et des projets immobiliers d&apos;exception.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {!showAll && (
          <Reveal className="mb-14">
            <SectionHeading
              label="L'équipe"
              title="Rencontrez nos professionnels"
              description="Des spécialistes dédiés au BTP, à l'immobilier et à la construction."
              showGoldBar={false}
            />
          </Reveal>
        )}

        <div
          className={`grid gap-6 sm:grid-cols-2 ${showAll ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
        >
          {members.map((member, index) => (
            <Reveal key={member.slug} delay={index * 100}>
              <TeamMemberCard
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                alt={member.alt}
                href={`/team/${member.slug}`}
              />
            </Reveal>
          ))}
        </div>

        {!showAll && (
          <Reveal delay={200} className="mt-12 text-center">
            <Link
              href="/team"
              className="group inline-flex items-center gap-3 border border-brand-dark px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Voir toute l&apos;équipe
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

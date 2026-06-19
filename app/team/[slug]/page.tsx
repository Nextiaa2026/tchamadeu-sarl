import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"
import { Reveal } from "@/components/ui/Reveal"
import { TeamMemberCard } from "@/components/ui/TeamMemberCard"
import {
  getAllTeamMemberSlugs,
  getTeamMemberBySlug,
  siteConfig,
} from "@/lib/site-config"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTeamMemberSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) return {}

  return {
    title: `${member.name} — ${member.role}`,
    description: member.description,
    openGraph: {
      title: `${member.name} | ${siteConfig.name}`,
      description: member.description,
      images: [{ url: member.image, alt: member.alt }],
    },
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)

  if (!member) notFound()

  const otherMembers = siteConfig.team.filter((m) => m.slug !== slug)

  return (
    <>
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/team"
              className="group mb-10 inline-flex items-center gap-2 text-sm text-brand-gold transition-colors hover:text-brand-dark"
            >
              <ArrowLeftIcon size={16} />
              Retour à l&apos;équipe
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[3/4] max-w-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={150} direction="right">
              <p className="font-display mb-4 text-sm uppercase tracking-[0.2em] text-brand-gold">
                {member.role}
              </p>
              <h1 className="font-heading mb-6 text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
                {member.name}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {member.description}
              </p>
              <p className="text-base leading-relaxed text-brand-dark/80">
                {member.longDescription}
              </p>
              <Link
                href="/#contact"
                className="group mt-10 inline-flex items-center gap-3 border border-brand-dark px-6 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
              >
                Contacter {member.name.split(" ")[0]}
                <ArrowRightIcon
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading mb-12 text-3xl font-bold text-brand-dark md:text-4xl">
              Autres membres de l&apos;équipe
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherMembers.slice(0, 4).map((m, index) => (
              <Reveal key={m.slug} delay={index * 100}>
                <TeamMemberCard
                  name={m.name}
                  role={m.role}
                  description={m.description}
                  image={m.image}
                  alt={m.alt}
                  href={`/team/${m.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

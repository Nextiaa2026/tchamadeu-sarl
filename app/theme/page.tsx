import type { Metadata } from "next"
import Image from "next/image"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Charte graphique",
  description:
    "Charte graphique TCHAMADEU SARL — couleurs, typographies, logos et identité visuelle.",
  robots: { index: false, follow: false },
}

export default function ThemePage() {
  const { colors, fonts } = siteConfig.theme

  return (
    <>
      <div className="bg-brand-cream">
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                label="Charte graphique"
                title="Identité visuelle TCHAMADEU SARL"
                description="Référence des couleurs, typographies et éléments de marque utilisés sur le site."
                className="mb-16 max-w-3xl"
              />
            </Reveal>

            <div className="grid gap-16 lg:grid-cols-2">
              <Reveal>
                <h3 className="font-heading mb-6 text-2xl font-bold text-brand-dark">
                  Couleurs
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Or principal",
                      hex: colors.gold.hex,
                      cmyk: colors.gold.cmyk,
                      className: "bg-brand-gold",
                    },
                    {
                      name: "Noir profond",
                      hex: colors.dark.hex,
                      cmyk: colors.dark.cmyk,
                      className: "bg-brand-dark",
                    },
                    {
                      name: "Crème",
                      hex: colors.cream.hex,
                      cmyk: "—",
                      className: "bg-brand-cream border border-border",
                    },
                  ].map((color) => (
                    <div key={color.name} className="flex items-center gap-6">
                      <div
                        className={`h-20 w-20 shrink-0 ${color.className}`}
                      />
                      <div>
                        <p className="font-heading font-bold text-brand-dark">
                          {color.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          RVB {color.hex}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          CMJN {color.cmyk}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h3 className="font-heading mb-6 text-2xl font-bold text-brand-dark">
                  Typographies
                </h3>
                <div className="space-y-8">
                  <div className="border border-border bg-white p-6">
                    <p className="mb-2 text-xs uppercase tracking-wider text-brand-gold">
                      Titres — {fonts.heading}
                    </p>
                    <p className="font-heading text-3xl font-bold text-brand-dark">
                      Nos Services
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Utilisé pour h1, h2, h3 et titres de section
                    </p>
                  </div>
                  <div className="border border-border bg-white p-6">
                    <p className="mb-2 text-xs uppercase tracking-wider text-brand-gold">
                      Corps — {fonts.body}
                    </p>
                    <p className="text-base leading-relaxed text-brand-dark">
                      De la fondation à la finition, la solidité au rendez-vous.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Utilisé pour le texte courant et la navigation
                    </p>
                  </div>
                  <div className="border border-border bg-white p-6">
                    <p className="mb-2 text-xs uppercase tracking-wider text-brand-gold">
                      Labels — {fonts.display}
                    </p>
                    <p className="font-display text-sm uppercase tracking-[0.2em] text-brand-dark">
                      Notre philosophie
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Utilisé pour les labels et sous-titres fins
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150} className="mt-16">
              <h3 className="font-heading mb-6 text-2xl font-bold text-brand-dark">
                Logos
              </h3>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { src: siteConfig.logos.goldGrey, bg: "bg-white", label: "Or & gris" },
                  { src: siteConfig.logos.header, bg: "bg-brand-dark", label: "Or & blanc" },
                  { src: siteConfig.logos.white, bg: "bg-black", label: "Blanc" },
                ].map((logo) => (
                  <div
                    key={logo.label}
                    className={`flex flex-col items-center justify-center p-8 ${logo.bg}`}
                  >
                    <div className="relative mb-4 h-24 w-full">
                      <Image
                        src={logo.src}
                        alt={`Logo TCHAMADEU SARL — ${logo.label}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{logo.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-16">
              <div className="bg-white p-8 lg:p-12">
                <div className="mb-6 h-2 w-full bg-brand-gold" />
                <h2 className="font-heading mb-8 text-4xl font-bold text-brand-dark md:text-5xl">
                  Nos Services
                </h2>
                <p className="text-center text-sm leading-relaxed text-brand-gold md:text-base">
                  {siteConfig.services.map((s) => s.title).join(" ~ ")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  )
}

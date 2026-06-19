"use client"

import Image from "next/image"
import { useState } from "react"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { siteConfig } from "@/lib/site-config"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-dark text-white">
      <div className="pointer-events-none absolute -bottom-20 -left-20 opacity-5">
        <div className="relative h-96 w-96">
          <Image
            src={siteConfig.logos.footer}
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            label="Contact"
            title="Commencez votre projet avec nous"
            dark
            showGoldBar={false}
          />
          <p className="mb-10 max-w-md text-base leading-relaxed text-white/70">
            Contactez-nous pour discuter de votre projet en BTP, construction ou
            immobilier. Notre équipe vous répondra dans les plus brefs délais.
          </p>

          <ul className="space-y-4 text-sm text-white/70">
            <li>
              <span className="mb-1 block text-xs uppercase tracking-wider text-brand-gold">
                Téléphone
              </span>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-brand-gold"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-xs uppercase tracking-wider text-brand-gold">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-brand-gold"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-xs uppercase tracking-wider text-brand-gold">
                Adresse
              </span>
              {siteConfig.contact.address}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={150} direction="right">
          {submitted ? (
            <div className="border border-brand-gold/50 p-8 text-center">
              <p className="text-lg font-medium text-brand-gold">
                Merci pour votre message !
              </p>
              <p className="mt-2 text-sm text-white/70">
                Nous vous recontacterons très prochainement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="prenom" className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-gold focus:outline-none"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-gold focus:outline-none"
                    placeholder="Dupont"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-gold focus:outline-none"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  className="w-full border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-gold focus:outline-none"
                  placeholder="+237 6XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none border border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-gold focus:outline-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="border border-brand-gold px-8 py-3 text-sm font-medium text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

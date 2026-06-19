import { JsonLd } from "@/components/JsonLd"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { TeamSection } from "@/components/sections/TeamSection"
import { ShowcaseSection } from "@/components/sections/ShowcaseSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ShowcaseSection />
      <ContactSection />
    </>
  )
}

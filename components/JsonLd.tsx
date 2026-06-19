import { siteConfig } from "@/lib/site-config"

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logos.og}`,
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    areaServed: {
      "@type": "Country",
      name: "Cameroun",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: "French",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    sameAs: [],
    knowsAbout: siteConfig.keywords,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services TCHAMADEU SARL",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

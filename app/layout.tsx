import type { Metadata } from "next"
import { Inter, Montserrat, Raleway } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | BTP, Construction & Immobilier`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | BTP, Construction & Immobilier`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.logos.og,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — BTP, construction et immobilier`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | BTP, Construction & Immobilier`,
    description: siteConfig.description,
    images: [siteConfig.logos.og],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={cn(
        "h-full antialiased",
        montserrat.variable,
        inter.variable,
        raleway.variable
      )}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

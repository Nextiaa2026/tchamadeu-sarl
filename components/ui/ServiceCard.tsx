import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"

type ServiceCardProps = {
  title: string
  description: string
  image: string
  alt: string
  href?: string
}

export function ServiceCard({
  title,
  description,
  image,
  alt,
  href,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading mb-2 text-lg font-bold text-brand-dark">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {href && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-gold transition-colors group-hover:text-brand-dark">
            En savoir plus
            <ArrowRightIcon size={14} />
          </span>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="group flex flex-col overflow-hidden bg-white transition-shadow hover:shadow-lg"
      >
        {content}
      </Link>
    )
  }

  return (
    <article className="group flex flex-col overflow-hidden bg-white transition-shadow hover:shadow-lg">
      {content}
    </article>
  )
}

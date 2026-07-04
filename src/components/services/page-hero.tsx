import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";
import { CtaLink } from "@/components/shared/cta-link";
import { SITE } from "@/lib/constants";
import { asset } from "@/lib/asset";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  /** Override the default CTA pair. */
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** Cinematic interior-page hero — shorter than the homepage's 100vh. */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  lede,
  primaryCta = { label: "Request a Quote", href: "/request-quote/" },
  secondaryCta = { label: "Book This Service", href: SITE.bookingUrl },
}: PageHeroProps) {
  return (
    <section className="grain relative flex min-h-[62svh] items-end overflow-hidden lg:min-h-[640px]">
      <Image
        src={asset(image)}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent"
      />

      <div className="container-site relative z-10 pt-40 pb-16 lg:pb-20">
        <FadeUp>
          <p className="mb-5 flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-white/25" />
            <span className="eyebrow">{eyebrow}</span>
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#bdbdbd] sm:text-lg">
            {lede}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </CtaLink>
            <CtaLink href={secondaryCta.href} variant="outline">
              {secondaryCta.label}
            </CtaLink>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

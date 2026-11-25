import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { SITE } from "@/lib/constants";
import { asset } from "@/lib/asset";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

/**
 * The homepage is a chooser: one short headline, then the three service
 * doors (owner's order: tint, detailing, paint & cosmetic). Each door goes
 * to a page that holds everything about that service.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-background pt-24 lg:pt-32">
      <div className="container-site pb-12 lg:pb-16">
        <FadeUp className="max-w-3xl" y={16} duration={0.5}>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block size-2 rounded-full bg-[#df6b47]" aria-hidden />
            Rochester, Minnesota
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.3rem,4.6vw,4.1rem)] leading-[1] font-medium tracking-[-0.025em] text-balance">
            Tint, detailing, and paint care.{" "}
            <span className="text-metallic">What does your car need?</span>
          </h1>
        </FadeUp>

        <Stagger className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {serviceCategories.map((cat) => (
            <StaggerItem key={cat.id} className="h-full">
              <Link
                href={cat.href}
                className="press group panel flex h-full overflow-hidden outline-none hover:border-white/[0.18] focus-visible:ring-2 focus-visible:ring-ring/60 lg:flex-col"
              >
                <div className="relative w-28 shrink-0 overflow-hidden bg-elevated sm:w-44 lg:aspect-[16/10] lg:w-full">
                  {cat.image && (
                    <Image
                      src={asset(cat.image)}
                      alt={cat.imageAlt ?? ""}
                      fill
                      priority
                      sizes="(min-width: 1024px) 33vw, 176px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-center p-5 lg:p-7">
                  <p className="font-display text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    {cat.startingAt}
                  </p>
                  <h2 className="mt-1.5 flex items-center gap-2 font-display text-xl font-medium tracking-tight lg:mt-2 lg:text-[1.7rem]">
                    {cat.title}
                    <ArrowRight
                      className="size-4 text-[#e9d9bc] transition-transform duration-200 group-hover:translate-x-1 lg:size-5"
                      aria-hidden
                    />
                  </h2>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.2} y={12} className="mt-8 flex flex-wrap items-center gap-3">
          <CtaLink href={SITE.bookingUrl} variant="primary" size="md">
            Book a detail <ArrowUpRight aria-hidden />
          </CtaLink>
          <CtaLink href="/request-quote/" variant="outline" size="md">
            Request a quote
          </CtaLink>
          <a
            href={SITE.phoneHref}
            className="inline-flex h-10 items-center gap-2 px-2 font-display text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4" aria-hidden />
            {SITE.phone}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { inquiryServices } from "@/data/services";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

/**
 * Services we offer but haven't priced yet. These deliberately show no
 * number — every card routes to the quote form instead. A card with a real
 * photo uses it; one without falls back to an icon panel of the same size,
 * so the pair still reads as a set.
 */
export function InquiryServices({ index }: { index?: string }) {
  return (
    <section id="by-quote" className="section-pad scroll-mt-20 bg-surface">
      <div className="container-site">
        <SectionHeading
          index={index}
          eyebrow="By Quote"
          title="Ask us about these."
          lede="We take this work on, but pricing depends too much on what's in front of us to publish a number. Tell us what you have and we'll quote it."
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {inquiryServices.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <Link
                href={`/request-quote/?service=${service.id}`}
                className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.06] bg-elevated p-7 outline-none transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] focus-visible:ring-2 focus-visible:ring-ring/60 lg:h-80 lg:p-8"
              >
                {service.image ? (
                  <>
                    <Image
                      src={asset(service.image)}
                      alt={service.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/10"
                    />
                  </>
                ) : (
                  <span
                    aria-hidden
                    className="absolute -top-4 right-2 text-white/[0.04]"
                  >
                    <service.icon
                      className="size-44 lg:size-52"
                      strokeWidth={1}
                    />
                  </span>
                )}

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#bdbdbd] uppercase">
                    <service.icon
                      className="size-3.5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    By quote
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Request a quote
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

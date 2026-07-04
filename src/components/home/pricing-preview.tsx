import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { FadeUp } from "@/components/animations/fade-up";

export function PricingPreview() {
  return (
    <section id="pricing" className="section-pad">
      <div className="container-site">
        <SectionHeading
          index="07"
          eyebrow="Transparent Pricing"
          title="Premium results. Honest numbers."
          lede="Starting prices for a standard-size vehicle — your exact quote is confirmed before we ever arrive."
          align="center"
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={service.href}
                className="panel panel-hover group flex h-full flex-col items-center px-5 py-8 text-center outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                  {service.name}
                </p>
                <p className="mt-3 font-mono text-3xl font-semibold tracking-tight lg:text-4xl">
                  ${service.price}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  starting at
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Details
                  <ArrowRight className="size-3.5" aria-hidden />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.2} className="mt-10 text-center">
          <CtaLink href="/services/" variant="outline">
            View All Pricing
            <ArrowRight aria-hidden />
          </CtaLink>
        </FadeUp>
      </div>
    </section>
  );
}

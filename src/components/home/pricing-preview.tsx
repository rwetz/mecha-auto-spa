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
          title="Know the starting point."
          lede="Package prices vary by vehicle size. The full breakdown is one click away."
        />

        <Stagger className="mt-12 grid border-t border-[#e9d9bc]/20 lg:mt-14 lg:grid-cols-2 lg:gap-x-12">
          {featuredServices.map((service, index) => (
            <StaggerItem key={service.id}>
              <Link
                href={service.href}
                className="group flex h-full items-center gap-4 border-b border-[#e9d9bc]/20 py-6 outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <span className="font-mono text-xs text-[#d96c48]">0{index + 1}</span>
                <span className="min-w-0 flex-1 font-display text-lg font-medium leading-tight sm:text-xl">{service.name}</span>
                <span className="shrink-0 text-right">
                  <span className="block font-display text-xl font-medium sm:text-2xl">${service.price}</span>
                  <span className="block text-[11px] text-muted-foreground">starting at</span>
                </span>
                <ArrowRight className="hidden size-4 shrink-0 text-[#d96c48] transition-transform group-hover:translate-x-1 sm:block" aria-hidden />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.2} className="mt-10">
          <CtaLink href="/services/" variant="outline">
            View All Pricing
            <ArrowRight aria-hidden />
          </CtaLink>
        </FadeUp>
      </div>
    </section>
  );
}

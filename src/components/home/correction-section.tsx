import { ArrowRight } from "lucide-react";
import { correctionTiers } from "@/data/services";
import { CompareSlider } from "@/components/shared/compare-slider";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";

export function CorrectionSection() {
  return (
    <section id="paint-correction" className="section-pad overflow-hidden">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <FadeUp className="relative order-last lg:order-first">
          <CompareSlider
            before="/images/f150-correction-before.jpg"
            after="/images/f150-correction-after.jpg"
            alt="Ford truck rear panel before and after paint correction — swirl marks removed"
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <p className="mt-5 text-center font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Real client paint — drag to compare
          </p>
        </FadeUp>

        <div>
          <SectionHeading
            index="05"
            eyebrow="Paint Correction"
            title="A closer look at your paint."
            lede="Machine polishing can reduce visible swirls and surface defects. Compare a real client panel, then choose the level of correction that fits your vehicle."
          />

          <div className="mt-9 space-y-3">
            {correctionTiers.tiers.map((tier) => (
              <div
                key={tier.id}
                className="panel flex items-center justify-between gap-4 px-5 py-4"
              >
                <div>
                  <p className="font-display text-[15px] font-semibold tracking-tight">
                    {tier.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">
                    {tier.blurb}
                  </p>
                </div>
                <p className="shrink-0 text-right font-display text-[12px] text-muted-foreground">
                  from
                  <span className="ml-1.5 text-lg font-semibold text-foreground">
                    ${tier.price}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <CtaLink href="/paint-correction/" variant="primary">
              See Paint Correction
              <ArrowRight aria-hidden />
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

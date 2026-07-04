import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { correctionTiers } from "@/data/services";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";

export function CorrectionSection() {
  return (
    <section id="paint-correction" className="section-pad overflow-hidden">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <FadeUp className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/[0.06] lg:aspect-[5/4]">
            <Image
              src={asset("/images/paint-correction.jpg")}
              alt="Deep gloss reflection on corrected paint at dusk"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
            />
          </div>
        </FadeUp>

        <div>
          <SectionHeading
            index="05"
            eyebrow="Paint Correction"
            title="Remove the swirls. Restore the mirror."
            lede="Machine polishing measured in microns — swirl marks, light scratches, oxidation, and water spots permanently removed, not hidden under filler."
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
                <p className="shrink-0 text-right font-mono text-[12px] text-muted-foreground">
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

import type { Metadata } from "next";
import { CircleDot, Droplets, Scan, Sun } from "lucide-react";
import { correctionTiers } from "@/data/services";
import { jsonLd, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/services/page-hero";
import { PricingTiers } from "@/components/services/pricing-tiers";
import { CompareSlider } from "@/components/shared/compare-slider";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Paint Correction Rochester MN — Swirl & Scratch Removal",
  description:
    "Mobile paint correction in Rochester MN from $450. One-step and two-step machine polishing for swirls and surface defects.",
  alternates: { canonical: "/paint-correction/" },
};

const defects = [
  {
    icon: CircleDot,
    title: "Swirl Marks",
    description: "Fine circular scratches from automatic washes and bad towels.",
  },
  {
    icon: Scan,
    title: "Light Scratches",
    description: "Surface-level marring that hasn't broken through clear coat.",
  },
  {
    icon: Sun,
    title: "Oxidation",
    description: "UV-dulled, chalky paint that's lost its depth and color.",
  },
  {
    icon: Droplets,
    title: "Water Spots",
    description: "Mineral etching baked into the surface by hard water.",
  },
] as const;

const correctionAddOns = [
  { name: "Ceramic Coating After Correction", detail: "Ask about a coating for corrected paint" },
  { name: "Headlight Restoration", detail: "Available as a separately priced add-on" },
] as const;

export default function PaintCorrectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Paint Correction",
            description:
              "One-step and two-step machine polishing for swirls and surface defects.",
            path: "/paint-correction/",
            offers: correctionTiers.tiers.map((tier) => ({
              name: tier.name,
              price: tier.price,
            })),
          })
        )}
      />

      <PageHero
        image="/images/paint-correction.jpg"
        imageAlt="Mirror-like reflections across glossy dark paint at dusk"
        eyebrow="Paint Correction"
        title={
          <>
            Restore your paint.{" "}
            <span className="text-metallic">Refine the finish.</span>
          </>
        }
        lede="Machine polishing can reduce visible swirls and surface defects. The result depends on paint condition and available clear coat."
        primaryCta={{ label: "Request a Quote", href: "/request-quote/" }}
        secondaryCta={{ label: `Call ${SITE.phone}`, href: SITE.phoneHref }}
      />

      {/* What it removes */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            index="01"
            eyebrow="What It Fixes"
            title="See what polishing can improve."
            lede="Paint condition varies, so we assess the surface before recommending a one-step or two-step correction."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {defects.map((defect) => (
              <StaggerItem
                key={defect.title}
                className="panel panel-hover p-6 lg:p-7"
              >
                <defect.icon
                  className="size-5 text-[#bdbdbd]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight">
                  {defect.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {defect.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Result split */}
      <section className="section-pad bg-surface">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <CompareSlider
              before="/images/f150-correction-before.jpg"
              after="/images/f150-correction-after.jpg"
              alt="Ford truck rear panel before and after paint correction — swirl marks removed"
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <p className="mt-5 text-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Real client paint — drag to compare
            </p>
          </FadeUp>
          <div>
            <SectionHeading
              index="02"
              eyebrow="The Result"
              title="A finish that reads like glass."
              lede="Compare a real client panel before and after polishing. Results vary with paint condition and the level of correction chosen."
            />
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Ask about ceramic coating after correction if you want a separate
              protective layer over the polished finish.
            </p>
          </div>
        </div>
      </section>

      <PricingTiers group={correctionTiers} index="03" />

      {/* Add-ons + CTA */}
      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            index="04"
            eyebrow="Pairs Well With"
            title="Protect the work."
          />
          <div className="mt-10 grid gap-3 lg:max-w-3xl">
            {correctionAddOns.map((addon) => (
              <div
                key={addon.name}
                className="panel flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <p className="text-[15px] font-semibold tracking-tight">
                  {addon.name}
                </p>
                <p className="text-[13px] text-muted-foreground">
                  {addon.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink href="/request-quote/" variant="primary">
              Request a Quote
            </CtaLink>
            <CtaLink href={SITE.phoneHref} variant="outline">
              Call {SITE.phone}
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}

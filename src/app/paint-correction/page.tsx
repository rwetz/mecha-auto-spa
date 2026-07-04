import type { Metadata } from "next";
import Image from "next/image";
import { CircleDot, Droplets, Scan, Sun } from "lucide-react";
import { correctionTiers } from "@/data/services";
import { jsonLd, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/services/page-hero";
import { PricingTiers } from "@/components/services/pricing-tiers";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { SITE } from "@/lib/constants";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Paint Correction Rochester MN — Swirl & Scratch Removal",
  description:
    "Professional paint correction in Rochester MN from $450. One-step and two-step machine polishing that permanently removes swirls, scratches, and oxidation.",
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
  { name: "Ceramic Coating After Correction", detail: "Lock in the finish for years — the ideal pairing" },
  { name: "Paint Sealant", detail: "Six months of protection at a lighter price point" },
  { name: "Headlight Restoration", detail: "Match restored paint with clear, bright lenses" },
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
              "One-step and two-step machine polishing that removes swirl marks, scratches, oxidation, and water spots.",
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
        imageAlt="Mirror-gloss paint reflection on a corrected sports sedan at dusk"
        eyebrow="Paint Correction"
        title={
          <>
            Restore your paint.{" "}
            <span className="text-metallic">Remove imperfections.</span>
          </>
        }
        lede="Precision machine polishing that levels the clear coat itself — defects are permanently removed, not temporarily hidden."
        primaryCta={{ label: "Book Paint Correction", href: SITE.bookingUrl }}
        secondaryCta={{ label: "Request a Quote", href: "/request-quote/" }}
      />

      {/* What it removes */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            index="01"
            eyebrow="What It Fixes"
            title="Four defects. Gone for good."
            lede="If it lives in your clear coat, correction can remove it. We measure paint depth first, so we always know exactly how much room we have to work."
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/[0.06]">
              <Image
                src={asset("/images/correction-closeup.jpg")}
                alt="Close-up of corrected paint with crisp reflections"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
          <div>
            <SectionHeading
              index="02"
              eyebrow="The Result"
              title="A finish that reads like glass."
              lede="Corrected paint doesn't just shine — it reflects with edge-to-edge clarity. Streetlights draw crisp lines. Clouds render like a mirror. That's the standard we polish to."
            />
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Most owners pair correction with a ceramic coating: correcting
              first means the coating locks in a flawless surface instead of
              sealing defects underneath.
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
            <CtaLink href={SITE.bookingUrl} variant="primary">
              Book Paint Correction
            </CtaLink>
            <CtaLink href="/request-quote/" variant="outline">
              Request a Quote
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}

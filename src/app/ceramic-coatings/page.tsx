import type { Metadata } from "next";
import Image from "next/image";
import { ceramicBenefits, ceramicTiers } from "@/data/services";
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
  title: "Ceramic Coating Rochester MN — 1, 3 & 5 Year Packages",
  description:
    "Professional ceramic coating in Rochester MN from $299. Hydrophobic protection, UV resistance, and years of gloss — installed at your home or office.",
  alternates: { canonical: "/ceramic-coatings/" },
};

const process = [
  { step: "01", label: "Foam wash & decontamination" },
  { step: "02", label: "Clay bar & iron removal" },
  { step: "03", label: "Machine polish paint prep" },
  { step: "04", label: "Hand-applied ceramic layers" },
  { step: "05", label: "Cure, inspect & document" },
] as const;

const coatingAddOns = [
  { name: "Wheel Coating", detail: "Faces & barrels protected from brake dust" },
  { name: "Glass Coating", detail: "Rain sheets off the windshield at speed" },
  { name: "Trim Coating", detail: "Keeps plastics deep black, prevents fade" },
] as const;

export default function CeramicCoatingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Ceramic Coating",
            description:
              "Professional-grade ceramic coating packages rated for 1, 3, or 5 years of protection.",
            path: "/ceramic-coatings/",
            offers: ceramicTiers.tiers.map((tier) => ({
              name: tier.name,
              price: tier.price,
            })),
          })
        )}
      />

      <PageHero
        image="/images/ceramic-beading.jpg"
        imageAlt="Water spraying off ceramic-coated black paint"
        eyebrow="Ceramic Coatings"
        title={
          <>
            Ceramic protection <span className="text-metallic">that lasts years.</span>
          </>
        }
        lede="Advanced hydrophobic coating for unmatched gloss, durability, and protection — prepped and installed by hand, rated for up to 5 years."
        primaryCta={{ label: "View Packages", href: "#pricing" }}
        secondaryCta={{ label: "Request Consultation", href: "/request-quote/" }}
      />

      {/* Benefits */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            index="01"
            eyebrow="Why Ceramic"
            title="Wax protects for weeks. Ceramic protects for years."
            lede="A ceramic coating chemically bonds to your clear coat, forming a sacrificial glass-like layer that outperforms any wax or sealant."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ceramicBenefits.map((benefit) => (
              <StaggerItem
                key={benefit.title}
                className="panel panel-hover p-6 lg:p-7"
              >
                <benefit.icon
                  className="size-5 text-[#bdbdbd]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Install process strip */}
      <section className="border-y border-white/[0.05] bg-surface">
        <div className="container-site py-12 lg:py-14">
          <FadeUp className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="eyebrow shrink-0">Install Process</p>
            <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-7">
              {process.map((item) => (
                <li key={item.step} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-muted-foreground/60">
                    {item.step}
                  </span>
                  <span className="text-sm text-[#bdbdbd]">{item.label}</span>
                </li>
              ))}
            </ol>
          </FadeUp>
        </div>
      </section>

      <div id="pricing" className="scroll-mt-20">
        <PricingTiers group={ceramicTiers} index="02" />
      </div>

      {/* Coating add-ons + supporting image */}
      <section className="section-pad bg-surface">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              index="03"
              eyebrow="Coating Add-Ons"
              title="Coat everything the road attacks."
              lede="Each add-on runs $50–$150 depending on your package and vehicle."
            />
            <ul className="mt-9 space-y-3">
              {coatingAddOns.map((addon) => (
                <li
                  key={addon.name}
                  className="panel flex items-center justify-between gap-4 px-5 py-4"
                >
                  <div>
                    <p className="text-[15px] font-semibold tracking-tight">
                      {addon.name}
                    </p>
                    <p className="mt-0.5 text-[13px] text-muted-foreground">
                      {addon.detail}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[13px] text-muted-foreground">
                    $50–$150
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href="/request-quote/" variant="primary">
                Request Ceramic Consultation
              </CtaLink>
              <CtaLink href={SITE.phoneHref} variant="outline">
                Call {SITE.phone}
              </CtaLink>
            </div>
          </div>
          <FadeUp delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/[0.06]">
              <Image
                src={asset("/images/daily-driver.jpg")}
                alt="Water beading across a freshly coated black Tesla"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

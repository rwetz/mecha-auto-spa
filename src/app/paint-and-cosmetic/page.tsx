import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ceramicTiers,
  correctionTiers,
  cosmeticRestoration,
} from "@/data/services";
import { jsonLd, serviceSchema } from "@/lib/schema";
import { asset } from "@/lib/asset";
import { PageHero } from "@/components/services/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { CorrectionSection } from "@/components/home/correction-section";
import { CeramicSection } from "@/components/home/ceramic-section";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Paint Correction, Ceramic Coating & Restoration | Rochester MN",
  description:
    "Paint correction from $450, ceramic coatings from $299, and headlight and trim restoration add-ons in Rochester, MN.",
  alternates: { canonical: "/paint-and-cosmetic/" },
};

const deepPages = [
  {
    name: "Paint Correction",
    description:
      "One-step and two-step machine polishing for swirls and surface defects.",
    price: `from $${correctionTiers.tiers[0].price}`,
    image: "/images/paint-correction.jpg",
    href: "/paint-correction/",
  },
  {
    name: "Ceramic Coatings",
    description: "Packages rated for 1, 3, or 5 years, with paint prep included.",
    price: `from $${ceramicTiers.tiers[0].price}`,
    image: "/images/ceramic-beading.jpg",
    href: "/ceramic-coatings/",
  },
] as const;

export default function PaintAndCosmeticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Paint Correction and Ceramic Coating",
            description: "Machine paint correction and ceramic coating packages.",
            path: "/paint-and-cosmetic/",
            offers: [...correctionTiers.tiers, ...ceramicTiers.tiers].map(
              (t) => ({ name: t.name, price: t.price })
            ),
          })
        )}
      />

      <PageHero
        image="/images/paint-correction.jpg"
        imageAlt="Mirror-like reflections across glossy dark paint at dusk"
        eyebrow="Paint & Cosmetic"
        title={
          <>
            Correction, coatings, <span className="text-metallic">restoration.</span>
          </>
        }
        primaryCta={{ label: "Request a Quote", href: "/request-quote/?c=paint" }}
      />

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            index="01"
            eyebrow="Services"
            title="Correct it, then protect it."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {deepPages.map((page) => (
              <StaggerItem key={page.name}>
                <Link
                  href={page.href}
                  className="press group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.06] p-7 outline-none hover:border-white/[0.16] focus-visible:ring-2 focus-visible:ring-ring/60 lg:h-80 lg:p-8"
                >
                  <Image
                    src={asset(page.image)}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                  />
                  <div className="relative z-10">
                    <p className="font-display text-[11px] tracking-[0.25em] text-[#bdbdbd] uppercase">
                      {page.price}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                      {page.name}
                    </h2>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                      See packages
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
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

      <CorrectionSection index="02" />
      <CeramicSection index="03" />

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            index="04"
            eyebrow="Restoration"
            title="Clearer lenses, darker trim."
            lede="Add either one to any detail package."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
            {cosmeticRestoration.map((item) => (
              <StaggerItem
                key={item.name}
                className="panel panel-hover flex items-center gap-4 p-5"
              >
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-elevated">
                  <item.icon
                    className="size-[18px] text-[#bdbdbd]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {item.name}
                    </h3>
                    <span className="font-display text-[12px] text-muted-foreground">
                      {item.priceRange}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

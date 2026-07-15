import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { detailPackages } from "@/data/services";
import { jsonLd, serviceSchema } from "@/lib/schema";
import { asset } from "@/lib/asset";
import { PageHero } from "@/components/services/page-hero";
import { PricingTiers } from "@/components/services/pricing-tiers";
import { AddonsGrid } from "@/components/services/addons-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Detailing Services & Pricing | Rochester MN",
  description:
    "Exterior, interior, and full-detail packages from $90. Transparent tiered pricing for mobile auto detailing in Rochester, Winona, and Southern Minnesota.",
  alternates: { canonical: "/services/" },
};

const specialtyPages = [
  {
    name: "Ceramic Coatings",
    description: "Years of gloss and protection, applied by hand.",
    price: "from $299",
    image: "/images/ceramic-beading.jpg",
    href: "/ceramic-coatings/",
  },
  {
    name: "Paint Correction",
    description: "Swirl and defect removal for a mirror finish.",
    price: "from $450",
    image: "/images/paint-correction.jpg",
    href: "/paint-correction/",
  },
] as const;

export default function ServicesPage() {
  const offers = detailPackages.tiers.map((tier) => ({
    name: tier.name,
    price: tier.price,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Auto Detailing",
            description:
              "Mobile exterior, interior, and full-vehicle detailing packages.",
            path: "/services/",
            offers,
          })
        )}
      />

      <PageHero
        image="/images/mustang-night-rear.jpg"
        imageAlt="Freshly detailed Mustang GT under station lights at night"
        eyebrow="Services & Pricing"
        title={
          <>
            A catalog, <span className="text-metallic">not a car wash menu.</span>
          </>
        }
        lede="Every package below is a defined process with defined results. Pick your level — we handle the rest, at your driveway or workplace."
      />

      <PricingTiers group={detailPackages} index="01" />
      <AddonsGrid index="02" />

      {/* Specialty landing pages */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            index="03"
            eyebrow="Specialty Services"
            title="For paint that deserves more."
            lede="Correction and coating work is its own discipline — each has a dedicated page with full details."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {specialtyPages.map((page) => (
              <StaggerItem key={page.name}>
                <Link
                  href={page.href}
                  className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.06] p-7 outline-none transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] focus-visible:ring-2 focus-visible:ring-ring/60 lg:h-80 lg:p-8"
                >
                  <Image
                    src={asset(page.image)}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"
                  />
                  <div className="relative z-10">
                    <p className="font-mono text-[11px] tracking-[0.25em] text-[#bdbdbd] uppercase">
                      {page.price}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                      {page.name}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
                      {page.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                      Explore
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

      <FinalCta />
    </>
  );
}

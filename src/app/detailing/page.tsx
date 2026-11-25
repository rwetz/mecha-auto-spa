import type { Metadata } from "next";
import { detailPackages, inquiryServices } from "@/data/services";
import { detailingFaqs } from "@/data/faqs";
import { faqSchema, jsonLd, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/services/page-hero";
import { PricingTiers } from "@/components/services/pricing-tiers";
import { AddonsGrid } from "@/components/services/addons-grid";
import { InquiryServices } from "@/components/services/inquiry-services";
import { BeforeAfter } from "@/components/home/before-after";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Auto Detailing Packages & Pricing | Rochester MN",
  description:
    "Exterior, interior, full, and Platinum detailing packages from $105, priced by vehicle size, plus add-ons and watercraft detailing in Rochester, MN.",
  alternates: { canonical: "/detailing/" },
};

/** Everything detailing, what the homepage used to carry. */
export default function DetailingPage() {
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
            description: "Exterior, interior, and full-vehicle detailing packages.",
            path: "/detailing/",
            offers,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(detailingFaqs))}
      />

      <PageHero
        image="/images/mobile-hand-wash-hero.jpg"
        imageAlt="A detailer hand-washing a foam-covered sedan outdoors"
        eyebrow="Detailing"
        title={
          <>
            Detailing, <span className="text-metallic">from $105.</span>
          </>
        }
        primaryCta={{ label: "Book a detail", href: SITE.bookingUrl }}
        secondaryCta={{ label: "Request a Quote", href: "/request-quote/?c=detailing" }}
      />

      <PricingTiers group={detailPackages} index="01" />
      <AddonsGrid index="02" />
      <BeforeAfter index="03" />
      <InquiryServices
        index="04"
        title="Boats and watercraft, by quote."
        items={inquiryServices}
      />
      <Faq index="05" items={detailingFaqs} />
      <FinalCta />
    </>
  );
}

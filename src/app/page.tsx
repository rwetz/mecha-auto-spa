import { Hero } from "@/components/home/hero";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { generalFaqs } from "@/data/faqs";
import { faqSchema, jsonLd } from "@/lib/schema";

/* Kept short on purpose: the three service doors, then neutral info only.
 * Service detail lives on /window-tinting, /detailing, /paint-and-cosmetic. */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(generalFaqs))}
      />
      <Hero />
      {/* <Reviews /> re-enable once real Google reviews exist */}
      <Faq items={generalFaqs} />
      <FinalCta />
    </>
  );
}

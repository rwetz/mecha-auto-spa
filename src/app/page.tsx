import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyMecha } from "@/components/home/why-mecha";
import { BeforeAfter } from "@/components/home/before-after";
import { CeramicSection } from "@/components/home/ceramic-section";
import { CorrectionSection } from "@/components/home/correction-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";
import { ServiceArea } from "@/components/home/service-area";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { faqs } from "@/data/faqs";
import { faqSchema, jsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyMecha />
      <BeforeAfter />
      <CeramicSection />
      <CorrectionSection />
      <HowItWorks />
      <PricingPreview />
      {/* <Reviews /> — re-enable once real Google reviews exist */}
      <ServiceArea />
      <Faq />
      <FinalCta />
    </>
  );
}

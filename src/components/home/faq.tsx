import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-surface">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="10"
            eyebrow="FAQ"
            title="Questions, answered straight."
            lede="Everything most owners ask before their first appointment. Anything else — call or send a quote request."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/request-quote/" variant="outline" size="md">
              Ask a Question
            </CtaLink>
          </div>
        </div>

        <FadeUp delay={0.1}>
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-left font-display text-[15px] font-semibold tracking-tight hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

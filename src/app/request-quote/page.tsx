import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { QuoteForm } from "@/components/booking/quote-form";
import { FadeUp } from "@/components/animations/fade-up";
import { CtaLink } from "@/components/shared/cta-link";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Prepare a quote request for window tinting, detailing, paint correction, or ceramic coating in Rochester, MN.",
  alternates: { canonical: "/request-quote/" },
};


export default function RequestQuotePage() {
  return (
    <div className="bg-background">
      <section className="section-pad pt-36 lg:pt-44">
        <div className="container-site">
          <FadeUp className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3">
              <span className="eyebrow">Request a Quote</span>
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Tell us about <span className="text-metallic">your vehicle.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              This opens an email draft. Send it and we&rsquo;ll reply with your
              price and our address.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <FadeUp delay={0.1}>
              <QuoteForm />
            </FadeUp>

            <FadeUp delay={0.2} className="lg:pt-2">

              <div className="panel p-6">
                <p className="eyebrow">Prefer to talk?</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-3 block font-display text-2xl font-semibold tracking-tight hover:underline"
                >
                  {SITE.phone}
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  {SITE.hours[0].days}: {SITE.hours[0].hours}
                </p>
                <div className="mt-5">
                  <CtaLink
                    href={`mailto:${SITE.email}`}
                    variant="outline"
                    size="md"
                  >
                    Or email us directly
                  </CtaLink>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}

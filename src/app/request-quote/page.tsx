import type { Metadata } from "next";
import { Clock, MessageSquareQuote, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { QuoteForm } from "@/components/booking/quote-form";
import { FadeUp } from "@/components/animations/fade-up";
import { CtaLink } from "@/components/shared/cta-link";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get an exact detailing quote for your vehicle in minutes. Mobile detailing, ceramic coatings, and paint correction across Rochester and Southern MN.",
  alternates: { canonical: "/request-quote/" },
};

const expectations = [
  {
    icon: MessageSquareQuote,
    title: "Exact pricing, up front",
    description:
      "We confirm your final price before the appointment — never a surprise on arrival.",
  },
  {
    icon: Clock,
    title: "Reply within one business day",
    description:
      "Usually much faster. Need it sooner? Call us directly and we'll sort it out.",
  },
  {
    icon: Phone,
    title: "A human, not a bot",
    description:
      "Your quote is reviewed by the person who will actually detail your vehicle.",
  },
] as const;

export default function RequestQuotePage() {
  return (
    <div className="bg-background">
      <section className="section-pad pt-36 lg:pt-44">
        <div className="container-site">
          <FadeUp className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-white/25" />
              <span className="eyebrow">Request a Quote</span>
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Tell us about your vehicle.{" "}
              <span className="text-metallic">We&rsquo;ll handle the rest.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Two minutes now saves you a trip to a shop. Every quote is exact,
              honest, and reviewed by the detailer doing the work.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <FadeUp delay={0.1}>
              <QuoteForm />
            </FadeUp>

            <FadeUp delay={0.2} className="space-y-8 lg:pt-2">
              <ul className="space-y-7">
                {expectations.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-elevated">
                      <item.icon
                        className="size-[18px] text-[#bdbdbd]"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <div>
                      <h2 className="text-[15px] font-semibold tracking-tight">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="panel p-6">
                <p className="eyebrow">Prefer to talk?</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-3 block font-mono text-2xl font-semibold tracking-tight hover:underline"
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

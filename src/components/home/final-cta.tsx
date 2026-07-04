import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";

export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden">
      <Image
        src="/images/final-cta.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-background/85" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
      />

      <div className="container-site relative z-10 py-28 text-center lg:py-40">
        <FadeUp>
          <p className="mb-6 flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-10 bg-white/25" />
            <span className="eyebrow">Ready When You Are</span>
            <span aria-hidden className="h-px w-10 bg-white/25" />
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Ready to restore{" "}
            <span className="text-metallic">your vehicle?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#bdbdbd] sm:text-lg">
            Get a quote in minutes. We come to you — fully equipped, fully
            insured, satisfaction guaranteed.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CtaLink href="/request-quote/" variant="primary">
              Request a Quote
            </CtaLink>
            <CtaLink href={SITE.bookingUrl} variant="outline">
              Book Appointment
            </CtaLink>
            <CtaLink href={SITE.phoneHref} variant="ghost">
              <Phone aria-hidden />
              {SITE.phone}
            </CtaLink>
          </div>
          <p className="mt-10 font-mono text-[11px] tracking-[0.25em] text-muted-foreground/70 uppercase">
            Fully Mobile · Fully Insured · Serving Southern MN
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

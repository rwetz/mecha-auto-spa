import type { Metadata } from "next";
import { ArrowRight, Check, Clock, Mail, Phone, ShieldCheck, Eraser } from "lucide-react";
import { tint, tintGallery, tintVideo } from "@/data/services";
import { SITE } from "@/lib/constants";
import { jsonLd, serviceSchema } from "@/lib/schema";
import { PageHero } from "@/components/services/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";
import { ShadePreview } from "@/components/tint/shade-preview";
import { TintGallery } from "@/components/tint/tint-gallery";

export const metadata: Metadata = {
  title: "Window Tinting | Ceramic Tint in Rochester MN",
  description: `Ceramic window tint in Rochester, MN. Shades from 5% to 50%, packages from $${tint.startingAt}+, with free re-dos and a lifetime guarantee for as long as you own the vehicle.`,
  alternates: { canonical: "/window-tinting/" },
};

/* Every fact on this page comes from `tint` in src/data/services.ts
 * (owner, Nov 2026). Nothing about tint legality, owner's instruction. */
export default function WindowTintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: "Window Tinting",
            description: `${tint.film} in ${tint.shades.join("%, ")}% shades.`,
            path: "/window-tinting/",
            offers: [{ name: "Window tint packages", price: tint.startingAt }],
          })
        )}
      />

      <PageHero
        image="/images/tint/tint-hero.jpg"
        imageAlt="A grey SUV with tinted windows, side view"
        eyebrow="Window Tinting"
        title={
          <>
            Ceramic tint,{" "}
            <span className="text-metallic">from ${tint.startingAt}+</span>
          </>
        }
        lede="Quoted for your vehicle and the windows you want done."
        primaryCta={{ label: "Request a tint quote", href: "/request-quote/?c=tint" }}
      />

      <TintGallery index="01" photos={tintGallery} video={tintVideo} />

      {/* Shade preview */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <SectionHeading
            index="02"
            eyebrow="Shades"
            title="Pick how dark you want it."
          />
          <FadeUp delay={0.1}>
            <ShadePreview />
          </FadeUp>
        </div>
      </section>

      {/* Windows + package */}
      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            index="03"
            eyebrow="Packages"
            title={`Packages from $${tint.startingAt}+`}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <FadeUp className="panel p-7 lg:col-span-2 lg:p-9">
              <p className="eyebrow">Windows we tint</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {tint.windows.map((w) => (
                  <li key={w} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                    <span className="text-sm text-[#bdbdbd]">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 border-t border-white/[0.06] pt-6">
                <Eraser className="mt-0.5 size-4 shrink-0 text-[#bdbdbd]" strokeWidth={1.75} aria-hidden />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tint.removal}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.08} className="panel p-7 lg:p-9">
              <p className="eyebrow flex items-center gap-2">
                <Clock className="size-3.5" aria-hidden /> How long it takes
              </p>
              <dl className="mt-6 divide-y divide-white/[0.06]">
                {tint.timing.map((t) => (
                  <div key={t.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm text-muted-foreground">{t.label}</dt>
                    <dd className="font-display text-sm">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-pad">
        <div className="container-site">
          <FadeUp className="panel flex items-start gap-5 p-7 lg:p-10">
            <ShieldCheck
              className="mt-1 size-6 shrink-0 text-[#d96c48]"
              strokeWidth={1.75}
              aria-hidden
            />
            <div>
              <p className="eyebrow">Guarantee</p>
              <ul className="mt-4 space-y-2">
                {tint.guarantee.map((g) => (
                  <li
                    key={g}
                    className="font-display text-xl font-medium tracking-tight sm:text-2xl"
                  >
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Quote */}
      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            index="04"
            eyebrow="Get a quote"
            title="Tell us the car and the windows."
            lede="We'll reply with your price and our address."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaLink href="/request-quote/?c=tint" variant="primary">
              Request a tint quote <ArrowRight aria-hidden />
            </CtaLink>
            <CtaLink href={SITE.phoneHref} variant="outline">
              <Phone aria-hidden /> {SITE.phone}
            </CtaLink>
            <CtaLink href={`mailto:${SITE.email}`} variant="ghost">
              <Mail aria-hidden /> {SITE.email}
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}

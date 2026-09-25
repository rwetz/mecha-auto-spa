import Image from "next/image";
import { ceramicBenefits, ceramicTiers } from "@/data/services";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";

export function CeramicSection() {
  return (
    <section id="ceramic" className="section-pad overflow-hidden bg-surface">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            index="04"
            eyebrow="Ceramic Coatings"
            title="Ceramic care, matched to your vehicle."
            lede="Explore coating packages rated for 1, 3, or 5 years, with paint preparation included."
          />

          {/* Benefit chips */}
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {ceramicBenefits.slice(0, 5).map((benefit) => (
              <li
                key={benefit.title}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-[#bdbdbd]"
              >
                <benefit.icon
                  className="size-3.5 text-muted-foreground"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {benefit.title}
              </li>
            ))}
          </ul>

          {/* Pricing preview — details live on the dedicated page */}
          <div className="mt-9 grid grid-cols-3 gap-3">
            {ceramicTiers.tiers.map((tier) => (
              <div
                key={tier.id}
                className="panel px-4 py-4 text-center sm:px-5"
              >
                <p className="font-display text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  {tier.name.replace(" Ceramic", "")}
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold sm:text-2xl">
                  ${tier.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink href="/ceramic-coatings/" variant="primary">
              Learn More
            </CtaLink>
            <CtaLink href="/ceramic-coatings/#pricing" variant="outline">
              View Pricing
            </CtaLink>
          </div>
        </div>

        <FadeUp delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.06] sm:aspect-square lg:aspect-[4/5]">
            <Image
              src={asset("/images/ceramic-beading.jpg")}
              alt="Water sheeting off glossy black paint"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
              <p className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">
                HYDROPHOBIC LAYER
              </p>
              <p className="mt-1 font-display text-sm font-semibold">
                Water beads and sheets off
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

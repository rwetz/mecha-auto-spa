import { Check } from "lucide-react";
import type { TierGroup } from "@/data/services";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { CtaLink } from "@/components/shared/cta-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

interface PricingTiersProps {
  group: TierGroup;
  index?: string;
  /** Alternate background band. */
  surface?: boolean;
}

/**
 * Tiered product selection — deliberately not a pricing table.
 * Each tier reads like a product card with its own conversion path.
 */
export function PricingTiers({ group, index, surface }: PricingTiersProps) {
  const cols =
    group.tiers.length === 2
      ? "md:grid-cols-2 lg:max-w-4xl lg:mx-auto"
      : group.tiers.length === 4
        ? "md:grid-cols-2 xl:grid-cols-4"
        : "md:grid-cols-3";

  return (
    <section
      id={group.id}
      className={cn("section-pad scroll-mt-20", surface && "bg-surface")}
    >
      <div className="container-site">
        <SectionHeading
          index={index}
          eyebrow="Pricing"
          title={group.title}
          lede={group.subtitle}
        />

        <Stagger className={cn("mt-12 grid gap-5 lg:mt-14", cols)}>
          {group.tiers.map((tier) => (
            <StaggerItem key={tier.id} className="h-full">
              <article
                className={cn(
                  "panel panel-hover relative flex h-full flex-col p-7 lg:p-8",
                  tier.popular && "border-white/[0.16] bg-elevated"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-7 rounded-full border border-white/15 bg-background px-3 py-1 font-mono text-[10px] tracking-[0.25em] text-[#bdbdbd]">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-semibold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {tier.priceNote ?? "starting at"}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.blurb}
                </p>
                {tier.vehiclePrices && (
                  <ul className="mt-5 space-y-1.5 border-t border-white/[0.06] pt-5 font-mono text-[13px]">
                    {(
                      [
                        ["Cars", tier.vehiclePrices.cars],
                        ["SUVs", tier.vehiclePrices.suvs],
                        ["Full-size trucks", tier.vehiclePrices.trucks],
                      ] as const
                    ).map(([label, price]) => (
                      <li key={label} className="flex justify-between">
                        <span className="text-muted-foreground">{label}</span>
                        <span>${price}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="mt-6 flex-1 space-y-3 border-t border-white/[0.06] pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-success"
                        aria-hidden
                      />
                      <span className="text-sm text-[#bdbdbd]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CtaLink
                    href={SITE.bookingUrl}
                    variant={tier.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    Book Now
                  </CtaLink>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

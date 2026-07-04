import { addOns } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

export function AddonsGrid({ index }: { index?: string }) {
  return (
    <section id="add-ons" className="section-pad scroll-mt-20 bg-surface">
      <div className="container-site">
        <SectionHeading
          index={index}
          eyebrow="Add-Ons"
          title="Finish it exactly the way you want."
          lede="Stack any of these onto a detail or coating package. Final pricing depends on vehicle size and condition — always confirmed up front."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addon) => (
            <StaggerItem
              key={addon.name}
              className="panel panel-hover flex items-start gap-4 p-6"
            >
              <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-elevated">
                <addon.icon
                  className="size-[18px] text-[#bdbdbd]"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[15px] font-semibold tracking-tight">
                    {addon.name}
                  </h3>
                  <span className="font-mono text-[12px] text-muted-foreground">
                    {addon.priceRange}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {addon.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

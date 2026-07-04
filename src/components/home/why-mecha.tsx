import Image from "next/image";
import { Check } from "lucide-react";
import { whyMechaFeatures } from "@/data/services";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeUp } from "@/components/animations/fade-up";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

export function WhyMecha() {
  return (
    <section id="why-mecha" className="section-pad bg-surface">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeUp className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.06] sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={asset("/images/why-mecha.jpg")}
              alt="Black Mercedes-AMG GT detailed by Mecha Auto Spa"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            />
          </div>
          {/* Floating spec chip */}
          <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              PAINT-SAFE PROCESS
            </p>
            <p className="mt-1 font-display text-sm font-semibold">
              Zero swirls introduced. Ever.
            </p>
          </div>
        </FadeUp>

        <div>
          <SectionHeading
            index="02"
            eyebrow="Why Mecha"
            title="Not a car wash. An appearance specialist."
            lede="Every vehicle gets a documented, methodical process — the kind of care you'd expect for a six-figure build, applied to every daily driver."
          />
          <Stagger className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {whyMechaFeatures.map((feature) => (
              <StaggerItem key={feature.title} className="flex gap-3.5">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-success/30 bg-success/10">
                  <Check className="size-3.5 text-success" aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

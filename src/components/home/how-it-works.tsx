import { howItWorks } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeading
          index="06"
          eyebrow="How It Works"
          title="Easy from the first click."
        />

        <Stagger className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {howItWorks.map((step) => (
            <StaggerItem
              key={step.step}
              className="relative border-t border-[#e9d9bc]/25 pt-6"
            >
              <span className="font-display text-[12px] text-[#d96c48]">
                {step.step}
              </span>
              <h3 className="mt-7 font-display text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

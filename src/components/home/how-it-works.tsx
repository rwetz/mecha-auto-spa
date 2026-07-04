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
          title="From quote to like-new in four steps."
          align="center"
        />

        <Stagger className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute top-[52px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          {howItWorks.map((step) => (
            <StaggerItem
              key={step.step}
              className="panel panel-hover relative p-7 text-center"
            >
              <span className="absolute top-5 right-5 font-mono text-[11px] text-muted-foreground/50">
                {step.step}
              </span>
              <span className="relative mx-auto flex size-14 items-center justify-center rounded-full border border-white/10 bg-elevated">
                <step.icon
                  className="size-5.5 text-foreground"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold tracking-tight">
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

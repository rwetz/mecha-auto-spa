import { FlaskConical, Settings2, ShieldCheck, Truck } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

const items = [
  {
    icon: Truck,
    title: "Fully Mobile",
    description:
      "Your driveway, your office — the detailing studio comes to you.",
  },
  {
    icon: Settings2,
    title: "Professional Equipment",
    description:
      "Extractors and calibrated machine polishers on every job.",
  },
  {
    icon: FlaskConical,
    title: "Premium Products",
    description:
      "Professional-grade chemicals and coatings — nothing off a shelf.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description:
      "If anything isn't right, we come back and make it right.",
  },
] as const;

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-white/[0.05] bg-surface">
      <div className="container-site py-14 lg:py-16">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem
              key={item.title}
              className="panel panel-hover p-6 lg:p-7"
            >
              <item.icon
                className="size-5 text-[#bdbdbd]"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

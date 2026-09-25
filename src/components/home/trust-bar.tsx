import { ShieldCheck, Truck, Wrench } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Fully Mobile",
    description: "Driveways and workplaces around Rochester.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description: "Foam cannon, extractor, and machine polishers.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description: "A 48-hour window to make it right.",
  },
] as const;

export function TrustBar() {
  return (
    <section id="trust" className="border-b border-[#e9d9bc]/15 bg-surface">
      <div className="container-site py-10 lg:py-12">
        <div className="grid gap-0 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 border-b border-[#e9d9bc]/15 py-5 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <item.icon
                className="mt-1 size-5 shrink-0 text-[#d96c48]"
                strokeWidth={1.75}
                aria-hidden
              />
              <div>
                <h3 className="font-display text-base font-medium tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

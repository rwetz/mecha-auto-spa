import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

export function ServicesGrid() {
  return (
    <section id="services" className="section-pad">
      <div className="container-site">
        <SectionHeading
          index="01"
          eyebrow="Services"
          title="Detailing, engineered to a standard."
          lede="Four core services. Every one performed with the same paint-safe process, premium products, and obsessive attention to detail."
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-6">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-card outline-none transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_32px_64px_-32px_rgba(0,0,0,0.9)] focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} — Mecha Auto Spa`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 pt-2 lg:p-8 lg:pt-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight lg:text-2xl">
                      {service.name}
                    </h3>
                    <p className="shrink-0 font-mono text-[13px] text-muted-foreground">
                      from{" "}
                      <span className="text-base font-semibold text-foreground">
                        ${service.price}
                      </span>
                    </p>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

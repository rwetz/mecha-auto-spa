import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/services";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";

export function ServicesGrid() {
  return (
    <section id="services" className="section-pad">
      <div className="container-site">
        <SectionHeading
          index="01"
          eyebrow="Services"
          title="The right care for where your car is now."
          lede="Choose a starting point. Each package has clear pricing and a simple path to booking."
        />

        <Stagger className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:mt-16">
          {featuredServices.map((service, index) => (
            <StaggerItem key={service.id}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/10]">
                  <Image
                    src={asset(service.image)}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                  <span className="absolute top-4 left-4 rounded-sm bg-[#11100e]/85 px-2.5 py-1.5 font-mono text-[11px] text-[#f3eee5]">0{index + 1}</span>
                </div>

                <div className="flex flex-1 flex-col border-b border-[#e9d9bc]/20 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium tracking-tight lg:text-3xl">
                      {service.name}
                    </h3>
                    <p className="shrink-0 font-mono text-[12px] text-muted-foreground">
                      from{" "}
                      <span className="text-base font-semibold text-foreground">
                        ${service.price}
                      </span>
                    </p>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#e9d9bc]">
                    See package
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

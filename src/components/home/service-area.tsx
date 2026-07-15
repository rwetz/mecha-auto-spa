import { serviceCities } from "@/data/locations";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";

/** Rough geographic positions on a 600×440 canvas (not to scale). */
const cityNodes: Record<string, { x: number; y: number }> = {
  Rochester: { x: 226, y: 270 },
  Winona: { x: 462, y: 168 },
  Eyota: { x: 328, y: 262 },
  "Fountain City": { x: 508, y: 96 },
};

function AreaMap() {
  const rochester = cityNodes["Rochester"];
  return (
    <svg
      viewBox="0 0 600 440"
      role="img"
      aria-label="Map of Mecha Auto Spa service area from Rochester to the Winona river valley"
      className="w-full"
    >
      {/* Dot grid backdrop */}
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <radialGradient id="pulse" r="0.5">
          <stop offset="0%" stopColor="rgba(245,245,245,0.14)" />
          <stop offset="100%" stopColor="rgba(245,245,245,0)" />
        </radialGradient>
      </defs>
      <rect width="600" height="440" fill="url(#dots)" />

      {/* Coverage halo around Rochester */}
      <circle cx={rochester.x} cy={rochester.y} r="150" fill="url(#pulse)" />
      <circle
        cx={rochester.x}
        cy={rochester.y}
        r="150"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeDasharray="3 6"
      />

      {/* Routes from HQ */}
      {serviceCities
        .filter((city) => city.name !== "Rochester")
        .map((city) => {
          const node = cityNodes[city.name];
          return (
            <line
              key={city.name}
              x1={rochester.x}
              y1={rochester.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          );
        })}

      {/* City nodes */}
      {serviceCities.map((city) => {
        const node = cityNodes[city.name];
        const isPrimary = Boolean(city.primary);
        return (
          <g key={city.name}>
            <circle
              cx={node.x}
              cy={node.y}
              r={isPrimary ? 6 : 3.5}
              fill={isPrimary ? "#f5f5f5" : "#787878"}
            />
            {isPrimary && (
              <circle
                cx={node.x}
                cy={node.y}
                r="11"
                fill="none"
                stroke="rgba(245,245,245,0.3)"
              />
            )}
            <text
              x={node.x}
              y={node.y - (isPrimary ? 18 : 12)}
              textAnchor="middle"
              fill={isPrimary ? "#f5f5f5" : "#9e9e9e"}
              fontSize={isPrimary ? 13 : 11}
              fontFamily="var(--font-jetbrains), monospace"
              letterSpacing="0.08em"
            >
              {city.name.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function ServiceArea() {
  return (
    <section id="service-area" className="section-pad">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <FadeUp className="panel order-last overflow-hidden p-4 sm:p-6 lg:order-first">
          <AreaMap />
        </FadeUp>

        <div>
          <SectionHeading
            index="08"
            eyebrow="Service Area"
            title="We come to you, from Rochester to the river valley."
            lede="Based in Rochester with regular routes across the region. Driveways, offices, job sites — if your vehicle is parked there, we can detail it there."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {serviceCities.map((city) => (
              <li
                key={city.name}
                className={
                  city.primary
                    ? "rounded-full border border-white/20 bg-white/[0.07] px-4 py-1.5 text-[13px] font-medium text-foreground"
                    : "rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-[13px] text-muted-foreground"
                }
              >
                {city.name}, {city.state}
              </li>
            ))}
            <li className="rounded-full border border-dashed border-white/[0.08] px-4 py-1.5 text-[13px] text-muted-foreground/70">
              More to come
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Outside these areas? A small travel fee may apply —{" "}
            <span className="text-foreground">just ask.</span>
          </p>
          <div className="mt-8">
            <CtaLink href="/request-quote/" variant="outline">
              Check Your Address
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

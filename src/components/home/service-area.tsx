import { serviceCities } from "@/data/locations";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaLink } from "@/components/shared/cta-link";
import { FadeUp } from "@/components/animations/fade-up";

interface CityNode {
  x: number;
  y: number;
  /** Label placement relative to the node — tuned to avoid collisions. */
  anchor?: "start" | "middle" | "end";
  dx?: number;
  dy?: number;
}

/**
 * Positions are the towns' real bearings and distances from Rochester,
 * projected to a flat canvas (~5.75px per km, longitude degrees squashed
 * for latitude 44°N). Rochester sits at the centre, 300/225.
 */
const cityNodes: Record<string, CityNode> = {
  Rochester: { x: 300, y: 225, dy: -20 },
  Byron: { x: 224, y: 212, dy: -14 },
  Oronoco: { x: 275, y: 127, dy: -14 },
  Stewartville: { x: 296, y: 325, dy: 24 },
  Eyota: { x: 416, y: 240, anchor: "start", dx: 11, dy: 4 },
  Kasson: { x: 176, y: 213, anchor: "end", dx: -11, dy: 4 },
  "Pine Island": { x: 222, y: 104, dy: -16 },
};

/** Coverage radius in px — ~20 miles at the projection scale above. */
const COVERAGE_RADIUS = 185;

function AreaMap() {
  const hub = cityNodes["Rochester"];
  const plotted = serviceCities
    .map((city) => ({ city, node: cityNodes[city.name] }))
    .filter((entry) => Boolean(entry.node));

  return (
    <svg
      viewBox="90 25 420 400"
      role="img"
      aria-label="Map of the Mecha Auto Spa service area — Rochester, MN at the centre with surrounding communities"
      className="w-full"
    >
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.05)" />
        </pattern>
        <radialGradient id="pulse" r="0.5">
          <stop offset="0%" stopColor="rgba(245,245,245,0.14)" />
          <stop offset="100%" stopColor="rgba(245,245,245,0)" />
        </radialGradient>
      </defs>
      <rect x="90" y="25" width="420" height="400" fill="url(#dots)" />

      {/* Coverage halo around Rochester */}
      <circle cx={hub.x} cy={hub.y} r={COVERAGE_RADIUS} fill="url(#pulse)" />
      <circle
        cx={hub.x}
        cy={hub.y}
        r={COVERAGE_RADIUS}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeDasharray="3 6"
      />

      {/* Routes from HQ */}
      {plotted
        .filter(({ city }) => city.name !== "Rochester")
        .map(({ city, node }) => (
          <line
            key={city.name}
            x1={hub.x}
            y1={hub.y}
            x2={node.x}
            y2={node.y}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        ))}

      {/* City nodes */}
      {plotted.map(({ city, node }) => {
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
              x={node.x + (node.dx ?? 0)}
              y={node.y + (node.dy ?? -12)}
              textAnchor={node.anchor ?? "middle"}
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
            title="We come to you, across the Rochester area."
            lede="Based in Rochester and serving nearby communities. We come to driveways and workplaces across the area."
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
            <li className="rounded-full border border-dashed border-white/[0.08] px-4 py-1.5 text-[13px] text-muted-foreground">
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

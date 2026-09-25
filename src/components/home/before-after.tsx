import { CompareSlider } from "@/components/shared/compare-slider";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeUp } from "@/components/animations/fade-up";

interface Comparison {
  before: string;
  after: string;
  alt: string;
  caption: string;
}

/** Real client work — shot on the job, not stock. */
const comparisons: Comparison[] = [
  {
    before: "/images/f150-correction-before-tall.jpg",
    after: "/images/f150-correction-after-tall.jpg",
    alt: "Ford truck rear panel before and after paint correction — swirl marks removed",
    caption: "Ford Truck — Paint Correction",
  },
  {
    before: "/images/suv-foam-wash-before.jpg",
    after: "/images/suv-foam-wash-after.jpg",
    alt: "SUV covered in foam during a two-bucket wash, and the same SUV finished and gloss-dried",
    caption: "Client SUV — Signature Exterior Detail",
  },
];

export function BeforeAfter() {
  return (
    <section id="before-after" className="section-pad">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Before & After"
          title="The results speak. Drag to compare."
          lede="Real transformations from real client vehicles. Drag the divider to see the difference."
          align="center"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8 lg:mt-16">
          {comparisons.map((comparison) => (
            <FadeUp key={comparison.after}>
              <CompareSlider
                before={comparison.before}
                after={comparison.after}
                alt={comparison.alt}
              />
              <p className="mt-5 text-center font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {comparison.caption}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

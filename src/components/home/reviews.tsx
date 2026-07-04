import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeUp } from "@/components/animations/fade-up";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 opacity-80">
      <path
        fill="#bdbdbd"
        d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="panel flex w-[320px] shrink-0 flex-col p-6 sm:w-[380px]">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-warning text-warning" aria-hidden />
          ))}
        </span>
        <GoogleMark />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#bdbdbd]">
        {review.text}
      </p>
      <footer className="mt-5 border-t border-white/[0.06] pt-4">
        <p className="text-sm font-semibold tracking-tight">{review.name}</p>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
          {review.vehicle} · {review.date}
        </p>
      </footer>
    </article>
  );
}

export function Reviews() {
  // Duplicated list drives the seamless CSS marquee loop.
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="section-pad overflow-hidden bg-surface">
      <div className="container-site">
        <SectionHeading
          index="08"
          eyebrow="Google Reviews"
          title={
            <>
              Trusted by owners who{" "}
              <span className="text-metallic">notice everything.</span>
            </>
          }
          lede={`${SITE.rating.value} stars across ${SITE.rating.count} Google reviews — from daily drivers to weekend builds.`}
          align="center"
        />
      </div>

      <FadeUp className="relative mt-14">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-32"
        />

        <div className="marquee group/marquee" tabIndex={-1}>
          <div className="marquee-track flex gap-5 pr-5 group-hover/marquee:[animation-play-state:paused]">
            {loop.map((review, i) => (
              <ReviewCard
                key={`${review.name}-${i}`}
                review={review}
              />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

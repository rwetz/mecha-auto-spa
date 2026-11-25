import Image from "next/image";
import type { TintPhoto } from "@/data/services";
import { asset } from "@/lib/asset";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { FadeUp } from "@/components/animations/fade-up";

/**
 * The owner's own tint jobs. Captions are the shade, straight from the
 * owner; nothing else. The video loads only when played (preload="none").
 */
export function TintGallery({
  index,
  photos,
  video,
}: {
  index?: string;
  photos: TintPhoto[];
  video: { src: string; poster: string; caption: string };
}) {
  return (
    <section id="tint-work" className="section-pad">
      <div className="container-site">
        <SectionHeading index={index} eyebrow="Our work" title="Recent tint jobs." />

        <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p) => (
            <StaggerItem key={p.src}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-elevated">
                  <Image
                    src={asset(p.src)}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 font-display text-[13px] text-muted-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-8 w-3/5 max-w-xs sm:w-full">
          <figure>
            <video
              src={asset(video.src)}
              poster={asset(video.poster)}
              controls
              muted
              playsInline
              preload="none"
              className="aspect-[9/16] w-full rounded-xl bg-elevated object-cover"
            />
            <figcaption className="mt-2 font-display text-[13px] text-muted-foreground">
              {video.caption}
            </figcaption>
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}

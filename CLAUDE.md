# Mecha Auto Spa — content rules

Marketing site for a real, brand-new mobile detailing business. It is deployed
publicly; every factual claim on it is a representation the owner is legally
and reputationally on the hook for.

## The one hard rule

**Never invent or embellish claims about the business.** Every statement about
equipment, capabilities, credentials, reviews, or service area must come from
one of: `src/lib/constants.ts`, the owner's printed pricing flyer, or the owner
saying it in chat. If copy needs a supporting fact you don't have, write around
it or ask — do not fill the gap with something plausible. This has already
burned us: the site shipped with fabricated review counts ("47 Google
reviews"), equipment claims (steamer, generator, onboard water), and "fully
insured" badges that had to be scrubbed by hand.

## Current fact sheet (update this when the owner updates you)

True and citable:
- Fully mobile — comes to driveways/workplaces. Rochester & Winona MN
  (primary), Eyota MN, Fountain City WI ("more to come").
- Owns: foam cannon, two-bucket wash gear, extractor (carpet extraction is on
  the flyer), machine polishers (paint correction + machine-applied sealant).
- Pricing: exactly as in `src/data/services.ts` (matches the flyer 1:1).
- Satisfaction guarantee (48-hour make-it-right), 24-hour cancellation notice.

NOT true yet — do not claim (re-add only when the owner says so):
- No steamer (on the way). No steam-cleaning claims anywhere.
- Not advertising insurance ("fully insured" removed July 2026).
- No ozone machine, no verified onboard water or generator.
- No online booking (`bookingUrl` removed; CTAs route to phone/email).
- No fleet/commercial offering (section removed).
- No real Google reviews yet (homepage `<Reviews />` commented out; never
  invent counts, star ratings, or testimonials).

## Working notes

- All business info lives in `src/lib/constants.ts` — never hardcode
  phone/email/socials in components. Promo banner: `SITE.promo` (null = off).
- Static export for GitHub Pages (`output: "export"`), served at the root of
  the custom domain www.mechaautospa.com (no basePath). No server code. Use
  `asset()` for raw image `src` values.
- Real client photos come from `detail-portfolio/` (HEIC — ImageMagick lacks
  the HEIC module here; decode with ffmpeg first, then resize with magick).
  Remaining stock placeholders: homepage hero, ceramic, paint correction,
  Platinum card, /services page hero — replace with real photos as provided.
- Before committing content changes: `grep -rni "steam\|insured\|ozone\|generator\|booking"`
  over `src/` and confirm each hit is intentional per the fact sheet above.

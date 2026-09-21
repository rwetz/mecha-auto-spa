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
- Fully mobile — comes to driveways/workplaces. Rochester MN (primary) and
  surrounding communities: Byron, Oronoco, Stewartville, Eyota, Kasson,
  Pine Island ("more to come"). Narrowed to the Rochester area Aug 2026 —
  Winona MN and Fountain City WI were dropped; do not re-add without the
  owner saying so. Service area lives in `src/data/locations.ts` and drives
  the map, footer, contact page, quote-form dropdown, and areaServed schema.
- Owns: foam cannon, two-bucket wash gear, extractor (carpet extraction is on
  the flyer), machine polishers (paint correction + machine-applied sealant).
- Pricing: exactly as in `src/data/services.ts`. Signature Exterior
  ($105/$125/$140), Interior ($150/$175/$200), and Signature Full
  ($225/$275/$299) match the Sept 2026 flyer 1:1, as do all add-ons except
  Glass Ceramic Coating. Third-row SUVs price in the Trucks & Vans column.
  Platinum Detail ($350/$400/$450) and Glass Ceramic Coating ($100) are not
  on that flyer but are still sold (owner, Sept 2026) — they have no flyer
  to check against, so leave their numbers alone unless the owner says so.
- Satisfaction guarantee (48-hour make-it-right), 24-hour cancellation notice.
- Online booking is live via Square Appointments (`SITE.bookingUrl`, switched
  from the Google Calendar appointment schedule Aug 2026). "Book Now" CTAs
  appear in the navbar, hero, /services pricing cards, contact page, and final
  CTA.

**The Sept 2026 flyer contains three things the site deliberately does not
carry**, all re-confirmed with the owner Sept 2026: "Steam cleaning where
needed" (no steamer yet), a "5-STAR SERVICE" badge (no reviews yet), and a
"WINONA · ROCHESTER" footer (stale template — Winona is still dropped). Do
not import them from the flyer; they need the owner to say so separately.

NOT true yet — do not claim (re-add only when the owner says so):
- No steamer (on the way). No steam-cleaning claims anywhere.
- Not advertising insurance ("fully insured" removed July 2026).
- No ozone machine, no verified onboard water or generator.
- No fleet/commercial offering (section removed).
- No published price for watercraft detailing or window tinting. Both are
  offered (owner, Sept 2026) and live in `inquiryServices` in
  `src/data/services.ts`, rendered by the "By Quote" section on /services
  and selectable in the quote form. They deliberately show no number.
  Do not invent rates. For tinting specifically, do not add film brands,
  VLT percentages, warranty terms, or any claim about Minnesota tint law —
  none of that is confirmed. `boat-rinse.jpg` is still staged and unused;
  there is no tint photo yet, so that card falls back to an icon panel.
- No real Google reviews yet (homepage `<Reviews />` commented out; never
  invent counts, star ratings, or testimonials).

## Working notes

- All business info lives in `src/lib/constants.ts` — never hardcode
  phone/email/socials in components. Promo banner: `SITE.promo` (null = off).
- Static export for GitHub Pages (`output: "export"`), served at the root of
  the custom domain www.mechaautospa.com (no basePath). No server code. Use
  `asset()` for raw image `src` values.
- Real client photos come from `detail-portfolio/` (HEIC). Neither
  ImageMagick nor ffmpeg is installed on this machine any more — use Python
  + Pillow (`uv run --with pillow python ...`) for cropping and resizing;
  it handles the PNG/JPG drops the owner sends from her phone. iPhone
  screenshots arrive letterboxed, so trim the solid black bars before
  cropping. Service-card images are 1400×1867 JPEG, q86.
- Remaining stock placeholders: ceramic (`ceramic-beading.jpg`), Platinum
  card (`mustang-night-front.jpg`), /paint-correction page hero, /services
  page hero (`mustang-night-rear.jpg`), and `daily-driver.jpg` on the
  ceramic page — replace with real photos as provided. **Stock photos get
  alt text describing only what is in the frame** — never "by Mecha Auto
  Spa", "freshly detailed", or "coated", which assert work we didn't do.
  The homepage hero is now a real photo (`mobile-hand-wash-hero.jpg`). The homepage paint-correction section and the /paint-correction
  "Result" section now use a real client before/after pair
  (`f150-correction-{before,after}.jpg`) in the shared `CompareSlider`.
- No cookies, analytics, or trackers anywhere on the site — that is why
  there is no cookie banner, and the privacy policy says so explicitly.
  Adding any tracker means adding a consent banner and rewriting that
  paragraph. "Book Now" hands off to Square, which has its own cookies;
  the privacy policy covers that handoff.
- Small text uses full-opacity `text-muted-foreground` (#9e9e9e). The
  `/50`–`/70` opacity variants composite to 2.9:1–4.0:1 on these dark
  surfaces and fail WCAG AA — don't reintroduce them for body or meta text.
- Before committing content changes: `grep -rni "steam\|insured\|ozone\|generator\|booking"`
  over `src/` and confirm each hit is intentional per the fact sheet above.

/**
 * Prefix a public asset path with the deployment base path.
 *
 * `next/image` does NOT apply the config `basePath` to its `src`, so image
 * URLs must be prefixed manually to work when the site is served from a
 * subpath (e.g. https://<user>.github.io/mecha-auto-spa/). When served from
 * a root custom domain, NEXT_PUBLIC_BASE_PATH is empty and this is a no-op.
 *
 * Only use this for raw asset URLs passed to `<Image src>` or `<img src>`.
 * `next/link` and router navigation already handle the base path.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

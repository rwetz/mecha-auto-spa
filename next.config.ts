import type { NextConfig } from "next";

// When deploying to the project subpath https://<user>.github.io/<repo>/,
// every asset and link must be prefixed with the repo name. The deploy
// workflow sets PAGES_BASE_PATH=/mecha-auto-spa. Once a custom domain
// (served from the root) is configured, delete that env var and this
// prefixing becomes a no-op — no code changes needed.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting. API routes, ISR, and server
  // image optimization are intentionally unavailable in this deployment
  // target — see README for the Vercel migration path.
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Exposed to the client so asset() can prefix next/image src values,
  // which basePath does not cover on its own.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting. API routes, ISR, and server
  // image optimization are intentionally unavailable in this deployment
  // target — see README for the Vercel migration path.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

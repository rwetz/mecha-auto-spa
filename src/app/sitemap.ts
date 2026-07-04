import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/ceramic-coatings/", priority: 0.9 },
    { path: "/paint-correction/", priority: 0.9 },
    { path: "/request-quote/", priority: 0.8 },
    { path: "/contact/", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}

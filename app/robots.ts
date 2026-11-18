import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

// The staging copy under /staging/ is kept out of search results with a noindex tag
// (see layout.tsx), so crawling is left open: a Disallow would stop crawlers reading it.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}

import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to ./out, which is what
// GitHub Pages (the host for jenaestuder.com) serves.
// BASE_PATH is set only for the staging build, which lives under /staging/.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Inline the (tiny) CSS into the HTML so it is not a render-blocking request.
  experimental: { inlineCss: true },
  basePath: process.env.BASE_PATH || undefined,
};

export default nextConfig;

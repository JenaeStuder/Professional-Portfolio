import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to ./out, which is what
// GitHub Pages (the existing host for jenaestuder.com) serves.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

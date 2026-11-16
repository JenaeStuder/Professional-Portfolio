import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const isStaging = process.env.NEXT_PUBLIC_ENV === "staging";

export const metadata: Metadata = {
  // Keep the not-prod copy out of search results.
  robots: isStaging ? { index: false, follow: false } : undefined,
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.title}`,
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.description,
    url: site.url,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
        >
          Skip to main content
        </a>
        {isStaging && (
          <div className="bg-accent px-6 py-2 text-center text-sm font-semibold text-on-accent">
            Staging preview of the develop branch. Not the live site.
          </div>
        )}
        {children}
      </body>
    </html>
  );
}

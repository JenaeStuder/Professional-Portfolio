import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-face", display: "swap" });

// Matches --bg in globals.css so mobile browser chrome blends with the page.
export const viewport: Viewport = { themeColor: "#0d0d1f", colorScheme: "dark light" };

const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

const isStaging = process.env.NEXT_PUBLIC_ENV === "staging";

export const metadata: Metadata = {
  // Keep the not-prod copy out of search results.
  robots: isStaging ? { index: false, follow: false } : undefined,
  // No canonical on staging: pointing a noindex page at the live one sends mixed signals.
  alternates: isStaging ? undefined : { canonical: "/" },
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
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      // The inline script below sets data-theme before React hydrates.
      suppressHydrationWarning
    >
      <head>
        {/* Apply a saved light-theme choice before first paint (avoids a dark flash). */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
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

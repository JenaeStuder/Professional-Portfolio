"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { site } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#professional-work", label: "Professional work" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond-the-code", label: "Beyond the code" },
  { href: "#contact", label: "Contact" },
];

const THRESHOLD = 6; // px of scroll before a direction change counts (ignores jitter)

/*
 * Below 1024px the header behaves like this (desktop is simply pinned, see globals.css):
 *   static  - a normal part of the page: it scrolls away with the content. Used at the top.
 *   hidden  - fixed to the viewport but slid out of view. Entered silently once the static
 *             header has scrolled off, and by scrolling down from "shown".
 *   shown   - fixed and visible. Entered by scrolling up; slides in from above.
 * Reaching the very top of the page returns to "static" (same spot, so no visible jump).
 * A placeholder slot keeps the page layout from shifting when the header becomes fixed.
 */
type Mode = "static" | "shown" | "hidden";

export function Header() {
  const ref = useRef<HTMLElement>(null);
  const modeRef = useRef<Mode>("static");
  const [mode, setMode] = useState<Mode>("static");
  const [animate, setAnimate] = useState(false);
  const [slotHeight, setSlotHeight] = useState<number>();

  const go = useCallback((next: Mode, animated: boolean) => {
    if (modeRef.current === next) return;
    modeRef.current = next;
    setMode(next);
    setAnimate(animated); // only slide between shown/hidden; other switches are invisible
  }, []);

  useEffect(() => {
    const header = ref.current;
    if (!header) return;

    const measure = () => setSlotHeight(header.offsetHeight);
    const observer = new ResizeObserver(measure);
    observer.observe(header);

    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = Math.max(window.scrollY, 0);
      const current = modeRef.current;

      if (y <= 0) {
        go("static", false);
        lastY = y;
        return;
      }
      if (current === "static") {
        // Scrolls with the page until it is fully off-screen, then waits (hidden) for a scroll up.
        if (y > header.offsetHeight) go("hidden", false);
        lastY = y;
        return;
      }

      const delta = y - lastY;
      if (Math.abs(delta) < THRESHOLD) return;
      lastY = y;
      if (delta < 0) {
        go("shown", true);
      } else if (current === "shown") {
        // Never slide the header out from under a keyboard user's focus.
        const el = document.activeElement;
        const keyboardFocusInside = !!el && header.contains(el) && el.matches(":focus-visible");
        if (!keyboardFocusInside) go("hidden", true);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(update); // handles loading part-way down the page (e.g. a #hash link)
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [go]);

  return (
    <div
      className="header-slot"
      style={slotHeight ? ({ "--header-h": `${slotHeight}px` } as CSSProperties) : undefined}
    >
      <header
        ref={ref}
        data-mode={mode}
        data-animate={animate}
        // If a hidden header receives keyboard focus (e.g. via Tab), bring it back into view.
        onFocusCapture={() => {
          if (modeRef.current === "hidden") go("shown", true);
        }}
        className="site-header z-40 border-b border-line bg-surface/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-5 px-6 py-4 lg:gap-y-0 lg:py-3">
          <a href="#top" className="order-1 font-bold tracking-tight">
            {site.name}
          </a>
          <nav aria-label="Primary" className="order-3 -mx-2.5 w-full lg:order-2 lg:mx-0 lg:w-auto">
            <ul className="flex flex-wrap gap-0.5 lg:gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-md px-2.5 py-2 text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline lg:px-3"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}

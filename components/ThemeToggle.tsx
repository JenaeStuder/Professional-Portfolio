"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

// The theme lives on <html data-theme>. Dark is the default; light is opt-in.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";
const getServerSnapshot = (): Theme => "dark";

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLight = theme === "light";

  function toggle() {
    if (isLight) {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = "light";
    }
    try {
      if (isLight) localStorage.removeItem("theme");
      else localStorage.setItem("theme", "light");
    } catch {
      // Storage can be blocked (private mode); the choice just won't persist.
    }
  }

  // The label names the action (what clicking will switch to), so no aria-pressed:
  // a changing label plus a pressed state would announce the state twice.
  return (
    <button type="button" onClick={toggle} className="btn btn-outline btn-sm order-2 lg:order-3">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isLight ? (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        )}
      </svg>
      {isLight ? "Dark theme" : "Light theme"}
    </button>
  );
}

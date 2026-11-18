"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The footer year is baked in at build time, then corrected in the visitor's browser, so it is
// right even if a scheduled rebuild is missed. `buildYear` is the server snapshot, which keeps
// hydration consistent with the HTML that was generated.
export function CurrentYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => buildYear,
  );
  return <>{year}</>;
}

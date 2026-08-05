"use client";

import { useSyncExternalStore } from "react";

function getAllow3d(): boolean {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean };
    }
  ).connection;
  return !reduced && !Boolean(connection?.saveData);
}

function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * Decide si el canvas WebGL debe montarse.
 * El CTA del hero nunca espera este hook.
 */
export function useReduced3D(): { ready: boolean; allow3d: boolean } {
  const allow3d = useSyncExternalStore(subscribe, getAllow3d, () => false);
  const ready = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  return { ready, allow3d };
}

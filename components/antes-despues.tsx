"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useCallback, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BEFORE_AFTER_CASES, type BeforeAfterCase } from "@/lib/site";

/**
 * Antes/después — Motion es dueño del drag (x) y hover scale del mango.
 * GSAP no anima este componente.
 */
export function AntesDespues() {
  const [activeId, setActiveId] = useState(BEFORE_AFTER_CASES[0].id);
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const initializedRef = useRef(false);

  const caso =
    BEFORE_AFTER_CASES.find((item) => item.id === activeId) ??
    BEFORE_AFTER_CASES[0];

  const syncXFromPercent = useCallback(
    (percent: number) => {
      const track = trackRef.current;
      if (!track || track.offsetWidth === 0) return;
      x.set((percent / 100) * track.offsetWidth);
    },
    [x],
  );

  const trackCallbackRef = useCallback(
    (node: HTMLDivElement | null) => {
      trackRef.current = node;
      if (node && !initializedRef.current) {
        initializedRef.current = true;
        syncXFromPercent(50);
      }
    },
    [syncXFromPercent],
  );

  useMotionValueEvent(x, "change", (latest) => {
    const track = trackRef.current;
    if (!track || track.offsetWidth === 0) return;
    const next = Math.min(
      100,
      Math.max(0, (latest / track.offsetWidth) * 100),
    );
    setPosition(next);
  });

  function selectCase(next: BeforeAfterCase) {
    setActiveId(next.id);
    setPosition(50);
    requestAnimationFrame(() => syncXFromPercent(50));
  }

  function onTrackPointer(clientX: number) {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = Math.min(rect.width, Math.max(0, clientX - rect.left));
    x.set(next);
  }

  const clipRight = useTransform(x, (latest) => {
    const track = trackRef.current;
    if (!track || track.offsetWidth === 0) return "inset(0 50% 0 0)";
    const percent = (latest / track.offsetWidth) * 100;
    return `inset(0 ${100 - percent}% 0 0)`;
  });

  return (
    <section id="trabajos" className="bg-grafito px-4 py-14 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10">
        <SectionHeading
          eyebrow="Trabajos"
          title="Antes / después"
          description="Frenos, motor y clima. Desliza el mango para comparar."
        />

        <div
          role="tablist"
          aria-label="Casos antes y después"
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {BEFORE_AFTER_CASES.map((item) => {
            const selected = item.id === caso.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectCase(item)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`shrink-0 border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                  selected
                    ? "border-naranja-senal bg-naranja-senal text-grafito"
                    : "border-acero/40 bg-transparent text-acero hover:border-hueso/40 hover:text-hueso"
                }`}
              >
                {item.id === "frenos"
                  ? "Frenos"
                  : item.id === "motor"
                    ? "Motor"
                    : "Clima"}
              </motion.button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-acero">
            {caso.vehicle} · {caso.title}
          </p>

          <div
            ref={trackCallbackRef}
            className="relative aspect-[4/3] w-full overflow-hidden bg-concreto touch-none select-none sm:aspect-[16/10]"
            onPointerDown={(event) => {
              if ((event.target as HTMLElement).closest("[data-handle]")) {
                return;
              }
              onTrackPointer(event.clientX);
            }}
          >
            <Image
              src={caso.afterSrc}
              alt={caso.afterAlt}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
              draggable={false}
              priority={caso.id === "frenos"}
            />

            <motion.div
              className="absolute inset-0"
              style={{ clipPath: clipRight }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={caso.beforeSrc}
                  alt={caso.beforeAlt}
                  fill
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>

            <motion.div
              data-handle
              drag="x"
              dragConstraints={trackRef}
              dragElastic={0}
              dragMomentum={false}
              style={{ x }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="absolute top-0 bottom-0 left-0 z-20 w-0.5 cursor-ew-resize bg-naranja-senal"
              aria-hidden
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-naranja-senal bg-grafito text-naranja-senal shadow-[0_0_0_4px_rgba(23,22,19,0.45)] sm:h-11 sm:w-11">
                <span className="font-mono text-xs">↔</span>
              </div>
            </motion.div>

            <span className="pointer-events-none absolute top-4 left-4 z-10 bg-grafito/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-hueso">
              Antes
            </span>
            <span className="pointer-events-none absolute top-4 right-4 z-10 bg-grafito/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-hueso">
              Después
            </span>

            <label className="sr-only" htmlFor="antes-despues-slider">
              Comparar antes y después — {caso.title}
            </label>
            <input
              id="antes-despues-slider"
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(event) => {
                const next = Number(event.target.value);
                setPosition(next);
                syncXFromPercent(next);
              }}
              className="sr-only"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

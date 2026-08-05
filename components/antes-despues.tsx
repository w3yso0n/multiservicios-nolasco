"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BEFORE_AFTER_CASES, type BeforeAfterCase } from "@/lib/site";

/**
 * Slider antes/después — control nativo (input range).
 * En Fase 3 Motion toma el drag del mango; no animamos transform aquí.
 */
export function AntesDespues() {
  const [activeId, setActiveId] = useState(BEFORE_AFTER_CASES[0].id);
  const [position, setPosition] = useState(50);

  const caso =
    BEFORE_AFTER_CASES.find((item) => item.id === activeId) ??
    BEFORE_AFTER_CASES[0];

  function selectCase(next: BeforeAfterCase) {
    setActiveId(next.id);
    setPosition(50);
  }

  return (
    <section id="trabajos" className="bg-grafito px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          eyebrow="OS · Evidencia"
          title="Antes / después"
          description="Tres órdenes reales del taller: frenos, motor y clima. Arrastra el mango para comparar."
        />

        <div
          role="tablist"
          aria-label="Casos antes y después"
          className="flex flex-wrap gap-2"
        >
          {BEFORE_AFTER_CASES.map((item) => {
            const selected = item.id === caso.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectCase(item)}
                className={`border px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
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
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-acero">
            {caso.vehicle} · {caso.title}
          </p>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-concreto select-none">
            <Image
              src={caso.afterSrc}
              alt={caso.afterAlt}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
              draggable={false}
              priority={caso.id === "frenos"}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={caso.beforeSrc}
                alt={caso.beforeAlt}
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
                draggable={false}
              />
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-naranja-senal"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-naranja-senal bg-grafito text-naranja-senal">
                <span className="font-mono text-xs" aria-hidden>
                  ↔
                </span>
              </div>
            </div>

            <span className="absolute top-4 left-4 bg-grafito/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-hueso">
              Antes
            </span>
            <span className="absolute top-4 right-4 bg-grafito/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-hueso">
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
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BEFORE_AFTER_CASES } from "@/lib/site";

/**
 * Slider antes/después — control nativo (input range).
 * En Fase 3 Motion toma el drag del mango; no animamos transform aquí.
 */
export function AntesDespues() {
  const caso = BEFORE_AFTER_CASES[0];
  const [position, setPosition] = useState(50);

  return (
    <section id="trabajos" className="bg-grafito px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          eyebrow="OS · Evidencia"
          title="Antes / después"
          description="Arrastra el mango para ver el cambio. Placeholders hasta tener fotos reales del taller."
        />

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
              Comparar antes y después
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

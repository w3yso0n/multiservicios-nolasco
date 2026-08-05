"use client";

import { useRef } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

const STEPS = [
  { id: "01", label: "Diagnóstico" },
  { id: "02", label: "Cotización" },
  { id: "03", label: "Reparación" },
  { id: "04", label: "Entrega" },
] as const;

type ProcesoDividerProps = {
  /** `full` = proceso de la orden; `line` = solo trazo fino entre secciones */
  variant?: "full" | "line";
};

/**
 * Divisor narrativo del taller.
 * Mobile: lista vertical. Desktop: línea horizontal SVG.
 * GSAP anima el trazo / aparición; Motion no toca este nodo.
 */
export function ProcesoDivider({ variant = "full" }: ProcesoDividerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<SVGGElement>(null);
  const mobileListRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      if (!root) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) return;

      const line = lineRef.current;
      const desktopSteps = stepsRef.current?.querySelectorAll("[data-step]");
      const mobileItems = mobileListRef.current?.querySelectorAll("[data-step]");

      if (line) {
        const length = line.getTotalLength();
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }

      if (desktopSteps?.length) {
        gsap.set(desktopSteps, {
          opacity: 0,
          scale: 0.7,
          transformOrigin: "50% 50%",
        });
      }

      if (mobileItems?.length) {
        gsap.set(mobileItems, { opacity: 0, x: -12 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          end: "bottom 55%",
          scrub: 0.55,
        },
      });

      if (line) {
        tl.to(
          line,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0,
        );
      }

      if (desktopSteps?.length) {
        tl.to(
          desktopSteps,
          {
            opacity: 1,
            scale: 1,
            stagger: 0.18,
            ease: "none",
            duration: 0.2,
          },
          0.15,
        );
      }

      if (mobileItems?.length) {
        tl.to(
          mobileItems,
          {
            opacity: 1,
            x: 0,
            stagger: 0.12,
            ease: "none",
            duration: 0.25,
          },
          0,
        );
      }

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: rootRef, dependencies: [variant] },
  );

  if (variant === "line") {
    return (
      <div
        ref={rootRef}
        className="relative w-full overflow-hidden px-4 py-6 sm:px-10 sm:py-8"
        aria-hidden
      >
        <div className="mx-auto max-w-6xl">
          <svg
            viewBox="0 0 1000 24"
            className="h-3 w-full sm:h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 H1000"
              stroke="#6E6A5F"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
            <path
              ref={lineRef}
              d="M0 12 H1000"
              stroke="#FF5C1A"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden px-4 py-10 sm:px-10 sm:py-12"
      aria-hidden
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-acero">
          Cómo trabajamos
        </p>

        {/* Mobile: pasos en columna */}
        <ol
          ref={mobileListRef}
          className="flex flex-col gap-0 md:hidden"
        >
          {STEPS.map((step, index) => (
            <li
              key={step.id}
              data-step
              className="relative flex gap-4 pb-6 last:pb-0"
            >
              {index < STEPS.length - 1 ? (
                <span
                  className="absolute top-7 bottom-0 left-[0.7rem] w-px bg-acero/40"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-naranja-senal bg-grafito">
                <span className="h-1.5 w-1.5 bg-ambar-taller" />
              </span>
              <div className="flex flex-col gap-1 pt-0.5">
                <span className="font-mono text-[10px] tracking-[0.16em] text-acero">
                  {step.id}
                </span>
                <span className="font-display text-xl uppercase leading-none text-hueso">
                  {step.label}
                </span>
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: línea horizontal */}
        <svg
          viewBox="0 0 1000 96"
          className="hidden h-24 w-full md:block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 40 H960"
            stroke="#6E6A5F"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            ref={lineRef}
            d="M40 40 H960"
            stroke="#FF5C1A"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          <g ref={stepsRef}>
            {STEPS.map((step, index) => {
              const x = [80, 360, 640, 920][index] ?? 80;
              return (
                <g key={step.id} data-step transform={`translate(${x} 40)`}>
                  <circle
                    r="7"
                    fill="#171613"
                    stroke="#FF5C1A"
                    strokeWidth="2"
                  />
                  <circle r="2.5" fill="#F2A93B" />
                  <text
                    y="28"
                    textAnchor="middle"
                    fill="#6E6A5F"
                    fontFamily="var(--font-ibm-plex-mono), monospace"
                    fontSize="11"
                    letterSpacing="0.08em"
                  >
                    {step.id}
                  </text>
                  <text
                    y="46"
                    textAnchor="middle"
                    fill="#F5F1E6"
                    fontFamily="var(--font-big-shoulders), sans-serif"
                    fontSize="16"
                    fontWeight="700"
                  >
                    {step.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

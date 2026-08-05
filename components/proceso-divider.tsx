"use client";

import { useRef } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

const STEPS = [
  { id: "01", label: "Diagnóstico", x: 80 },
  { id: "02", label: "Cotización", x: 360 },
  { id: "03", label: "Reparación", x: 640 },
  { id: "04", label: "Entrega", x: 920 },
] as const;

type ProcesoDividerProps = {
  /** `full` = proceso de la orden; `line` = solo trazo fino entre secciones */
  variant?: "full" | "line";
};

/**
 * Divisor narrativo del taller.
 * GSAP dibuja la línea al scrollear; Motion no toca este SVG.
 */
export function ProcesoDivider({ variant = "full" }: ProcesoDividerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<SVGGElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      const line = lineRef.current;
      if (!root || !line) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) return;

      const length = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const markers = stepsRef.current?.querySelectorAll("[data-step]");
      if (markers?.length) {
        gsap.set(markers, {
          opacity: 0,
          scale: 0.7,
          transformOrigin: "50% 50%",
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          end: "bottom 50%",
          scrub: 0.55,
        },
      });

      tl.to(
        line,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0,
      );

      if (markers?.length) {
        tl.to(
          markers,
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
        className="relative w-full overflow-hidden px-6 py-8 sm:px-10"
        aria-hidden
      >
        <div className="mx-auto max-w-6xl">
          <svg
            viewBox="0 0 1000 24"
            className="h-4 w-full"
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
      className="relative w-full overflow-hidden px-6 py-12 sm:px-10"
      aria-hidden
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-acero">
          Cómo trabajamos
        </p>

        <svg
          viewBox="0 0 1000 96"
          className="h-20 w-full sm:h-24"
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
            {STEPS.map((step) => (
              <g key={step.id} data-step transform={`translate(${step.x} 40)`}>
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
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

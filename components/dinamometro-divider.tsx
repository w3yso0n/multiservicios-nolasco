"use client";

import { useRef } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

/**
 * Elemento firma: curva de dinamómetro (torque TQ / potencia HP).
 * No es decoración vacía — grafica el “pull” del motor como divisor narrativo.
 * GSAP + ScrollTrigger dibuja el stroke al scrollear.
 * Ownership: stroke-dashoffset / opacity — Motion no anima este SVG.
 */
export function DinamometroDivider() {
  const rootRef = useRef<HTMLDivElement>(null);
  const torqueRef = useRef<SVGPathElement>(null);
  const powerRef = useRef<SVGPathElement>(null);
  const labelsRef = useRef<SVGGElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      const torque = torqueRef.current;
      const power = powerRef.current;
      const labels = labelsRef.current;
      if (!root || !torque || !power || !labels) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) return;

      const prepare = (path: SVGPathElement) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      };

      prepare(torque);
      prepare(power);
      gsap.set(labels, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          end: "bottom 45%",
          scrub: 0.6,
        },
      });

      tl.to(
        torque,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        },
        0,
      )
        .to(
          power,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0.15,
        )
        .to(
          labels,
          {
            opacity: 1,
            duration: 0.25,
            ease: "none",
          },
          0.7,
        );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden px-6 py-10 sm:px-10"
      aria-hidden
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-acero">
          <span>Dyno · Nm / HP</span>
          <span>RPM →</span>
        </div>
        <svg
          viewBox="0 0 1000 120"
          className="h-16 w-full text-naranja-senal sm:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1">
            <line x1="0" y1="30" x2="1000" y2="30" />
            <line x1="0" y1="60" x2="1000" y2="60" />
            <line x1="0" y1="90" x2="1000" y2="90" />
            <line x1="200" y1="10" x2="200" y2="110" />
            <line x1="400" y1="10" x2="400" y2="110" />
            <line x1="600" y1="10" x2="600" y2="110" />
            <line x1="800" y1="10" x2="800" y2="110" />
          </g>
          <path
            ref={torqueRef}
            d="M40 95 C 120 92, 180 78, 260 55 C 340 32, 400 22, 480 28 C 560 34, 620 48, 700 42 C 780 36, 840 28, 960 35"
            stroke="#F2A93B"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            ref={powerRef}
            d="M40 100 C 140 98, 220 90, 300 72 C 400 48, 500 30, 600 22 C 700 14, 800 18, 960 40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <g
            ref={labelsRef}
            fontFamily="var(--font-ibm-plex-mono), monospace"
            fontSize="11"
          >
            <circle cx="480" cy="28" r="3" fill="#F2A93B" />
            <text x="492" y="24" fill="#F2A93B">
              TQ
            </text>
            <circle cx="600" cy="22" r="3" fill="#FF5C1A" />
            <text x="612" y="18" fill="#FF5C1A">
              HP
            </text>
          </g>
        </svg>
        <p className="mt-2 font-mono text-[10px] tracking-[0.12em] text-acero/80">
          Curva de dinamómetro — torque (ámbar) y potencia (naranja) vs RPM
        </p>
      </div>
    </div>
  );
}

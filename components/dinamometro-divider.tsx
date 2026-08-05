/**
 * Curva de dinamómetro (torque/potencia) como divisor de sección.
 * Versión estática — GSAP + ScrollTrigger dibuja el trazo en Fase 3.
 */
export function DinamometroDivider() {
  return (
    <div
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
          {/* Grid sutil */}
          <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="1">
            <line x1="0" y1="30" x2="1000" y2="30" />
            <line x1="0" y1="60" x2="1000" y2="60" />
            <line x1="0" y1="90" x2="1000" y2="90" />
            <line x1="200" y1="10" x2="200" y2="110" />
            <line x1="400" y1="10" x2="400" y2="110" />
            <line x1="600" y1="10" x2="600" y2="110" />
            <line x1="800" y1="10" x2="800" y2="110" />
          </g>
          {/* Curva de torque (ámbar) */}
          <path
            d="M40 95 C 120 92, 180 78, 260 55 C 340 32, 400 22, 480 28 C 560 34, 620 48, 700 42 C 780 36, 840 28, 960 35"
            stroke="#F2A93B"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          {/* Curva de potencia (naranja señal) */}
          <path
            d="M40 100 C 140 98, 220 90, 300 72 C 400 48, 500 30, 600 22 C 700 14, 800 18, 960 40"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <g fill="#F2A93B" fontFamily="var(--font-ibm-plex-mono), monospace" fontSize="11">
            <circle cx="480" cy="28" r="3" />
            <text x="492" y="24" fill="#F2A93B">
              TQ
            </text>
          </g>
          <g fill="#FF5C1A" fontFamily="var(--font-ibm-plex-mono), monospace" fontSize="11">
            <circle cx="600" cy="22" r="3" />
            <text x="612" y="18" fill="#FF5C1A">
              HP
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

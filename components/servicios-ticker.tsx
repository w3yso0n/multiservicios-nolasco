import { TICKER_ITEMS } from "@/lib/site";

/**
 * Letrero de taller — marquee CSS (transform).
 * GSAP/Motion no tocan este nodo para no pelear por transform.
 */
export function ServiciosTicker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      aria-label="Servicios destacados"
      className="border-y border-acero/25 bg-concreto"
    >
      <div className="overflow-hidden py-4">
        <ul className="ticker-track flex w-max gap-8 px-6 sm:gap-12 sm:px-10">
          {row.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-8 font-display text-2xl uppercase tracking-wide text-hueso sm:gap-12 sm:text-3xl"
            >
              <span>{item}</span>
              <span
                className="font-mono text-sm text-naranja-senal"
                aria-hidden
              >
                ◆
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/site";

/**
 * Testimonios en franja horizontal estática.
 * En Fase 3 se convierte en marquee con Motion/GSAP.
 */
export function Testimonios() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="opiniones" className="bg-concreto py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-10">
        <SectionHeading
          eyebrow="Clientes"
          title="Lo que dicen de nosotros"
          description="Lo que más se repite: claridad, precio justo y trabajo limpio."
        />
      </div>

      <div className="mt-4 overflow-x-auto pb-2">
        <ul className="flex w-max gap-6 px-6 sm:gap-8 sm:px-10">
          {row.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="flex w-[min(85vw,22rem)] shrink-0 flex-col gap-5 border border-acero/30 bg-grafito p-6 sm:w-96 sm:p-8"
            >
              <blockquote className="text-base leading-relaxed text-hueso sm:text-lg">
                “{item.quote}”
              </blockquote>
              <footer className="mt-auto border-t border-acero/25 pt-4">
                <p className="font-sans text-sm font-semibold text-hueso">
                  {item.name}
                </p>
                <p className="font-mono text-xs text-acero">{item.vehicle}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

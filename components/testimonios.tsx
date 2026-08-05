import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonios() {
  return (
    <section id="opiniones" className="bg-concreto py-14 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:gap-10 sm:px-10">
        <SectionHeading
          eyebrow="Clientes"
          title="Lo que dicen de nosotros"
          description="Lo que más se repite: claridad, precio justo y trabajo limpio."
        />
      </div>

      <div className="mt-2 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max snap-x snap-mandatory gap-4 px-4 sm:gap-8 sm:px-10">
          {TESTIMONIALS.map((item) => (
            <li
              key={item.id}
              className="flex w-[min(88vw,20rem)] shrink-0 snap-start flex-col gap-5 border border-acero/30 bg-grafito p-5 sm:w-96 sm:p-8"
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

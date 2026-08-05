import { SERVICE_ICONS } from "@/components/icons/service-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/site";

export function Servicios() {
  return (
    <section id="servicios" className="bg-grafito px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Servicios"
          title="Servicios del taller"
          description="De diagnóstico a entrega: trabajo medible, piezas claras y sin sorpresas en la cuenta."
        />

        <ul className="grid gap-px bg-acero/25 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon =
              SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] ??
              SERVICE_ICONS.diagnostico;

            return (
              <li
                key={service.id}
                className="flex flex-col gap-4 bg-grafito p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-naranja-senal">
                    <Icon className="h-8 w-8" />
                  </span>
                </div>
                <h3 className="font-display text-2xl uppercase leading-none tracking-tight text-hueso">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-acero sm:text-base">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

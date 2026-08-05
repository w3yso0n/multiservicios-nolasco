import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGE_PATHS, SITE } from "@/lib/site";

export function Ubicacion() {
  const mapsQuery = encodeURIComponent(SITE.address.full);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <section
      id="ubicacion"
      className="bg-grafito px-4 py-14 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-5 lg:order-1">
          <SectionHeading
            eyebrow="Ubicación"
            title="Encuéntranos en Tlaquepaque"
            description={SITE.address.full}
          />

          <dl className="flex flex-col gap-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-acero">
                Horario
              </dt>
              <dd className="mt-3 space-y-2">
                {SITE.hours.map((slot) => (
                  <div
                    key={slot.days}
                    className="flex items-baseline justify-between gap-4 border-b border-acero/20 pb-2 font-mono text-sm"
                  >
                    <span className="text-hueso">{slot.days}</span>
                    <span className="text-ambar-taller">{slot.time}</span>
                  </div>
                ))}
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-naranja-senal px-4 py-2.5 font-sans text-sm font-semibold text-grafito"
            >
              Cómo llegar
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-hueso/30 px-4 py-2.5 font-sans text-sm font-semibold text-hueso"
            >
              Abrir en Maps
            </a>
          </div>
        </div>

        <div className="relative order-first aspect-[4/3] overflow-hidden border border-acero/30 bg-concreto lg:order-2 lg:col-span-7 lg:aspect-auto lg:min-h-[28rem]">
          <Image
            src={IMAGE_PATHS.tallerExterior}
            alt={`Fachada del taller — ${SITE.address.full}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-grafito/25" />
          <div className="absolute right-3 bottom-3 left-3 border border-acero/40 bg-grafito/90 p-3 backdrop-blur-sm sm:right-4 sm:bottom-4 sm:left-4 sm:p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ambar-taller">
              Tlaquepaque
            </p>
            <p className="mt-1 font-sans text-sm text-hueso">
              {SITE.address.line1}
            </p>
            <p className="font-mono text-xs text-acero">{SITE.address.line2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

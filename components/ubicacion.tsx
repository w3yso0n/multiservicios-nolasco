import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGE_PATHS, SITE } from "@/lib/site";

/**
 * Ubicación — placeholder de mapa oscuro.
 * Mapbox GL custom llega cuando haya token; no iframe de Google.
 */
export function Ubicacion() {
  const mapsQuery = encodeURIComponent(SITE.address.full);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <section id="ubicacion" className="bg-grafito px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-8 lg:col-span-5">
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

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit font-sans text-sm font-semibold text-naranja-senal underline-offset-4 hover:underline"
          >
            Abrir en mapas
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden border border-acero/30 bg-concreto lg:col-span-7 lg:aspect-auto lg:min-h-[28rem]">
          <Image
            src={IMAGE_PATHS.mapPlaceholder}
            alt={`Mapa de ubicación: ${SITE.address.full}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-grafito/30" />
          <div className="absolute bottom-4 left-4 right-4 border border-acero/40 bg-grafito/90 p-4 backdrop-blur-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ambar-taller">
              Mapbox · pendiente de token
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

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGE_PATHS, SITE } from "@/lib/site";

export function Confianza() {
  return (
    <section id="taller" className="bg-concreto px-4 py-14 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden sm:max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
          <Image
            src={IMAGE_PATHS.confianzaPortrait}
            alt={`${SITE.brand}, mecánico automotriz`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito/70 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.18em] text-hueso">
            {SITE.brand}
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-7">
          <SectionHeading
            eyebrow="Confianza"
            title="Trabajo con nombre y apellido"
            description="Cada trabajo se diagnostica, se cotiza en claro y se entrega con evidencia de lo que se hizo al vehículo."
          />

          <dl className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            <div className="border-t border-acero/30 pt-4">
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-acero">
                Experiencia
              </dt>
              <dd className="mt-2 font-display text-4xl uppercase leading-none text-hueso sm:text-5xl">
                {SITE.yearsExperience}+
                <span className="ml-2 text-xl text-ambar-taller sm:text-2xl">
                  años
                </span>
              </dd>
            </div>
            <div className="border-t border-acero/30 pt-4">
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-acero">
                Compromiso
              </dt>
              <dd className="mt-2 font-display text-2xl uppercase leading-none text-hueso sm:text-4xl">
                {SITE.guarantee}
              </dd>
            </div>
          </dl>

          <p className="max-w-xl text-sm leading-relaxed text-hueso/80 sm:text-base">
            En el taller no se adivina: se mide, se prueba y se explica. Si una
            pieza no hace falta, no se cobra. Si el auto necesita algo más, lo
            ves en el presupuesto antes de autorizar.
          </p>
        </div>
      </div>
    </section>
  );
}

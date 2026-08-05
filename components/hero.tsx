import Image from "next/image";
import { HeroTitle } from "@/components/hero-title";
import { CallButton, WhatsAppButton } from "@/components/ui/button-link";
import { IMAGE_PATHS, SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden"
    >
      {/* Plano visual full-bleed — en Fase 4 el canvas 3D reemplaza el fallback */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGE_PATHS.heroFallback}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-grafito via-grafito/85 to-grafito/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-grafito via-transparent to-grafito/50" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end gap-10 px-6 pb-16 pt-20 sm:px-10 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-ambar-taller">
            Orden de servicio · OS-0001
          </p>

          <HeroTitle />

          <p className="max-w-md text-lg leading-relaxed text-hueso/80 sm:text-xl">
            Diagnóstico honesto, reparación precisa y entrega a tiempo en San
            Pedro Tlaquepaque.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <WhatsAppButton />
            <CallButton />
          </div>

          <p className="font-mono text-xs text-acero">
            {SITE.address.line1} · {SITE.phoneDisplay}
          </p>
        </div>

        {/* Reserva visual para la pieza 3D (Fase 4) — poster estático mientras tanto */}
        <div
          className="pointer-events-none absolute inset-y-16 right-4 hidden w-[40%] lg:block"
          aria-hidden
        >
          <div className="relative mx-auto h-full max-w-md">
            <Image
              src={IMAGE_PATHS.heroFallback3d}
              alt=""
              fill
              sizes="40vw"
              className="object-contain object-center opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

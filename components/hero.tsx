import Image from "next/image";
import { Hero3D } from "@/components/hero-3d";
import { HeroTitle } from "@/components/hero-title";
import { CallButton, WhatsAppButton } from "@/components/ui/button-link";
import { IMAGE_PATHS, SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        {/*
          La foto es landscape: en mobile anclamos el recorte al auto (derecha-centro),
          no al banco de herramientas de la izquierda.
        */}
        <Image
          src={IMAGE_PATHS.heroFallback}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_40%] opacity-30 sm:object-[60%_45%] sm:opacity-40 lg:object-center lg:opacity-45"
        />
        {/* Velo más fuerte en mobile para que el recorte se lea como atmósfera, no como foto cortada */}
        <div className="absolute inset-0 bg-grafito/55 sm:bg-grafito/35 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-grafito via-grafito/75 to-grafito sm:from-grafito/70 sm:via-grafito/50 sm:to-grafito lg:bg-gradient-to-r lg:from-grafito lg:via-grafito/85 lg:to-grafito/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-grafito via-transparent to-grafito/50" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-start gap-6 px-4 pb-28 pt-10 sm:min-h-[calc(100svh-4rem)] sm:gap-10 sm:px-10 sm:pb-20 sm:pt-20 lg:justify-center lg:pb-24">
        <div className="relative z-10 flex max-w-2xl flex-col gap-5 sm:gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ambar-taller sm:text-xs sm:tracking-[0.24em]">
            Taller mecánico · Tlaquepaque
          </p>

          <HeroTitle />

          <p className="max-w-md text-base leading-relaxed text-hueso/80 sm:text-lg sm:text-xl">
            Diagnóstico honesto, reparación precisa y entrega a tiempo en San
            Pedro Tlaquepaque.
          </p>

          <div className="hidden flex-wrap gap-3 pt-1 sm:flex">
            <WhatsAppButton />
            <CallButton />
          </div>

          <p className="font-mono text-[11px] leading-relaxed text-acero sm:text-xs">
            <span className="block sm:inline">{SITE.address.line1}</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">{SITE.phoneDisplay}</span>
          </p>
        </div>

        <Hero3D />
      </div>
    </section>
  );
}

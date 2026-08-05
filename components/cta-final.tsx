import { CallButton, WhatsAppButton } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-concreto px-4 py-14 sm:px-10 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-naranja-senal/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-5 sm:gap-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ambar-taller sm:text-xs sm:tracking-[0.22em]">
          Agenda tu cita
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-hueso sm:text-6xl md:text-7xl">
          Tu auto no espera. Nosotros tampoco.
        </h2>
        <p className="max-w-lg text-base text-acero sm:text-lg">
          Mándanos un WhatsApp con el modelo, el síntoma y tu disponibilidad.
          Te respondemos con el siguiente espacio libre.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <WhatsAppButton className="px-4 py-2.5 text-sm" />
          <CallButton className="px-4 py-2.5 text-sm" shortLabel />
        </div>
        <p className="font-mono text-xs text-acero">{SITE.phoneDisplay}</p>
      </div>
    </section>
  );
}

import { CallButton, WhatsAppButton } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-concreto px-6 py-24 sm:px-10 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-naranja-senal/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-ambar-taller">
          Agenda tu orden
        </p>
        <h2 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-hueso sm:text-6xl md:text-7xl">
          Tu auto no espera. Nosotros tampoco.
        </h2>
        <p className="max-w-lg text-lg text-acero">
          Mándanos un WhatsApp con el modelo, el síntoma y tu disponibilidad.
          Te respondemos con el siguiente espacio libre.
        </p>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton />
          <CallButton />
        </div>
        <p className="font-mono text-xs text-acero">{SITE.phoneDisplay}</p>
      </div>
    </section>
  );
}

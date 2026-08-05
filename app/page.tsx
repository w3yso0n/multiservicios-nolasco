/**
 * Fase 1 — Scaffold visual de tokens y tipografía.
 * Las secciones de marketing se construyen en la Fase 2.
 */
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 py-16 sm:px-10">
      <header className="flex flex-col gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-acero">
          OS-001 · Scaffold · Fase 1
        </p>
        <h1 className="font-display text-5xl font-bold uppercase leading-none tracking-tight text-hueso sm:text-7xl">
          Sergio Nolasco
        </h1>
        <p className="max-w-xl text-lg text-acero">
          Mecánico automotriz — sistema de diseño base: tipografía, paleta y
          layout listos para las secciones.
        </p>
      </header>

      <section aria-labelledby="tokens-heading" className="flex flex-col gap-6">
        <h2
          id="tokens-heading"
          className="font-display text-2xl uppercase tracking-wide text-hueso"
        >
          Paleta
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Swatch name="Grafito" hex="#171613" swatchClassName="bg-grafito" />
          <Swatch
            name="Concreto"
            hex="#26241F"
            swatchClassName="bg-concreto"
          />
          <Swatch name="Acero" hex="#6E6A5F" swatchClassName="bg-acero" />
          <Swatch
            name="Naranja señal"
            hex="#FF5C1A"
            swatchClassName="bg-naranja-senal"
            accent
          />
          <Swatch
            name="Ámbar taller"
            hex="#F2A93B"
            swatchClassName="bg-ambar-taller"
            accent
          />
          <Swatch name="Hueso" hex="#F5F1E6" swatchClassName="bg-hueso" />
        </ul>
      </section>

      <section aria-labelledby="type-heading" className="flex flex-col gap-6">
        <h2
          id="type-heading"
          className="font-display text-2xl uppercase tracking-wide text-hueso"
        >
          Tipografía
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <TypeCard
            label="Display"
            family="Big Shoulders"
            sampleClassName="font-display text-4xl uppercase leading-none"
            sample="Torque · Potencia"
          />
          <TypeCard
            label="Cuerpo"
            family="IBM Plex Sans"
            sampleClassName="font-sans text-base leading-relaxed"
            sample="Diagnóstico, reparación y mantenimiento en San Pedro Tlaquepaque."
          />
          <TypeCard
            label="Utilitaria"
            family="IBM Plex Mono"
            sampleClassName="font-mono text-sm"
            sample="33 5113 7051 · OS-0847"
          />
        </div>
      </section>

      <section className="rounded-sm border border-acero/40 bg-concreto p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ambar-taller">
          Checkpoint
        </p>
        <p className="mt-2 text-hueso">
          Fuentes cargando · colores base visibles · sin secciones todavía.
        </p>
        <a
          href="https://wa.me/523351137051"
          className="mt-4 inline-flex items-center gap-2 bg-naranja-senal px-4 py-2 font-sans text-sm font-semibold text-grafito"
        >
          WhatsApp CTA (siempre disponible)
        </a>
      </section>
    </main>
  );
}

type SwatchProps = {
  name: string;
  hex: string;
  swatchClassName: string;
  accent?: boolean;
};

function Swatch({ name, hex, swatchClassName, accent = false }: SwatchProps) {
  return (
    <li className="flex flex-col gap-2 rounded-sm border border-acero/30 bg-concreto p-3">
      <div
        className={`h-16 w-full rounded-sm border border-acero/40 ${swatchClassName} ${accent ? "ring-1 ring-hueso/10" : ""}`}
        aria-hidden
      />
      <div className="flex flex-col gap-0.5">
        <span className="font-sans text-sm font-medium text-hueso">{name}</span>
        <span className="font-mono text-xs text-acero">{hex}</span>
      </div>
    </li>
  );
}

type TypeCardProps = {
  label: string;
  family: string;
  sampleClassName: string;
  sample: string;
};

function TypeCard({ label, family, sampleClassName, sample }: TypeCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-sm border border-acero/30 bg-concreto p-5">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-ambar-taller">
          {label}
        </span>
        <span className="font-sans text-sm text-acero">{family}</span>
      </div>
      <p className={`text-hueso ${sampleClassName}`}>{sample}</p>
    </div>
  );
}

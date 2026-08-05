import { SITE } from "@/lib/site";

/** Barra fija de contacto — solo mobile */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-acero/30 bg-grafito/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center border border-hueso/30 bg-transparent px-3 font-sans text-sm font-semibold text-hueso"
        >
          Llamar
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center bg-naranja-senal px-3 font-sans text-sm font-semibold text-grafito"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

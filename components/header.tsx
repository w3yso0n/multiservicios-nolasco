import { CallButton, WhatsAppButton } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-acero/25 bg-grafito/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-10">
        <a href="#inicio" className="group flex min-w-0 flex-col leading-none">
          <span className="font-display text-xl font-bold uppercase tracking-tight text-hueso group-hover:text-naranja-senal sm:text-2xl">
            {SITE.brand}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-acero">
            {SITE.tagline}
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden font-mono text-sm text-hueso transition-colors hover:text-naranja-senal md:inline"
          >
            {SITE.phoneDisplay}
          </a>
          <CallButton className="hidden px-3 py-2 text-xs sm:inline-flex" />
          <WhatsAppButton className="px-3 py-2 text-xs sm:px-4 sm:text-sm" />
        </div>
      </div>
    </header>
  );
}

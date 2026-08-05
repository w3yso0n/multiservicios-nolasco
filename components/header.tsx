import Image from "next/image";
import { IMAGE_PATHS, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-acero/25 bg-grafito/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4 sm:px-10">
        <a href="#inicio" className="min-w-0 shrink">
          <Image
            src={IMAGE_PATHS.logo}
            alt={SITE.brand}
            width={180}
            height={40}
            className="h-6 w-auto max-w-[7.25rem] object-contain object-left sm:h-9 sm:max-w-[11rem]"
            priority
          />
          <span className="sr-only">
            {SITE.brand} — {SITE.tagline}
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex flex-col items-end justify-center rounded-sm border border-hueso/25 px-2 py-1 leading-tight text-hueso transition-colors hover:border-naranja-senal hover:text-naranja-senal sm:hidden"
          >
            <span className="text-[10px] font-semibold tracking-wide">
              Llamar
            </span>
            <span className="font-mono text-[9px] text-acero">
              {SITE.phoneDisplay}
            </span>
          </a>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden font-mono text-sm text-hueso transition-colors hover:text-naranja-senal sm:inline"
          >
            {SITE.phoneDisplay}
          </a>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-naranja-senal px-2.5 py-1.5 text-[11px] font-semibold text-grafito sm:px-4 sm:py-2 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import { SITE, IMAGE_PATHS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-acero/25 bg-grafito px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-5">
          <Image
            src={IMAGE_PATHS.logo}
            alt={SITE.brand}
            width={220}
            height={48}
            className="h-10 w-auto"
          />
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-acero">
            {SITE.tagline}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-acero">
            {SITE.address.full}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ambar-taller">
            Contacto
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="font-sans text-sm text-hueso hover:text-naranja-senal"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-hueso hover:text-naranja-senal"
          >
            WhatsApp
          </a>
          {SITE.socials.length === 0 ? (
            <p className="font-mono text-xs text-acero">
              Redes · por confirmar
            </p>
          ) : (
            SITE.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-hueso hover:text-naranja-senal"
              >
                {social.label}
              </a>
            ))
          )}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden border border-acero/30 md:col-span-4">
          <Image
            src={IMAGE_PATHS.tallerExterior}
            alt="Fachada del taller Sergio Nolasco"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-grafito/35" />
          <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.16em] text-hueso">
            Tlaquepaque
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-acero/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-acero">
          © {year} {SITE.brand}
        </p>
        <p className="font-mono text-xs text-acero">
          San Pedro Tlaquepaque, Jalisco
        </p>
      </div>
    </footer>
  );
}

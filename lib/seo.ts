import { IMAGE_PATHS, SERVICES, SITE } from "@/lib/site";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const SEO = {
  title: `${SITE.brand} — ${SITE.tagline}`,
  description:
    "Taller mecánico automotriz en San Pedro Tlaquepaque. Diagnóstico computarizado, frenos, motor, eléctrico, afinación y clima con garantía en mano de obra.",
  keywords: [
    "mecánico automotriz Tlaquepaque",
    "taller mecánico San Pedro Tlaquepaque",
    "diagnóstico OBD Guadalajara",
    "frenos y suspensión",
    "aire acondicionado automotriz",
    "Sergio Nolasco",
    "Multiservicios Nolasco",
  ],
} as const;

export function buildLocalBusinessJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${url}/#negocio`,
    name: SITE.brand,
    alternateName: "Multiservicios Nolasco",
    description: SEO.description,
    url,
    image: [
      `${url}${IMAGE_PATHS.og}`,
      `${url}${IMAGE_PATHS.tallerExterior}`,
      `${url}${IMAGE_PATHS.confianzaPortrait}`,
    ],
    logo: `${url}${IMAGE_PATHS.logo}`,
    telephone: SITE.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: "San Pedro Tlaquepaque",
      addressRegion: "Jalisco",
      postalCode: "45613",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      /** Aprox. zona Cam. Real a Agua Amarilla — ajustar con pin real si hace falta */
      latitude: 20.5908,
      longitude: -103.3132,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "San Pedro Tlaquepaque, Jalisco",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios automotrices",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    sameAs: SITE.socials.map((social) => social.href),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish"],
    },
  } as const;
}

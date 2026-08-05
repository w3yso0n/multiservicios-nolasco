export const SITE = {
  brand: "Sergio Nolasco",
  tagline: "Mecánico Automotriz",
  phoneDisplay: "33 5113 7051",
  phoneTel: "+523351137051",
  whatsappUrl: "https://wa.me/523351137051",
  whatsappE164: "523351137051",
  address: {
    line1: "Cam. Real a Agua Amarilla #8223 A",
    line2: "45613 San Pedro Tlaquepaque, Jal.",
    full: "Cam. Real a Agua Amarilla #8223 A, 45613 San Pedro Tlaquepaque, Jal.",
  },
  /** Placeholder hasta confirmar horario real con el cliente */
  hours: [
    { days: "Lun — Vie", time: "9:00 — 19:00" },
    { days: "Sábado", time: "9:00 — 14:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  /** Placeholder hasta confirmar años reales */
  yearsExperience: 15,
  guarantee: "Garantía escrita en mano de obra",
  socials: [] as { label: string; href: string }[],
} as const;

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

/** Lista de servicios publicada (ajustar si el cliente entrega catálogo definitivo) */
export const SERVICES: ServiceItem[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico computarizado",
    description:
      "Escaneo OBD-II, lectura de códigos y prueba de sensores antes de abrir el motor.",
  },
  {
    id: "frenos",
    title: "Frenos y suspensión",
    description:
      "Balatas, discos, tambores, amortiguadores y geometría para un frenado firme.",
  },
  {
    id: "motor",
    title: "Motor y transmisión",
    description:
      "Reparación de fugas, empaques, bandas, embrague y mantenimiento de caja.",
  },
  {
    id: "electrico",
    title: "Sistema eléctrico",
    description:
      "Batería, alternador, marcha, faros y cortos — sin adivinar, con multímetro.",
  },
  {
    id: "afinacion",
    title: "Afinación y mantenimiento",
    description:
      "Bujías, filtros, aceite y revisión de fluidos según kilometraje del vehículo.",
  },
  {
    id: "clima",
    title: "Aire acondicionado",
    description:
      "Carga de gas, detección de fugas y compresor para clima que sí enfría.",
  },
];

export const TICKER_ITEMS: string[] = [
  "Diagnóstico OBD",
  "Frenos",
  "Suspensión",
  "Motor",
  "Transmisión",
  "Eléctrico",
  "Afinación",
  "Aceite y filtros",
  "Clima / A·C",
  "Escaneo",
  "Garantía en mano de obra",
];

export type Testimonial = {
  id: string;
  name: string;
  vehicle: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "María G.",
    vehicle: "Nissan Versa 2018",
    quote:
      "Llegué con el check engine encendido. En una hora ya tenía el diagnóstico claro y el presupuesto sin rodeos.",
  },
  {
    id: "t2",
    name: "José R.",
    vehicle: "Chevrolet Aveo 2015",
    quote:
      "Me cambiaron balatas y discos. El carro frenó distinto desde el primer viaje a casa. Precio justo.",
  },
  {
    id: "t3",
    name: "Ana L.",
    vehicle: "VW Jetta 2012",
    quote:
      "El clima no enfriaba desde meses. Encontraron la fuga, sellaron y cargaron gas. Quedó como nuevo.",
  },
  {
    id: "t4",
    name: "Carlos M.",
    vehicle: "Toyota Hilux 2016",
    quote:
      "Trabajo limpio y te explican qué hicieron. No intentan venderte piezas que no necesitas.",
  },
];

export type BeforeAfterCase = {
  id: string;
  title: string;
  vehicle: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "frenos",
    title: "Frenos delanteros",
    vehicle: "Honda Civic 2014",
    beforeSrc: "/images/antes-despues/frenos-antes.png",
    afterSrc: "/images/antes-despues/frenos-despues.png",
    beforeAlt:
      "Disco y caliper desgastados con polvo de freno antes del servicio",
    afterAlt: "Disco y balatas nuevos después del servicio de frenos",
  },
  {
    id: "motor",
    title: "Motor · limpieza y sellado",
    vehicle: "Nissan Sentra 2016",
    beforeSrc: "/images/antes-despues/motor-antes.png",
    afterSrc: "/images/antes-despues/motor-despues.png",
    beforeAlt:
      "Bay del motor con polvo, grasa y fugas de aceite antes del servicio",
    afterAlt: "Bay del motor limpio y sellado después del servicio",
  },
  {
    id: "clima",
    title: "Clima / A·C",
    vehicle: "VW Jetta 2012",
    beforeSrc: "/images/antes-despues/clima-antes.png",
    afterSrc: "/images/antes-despues/clima-despues.png",
    beforeAlt:
      "Compresor de aire acondicionado sucio y desgastado antes del servicio",
    afterAlt:
      "Compresor de aire acondicionado nuevo instalado después del servicio",
  },
];

export const IMAGE_PATHS = {
  logo: "/images/brand/logo.png",
  heroFallback: "/images/hero/fallback.png",
  heroFallback3d: "/images/hero/fallback-3d.png",
  confianzaPortrait: "/images/confianza/sergio.png",
  tallerExterior: "/images/taller/exterior.png",
  mapPlaceholder: "/images/ubicacion/mapa-placeholder.png",
  og: "/images/og.jpg",
} as const;

/** Coloca el GLB exportado (Draco) aquí cuando exista; el hero lo detecta solo */
export const MODEL_PATH = "/models/pieza.glb" as const;

/** Sin GLB por ahora — el hero usa el poster fallback-3d en el canvas */
export const ENABLE_GLB = false;

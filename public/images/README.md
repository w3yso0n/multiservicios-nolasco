# Assets e información pendiente del cliente

## Listo
- Logo tipográfico: `brand/logo.png`
- Hero, retrato, fachada, OG, antes/después (frenos, motor, clima)
- Poster 3D: `hero/fallback-3d.png` (sin GLB por ahora)

## Pendiente de confirmar (texto)
- Horario real de atención → `lib/site.ts` → `SITE.hours`
- Lista definitiva de servicios (si cambia) → `SERVICES`
- Redes sociales → `SITE.socials`
- Dominio canónico → `NEXT_PUBLIC_SITE_URL` en Vercel / `.env.local`
- Años de experiencia exactos → `SITE.yearsExperience`
- Coordenadas exactas del pin (opcional) → `lib/seo.ts` → `geo`

## Opcional después
- `public/models/pieza.glb` + poner `ENABLE_GLB = true` en `lib/site.ts`
- Token Mapbox para mapa oscuro custom

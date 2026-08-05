# Assets pendientes (Fase 2 → 5)

Reemplaza los placeholders manteniendo la ruta o actualiza `lib/site.ts`.

Preferencia de formato: **JPG o WebP** (fotos). **PNG** solo para logo con transparencia.

| Archivo | Uso | Tamaño export | Orientación | Notas de color / contenido |
|---|---|---|---|---|
| `hero/fallback.jpg` | Fondo hero + fallback si falla WebGL | **1920×1080** (o 2400×1350) | Horizontal 16:9 | Foto del taller / bahía / detalle mecánico. Oscura o con sombra. Evitar texto en la imagen. Paleta: tonos grafito `#171613`, acero, toques naranja `#FF5C1A` en el entorno real si aparecen. |
| `confianza/sergio.jpg` | Retrato sección confianza | **1200×1500** | Vertical 4:5 | Sergio en taller, de medio cuerpo o 3/4. Fondo desenfocado del taller. Buena luz en el rostro. |
| `taller/exterior.jpg` | Reserva / futuras secciones | **1600×1200** | Horizontal 4:3 | Fachada o entrada del taller con dirección visible si es posible. |
| `ubicacion/mapa-placeholder.jpg` | Solo temporal | — | — | Se sustituye por Mapbox GL; no hace falta foto final. |
| `antes-despues/frenos-antes.jpg` | Slider antes | **1600×1000** | Horizontal 16:10 | Misma toma/ángulo que el “después”. Desgaste visible. |
| `antes-despues/frenos-despues.jpg` | Slider después | **1600×1000** | Horizontal 16:10 | Mismo encuadre que el antes. Pieza limpia / nueva. |
| `antes-despues/*` (extras) | Más casos | **1600×1000** c/u | 16:10 | Pares antes/después: motor, clima, suspensión, etc. |
| `brand/logo.svg` o `logo.png` | Header / footer (opcional) | SVG o PNG **512×512** + versión horizontal **1200×400** | — | Si la marca es tipográfica, no hace falta. Si hay logo: fondo transparente; versión clara sobre grafito (usar hueso `#F5F1E6` / naranja `#FF5C1A`). |
| `hero/piezagl.glb` | Modelo 3D Fase 4 | — | — | Export Spline → GLB + Draco. Pieza tipo pistón, turbo o disco de freno. Escala centrada en origen. |
| `hero/fallback-3d.jpg` | Poster del modelo 3D | **1200×1200** | Cuadrada | Render estático de la misma pieza, fondo grafito `#171613` o transparente (PNG). |

## Extra útil (no bloqueante)

- 4–8 fotos de trabajos reales (1600×1200) para galería futura
- Favicon: `icon.png` 512×512 (naranja señal sobre grafito) → `app/icon.png`
- Open Graph: `og.jpg` **1200×630** con marca + foto taller

## Naming

Minúsculas, kebab-case, sin espacios. Ejemplo: `disco-freno-antes.jpg`.

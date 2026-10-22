# Lhopital Corporate — lhopitalcorp.mx

Sitio corporativo de Lhopital S.A. de C.V. Dos trabajos: llevar a cada cliente a su división (Fire & Rescue o Moto) y presentar al corporativo ante fabricantes, gobierno, bancos y socios logísticos.

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS 3, directorio `src/`
- Fuentes con `next/font/google`: Bodoni Moda (display) y Jost (texto)
- Bilingüe: `/es` (default) y `/en`. Cualquier ruta sin idioma redirige a `/es` (middleware)
- Listo para Vercel

## Desarrollo

```bash
npm install
npm run dev
```

Variables de entorno (ver `.env.example`):

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — por defecto `lhopital-moto`

## Dónde vive cada cosa

| Qué | Dónde |
| --- | --- |
| Textos ES / EN | `src/dictionaries/es.ts`, `src/dictionaries/en.ts` |
| Enlaces, contactos, dirección, redes, marcas y public IDs de Cloudinary | `src/lib/site.ts` |
| Metadatos, hreflang y JSON-LD | `src/lib/seo.ts` |
| Secciones de la portada | `src/components/` |

## Imágenes

Todas las fotos y logos se sirven desde Cloudinary (cuenta `lhopital-moto`, carpeta raíz) con un loader propio de `next/image` (`src/lib/cloudinary-loader.ts`) que pide `f_auto,q_auto` y el ancho justo para cada pantalla. El blanco y negro de las fotos y el blanco de los logos se aplican con CSS, para que el hover pueda pasar a color.

Para cambiar una foto o un logo, súbelo a Cloudinary y actualiza su public ID en `src/lib/site.ts`.

## Assets generados

`public/` solo contiene lo que se genera desde código:

- `public/brand/wats-seal.svg` — sello WATS v3 (copia de `wats_monogram_lhopital_v3_contornos` en Cloudinary), letras en contornos
- `src/lib/wats-paths.ts` — los trazos de las letras extraídos de ese SVG, para el sello animado del hero
- `public/og-image.png` — imagen Open Graph de 1200×630
- `public/textures/grain.png` — textura de grano para las fotos

Para regenerarlos:

```bash
npm run build:assets
```

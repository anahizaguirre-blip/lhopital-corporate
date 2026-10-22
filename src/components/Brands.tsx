import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { BRANDS, type Brand } from "@/lib/site";
import Reveal from "./Reveal";

// Mismo peso visual para todos los logos: todos ocupan la misma área, así que un logo
// alargado queda más ancho y bajo, y uno compacto más angosto y alto. Nunca se deforma.
const LOGO_AREA = 11000; // px², equivale a ~210×52 para un logo de proporción 4:1

function logoBox(aspect: number) {
  const width = Math.round(Math.sqrt(LOGO_AREA * aspect));
  return { width: `min(${width}px, 100%)`, aspectRatio: String(aspect) };
}

function BrandCell({ brand, meta }: { brand: Brand; meta: { origin: string; type: string } }) {
  return (
    <li className="flex flex-col items-center justify-between gap-6 border-b border-r border-gold/15 px-5 py-10 text-center sm:px-6">
      <div className="flex h-20 w-full items-center justify-center">
        <div className="relative" style={logoBox(brand.aspect)}>
          <Image
            src={`e_trim/${brand.logo}`}
            alt={brand.name}
            fill
            sizes="280px"
            className={`object-contain ${brand.treatment === "mono" ? "logo-mono" : "logo-white"}`}
          />
        </div>
      </div>
      <p className="font-body text-[0.6875rem] uppercase leading-relaxed tracking-[0.18em] text-muted">
        <span className="sr-only">{brand.name}: </span>
        {meta.origin} · {meta.type}
      </p>
    </li>
  );
}

export default function Brands({ t, label }: { t: Dictionary["brands"]; label: string }) {
  const groups = (["fr", "moto"] as const).map((division) => ({
    division,
    title: t.groups[division],
    brands: BRANDS.filter((b) => b.division === division),
  }));

  return (
    <section id="marcas" aria-labelledby="marcas-title" className="py-24 sm:py-32 lg:py-40">
      <Reveal className="container-site">
        <p className="label">{label}</p>
        <h2 id="marcas-title" className="mt-8 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {t.headline}
        </h2>
      </Reveal>

      {groups.map((g) => (
        <Reveal key={g.division} className="container-site mt-16 sm:mt-20">
          <div className="flex items-center gap-6">
            <h3 className="label shrink-0 text-gold">{g.title}</h3>
            <div className="hairline flex-1 opacity-30" aria-hidden="true" />
          </div>
          <ul
            className={`mt-8 grid grid-cols-1 border-l border-t border-gold/15 min-[420px]:grid-cols-2 ${
              g.brands.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {g.brands.map((b) => (
              <BrandCell key={b.key} brand={b} meta={t.meta[b.key]} />
            ))}
          </ul>
        </Reveal>
      ))}
    </section>
  );
}

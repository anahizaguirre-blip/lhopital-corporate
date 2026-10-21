import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { BRANDS, type Brand } from "@/lib/site";
import Reveal from "./Reveal";

function BrandCell({ brand, meta }: { brand: Brand; meta: { origin: string; type: string } }) {
  return (
    <li className="flex flex-col items-center gap-5 border-b border-r border-gold/15 px-4 py-10 text-center sm:px-6">
      <div className="relative flex h-16 w-full max-w-[200px] items-center justify-center">
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            sizes="200px"
            className={`object-contain ${brand.treatment === "mono" ? "logo-mono" : "logo-white"}`}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center border border-dashed border-muted/50 px-2 font-body text-[0.625rem] uppercase tracking-[0.18em] text-muted">
            [PENDIENTE: logo {brand.name}]
          </span>
        )}
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

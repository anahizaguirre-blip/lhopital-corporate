import type { Dictionary } from "@/dictionaries";
import Reveal from "./Reveal";

export default function Timeline({ t }: { t: Dictionary["timeline"] }) {
  return (
    <section id="trayectoria" aria-labelledby="trayectoria-title" className="border-t border-gold/20 py-24 sm:py-32 lg:py-40">
      <Reveal className="container-site">
        <h2 id="trayectoria-title" className="font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {t.headline}
        </h2>

        <ol className="relative mt-16 grid gap-12 pl-8 lg:mt-24 lg:grid-cols-5 lg:gap-8 lg:pl-0 lg:pt-12">
          {/* Línea: vertical en móvil, horizontal en escritorio. */}
          <span aria-hidden="true" className="absolute bottom-2 left-[3px] top-2 w-px bg-gold/40 lg:hidden" />
          <span aria-hidden="true" className="absolute left-0 right-0 top-[3px] hidden h-px bg-gold/40 lg:block" />
          {t.items.map((item) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-8 top-3 h-[7px] w-[7px] rounded-full bg-gold lg:-top-12 lg:left-0"
              />
              <p className="font-display text-4xl text-text lg:text-5xl">{item.year}</p>
              <p className="mt-4 max-w-xs font-body text-[0.95rem] font-light leading-relaxed text-text/75">{item.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

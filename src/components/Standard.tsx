import type { Dictionary } from "@/dictionaries";
import Reveal from "./Reveal";

const ROMAN = ["I", "II", "III", "IV"];

export default function Standard({ t, label }: { t: Dictionary["standard"]; label: string }) {
  return (
    <section id="estandar" aria-labelledby="estandar-title" className="py-24 sm:py-32 lg:py-40">
      <Reveal className="container-site">
        <p className="label">{label}</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 id="estandar-title" className="font-display text-4xl leading-[1.08] sm:text-5xl lg:col-span-6 lg:text-6xl">
            {t.headline}
          </h2>
          <p className="font-body text-base font-light leading-relaxed text-text/80 lg:col-span-5 lg:col-start-8 lg:pt-3 lg:text-lg">
            {t.body}
          </p>
        </div>
      </Reveal>

      <Reveal className="container-site mt-20 sm:mt-28">
        <ol className="grid gap-px bg-gold/25 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.map((p, i) => (
            <li key={p.title} className="flex flex-col gap-5 bg-bg px-0 py-10 sm:px-8 lg:py-4 lg:first:pl-0">
              <span className="roman" aria-hidden="true">
                {ROMAN[i]}
              </span>
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="font-body text-[0.95rem] font-light leading-relaxed text-text/75">{p.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

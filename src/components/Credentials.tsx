import type { Dictionary } from "@/dictionaries";
import Reveal from "./Reveal";

const ROMAN = ["I", "II", "III"];

export default function Credentials({ t, label }: { t: Dictionary["credentials"]; label: string }) {
  return (
    <section id="respaldo" aria-labelledby="respaldo-title" className="border-t border-gold/20 py-24 sm:py-32 lg:py-40">
      <Reveal className="container-site">
        <p className="label">{label}</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 id="respaldo-title" className="font-display text-4xl leading-[1.08] sm:text-5xl lg:col-span-6 lg:text-6xl">
            {t.headline}
          </h2>
          <p className="font-body text-base font-light leading-relaxed text-text/80 lg:col-span-5 lg:col-start-8 lg:pt-3 lg:text-lg">
            {t.body}
          </p>
        </div>
      </Reveal>

      <Reveal className="container-site mt-20 sm:mt-28">
        <ol className="grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gold/25">
          {t.items.map((item, i) => (
            <li key={item.title} className="flex flex-col gap-5 md:px-10 md:first:pl-0 md:last:pr-0">
              <span className="roman" aria-hidden="true">
                {ROMAN[i]}
              </span>
              <p className="font-body text-[0.95rem] font-light leading-relaxed text-text/75">
                <strong className="font-display text-xl font-normal text-text">{item.title}</strong> {item.text}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

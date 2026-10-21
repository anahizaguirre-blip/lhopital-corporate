import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { CLD } from "@/lib/site";
import Reveal from "./Reveal";
import WatsSeal from "./WatsSeal";

export default function Craft({ t }: { t: Dictionary["craft"] }) {
  const seals = [
    {
      label: t.seals.road,
      node: <Image src={CLD.sealMoto} alt="" width={160} height={160} sizes="160px" className="h-full w-full object-contain" />,
    },
    {
      label: t.seals.emergency,
      node: <Image src={CLD.sealFr} alt="" width={160} height={160} sizes="160px" className="h-full w-full object-contain" />,
    },
    {
      label: t.seals.standard,
      node: <WatsSeal variant="mark" className="h-full w-full" />,
    },
  ];

  return (
    <section id="oficio" aria-labelledby="oficio-title" className="border-y border-gold/20 py-24 sm:py-32 lg:py-40">
      <Reveal className="container-site flex flex-col items-center text-center">
        <ul className="grid w-full max-w-3xl grid-cols-3 items-start gap-4 sm:gap-10">
          {seals.map((s) => (
            <li key={s.label} className="flex flex-col items-center gap-5">
              <div className="aspect-square w-full max-w-[150px]">{s.node}</div>
              <span className="label text-gold">{s.label}</span>
            </li>
          ))}
        </ul>
        <div className="hairline mt-16 w-16" aria-hidden="true" />
        <h2 id="oficio-title" className="mt-12 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {t.headline}
        </h2>
        <p className="mt-8 max-w-2xl font-body text-base font-light leading-relaxed text-text/80 lg:text-lg">{t.body}</p>
      </Reveal>
    </section>
  );
}

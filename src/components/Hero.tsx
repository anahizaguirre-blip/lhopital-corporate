import type { Dictionary } from "@/dictionaries";
import WatsSeal from "./WatsSeal";

export default function Hero({ t, scrollLabel }: { t: Dictionary["hero"]; scrollLabel: string }) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col md:min-h-[88svh] items-center justify-center px-6 pb-20 pt-[calc(var(--header-h)+2rem)] text-center"
    >
      <WatsSeal variant="mark" animated className="h-auto w-[min(62vw,340px)] sm:w-[min(40vw,360px)]" />
      <h1 className="mt-8 font-display text-[2.25rem] leading-[1.05] tracking-[0.01em] sm:text-6xl">
        {t.headline}
      </h1>
      <p className="mt-6 max-w-xl font-body text-[0.95rem] font-light leading-relaxed text-text/80 sm:text-base">
        {t.subhead}
      </p>
      <a
        href="#divisiones"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 p-2"
        aria-label={scrollLabel}
      >
        <span aria-hidden="true" className="block h-10 w-px bg-gradient-to-b from-transparent to-gold" />
        <span aria-hidden="true" className="block h-1.5 w-1.5 rotate-45 bg-gold" />
      </a>
    </section>
  );
}

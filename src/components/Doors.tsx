import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { CLD, DIVISION_URLS } from "@/lib/site";
import DoorsInView from "./DoorsInView";

type DoorProps = {
  href: string;
  image: string;
  imageAlt: string;
  seal: string;
  t: Dictionary["doors"]["fr"];
  objectPosition: string;
  priority?: boolean;
};

function Door({ href, image, imageAlt, seal, t, objectPosition, priority = false }: DoorProps) {
  return (
    <a
      href={href}
      className="door group relative flex min-h-[78svh] flex-col justify-end overflow-hidden md:min-h-0"
    >
      <div className="grain absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          // En escritorio las puertas asoman en el primer pantallazo. El grano y el blanco
          // y negro disimulan una calidad menor, que aligera la carga en móvil.
          priority={priority}
          loading={priority ? undefined : "eager"}
          quality={55}
          className="door-img object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-5 px-6 pb-12 sm:px-10 md:pb-16 lg:px-16">
        <Image src={seal} alt="" width={72} height={72} sizes="72px" className="h-16 w-16 object-contain" />
        <h3 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{t.title}</h3>
        <div className="hairline w-12" aria-hidden="true" />
        <p className="max-w-md font-body text-[0.95rem] font-light leading-relaxed text-text/85">{t.line}</p>
        <span className="btn-line mt-2 group-hover:border-gold group-hover:text-gold">
          {t.button}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}

export default function Doors({ t, heading }: { t: Dictionary["doors"]; heading: string }) {
  return (
    <section id="divisiones" aria-labelledby="divisiones-title" className="relative">
      <h2 id="divisiones-title" className="sr-only">
        {heading}
      </h2>
      <DoorsInView />
      <div className="doors flex flex-col md:h-[100svh] md:min-h-[640px] md:flex-row">
        <Door
          href={DIVISION_URLS.fr}
          image={CLD.doorFr}
          imageAlt=""
          seal={CLD.sealFr}
          t={t.fr}
          objectPosition="60% 55%"
          priority
        />
        <div className="hidden w-px bg-gold/40 md:block" aria-hidden="true" />
        <div className="hairline md:hidden" aria-hidden="true" />
        <Door
          href={DIVISION_URLS.moto}
          image={CLD.doorMoto}
          imageAlt=""
          seal={CLD.sealMoto}
          t={t.moto}
          objectPosition="55% 50%"
        />
      </div>
    </section>
  );
}

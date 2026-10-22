import type { Dictionary } from "@/dictionaries";
import { ADDRESS, CONTACT } from "@/lib/site";
import Reveal from "./Reveal";

type Line = { prefix?: string; label: string; href: string };

function Card({ title, purpose, lines }: { title: string; purpose: string; lines: Line[] }) {
  return (
    <li className="flex flex-col gap-5 border-t border-gold/40 pt-8">
      <h3 className="font-display text-2xl">{title}</h3>
      <p className="font-body text-[0.95rem] font-light leading-relaxed text-text/70">{purpose}</p>
      <ul className="mt-auto flex flex-col gap-2 font-body text-[0.95rem]">
        {lines.map((l) => (
          <li key={l.href}>
            {l.prefix && <span className="mr-2 text-muted">{l.prefix}</span>}
            <a
              href={l.href}
              className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Contact({ t, label }: { t: Dictionary["contact"]; label: string }) {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-gold/20 py-24 sm:py-32 lg:py-40">
      <Reveal className="container-site">
        <p className="label">{label}</p>
        <h2 id="contacto-title" className="mt-8 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
          {t.headline}
        </h2>
        <p className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-text/80 lg:text-lg">{t.intro}</p>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          <Card
            title={t.cards.corporate.title}
            purpose={t.cards.corporate.purpose}
            lines={[{ prefix: t.telLabel, ...CONTACT.corporatePhone }]}
          />
          <Card
            title={t.cards.fr.title}
            purpose={t.cards.fr.purpose}
            lines={[{ ...CONTACT.frEmail }]}
          />
          <Card
            title={t.cards.moto.title}
            purpose={t.cards.moto.purpose}
            lines={[{ ...CONTACT.motoEmail }]}
          />
        </ul>
      </Reveal>

      <Reveal className="container-site mt-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <div>
            <h3 className="label text-gold">{t.addressLabel}</h3>
            <address className="mt-4 font-body text-[0.95rem] font-light not-italic leading-relaxed text-text/85">
              {ADDRESS.street}
              <br />
              {ADDRESS.colonia}, {ADDRESS.municipality}
              <br />
              C.P. {ADDRESS.postalCode}, {ADDRESS.city}
            </address>
          </div>
          <div>
            <h3 className="label text-gold">{t.hoursLabel}</h3>
            <p className="mt-4 font-body text-[0.95rem] font-light leading-relaxed text-text/85">{t.hours}</p>
          </div>
          <a href={ADDRESS.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn-line self-start hover:border-gold hover:text-gold">
            {t.directions}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold/20 sm:aspect-[16/9] lg:col-span-8">
          <iframe
            src={ADDRESS.embedUrl}
            title={t.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-dark absolute inset-0 h-full w-full border-0"
          />
        </div>
      </Reveal>
    </section>
  );
}

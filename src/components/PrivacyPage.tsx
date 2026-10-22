import Link from "next/link";
import type { ReactNode } from "react";
import { PRIVACY_ES, type Run } from "@/content/privacy-es";
import { getDictionary } from "@/dictionaries";
import { PRIVACY_SLUG, type Locale } from "@/lib/site";
import Footer from "./Footer";
import Header from "./Header";

const SECTION = /^[IVX]+\.\s/;

function runs(list: Run[]): ReactNode {
  return list.map((r, i) =>
    r.bold ? (
      <strong key={i} className="font-medium text-text">
        {r.text}
      </strong>
    ) : (
      <span key={i}>{r.text}</span>
    ),
  );
}

// El aviso solo existe en español; la versión en inglés muestra el mismo texto legal.
function PrivacyBody() {
  // El primer bloque es el título del documento, que ya es el <h1> de la página.
  const [, ...blocks] = PRIVACY_ES;
  return (
    <div lang="es" className="mt-12 max-w-3xl font-body text-[0.95rem] font-light leading-relaxed text-text/80">
      {blocks.map((b, i) => {
        if (b.type === "heading") {
          return SECTION.test(b.text) ? (
            <h2 key={i} className="mb-5 mt-14 font-display text-2xl leading-snug text-text sm:text-3xl">
              {b.text}
            </h2>
          ) : (
            <p key={i} className="label mt-10 text-gold first:mt-0">
              {b.text}
            </p>
          );
        }
        if (b.type === "list") {
          return (
            <ul key={i} className="mb-5 flex flex-col gap-2 pl-5">
              {b.items.map((item, j) => (
                <li key={j} className="relative before:absolute before:-left-5 before:top-[0.7em] before:h-1 before:w-1 before:rotate-45 before:bg-gold">
                  {runs(item)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mb-5">
            {runs(b.runs)}
          </p>
        );
      })}
    </div>
  );
}

export default function PrivacyPage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const other: Locale = lang === "es" ? "en" : "es";
  return (
    <>
      <Header lang={lang} nav={t.nav} ui={t.ui} altPath={`/${other}/${PRIVACY_SLUG[other]}`} />
      <main id="contenido" className="container-site min-h-[70svh] pb-24 pt-[calc(var(--header-h)+5rem)]">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">{t.privacy.title}</h1>
        <div className="hairline mt-10 w-16" aria-hidden="true" />
        {t.privacy.note && (
          <p className="mt-10 max-w-3xl font-body text-sm italic text-muted">{t.privacy.note}</p>
        )}
        <PrivacyBody />
        <Link href={`/${lang}`} className="btn-line mt-14 hover:border-gold hover:text-gold">
          <span aria-hidden="true">←</span>
          {t.privacy.back}
        </Link>
      </main>
      <Footer lang={lang} t={t.footer} nav={t.nav} groups={t.brands.groups} isHome={false} />
    </>
  );
}

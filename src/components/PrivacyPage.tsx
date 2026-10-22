import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { PRIVACY_SLUG, type Locale } from "@/lib/site";
import Footer from "./Footer";
import Header from "./Header";

export default function PrivacyPage({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const other: Locale = lang === "es" ? "en" : "es";
  return (
    <>
      <Header lang={lang} nav={t.nav} ui={t.ui} altPath={`/${other}/${PRIVACY_SLUG[other]}`} />
      <main id="contenido" className="container-site min-h-[70svh] pb-24 pt-[calc(var(--header-h)+5rem)]">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">{t.privacy.title}</h1>
        <div className="hairline mt-10 w-16" aria-hidden="true" />
        <p className="mt-10 max-w-2xl font-body text-base font-light leading-relaxed text-text/80">
          [PENDIENTE: texto legal]
        </p>
        <Link href={`/${lang}`} className="btn-line mt-14 hover:border-gold hover:text-gold">
          <span aria-hidden="true">←</span>
          {t.privacy.back}
        </Link>
      </main>
      <Footer
        lang={lang}
        t={t.footer}
        nav={t.nav}
        groups={{ ...t.brands.groups, corporate: t.contact.cards.corporate.title }}
        isHome={false}
      />
    </>
  );
}

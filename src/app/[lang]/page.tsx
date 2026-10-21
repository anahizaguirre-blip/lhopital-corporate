import type { Metadata } from "next";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Craft from "@/components/Craft";
import Credentials from "@/components/Credentials";
import Doors from "@/components/Doors";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Standard from "@/components/Standard";
import Timeline from "@/components/Timeline";
import { getDictionary } from "@/dictionaries";
import { buildMetadata, jsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/site";

type Params = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata(lang, { es: "/es", en: "/en" });
}

export default async function Home({ params }: Params) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
      <Header lang={lang} nav={t.nav} ui={t.ui} />
      <main id="contenido">
        <Hero t={t.hero} scrollLabel={t.nav.divisiones} />
        <Doors t={t.doors} heading={t.nav.divisiones} />
        <Standard t={t.standard} label={t.nav.estandar} />
        <Craft t={t.craft} />
        <Brands t={t.brands} label={t.nav.marcas} />
        <Timeline t={t.timeline} />
        <Credentials t={t.credentials} label={t.nav.respaldo} />
        <Contact t={t.contact} label={t.nav.contacto} />
      </main>
      <Footer lang={lang} t={t.footer} groups={t.brands.groups} />
    </>
  );
}

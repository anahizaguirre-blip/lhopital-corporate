import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyPage from "@/components/PrivacyPage";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { PRIVACY_SLUG } from "@/lib/site";

// Esta ruta solo existe en /es; en inglés es /en/privacy-notice.
type Params = { params: Promise<{ lang: string }> };

const paths = { es: `/es/${PRIVACY_SLUG.es}`, en: `/en/${PRIVACY_SLUG.en}` };

export function generateStaticParams() {
  return [{ lang: "es" }];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "es") return {};
  return buildMetadata("es", paths, getDictionary("es").privacy.title);
}

export default async function Page({ params }: Params) {
  const { lang } = await params;
  if (lang !== "es") notFound();
  return <PrivacyPage lang="es" />;
}

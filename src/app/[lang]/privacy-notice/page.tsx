import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyPage from "@/components/PrivacyPage";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { PRIVACY_SLUG } from "@/lib/site";

// Esta ruta solo existe en /en; en español es /es/aviso-de-privacidad.
type Params = { params: Promise<{ lang: string }> };

const paths = { es: `/es/${PRIVACY_SLUG.es}`, en: `/en/${PRIVACY_SLUG.en}` };

export function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata("en", paths, getDictionary("en").privacy.title);
}

export default async function Page({ params }: Params) {
  const { lang } = await params;
  if (lang !== "en") notFound();
  return <PrivacyPage lang="en" />;
}

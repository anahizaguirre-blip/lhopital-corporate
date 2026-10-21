import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { ADDRESS, CONTACT, DIVISION_URLS, SITE_URL, SOCIAL, type Locale } from "./site";

const HREFLANG: Record<Locale, string> = { es: "es-MX", en: "en-US" };

// Metadatos con canónica y alternates hreflang. `paths` es la ruta (sin dominio) en cada idioma.
export function buildMetadata(lang: Locale, paths: Record<Locale, string>, title?: string): Metadata {
  const t = getDictionary(lang).meta;
  const other: Locale = lang === "es" ? "en" : "es";
  const fullTitle = title ? `${title} | Lhopital` : t.title;
  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description: t.description,
    alternates: {
      canonical: paths[lang],
      languages: {
        [HREFLANG.es]: paths.es,
        [HREFLANG.en]: paths.en,
        "x-default": paths.es,
      },
    },
    openGraph: {
      type: "website",
      url: paths[lang],
      siteName: "Lhopital",
      title: fullTitle,
      description: t.description,
      locale: t.ogLocale,
      alternateLocale: getDictionary(other).meta.ogLocale,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "WATS — We Are The Standard" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: t.description,
      images: ["/og-image.png"],
    },
  };
}

export function jsonLd(lang: Locale) {
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Lhopital S.A. de C.V.",
        alternateName: "Lhopital",
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.png`,
        foundingDate: "2021",
        slogan: "We Are The Standard",
        sameAs: [...SOCIAL.fr, ...SOCIAL.moto].map((s) => s.href),
        subOrganization: [
          {
            "@type": "Organization",
            name: "Lhopital Fire & Rescue",
            url: DIVISION_URLS.fr,
            sameAs: SOCIAL.fr.map((s) => s.href),
          },
          {
            "@type": "Organization",
            name: "Lhopital Moto",
            url: DIVISION_URLS.moto,
            sameAs: SOCIAL.moto.map((s) => s.href),
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Lhopital S.A. de C.V.",
        url: `${SITE_URL}/${lang}`,
        image: `${SITE_URL}/og-image.png`,
        telephone: "+52 55 9462 1951",
        parentOrganization: { "@id": orgId },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${ADDRESS.street}, ${ADDRESS.colonia}`,
          addressLocality: ADDRESS.municipality,
          addressRegion: ADDRESS.city,
          postalCode: ADDRESS.postalCode,
          addressCountry: "MX",
        },
        geo: { "@type": "GeoCoordinates", latitude: ADDRESS.lat, longitude: ADDRESS.lng },
        hasMap: ADDRESS.directionsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "11:00",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "16:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "11:00",
            closes: "14:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+52 55 9462 1951",
            contactType: "customer service",
            areaServed: "MX",
          },
          {
            "@type": "ContactPoint",
            telephone: "+52 33 1977 4134",
            email: CONTACT.frEmail.label,
            contactType: "sales",
            name: "Lhopital Fire & Rescue",
          },
          {
            "@type": "ContactPoint",
            telephone: "+52 56 2162 7604",
            email: CONTACT.motoEmail.label,
            contactType: "sales",
            name: "Lhopital Moto",
          },
        ],
      },
    ],
  };
}

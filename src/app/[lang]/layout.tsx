import type { Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LOCALES, isLocale } from "@/lib/site";
import "../globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-bodoni",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jost",
});

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang === "es" ? "es-MX" : "en-US"} className={`${bodoni.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        {/* Sin JS, las secciones se muestran sin animación de entrada. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}

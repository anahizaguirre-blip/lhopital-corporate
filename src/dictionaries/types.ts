import type { BrandKey } from "@/lib/site";

type Door = { title: string; line: string; button: string };
type TitledText = { title: string; text: string };

export type Dictionary = {
  meta: { title: string; description: string; ogLocale: string };
  ui: { skip: string; menu: string; close: string; switchLanguage: string; home: string };
  nav: { estandar: string; divisiones: string; marcas: string; respaldo: string; contacto: string };
  hero: { headline: string; subhead: string };
  doors: { fr: Door; moto: Door };
  standard: { headline: string; body: string; pillars: TitledText[] };
  craft: {
    headline: string;
    body: string;
    seals: { road: string; emergency: string; standard: string };
  };
  brands: {
    headline: string;
    groups: { fr: string; moto: string };
    meta: Record<BrandKey, { origin: string; type: string }>;
  };
  timeline: { headline: string; items: { year: string; text: string }[] };
  credentials: { headline: string; body: string; items: TitledText[] };
  contact: {
    headline: string;
    intro: string;
    cards: Record<"corporate" | "fr" | "moto", { title: string; purpose: string }>;
    telLabel: string;
    addressLabel: string;
    hoursLabel: string;
    hours: string;
    directions: string;
    mapTitle: string;
  };
  footer: { entity: string; privacy: string; signature: string; social: string };
  privacy: { title: string; back: string; note?: string };
};

import type { Locale } from "@/lib/site";
import en from "./en";
import es from "./es";

const dictionaries = { es, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dictionary } from "./types";

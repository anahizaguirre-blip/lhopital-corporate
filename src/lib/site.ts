// Datos del sitio que no cambian por idioma: enlaces, contactos, assets de Cloudinary.

export const SITE_URL = "https://www.lhopitalcorp.mx";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const PRIVACY_SLUG: Record<Locale, string> = {
  es: "aviso-de-privacidad",
  en: "privacy-notice",
};

export const DIVISION_URLS = {
  fr: "https://www.lhopital-fr.mx",
  moto: "https://www.lhopital.mx",
} as const;

// Public IDs en Cloudinary (cuenta lhopital-moto, carpeta raíz).
export const CLD = {
  doorFr: "corporate-fr",
  doorMoto: "moto-corporate",
  monogramHorizontal: "corporate_horizontal_invertido",
  monogramVertical: "corporate_vertical_invertido",
  sealFr: "escudo_bw_fr",
  sealMoto: "frase_circular_invertido",
} as const;

export const CONTACT = {
  corporatePhone: { label: "+52 (55) 9462 1951", href: "tel:+525594621951" },
  frEmail: { label: "contacto@lhopital-fr.mx", href: "mailto:contacto@lhopital-fr.mx" },
  motoEmail: { label: "contacto@lhopital.mx", href: "mailto:contacto@lhopital.mx" },
} as const;

export const ADDRESS = {
  street: "Pedro Sainz de Baranda 139, Edificio T, Locación 25",
  colonia: "Col. Los Cipreses",
  municipality: "Coyoacán",
  postalCode: "04830",
  city: "Ciudad de México",
  lat: 19.3204018,
  lng: -99.1287753,
  // Ficha de Google de Lhopital (Pedro Sainz de Baranda 139-Locación 25). Por cid se abre la ficha
  // del negocio, con su botón de "Cómo llegar", en lugar de un pin suelto en las coordenadas.
  directionsUrl: "https://www.google.com/maps?cid=17537037123778454437",
  embedUrl: "https://maps.google.com/maps?cid=17537037123778454437&z=16&output=embed",
} as const;

export type SocialNetwork = "instagram" | "facebook" | "youtube" | "linkedin";

// Redes por división, en el orden en que aparecen en el footer.
export const SOCIAL: Record<"fr" | "moto", { network: SocialNetwork; href: string }[]> = {
  fr: [
    { network: "instagram", href: "https://www.instagram.com/lhopitalfr/" },
    { network: "facebook", href: "https://www.facebook.com/lhopitalfr" },
    { network: "youtube", href: "https://www.youtube.com/@LhopitalFR" },
    { network: "linkedin", href: "https://www.linkedin.com/company/lhopital-fr/" },
  ],
  moto: [
    { network: "instagram", href: "https://instagram.com/lhopitalmx" },
    { network: "facebook", href: "https://facebook.com/lhopitalmx" },
    { network: "youtube", href: "https://www.youtube.com/@lhopitalmx" },
    { network: "linkedin", href: "https://www.linkedin.com/company/lhopital/" },
  ],
};

export type BrandKey =
  | "resqjack"
  | "trelleborg"
  | "supervac"
  | "hexarmor"
  | "lion"
  | "genesis"
  | "turtle"
  | "hedon"
  | "beeline"
  | "tees";

export type Brand = {
  key: BrandKey;
  name: string;
  division: "fr" | "moto";
  // Public ID en Cloudinary; se recorta el margen transparente (e_trim) al pedirlo.
  logo: string;
  // Proporción ancho/alto del logo ya recortado. Sirve para darles a todos el mismo peso visual.
  aspect: number;
  // Tratamiento CSS: "white" pinta todo el logo en blanco; "mono" lo pasa a escala de grises.
  treatment: "white" | "mono";
};

// El orden de este arreglo es el orden en pantalla.
export const BRANDS: Brand[] = [
  { key: "resqjack", name: "Res-Q-Jack", division: "fr", logo: "2021_RQJ_Logo-with_tag-light_BG", aspect: 6.9, treatment: "white" },
  { key: "trelleborg", name: "Trelleborg", division: "fr", logo: "trelleborg", aspect: 2.39, treatment: "white" },
  { key: "supervac", name: "SuperVac", division: "fr", logo: "supervac", aspect: 5.72, treatment: "white" },
  { key: "hexarmor", name: "HexArmor", division: "fr", logo: "HexArmor_navy", aspect: 4.25, treatment: "white" },
  // En blanco el sello rojo se volvería un bloque liso y se perdería la cabeza del león.
  { key: "lion", name: "LION", division: "fr", logo: "LION_Corporate_Logo_tagline_red_stamp_reverse", aspect: 2.35, treatment: "mono" },
  { key: "genesis", name: "Genesis Rescue Systems", division: "fr", logo: "GSR-Hrz-Logomark", aspect: 3.93, treatment: "white" },
  { key: "turtle", name: "Turtle Plastics", division: "fr", logo: "TP-Primary-Logo-Nav-New-1-1170x694", aspect: 3.16, treatment: "white" },
  { key: "hedon", name: "Hedon", division: "moto", logo: "hedon-white", aspect: 4.31, treatment: "white" },
  { key: "beeline", name: "Beeline", division: "moto", logo: "motoii", aspect: 2.83, treatment: "white" },
  { key: "tees", name: "Lhopital Tee's", division: "moto", logo: "frase_horizontal_invertido", aspect: 4.52, treatment: "white" },
];

// Datos del sitio que no cambian por idioma: enlaces, contactos, assets de Cloudinary.

export const SITE_URL = "https://www.lhopital.com.mx";

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
  doorFr: "fr-corporate",
  doorMoto: "moto-corporate",
  monogramHorizontal: "corporate_horizontal_invertido",
  monogramVertical: "corporate_vertical_invertido",
  sealFr: "escudo_bw_fr",
  sealMoto: "frase_circular_invertido",
} as const;

export const CONTACT = {
  corporatePhone: { label: "+52 (55) 9462 1951", href: "tel:+525594621951" },
  frEmail: { label: "contacto@lhopital-fr.mx", href: "mailto:contacto@lhopital-fr.mx" },
  frWhatsapp: { label: "+52 (33) 1977 4134", href: "https://wa.me/523319774134" },
  motoEmail: { label: "contacto@lhopital.mx", href: "mailto:contacto@lhopital.mx" },
  motoPhone: { label: "+52 (56) 2162 7604", href: "tel:+525621627604" },
} as const;

export const ADDRESS = {
  street: "Pedro Sainz de Baranda 139, Edificio T, Locación 25",
  colonia: "Col. Los Cipreses",
  municipality: "Coyoacán",
  postalCode: "04830",
  city: "Ciudad de México",
  lat: 19.3204018,
  lng: -99.1287753,
  directionsUrl: "https://www.google.com/maps/place/Lhopital/@19.3204068,-99.1313556,17z",
  embedUrl: "https://www.google.com/maps?q=19.3204018,-99.1287753&z=16&output=embed",
} as const;

export const SOCIAL = {
  fr: [
    { label: "Instagram", href: "https://www.instagram.com/lhopitalfr/" },
    { label: "Facebook", href: "https://www.facebook.com/lhopitalfr" },
    { label: "YouTube", href: "https://www.youtube.com/@LhopitalFR" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/lhopital-fr/" },
  ],
  moto: [
    { label: "Instagram", href: "https://instagram.com/lhopitalmx" },
    { label: "Facebook", href: "https://facebook.com/lhopitalmx" },
  ],
} as const;

export type BrandKey =
  | "trelleborg"
  | "pgi"
  | "hexarmor"
  | "resqjack"
  | "lion"
  | "genesis"
  | "turtle"
  | "beeline"
  | "hedon"
  | "tees";

export type Brand = {
  key: BrandKey;
  name: string;
  division: "fr" | "moto";
  // null = logo pendiente; se muestra el nombre como marcador.
  logo: string | null;
  // Tratamiento CSS: "white" pinta todo el logo en blanco; "mono" lo pasa a escala de grises.
  treatment: "white" | "mono";
};

export const BRANDS: Brand[] = [
  { key: "trelleborg", name: "Trelleborg", division: "fr", logo: null, treatment: "white" },
  // El original trae fondo blanco sólido: Cloudinary lo vuelve transparente y recorta el margen.
  { key: "pgi", name: "PGI", division: "fr", logo: "e_make_transparent:15/e_trim/PGI-Logo", treatment: "white" },
  { key: "hexarmor", name: "HexArmor", division: "fr", logo: "HexArmor_navy", treatment: "white" },
  { key: "resqjack", name: "Res-Q-Jack", division: "fr", logo: "2021_RQJ_Logo-with_tag-light_BG", treatment: "white" },
  // En blanco el sello rojo se volvería un bloque liso y se perdería la cabeza del león.
  { key: "lion", name: "LION", division: "fr", logo: "LION_Corporate_Logo_tagline_red_stamp_reverse", treatment: "mono" },
  { key: "genesis", name: "Genesis Rescue Systems", division: "fr", logo: "GSR-Hrz-Logomark", treatment: "white" },
  { key: "turtle", name: "Turtle Plastics", division: "fr", logo: "e_trim/TP-Primary-Logo-Nav-New-1-1170x694", treatment: "white" },
  { key: "beeline", name: "Beeline", division: "moto", logo: "motoii", treatment: "white" },
  { key: "hedon", name: "Hedon", division: "moto", logo: "hedon-white", treatment: "white" },
  { key: "tees", name: "Lhopital Tee's", division: "moto", logo: "frase_horizontal_invertido", treatment: "white" },
];

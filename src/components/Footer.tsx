import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { CLD, PRIVACY_SLUG, SOCIAL, type Locale, type SocialNetwork } from "@/lib/site";

const NAV_ORDER = ["estandar", "divisiones", "marcas", "respaldo", "contacto"] as const;

const NETWORK_NAME: Record<SocialNetwork, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  linkedin: "LinkedIn",
};

function SocialIcon({ network }: { network: SocialNetwork }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (network) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M13.6 21.4V13.6h2.4l.4-2.8h-2.8V9.1c0-.8.3-1.4 1.4-1.4h1.5V5.3a19 19 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v1.9H8.3v2.8h2.4v7.8" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
          <path d="M10.2 9.3v5.4l4.6-2.7z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.8 10.4v6M7.8 7.6v.1M11.4 16.4v-6M11.4 13c0-1.6 1-2.7 2.4-2.7s2.2 1 2.2 2.6v3.5" />
        </svg>
      );
  }
}

type Props = {
  lang: Locale;
  t: Dictionary["footer"];
  nav: Dictionary["nav"];
  groups: { fr: string; moto: string };
  // En la portada los enlaces del menú son anclas; en páginas internas apuntan a la portada.
  isHome?: boolean;
};

export default function Footer({ lang, t, nav, groups, isHome = true }: Props) {
  const year = new Date().getFullYear();
  const link = "transition-colors duration-300 hover:text-gold focus-visible:text-gold";

  return (
    <footer className="border-t border-gold/30">
      <div className="container-site">
        <div className="flex flex-col gap-10 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <Link href={`/${lang}`} aria-label="Lhopital" className="shrink-0 self-start lg:self-center">
            <Image
              src={CLD.monogramHorizontal}
              alt="Lhopital"
              width={205}
              height={48}
              sizes="205px"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav aria-label={lang === "es" ? "Secciones" : "Sections"}>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 font-body text-xs font-medium uppercase tracking-[0.2em] text-text/80 xl:gap-x-10">
              {NAV_ORDER.map((id) => (
                <li key={id}>
                  <a href={isHome ? `#${id}` : `/${lang}#${id}`} className={link}>
                    {nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.social} className="flex flex-wrap gap-x-8 gap-y-6">
            {(["fr", "moto"] as const).map((division) => (
              <div key={division} className="flex flex-col gap-3">
                <span className="font-body text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                  {groups[division]}
                </span>
                <ul className="flex items-center gap-4 text-text/80">
                  {SOCIAL[division].map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${NETWORK_NAME[s.network]} — ${groups[division]}`}
                        className={`block ${link}`}
                      >
                        <SocialIcon network={s.network} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="hairline opacity-20" aria-hidden="true" />
        <div className="flex flex-col gap-4 py-8 font-body text-[0.6875rem] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Lhopital S.A. de C.V. · <span className="text-gold">We Are The Standard</span>
          </p>
          <Link href={`/${lang}/${PRIVACY_SLUG[lang]}`} className={link}>
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}

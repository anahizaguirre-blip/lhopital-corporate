import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { CLD, PRIVACY_SLUG, SOCIAL, type Locale } from "@/lib/site";

export default function Footer({
  lang,
  t,
  groups,
}: {
  lang: Locale;
  t: Dictionary["footer"];
  groups: Dictionary["brands"]["groups"];
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold/30 pb-10 pt-16">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-5 md:col-span-5">
            <Image
              src={CLD.monogramVertical}
              alt="Lhopital"
              width={96}
              height={94}
              sizes="96px"
              className="h-20 w-auto self-start"
            />
            <p className="font-body text-sm font-light text-text/75">{t.entity}</p>
          </div>

          <nav aria-label={t.social} className="grid grid-cols-2 gap-8 md:col-span-5">
            {(["fr", "moto"] as const).map((division) => (
              <div key={division}>
                <h2 className="label text-gold">{groups[division]}</h2>
                <ul className="mt-4 flex flex-col gap-2 font-body text-sm">
                  {SOCIAL[division].map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text/80 transition-colors hover:text-gold"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="md:col-span-2 md:text-right">
            <Link
              href={`/${lang}/${PRIVACY_SLUG[lang]}`}
              className="font-body text-sm text-text/80 underline decoration-gold/40 underline-offset-4 hover:text-gold"
            >
              {t.privacy}
            </Link>
          </div>
        </div>

        <div className="hairline mt-14 opacity-30" aria-hidden="true" />
        <div className="mt-8 flex flex-col gap-3 font-body text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gold">{t.signature}</p>
          <p>© {year} Lhopital S.A. de C.V.</p>
        </div>
      </div>
    </footer>
  );
}

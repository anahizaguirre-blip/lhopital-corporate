"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { CLD, type Locale } from "@/lib/site";

// Todas las secciones de la portada, en orden; el cambio de idioma conserva la que está en pantalla.
export const SECTION_IDS = [
  "inicio",
  "divisiones",
  "estandar",
  "oficio",
  "marcas",
  "trayectoria",
  "respaldo",
  "contacto",
] as const;

const NAV_ORDER = ["estandar", "divisiones", "marcas", "respaldo", "contacto"] as const;

type Props = {
  lang: Locale;
  nav: Dictionary["nav"];
  ui: Dictionary["ui"];
  // En páginas internas, la ruta equivalente en el otro idioma. En la portada se calcula por sección.
  altPath?: string;
};

export default function Header({ lang, nav, ui, altPath }: Props) {
  const other: Locale = lang === "es" ? "en" : "es";
  const isHome = !altPath;
  const base = `/${lang}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!isHome) return;
      const probe = window.innerHeight * 0.35;
      let current: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      setSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const langHref = altPath ?? (section === "inicio" ? `/${other}` : `/${other}#${section}`);
  const solid = scrolled || open || !isHome;

  const navLinks = NAV_ORDER.map((id) => (
    <a
      key={id}
      href={isHome ? `#${id}` : `${base}#${id}`}
      onClick={() => setOpen(false)}
      className="transition-colors duration-300 hover:text-gold"
    >
      {nav[id]}
    </a>
  ));

  const langToggle = (
    <span className="flex items-center gap-2" aria-label={ui.switchLanguage}>
      <span aria-current="true" className="text-text">
        {lang.toUpperCase()}
      </span>
      <span aria-hidden="true" className="text-gold/60">
        /
      </span>
      <a
        href={langHref}
        hrefLang={other}
        lang={other}
        className="text-muted transition-colors duration-300 hover:text-gold"
      >
        {other.toUpperCase()}
      </a>
    </span>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-bg/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-bg focus:px-4 focus:py-2"
      >
        {ui.skip}
      </a>
      <div className="container-site flex h-[var(--header-h)] items-center justify-between">
        <Link href={base} aria-label={`Lhopital — ${ui.home}`} className="block">
          <Image
            src={CLD.monogramHorizontal}
            alt="Lhopital"
            width={168}
            height={39}
            priority
            sizes="168px"
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label={lang === "es" ? "Principal" : "Main"} className="hidden items-center gap-8 font-body text-[0.6875rem] uppercase tracking-label text-text lg:flex">
          {navLinks}
          <span aria-hidden="true" className="h-4 w-px bg-gold/50" />
          {langToggle}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? ui.close : ui.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-text transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-text transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      <div className="hairline opacity-30" aria-hidden="true" style={{ opacity: solid ? 0.3 : 0 }} />

      <nav
        id="menu-movil"
        aria-label={lang === "es" ? "Principal" : "Main"}
        hidden={!open}
        className="h-[calc(100svh-var(--header-h))] bg-bg lg:hidden"
      >
        <div className="container-site flex flex-col gap-7 pt-10 font-body text-sm uppercase tracking-label text-text">
          {navLinks}
          <div className="hairline mt-2 w-16" aria-hidden="true" />
          {langToggle}
        </div>
      </nav>
    </header>
  );
}

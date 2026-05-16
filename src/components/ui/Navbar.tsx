"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about-me", label: "About Me" },
  { href: "/#works", label: "Works" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Past this scroll offset the bar hides on scroll-down and shows on scroll-up */
const TOP_ALWAYS_VISIBLE_PX = 88;
const SCROLL_DELTA_PX = 10;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navRevealed, setNavRevealed] = useState(true);
  const [scrollPastHero, setScrollPastHero] = useState(false);
  
  const lastScrollRef = useRef(0);
  const revealedRef = useRef(true);
  const scrollPastHeroRef = useRef(false);

  useLenis((lenis) => {
    const y = lenis.animatedScroll;
    const delta = y - lastScrollRef.current;
    lastScrollRef.current = y;

    const nextPastHero = y > TOP_ALWAYS_VISIBLE_PX;
    if (nextPastHero !== scrollPastHeroRef.current) {
      scrollPastHeroRef.current = nextPastHero;
      setScrollPastHero(nextPastHero);
    }

    let next = revealedRef.current;
    if (y <= TOP_ALWAYS_VISIBLE_PX) {
      next = true;
    } else if (delta < -SCROLL_DELTA_PX) {
      next = true;
    } else if (delta > SCROLL_DELTA_PX) {
      next = false;
    }

    if (next !== revealedRef.current) {
      revealedRef.current = next;
      setNavRevealed(next);
    }
  }, []);

  const showNavBar = menuOpen || navRevealed;
  const navFloatingBg = showNavBar && scrollPastHero;

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/#contact") {
      e.preventDefault();
      window.location.hash = href.replace("/", "");
      setMenuOpen(false);
    } else if (href.startsWith("/#")) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 px-6 py-5 md:px-12 transition-[transform,background-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none ${menuOpen ? "z-[80]" : "z-[60]"} ${showNavBar ? "translate-y-0" : "-translate-y-full pointer-events-none"} ${navFloatingBg ? "bg-white/65 backdrop-blur-md" : ""}`}
        aria-label="Primary"
        aria-hidden={!showNavBar}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/#home" className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-white/90 shadow-[8px_8px_20px_rgba(15,23,42,0.08),-8px_-8px_20px_rgba(255,255,255,0.9)]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </Link>

          <div className="hidden items-center gap-3 text-sm font-medium text-slate-900 lg:flex">
            {navLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                onClick={(e) => handleNavClick(e, href)}
                className="rounded-full px-4 py-2 transition hover:bg-slate-100"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-[8px_8px_20px_rgba(15,23,42,0.08),-8px_-8px_20px_rgba(255,255,255,0.9)] transition hover:bg-slate-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && [
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[75] bg-slate-900/35 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />,
          <motion.div
            key="mobile-nav-panel"
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ x: "100%", opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.6 }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className="fixed inset-y-0 right-0 z-[76] flex w-[min(100vw-2.5rem,18rem)] flex-col border-l border-slate-200 bg-white/95 px-6 pt-24 pb-10 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 text-base font-semibold text-slate-900">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="rounded-2xl px-4 py-3.5 transition-colors hover:bg-slate-100"
                  onClick={(e) => handleNavClick(e as any, href)}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>,
        ]}
      </AnimatePresence>
    </>
  );
}

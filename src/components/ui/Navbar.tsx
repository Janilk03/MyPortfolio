"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about-me", label: "About Me", id: "about-me" },
  { href: "/#case-studies", label: "Work", id: "case-studies" },
] as const;

const TOP_ALWAYS_VISIBLE_PX = 80;
const SCROLL_DELTA_PX = 10;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navRevealed, setNavRevealed] = useState(true);
  const [scrollPastHero, setScrollPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();
  const isCaseStudy = pathname?.startsWith("/case-study");
  const isDarkNavbar = scrollPastHero || isCaseStudy;

  const lastScrollRef = useRef(0);
  const revealedRef = useRef(true);
  const scrollPastHeroRef = useRef(false);

  // Active section tracking via Intersection Observer
  useEffect(() => {
    const sections = ["home", "about-me", "process", "case-studies", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-35% 0px -50% 0px" }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

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
    if (href.startsWith("/#")) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed z-[60] transition-all duration-500 ease-out motion-reduce:transition-none ${menuOpen ? "z-[80]" : "z-[60]"
          } ${showNavBar ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 pointer-events-none"
          } ${isDarkNavbar
            ? "top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl px-2 py-2 rounded-full border bg-slate-950/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white backdrop-blur-md"
            : "top-0 left-0 w-full px-4 py-6 bg-transparent border-transparent text-slate-900 shadow-none rounded-none"
          }`}
        aria-label="Primary"
        aria-hidden={!showNavBar}
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${isDarkNavbar ? "w-full" : "max-w-7xl"}`}>

          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-2.5 transition-all duration-300 hover:opacity-90 shrink-0 group"
          >
            <Image
              src="/images/logo-new.jpeg"
              alt="Janil K Logo"
              width={32}
              height={32}
              className="rounded-full object-cover border border-slate-200/50"
            />
            <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${isDarkNavbar ? "text-white" : "text-slate-900"}`}>
              JANIL K.
            </span>
          </Link>

          {/* Spaced Nav Links */}
          <div className={`hidden items-center gap-1 text-[13px] font-semibold lg:flex transition-all duration-500`}>
            {navLinks.map(({ href, label, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative rounded-full px-4.5 py-2 transition-colors duration-300 ${isActive
                    ? isDarkNavbar
                      ? "text-white"
                      : "text-blue-600"
                    : isDarkNavbar
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className={`absolute inset-0 z-0 rounded-full ${isDarkNavbar
                        ? "bg-blue-600/90 shadow-[0_2px_12px_rgba(41,151,255,0.4)]"
                        : "bg-blue-50/80 border border-blue-100/40"
                        }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </div>

          {/* Let's Connect CTA Button (mockup style) */}
          <div className="hidden lg:block shrink-0">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-500 bg-white hover:bg-blue-50/90 text-blue-600 border border-slate-100 ${isDarkNavbar
                ? "shadow-sm px-5 py-2 text-xs"
                : "shadow-sm px-6 py-2.5 text-xs hover:-translate-y-0.5"
                }`}
            >
              Let's connect
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Compact Menu Button (Mobile) */}
          <button
            type="button"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 lg:hidden ${isDarkNavbar
              ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
              : "border-slate-200 bg-white/90 text-slate-900 hover:bg-slate-50"
              }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[75] bg-slate-950/40 backdrop-blur-sm lg:hidden"
              aria-hidden
              onClick={() => setMenuOpen(false)}
            />
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
              className="fixed inset-y-0 right-0 z-[76] flex w-[min(100vw-2.5rem,18rem)] flex-col border-l border-slate-800 bg-slate-950/95 px-6 pt-24 pb-10 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 text-base font-semibold text-slate-300">
                {navLinks.map(({ href, label, id }, i) => {
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      className={`rounded-2xl px-4 py-3.5 transition-all duration-300 flex items-center justify-between ${isActive
                        ? "text-[#2997ff] bg-white/[0.03]"
                        : "hover:bg-white/[0.02]"
                        }`}
                      onClick={(e) => handleNavClick(e as any, href)}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2997ff]" />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

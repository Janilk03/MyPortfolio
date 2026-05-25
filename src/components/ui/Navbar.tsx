"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about-me", label: "About Me", id: "about-me" },
  { href: "/#case-studies", label: "Works", id: "case-studies" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

const TOP_ALWAYS_VISIBLE_PX = 88;
const SCROLL_DELTA_PX = 10;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navRevealed, setNavRevealed] = useState(true);
  const [scrollPastHero, setScrollPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const lastScrollRef = useRef(0);
  const revealedRef = useRef(true);
  const scrollPastHeroRef = useRef(false);

  // Active section tracking via Intersection Observer
  useEffect(() => {
    const sections = ["home", "about-me", "case-studies", "contact"];
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
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-2xl px-4 py-2.5 rounded-full border transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none ${
          menuOpen ? "z-[80]" : "z-[60]"
        } ${
          showNavBar ? "translate-y-0" : "-translate-y-[150%] pointer-events-none"
        } ${
          scrollPastHero
            ? "bg-slate-950/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white backdrop-blur-md"
            : "bg-white/80 border-slate-200/60 shadow-[0_8px_32px_rgba(15,23,42,0.06)] text-slate-900 backdrop-blur-md"
        }`}
        aria-label="Primary"
        aria-hidden={!showNavBar}
      >
        <div className="flex items-center justify-between">
          {/* Compact Logo */}
          <Link
            href="/#home"
            className={`relative h-8 w-8 overflow-hidden rounded-full border transition-all duration-500 shadow-sm hover:scale-105 shrink-0 ${
              scrollPastHero ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/90"
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              sizes="32px"
              priority
              className="object-cover"
            />
          </Link>

          {/* Centered Capsule Desktop Nav Links */}
          <div className="hidden items-center gap-1 text-[13px] font-semibold lg:flex">
            {navLinks.map(({ href, label, id }) => {
              const isActive = activeSection === id;
              return (
                <a 
                  key={href} 
                  href={href} 
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative rounded-full px-4 py-2 transition-colors duration-300 ${
                    isActive 
                      ? "text-white" 
                      : scrollPastHero 
                        ? "text-slate-400 hover:text-white" 
                        : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 z-0 rounded-full bg-[#2997ff] shadow-[0_2px_12px_rgba(41,151,255,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </div>

          {/* Compact Menu Button (Mobile) */}
          <button
            type="button"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 lg:hidden ${
              scrollPastHero 
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
        {menuOpen && [
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[75] bg-slate-950/40 backdrop-blur-sm lg:hidden"
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
                    className={`rounded-2xl px-4 py-3.5 transition-all duration-300 flex items-center justify-between ${
                      isActive 
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
          </motion.div>,
        ]}
      </AnimatePresence>
    </>
  );
}

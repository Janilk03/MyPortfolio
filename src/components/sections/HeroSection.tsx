"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { ScrollDownButton } from "@/components/ui/ScrollDownButton";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "About Me" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
] as const;

/** Past this scroll offset the bar hides on scroll-down and shows on scroll-up */
const TOP_ALWAYS_VISIBLE_PX = 88;
const SCROLL_DELTA_PX = 10;

const HERO_SUBTITLE = "Janil K. UX Engineer.";
const HERO_H1_LINE1 = "Designing interfaces that ";
const HERO_H1_LINE2 = "feel alive.";
/** First segment: normal headline weight/color; second segment: italic + electric blue */
const HERO_SECOND_ACCENT = "Powered by AI, Shaped by";
const HERO_SECOND_MAIN = "Human";
const HERO_SECOND_TAGLINE = `${HERO_SECOND_ACCENT}${HERO_SECOND_MAIN}`;
const HERO_PRIMARY_TAGLINE = `${HERO_H1_LINE1}${HERO_H1_LINE2}`;
const HERO_BODY =
  "I combine UX strategy, visual design, and front-end engineering to create immersive digital products that users love.";
const TYPEWRITER_MS_SUBTITLE = 52;
const TYPEWRITER_MS_HEADLINE = 42;
const TYPEWRITER_MS_BODY = 26;
const TYPEWRITER_MS_HEADLINE_DELETE = 24;
const TAGLINE_SWAP_MS = 7000;

function HeroTypewriterIntro() {
  const [subLen, setSubLen] = useState(0);
  const [activeTagline, setActiveTagline] = useState<"primary" | "secondary">("primary");
  const [headlineLen, setHeadlineLen] = useState(0);
  const [headlinePhase, setHeadlinePhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [firstPrimaryDone, setFirstPrimaryDone] = useState(false);
  const [bodyLen, setBodyLen] = useState(0);

  useEffect(() => {
    if (subLen >= HERO_SUBTITLE.length) return;
    const id = window.setTimeout(() => setSubLen((n) => n + 1), TYPEWRITER_MS_SUBTITLE);
    return () => clearTimeout(id);
  }, [subLen]);

  useEffect(() => {
    if (subLen < HERO_SUBTITLE.length) return;
    if (headlinePhase !== "typing") return;
    const current = activeTagline === "primary" ? HERO_PRIMARY_TAGLINE : HERO_SECOND_TAGLINE;
    if (headlineLen >= current.length) {
      setHeadlinePhase("holding");
      if (activeTagline === "primary" && !firstPrimaryDone) {
        setFirstPrimaryDone(true);
      }
      return;
    }
    const id = window.setTimeout(() => setHeadlineLen((n) => n + 1), TYPEWRITER_MS_HEADLINE);
    return () => clearTimeout(id);
  }, [subLen, headlineLen, headlinePhase, activeTagline, firstPrimaryDone]);

  useEffect(() => {
    if (subLen < HERO_SUBTITLE.length) return;
    if (headlinePhase !== "holding") return;
    const id = window.setTimeout(() => setHeadlinePhase("deleting"), TAGLINE_SWAP_MS);
    return () => clearTimeout(id);
  }, [subLen, headlinePhase]);

  useEffect(() => {
    if (headlinePhase !== "deleting") return;
    if (headlineLen <= 0) {
      setActiveTagline((prev) => (prev === "primary" ? "secondary" : "primary"));
      setHeadlinePhase("typing");
      return;
    }
    const id = window.setTimeout(() => setHeadlineLen((n) => n - 1), TYPEWRITER_MS_HEADLINE_DELETE);
    return () => clearTimeout(id);
  }, [headlinePhase, headlineLen]);

  useEffect(() => {
    if (!firstPrimaryDone) return;
    if (bodyLen >= HERO_BODY.length) return;
    const id = window.setTimeout(() => setBodyLen((n) => n + 1), TYPEWRITER_MS_BODY);
    return () => clearTimeout(id);
  }, [firstPrimaryDone, bodyLen]);

  const bodyComplete = bodyLen >= HERO_BODY.length;
  const visibleHeadline = (activeTagline === "primary" ? HERO_PRIMARY_TAGLINE : HERO_SECOND_TAGLINE).slice(0, headlineLen);
  const visibleMainLine =
    activeTagline === "primary"
      ? visibleHeadline.slice(0, Math.min(visibleHeadline.length, HERO_H1_LINE1.length))
      : visibleHeadline.length > HERO_SECOND_ACCENT.length
        ? visibleHeadline.slice(HERO_SECOND_ACCENT.length)
        : "";
  const visibleAccentLine =
    activeTagline === "primary" && visibleHeadline.length > HERO_H1_LINE1.length
      ? visibleHeadline.slice(HERO_H1_LINE1.length)
      : activeTagline === "secondary"
        ? visibleHeadline.slice(0, Math.min(visibleHeadline.length, HERO_SECOND_ACCENT.length))
        : "";

  return (
    <>
      <p className="min-h-[1.35em] text-sm font-semibold uppercase tracking-[0.55em] text-slate-900">
        {HERO_SUBTITLE.slice(0, subLen)}
      </p>
      <h1
        className="mb-6 max-w-5xl text-5xl leading-[1.05] font-heading font-semibold tracking-tight text-off-white md:text-7xl lg:text-8xl"
        aria-label={visibleHeadline}
      >
        {activeTagline === "primary" ? (
          <>
            {visibleMainLine}
            {visibleAccentLine ? <br /> : null}
            <span className="text-electric-blue italic">{visibleAccentLine}</span>
          </>
        ) : (
          <>
            <span>{visibleAccentLine}</span>
            {visibleMainLine ? (
              <>
                <br />
                <span className="text-electric-blue italic">{visibleMainLine}</span>
              </>
            ) : null}
          </>
        )}
      </h1>
      <p
        className="mt-6 min-h-[4.5rem] text-lg leading-8 text-slate-600 sm:text-md"
        aria-label={HERO_BODY}
      >
        {HERO_BODY.slice(0, bodyLen)}
      </p>
      {bodyComplete ? (
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#works"
            className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-[inset_8px_8px_20px_rgba(15,23,42,0.06),inset_-8px_-8px_20px_rgba(255,255,255,0.8)] transition hover:bg-slate-50"
          >
            Contact
          </a>
        </motion.div>
      ) : null}
    </>
  );
}

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navRevealed, setNavRevealed] = useState(true);
  const [scrollPastHero, setScrollPastHero] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollRef = useRef(0);
  const revealedRef = useRef(true);
  const scrollPastHeroRef = useRef(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

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

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-screen overflow-hidden bg-white">
      <nav
        className={`fixed inset-x-0 top-0 px-6 py-5 md:px-12 transition-[transform,background-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none ${menuOpen ? "z-[80]" : "z-[60]"} ${showNavBar ? "translate-y-0" : "-translate-y-full pointer-events-none"} ${navFloatingBg ? "bg-white/65 backdrop-blur-md" : ""}`}
        aria-label="Primary"
        aria-hidden={!showNavBar}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-white/90 shadow-[8px_8px_20px_rgba(15,23,42,0.08),-8px_-8px_20px_rgba(255,255,255,0.9)]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </div>

          <div className="hidden items-center gap-3 text-sm font-medium text-slate-900 lg:flex">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 transition hover:bg-slate-100">
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
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>,
        ]}
      </AnimatePresence>
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/Futuristic_white_neumorphic_ecos…_202605121123.jpeg"
          alt="Futuristic neumorphic interface background"
          className="h-full w-full object-cover object-right"
        />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-10 lg:px-12"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          <HeroTypewriterIntro />
        </div>
      </motion.div>

      <ScrollDownButton
        href="#about-me"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 md:bottom-12"
      />
    </section>
  );
}

"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { ScrollDownButton } from "@/components/ui/ScrollDownButton";
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

const HERO_SUBTITLE = "Janil K. UX Engineer.";
const HERO_H1_LINE1 = "Designing interfaces that ";
const HERO_H1_LINE2 = "feel alive.";
/** First segment: normal headline weight/color; second segment: italic + electric blue */
const HERO_SECOND_ACCENT = "Powered by AI, Shaped by";
const HERO_SECOND_MAIN = "Human.";
const HERO_SECOND_TAGLINE = `${HERO_SECOND_ACCENT}${HERO_SECOND_MAIN}`;
const HERO_PRIMARY_TAGLINE = `${HERO_H1_LINE1}${HERO_H1_LINE2}`;
const HERO_BODY =
  "UX Engineer crafting immersive digital products through AI assisted UI Design and Front-end Engineering.";
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

  const renderBodyText = (text: string) => {
    return text
      .replace("UX Engineer", '<strong class="text-slate-900 font-semibold">UX Engineer</strong>')
      .replace("AI assisted UI Design", '<strong class="text-slate-900 font-semibold">AI assisted UI Design</strong>')
      .replace("Front-end Engineering", '<strong class="text-slate-900 font-semibold">Front-end Engineering</strong>');
  };

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
      <p className="min-h-[1.35em] text-sm font-bold md:font-semibold uppercase tracking-[0.55em] text-slate-900">
        {HERO_SUBTITLE.slice(0, subLen)}
      </p>
      <h1
        className="mb-6 max-w-5xl text-5xl leading-[1.05] font-heading font-bold md:font-semibold tracking-tight text-off-white md:text-7xl lg:text-8xl"
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
        dangerouslySetInnerHTML={{ __html: renderBodyText(HERO_BODY.slice(0, bodyLen)) }}
      />
      {bodyComplete ? (
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#case-studies"
            className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5"
          >
            View My Work
          </a>
          {/* <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-[inset_8px_8px_20px_rgba(15,23,42,0.06),inset_-8px_-8px_20px_rgba(255,255,255,0.8)] transition hover:bg-slate-50"
          >
            Contact
          </a> */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-[inset_8px_8px_20px_rgba(15,23,42,0.06),inset_-8px_-8px_20px_rgba(255,255,255,0.8)] transition hover:bg-slate-50 hover:-translate-y-0.5"
          >
            <svg
              className="mr-2 h-5 w-5 text-red-500 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M9 15h3a1.5 1.5 0 0 0 0-3H9v6" />
              <path d="M15 12v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2z" />
            </svg>
            Download CV
          </a>
        </motion.div>
      ) : null}
    </>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-screen overflow-hidden bg-white">
      <Navbar />
      <motion.div className="absolute inset-x-0 bottom-0 top-40 md:top-0" style={{ y: bgY }}>
        <img
          src="/images/Futuristic_white_neumorphic_ecos…_202605121123.jpeg"
          alt="Futuristic neumorphic interface background"
          className="h-full w-full object-cover object-right"
        />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-start pt-28 pb-10 md:justify-center md:py-10 px-6 lg:px-12"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          <HeroTypewriterIntro />
        </div>
      </motion.div>

      <ScrollDownButton
        href="#case-studies"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 md:bottom-12"
      />
    </section>
  );
}

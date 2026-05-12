"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      <nav className="absolute inset-x-0 top-0 z-30 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[8px_8px_20px_rgba(15,23,42,0.08),-8px_-8px_20px_rgba(255,255,255,0.9)]">
            Logo
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-900">
            <a href="#home" className="rounded-full px-4 py-2 transition hover:bg-slate-100">Home</a>
            <a href="#about-me" className="rounded-full px-4 py-2 transition hover:bg-slate-100">About Me</a>
            <a href="#works" className="rounded-full px-4 py-2 transition hover:bg-slate-100">Works</a>
            <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-slate-100">Contact</a>
          </div>
        </div>
      </nav>
      <div className="absolute inset-0">
        <img
          src="/images/Futuristic_white_neumorphic_ecos…_202605121123.jpeg"
          alt="Futuristic neumorphic interface background"
          className="h-full w-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase font-semibold tracking-[0.55em] text-slate-900">
           Janil K. UX Engineer.
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-tight text-off-white mb-6 max-w-5xl leading-[1.05]">
            Designing interfaces that <br/> <span class="text-electric-blue italic">feel alive.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-md">
            I combine UX strategy, visual design, and front-end engineering to create immersive digital products that users love.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
          </div>
          <div className="mt-8">
            <a href="#about-me" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700">
              Scroll Down
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"></path>
                <path d="M19 12l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

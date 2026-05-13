"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "fintech-platform",
    title: "Fintech analytics platform",
    summary:
      "Information hierarchy and interaction patterns for dense trading data — clarity without cognitive overload.",
    focus: "UX · Systems · Frontend",
    href: "#works",
  },
  {
    id: "health-journey",
    title: "Healthcare onboarding flow",
    summary:
      "Empathy-led flows and validation patterns that reduced drop-off while staying compliant and trustworthy.",
    focus: "Research · UX · Prototype",
    href: "#works",
  },
  {
    id: "commerce-rebuild",
    title: "E‑commerce experience rebuild",
    summary:
      "End-to-end checkout refinement — performance, trust cues, and a cohesive design language across surfaces.",
    focus: "Product · Engineering · UI",
    href: "#works",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function CaseStudySection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative scroll-mt-24 bg-matte-black"
    >
      {/* Smooth visual bridge from hero (white) into page */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-gradient-to-b from-white via-matte-black/85 to-matte-black"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-12 md:pb-32 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-soft-gray">
            Case studies
          </p>
          <h2
            id="case-studies-heading"
            className="max-w-2xl font-heading text-3xl font-semibold tracking-tight text-off-white md:text-4xl"
          >
            Selected work — depth behind the pixels.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-soft-gray md:text-lg">
            Three narratives from discovery to shipped UI. Open a study for outcomes, constraints, and craft.
          </p>
        </motion.div>

        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.li
              key={study.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col rounded-2xl border border-off-white/10 bg-white/70 p-8 shadow-[0_1px_0_rgba(17,24,39,0.06)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-off-white/18 hover:shadow-[0_24px_48px_-28px_rgba(17,24,39,0.12)]"
            >
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-soft-gray">
                {study.focus}
              </p>
              <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-off-white md:text-[1.35rem]">
                {study.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-soft-gray">{study.summary}</p>

              <Link
                href={study.href}
                className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-off-white/15 bg-white/90 px-5 py-2.5 text-sm font-medium text-off-white transition-colors hover:border-electric-blue/40 hover:bg-white hover:text-electric-blue"
              >
                More details
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" aria-hidden />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

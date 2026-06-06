"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function CaseStudySection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative scroll-mt-24 bg-[#0a0d14] text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background Layer with dashboard.jpeg and radial gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* The requested background image dashboard.jpeg */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-luminosity filter contrast-125">
          <Image
            src="/images/dashboard.jpeg"
            alt="Dashboard Background Texture"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Deep rich dark gradients for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-[#0b0f19]/90 to-[#0a0d14]" />

        {/* Premium ambient glow radial blobs behind cards to power the glass blur */}
        {/* Blue/Cyan Blob 1 (Behind Card 1 & 2) */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.24, 0.18],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-1/4 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#2997ff] to-blue-500/0 blur-[110px]"
        />

        {/* Purple/Indigo Blob 2 (Behind Card 3) */}
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.14, 0.2, 0.14],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-500/25 to-sky-400/0 blur-[130px]"
        />

        {/* Soft Sky Blue Accent Blob */}
        <div className="absolute top-[40%] right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        {/* Header Grid Layout */}
        <div className="grid gap-6 md:grid-cols-12 md:items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6"
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#2997ff]">
              Case studies
            </p>
            <h2
              id="case-studies-heading"
              className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Selected{" "}
              <span className="bg-gradient-to-r from-blue-400 via-[#2997ff] to-blue-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-6"
          >
            <p className="text-base leading-relaxed text-slate-300 md:text-lg max-w-xl md:ml-auto">
              Three narratives from discovery to shipped UI. Open a study for outcomes, constraints, and craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Glassmorphic Cards Grid */}
        <ul className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => {
            // Determine mockup colors, fallback images, and badges dynamically by project ID
            const getCardConfig = (id: string) => {
              switch (id) {
                case "pharma-dms-vms":
                  return {
                    bg: "bg-gradient-to-br from-[#ffffff] to-[#f8fafc]", // Clean high-contrast white-gray
                    fallbackImg: "/images/dms.png",
                    badge: "Product Design",
                  };
                case "timesheet-platform":
                  return {
                    bg: "bg-gradient-to-br from-[#dbeafe] to-[#eff6ff]", // Soft sky blue gradient
                    fallbackImg: "/images/timesheet.jpeg",
                    badge: "UX/UI Architecture",
                  };
                case "vendor-shipping-portal":
                default:
                  return {
                    bg: "bg-gradient-to-br from-[#e2eaf5] to-[#f1f5f9]", // Cool slate-gray gradient
                    fallbackImg: "/images/timesheet.jpeg",
                    badge: "UX/UI Architecture",
                  };
              }
            };

            const config = getCardConfig(study.id);
            const displayImage = study.heroImage || config.fallbackImg;

            return (
              <motion.li
                key={study.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex"
              >
                <Link
                  href={study.href}
                  className="group flex flex-col w-full"
                >
                  {/* Folder Tab Header */}
                  <div className="flex z-10">
                    <div className="px-5 py-2 bg-[#0a0d14] border-t border-l border-r border-white/10 rounded-t-[18px] text-[10px] font-bold uppercase tracking-[0.18em] text-[#2997ff] -mb-[1px] relative z-10 flex items-center min-h-[34px]">
                      {study.focus}
                    </div>
                  </div>

                  {/* Folder Card Body */}
                  <div className="relative z-0 flex-1 flex flex-col rounded-b-[32px] rounded-tr-[32px] rounded-tl-none border border-white/10 bg-white/[0.03] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-500 group-hover:border-blue-500/30 group-hover:bg-white/[0.05] group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_50px_-20px_rgba(59,130,246,0.22)]">
                    {/* Image Container Wrapper (prevents overflow clipping for absolute overlapping elements) */}
                    <div className="relative mb-6">
                      {/* Big Highlighted Image (Covers half portion) */}
                      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                        <Image
                          src={displayImage}
                          alt={study.title}
                          fill
                          sizes="(max-w-768px) 100vw, 350px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                        {/* Floating Tag/Badge in top right corner of the image */}
                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-wider">
                          {config.badge}
                        </div>
                      </div>

                      {/* Circle Action Button overlapping the bottom right corner of the image */}
                      <div className="absolute -bottom-3 right-4 z-20">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] border border-white/10 text-white shadow-xl transition-all duration-300 group-hover:bg-[#2997ff] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(41,151,255,0.6)]">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:rotate-45" />
                        </div>
                      </div>
                    </div>

                    {/* Text Block at Bottom */}
                    <div className="flex flex-col flex-1">
                      <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-white mb-3 group-hover:text-[#2997ff] transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300 line-clamp-3 mb-6">
                        {study.summary}
                      </p>

                      <div
                        className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2997ff] group-hover:text-sky-300 transition-colors duration-300 self-start group/link"
                      >
                        View Case Study
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] group-hover/link:scale-[1.8] transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Ornamental Slider Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-16 md:mt-20">
          <span className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-500 to-[#2997ff] transition-all duration-300" />
          <span className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300" />
          <span className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300" />
          <span className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}



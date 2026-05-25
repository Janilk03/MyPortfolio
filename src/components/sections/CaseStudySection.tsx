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
            <p className="mt-3 text-xs leading-relaxed text-slate-400 italic max-w-xl md:ml-auto">
              <span className="font-bold not-italic text-slate-200">Note: </span>The images used in these case studies are AI-generated, as real images cannot be published due to privacy policies.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Glassmorphic Cards Grid */}
        <ul className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => {
            // Determine mockup colors and fallback images
            const cardConfigs = [
              {
                bg: "bg-[#e0e8f5]", // Soft light slate-blue
                fallbackImg: "/images/timesheet.png",
              },
              {
                bg: "bg-[#ffffff]", // High contrast white
                fallbackImg: "/images/dms.png",
              },
              {
                bg: "bg-[#e2eaf5]", // Cool sky grey
                fallbackImg: "/images/dashboard.jpeg",
              },
            ];
            
            const config = cardConfigs[index] || cardConfigs[0];
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
                  className="group flex flex-col justify-between w-full rounded-[36px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.05] hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(59,130,246,0.22)]"
                >
                  {/* Text Block at Top */}
                  <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {study.focus}
                    </p>
                    <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-white min-h-[56px] group-hover:text-[#2997ff] transition-colors duration-300">
                      {study.title}
                    </h3>
                  </div>

                  {/* Highly-finished Interactive Device Mockup (Center) */}
                  <div className={`relative my-8 w-full h-[220px] rounded-3xl ${config.bg} overflow-visible flex items-center justify-center p-3 shadow-inner transition-transform duration-500`}>
                    {/* Subtle mockup card shading */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.04] to-transparent pointer-events-none rounded-3xl" />
                    
                    {/* 3 Overlapping Mobile Smartphone Previews inside the container */}
                    <div className="relative w-full h-full flex items-center justify-center gap-2 overflow-hidden rounded-2xl">
                      {/* Left phone screen */}
                      <div className="w-[50px] h-[135px] rounded-md bg-white/95 shadow-md overflow-hidden relative opacity-70 scale-90 translate-y-3 translate-x-2 rotate-[-4deg] transition-all duration-500 group-hover:translate-y-1 group-hover:rotate-[-2deg]">
                        <div className="absolute inset-0">
                          <Image
                            src={displayImage}
                            alt="Left Preview Screen"
                            fill
                            sizes="80px"
                            className="object-cover object-left"
                          />
                        </div>
                      </div>

                      {/* Center phone screen (Primary focus) */}
                      <div className="w-[66px] h-[155px] rounded-[10px] bg-white shadow-2xl overflow-hidden relative z-10 border border-slate-900/10 scale-100 translate-y-0.5 transition-transform duration-500 group-hover:scale-105">
                        {/* Speaker receiver and notch ornament */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 rounded-full bg-slate-950 flex items-center justify-center z-20">
                          <div className="w-4 h-[1px] bg-slate-800 rounded-full" />
                        </div>
                        {/* Screenshot */}
                        <div className="absolute inset-0 pt-5">
                          <Image
                            src={displayImage}
                            alt="Center Mockup Screen"
                            fill
                            sizes="120px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Right phone screen */}
                      <div className="w-[50px] h-[135px] rounded-md bg-white/95 shadow-md overflow-hidden relative opacity-70 scale-90 translate-y-3 -translate-x-2 rotate-[4deg] transition-all duration-500 group-hover:translate-y-1 group-hover:rotate-[2deg]">
                        <div className="absolute inset-0">
                          <Image
                            src={displayImage}
                            alt="Right Preview Screen"
                            fill
                            sizes="80px"
                            className="object-cover object-right"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Circle Action Button overlapping the bottom right corner */}
                    <div className="absolute -bottom-3 -right-3 z-20">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111827] border border-white/10 text-white shadow-xl transition-all duration-300 group-hover:bg-[#2997ff] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(41,151,255,0.6)]">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:rotate-45" />
                      </div>
                    </div>
                  </div>

                  {/* Summary & View Link at Bottom */}
                  <div className="mt-auto flex flex-col">
                    <p className="text-sm leading-relaxed text-slate-300 line-clamp-3 mb-6">
                      {study.summary}
                    </p>
                    
                    <div
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2997ff] group-hover:text-sky-300 transition-colors duration-300 self-start group/link"
                    >
                      View Case Study
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] group-hover/link:scale-[1.8] transition-transform duration-300" />
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



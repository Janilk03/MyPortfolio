"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Heart,
  Target,
  Lightbulb,
  PenTool,
  Layers,
  Activity,
  Box,
  Users,
  Star,
  Globe,
  ArrowRight,
  Download
} from "lucide-react";

// Types
type StepNode = {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  angle: number; // degrees
  color: string;
  textPosition: "right-top" | "right-middle" | "right-bottom" | "left-top" | "left-middle" | "left-bottom" | "below-right";
};

const steps: StepNode[] = [
  {
    id: "01",
    title: "EMPATHIZE",
    desc: "Understand users, their needs, and pain points.",
    icon: Heart,
    angle: -60, // Top-right (300 deg)
    color: "from-blue-500 to-indigo-500",
    textPosition: "right-top",
  },
  {
    id: "02",
    title: "DEFINE",
    desc: "Analyze insights to define clear problems and goals.",
    icon: Target,
    angle: 0, // Middle-right (0 deg)
    color: "from-indigo-500 to-purple-500",
    textPosition: "right-middle",
  },
  {
    id: "03",
    title: "IDEATE",
    desc: "Brainstorm and explore creative solutions with purpose.",
    icon: Lightbulb,
    angle: 60, // Bottom-right (60 deg)
    color: "from-purple-500 to-pink-500",
    textPosition: "right-bottom",
  },
  {
    id: "04",
    title: "DESIGN",
    desc: "Craft intuitive interfaces that are usable and engaging.",
    icon: PenTool,
    angle: 120, // Bottom-left (120 deg)
    color: "from-pink-500 to-emerald-500",
    textPosition: "below-right",
  },
  {
    id: "05",
    title: "PROTOTYPE",
    desc: "Build interactive prototypes to test and validate ideas.",
    icon: Layers,
    angle: 180, // Middle-left (180 deg)
    color: "from-emerald-500 to-teal-500",
    textPosition: "left-middle",
  },
  {
    id: "06",
    title: "TEST & REFINE",
    desc: "Test with real users, gather feedback, and refine for perfection.",
    icon: Activity,
    angle: 240, // Top-left (240 deg)
    color: "from-teal-500 to-blue-500",
    textPosition: "left-top",
  },
];

export function HeroSection() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const currentStepId = hoveredStep || activeStep;
  const currentStep = steps.find((s) => s.id === currentStepId);

  // Typewriter text parts
  const labelLine = "UX ENGINEER";
  const line1 = "Designing";
  const line2 = "meaningful";
  const line3 = "experiences.";
  const totalChars = labelLine.length + line1.length + line2.length + line3.length;

  const [visibleCount, setVisibleCount] = useState(0);
  const isComplete = visibleCount >= totalChars;

  // Run typewriter animation on mount
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= totalChars) {
        clearInterval(interval);
      }
    }, 45); // 45ms per character for premium flow
    return () => clearInterval(interval);
  }, []);

  // Responsive calculation helper for SVG coordinates using percentages
  const getCoordsPercent = (angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = 150; // Radius of orbit in SVG space
    const cx = 260; // Center X in SVG space
    const cy = 260; // Center Y in SVG space
    const x = cx + r * Math.cos(angleRad);
    const y = cy + r * Math.sin(angleRad);
    // Express as percentage of the viewBox (520px) with fixed precision to prevent SSR hydration mismatch
    const xPercent = (x / 520) * 100;
    const yPercent = (y / 520) * 100;
    return { x: `${xPercent.toFixed(3)}%`, y: `${yPercent.toFixed(3)}%` };
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#f8fafc] flex items-center justify-center selection:bg-blue-100 selection:text-blue-900"
    >

      {/* 1. Premium Light Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Soft blue-cyan radial gradient (top-left) */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-100/20 to-transparent blur-[120px] mix-blend-multiply" />

        {/* Soft violet/lavender radial gradient (center-right) */}
        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-100/30 via-purple-100/20 to-transparent blur-[130px] mix-blend-multiply" />

        {/* Soft emerald/teal radial gradient (bottom-right) */}
        <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-100/30 via-teal-100/20 to-transparent blur-[120px] mix-blend-multiply" />
      </div>

      {/* 2. Content Container (Responsive Grid) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-18 md:pt-28 pb-32 md:pb-40 lg:py-20 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-8 items-center min-h-screen">

        {/* LEFT COLUMN: Texts, Buttons, and Stats */}
        <div className="contents lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:text-left">

          {/* B. Headline */}
          <div className="order-1 lg:order-none mt-6 sm:min-h-[11rem] lg:min-h-[14rem]">
            <span className="text-xs font-extrabold tracking-[0.25em] text-slate-800 block uppercase relative min-h-[1rem]">
              {labelLine.slice(0, visibleCount)}
              {visibleCount > 0 && visibleCount < labelLine.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-[2px] h-[0.9em] bg-slate-800 ml-1 translate-y-[0.05em]"
                />
              )}
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[66px] font-bold tracking-tight text-slate-900 leading-[1.08] select-none">
              <span className="relative">
                {line1.slice(0, Math.max(0, visibleCount - labelLine.length))}
                {visibleCount > labelLine.length && visibleCount < labelLine.length + line1.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[3px] h-[0.85em] bg-slate-900 ml-1 translate-y-[0.05em]"
                  />
                )}
              </span>
              <br />
              <span className="text-slate-900 relative">
                {line2.slice(0, Math.max(0, visibleCount - labelLine.length - line1.length))}
                {visibleCount >= labelLine.length + line1.length && visibleCount < labelLine.length + line1.length + line2.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[3px] h-[0.85em] bg-slate-900 ml-1 translate-y-[0.05em]"
                  />
                )}
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent inline-block font-extrabold pr-2 relative">
                {line3.slice(0, Math.max(0, visibleCount - labelLine.length - line1.length - line2.length))}
                {visibleCount >= labelLine.length + line1.length + line2.length && (
                  <motion.span
                    animate={{ opacity: isComplete ? 0 : [1, 0, 1] }}
                    transition={{
                      opacity: isComplete
                        ? { duration: 0.5, delay: 1.5 }
                        : { duration: 0.8, repeat: Infinity, ease: "linear" }
                    }}
                    className="inline-block w-[3px] h-[0.85em] bg-teal-500 ml-1 translate-y-[0.05em]"
                  />
                )}
              </span>
            </h1>
          </div>

          {/* C. Description Paragraph */}
          <div className="order-2 lg:order-none min-h-[4.5rem]">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:mt-6 mt-0 text-slate-600 text-base md:text-lg leading-relaxed max-w-lg"
            >
              A user-centered approach that combines research, strategy and design to create intuitive and impactful digital experiences.
            </motion.p>
          </div>

          {/* D. CTA Buttons Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-4 lg:order-none lg:mt-8 mt-0 flex flex-wrap items-center gap-6"
          >

            {/* Primary: View My Work */}
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 px-7.5 py-3.5 text-[13.5px] hover:-translate-y-0.5 transition-all duration-300"
            >
              View my work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* Secondary: Download Resume */}
            <a
              href="/cv/Janil%20K-%20Ux-Resume-26.pdf"
              download="Janil K- Ux-Resume-26.pdf"
              className="group inline-flex items-center gap-1.5 font-bold text-slate-800 hover:text-blue-600 border-b-2 border-slate-200 hover:border-blue-500 pb-0.5 text-[13.5px] hover:-translate-y-0.5 transition-all duration-300"
            >
              Download resume
              <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>
          </motion.div>

          {/* E. Bottom Stats Pill Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-5 lg:order-none lg:mt-12 mt-0 w-full max-w-md bg-white/70 border border-slate-200/50 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(15,23,42,0.03)] grid grid-cols-4 gap-2 divide-x divide-slate-100"
          >

            {/* Stat 1: Projects */}
            <div className="flex flex-col items-center justify-center px-1">
              <Box className="w-5 h-5 text-indigo-500 mb-1" />
              <span className="text-slate-900 font-bold text-[15px] leading-tight">30+</span>
              <span className="text-slate-400 font-bold text-[8.5px] tracking-wider uppercase mt-0.5">Projects</span>
            </div>

            {/* Stat 2: Clients */}
            <div className="flex flex-col items-center justify-center px-1">
              <Users className="w-5 h-5 text-sky-500 mb-1" />
              <span className="text-slate-900 font-bold text-[15px] leading-tight">5+</span>
              <span className="text-slate-400 font-bold text-[8.5px] tracking-wider uppercase mt-0.5">Clients</span>
            </div>

            {/* Stat 3: Years Exp */}
            <div className="flex flex-col items-center justify-center px-1">
              <Star className="w-5 h-5 text-amber-500 mb-1" />
              <span className="text-slate-900 font-bold text-[15px] leading-tight">11+</span>
              <span className="text-slate-400 font-bold text-[8.5px] tracking-wider uppercase mt-0.5">Years Exp.</span>
            </div>

            {/* Stat 4: Industries */}
            <div className="flex flex-col items-center justify-center px-1">
              <Globe className="w-5 h-5 text-emerald-500 mb-1" />
              <span className="text-slate-900 font-bold text-[15px] leading-tight">10+</span>
              <span className="text-slate-400 font-bold text-[8.5px] tracking-wider uppercase mt-0.5">Industries</span>
            </div>

          </motion.div>

        </div>

        {/* RIGHT COLUMN: Interactive Circular UX Process Orbit Diagram */}
        <div className="order-3 lg:order-none lg:col-span-7 flex flex-col items-center justify-center relative lg:mt-0 mt-0">

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[1000px] min-[400px]:max-w-[360px] sm:max-w-[480px] lg:max-w-[1000px] aspect-square flex items-center justify-center shrink-0"
          >

            {/* Concentric GUIDELINES and Main Gradient Orbit Loop (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 520 520">
              <defs>

                {/* Subtle glowing shadow filters */}
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Main colorful gradient */}
                <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Guideline Circle - Inner Concentric (Dashed) */}
              <circle
                cx="260"
                cy="260"
                r="110"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="4,4"
              />

              {/* Guideline Circle - Outer Concentric (Dashed) */}
              <circle
                cx="260"
                cy="260"
                r="190"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="4,4"
              />

              {/* Main Orbital Path Circle (150px Radius) */}
              <circle
                cx="260"
                cy="260"
                r="150"
                fill="none"
                stroke="url(#orbit-gradient)"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                className="transition-all duration-500"
              />

              {/* Hover/Tap-triggered Orbital Glow Segment Overlay */}
              {currentStepId !== null && (
                <motion.circle
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  exit={{ pathLength: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  cx="260"
                  cy="260"
                  r="150"
                  fill="none"
                  stroke="url(#orbit-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#glow-filter)"
                  className="opacity-80"
                />
              )}

              {/* Orbit Direction Arrow Tangents (Clockwise indicators) */}
              {/* Arrow at top-right (30 degrees) */}
              <path
                d="M403,172 L397,180 L393,171 Z"
                fill="#3b82f6"
                opacity="0.6"
                className="scale-[1.5] origin-[400px_175px]"
              />

              {/* Arrow at bottom-left (210 degrees) */}
              <path
                d="M117,348 L123,340 L127,349 Z"
                fill="#10b981"
                opacity="0.6"
                className="scale-[1.5] origin-[120px_345px]"
              />

            </svg>

            {/* CENTER CIRCLE: STATIC CONTENT */}
            <div
              className={`relative z-10 w-36 h-36 sm:w-[170px] sm:h-[170px] rounded-full flex flex-col items-center justify-center bg-white border backdrop-blur-xl transition-all duration-500 ${currentStepId !== null
                ? "border-blue-500/30 shadow-[0_12px_40px_rgba(59,130,246,0.18)] scale-105"
                : "border-slate-200/60 shadow-[0_8px_32px_rgba(15,23,42,0.06)]"
                }`}
            >
              <div className="flex flex-col items-center justify-center">
                {/* Dual Overlapping Minimal Figures (Gradient User SVG) */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                    {/* Figure 1 (Left - Blue) */}
                    <path
                      d="M20 28 C25.5 28 30 32.5 30 38 M20 24 C24.4 24 28 20.4 28 16 C28 11.6 24.4 8 20 8 C15.6 8 12 11.6 12 16 C12 20.4 15.6 24 20 24 Z"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Figure 2 (Right - Emerald) */}
                    <path
                      d="M28 28 C33.5 28 38 32.5 38 38 M28 24 C32.4 24 36 20.4 36 16 C36 11.6 32.4 8 28 8"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 2"
                      opacity="0.85"
                    />
                  </svg>
                </div>

                <span className="text-[12px] sm:text-[14px] font-extrabold tracking-[0.2em] text-slate-800 mt-2 sm:mt-3">USER</span>
                <span className="text-[8px] sm:text-[9.5px] font-bold tracking-widest text-slate-400 uppercase mt-0.5 sm:mt-1">At The Center</span>
              </div>
            </div>

            {/* RENDER THE 6 HEXAGON ORBIT STEPS */}
            {steps.map((step) => {
              const coords = getCoordsPercent(step.angle);
              const isHovered = currentStepId === step.id;

              // Helper to style dynamic text block offset directions responsively
              const getTextStyles = (pos: typeof step.textPosition) => {
                switch (pos) {
                  case "right-top":
                    return "left-[64px] bottom-[20px] text-left";
                  case "right-middle":
                    return "left-[64px] -translate-y-1/2 top-1/2 text-left";
                  case "right-bottom":
                    return "left-[64px] top-[20px] text-left";
                  case "left-top":
                    return "right-[64px] bottom-[20px] text-right";
                  case "left-middle":
                    return "right-[64px] -translate-y-1/2 top-1/2 text-right";
                  case "left-bottom":
                    return "right-[64px] top-[20px] text-right";
                  case "below-right":
                    return "left-[-12px] top-[60px] text-left w-52";
                  default:
                    return "";
                }
              };

              return (
                <div
                  key={step.id}
                  className="absolute z-20 group"
                  style={{
                    left: coords.x,
                    top: coords.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => {
                    setActiveStep((prev) => (prev === step.id ? null : step.id));
                  }}
                >

                  {/* Node Container (Hexagon Wrapper) */}
                  <div className="relative w-[44px] h-[50px] sm:w-[56px] sm:h-[64px] flex items-center justify-center cursor-pointer">

                    {/* Premium Hexagon SVG Background */}
                    <svg
                      className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out filter drop-shadow-[0_4px_12px_rgba(15,23,42,0.03)] scale-90 sm:scale-100 ${isHovered
                        ? "scale-105 stroke-blue-500 fill-white drop-shadow-[0_8px_20px_rgba(59,130,246,0.18)]"
                        : "stroke-slate-200 fill-white"
                        }`}
                      viewBox="0 0 100 115"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d="M50 4.5 L95 30.5 L95 84.5 L50 110.5 L5 84.5 L5 30.5 Z"
                        strokeWidth="4"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Icon inside hexagon */}
                    <div className={`relative z-10 transition-all duration-300 ${isHovered ? "scale-110 text-blue-600" : "text-slate-500"}`}>
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={isHovered ? "2.2" : "1.8"} />
                    </div>

                  </div>

                  {/* Step Descriptive Info Card (Fades in, hides on responsive if too crowded) */}
                  <div
                    className={`hidden sm:block absolute w-34 pointer-events-none transition-all duration-300 ${getTextStyles(step.textPosition)} ${isHovered
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-45 scale-95"
                      }`}
                  >
                    {/* Step Number Tag */}
                    <div className={`text-[10px] font-extrabold tracking-widest transition-colors duration-300 ${isHovered ? "text-blue-600" : "text-slate-400"}`}>
                      {step.id}
                    </div>

                    {/* Step Name */}
                    <div className={`text-[11px] font-bold tracking-wider mt-0.5 transition-colors duration-300 ${isHovered ? "text-slate-900" : "text-slate-600"}`}>
                      {step.title}
                    </div>

                    {/* Step Short Description */}
                    <div className={`text-[9.5px] leading-normal font-medium text-slate-500 mt-1 transition-all duration-300 ${isHovered ? "max-h-12 opacity-100 translate-y-0 text-slate-600" : "max-h-0 opacity-0 -translate-y-1 overflow-hidden"}`}>
                      {step.desc}
                    </div>

                  </div>

                </div>
              );
            })}

          </motion.div>

          {/* Premium Glassmorphic Active Step Info Card for Mobile & Tablet */}
          <AnimatePresence mode="wait">
            {currentStep && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="block sm:hidden mt-10 w-full max-w-[300px] min-[400px]:max-w-[340px] bg-white/80 border border-slate-200/50 backdrop-blur-md rounded-2xl p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] relative z-20 text-center"
              >
                <div className="flex items-center gap-3 justify-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <currentStep.icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-extrabold tracking-widest text-blue-500 uppercase leading-none">
                      Step {currentStep.id}
                    </div>
                    <div className="text-[13px] font-bold tracking-wide text-slate-800 uppercase mt-1 leading-none">
                      {currentStep.title}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600 font-medium px-1">
                  {currentStep.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* 3. Mouse Wheel Scroll Indicator ( mock style ) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
      >
        <span className="text-[9.5px] font-bold tracking-[0.25em] text-slate-400 uppercase">Scroll to Explore</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center mt-2.5 shadow-sm">
          <motion.div
            animate={{
              y: [4, 16, 4],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 bg-blue-500 rounded-full mt-1.5"
          />
        </div>
      </motion.div>

    </section>
  );
}

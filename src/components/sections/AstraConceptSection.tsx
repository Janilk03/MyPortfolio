"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  Clock,
  Volume2,
  Zap,
  ArrowRight,
  Activity,
  FileText,
  HelpCircle,
  TrendingUp,
  User,
  Users,
  Compass,
  CheckCircle2,
  XCircle
} from "lucide-react";
import Image from "next/image";

// Astra screen assets and details
const astraScreens = [
  {
    id: "home",
    title: "AI Productivity Hub",
    shortLabel: "Home",
    subtitle: "Astra Home Screen",
    image: "/images/Astra-Home.png",
    description: "The proactive entry point presenting context-aware recommendations, voice interaction trigger, and personalized high-frequency shortcuts.",
    features: ["Context-aware daily suggestions", "One-touch natural voice activation", "Personalized dynamic shortcuts"]
  },
  {
    id: "quick-assist",
    title: "Quick Action Overlay",
    shortLabel: "Quick Assist",
    subtitle: "Astra Quick Assist",
    image: "/images/Astra-Home - Quick Assist.png",
    description: "Instant access to critical daily actions—Send Email, Order Food, Book Ride, and Schedule Meetings—eliminating app-switching friction.",
    features: ["Unified multi-service layout", "Proactive trigger responses", "Optimized large touch targets"]
  },
  {
    id: "flow-01",
    title: "Action Flow: Initiation",
    shortLabel: "Initiation",
    subtitle: "Smart Context Matching",
    image: "/images/Astra-Action-flow-01.png",
    description: "AI assistant interprets queries and bridges multiple API integrations simultaneously (e.g., matching a contact, checking ride availability, draft-composing).",
    features: ["Natural language understanding", "Background API coordination", "Transparent decision triggers"]
  },
  {
    id: "flow-02",
    title: "Action Flow: Execution",
    shortLabel: "Execution",
    subtitle: "Automated Task Dispatch",
    image: "/images/Astra-Action-flow-02.png",
    description: "One-click validation of complex workflows. Shows live progress, clear summaries, and seamless transaction receipts without opening secondary apps.",
    features: ["One-tap transaction dispatch", "Live task state visualization", "Centralized outcome summaries"]
  }
];

export function AstraConceptSection() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const activeScreen = astraScreens[activeScreenIndex];

  return (
    <section
      id="astra-concept"
      aria-labelledby="astra-heading"
      className="relative scroll-mt-24 bg-matte-black border-t border-off-white/5 overflow-hidden"
    >
      {/* Background radial gradient glow for premium feel */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/4 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-left max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-electric-blue/15 bg-electric-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric-blue">
            <Sparkles className="h-3.5 w-3.5" /> AI Mobile Concept
          </span>
          <h2
            id="astra-heading"
            className="font-heading text-4xl font-bold tracking-tight text-off-white md:text-5xl lg:text-6xl mt-3"
          >
            Astra — AI Productivity Assistant
          </h2>
          <p className="mt-4 text-base leading-relaxed text-soft-gray md:text-lg">
            A vision of how artificial intelligence can break past static chat windows. Astra aggregates services like ride booking, communications, scheduling, and food delivery into a unified, predictive interface.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* Left Column: Interactive Mobile Mockup (Sticky) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-28">

            {/* iPhone Mockup Frame */}
            <div className="relative mx-auto w-[290px] h-[580px] md:w-[310px] md:h-[620px] rounded-[48px] bg-slate-900 border-[10px] border-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-white/10 flex items-center justify-center overflow-hidden">

              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-white/5 absolute left-3" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-900/50 absolute right-6" />
              </div>

              {/* Speaker Bezel */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-800 rounded-full z-30" />

              {/* Glare reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20 rounded-[38px]" />

              {/* Screenshot Display */}
              <div className="relative w-full h-full bg-zinc-950 overflow-hidden rounded-[38px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full overflow-y-auto"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {/* Native image with full height, allowing vertical scroll within the iPhone frame */}
                    <img
                      src={activeScreen.image}
                      alt={activeScreen.subtitle}
                      className="w-full h-auto object-top block"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />
            </div>

            {/* Micro Thumbnail Navigation */}
            <div className="mt-8 flex gap-3.5 bg-white/40 p-2.5 rounded-2xl border border-off-white/5 backdrop-blur-md shadow-sm">
              {astraScreens.map((screen, idx) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`relative h-14 w-10 md:h-16 md:w-11 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeScreenIndex === idx
                      ? "border-electric-blue shadow-lg scale-105"
                      : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                  aria-label={`View ${screen.subtitle}`}
                >
                  <Image
                    src={screen.image}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                  {activeScreenIndex === idx && (
                    <span className="absolute inset-0 bg-electric-blue/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>

            {/* Interactive State Feedback Indicator */}
            <p className="mt-3 text-[10.5px] uppercase font-bold tracking-widest text-electric-blue flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
              </span>
              Screen {activeScreenIndex + 1} of 4: {activeScreen.subtitle}
            </p>
          </div>

          {/* Right Column: Case Study Narrative (Scrolls) */}
          <div className="lg:col-span-7 space-y-12">

            {/* Fast Flow Selector (Alternative navigation integrated into narrative) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/50 p-2 rounded-2xl border border-off-white/5 shadow-sm">
              {astraScreens.map((screen, idx) => {
                const Icon = idx === 0 ? Smartphone : idx === 1 ? Zap : idx === 2 ? Activity : Clock;
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${activeScreenIndex === idx
                        ? "bg-white text-electric-blue shadow-[0_4px_12px_-2px_rgba(59,130,246,0.12)] border border-electric-blue/10"
                        : "text-soft-gray hover:text-off-white hover:bg-white/30"
                      }`}
                  >
                    <Icon className="h-5 w-5 mb-1.5 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center">{screen.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Section Spotlight Card */}
            <div className="rounded-2xl border border-off-white/10 bg-white/70 p-6 md:p-8 shadow-[0_1px_0_rgba(17,24,39,0.05)] backdrop-blur-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute right-0 top-0 w-24 h-24 bg-electric-blue/5 rounded-bl-[100px] pointer-events-none" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-electric-blue">
                Active Interaction Details
              </span>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-off-white mt-1.5">
                {activeScreen.title}
              </h3>
              <p className="text-[13px] text-soft-gray font-medium mt-1 uppercase tracking-wide">
                {activeScreen.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {activeScreen.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-off-white mb-3">Key Design Considerations</h4>
                <ul className="space-y-3">
                  {activeScreen.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 text-electric-blue">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Overview & Problem */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold tracking-tight text-off-white">
                Context & The Friction
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Today&apos;s mobile workflow is deeply fragmented. Performing simple cross-app operations—like booking a ride to an upcoming calendar event, confirming a calendar slot on an email request, or scheduling a food delivery for a professional meeting—forces users into constant context switching.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-2">
                    <XCircle className="h-4 w-4" /> The Problem
                  </h4>
                  <ul className="mt-3.5 space-y-2.5 text-xs font-medium text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      Constant context-switching across 4-5 apps
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      High cognitive fatigue & wasted coordination time
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      Repetitive entry and clipboard copy-paste friction
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> The Astra Solution
                  </h4>
                  <ul className="mt-3.5 space-y-2.5 text-xs font-medium text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      Aggregated service ecosystem in one platform
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      Proactive context-aware triggers & voice shortcuts
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      Single-click workflow execution overlays
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Combined Target Users & Challenges Container (Full Width below the iPhone Showcase) */}
        <div className="grid gap-12 md:grid-cols-2 pt-12 mt-16 md:mt-24 border-t border-off-white/10 relative z-10">

          {/* Left Column: Target Users */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-off-white">
              Designing for the Time-Poor
            </h3>

            <div className="space-y-4">
              <div className="rounded-xl bg-white p-5 border border-off-white/10 shadow-sm flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-off-white">Busy Professionals</h4>
                  <p className="mt-1 text-xs leading-relaxed text-soft-gray">
                    Managing packed, dynamic schedules, heavy communications, and multiple appointments daily.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 border border-off-white/10 shadow-sm flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
                  <Compass className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-off-white">Frequent Travelers</h4>
                  <p className="mt-1 text-xs leading-relaxed text-soft-gray">
                    Booking transit, coordinating timezone shifts, and securing bookings rapidly on the move.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white p-5 border border-off-white/10 shadow-sm flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-off-white">Productivity Seekers</h4>
                  <p className="mt-1 text-xs leading-relaxed text-soft-gray">
                    Relentless focus on streamlined workflows, minimizing phone screen-time and app distractions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Challenges & Decisions */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-off-white">
              Engineering Challenges & Outcomes
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-electric-blue/40 pl-4 py-1">
                <h4 className="text-sm font-bold text-off-white">1. Dense Information Design without Clutter</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  By implementing minimal card layouts, strict typographic scale, and extensive dynamic disclosures, Astra supports full system integrations without overwhelming the user interface.
                </p>
              </div>

              <div className="border-l-2 border-slate-200 pl-4 py-1">
                <h4 className="text-sm font-bold text-off-white">2. Establishing AI Transparency</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Rather than operating as a black-box chatbot, Astra shows exactly which rules, calendar hooks, or APIs triggered its recommendations, allowing user modification at every turn.
                </p>
              </div>

              <div className="border-l-2 border-slate-200 pl-4 py-1">
                <h4 className="text-sm font-bold text-off-white">3. Balancing Automation with Control</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Astra designs pre-compile complex multi-step actions (e.g. drafting email + scheduling meeting) but *always* halts at an action sheet overlay for one-tap manual validation before execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

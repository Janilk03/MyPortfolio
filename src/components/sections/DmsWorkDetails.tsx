"use client";

import Image from "next/image";

export function DmsWorkDetails() {
  const oldPoints = [
    "\"What documents do I have?\"",
    "Doc. menu-first dashboard focused on document listings.",
    "Dense user inputs structure issues and performance.",
    "Manual tracking required to identify relevant information.",
    "Limited analytical insights for monitoring workflow performance.",
    "Re-reads the same data in multiple places/screens (summary details page layout etc.) causing repetition of information.",
    "Recent Documents occupy valuable dashboard space despite belonging to the Documents module.",
    "Uses the 2001-2020 Neumorphic design style.",
    "Heavy shadows and a visually dominant layout increase visual weight.",
    "Larger cards and extra whitespace reduce information density.",
    "More visually attractive but less focused on quick decision-making."
  ];

  const newPoints = [
    "\"What needs my attention?\"",
    "Performance-first dashboard focused on actionable insights.",
    "Prioritizes task performance, SLA, turnaround time, workload trends, and deadlines.",
    "Clear information hierarchy with important KPIs visible first.",
    "Analytics-focused view for monitoring overall workflow performance.",
    "Every KPI is unique and provides a different insight.",
    "Recent Documents can be accessed from the Documents page or a Recent Activity popover.",
    "Modern linear dashboard with higher information density.",
    "Minimal shadows and subtle brand colors improve readability.",
    "Better use of screen space with less visual clutter.",
    "Supports both Light and Dark themes."
  ];

  return (
    <section className="relative bg-[#121212] text-white py-24 overflow-hidden scroll-mt-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 space-y-28">

        {/* ========================================================================= */}
        {/* SECTION 1: ALL-IN-ONE PLATFORM INTRO */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center space-y-10">
          <h2 className="font-sans text-2xl md:text-[32px] font-regular tracking-tight leading-snug max-w-4xl text-[#e5e5e5]">
            DMS&<span className="text-[#22C55E] font-semibold">VMS</span> is all-in-one platform for
            <br />
            Manage your documents, tasks  approvals
            <br />
            validations with <span className="text-slate-500">powerful workflows and real-</span>
            <br />
            <span className="text-slate-500">time visibility, all in Smarter & Faster way!</span>
          </h2>

          {/* Central Collage Banner Showcase */}
          <div className="w-1/2 relative overflow-hidden rounded-2xl shadow-2xl bg-[#1a1a1a] border border-white/5">
            <div className="relative aspect-[1728/1117]">
              <Image
                src="/images/Dms&Vms_Dashboard_UIbnr66.png"
                alt="DMS & VMS All-in-One Platform"
                fill
                sizes="(max-w-1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: CENTRALIZED CUSTOMISABLE DASHBOARD */}
      {/* ========================================================================= */}
      <div className="grid gap-0 grid-cols-1 md:grid-cols-12 my-24  overflow-hidden border border-white/5 bg-[#171717] shadow-xl">
        {/* Left Column: iPad Mockup Screen */}
        <div className="md:col-span-7 relative aspect-[1728/1117] w-full bg-[#181818]">
          <Image
            src="/images/tabview.png"
            alt="DMS Centralized Dashboard on iPad"
            fill
            sizes="(max-w-768px) 100vw, 640px"
            className="object-cover"
          />
        </div>

        {/* Right Column: Narrative with leaf background */}
        <div className="md:col-span-5 relative flex items-center min-h-[360px] md:min-h-0">
          {/* Background image leaf texture */}
          <Image
            src="/images/greebg-dark.jpg"
            alt="Green Foliage texture background"
            fill
            sizes="(max-w-768px) 100vw, 400px"
            className="object-cover opacity-80"
          />
          {/* Muted green tint overlay */}
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply pointer-events-none" />

          {/* Text Overlay */}
          <div className="relative z-10 px-8 py-12 lg:px-14 text-left">
            <h3 className="font-sans text-[20px] lg:text-[23px] font-medium tracking-wide text-[#e2e8f0] leading-relaxed">
              The centralised
              <br />
              customisable dashboard,
              <br />
              highlighting active prior
              <br />
              tasks, document status,
              <br />
              notifications, and task
              <br />
              performance.
            </h3>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: OLD VS NEW COMPARISON */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 space-y-28">
        <div className="space-y-16">
          <div className="text-center">
            <h3 className="font-sans text-2xl md:text-3xl font-medium tracking-tight">
              <span className="text-[#22C55E]">UX</span>-Document Centric to Action Centric
            </h3>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start relative">

            {/* OLD APPROACH */}
            <div className="space-y-8">
              <div className="text-left">
                <span className="text-xs font-semibold text-slate-400 block mb-1">Old</span>
              </div>

              {/* MacBook Mockup Frame */}
              <div className="relative mx-auto w-full max-w-[480px]">
                {/* Screen with bezel */}
                <div className="relative rounded-t-xl border-[6px] border-[#2c2d30] bg-[#111] overflow-hidden shadow-2xl">
                  <div className="relative aspect-[1536/1024] w-full">
                    <Image
                      src="/images/dms-document.png"
                      alt="Old Document Centric Screen"
                      fill
                      sizes="(max-w-768px) 100vw, 480px"
                      className="object-cover filter saturate-[0.9] contrast-[0.95]"
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="relative h-2 w-[112%] -left-[6%] bg-[#b8bac0] border-t border-white/20 rounded-b-lg shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-[#8e9097] rounded-b-sm" />
                </div>
              </div>

              {/* Comparison List */}
              <ul className="space-y-4 pt-4">
                {oldPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-[13px] leading-relaxed text-[#e5e5e5]">
                    <span className="mr-3 text-slate-400 shrink-0 font-bold">•</span>
                    <span className={index === 0 ? "font-semibold text-white" : ""}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VS Divider Label (Desktop only) */}
            <div className="hidden lg:flex absolute left-1/2 top-[120px] -translate-x-1/2 w-8 h-8 rounded-full bg-[#1c1c1c] border border-white/10 items-center justify-center z-20 text-[10px] font-bold text-slate-500 shadow-md">
              VS
            </div>

            {/* NEW APPROACH */}
            <div className="space-y-8">
              <div className="text-left">
                <span className="text-xs font-semibold text-slate-400 block mb-1">New</span>
              </div>

              {/* MacBook Mockup Frame */}
              <div className="relative mx-auto w-full max-w-[480px]">
                {/* Screen with bezel */}
                <div className="relative rounded-t-xl border-[6px] border-[#2c2d30] bg-[#111] overflow-hidden shadow-2xl">
                  <div className="relative aspect-[1536/1024] w-full">
                    <Image
                      src="/images/dms-task-screen.png"
                      alt="New Action Centric Screen"
                      fill
                      sizes="(max-w-768px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="relative h-2 w-[112%] -left-[6%] bg-[#b8bac0] border-t border-white/20 rounded-b-lg shadow-lg">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-[#8e9097] rounded-b-sm" />
                </div>
              </div>

              {/* Comparison List */}
              <ul className="space-y-4 pt-4">
                {newPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-[13px] leading-relaxed text-[#e5e5e5]">
                    <span className="mr-3 text-slate-400 shrink-0 font-bold">•</span>
                    <span className={index === 0 ? "font-semibold text-white" : ""}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: TURNING COMPLEXITY TO CLARITY */}
        {/* ========================================================================= */}
        <div className="space-y-14">
          <div className="text-center">
            <h3 className="font-sans text-2xl md:text-3xl font-medium tracking-tight">
              Turning Complexity to <span className="text-[#22C55E]">Clarity</span>
            </h3>
          </div>

          {/* 2x2 Grid of Screenshots with fixed aspects */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Screen 1: Top Left */}
            <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#171717] shadow-lg group">
              <div className="relative aspect-[1728/1117] w-full">
                <Image
                  src="/images/login-er.png"
                  alt="DMS Document Landing Page"
                  fill
                  sizes="(max-w-768px) 100vw, 512px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Screen 2: Top Right */}
            <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#171717] shadow-lg group">
              <div className="relative aspect-[1728/1117] w-full">
                <Image
                  src="/images/execution.png"
                  alt="Futuristic White Neumorphic Ecosystem Architecture"
                  fill
                  sizes="(max-w-768px) 100vw, 512px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Screen 3: Bottom Left */}
            <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#171717] shadow-lg group">
              <div className="relative aspect-[1728/1117] w-full">
                <Image
                  src="/images/task.png"
                  alt="DMS Tasks screen"
                  fill
                  sizes="(max-w-768px) 100vw, 512px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Screen 4: Bottom Right */}
            <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#171717] shadow-lg group">
              <div className="relative aspect-[1728/1117] w-full">
                <Image
                  src="/images/document-authoring.png"
                  alt="DMS Document Authoring Editor"
                  fill
                  sizes="(max-w-768px) 100vw, 512px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

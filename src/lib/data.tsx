import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  focus: string;
  href: string;
  role: string;
  timeline: string;
  platform?: string;
  tools?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  heroImage?: string;
  previewImages?: string[];
  content?: React.ReactNode;
  themeBg: string;
  disciplines: string[];
  toolsDetail: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "pharma-dms-vms",
    title: "Unified Document & Validation Management Platform",
    summary:
      "A complete system-level rebuild of a legacy pharma enterprise system into a scalable, configurable SaaS ecosystem.",
    focus: "UX Architecture & Systems",
    href: "/case-study/pharma-dms-vms",
    role: "UX Designer",
    timeline: "3 Months",
    platform: "B2B SaaS Enterprise Application",
    tools: "Adobe XD • React • MUI Design System",
    heroImage: "/images/dms-vms-login-main.png",
    previewImages: [
      "/images/dms-vms-login-main.png",
      "/images/dms-documnet-ladnding-page.png",
      "/images/dms-work-flow.png",
    ],
    themeBg: "bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900",
    disciplines: ["Enterprise UX", "UX Architecture", "Information Architecture", "System Design"],
    toolsDetail: [
      { label: "Design", value: "Adobe XD, Figma" },
      { label: "Design System", value: "MUI (Material UI)" },
      { label: "Development", value: "React, CSS Modules" }
    ],
    content: (
      <div className="grid gap-20">
        {/* Challenge Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              01 / Context
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              The Challenge
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="text-base md:text-lg leading-relaxed mb-2">The existing platform was a legacy enterprise system originally built for pharmaceutical workflows. Over time, the product developed major limitations:</p>
            <ul className="mb-8 grid gap-4 sm:grid-cols-2 list-none pl-0">
              {[
                "Scalability issues & rigid architecture",
                "Outdated, deep-nested workflows",
                "Poor configurability",
                "Complex enterprise usability"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed">The platform forced organizations to adapt to the software instead of allowing the software to adapt to business processes. The redesign initiative focused not only on modernizing the interface, but on rebuilding the entire product experience from a system-thinking perspective.</p>
          </div>
        </section>

        {/* Problem Discovery Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              02 / Research
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              Problem Discovery
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Rigid Data Architecture",
                  desc: "Core data types and workflows were tightly coupled, causing dependency on developers for changes, limited flexibility, and poor scalability."
                },
                {
                  title: "Traditional Enterprise UX",
                  desc: "The interface relied on dense tables, outdated navigation, auto-generated folder structures, and cluttered screens."
                },
                {
                  title: "Lack of Configurability",
                  desc: "Admins could not easily configure approval structures, organizational terminology, or future business requirements."
                },
                {
                  title: "Scalability Issues",
                  desc: "Organizations using only specific modules still had to follow the same rigid overarching structure."
                },
                {
                  title: "Limited Scenario Handling",
                  desc: "Lacked proper edge-case handling and scalable logic for negative scenarios in validation processes."
                }
              ].map((prob, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-6 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border-l-4 border-l-electric-blue/40">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{prob.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UX Architecture & Flows Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              03 / System Architecture
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              UX Architecture & Flows
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="text-base leading-relaxed">Instead of jumping straight to screen design, the first phase focused on restructuring the platform architecture and document state transitions. By mapping workflows comprehensively, we resolved nested loops and edge cases.</p>

            {/* User Flow Diagram - Framed */}
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.03)]">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">System Blueprint Flow</span>
                <span className="text-[10px] font-mono text-slate-400">dms-user-flow.png</span>
              </div>
              <div className="p-6 bg-slate-50/50">
                <ZoomableImage src="/images/dms-user-flow.png" alt="DMS User Flow Diagram" className="w-full h-auto rounded-xl border border-slate-200/40 shadow-sm" />
              </div>
              <p className="px-6 py-4 border-t border-slate-100 text-sm text-slate-500 leading-relaxed bg-white">
                This diagram maps the conditional relationship between Document Management (DMS) and Validation Management (VMS) processes, showing how documents transition from draft state to verified execution.
              </p>
            </div>
            {/* Document Landing Page & Dashboard */}
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Document Landing Page & Dashboard</span>
              </div>
              <div className="p-6 bg-slate-50/50">
                <ZoomableImage src="/images/dms-documnet-ladnding-page.png" alt="DMS Document Landing Page Mockup" className="w-full h-auto rounded-xl border border-slate-200/40 shadow-sm" />
              </div>
              <p className="px-6 py-4 border-t border-slate-100 text-sm text-slate-500 leading-relaxed bg-white">
                The centralized Document Landing Page UI functions as a customizable dashboard, highlighting active validation tasks, draft status notifications, and global folder pathways.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              04 / Design Solution
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              The Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modular License-Based Experience</h3>
              <p className="text-slate-600 leading-relaxed text-base">The platform dynamically adapts based on enabled modules. If an organization licenses only the Document Management System (DMS), executable validation workflows remain hidden. If both DMS and VMS are enabled, executable document workflows become available automatically.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Configurable Enterprise Workflows</h3>
              <p className="text-slate-600 leading-relaxed text-base">Transforming the platform from hardcoded to highly configurable workflows. Admins can configure document types, review flows, approval structures, template systems, and organizational role naming.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Validation Management Experience</h3>
              <p className="text-slate-600 leading-relaxed text-base">Redesigned around guided execution workflows. Validation documents support editable execution fields, controlled data input, pass/fail actions, and protected non-editable sections. Completed documents move through configurable approver workflows before automatic archival in structured repositories.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Theme Customization System</h3>
              <p className="text-slate-600 leading-relaxed text-base">A fully configurable theme customization module allows enterprise organizations to personalize primary/secondary colors, branding styles, and UI appearance without requiring development changes, integrating seamlessly with the React MUI architecture.</p>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              05 / Validation
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              Key Outcomes
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <p className="text-slate-600 leading-relaxed text-base">
              The redesigned platform transformed a rigid legacy enterprise system into a scalable modular SaaS ecosystem, configurable across enterprise workflows and aligned with modern pharma operational requirements.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-electric-blue text-xs font-bold">1</span>
                  UX Improvements
                </h3>
                <ul className="space-y-3.5 list-none pl-0">
                  {[
                    "Reduced workflow complexity",
                    "Cleaner enterprise navigation",
                    "Improved information architecture",
                    "Simplified validation execution",
                    "Better repository discoverability"
                  ].map((result, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-electric-blue mt-0.5" />
                      <span className="text-slate-600 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 text-xs font-bold">2</span>
                  System Improvements
                </h3>
                <ul className="space-y-3.5 list-none pl-0">
                  {[
                    "Modular licensing architecture",
                    "Configurable enterprise workflows",
                    "Flexible repository structures",
                    "Scalable data architecture",
                    "Enterprise theme customization"
                  ].map((result, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span className="text-slate-600 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/40">
              <h3 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">Key Takeaway</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-0">
                This project reinforced the importance of system-level UX thinking, scalable enterprise architecture, configurable workflow design, and designing products that evolve with business needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: "timesheet-platform",
    title: "Timesheet Platform Redesign",
    summary:
      "The redesign focused on reducing confusion, simplifying timesheet entry, improving workflow visibility, and building a flexible system architecture for future scalability.",
    focus: "UX Architect & UI Builder",
    href: "/case-study/timesheet-platform",
    role: "UX Designer",
    timeline: "15 Days",
    platform: "B2B SaaS Web Application",
    tools: "Adobe XD • React • MUI (Material UI)",
    heroImage: "/images/Timesheet-login-page.png",
    previewImages: [
      "/images/Timesheet-login-page.png",
      "/images/timesheet-home-screen.png",
      "/images/Timesheet-fill-up.jpg",
    ],
    themeBg: "bg-gradient-to-br from-[#0c52cd] via-[#0f5ce6] to-[#1d4ed8]",
    disciplines: ["Interaction Design", "UI Design", "Information Architecture", "Product Strategy"],
    toolsDetail: [
      { label: "Design", value: "Adobe XD" },
      { label: "Front-End", value: "React, MUI, Framer Motion" }
    ],
    content: (
      <div className="grid gap-20">
        {/* Challenge Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              01 / Context
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              The Challenge
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="text-base md:text-lg leading-relaxed">The existing timesheet platform had an outdated enterprise UI that created friction for daily operational tasks:</p>
            <ul className="mb-6 grid gap-4 sm:grid-cols-2 list-none pl-0">
              {[
                "Dense navigation",
                "Multiple nested menus",
                "Overwhelming forms",
                "Complex workflows"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed">Employees required training just to understand how to select clients, engagement types, task categories, and complete a simple timesheet entry. The system created friction for everyday users and slowed down routine operations.</p>
          </div>
        </section>

        {/* Problem Discovery Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              02 / Research
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              Problem Discovery
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "1. Cognitive Overload",
                  desc: "Page layouts were dense and required employees to parse multiple nested forms just to input daily logs."
                },
                {
                  title: "2. Confusing Information Architecture",
                  desc: "Key features were buried inside multi-level dropdowns and hard-to-read tabular grids."
                },
                {
                  title: "3. High Learning Curve",
                  desc: "New hires required detailed onboarding steps and manuals to complete simple daily timesheet updates."
                },
                {
                  title: "4. Outdated Interaction Patterns",
                  desc: "Relying heavily on manual dropdowns and text inputs instead of interactive components and smart defaults."
                }
              ].map((prob, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-6 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border-l-4 border-l-electric-blue/40">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{prob.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UX Architecture & Flow Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              03 / Interaction Map
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              UX Architecture & Flow
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="text-base leading-relaxed">To simplify the logging flow, we restructured the timesheet entry path into a unified screen with a simple dropdown sequence. Below is the simplified task mapping.</p>

            {/* User Flow Diagram - Framed */}
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.03)]">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Simplified Task Flow Map</span>
                <span className="text-[10px] font-mono text-slate-400">timesheet-user-flow.png</span>
              </div>
              <div className="p-6 bg-slate-50/50">
                <ZoomableImage src="/images/timesheet-user-flow.png" alt="Timesheet User Flow Diagram" className="w-full h-auto rounded-xl border border-slate-200/40 shadow-sm" />
              </div>
              <p className="px-6 py-4 border-t border-slate-100 text-sm text-slate-500 leading-relaxed bg-white">
                Visualizing the simplified user flow designed to let employees quickly log daily tasks, select clients, and submit timesheets with minimal clicks.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              04 / Design Solution
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              The Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Calendar-Based Timesheet Entry</h3>
              <p className="text-slate-600 leading-relaxed text-base">I introduced a calendar widget as the primary interaction layer. This transformed the experience from "Fill a complicated form" into "Add work hours to a specific day."</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 list-none pl-0 text-sm font-semibold text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue" /> Current date preselected automatically
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue" /> Add (+) action available on dates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue" /> Reduced unnecessary navigation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-blue" /> Faster daily time entry flow
                </li>
              </ul>
            </div>

            {/* Showcase Step 1 - Browser Mockup */}
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_55px_-10px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold text-electric-blue uppercase tracking-wider">Step 01 / Initial Entry</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">Timesheet Home Dashboard</h4>
                </div>
              </div>
              <div className="p-6 bg-slate-50/30">
                <p className="text-slate-600 mb-6 text-sm">
                  Upon landing, the employee is greeted by the home dashboard, which preloads their active calendar week and assigned tasks. There's no initial selection required to view the workspace state.
                </p>
                <ZoomableImage src="/images/timesheet-home-screen.png" alt="Timesheet Homescreen Dashboard Mockup" className="w-full h-auto rounded-xl border border-slate-200/40 shadow-sm" />
              </div>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Preloaded Work Hour Logging</h3>
              <p className="text-slate-600 leading-relaxed text-base">To log hours, users trigger a daily dialog that preloads default projects and tasks configured on their dashboard. Instead of choosing project configurations daily, they only need to input their time and comments.</p>
            </div>

            {/* Showcase Step 2 - Browser Mockup */}
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_55px_-10px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold text-electric-blue uppercase tracking-wider">Step 02 / Daily Action</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">Work Hour Logging Panel</h4>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Timesheet-fill-up.jpg</span>
              </div>
              <div className="p-6 bg-slate-50/30">
                <p className="text-slate-600 mb-6 text-sm">
                  The hour logging layout pre-populates active engagement rows automatically. Employees specify the work hours logged, reducing entry interaction to numeric input and optional comments.
                </p>
                <ZoomableImage src="/images/Timesheet-fill-up.jpg" alt="Timesheet Hour Logging Mockup" className="w-full h-auto rounded-xl border border-slate-200/40 shadow-sm" />
              </div>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client Adjustment Setup</h3>
              <p className="text-slate-600 leading-relaxed text-base">When users need to update active engagement roles or add new projects, they can open the selection pane. Because team allocations change monthly rather than daily, this task is isolated to keep daily click rates exceptionally low.</p>
            </div>

            {/* Showcase Step 3 - Browser Mockup */}
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_55px_-10px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold text-electric-blue uppercase tracking-wider">Step 03 / Occasional Adjustments</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">Client & Project Selection Customizer</h4>
                </div>
                <span className="text-[10px] font-mono text-slate-400">client-selection.jpg</span>
              </div>
              <div className="p-6 bg-slate-50/30">
                <p className="text-slate-600 mb-6 text-sm">
                  The client filter menu handles occasional assignments and changes. Segregating this flow cuts daily entry click-rates compared to standard legacy methods.
                </p>
                <ZoomableImage src="/images/client-selection.jpg" alt="Client Selection Customizer Mockup" className="w-full h-auto rounded-xl border border-slate-200/40 shadow-sm" />
              </div>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Flexible Admin System & Dashboard</h3>
              <p className="text-slate-600 leading-relaxed text-base">One major focus was long-term scalability. I designed the platform components to be highly configurable for admin users (manage clients, engagements, task types, dynamic workflow fields). The dashboard was redesigned using simplified widgets prioritizing readability, efficiency, and reduced visual clutter.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">UI Modernization & Design System</h3>
              <p className="text-slate-600 leading-relaxed text-base">The redesign introduced modern spacing, cleaner typography, simplified layouts, focused interactions, and reduced UI noise. I created reusable component structures, scalable design patterns, and MUI theme styling guidelines for frontend scalability.</p>
            </div>
          </div>
        </section>
        {/* Outcomes Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              05 / Validation
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              Key Outcomes
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <p className="text-slate-600 leading-relaxed text-base">
              The redesigned platform transformed the timesheet experience from a training-heavy enterprise workflow into a simplified and intuitive productivity tool.
            </p>

            <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-electric-blue" />
                Performance Metrics & Outcomes
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2 list-none pl-0 text-sm">
                {[
                  "Reduced user confusion",
                  "Simplified daily time entry",
                  "Lower learning curve",
                  "Improved workflow clarity",
                  "Future-ready configurable architecture",
                  "Modernized enterprise UX experience"
                ].map((result, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/40">
              <h3 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">Key Takeaway</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-0">
                This project reinforced the importance of simplifying enterprise workflows, reducing cognitive load, and designing scalable systems instead of static interfaces.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: "vendor-shipping-portal",
    title: "Global Vendor & Shipping Management Platform",
    summary:
      "A centralized enterprise procurement ecosystem unifying fragmented vendor, shipping, and payment workflows.",
    focus: "Enterprise UX & Architecture",
    href: "/case-study/vendor-shipping-portal",
    role: "UX Designer",
    timeline: "2 Months",
    platform: "B2B SaaS Enterprise Application",
    tools: "Adobe XD • React • MUI",
    heroImage: "/images/vendor-portal.png",
    previewImages: [
      "/images/vendor-portal.png",
      "/images/vendor-portal.png",
      "/images/vendor-portal.png",
    ],
    themeBg: "bg-gradient-to-br from-[#1b253b] via-[#0d1527] to-[#050b18]",
    disciplines: ["Enterprise UX", "B2B Workflows", "UX Strategy", "System Architecture"],
    toolsDetail: [
      { label: "Design", value: "Adobe XD, Miro" },
      { label: "Development", value: "React, Material UI" }
    ],
    content: (
      <div className="grid gap-20">
        {/* Challenge Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              01 / Context
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              The Challenge
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="text-base md:text-lg leading-relaxed">The organization previously operated through multiple disconnected enterprise applications handling vendor management, registration, shipping operations, payments, and SAP-integrated workflows.</p>
            <p className="text-base leading-relaxed">The fragmented ecosystem created several operational and usability problems:</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2.5 text-base mb-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  Fragmented Experience
                </h3>
                <p className="mb-0 text-slate-600 text-sm leading-relaxed">Users had to switch between multiple applications for procurement operations, creating workflow disruption, duplicated effort, and reduced visibility.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2.5 text-base mb-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  Inconsistent UX
                </h3>
                <p className="mb-0 text-slate-600 text-sm leading-relaxed">Each module followed different UI patterns, structures, and interaction behaviors, making the system difficult to learn and master.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2.5 text-base mb-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  Complex Global Operations
                </h3>
                <p className="mb-0 text-slate-600 text-sm leading-relaxed">The older system struggled to scale efficiently across multiple countries, global shipping methods, and SAP-driven processes.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="mt-0 font-bold text-slate-900 flex items-center gap-2.5 text-base mb-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  Manual Financial Ops
                </h3>
                <p className="mb-0 text-slate-600 text-sm leading-relaxed">Key processes like Letter of Credit (LC) calculations were managed manually outside the system, increasing operational dependency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Vision & UX Strategy Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              02 / Strategy
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              Vision & Strategy
            </h2>
          </div>
          <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600">
            <p className="text-base md:text-lg leading-relaxed">The goal was to rebuild the experience into a unified enterprise procurement ecosystem, scalable across global operations, configurable for different business units, and flexible for future expansion.</p>
            <p className="text-base leading-relaxed">Instead of redesigning individual screens separately, the product was restructured from a <strong>system-level workflow architecture</strong> perspective. The focus was on reducing operational fragmentation, improving visibility, and unifying disconnected experiences.</p>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              03 / Design Solution
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              The Solution
            </h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Enterprise Platform</h3>
              <p className="text-slate-600 leading-relaxed text-base">Consolidated previously separate applications (Vendor Portal, Registration, Shipping, Payments) into one connected experience. This significantly improved workflow continuity, visibility, and user efficiency.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Business Unit Architecture & Global Vendors</h3>
              <p className="text-slate-600 leading-relaxed text-base">Introduced support for multiple business units under one organization. Each unit can have custom application modules and separate operational configurations. Vendors are managed at the business-unit level across multiple countries and region-specific processes.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Shipping & Financial Workflows</h3>
              <p className="text-slate-600 leading-relaxed text-base">Redesigned shipping workflows for sea, air, and road logistics that dynamically adapt based on operational rules. The payment system supports domestic/international transactions and digitized the <strong>Letter of Credit (LC)</strong> calculations, replacing manual outside work with automated, system-assisted financial tracking.</p>
            </div>

            <div className="border-l-4 border-slate-200/80 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Employee Procurement Portal</h3>
              <p className="text-slate-600 leading-relaxed text-base">Introduced an internal ecommerce-style purchasing portal allowing employees to browse vendor catalogs and initiate workflows directly inside the system, extending the platform into enterprise purchasing enablement.</p>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
          <div className="md:col-span-4 md:sticky md:top-32 h-fit">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
              04 / Validation
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
              Key Outcomes
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <p className="text-slate-600 leading-relaxed text-base">
              The rebuilt platform transformed multiple disconnected enterprise systems into a unified global operations platform, scalable across procurement and logistics workflows.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-electric-blue text-xs font-bold">1</span>
                  UX Improvements
                </h3>
                <ul className="space-y-3.5 list-none pl-0">
                  {[
                    "Reduced workflow fragmentation",
                    "Unified enterprise experience",
                    "Simplified vendor operations",
                    "Improved shipment visibility",
                    "Cleaner procurement workflows"
                  ].map((result, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-electric-blue mt-0.5" />
                      <span className="text-slate-600 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
                <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 text-xs font-bold">2</span>
                  System Improvements
                </h3>
                <ul className="space-y-3.5 list-none pl-0">
                  {[
                    "Multi-business-unit support",
                    "Configurable shipping workflows",
                    "Integrated financial operations",
                    "Automated LC calculation workflows",
                    "Scalable enterprise architecture"
                  ].map((result, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span className="text-slate-600 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200/40">
              <h3 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wider">Key Takeaway</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-0">
                This project reinforced the importance of system-level enterprise UX thinking, workflow unification, scalable operational architecture, and simplifying highly complex global business processes.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  },
];

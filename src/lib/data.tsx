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
    timeline: "18 Months Includes Design & Development",
    platform: "B2B SaaS Enterprise Application",
    tools: "Adobe XD • React • MUI Design System",
    heroImage: "/images/dms-vms-login-main.png",
    previewImages: [
      "/images/dms.png",
      "/images/dms.png",
      "/images/client-selection.jpg",
    ],
    content: (
      <div className="grid gap-16 md:gap-24">
        {/* Background & Challenge */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Challenge</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>The existing platform was a legacy enterprise system originally built for pharmaceutical workflows. Over time, the product developed major limitations:</p>
            <ul className="mb-6 grid gap-3 sm:grid-cols-2 list-none pl-0">
              {[
                "Scalability issues & rigid architecture",
                "Outdated, deep-nested workflows",
                "Poor configurability",
                "Complex enterprise usability"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>The platform forced organizations to adapt to the software instead of allowing the software to adapt to business processes. The redesign initiative focused not only on modernizing the interface, but on rebuilding the entire product experience from a system-thinking perspective.</p>
          </div>
        </section>

        {/* Key Problems */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Problem Discovery</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Rigid Data Architecture</h3>
              <p className="text-slate-600 text-sm">Core data types and workflows were tightly coupled, causing dependency on developers for changes, limited flexibility, and poor scalability.</p>
            </div>
            <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Traditional Enterprise UX</h3>
              <p className="text-slate-600 text-sm">The interface relied on dense tables, outdated navigation, auto-generated folder structures, and cluttered screens.</p>
            </div>
            <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Lack of Configurability</h3>
              <p className="text-slate-600 text-sm">Admins could not easily configure approval structures, organizational terminology, or future business requirements.</p>
            </div>
            <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Scalability Issues</h3>
              <p className="text-slate-600 text-sm">Organizations using only specific modules still had to follow the same rigid overarching structure.</p>
            </div>
            <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Limited Scenario Handling</h3>
              <p className="text-slate-600 text-sm">Lacked proper edge-case handling and scalable logic for negative scenarios in validation processes.</p>
            </div>
          </div>
        </section>

        {/* Product Vision & UX Process Flow */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">UX Architecture & Flows</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>Instead of jumping straight to screen design, the first phase focused on restructuring the platform architecture and document state transitions. By mapping workflows comprehensively, we resolved nested loops and edge cases.</p>
            
            {/* User Flow Diagram */}
            <div className="my-10 border border-slate-200 bg-white shadow-md rounded-none overflow-hidden p-6 bg-gradient-to-br from-slate-50 to-white">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Redesigned System User Flow</div>
              <ZoomableImage src="/images/dms-user-flow.png" alt="DMS User Flow Diagram" className="w-full h-auto border border-slate-100 shadow-sm rounded-none" />
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                This diagram maps the conditional relationship between Document Management (DMS) and Validation Management (VMS) processes, showing how documents transition from draft state to verified execution.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution & Key Screens */}
        <section>
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">The Solution</h2>

          <div className="space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Modular License-Based Experience</h3>
              <p className="text-lg text-slate-600">The platform dynamically adapts based on enabled modules. If an organization licenses only the Document Management System (DMS), executable validation workflows remain hidden. If both DMS and VMS are enabled, executable document workflows become available automatically.</p>
            </div>

            {/* Showcase Screen: Task Screen */}
            <div className="my-10 border border-slate-200 bg-white shadow-md rounded-none overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                </div>
                <div className="mx-auto text-xs text-slate-400 font-mono select-none">dms-task-screen.png</div>
              </div>
              <ZoomableImage src="/images/dms-task-screen.png" alt="DMS Task Screen Mockup" className="w-full h-auto rounded-none" />
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Configurable Enterprise Workflows</h3>
              <p className="text-lg text-slate-600">Transforming the platform from hardcoded to highly configurable workflows. Admins can configure document types, review flows, approval structures, template systems, and organizational role naming.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Validation Management Experience</h3>
              <p className="text-lg text-slate-600">Redesigned around guided execution workflows. Validation documents support editable execution fields, controlled data input, pass/fail actions, and protected non-editable sections. Completed documents move through configurable approver workflows before automatic archival in structured repositories.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Theme Customization System</h3>
              <p className="text-lg text-slate-600">A fully configurable theme customization module allows enterprise organizations to personalize primary/secondary colors, branding styles, and UI appearance without requiring development changes, integrating seamlessly with the React MUI architecture.</p>
            </div>
          </div>
        </section>

        {/* Placeholders for upcoming images */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Upcoming Interface Releases</h2>
          <p className="text-lg text-slate-600 mb-8">Additional layout screens currently undergoing design refinement and compliance review:</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-dashed border-slate-300 bg-slate-50/50 p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <span className="text-sm font-semibold text-slate-700">Document Editor & Collaborative Review</span>
              <span className="text-xs text-slate-400 mt-1 max-w-xs text-center">Interactive workspace for inline commenting, multi-user approval routing, and compliant text editing.</span>
            </div>
            <div className="border border-dashed border-slate-300 bg-slate-50/50 p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <span className="text-sm font-semibold text-slate-700">Compliant E-Signatures & Audit Trail</span>
              <span className="text-xs text-slate-400 mt-1 max-w-xs text-center">Strict FDA 21 CFR Part 11 signature logs, timestamp tracking, and secure PDF export generators.</span>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="rounded-none bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12 border border-slate-200">
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Outcomes & Impact</h2>
          <p className="text-lg text-slate-600 mb-8">
            The redesigned platform transformed a rigid legacy enterprise system into a scalable modular SaaS ecosystem, configurable across enterprise workflows and aligned with modern pharma operational requirements.
          </p>

          <div className="grid gap-12 md:grid-cols-2 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">UX Improvements</h3>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Reduced workflow complexity",
                  "Cleaner enterprise navigation",
                  "Improved information architecture",
                  "Simplified validation execution workflows",
                  "Better repository discoverability"
                ].map((result, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-electric-blue" />
                    <span className="text-slate-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">System Improvements</h3>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Modular licensing architecture",
                  "Configurable enterprise workflows",
                  "Flexible repository structures",
                  "Scalable data architecture",
                  "Enterprise-level theme customization"
                ].map((result, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                    <span className="text-slate-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-none border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaway</h3>
            <p className="text-slate-600">
              This project reinforced the importance of system-level UX thinking, scalable enterprise architecture, configurable workflow design, and designing products that evolve with business needs.
            </p>
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
    timeline: "4 Months Includes Design & Development",
    platform: "B2B SaaS Web Application",
    tools: "Adobe XD • React • MUI (Material UI)",
    heroImage: "/images/Timesheet-login-page.png",
    previewImages: [
      "/images/Timesheet-login-page.png",
      "/images/homescreen.jpg",
      "/images/Timesheet-fill-up.jpg",
    ],
    content: (
      <div className="grid gap-16 md:gap-24">
        {/* Background & Challenge */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">The Challenge</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>The existing timesheet platform had an outdated enterprise UI with:</p>
            <ul className="mb-6 grid gap-3 sm:grid-cols-2 list-none pl-0">
              {[
                "Dense navigation",
                "Multiple nested menus",
                "Overwhelming forms",
                "Complex workflows"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>Employees required training just to understand:</p>
            <ul className="mb-6 grid gap-3 sm:grid-cols-2 list-none pl-0">
              {[
                "How to select clients",
                "Engagement types",
                "Task categories",
                "How to complete a simple timesheet entry"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>The system created friction for everyday users and slowed down routine operations.</p>
          </div>
        </section>

        {/* Problem Discovery */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Problem Discovery</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>After reviewing the existing workflow, I identified key usability issues:</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
                <h3 className="mt-0 font-semibold text-slate-900">1. Cognitive Overload</h3>
                <p className="mb-0 text-base text-slate-600">Page layouts were dense, demanding unnecessary learning curves.</p>
              </div>
              <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
                <h3 className="mt-0 font-semibold text-slate-900">2. Confusing Information Architecture</h3>
                <p className="mb-0 text-base text-slate-600">Key features were buried inside multi-level dropdowns and tabular patterns.</p>
              </div>
              <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
                <h3 className="mt-0 font-semibold text-slate-900">3. High Learning Curve</h3>
                <p className="mb-0 text-base text-slate-600">Employees required detailed onboarding steps to complete simple updates.</p>
              </div>
              <div className="rounded-none bg-white p-6 shadow-sm ring-1 ring-slate-100 border-l-4 border-slate-300">
                <h3 className="mt-0 font-semibold text-slate-900">4. Outdated Interaction Patterns</h3>
                <p className="mb-0 text-base text-slate-600">Relying heavily on manual dropdowns and fields instead of interactive and smart defaults.</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Flow & UX Process */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">UX Architecture & Flow</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>
              To simplify the logging flow, we restructured the timesheet entry path into a unified screen with a simple dropdown sequence. Below is the simplified task mapping.
            </p>

            {/* Timesheet User Flow Image */}
            <div className="my-10 border border-slate-200 bg-white shadow-md rounded-none overflow-hidden p-6 bg-gradient-to-br from-slate-50 to-white">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Redesigned Task Flow Map</div>
              <ZoomableImage src="/images/timesheet-user-flow.png" alt="Timesheet User Flow Diagram" className="w-full h-auto border border-slate-100 shadow-sm rounded-none" />
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Visualizing the simplified user flow designed to let employees quickly log daily tasks, select clients, and submit timesheets with minimal clicks.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution & Key Screens */}
        <section>
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">The Solution</h2>

          <div className="space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Calendar-Based Timesheet Entry</h3>
              <p className="text-lg text-slate-600 mb-4">I introduced a calendar widget as the primary interaction layer. This transformed the experience from "Fill a complicated form" into "Add work hours to a specific day."</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Current date preselected automatically</li>
                <li>Add (+) action available for each date</li>
                <li>Reduced unnecessary navigation</li>
                <li>Faster daily time entry flow</li>
              </ul>
            </div>

            {/* UX Flow: Client Selection & Timesheet Entry */}
            <div className="border border-slate-200 bg-white shadow-sm rounded-none overflow-hidden my-8">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-electric-blue uppercase tracking-wider">Step 01 / Context Setup</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Client Selection Dropdown</h4>
                </div>
                <span className="text-xs text-slate-400 font-mono">client-selection.jpg</span>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6 text-base">
                  To prevent errors, users choose from pre-filtered clients and active projects configured by managers. This step-by-step workflow significantly reduces input mismatch.
                </p>
                <ZoomableImage src="/images/client-selection.jpg" alt="Client Selection Mockup" className="w-full h-auto border border-slate-100 shadow-sm rounded-none" />
              </div>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Simplified Time Entry Modal</h3>
              <p className="text-lg text-slate-600">When users click the add action, a lightweight modal opens, showing only relevant assigned options. Employees only needed to select predefined client/engagement options, choose task type, and enter hours/minutes.</p>
            </div>

            <div className="border border-slate-200 bg-white shadow-sm rounded-none overflow-hidden my-8">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-electric-blue uppercase tracking-wider">Step 02 / Time Logging</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Timesheet Hour Logging</h4>
                </div>
                <span className="text-xs text-slate-400 font-mono">Timesheet-fill-up.jpg</span>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-6 text-base">
                  An intuitive, calendar-integrated overlay popup allows employees to quickly log hours against selected task categories, enter descriptions, and save with a single action.
                </p>
                <ZoomableImage src="/images/Timesheet-fill-up.jpg" alt="Timesheet Fill Up Mockup" className="w-full h-auto border border-slate-100 shadow-sm rounded-none" />
              </div>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Flexible Admin System & Dashboard</h3>
              <p className="text-lg text-slate-600 mb-4">One major focus was long-term scalability. I designed the platform components to be highly configurable for admin users (manage clients, engagements, task types, dynamic workflow fields). The dashboard was redesigned using simplified widgets prioritizing readability, efficiency, and reduced visual clutter.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">UI Modernization & Design System</h3>
              <p className="text-lg text-slate-600">The redesign introduced modern spacing, cleaner typography, simplified layouts, focused interactions, and reduced UI noise. I created reusable component structures, scalable design patterns, and MUI theme styling guidelines for frontend scalability.</p>
            </div>
          </div>
        </section>

        {/* Placeholders for upcoming images */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Upcoming Interface Releases</h2>
          <p className="text-lg text-slate-600 mb-8">Additional timesheet interfaces currently undergoing validation and deployment planning:</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-dashed border-slate-300 bg-slate-50/50 p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <span className="text-sm font-semibold text-slate-700">Manager Analytics Dashboard</span>
              <span className="text-xs text-slate-400 mt-1 max-w-xs text-center">Data visualization mockup tracking resource allocation, billing utilization, and monthly overhead.</span>
            </div>
            <div className="border border-dashed border-slate-300 bg-slate-50/50 p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <span className="text-sm font-semibold text-slate-700">Admin Platform Settings</span>
              <span className="text-xs text-slate-400 mt-1 max-w-xs text-center">Interface for setting up team project codes, mapping custom clients, and assigning roles.</span>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="rounded-none bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12 border border-slate-200">
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Outcomes & Impact</h2>
          <p className="text-lg text-slate-600 mb-8">
            The redesigned platform transformed the timesheet experience from a training-heavy enterprise workflow into a simplified and intuitive productivity tool.
          </p>
          <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 list-none pl-0">
            {[
              "Reduced user confusion",
              "Simplified daily time entry",
              "Lower learning curve",
              "Improved workflow clarity",
              "Future-ready configurable architecture",
              "Modernized enterprise UX experience"
            ].map((result, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-electric-blue" />
                <span className="text-slate-700 font-medium leading-relaxed">{result}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 p-6 rounded-none border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaway</h3>
            <p className="text-slate-600">
              This project reinforced the importance of simplifying enterprise workflows, reducing cognitive load, and designing scalable systems instead of static interfaces.
            </p>
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
    timeline: "18 Months Includes Design & Development",
    platform: "B2B SaaS Enterprise Application",
    tools: "Adobe XD • React • MUI",
    heroImage: "/images/vendor-portal.png",
    previewImages: [
      "/images/timesheet.jpeg",
      "/images/timesheet.jpeg",
      "/images/client-selection.jpg",
    ],
    content: (
      <div className="grid gap-16 md:gap-24">
        {/* Background & Challenge */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Challenge</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>The organization previously operated through multiple disconnected enterprise applications handling vendor management, registration, shipping operations, payments, and SAP-integrated workflows.</p>
            <p>The fragmented ecosystem created several operational and usability problems:</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900 flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  Fragmented Experience
                </h3>
                <p className="mb-0 text-base">Users had to switch between multiple applications for procurement operations, creating workflow disruption, duplicated effort, and reduced visibility.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900 flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  Inconsistent UX
                </h3>
                <p className="mb-0 text-base">Each module followed different UI patterns, structures, and interaction behaviors, making the system difficult to learn.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900 flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  Complex Global Operations
                </h3>
                <p className="mb-0 text-base">The older system struggled to scale efficiently across multiple countries, global shipping methods, and SAP-driven processes.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900 flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  Manual Financial Ops
                </h3>
                <p className="mb-0 text-base">Key processes like Letter of Credit (LC) calculations were managed manually outside the system, increasing operational dependency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Vision & UX Strategy */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Vision & UX Strategy</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>The goal was to rebuild the experience into a unified enterprise procurement ecosystem, scalable across global operations, configurable for different business units, and flexible for future expansion.</p>
            <p>Instead of redesigning individual screens separately, the product was restructured from a <strong>system-level workflow architecture</strong> perspective. The focus was on reducing operational fragmentation, improving visibility, and unifying disconnected experiences.</p>
          </div>
        </section>

        {/* The Solution */}
        <section>
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">The Solution</h2>

          <div className="space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Unified Enterprise Platform</h3>
              <p className="text-lg text-slate-600">Consolidated previously separate applications (Vendor Portal, Registration, Shipping, Payments) into one connected experience. This significantly improved workflow continuity, visibility, and user efficiency.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Multi-Business Unit Architecture & Global Vendors</h3>
              <p className="text-lg text-slate-600">Introduced support for multiple business units under one organization. Each unit can have custom application modules and separate operational configurations. Vendors are managed at the business-unit level across multiple countries and region-specific processes.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Shipping & Financial Workflows</h3>
              <p className="text-lg text-slate-600">Redesigned shipping workflows for sea, air, and road logistics that dynamically adapt based on operational rules. The payment system supports domestic/international transactions and digitized the <strong>Letter of Credit (LC)</strong> calculations, replacing manual outside work with automated, system-assisted financial tracking.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Employee Procurement Portal</h3>
              <p className="text-lg text-slate-600">Introduced an internal ecommerce-style purchasing portal allowing employees to browse vendor catalogs and initiate workflows directly inside the system, extending the platform into enterprise purchasing enablement.</p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12 mt-8">
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Outcomes & Impact</h2>
          <p className="text-lg text-slate-600 mb-8">
            The rebuilt platform transformed multiple disconnected enterprise systems into a unified global operations platform, scalable across procurement and logistics workflows.
          </p>

          <div className="grid gap-12 md:grid-cols-2 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">UX Improvements</h3>
              <ul className="space-y-4">
                {[
                  "Reduced workflow fragmentation",
                  "Unified enterprise experience",
                  "Simplified vendor operations",
                  "Improved shipment visibility",
                  "Cleaner procurement workflows"
                ].map((result, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-electric-blue" />
                    <span className="text-slate-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">System Improvements</h3>
              <ul className="space-y-4">
                {[
                  "Multi-business-unit support",
                  "Configurable shipping workflows",
                  "Integrated financial operations",
                  "Automated LC calculation workflows",
                  "Scalable enterprise architecture"
                ].map((result, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                    <span className="text-slate-700 font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaway</h3>
            <p className="text-slate-600">
              This project reinforced the importance of system-level enterprise UX thinking, workflow unification, scalable operational architecture, and simplifying highly complex global business processes.
            </p>
          </div>
        </section>
      </div>
    )
  },
];

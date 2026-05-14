import React from "react";
import { CheckCircle2 } from "lucide-react";

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
  content?: React.ReactNode;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-platform",
    title: "Timesheet Platform Redesign",
    summary:
      "Information hierarchy and interaction patterns for dense trading data — clarity without cognitive overload.",
    focus: "UX Architect & UI Builder",
    href: "/case-study/fintech-platform",
    role: "Product Designer",
    timeline: "4 Months includes design & development",
    platform: "B2B SaaS Web Application",
    tools: "Adobe XD • React • MUI (Material UI)",
    heroImage: "/images/timesheet.png",
    content: (
      <div className="grid gap-16 md:gap-24">
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

        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Problem Discovery</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>After reviewing the existing workflow, I identified key usability issues:</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900">1. Cognitive Overload</h3>
                <p className="mb-0 text-base">Users were presented with too many fields and menu options at once.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900">2. Confusing Information Architecture</h3>
                <p className="mb-0 text-base">Critical actions were buried inside layered navigation and traditional enterprise layouts.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900">3. High Learning Curve</h3>
                <p className="mb-0 text-base">Employees needed onboarding assistance to understand client selection, engagement mapping, and task categorization.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mt-0 font-semibold text-slate-900">4. Outdated Interaction Patterns</h3>
                <p className="mb-0 text-base">The platform relied heavily on dropdown-heavy forms, table-based layouts, and static workflows. The experience felt operational rather than intuitive.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Design Goal & UX Strategy</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>
              The primary objective was to redesign the platform into a <strong>clean, intuitive, scalable, and low-training</strong> enterprise experience.
            </p>
            <p>The redesign focused on reducing confusion, simplifying timesheet entry, improving workflow visibility, and building a flexible system architecture for future scalability.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">UX Strategy</h3>
            <p>Instead of forcing users through large form pages, I redesigned the experience around a <strong>calendar-first workflow</strong>. This reduced decision fatigue and made the interaction feel more natural.</p>
          </div>
        </section>

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

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Simplified Time Entry Modal</h3>
              <p className="text-lg text-slate-600">When users click the add action, a lightweight modal opens, showing only relevant assigned options. Employees only needed to select predefined client/engagement options, choose task type, and enter hours/minutes. This significantly reduced confusion because these properties were already configured by administrators.</p>
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

        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12 mt-8">
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Outcomes & Impact</h2>
          <p className="text-lg text-slate-600 mb-8">
            The redesigned platform transformed the timesheet experience from a training-heavy enterprise workflow into a simplified and intuitive productivity tool.
          </p>
          <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
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

          <div className="bg-slate-50 p-6 rounded-2xl">
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
    id: "pharma-dms-vms",
    title: "Unified Document & Validation Management Platform",
    summary:
      "A complete system-level rebuild of a legacy pharma enterprise system into a scalable, configurable SaaS ecosystem.",
    focus: "UX Architecture & Systems",
    href: "/case-study/pharma-dms-vms",
    role: "Product Designer",
    timeline: "Enterprise Redesign",
    platform: "B2B SaaS Enterprise Application",
    tools: "Adobe XD • React • MUI Design System",
    heroImage: "/images/dms.png",
    content: (
      <div className="grid gap-16 md:gap-24">
        {/* Background & Challenge */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Background & Challenge</h2>
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
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Problems Identified</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Rigid Data Architecture</h3>
              <p className="text-slate-600 text-sm">Core data types and workflows were tightly coupled, causing dependency on developers for changes, limited flexibility, and poor scalability.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Traditional Enterprise UX</h3>
              <p className="text-slate-600 text-sm">The interface relied on dense tables, outdated navigation, auto-generated folder structures, and cluttered screens.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Lack of Configurability</h3>
              <p className="text-slate-600 text-sm">Admins could not easily configure approval structures, organizational terminology, or future business requirements.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Scalability Issues</h3>
              <p className="text-slate-600 text-sm">Organizations using only specific modules still had to follow the same rigid overarching structure.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="mt-0 font-semibold text-slate-900 mb-2">Limited Scenario Handling</h3>
              <p className="text-slate-600 text-sm">Lacked proper edge-case handling and scalable logic for negative scenarios in validation processes.</p>
            </div>
          </div>
        </section>

        {/* Product Vision */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Product Vision & Strategy</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <p>The redesign focused on transforming the platform into a scalable enterprise SaaS ecosystem, configurable at every level, modular by license structure, and adaptable across multiple pharma organizations.</p>
            <div className="bg-slate-50 p-6 rounded-2xl my-8">
              <h3 className="text-lg font-semibold text-slate-900 mt-0 mb-3">System Architecture First</h3>
              <p className="mb-0">Instead of redesigning screens first, I restructured the product from workflow architecture, data relationships, repository structure, and user behavior patterns before moving into interface design. This created a cleaner and future-ready product foundation.</p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section>
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">The Solution</h2>

          <div className="space-y-12">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Modular License-Based Experience</h3>
              <p className="text-lg text-slate-600">The platform dynamically adapts based on enabled modules. If an organization licenses only the Document Management System (DMS), executable validation workflows remain hidden. If both DMS and VMS are enabled, executable document workflows become available automatically.</p>
            </div>

            <div className="border-l-4 border-slate-200 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Configurable Enterprise Workflows</h3>
              <p className="text-lg text-slate-600">Transforming the platform from hardcoded to highly configurable workflows. Admins can configure document types, review flows, approval structures, template systems, and organizational role naming. (e.g., Renaming "Department Head" to match internal structures).</p>
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

        {/* Outcomes */}
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12 mt-8">
          <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Outcomes & Impact</h2>
          <p className="text-lg text-slate-600 mb-8">
            The redesigned platform transformed a rigid legacy enterprise system into a scalable modular SaaS ecosystem, configurable across enterprise workflows and aligned with modern pharma operational requirements.
          </p>

          <div className="grid gap-12 md:grid-cols-2 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">UX Improvements</h3>
              <ul className="space-y-4">
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
              <ul className="space-y-4">
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

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
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
    id: "vendor-shipping-portal",
    title: "Global Vendor & Shipping Management Platform",
    summary:
      "A centralized enterprise procurement ecosystem unifying fragmented vendor, shipping, and payment workflows.",
    focus: "Enterprise UX & Architecture",
    href: "/case-study/vendor-shipping-portal",
    role: "Product Designer",
    timeline: "Platform Rebuild",
    platform: "B2B SaaS Enterprise Application",
    tools: "Adobe XD • React • MUI",
    heroImage: "",
    content: (
      <div className="grid gap-16 md:gap-24">
        {/* Background & Challenge */}
        <section>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">Background & Challenge</h2>
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

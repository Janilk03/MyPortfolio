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
    focus: "UX/UI Design",
    href: "/case-study/fintech-platform",
    role: "UX/UI Designer",
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
    id: "health-journey",
    title: "Healthcare onboarding flow",
    summary:
      "Empathy-led flows and validation patterns that reduced drop-off while staying compliant and trustworthy.",
    focus: "Research · UX · Prototype",
    href: "/case-study/health-journey",
    role: "Product Designer",
    timeline: "6 Weeks",
    challenge: "Patients were abandoning the digital onboarding process at a rate of 65% due to long, impersonal forms and confusing medical jargon.",
    solution: "Implemented an empathy-driven, step-by-step onboarding wizard. We replaced clinical language with conversational prompts and added visual progress indicators to build trust and momentum.",
    results: [
      "Reduced onboarding drop-off rate from 65% to 18%",
      "Decreased average completion time by 4 minutes",
      "Passed rigorous HIPAA compliance review with zero major flags"
    ]
  },
  {
    id: "commerce-rebuild",
    title: "E‑commerce experience rebuild",
    summary:
      "End-to-end checkout refinement — performance, trust cues, and a cohesive design language across surfaces.",
    focus: "Product · Engineering · UI",
    href: "/case-study/commerce-rebuild",
    role: "UX Engineer",
    timeline: "4 Months",
    challenge: "A fragmented checkout experience and slow page loads were causing high cart abandonment rates on mobile devices.",
    solution: "Rebuilt the front-end architecture using Next.js for speed. Redesigned the checkout flow to be a seamless, single-page experience with clear trust signals and one-click payment options.",
    results: [
      "22% increase in mobile conversion rate",
      "Page load times improved by 1.8 seconds on average",
      "Achieved a 98/100 Google Lighthouse performance score"
    ]
  },
];

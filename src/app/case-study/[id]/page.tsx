import { caseStudies } from "@/lib/data";
import { notFound } from "next/navigation";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Collage } from "@/components/ui/Collage";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { DesignSystemSection } from "@/components/sections/DesignSystemSection";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.id === resolvedParams.id);

  if (!study) {
    notFound();
  }

  // Calculate Next Project for looping navigation
  const currentIndex = caseStudies.findIndex((s) => s.id === study.id);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  const nextStudy = caseStudies[nextIndex];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-electric-blue selection:text-white">
      {/* Top Interactive Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Full-width Vibrant Hero Header */}
      <header className={`w-full ${study.themeBg} text-white pt-32 pb-20 md:pt-40 md:pb-28 rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden`}>
        {/* Background glow visual elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-white/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-black/10 blur-[80px]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50" aria-label="Breadcrumb">
            <Link href="/#home" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" />
            <Link href="/#case-studies" className="transition-colors hover:text-white">
              Works
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" />
            <span className="text-white" aria-current="page">
              {study.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Title, Subtitle, and Meta Data */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white bg-white/10 border border-white/15 rounded-full mb-6">
                {study.focus}
              </span>
              <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                {study.title}
              </h1>
              <p className="text-base leading-relaxed text-white/80 md:text-lg md:leading-relaxed max-w-2xl mb-12">
                {study.summary}
              </p>

              {/* Meta Data Sub-Grid matching the reference layout */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2.5">
                    Discipline
                  </h4>
                  <p className="text-sm font-semibold text-white/90 leading-relaxed">
                    {study.disciplines.join(", ")}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2.5">
                    Role
                  </h4>
                  <p className="text-sm font-semibold text-white/90 leading-relaxed">
                    {study.role}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2.5">
                    Timeline
                  </h4>
                  <p className="text-sm font-semibold text-white/90 leading-relaxed">
                    {study.timeline}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2.5">
                    Tools
                  </h4>
                  <div className="space-y-1 text-sm font-semibold text-white/90">
                    {study.toolsDetail.map((tool, idx) => (
                      <div key={idx}>
                        <span className="text-white/50 font-normal">{tool.label}: </span>
                        {tool.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Browser Showcase */}
            <div className="lg:col-span-6 relative">
              <Collage images={study.previewImages || []} title={study.title} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Content Sections */}
        {study.content ? (
          study.content
        ) : (
          <div className="grid gap-20">
            {/* Fallback Challenge Section */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
              <div className="md:col-span-4 md:sticky md:top-32 h-fit">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
                  01 / Context
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
                  The Challenge
                </h2>
              </div>
              <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                <p>{study.challenge}</p>
              </div>
            </section>

            {/* Fallback Solution Section */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
              <div className="md:col-span-4 md:sticky md:top-32 h-fit">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
                  02 / Execution
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
                  The Solution
                </h2>
              </div>
              <div className="md:col-span-8 prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                <p>{study.solution}</p>
              </div>
            </section>

            {/* Fallback Key Outcomes Section */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-slate-200/60 pt-16">
              <div className="md:col-span-4 md:sticky md:top-32 h-fit">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric-blue">
                  03 / Impact
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900">
                  Key Outcomes
                </h2>
              </div>
              <div className="md:col-span-8">
                <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                  {study.results?.map((result, idx) => (
                    <li key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-electric-blue mt-0.5" />
                      <span className="text-slate-700 font-medium leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}

        {study.id === "pharma-dms-vms" && <DesignSystemSection />}

        {/* Footer Loops & Back Navigation */}
        <footer className="mt-32 border-t border-slate-200/80 pt-16">
          <div className="grid gap-12 sm:grid-cols-2 items-center">
            {/* Back Button */}
            <div>
              <Link
                href="/#case-studies"
                className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to All Works
              </Link>
            </div>

            {/* Next Project Link */}
            <div className="sm:text-right">
              <Link href={nextStudy.href} className="group block sm:ml-auto max-w-md">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric-blue">
                  Next Case Study
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 group-hover:text-electric-blue transition-colors duration-300">
                  {nextStudy.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                  {nextStudy.summary}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-electric-blue transition-colors duration-300">
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}


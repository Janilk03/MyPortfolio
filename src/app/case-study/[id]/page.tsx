import { caseStudies } from "@/lib/data";
import { notFound } from "next/navigation";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import Link from "next/link";
import { ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-electric-blue selection:text-white">
      
      {/* Spacer for Navbar */}
      <div className="h-28 md:h-32"></div>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center gap-2 text-sm font-medium text-slate-500" aria-label="Breadcrumb">
          <Link href="/#home" className="transition-colors hover:text-slate-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/#case-studies" className="transition-colors hover:text-slate-900">
            Works
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900" aria-current="page">
            {study.title}
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mb-16 md:mb-24">
          <div className="mb-6 inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm">
            {study.focus}
          </div>
          <h1 className="mb-8 font-heading text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            {study.title}
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-600">
            {study.summary}
          </p>

          <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Role</h3>
              <p className="font-medium text-slate-900">{study.role}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Timeline</h3>
              <p className="font-medium text-slate-900">{study.timeline}</p>
            </div>
            {study.platform && (
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Platform</h3>
                <p className="font-medium text-slate-900">{study.platform}</p>
              </div>
            )}
            {study.tools && (
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Tools</h3>
                <p className="font-medium text-slate-900">{study.tools}</p>
              </div>
            )}
            {!study.platform && !study.tools && (
              <div className="sm:col-span-2">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">Core Focus</h3>
                <p className="font-medium text-slate-900">{study.focus}</p>
              </div>
            )}
          </div>
        </header>

        {/* Image Showcase */}
        <div className="mb-20 w-full rounded-none bg-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-200/80">
          {study.heroImage ? (
            <ZoomableImage 
              src={study.heroImage} 
              alt={`${study.title} showcase`} 
            />
          ) : (
            <div className="flex aspect-video h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
              <p className="font-mono text-sm font-medium text-slate-400">Hero Image / Video Prototype Placeholder</p>
            </div>
          )}
        </div>

        {/* Content Sections */}
        {study.content ? (
          study.content
        ) : (
          <div className="grid gap-16 md:gap-24">
            <section>
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">The Challenge</h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                <p>{study.challenge}</p>
              </div>
            </section>

            <section>
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-slate-900">The Solution</h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                <p>{study.solution}</p>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-12">
              <h2 className="mb-8 font-heading text-3xl font-bold tracking-tight text-slate-900">Key Outcomes</h2>
              <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                {study.results?.map((result, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-electric-blue" />
                    <span className="text-slate-700 font-medium leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-24 flex border-t border-slate-200 pt-12">
          <Link
            href="/#case-studies"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to All Works
          </Link>
        </div>
      </article>
    </main>
  );
}

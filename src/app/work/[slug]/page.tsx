import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/content";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  AlertCircle,
  Sparkles,
  Cpu,
  HeartHandshake,
  TrendingUp,
  Layers,
  Lock,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

// `params` is read for a fully prerendered route (all slugs come from
// generateStaticParams above). Opt out of instant-navigation validation so
// Next doesn't flag it as a blocking segment in the dev overlay.
export const instant = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: `${study.title} — case study | =[ØVĒRKILL]= STUDIOS`,
    description: `${study.subtitle}. ${study.headlineOutcome}`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const story: {
    n: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    body: string;
    list?: string[];
    listLabel?: string;
    quote?: string;
  }[] = [
    {
      n: "01",
      label: "The challenge",
      icon: AlertCircle,
      body: study.challenge.overview,
      list: study.challenge.painPoints,
      listLabel: "Where it hurt",
    },
    {
      n: "02",
      label: "The approach",
      icon: Sparkles,
      body: study.approach.discovery,
      quote: study.approach.insight,
    },
    {
      n: "03",
      label: "The build",
      icon: Cpu,
      body: study.solution.whatWeBuilt,
      list: study.solution.coreFeatures,
      listLabel: "Core features",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section className="relative w-full pt-8 sm:pt-12 pb-10 sm:pb-14 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.06) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 75% 70% at 50% 0%, black 25%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 50% 0%, black 25%, transparent 78%)",
          }}
        />

        <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-[1400px] mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold font-display text-ink hover:text-ink/70 transition-colors mb-5 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All case studies</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill !text-[11px]">{study.industry}</span>
            <span className="pill pill-flame !text-[11px]">
              {study.heroVisualTag}
            </span>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-display bg-ink text-white hover:bg-ink/80 transition-colors"
              >
                <span>Visit live project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-flame" />
              </a>
            )}
          </div>

          <h1 className="text-[2.1rem] leading-[1.05] sm:text-5xl xl:text-6xl font-bold text-ink tracking-tight max-w-4xl">
            {study.title}
          </h1>
          <p className="mt-3 text-base sm:text-xl font-semibold text-ink">
            {study.subtitle}
          </p>
          <p className="mt-4 text-sm sm:text-base text-ink/75 leading-relaxed max-w-2xl">
            {study.previewDescription}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-3xl">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="card p-4 text-center"
              >
                <span className="block font-display font-bold text-xl sm:text-2xl text-ink leading-none">
                  {m.value}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink/70 mt-2">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Browser Mockup Preview */}
          {study.previewImage && (
            <div className="mt-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-ink/15 bg-black/5 shadow-2xl max-w-5xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-stone-100 border-b border-ink/10 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                {study.liveUrl && (
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-white border border-ink/10 text-xs text-ink/75 font-mono max-w-[260px] sm:max-w-md truncate">
                    <Lock className="w-3 h-3 text-flame-deep shrink-0" />
                    <span className="truncate">{study.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  </div>
                )}
                <span className="text-[11px] font-bold text-flame-deep uppercase tracking-wider font-mono hidden sm:inline">
                  Live System
                </span>
              </div>
              <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] overflow-hidden bg-stone-950">
                <Image
                  src={study.previewImage}
                  alt={`${study.title} live interface preview`}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Story + sticky system panel */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Narrative */}
            <div className="lg:col-span-8 space-y-6">
              {story.map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.n} className="card p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="grid place-items-center w-9 h-9 rounded-xl bg-sky-tint border border-ink/12 text-ink shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-ink tracking-tight">
                        {block.n} — {block.label}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                      {block.body}
                    </p>

                    {block.quote && (
                      <div className="mt-5 p-5 rounded-2xl bg-ink text-white">
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-flame block mb-1.5">
                          The insight
                        </span>
                        <p className="text-base sm:text-lg font-display font-semibold leading-snug">
                          &ldquo;{block.quote}&rdquo;
                        </p>
                      </div>
                    )}

                    {block.list && (
                      <div className="mt-5 space-y-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-flame" />
                          {block.listLabel}
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {block.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 p-3 rounded-2xl bg-sky-tint border border-ink/10 text-sm font-semibold text-ink"
                            >
                              <span className="mt-0.5 shrink-0 grid place-items-center w-4 h-4 rounded-full bg-flame text-ink">
                                <Check className="w-2.5 h-2.5" strokeWidth={4} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Experience */}
              <div className="card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-sky-tint border border-ink/12 text-ink shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-ink tracking-tight">
                    04 — The experience
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-sky-tint border border-ink/10">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 block mb-1.5">
                      For the customer
                    </span>
                    <p className="text-sm text-ink leading-relaxed">
                      {study.experience.customerPerspective}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-ink text-white">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-flame block mb-1.5">
                      For the team
                    </span>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      {study.experience.teamPerspective}
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcome */}
              <div className="card p-6 sm:p-8 relative overflow-hidden">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-flame via-[#ff8a33] to-flame"
                />
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-flame border border-flame-deep text-white shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-ink tracking-tight">
                    05 — The outcome
                  </h2>
                </div>

                <p className="text-base font-semibold text-ink leading-relaxed">
                  {study.outcome.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {study.outcome.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-tint border border-ink/10 text-sm font-bold text-ink"
                    >
                      <span className="shrink-0 grid place-items-center w-5 h-5 rounded-full bg-flame text-ink">
                        <Check className="w-3 h-3" strokeWidth={4} />
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky system panel */}
            <aside className="lg:col-span-4 w-full lg:sticky lg:top-24 space-y-5">
              <div className="card p-6">
                <div className="flex items-center gap-2.5 mb-1">
                  <Layers className="w-4 h-4 text-ink" />
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-ink">
                    06 — The system
                  </h3>
                </div>
                <p className="text-xs text-ink/70 mb-5">
                  The moving parts, wired into one reliable whole.
                </p>

                <div className="space-y-3">
                  {study.systemComponents.map((comp) => (
                    <div
                      key={comp.name}
                      className="p-4 rounded-2xl bg-sky-tint border border-ink/10"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-ink">
                          {comp.name}
                        </h4>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-ink/70">
                          {comp.role}
                        </span>
                      </div>
                      <p className="text-xs text-ink/75 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card card-ink p-6 text-white">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-flame block mb-1.5">
                  Similar bottleneck?
                </span>
                <h4 className="text-lg font-bold tracking-tight text-white leading-snug">
                  We&apos;ll adapt this blueprint to your business.
                </h4>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  No copy-paste templates — the proven architecture, rebuilt
                  around your exact constraints.
                </p>

                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold font-display bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all mt-4"
                  >
                    <span>View live project</span>
                    <ArrowUpRight className="w-4 h-4 text-flame" />
                  </a>
                )}

                <Link
                  href={`/start-a-project?blueprint=${study.slug}`}
                  className="btn btn-primary btn-sm w-full mt-3"
                >
                  <span>Start with this blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

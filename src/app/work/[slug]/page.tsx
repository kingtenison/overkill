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
import FinalCTA from "@/components/FinalCTA";

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

export const instant = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: `${study.title} — Case Study`,
    description: `${study.subtitle}. ${study.headlineOutcome}`,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  const story = [
    {
      n: "01",
      label: "The Challenge",
      icon: AlertCircle,
      body: study.challenge.overview,
      list: study.challenge.painPoints,
      listLabel: "Critical Bottlenecks",
    },
    {
      n: "02",
      label: "The Engineering Approach",
      icon: Sparkles,
      body: study.approach.discovery,
      quote: study.approach.insight,
    },
    {
      n: "03",
      label: "The System Build",
      icon: Cpu,
      body: study.solution.whatWeBuilt,
      list: study.solution.coreFeatures,
      listLabel: "Core Capabilities Engineered",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* ── Case Study Hero with Homepage Atmosphere ─────────────────────────── */}
      <section className="relative w-full pt-8 sm:pt-14 pb-10 sm:pb-16 overflow-hidden">
        {/* Background Atmosphere */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none dot-grid opacity-50"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 70% at 75% 30%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 75% 30%, black 20%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-32 right-[-5%] w-[500px] h-[500px] rounded-full bg-[#B7DBFF]/35 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 left-[-5%] w-[420px] h-[420px] rounded-full bg-flame/15 blur-3xl pointer-events-none"
        />

        {/* Floating Rotating Hexagon */}
        <div
          aria-hidden
          className="hidden md:block absolute right-[6%] top-1/3 w-[320px] aspect-square pointer-events-none opacity-40"
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full hero-spin text-[#000099]/25"
          >
            <polygon
              points="100,4 183,52 183,148 100,196 17,148 17,52"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="3 5"
            />
          </svg>
        </div>

        <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-[1400px] mx-auto">
          {/* Back button */}
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-ink hover:text-flame transition-colors mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Case Studies</span>
          </Link>

          {/* Badges line */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill !text-[11px] !py-1">{study.industry}</span>
            <span className="pill pill-flame !text-[11px] !py-1">
              {study.heroVisualTag}
            </span>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-display bg-ink text-white hover:bg-ink/80 transition-colors shadow-xs"
              >
                <span>Visit Live Production Site</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-flame" />
              </a>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-[2.2rem] leading-[1.05] sm:text-5xl xl:text-6xl font-extrabold font-display text-ink tracking-tight max-w-4xl">
            {study.title}
          </h1>

          <p className="mt-3 text-base sm:text-2xl font-bold text-flame-deep">
            {study.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-ink/75 font-medium leading-relaxed max-w-2xl">
            {study.previewDescription}
          </p>

          {/* KPI Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-3xl">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="card p-4 text-center border border-ink/10 bg-white/90 shadow-sm"
              >
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-ink leading-none">
                  {m.value}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink/65 mt-2">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Browser Mockup Preview */}
          {study.previewImage && (
            <div className="mt-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-ink/15 bg-black/5 shadow-2xl max-w-5xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-white/10 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                {study.liveUrl && (
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-stone-800 border border-white/10 text-xs text-white/80 font-mono max-w-[260px] sm:max-w-md truncate">
                    <Lock className="w-3 h-3 text-flame shrink-0" />
                    <span className="truncate">
                      {study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </div>
                )}
                <span className="text-[11px] font-bold text-flame uppercase tracking-wider font-mono hidden sm:inline">
                  Production Verified
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

      {/* ── Story Chapters & Sticky System Blueprint ─────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Story Chapters Column */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {story.map((block) => {
                const Icon = block.icon;
                return (
                  <div
                    key={block.n}
                    className="card p-6 sm:p-9 border border-ink/10 bg-white"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="grid place-items-center w-10 h-10 rounded-xl bg-flame/10 text-flame shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold font-display text-ink tracking-tight">
                        {block.n} — {block.label}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-medium">
                      {block.body}
                    </p>

                    {block.quote && (
                      <div className="mt-5 p-5 sm:p-6 rounded-2xl bg-ink text-white border border-ink/20">
                        <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-flame block mb-1.5">
                          Architectural Insight
                        </span>
                        <blockquote className="text-base sm:text-lg font-display font-semibold leading-snug">
                          &ldquo;{block.quote}&rdquo;
                        </blockquote>
                      </div>
                    )}

                    {block.list && (
                      <div className="mt-5 space-y-2.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-ink/70 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-flame" />
                          {block.listLabel}
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {block.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-sky-tint border border-ink/8 text-xs sm:text-sm font-semibold text-ink"
                            >
                              <span className="mt-0.5 shrink-0 grid place-items-center w-4 h-4 rounded-full bg-flame text-white">
                                <Check className="w-2.5 h-2.5" strokeWidth={3} />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* 04 — Experience Chapter */}
              <div className="card p-6 sm:p-9 border border-ink/10 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-flame/10 text-flame shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-display text-ink tracking-tight">
                    04 — The Operational Experience
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-sky-tint border border-ink/8">
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-ink/70 block mb-1.5">
                      For End Customers
                    </span>
                    <p className="text-xs sm:text-sm text-ink/85 font-medium leading-relaxed">
                      {study.experience.customerPerspective}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-ink text-white">
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-cyan-300 block mb-1.5">
                      For Staff &amp; Operators
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white/90 leading-relaxed">
                      {study.experience.teamPerspective}
                    </p>
                  </div>
                </div>
              </div>

              {/* 05 — Outcome Chapter */}
              <div className="card p-6 sm:p-9 border border-ink/10 bg-white relative overflow-hidden">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-flame via-[#ff8a33] to-flame"
                />
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-flame text-white shrink-0 shadow-sm shadow-flame/30">
                    <TrendingUp className="w-5 h-5" />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-display text-ink tracking-tight">
                    05 — The Outcome &amp; Impact
                  </h2>
                </div>

                <p className="text-base sm:text-lg font-bold text-ink leading-relaxed">
                  {study.outcome.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {study.outcome.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-tint border border-ink/8 text-xs sm:text-sm font-bold text-ink"
                    >
                      <span className="shrink-0 grid place-items-center w-5 h-5 rounded-full bg-flame text-white">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky System Blueprint Sidebar */}
            <aside className="lg:col-span-4 w-full lg:sticky lg:top-24 space-y-6">
              <div className="card p-6 sm:p-7 border border-ink/10 bg-white">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-flame" />
                  <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-ink">
                    06 — System Architecture
                  </h3>
                </div>
                <p className="text-xs text-ink/70 mb-5 font-medium">
                  The integrated technical layers powering this production build.
                </p>

                <div className="space-y-3">
                  {study.systemComponents.map((comp) => (
                    <div
                      key={comp.name}
                      className="p-3.5 rounded-2xl bg-sky-tint border border-ink/8"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-xs font-bold font-display text-ink">
                          {comp.name}
                        </h4>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-flame">
                          {comp.role}
                        </span>
                      </div>
                      <p className="text-xs text-ink/75 leading-relaxed font-medium">
                        {comp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Adapt Blueprint CTA Box */}
              <div className="card card-ink p-6 sm:p-7 text-white border border-white/10 shadow-2xl relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-royal/40 blur-3xl pointer-events-none"
                />

                <div className="relative z-10 space-y-3">
                  <span className="pill pill-flame !text-[10px]">
                    Facing A Similar Bottleneck?
                  </span>
                  <h4 className="text-lg font-bold font-display tracking-tight text-white leading-snug">
                    We&apos;ll engineer this blueprint for your company.
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed font-medium">
                    No template copying — we adapt the proven architecture and data flows around your exact business model.
                  </p>

                  <div className="pt-2 space-y-2.5">
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-white border-white/20 hover:bg-white/10 w-full justify-center text-xs"
                      >
                        <span>Inspect Live Production</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-flame" />
                      </a>
                    )}

                    <Link
                      href={`/start-a-project?blueprint=${study.slug}`}
                      className="btn btn-primary w-full justify-center text-xs"
                    >
                      <span>Start with this Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────── */}
      <FinalCTA />
    </div>
  );
}

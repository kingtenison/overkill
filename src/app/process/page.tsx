import React from "react";
import Link from "next/link";
import {
  Compass,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { PROCESS_STAGES } from "@/data/content";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From problem to launch in six clear stages — discover, understand, design, build, launch, evolve. No black boxes, no 30-page briefs.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
};

const STAGE_METRICS = [
  { timing: "Days 1 – 2", deliverable: "Discovery Memo & Scope Outline", highlightColor: "text-cyan-400" },
  { timing: "Days 3 – 5", deliverable: "Technical Architecture & Data Schema", highlightColor: "text-indigo-400" },
  { timing: "Week 2", deliverable: "Interactive Figma Wireframes & UX Flow", highlightColor: "text-amber-400" },
  { timing: "Weeks 2 – 4", deliverable: "Working Staging Builds Every Friday", highlightColor: "text-flame" },
  { timing: "Production Day", deliverable: "Zero-Downtime Deploy & Staff Training", highlightColor: "text-emerald-400" },
  { timing: "30-Day + Ongoing", deliverable: "Included Warranty & Growth Tuning", highlightColor: "text-sky-400" },
];

export default function ProcessPage() {
  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Delivery Operating System"
        title={
          <>
            From problem to launch,{" "}
            <span className="relative inline-block text-ink">
              <span>in six transparent steps</span>.
              <svg
                aria-hidden
                viewBox="0 0 300 18"
                preserveAspectRatio="none"
                className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[0.16em] hero-underline"
              >
                <path
                  d="M3 12 C 70 3, 160 3, 297 9"
                  fill="none"
                  stroke="#FF6600"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </>
        }
        lede="You always know exactly what is happening, what gets built next, and what you are signing off on. No 30-page briefs, no black boxes, no junior delegation."
        stats={[
          { value: "0", label: "Black boxes" },
          { value: "Every Friday", label: "Live staging demo" },
          { value: "30-Day", label: "Post-launch warranty" },
        ]}
      />

      {/* ── Visual Timeline & Process Stages ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          {/* Section Subhead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="space-y-2">
              <span className="pill">The Workflow</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
                How work actually gets done.
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-ink/70 max-w-md">
              Fixed milestones approved up front. You only sign off and pay as tangible, working software is verified.
            </p>
          </div>

          {/* 6 Stage Stations Grid */}
          <div className="space-y-6 sm:space-y-8">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = ICONS[stage.icon] ?? Compass;
              const meta = STAGE_METRICS[idx];
              const isDark = idx % 2 === 0; // Alternating high-contrast visual cadence

              return (
                <div
                  key={stage.number}
                  className={`relative rounded-3xl p-6 sm:p-9 lg:p-10 transition-all duration-300 reveal ${
                    isDark
                      ? "card-ink text-white border border-white/10 shadow-xl shadow-ink/20"
                      : "card text-ink border border-ink/10 bg-white shadow-lg shadow-ink/5"
                  }`}
                  style={{ "--reveal-delay": `${(idx % 3) * 70}ms` } as React.CSSProperties}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    {/* Left: Stage identity badge & Step Number */}
                    <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid place-items-center w-12 h-12 rounded-2xl ${
                            isDark
                              ? "bg-flame text-white shadow-lg shadow-flame/30"
                              : "bg-[#000099] text-white shadow-md shadow-[#000099]/20"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </span>
                        <div>
                          <span
                            className={`pill !text-[11px] !py-0.5 !px-2.5 ${
                              isDark ? "pill-flame" : ""
                            }`}
                          >
                            Stage {stage.number}
                          </span>
                          <span
                            className={`block text-[11px] font-mono font-bold mt-1 ${
                              isDark ? "text-cyan-300" : "text-flame-deep"
                            }`}
                          >
                            {meta.timing}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-3xl sm:text-4xl font-black opacity-15">
                        {stage.number}
                      </span>
                    </div>

                    {/* Middle: Headline, Description & Detail */}
                    <div className="lg:col-span-5 space-y-2.5">
                      <h3
                        className={`text-xl sm:text-2xl font-extrabold font-display tracking-tight ${
                          isDark ? "text-white" : "text-ink"
                        }`}
                      >
                        {stage.headline}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed ${
                          isDark ? "text-white/80" : "text-ink/80"
                        }`}
                      >
                        {stage.description}
                      </p>
                      <p
                        className={`text-xs font-semibold italic ${
                          isDark ? "text-white/60" : "text-ink/60"
                        }`}
                      >
                        ✦ {stage.detail}
                      </p>
                    </div>

                    {/* Right: Deliverable Box & Milestone Verification */}
                    <div
                      className={`lg:col-span-4 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between gap-3 ${
                        isDark
                          ? "bg-white/[0.05] border-white/10"
                          : "bg-sky-tint border-ink/8 shadow-xs"
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-flame flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Key Deliverable
                        </span>
                        <p
                          className={`text-xs sm:text-sm font-bold ${
                            isDark ? "text-white" : "text-ink"
                          }`}
                        >
                          {meta.deliverable}
                        </p>
                      </div>

                      <div className={`pt-2 border-t ${isDark ? "border-white/10 text-white/60" : "border-ink/10 text-ink/55"} flex items-center justify-between text-[11px] font-bold`}>
                        <span>Sign-off required</span>
                        <span className="font-mono text-[10px] text-flame">Stage {stage.number} / 06</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Studio Delivery Commitments ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card card-ink p-8 sm:p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-royal/40 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-flame/20 blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="pill pill-flame">The Anti-Agency Rules</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Why building with ØVĒRKILL feels completely different.
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Traditional agencies bury you under bloated discovery decks, junior handoffs, and unexpected scope-creep invoices. We threw out that playbook on day one.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Fixed Milestone Pricing",
                    desc: "You approve scope and cost before a line of code is written. No surprise hourly charges.",
                  },
                  {
                    title: "Live Weekly Demos",
                    desc: "Every Friday you receive a private URL to test working features in production quality.",
                  },
                  {
                    title: "100% Code & Asset Ownership",
                    desc: "You own the GitHub repos, database access, design tokens, and domains with zero lock-in.",
                  },
                  {
                    title: "30-Day Post-Launch Warranty",
                    desc: "We stay in your corner after launch to monitor production traffic and polish edge cases.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-flame" />
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link href="/start-a-project" className="btn btn-primary">
                  <span>Start your project intake</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/pricing" className="btn btn-ghost text-white border-white/20 hover:bg-white/10">
                  <span>Explore milestone pricing</span>
                  <ArrowUpRight className="w-4 h-4 text-flame" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <FinalCTA />
    </div>
  );
}

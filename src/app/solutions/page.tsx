import React from "react";
import Link from "next/link";
import { SOLUTION_CATEGORIES } from "@/data/content";
import {
  Globe,
  LayoutDashboard,
  AppWindow,
  Sparkles,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions & Services",
  description:
    "Five ways we build: websites & stores, business systems, web apps & products, automation & AI, and modernization of legacy systems.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  LayoutDashboard,
  AppWindow,
  Sparkles,
  RefreshCw,
};

export default function SolutionsPage() {
  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Solutions & Capabilities"
        title={
          <>
            Pick where it hurts.{" "}
            <span className="relative inline-block text-ink">
              <span>We engineer the fix.</span>
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
        lede="Organized around real operational bottlenecks, never technical buzzwords. Discover the exact digital systems, custom platforms, and automation we engineer for your business."
        stats={[
          { value: "24h", label: "Initial triage" },
          { value: "100%", label: "Code ownership" },
          { value: "2–4 wks", label: "Typical launch" },
        ]}
      />

      {/* ── Quick Jump Filter Bar ─────────────────────────────── */}
      <section className="w-full pb-8 sm:pb-12">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-ink/60 shrink-0 pr-2">
              Jump to:
            </span>
            {SOLUTION_CATEGORIES.map((cat, idx) => {
              const Icon = ICONS[cat.iconName] ?? Globe;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.slug}`}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/80 hover:bg-white text-ink border border-ink/10 hover:border-ink/30 transition-all shadow-xs shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-flame" />
                  <span>{cat.title}</span>
                  <span className="text-[10px] text-ink/40 font-mono">0{idx + 1}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Deep-Dive Bento Stations ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto space-y-8 sm:space-y-12">
          {SOLUTION_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS[cat.iconName] ?? Globe;
            const isDark = idx === 0 || idx === 3; // Strategic alternating dark bento cards matching homepage

            return (
              <article
                id={cat.slug}
                key={cat.id}
                className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 scroll-mt-28 transition-all duration-300 reveal ${
                  isDark
                    ? "card-ink text-white border border-white/10 shadow-2xl shadow-ink/20"
                    : "card text-ink border border-ink/10 bg-white/95 shadow-lg shadow-ink/5"
                }`}
                style={{ "--reveal-delay": `${(idx % 3) * 80}ms` } as React.CSSProperties}
              >
                {/* Background glow orb for dark cards */}
                {isDark && (
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-royal/40 blur-3xl pointer-events-none"
                  />
                )}

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Problem, Story & Core Outcome */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Header line */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
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
                            Category 0{idx + 1}
                          </span>
                          <span
                            className={`block text-xs font-semibold mt-0.5 ${
                              isDark ? "text-white/70" : "text-ink/60"
                            }`}
                          >
                            {cat.targetAudience}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-2xl font-black opacity-20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h2
                        className={`text-2xl sm:text-4xl font-extrabold font-display tracking-tight ${
                          isDark ? "text-white" : "text-ink"
                        }`}
                      >
                        {cat.title}
                      </h2>
                      <p
                        className={`mt-2 text-base sm:text-lg font-medium leading-relaxed ${
                          isDark ? "text-white/80" : "text-ink/80"
                        }`}
                      >
                        {cat.tagline}
                      </p>
                    </div>

                    {/* Problem vs Outcome Contrast Blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Bottleneck block */}
                      <div
                        className={`rounded-2xl p-4 sm:p-5 border ${
                          isDark
                            ? "bg-white/[0.05] border-white/10"
                            : "bg-[#F3F7FC] border-ink/8"
                        }`}
                      >
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-flame flex items-center gap-1.5 mb-2">
                          <AlertCircle className="w-3.5 h-3.5" />
                          The Friction
                        </span>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isDark ? "text-white/75" : "text-ink/75"
                          }`}
                        >
                          {cat.problem}
                        </p>
                      </div>

                      {/* Delivered Outcome block */}
                      <div
                        className={`rounded-2xl p-4 sm:p-5 border ${
                          isDark
                            ? "bg-[#000099]/30 border-[#000099]/50"
                            : "bg-ink text-white border-ink"
                        }`}
                      >
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan-300 flex items-center gap-1.5 mb-2">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          The Result
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                          {cat.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Action Hub */}
                  <div
                    className={`lg:col-span-5 rounded-2xl p-6 sm:p-7 border flex flex-col justify-between gap-6 ${
                      isDark
                        ? "bg-white/[0.04] border-white/10"
                        : "bg-white border-ink/10 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className={`flex items-center justify-between pb-3 border-b ${isDark ? "border-white/10" : "border-ink/10"}`}>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isDark ? "text-white/60" : "text-ink/60"
                          }`}
                        >
                          Capabilities Included
                        </span>
                        <span className="text-[10px] font-mono font-bold text-flame">
                          {cat.capabilities.length} Features
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2.5">
                        {cat.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm font-semibold ${
                              isDark ? "text-white/90" : "text-ink"
                            }`}
                          >
                            <span className="mt-0.5 shrink-0 grid place-items-center w-4 h-4 rounded-full bg-flame/15 text-flame">
                              <span className="w-1.5 h-1.5 rounded-full bg-flame" />
                            </span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-2">
                      <Link
                        href={`/start-a-project?solution=${cat.slug}`}
                        className={`btn w-full justify-center ${
                          isDark ? "btn-primary" : "btn-primary"
                        }`}
                      >
                        <span>Start with {cat.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <div className={`flex items-center justify-center gap-4 text-[11px] font-bold ${isDark ? "text-white/60" : "text-ink/60"}`}>
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-flame" />
                          Fixed Milestones
                        </span>
                        <span>•</span>
                        <span>You own 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Studio Engineering Principles Bento ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="pill">The ØVĒRKILL Standard</span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
              Software built to survive the real world.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink/75 font-medium">
              Every system we engineer follows four strict architecture commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                title: "Sub-Second Speed",
                desc: "Edge-rendered, highly optimized assets, and zero bloated template weight.",
              },
              {
                icon: ShieldCheck,
                title: "100% IP Ownership",
                desc: "All source code, repo access, database schemas, and credentials belong to you.",
              },
              {
                icon: Cpu,
                title: "Type-Safe Modern Stack",
                desc: "Built with production Next.js, React, TypeScript, and robust API contracts.",
              },
              {
                icon: CheckCircle2,
                title: "Post-Launch Warranty",
                desc: "30 days of dedicated bug fixes and tuning included with every completed milestone.",
              },
            ].map((p, i) => {
              const PIcon = p.icon;
              return (
                <div
                  key={p.title}
                  className="card p-6 flex flex-col justify-between gap-4 reveal"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <div className="space-y-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-flame/10 text-flame">
                      <PIcon className="w-5 h-5" />
                    </span>
                    <h3 className="text-base font-extrabold text-ink font-display">
                      {p.title}
                    </h3>
                    <p className="text-xs text-ink/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <FinalCTA />
    </div>
  );
}

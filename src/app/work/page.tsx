"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/content";
import {
  ArrowRight,
  ArrowUpRight,
  Filter,
  Lock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

export default function WorkPage() {
  const industries = [
    "All",
    ...Array.from(new Set(CASE_STUDIES.map((cs) => cs.industry))),
  ];
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.industry === filter);

  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Selected Engineering Showcase"
        title={
          <>
            Real operational problems.{" "}
            <span className="relative inline-block text-ink">
              <span>Measured outcomes</span>.
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
        lede="Real software built to eliminate real operational friction. No fictional demo mockups — explore what was broken, the architecture we built, and the measurable business outcome."
        stats={[
          { value: "6+", label: "Live systems shipped" },
          { value: "100%", label: "Custom engineered" },
          { value: "Zero", label: "Template shortcuts" },
        ]}
      />

      {/* ── Filter Bar ─────────────────────────────── */}
      <section className="w-full pb-8 sm:pb-12">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink/70 shrink-0 pr-2">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-flame text-white">
                <Filter className="w-3 h-3" />
              </span>
              Sector:
            </span>
            {industries.map((cat) => {
              const count =
                cat === "All"
                  ? CASE_STUDIES.length
                  : CASE_STUDIES.filter((cs) => cs.industry === cat).length;
              const isActive = filter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={isActive}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold font-display border transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-ink text-white border-ink shadow-md"
                      : "bg-white text-ink border-ink/15 hover:border-ink hover:bg-sky-tint"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-flame text-white" : "bg-ink/10 text-ink/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Case Study Bento Grid ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filtered.map((study, i) => {
              const isFeatured = i === 0 || i === 3; // Strategic alternating dark cards matching homepage

              return (
                <article
                  key={study.id}
                  className={`rounded-3xl p-6 sm:p-9 flex flex-col justify-between gap-6 relative transition-all duration-300 reveal ${
                    isFeatured
                      ? "card-ink text-white border border-white/10 shadow-2xl shadow-ink/20"
                      : "card text-ink border border-ink/10 bg-white shadow-lg hover:shadow-xl"
                  }`}
                  style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
                >
                  {/* Atmospheric orb for featured dark cards */}
                  {isFeatured && (
                    <div
                      aria-hidden
                      className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-royal/40 blur-3xl pointer-events-none"
                    />
                  )}

                  <div className="relative z-10 space-y-4">
                    {/* Header line with industry & live project badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`pill !text-[11px] !py-1 ${
                            isFeatured ? "pill-flame" : ""
                          }`}
                        >
                          {study.industry}
                        </span>
                        <span
                          className={`text-xs font-mono font-bold hidden sm:inline ${
                            isFeatured ? "text-white/60" : "text-ink/60"
                          }`}
                        >
                          {study.heroVisualTag}
                        </span>
                      </div>

                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold font-display bg-flame text-white hover:bg-flame-deep transition-colors shadow-xs"
                          title="Open live production project in new tab"
                        >
                          <span>Live System</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <Link
                        href={`/work/${study.slug}`}
                        className={`group inline-block hover:text-flame transition-colors ${
                          isFeatured ? "text-white" : "text-ink"
                        }`}
                      >
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight flex items-center gap-2">
                          <span>{study.title}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-flame" />
                        </h2>
                      </Link>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isFeatured ? "text-cyan-300" : "text-flame-deep"
                        }`}
                      >
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Preview Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isFeatured ? "text-white/80" : "text-ink/75"
                      }`}
                    >
                      {study.previewDescription}
                    </p>

                    {/* Quick Metrics Bar */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        {study.metrics.map((m) => (
                          <div
                            key={m.label}
                            className={`p-2.5 rounded-xl border text-center ${
                              isFeatured
                                ? "bg-white/[0.05] border-white/10"
                                : "bg-sky-tint border-ink/8"
                            }`}
                          >
                            <span
                              className={`block font-display font-extrabold text-sm sm:text-base leading-none ${
                                isFeatured ? "text-white" : "text-ink"
                              }`}
                            >
                              {m.value}
                            </span>
                            <span
                              className={`block text-[9px] font-bold uppercase tracking-wider mt-1 ${
                                isFeatured ? "text-white/60" : "text-ink/60"
                              }`}
                            >
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Live Website Preview Window */}
                    {study.previewImage && (
                      <div className="relative rounded-2xl overflow-hidden border border-ink/15 shadow-inner group/preview my-2 bg-stone-950">
                        <div className="flex items-center justify-between px-3.5 py-2 bg-stone-900 border-b border-white/10 text-xs text-white/70">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          </div>
                          {study.liveUrl && (
                            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-stone-800 border border-white/10 text-[10px] text-white/80 font-mono truncate max-w-[200px]">
                              <Lock className="w-2.5 h-2.5 text-flame shrink-0" />
                              <span className="truncate">
                                {study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                              </span>
                            </div>
                          )}
                          <span className="text-[10px] font-bold text-flame uppercase tracking-wider font-mono">
                            Verified Production
                          </span>
                        </div>
                        <div className="relative w-full h-44 sm:h-56 overflow-hidden">
                          <Image
                            src={study.previewImage}
                            alt={`${study.title} live interface preview`}
                            fill
                            unoptimized
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    )}

                    {/* Problem & Solved Split Comparison */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div
                        className={`rounded-2xl p-3.5 border ${
                          isFeatured
                            ? "bg-white/[0.04] border-white/10"
                            : "bg-red-500/[0.04] border-red-500/15"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                          <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-red-500">
                            The Bottleneck
                          </span>
                        </div>
                        <p
                          className={`text-xs leading-relaxed font-medium line-clamp-3 ${
                            isFeatured ? "text-white/75" : "text-ink/80"
                          }`}
                        >
                          {study.challenge.overview}
                        </p>
                      </div>

                      <div
                        className={`rounded-2xl p-3.5 border ${
                          isFeatured
                            ? "bg-[#000099]/30 border-[#000099]/50"
                            : "bg-emerald-500/[0.05] border-emerald-500/20"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span
                            className={`text-[10px] font-mono font-extrabold uppercase tracking-wider ${
                              isFeatured ? "text-cyan-300" : "text-emerald-600"
                            }`}
                          >
                            The Engineered Fix
                          </span>
                        </div>
                        <p
                          className={`text-xs leading-relaxed font-medium line-clamp-3 ${
                            isFeatured ? "text-white/85" : "text-ink/85"
                          }`}
                        >
                          {study.solution.whatWeBuilt}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Hub */}
                  <div className={`relative z-10 flex items-center justify-between gap-3 pt-4 border-t ${isFeatured ? "border-white/10" : "border-ink/10"}`}>
                    <Link
                      href={`/work/${study.slug}`}
                      className={`btn btn-sm ${
                        isFeatured ? "btn-primary" : "btn-primary"
                      }`}
                    >
                      <span>Read Story &amp; Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-extrabold font-display hover:text-flame transition-colors ${
                          isFeatured ? "text-white/80" : "text-ink/80"
                        }`}
                      >
                        <span>Visit live</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-flame" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 card p-8 max-w-md mx-auto">
              <p className="text-sm font-bold text-ink">
                No case studies found in this category.
              </p>
              <button
                onClick={() => setFilter("All")}
                className="mt-3 btn btn-ghost btn-sm"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Studio Architecture Commitment Bento ── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card p-6 sm:p-10 border border-ink/10 bg-white text-center max-w-3xl mx-auto space-y-4">
            <span className="pill pill-flame">Zero Shortcuts</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
              Every system is engineered from clean code.
            </h2>
            <p className="text-xs sm:text-sm font-medium text-ink/75 leading-relaxed">
              We never resell off-the-shelf templates or bloated WordPress plugins. You receive bespoke, type-safe Next.js architecture built to scale with your team and business without technical debt.
            </p>
            <div className="pt-2">
              <Link href="/start-a-project" className="btn btn-primary">
                <span>Start Your Project Intake</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <FinalCTA />
    </div>
  );
}

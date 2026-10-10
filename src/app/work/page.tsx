"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/content";
import { ArrowRight, ArrowUpRight, Filter, Lock } from "lucide-react";
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
      <PageHero
        label="Work"
        title={
          <>
            Real problems. <span className="marker">Measured outcomes</span>.
          </>
        }
        lede="Real software built to solve real business problems. Here is what was broken, and how we fixed it."
      />

      {/* Filter pills */}
      <section className="w-full pb-8">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <span className="flex items-center gap-2 text-xs font-extrabold text-ink shrink-0 pr-1">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-flame text-ink">
                <Filter className="w-3 h-3" />
              </span>
              Filter
            </span>
            {industries.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold font-display border transition-all ${
                  filter === cat
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-ink border-ink/15 hover:border-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {filtered.map((study, i) => (
              <article
                key={study.id}
                className="card card-hover p-6 sm:p-8 flex flex-col gap-5 reveal"
                style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="pill !text-[11px] !py-1.5">
                    {study.industry}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-ink/70 hidden sm:inline">
                      {study.heroVisualTag}
                    </span>
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill pill-flame !text-[10px] !py-1 flex items-center gap-1 hover:opacity-85 transition-opacity"
                        title="Open live project in new tab"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Link
                    href={`/work/${study.slug}`}
                    className="hover:text-flame-deep transition-colors"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                      {study.title}
                    </h2>
                  </Link>
                  <p className="text-sm font-semibold text-ink/75">
                    {study.subtitle}
                  </p>
                </div>

                <p className="text-sm text-ink/75 leading-relaxed">
                  {study.previewDescription}
                </p>

                {/* Live Website Preview Window */}
                {study.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden border border-ink/15 bg-black/5 shadow-inner group/preview my-1">
                    <div className="flex items-center justify-between px-3.5 py-2 bg-stone-100/90 border-b border-ink/10 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      {study.liveUrl && (
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-ink/10 text-[11px] text-ink/70 font-mono truncate max-w-[200px]">
                          <Lock className="w-2.5 h-2.5 text-flame-deep shrink-0" />
                          <span className="truncate">{study.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                        </div>
                      )}
                      <span className="text-[10px] font-bold text-flame-deep uppercase tracking-wider font-mono">
                        Live Preview
                      </span>
                    </div>
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-stone-950">
                      <Image
                        src={study.previewImage}
                        alt={`${study.title} live interface preview`}
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                )}

                {/* Problem & Solved Split Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="rounded-2xl p-4 bg-red-500/[0.04] border border-red-500/15 space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600">
                        The Problem
                      </span>
                    </div>
                    <p className="text-xs text-ink/80 leading-relaxed font-medium">
                      {study.challenge.overview}
                    </p>
                  </div>

                  <div className="rounded-2xl p-4 bg-emerald-500/[0.05] border border-emerald-500/20 space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                        What It Solved
                      </span>
                    </div>
                    <p className="text-xs text-ink/85 leading-relaxed font-medium">
                      {study.solution.whatWeBuilt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-ink/10">
                  <Link
                    href={`/work/${study.slug}`}
                    className="group inline-flex items-center gap-1.5 text-xs font-bold font-display text-ink hover:text-flame-deep transition-colors"
                  >
                    <span>Read full story breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 text-flame-deep transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-extrabold font-display text-flame-deep hover:text-flame transition-colors"
                    >
                      <span>Visit live site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-sm font-bold text-ink/70 py-12">
              No case studies in this industry yet.
            </p>
          )}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

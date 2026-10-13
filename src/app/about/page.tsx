import React from "react";
import Link from "next/link";
import {
  HeartHandshake,
  Eye,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "We build websites, business systems and automation around how your business actually works. You describe the problem — we handle the tech.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Genuine Care",
    tagline: "Your business on the line.",
    body: "We treat your software, timelines, and capital like our own reputation is at stake. No vanity metrics or bloated invoices.",
    accentColor: "text-flame bg-flame/10",
  },
  {
    icon: Eye,
    title: "Obsessive Craft",
    tagline: "Micro-interactions & ergonomics.",
    body: "From mobile touch feedback to sub-second load times and rock-solid database schemas that hold up under heavy real-world volume.",
    accentColor: "text-cyan-400 bg-cyan-400/10",
  },
  {
    icon: CheckCircle2,
    title: "Total Ownership",
    tagline: "No blame-shifting, zero lock-in.",
    body: "We own the architecture from kickoff through deployment. When complete, all source code, design assets, and repositories belong to you 100%.",
    accentColor: "text-indigo-400 bg-indigo-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Relentless Persistence",
    tagline: "Until it feels effortless.",
    body: "We don't quit when the technical requirement is barely satisfied. We keep testing and refining until the user experience feels like second nature.",
    accentColor: "text-emerald-400 bg-emerald-400/10",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="About ØVĒRKILL Studios"
        title={
          <>
            We don&apos;t stop at{" "}
            <span className="relative inline-block text-ink">
              <span>good enough</span>.
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
        lede="ØVĒRKILL is an independent digital engineering studio. We solve real operational bottlenecks with custom software, business platforms, and automation — explained in plain English."
        stats={[
          { value: "100%", label: "Code you own" },
          { value: "0", label: "Boilerplate templates" },
          { value: "24h", label: "Guaranteed reply" },
        ]}
      />

      {/* ── Manifesto & The Philosophy Bento ─────────────────────────────── */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Story Card */}
            <div className="lg:col-span-7 card p-6 sm:p-10 flex flex-col justify-between gap-6 border border-ink/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="pill pill-flame">The Philosophy</span>
                  <span className="text-xs font-mono font-bold text-ink/50">Why ØVĒRKILL?</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
                  ØVĒRKILL does not mean over-engineering.
                </h2>

                <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-medium">
                  Most software agencies stop the second a task is technically checked off in their ticket tracker — regardless of whether the system actually solves your daily headaches.
                </p>

                <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-medium">
                  To us, <strong className="text-ink font-bold">ØVĒRKILL</strong> means doing more than the minimum necessary. We listen carefully, identify root bottlenecks, write clean production code, and polish the workflow until it delivers an undeniable competitive advantage.
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 flex flex-wrap items-center gap-4 text-xs font-bold text-ink/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-flame" />
                  No outsourced teams
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  No black box retainers
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Full IP handover
                </span>
              </div>
            </div>

            {/* Dark Quote & Conviction Card */}
            <div className="lg:col-span-5 card card-ink p-6 sm:p-10 text-white flex flex-col justify-between gap-6 border border-white/10 shadow-2xl relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-royal/40 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-flame/20 blur-3xl pointer-events-none"
              />

              <div className="relative z-10 space-y-4">
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-flame block">
                  Studio Conviction
                </span>

                <blockquote className="text-xl sm:text-2xl font-display font-bold leading-snug text-white">
                  &ldquo;Technology should make your business simpler, not more exhausting. You don&apos;t need to know the technical jargon — tell us what&apos;s broken, and we&apos;ll build the system that fixes it.&rdquo;
                </blockquote>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span className="font-semibold">Hansen Addy Joy</span>
                <span className="font-mono text-flame font-bold">Founder &amp; Principal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Studio Principles ─────────────────────────────── */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="space-y-2">
              <span className="pill">How We Work</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
                Four standards we refuse to compromise.
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-ink/70 max-w-md">
              Standards baked directly into every contract, milestone agreement, and line of code we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card card-hover p-6 flex flex-col justify-between gap-4 border border-ink/10 bg-white/95 shadow-sm reveal"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <div className="space-y-3">
                    <span className={`grid place-items-center w-11 h-11 rounded-2xl ${v.accentColor} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold font-display text-ink">
                        {v.title}
                      </h3>
                      <p className="text-xs font-semibold text-flame-deep mt-0.5">
                        {v.tagline}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Comparison Bento: Agency BS vs ØVĒRKILL Standard ── */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card p-6 sm:p-10 border border-ink/10 bg-white">
            <div className="max-w-2xl mb-8 space-y-2">
              <span className="pill pill-flame">Direct Comparison</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                Traditional Agency vs. ØVĒRKILL Studios
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-ink/70">
                How we protect your budget, timeline, and sanity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Traditional Agency */}
              <div className="rounded-2xl p-5 sm:p-6 bg-red-50/50 border border-red-200/60 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                  ✕ The Traditional Agency Model
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    Pitch by founders, then handed off to junior interns.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    Vague hourly estimates that magically double during build.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    Proprietary templates or lock-in to monthly maintenance hostage fees.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    Radio silence for weeks between milestone meetings.
                  </li>
                </ul>
              </div>

              {/* ØVĒRKILL Way */}
              <div className="rounded-2xl p-5 sm:p-6 bg-emerald-50/50 border border-emerald-200/60 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                  ✓ The ØVĒRKILL Standard
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-ink/90 font-semibold">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    You work directly with the senior engineer architecting your system.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    Fixed milestone scope and price agreed before coding begins.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    100% code ownership, modern Next.js/TypeScript stack, zero lock-in.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    Working staging build every single Friday and 24h reply SLA.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Profile ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card p-6 sm:p-10 border border-ink/10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-3xl bg-[#000099] grid place-items-center mb-4 shadow-xl shadow-[#000099]/20 border-2 border-white">
                  <span className="font-display font-extrabold text-4xl text-white">
                    HJ
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-ink">
                  Hansen Addy Joy
                </h3>
                <p className="text-xs font-bold text-flame mt-0.5">
                  Founder &amp; Principal Systems Engineer
                </p>
                <p className="text-[11px] text-ink/60 mt-1">
                  Accra, Ghana • Global Clients
                </p>
              </div>

              <div className="md:col-span-8 space-y-4">
                <span className="pill !text-[11px]">The Engineer Behind ØVĒRKILL</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
                  Real operational friction, solved by a real partner.
                </h3>
                <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-medium">
                  Hansen started ØVĒRKILL Studios to be the exact partner he wished existed: one that speaks plain English, targets real business bottlenecks instead of vanity flair, and genuinely cares about system performance long after deployment.
                </p>
                <div className="pt-4 border-t border-ink/10 flex flex-wrap items-center gap-4">
                  <a
                    href="https://portfolio-roan-six-92.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <span>View Hansen&apos;s Engineering Portfolio</span>
                    <ArrowUpRight className="w-4 h-4 text-flame" />
                  </a>
                  <Link href="/start-a-project" className="btn btn-primary btn-sm">
                    <span>Book a Discovery Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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

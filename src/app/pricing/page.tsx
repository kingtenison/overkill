"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRICING_TIERS, FAQS } from "@/data/content";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Layers,
  Database,
  Lock,
  Clock,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

const QUESTIONS = [
  {
    key: "scope",
    label: "What are we building?",
    options: [
      { id: "website", label: "Brand website / high-converting landing page" },
      { id: "web-app", label: "Custom web app or customer portal" },
      { id: "internal", label: "Internal operations hub & staff dashboard" },
      { id: "enterprise", label: "Multi-platform ecosystem & legacy revamp" },
    ],
  },
  {
    key: "users",
    label: "Who are the primary users?",
    options: [
      { id: "public", label: "Public visitors & prospective clients" },
      { id: "portal", label: "Logged-in customers & accounts" },
      { id: "staff", label: "Internal team, managers & administrators" },
    ],
  },
  {
    key: "integrations",
    label: "Required integrations & complexity?",
    options: [
      { id: "none", label: "Lead forms, analytics & email routing" },
      { id: "payments", label: "Stripe, bookings, appointments & calendar" },
      { id: "complex", label: "Custom CRM, AI assistants & legacy data sync" },
    ],
  },
] as const;

const COST_FACTORS = [
  {
    icon: Layers,
    title: "Scope & User Surfaces",
    body: "A single-page marketing site moves faster than a system with separate dedicated portals for clients, staff, and management.",
  },
  {
    icon: Database,
    title: "Integrations & APIs",
    body: "Wiring standard Stripe checkouts or Calendly is fast. Bespoke real-time sync engines and custom webhooks take careful engineering.",
  },
  {
    icon: Lock,
    title: "Data & Migration",
    body: "Starting fresh with a clean schema is swift. Cleaning and migrating five years of messy spreadsheet history is precision work.",
  },
  {
    icon: Clock,
    title: "Timeline & Velocity",
    body: "Our standard 2–4 week cadence leaves plenty of room for rigorous testing. Compressed emergency sprints need dedicated engineering time.",
  },
];

export default function PricingPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({
    scope: "web-app",
    users: "portal",
    integrations: "payments",
  });

  const estimatedTier = (() => {
    if (answers.scope === "website" && answers.users === "public")
      return PRICING_TIERS[0];
    if (answers.scope === "internal" || answers.integrations === "complex")
      return PRICING_TIERS[2];
    if (answers.scope === "enterprise") return PRICING_TIERS[3];
    return PRICING_TIERS[1];
  })();

  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Milestone Pricing"
        title={
          <>
            Clear paths.{" "}
            <span className="relative inline-block text-ink">
              <span>Fixed milestones</span>.
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
        lede="You approve the exact scope, timeline, and investment before any work begins. Every milestone includes custom architecture, full IP ownership, and our 30-day post-launch warranty."
        stats={[
          { value: "100%", label: "Scope locked upfront" },
          { value: "0", label: "Hourly billing surprises" },
          { value: "30-Day", label: "Included warranty" },
        ]}
      />

      {/* ── Pricing Tiers Showcase ─────────────────────────────── */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          {/* Section head */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div className="space-y-2">
              <span className="pill">Four Packages</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
                Pick your outcome.
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-ink/70 max-w-md">
              Fixed milestones quoted up front — you approve the scope and the price before any code is written.
            </p>
          </div>

          {/* Desktop & Tablet 4-column Bento Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PRICING_TIERS.map((tier, i) => {
              const highlighted = tier.isPopular;
              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-5 relative transition-all duration-300 reveal ${
                    highlighted
                      ? "card-ink text-white border-2 border-flame shadow-2xl shadow-flame/15 scale-[1.02] z-10"
                      : "card text-ink border border-ink/10 bg-white shadow-lg hover:shadow-xl"
                  }`}
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  {highlighted && (
                    <span className="absolute -top-3.5 left-6 pill pill-flame text-xs py-1 px-3 shadow-md font-bold">
                      Most picked ★
                    </span>
                  )}

                  <div className="space-y-3">
                    <div className={`flex items-baseline justify-between gap-2 border-b pb-3 ${highlighted ? "border-white/10" : "border-ink/10"}`}>
                      <div>
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                            highlighted ? "text-flame" : "text-ink/60"
                          }`}
                        >
                          {tier.stage}
                        </span>
                        <h3
                          className={`text-2xl sm:text-3xl font-extrabold font-display ${
                            highlighted ? "text-white" : "text-ink"
                          }`}
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <span
                        className={`text-xs font-bold font-mono px-2.5 py-1 rounded-full ${
                          highlighted
                            ? "bg-white/10 text-white border border-white/20"
                            : "bg-sky-tint text-ink border border-ink/10"
                        }`}
                      >
                        {tier.timeline}
                      </span>
                    </div>

                    <p
                      className={`text-xs sm:text-sm font-medium leading-relaxed ${
                        highlighted ? "text-white/80" : "text-ink/75"
                      }`}
                    >
                      {tier.tagline}
                    </p>

                    <div
                      className={`p-3 rounded-2xl border ${
                        highlighted
                          ? "border-white/15 bg-white/5"
                          : "border-ink/8 bg-sky-tint"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                          highlighted ? "text-flame" : "text-ink/60"
                        }`}
                      >
                        Target Match
                      </span>
                      <p
                        className={`text-xs font-semibold leading-snug ${
                          highlighted ? "text-white/90" : "text-ink/85"
                        }`}
                      >
                        {tier.idealFor}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${
                          highlighted ? "text-white/60" : "text-ink/60"
                        }`}
                      >
                        Key Deliverables
                      </span>
                      <ul className="space-y-2">
                        {tier.deliverables.map((d) => (
                          <li
                            key={d}
                            className={`flex items-start gap-2 text-xs font-semibold ${
                              highlighted ? "text-white/90" : "text-ink/80"
                            }`}
                          >
                            <span className="mt-0.5 shrink-0 grid place-items-center w-3.5 h-3.5 rounded-full bg-flame text-white">
                              <Check className="w-2.5 h-2.5" strokeWidth={3} />
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`space-y-3 pt-3 border-t ${highlighted ? "border-white/10" : "border-ink/10"}`}>
                    <div
                      className={`flex items-center gap-2 text-[11px] font-bold ${
                        highlighted ? "text-white/80" : "text-ink/75"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-flame shrink-0" />
                      <span>{tier.supportWarranty}</span>
                    </div>

                    <Link
                      href={`/start-a-project?package=${tier.id}`}
                      className={`btn btn-sm w-full justify-center ${
                        highlighted ? "btn-primary" : "btn-ghost"
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile 2x2 Bento Comparison Grid (matching homepage design) */}
          <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
            {PRICING_TIERS.map((tier) => {
              const highlighted = tier.isPopular;
              return (
                <div
                  key={tier.id}
                  className={`col-span-1 rounded-2xl p-3.5 flex flex-col justify-between gap-3 relative shadow-md border ${
                    highlighted
                      ? "card-ink text-white border-flame shadow-flame/15"
                      : "border-ink/10 bg-white text-ink"
                  }`}
                >
                  {highlighted && (
                    <span className="absolute -top-2.5 left-3 pill pill-flame text-[8px] py-0.5 px-2 shadow-xs font-bold">
                      Most picked ★
                    </span>
                  )}

                  <div className="space-y-1.5 pt-0.5">
                    <div className={`flex items-baseline justify-between gap-1 border-b pb-1.5 ${highlighted ? "border-white/10" : "border-ink/10"}`}>
                      <h3
                        className={`text-base font-extrabold font-display tracking-tight ${
                          highlighted ? "text-white" : "text-ink"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <span className="text-[10px] font-mono text-flame font-bold">
                        {tier.timeline}
                      </span>
                    </div>

                    <p
                      className={`text-[11px] font-medium line-clamp-2 leading-snug ${
                        highlighted ? "text-white/80" : "text-ink/75"
                      }`}
                    >
                      {tier.tagline}
                    </p>

                    <div className="pt-1 space-y-1">
                      {tier.deliverables.slice(0, 3).map((d) => (
                        <div
                          key={d}
                          className="flex items-start gap-1.5 text-[10px] font-semibold"
                        >
                          <span className="mt-0.5 shrink-0 grid place-items-center w-2.5 h-2.5 rounded-full bg-flame text-white">
                            <Check className="w-2 h-2" strokeWidth={3} />
                          </span>
                          <span className="line-clamp-1">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/start-a-project?package=${tier.id}`}
                    className={`btn text-[10px] py-2 px-2.5 w-full justify-center ${
                      highlighted ? "btn-primary" : "btn-ghost"
                    }`}
                  >
                    <span>Select</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/70 border border-ink/10 text-center max-w-2xl mx-auto mt-6">
            <p className="text-xs sm:text-sm font-semibold text-ink/80">
              ✦ Pricing is scoped to concrete outcomes — workflows, custom logic, integrations, and data volume define the milestone. You receive a guaranteed fixed-price proposal before kickoff.
            </p>
          </div>
        </div>
      </section>

      {/* ── Interactive Scope Estimator ─────────────────────────────── */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card card-ink p-6 sm:p-10 lg:p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-royal/40 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-flame/20 blur-3xl pointer-events-none"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Questions Side */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="pill pill-flame">Interactive Scope Estimator</span>
                  <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                    Find the right package in 3 clicks.
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-white/75 font-medium">
                    Select your project profile below for an instant recommended milestone package.
                  </p>
                </div>

                <div className="space-y-4">
                  {QUESTIONS.map((q, qi) => (
                    <div
                      key={q.key}
                      className="rounded-2xl p-4 sm:p-5 bg-white/[0.04] border border-white/10 space-y-2.5"
                    >
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-300 block">
                        Step 0{qi + 1} — {q.label}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt) => {
                          const active = answers[q.key] === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() =>
                                setAnswers((prev) => ({ ...prev, [q.key]: opt.id }))
                              }
                              aria-pressed={active}
                              className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                                active
                                  ? "bg-flame text-white border-flame shadow-md shadow-flame/30"
                                  : "bg-white/[0.06] text-white/80 border-white/10 hover:border-white/30 hover:bg-white/[0.1]"
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Result Card Side */}
              <div className="lg:col-span-5 w-full lg:sticky lg:top-28">
                <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 backdrop-blur-xl shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="pill pill-flame !text-[11px]">
                      Recommended Match
                    </span>
                    <span className="font-mono text-xs text-white/50">
                      Tier 0{PRICING_TIERS.findIndex((t) => t.id === estimatedTier.id) + 1} / 04
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                      {estimatedTier.name}
                    </h3>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-flame block mt-1">
                      Stage: {estimatedTier.stage}
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                      {estimatedTier.tagline}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Typical Timeline</span>
                      <span className="font-bold text-white font-mono">{estimatedTier.timeline}</span>
                    </div>
                    <div className="flex items-start justify-between pt-2 border-t border-white/10">
                      <span className="text-white/60 shrink-0">Included Warranty</span>
                      <span className="font-bold text-white text-right">{estimatedTier.supportWarranty}</span>
                    </div>
                  </div>

                  <Link
                    href={`/start-a-project?package=${estimatedTier.id}`}
                    className="btn btn-primary w-full justify-center"
                  >
                    <span>Configure {estimatedTier.name} Intake</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-[11px] text-white/50 text-center">
                    ✦ Free 24h intake review • Zero obligation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Factors Bento ─────────────────────────────── */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="mb-8 space-y-2">
            <span className="pill">Cost Drivers</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
              What moves the investment number.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {COST_FACTORS.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="card p-6 flex flex-col justify-between gap-4 reveal"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-flame/10 text-flame">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-ink font-display">
                      {f.title}
                    </h3>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24" id="faq">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-[900px] mx-auto">
          <div className="mb-8 space-y-2 text-center sm:text-left">
            <span className="pill">FAQ</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-ink tracking-tight">
              Straight answers to common questions.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group card p-0 overflow-hidden transition-all duration-200"
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-bold text-sm sm:text-base text-ink leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full bg-sky-tint border border-ink/10 text-ink transition-transform duration-300 group-open:rotate-180 group-open:bg-flame group-open:text-white">
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-xs sm:text-sm text-ink/80 leading-relaxed border-t border-ink/10 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <FinalCTA />
    </div>
  );
}

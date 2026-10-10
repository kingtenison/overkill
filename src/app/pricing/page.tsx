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
      { id: "website", label: "Brand website / landing page" },
      { id: "web-app", label: "Web app or customer portal" },
      { id: "internal", label: "Internal operations hub" },
      { id: "enterprise", label: "Multi-platform ecosystem" },
    ],
  },
  {
    key: "users",
    label: "Who uses it?",
    options: [
      { id: "public", label: "Public visitors & prospects" },
      { id: "portal", label: "Logged-in customers" },
      { id: "staff", label: "Staff, managers & admins" },
    ],
  },
  {
    key: "integrations",
    label: "Integrations needed?",
    options: [
      { id: "none", label: "Forms & analytics" },
      { id: "payments", label: "Payments, bookings, calendar" },
      { id: "complex", label: "CRMs, AI workflows, custom data" },
    ],
  },
] as const;

const COST_FACTORS = [
  {
    icon: Layers,
    title: "Scope & user surfaces",
    body: "A 5-page site ships faster than an app with separate portals for customers, staff, and managers.",
  },
  {
    icon: Database,
    title: "Integrations & APIs",
    body: "Wiring up Stripe or Google Calendar is quick. Bespoke real-time engines take more care.",
  },
  {
    icon: Lock,
    title: "Data & migration",
    body: "Starting clean is simple. Cleaning five years of spreadsheet history is careful work.",
  },
  {
    icon: Clock,
    title: "Speed & timeline",
    body: "Our normal pace leaves room for listening and testing. Rushed sprints need dedicated focus.",
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
      <PageHero
        label="Pricing"
        title={
          <>
            Clear paths. <span className="marker">Fixed milestones</span>.
          </>
        }
        lede="You approve scope and price before any work starts. Every package includes custom design, full ownership, and a post-launch warranty."
      />

      {/* Tiers */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PRICING_TIERS.map((tier, i) => {
              const highlighted = tier.isPopular;
              return (
                <div
                  key={tier.id}
                  className={`card p-6 flex flex-col gap-4 relative reveal ${
                    highlighted ? "card-ink text-white" : ""
                  }`}
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  {highlighted && (
                    <span className="absolute -top-3 left-6 pill pill-flame">
                      Most picked
                    </span>
                  )}

                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h2
                        className={`text-2xl font-bold font-display ${
                          highlighted ? "text-white" : "text-ink"
                        }`}
                      >
                        {tier.name}
                      </h2>
                      <span
                        className={`text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                          highlighted ? "text-flame" : "text-ink/60"
                        }`}
                      >
                        {tier.stage}
                      </span>
                    </div>
                    <p
                      className={`text-sm font-semibold leading-relaxed ${
                        highlighted ? "text-white/80" : "text-ink/70"
                      }`}
                    >
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${
                        highlighted
                          ? "border-white/30 bg-white/10 text-white/90"
                          : "border-ink/15 bg-sky-tint text-ink/80"
                      }`}
                    >
                      {tier.timeline}
                    </span>
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl border ${
                      highlighted
                        ? "border-white/20 bg-white/5"
                        : "border-ink/10 bg-sky-tint"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-[0.18em] block mb-1 ${
                        highlighted ? "text-flame" : "text-ink/70"
                      }`}
                    >
                      Ideal for
                    </span>
                    <p
                      className={`text-xs font-semibold leading-snug ${
                        highlighted ? "text-white/85" : "text-ink/80"
                      }`}
                    >
                      {tier.idealFor}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {tier.deliverables.map((d) => (
                      <li
                        key={d}
                        className={`flex items-start gap-2 text-sm font-semibold ${
                          highlighted ? "text-white/85" : "text-ink/75"
                        }`}
                      >
                        <span className="mt-0.5 shrink-0 grid place-items-center w-4 h-4 rounded-full bg-flame text-ink">
                          <Check className="w-2.5 h-2.5" strokeWidth={4} />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-auto pt-4 border-t flex items-start gap-2 text-xs font-bold ${
                      highlighted
                        ? "border-white/20 text-white/85"
                        : "border-ink/10 text-ink/75"
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 shrink-0 text-flame-deep" />
                    <span>{tier.supportWarranty}</span>
                  </div>

                  <Link
                    href={`/start-a-project?package=${tier.id}`}
                    className={`btn btn-sm w-full ${
                      highlighted ? "btn-primary" : "btn-ghost"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${highlighted ? "text-ink" : "text-flame-deep"}`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-sm font-semibold text-ink/75 text-center max-w-2xl mx-auto">
            Pricing is scoped to outcomes — workflows, integrations, and data
            migration drive the number. You get a fixed quote before anything
            starts.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="mb-8 space-y-3">
            <span className="pill">Quick estimator</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Which path <span className="marker">fits you</span>?
            </h2>
            <p className="text-sm sm:text-base font-semibold text-ink/75 max-w-2xl">
              Three questions. Get a likely match — then we confirm the real
              scope together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Questions */}
            <div className="lg:col-span-8 space-y-4">
              {QUESTIONS.map((q, qi) => (
                <div key={q.key} className="card p-5 sm:p-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 block mb-3">
                    {qi + 1}. {q.label}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {q.options.map((opt) => {
                      const active = answers[q.key] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [q.key]: opt.id }))
                          }
                          aria-pressed={active}
                          className={`p-3.5 rounded-2xl text-xs font-bold text-left border transition-all ${
                            active
                              ? "bg-ink text-white border-ink"
                              : "bg-white text-ink/80 border-ink/15 hover:border-ink"
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

            {/* Result panel */}
            <div className="lg:col-span-4 w-full lg:sticky lg:top-24">
              <div className="card p-6 sm:p-7 bg-ink text-white">
                <span className="pill pill-flame !border-white !text-[11px]">
                  Likely match
                </span>

                <h3 className="text-3xl font-bold font-display mt-4 text-white">
                  {estimatedTier.name}
                </h3>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-flame mt-1">
                  {estimatedTier.stage}
                </p>
                <p className="text-sm text-white/80 mt-3 leading-relaxed">
                  {estimatedTier.tagline}
                </p>

                <div className="my-5 p-4 rounded-2xl bg-white/10 border border-white/20 space-y-2">
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className="font-bold text-white/75">Timeline</span>
                    <span className="font-extrabold text-white">
                      {estimatedTier.timeline}
                    </span>
                  </div>
                  <div className="flex items-start justify-between text-xs gap-2 pt-2 border-t border-white/20">
                    <span className="font-bold text-white/75 shrink-0">
                      Warranty
                    </span>
                    <span className="font-bold text-white text-right">
                      {estimatedTier.supportWarranty}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/start-a-project?package=${estimatedTier.id}`}
                  className="btn btn-primary btn-sm w-full"
                >
                  <span>Review {estimatedTier.name} with us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost factors */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="mb-8 space-y-3">
            <span className="pill">Transparency</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              What moves the number.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COST_FACTORS.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="card p-6 flex flex-col gap-4 reveal"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-sky-tint border border-ink/12 text-ink">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-ink">
                      {f.title}
                    </h3>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full pb-16 sm:pb-24" id="faq">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-[900px] mx-auto">
          <div className="mb-8 space-y-3 text-center sm:text-left">
            <span className="pill">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Straight answers.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group card p-0 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-semibold text-base sm:text-lg text-ink leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-sky-tint border border-ink/12 text-ink transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-sm sm:text-base text-ink/80 leading-relaxed border-t border-ink/10 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { PRICING_TIERS } from "@/data/content";

export default function PricingPreviewSection() {
  return (
    <section className="w-full py-12 sm:py-24" id="pricing">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        {/* Section head */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4 sm:mb-6">
          <div className="space-y-3 sm:space-y-4">
            <span className="pill">Pricing</span>
            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-ink tracking-tight max-w-xl">
              Four paths. <span className="marker">Pick by outcome</span>.
            </h2>
          </div>
          <Link
            href="/pricing"
            className="btn btn-ghost btn-sm shrink-0 self-start sm:self-auto"
          >
            <span>See what&apos;s included</span>
            <ArrowUpRight className="w-4 h-4 text-flame-deep" />
          </Link>
        </div>

        <p className="text-sm sm:text-lg font-medium text-ink/70 max-w-2xl mb-6 sm:mb-8">
          Fixed milestones quoted up front — you approve the scope and the price
          before any work starts.
        </p>

        {/* ── MOBILE: 2x2 BENTO COMPARISON GRID (NO VERTICAL STACK) ── */}
        <div className="sm:hidden grid grid-cols-2 gap-2.5 mb-6">
          {PRICING_TIERS.map((tier) => {
            const highlighted = tier.isPopular;
            return (
              <div
                key={tier.id}
                className={`col-span-1 rounded-2xl p-3 flex flex-col justify-between gap-3 relative shadow-md border ${
                  highlighted
                    ? "card-ink text-white border-flame/50 shadow-flame/10"
                    : "border-ink/10 bg-white text-ink"
                }`}
              >
                {highlighted && (
                  <span className="absolute -top-2.5 left-3 pill pill-flame text-[8.5px] py-0.5 px-2 shadow-sm font-bold">
                    Most picked ★
                  </span>
                )}

                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-baseline justify-between gap-1 border-b pb-1.5 border-ink/8">
                    <h3
                      className={`text-base font-extrabold font-display tracking-tight ${
                        highlighted ? "text-white" : "text-ink"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <span
                      className={`text-[8px] font-mono font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-full ${
                        highlighted
                          ? "text-flame bg-flame/15 border border-flame/30"
                          : "text-ink/60 bg-ink/5 border border-ink/10"
                      }`}
                    >
                      {tier.stage}
                    </span>
                  </div>

                  <p
                    className={`text-[10.5px] leading-snug line-clamp-2 ${
                      highlighted ? "text-white/80" : "text-ink/70"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  <div>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border ${
                        highlighted
                          ? "border-white/20 bg-white/10 text-white"
                          : "border-ink/10 bg-sky-soft text-ink/80"
                      }`}
                    >
                      <span>⏱</span>
                      <span>{tier.timeline}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1.5 border-t border-ink/8">
                  <ul className="space-y-1">
                    {tier.highlights.slice(0, 2).map((h) => (
                      <li
                        key={h}
                        className={`flex items-start gap-1 text-[10px] font-medium leading-tight ${
                          highlighted ? "text-white/90" : "text-ink/75"
                        }`}
                      >
                        <span className="shrink-0 mt-0.5 grid place-items-center w-3 h-3 rounded-full bg-flame text-white">
                          <Check className="w-1.5 h-1.5" strokeWidth={4} />
                        </span>
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/pricing"
                    className={`btn btn-xs w-full py-1.5 text-[10.5px] font-bold shadow-sm rounded-lg ${
                      highlighted ? "btn-primary" : "btn-ghost hover:border-royal/40"
                    }`}
                  >
                    <span>{highlighted ? "Select Grow" : "Details"}</span>
                    <ArrowRight
                      className={`w-3 h-3 ${highlighted ? "text-white" : "text-flame-deep"}`}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: 4-COLUMN PRICING GRID (100% PRESERVED) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {PRICING_TIERS.map((tier, i) => {
            const highlighted = tier.isPopular;
            return (
              <div
                key={tier.id}
                className={`card rounded-3xl p-5 sm:p-7 flex flex-col justify-between gap-4 sm:gap-5 relative transition-all duration-300 reveal ${
                  highlighted
                    ? "card-ink text-white border-royal-light/40 shadow-xl"
                    : "border-ink/10 hover:border-royal/30 hover:shadow-lg bg-white"
                }`}
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                {highlighted && (
                  <span className="absolute -top-3 left-6 pill pill-flame shadow-md">
                    Most picked
                  </span>
                )}

                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-baseline justify-between gap-2 border-b pb-2.5 sm:pb-3 border-ink/8">
                    <h3
                      className={`text-xl sm:text-2xl font-bold font-display ${
                        highlighted ? "text-white" : "text-ink"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        highlighted
                          ? "text-flame bg-flame/15 border border-flame/30"
                          : "text-ink/60 bg-ink/5 border border-ink/10"
                      }`}
                    >
                      {tier.stage}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      highlighted ? "text-white/80" : "text-ink/70"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  <div className="pt-0.5 sm:pt-1">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold border ${
                        highlighted
                          ? "border-white/20 bg-white/10 text-white"
                          : "border-ink/10 bg-sky-soft text-ink/80"
                      }`}
                    >
                      <span>⏱</span>
                      <span>{tier.timeline}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-2.5 sm:pt-3 border-t border-ink/8">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {tier.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className={`flex items-start gap-2 text-xs sm:text-sm font-medium ${
                          highlighted ? "text-white/85" : "text-ink/75"
                        }`}
                      >
                        <span className="mt-0.5 shrink-0 grid place-items-center w-4 h-4 rounded-full bg-flame text-white">
                          <Check className="w-2.5 h-2.5" strokeWidth={4} />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/pricing"
                    className={`btn btn-sm w-full shadow-sm ${
                      highlighted ? "btn-primary" : "btn-ghost hover:border-royal/40"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight
                      className={`w-4 h-4 ${highlighted ? "text-white" : "text-flame-deep"}`}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Guarantee Strip */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-ink/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-semibold text-ink/75">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-ink">Included in every package:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5 text-ink/80 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              Fixed Milestone Pricing
            </span>
            <span className="flex items-center gap-1.5 text-ink/80 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              100% Full Source Code Ownership
            </span>
            <span className="flex items-center gap-1.5 text-ink/80 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              30-Day Free Post-Launch Warranty
            </span>
          </div>

          <Link
            href="/pricing"
            className="text-royal font-bold hover:text-flame transition-colors inline-flex items-center gap-1"
          >
            <span>Compare full breakdown</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

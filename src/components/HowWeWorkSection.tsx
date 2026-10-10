import React from "react";
import Link from "next/link";
import {
  Compass,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Zap,
  Sparkles,
  Check,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery & Strategy",
    timing: "Days 1 – 3",
    tagline: "We don't do guesswork.",
    description:
      "We map out your manual workflows, bottlenecks, and existing tools, delivering a clear technical blueprint and fixed-price milestone agreement before writing a single line of code.",
    deliverableLabel: "Deliverable",
    deliverableValue: "Technical Blueprint & Fixed Scope",
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/25",
    iconBg: "bg-cyan-500/15 border-cyan-400/30 text-cyan-400",
    glowColor: "rgba(0, 229, 255, 0.22)",
    cardBg: "#060c22",
    accentGradient:
      "radial-gradient(circle at 85% 15%, rgba(0, 229, 255, 0.18), transparent 55%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.15), transparent 60%)",
    borderColor: "border-cyan-500/25 hover:border-cyan-400/60",
    shadowHover: "hover:shadow-[0_20px_50px_-12px_rgba(0,229,255,0.22)]",
  },
  {
    step: "02",
    icon: Code2,
    title: "Design & Engineering",
    timing: "Weeks 1 – 4",
    tagline: "No shortcuts. No templates.",
    description:
      "We craft custom, modern interfaces and engineer high-performance web systems from scratch using production-grade TypeScript. You receive private staging links to test working features every week.",
    deliverableLabel: "Deliverable",
    deliverableValue: "Live Staging Demos Every Friday",
    badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/25",
    iconBg: "bg-indigo-500/15 border-indigo-400/30 text-indigo-400",
    glowColor: "rgba(129, 140, 248, 0.22)",
    cardBg: "#070b28",
    accentGradient:
      "radial-gradient(circle at 85% 15%, rgba(129, 140, 248, 0.20), transparent 55%), radial-gradient(circle at 15% 85%, rgba(0, 0, 153, 0.22), transparent 60%)",
    borderColor: "border-indigo-500/25 hover:border-indigo-400/60",
    shadowHover: "hover:shadow-[0_20px_50px_-12px_rgba(129,140,248,0.22)]",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch & Handover",
    timing: "Production",
    tagline: "Full keys. Zero vendor lock-in.",
    description:
      "Rigorous testing, seamless deployment, and handing over the keys. You get 100% full source code and database ownership on GitHub, staff video guides, and a 30-day post-launch warranty.",
    deliverableLabel: "Deliverable",
    deliverableValue: "100% Code & DB Ownership + 30d Warranty",
    badgeColor: "text-flame bg-flame/10 border-flame/30",
    iconBg: "bg-flame/20 border-flame/40 text-flame",
    glowColor: "rgba(255, 102, 0, 0.25)",
    cardBg: "#0c081e",
    accentGradient:
      "radial-gradient(circle at 85% 15%, rgba(255, 102, 0, 0.22), transparent 55%), radial-gradient(circle at 15% 85%, rgba(229, 90, 0, 0.15), transparent 60%)",
    borderColor: "border-flame/30 hover:border-flame/70",
    shadowHover: "hover:shadow-[0_20px_50px_-12px_rgba(255,102,0,0.28)]",
  },
];

const ASSURANCES = [
  {
    icon: Zap,
    title: "24-Hour Reply",
    detail: "Direct access to senior engineers — no account manager telephone games.",
    highlight: "SLA Guaranteed",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Milestone Pricing",
    detail: "Locked scope and timeline before kickoff. Zero surprise invoices.",
    highlight: "$0 Hidden Fees",
  },
  {
    icon: CheckCircle2,
    title: "30-Day Launch Warranty",
    detail: "We stay with you post-launch to monitor and patch any hiccups for free.",
    highlight: "Post-Launch Peace of Mind",
  },
];

export default function HowWeWorkSection() {
  return (
    <section
      id="process"
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#edf4fc] text-ink scroll-mt-16"
    >
      {/* Background Atmosphere Matching Hero Section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Dot grid identical to Hero section */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Ice blue ambient bloom top right (identical to Hero: #B7DBFF/40) */}
        <div
          className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full bg-[#B7DBFF]/40 blur-3xl pointer-events-none"
        />

        {/* Flame orange ambient bloom bottom left (identical to Hero: flame/15) */}
        <div
          className="absolute -bottom-32 -left-24 w-[560px] h-[560px] rounded-full bg-flame/15 blur-3xl pointer-events-none"
        />

        {/* Royal blue specular accent (identical to Hero: #000099/10) */}
        <div
          className="absolute top-1/2 right-[15%] w-[420px] h-[420px] rounded-full bg-[#000099]/10 blur-3xl pointer-events-none"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3.5 max-w-2xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="pill pill-ink shadow-sm inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-flame" />
                How We Build
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-royal bg-royal/10 border border-royal/20 px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3 text-royal" />
                Zero guesswork • 100% code ownership
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight font-display leading-[1.08]">
              A process engineered for{" "}
              <span className="marker text-ink">precision and speed</span>.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-ink/75 leading-relaxed font-body">
              Tell us what&apos;s broken. We map the requirements, engineer the
              software, and hand you the keys with zero fluff.
            </p>
          </div>

          <Link
            href="/start-a-project"
            className="btn btn-flame btn-md shadow-lg shadow-flame/20 shrink-0 self-start md:self-auto"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── MOBILE: 2-COLUMN BENTO PIPELINE (NO VERTICAL STACK) ── */}
        <div className="md:hidden grid grid-cols-2 gap-2.5 mb-8">
          {/* PHASE 01: DISCOVERY (SIDE-BY-SIDE TILE) */}
          {(() => {
            const item = STEPS[0];
            const Icon = item.icon;
            return (
              <article
                key={item.step}
                className={`col-span-1 relative rounded-2xl p-3 flex flex-col justify-between overflow-hidden text-left border shadow-lg ${item.borderColor}`}
                style={{
                  backgroundColor: item.cardBg,
                  backgroundImage: item.accentGradient,
                }}
              >
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between gap-1 border-b border-white/10 pb-1.5">
                    <span className={`text-[8px] font-mono font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      P01
                    </span>
                    <span className="text-[8.5px] font-mono font-bold text-slate-300">
                      {item.timing}
                    </span>
                  </div>

                  <div>
                    <div className={`w-7 h-7 rounded-lg border grid place-items-center mb-1.5 ${item.iconBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-extrabold font-display text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[9px] font-mono font-bold text-cyan-300 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-[10.5px] text-slate-300 leading-snug line-clamp-3">
                    Map workflows, bottlenecks, and agree on fixed milestones before coding.
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 relative z-10">
                  <div className="rounded-lg p-1.5 bg-white/[0.04] border border-white/10 flex items-center justify-between gap-1">
                    <span className="text-[9.5px] font-bold text-slate-200 truncate">
                      Fixed Blueprint
                    </span>
                    <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                  </div>
                </div>
              </article>
            );
          })()}

          {/* PHASE 02: ENGINEERING (SIDE-BY-SIDE TILE) */}
          {(() => {
            const item = STEPS[1];
            const Icon = item.icon;
            return (
              <article
                key={item.step}
                className={`col-span-1 relative rounded-2xl p-3 flex flex-col justify-between overflow-hidden text-left border shadow-lg ${item.borderColor}`}
                style={{
                  backgroundColor: item.cardBg,
                  backgroundImage: item.accentGradient,
                }}
              >
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between gap-1 border-b border-white/10 pb-1.5">
                    <span className={`text-[8px] font-mono font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      P02
                    </span>
                    <span className="text-[8.5px] font-mono font-bold text-slate-300">
                      {item.timing}
                    </span>
                  </div>

                  <div>
                    <div className={`w-7 h-7 rounded-lg border grid place-items-center mb-1.5 ${item.iconBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-extrabold font-display text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[9px] font-mono font-bold text-indigo-300 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-[10.5px] text-slate-300 leading-snug line-clamp-3">
                    Custom TypeScript engineering with private staging demos every Friday.
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 relative z-10">
                  <div className="rounded-lg p-1.5 bg-white/[0.04] border border-white/10 flex items-center justify-between gap-1">
                    <span className="text-[9.5px] font-bold text-slate-200 truncate">
                      Weekly Staging Demos
                    </span>
                    <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                  </div>
                </div>
              </article>
            );
          })()}

          {/* PHASE 03: LAUNCH & HANDOVER (WIDE BENTO CARD) */}
          {(() => {
            const item = STEPS[2];
            const Icon = item.icon;
            return (
              <article
                key={item.step}
                className={`col-span-2 relative rounded-2xl p-3.5 flex flex-col justify-between overflow-hidden text-left border shadow-xl ${item.borderColor}`}
                style={{
                  backgroundColor: item.cardBg,
                  backgroundImage: item.accentGradient,
                }}
              >
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-flame animate-pulse" />
                      <span className={`text-[8.5px] font-mono font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        PHASE 03
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                      {item.timing}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className={`w-8 h-8 rounded-xl border grid place-items-center shrink-0 ${item.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold font-display text-white tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10px] font-mono font-bold text-flame mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-snug">
                    Deployment, handover of full source code on GitHub, and a 30-day post-launch warranty.
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-white/10 relative z-10">
                  <div className="rounded-xl p-2 bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-between gap-2">
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                        Final Deliverable
                      </span>
                      <span className="text-xs font-bold text-white leading-tight block truncate">
                        100% Code &amp; DB Ownership + 30d Warranty
                      </span>
                    </div>
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-400/40 grid place-items-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })()}
        </div>

        {/* ── DESKTOP: 3 STEP CARDS GRID (100% PRESERVED) ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-7 mb-12 sm:mb-16 items-stretch">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.step}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden text-left border transition-all duration-500 group ${item.borderColor} ${item.shadowHover}`}
                style={{
                  backgroundColor: item.cardBg,
                  backgroundImage: item.accentGradient,
                }}
              >
                {/* Subtle numeral watermark in background */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 -right-2 text-7xl sm:text-8xl font-black font-display text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none pointer-events-none"
                >
                  {item.step}
                </div>

                <div className="space-y-5 relative z-10">
                  {/* Step Meta Header Bar */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span
                        className={`text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                      >
                        PHASE {item.step}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                      {item.timing}
                    </span>
                  </div>

                  {/* Icon & Title Block */}
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl border grid place-items-center mb-4 backdrop-blur-md shadow-md transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl sm:text-[1.65rem] font-extrabold font-display text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs font-mono font-extrabold uppercase tracking-wider text-flame mt-1.5">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Verification Box (Bottom Stamp) */}
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                  <div className="rounded-2xl p-3 sm:p-3.5 bg-white/[0.04] border border-white/10 backdrop-blur-sm flex items-center justify-between gap-2">
                    <div className="space-y-0.5 min-w-0">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        {item.deliverableLabel}
                      </span>
                      <span className="text-xs font-bold text-white leading-tight block">
                        {item.deliverableValue}
                      </span>
                    </div>

                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-400/40 grid place-items-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Compact Guarantees Strip — Clean White Card */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white border border-ink/10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-ink/10">
            {ASSURANCES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 ${
                    idx > 0 ? "pt-5 md:pt-0 md:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-royal/10 border border-royal/15 grid place-items-center text-royal shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold font-display text-ink">
                        {item.title}
                      </h4>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-xs text-ink/70 leading-relaxed font-body">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-semibold text-ink/70 flex-wrap">
          <span>Need custom milestones or enterprise SLAs?</span>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 font-bold text-flame hover:underline"
          >
            <span>Compare all packages</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

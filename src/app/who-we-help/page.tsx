import React from "react";
import Link from "next/link";
import { WHO_WE_HELP_SECTORS } from "@/data/content";
import {
  Zap,
  Building2,
  Layers,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Help | =[ØVĒRKILL]= STUDIOS",
  description:
    "Stages and sectors we build for — first-site velocity, scaling operations, modernizing legacy tools and regulated practices.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Building2,
  Layers,
  ShieldCheck,
};

const GUIDANCE = [
  {
    headline: "Validate fast, earn revenue faster.",
    trap: "Six months and tens of thousands burned building bloated features nobody ever asked for.",
    approach: "Lean MVPs built for one metric: user adoption. Prototype rapidly, deploy clean, collect feedback, iterate.",
    systems: [
      "Rapid interactive prototypes",
      "Full-stack Next.js web apps",
      "Scalable Postgres & Supabase databases",
      "Stripe payment & billing onboarding",
    ],
  },
  {
    headline: "Scale operations without tripling headcount.",
    trap: "Memory, sticky notes, WhatsApp chats, and phone calls — until a peak rush breaks fulfillment completely.",
    approach: "Automate intake, booking, dispatch, and client alerts so your staff serves clients instead of shuffling paper.",
    systems: [
      "Custom web ordering & scheduling",
      "Automated SMS & email appointment alerts",
      "Client self-service dashboards",
      "Two-way CRM & accounting sync",
    ],
  },
  {
    headline: "Retire the chaotic spreadsheets for good.",
    trap: "Fourteen disconnected Excel sheets and outdated legacy tools quietly risking business continuity.",
    approach: "One unified, cloud-native command center engineered precisely around how your operators work every day.",
    systems: [
      "Internal business operations platforms",
      "Multi-role staff & manager dashboards",
      "Historical data migration & schema cleanup",
      "Automated reporting & PDF invoice generation",
    ],
  },
  {
    headline: "Dignified, accessible, secure.",
    trap: "Clunky, slow medical/legal portals that frustrate clients and create compliance headaches.",
    approach: "High-contrast, WCAG-conscious portals where complex bookings and file submissions take one tap.",
    systems: [
      "Patient & clinic appointment portals",
      "Secure client document intake pipelines",
      "Role-based access control (RBAC)",
      "Audit logs & encrypted record management",
    ],
  },
];

export default function WhoWeHelpPage() {
  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Target Sectors & Stages"
        title={
          <>
            Built for your stage,{" "}
            <span className="relative inline-block text-ink">
              <span>never a generic template</span>.
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
        lede="From early prototype velocity to complex operational modernization — our systems conform to your business realities, not the other way around."
        stats={[
          { value: "4", label: "Specialized sectors" },
          { value: "0", label: "Off-the-shelf templates" },
          { value: "100%", label: "Custom workflows" },
        ]}
      />

      {/* ── 4 Sector Bento Grid ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {WHO_WE_HELP_SECTORS.map((sector, idx) => {
              const Icon = ICONS[sector.icon] ?? Zap;
              const guide = GUIDANCE[idx];
              const isDark = idx === 0 || idx === 3; // Strategic alternating dark bento cards matching homepage

              return (
                <article
                  key={sector.title}
                  className={`rounded-3xl p-6 sm:p-9 lg:p-10 flex flex-col justify-between gap-6 relative transition-all duration-300 reveal ${
                    isDark
                      ? "card-ink text-white border border-white/10 shadow-2xl shadow-ink/20"
                      : "card text-ink border border-ink/10 bg-white shadow-lg shadow-ink/5"
                  }`}
                  style={{ "--reveal-delay": `${(idx % 2) * 80}ms` } as React.CSSProperties}
                >
                  {/* Background ambient orb for dark cards */}
                  {isDark && (
                    <div
                      aria-hidden
                      className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-royal/40 blur-3xl pointer-events-none"
                    />
                  )}

                  <div className="relative z-10 space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3">
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
                            {sector.badge}
                          </span>
                          <span
                            className={`block text-[10px] font-mono font-bold mt-0.5 ${
                              isDark ? "text-white/50" : "text-ink/40"
                            }`}
                          >
                            Sector 0{idx + 1}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-2xl font-black opacity-20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Headline */}
                    <div>
                      <h2
                        className={`text-2xl sm:text-3xl font-extrabold font-display tracking-tight ${
                          isDark ? "text-white" : "text-ink"
                        }`}
                      >
                        {sector.title}
                      </h2>
                      <p className="mt-1 text-sm sm:text-base font-bold text-flame">
                        {guide.headline}
                      </p>
                      <p
                        className={`mt-2 text-xs sm:text-sm font-medium leading-relaxed ${
                          isDark ? "text-white/80" : "text-ink/75"
                        }`}
                      >
                        {sector.description}
                      </p>
                    </div>

                    {/* The Trap vs Our Blueprint Contrast Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {/* The Trap */}
                      <div
                        className={`rounded-2xl p-4 border ${
                          isDark
                            ? "bg-white/[0.05] border-white/10"
                            : "bg-[#F3F7FC] border-ink/8"
                        }`}
                      >
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-red-500 flex items-center gap-1.5 mb-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          The Trap
                        </span>
                        <p
                          className={`text-xs leading-relaxed ${
                            isDark ? "text-white/75" : "text-ink/75"
                          }`}
                        >
                          {guide.trap}
                        </p>
                      </div>

                      {/* Our Blueprint */}
                      <div
                        className={`rounded-2xl p-4 border ${
                          isDark
                            ? "bg-[#000099]/30 border-[#000099]/50"
                            : "bg-ink text-white border-ink"
                        }`}
                      >
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-cyan-300 flex items-center gap-1.5 mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          The ØVĒRKILL Play
                        </span>
                        <p className="text-xs font-semibold text-white leading-relaxed">
                          {guide.approach}
                        </p>
                      </div>
                    </div>

                    {/* Systems We Deploy */}
                    <div className="pt-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider block mb-2.5 ${
                          isDark ? "text-white/60" : "text-ink/60"
                        }`}
                      >
                        Sample Systems Engineered
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {guide.systems.map((s) => (
                          <span
                            key={s}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                              isDark
                                ? "bg-white/[0.08] text-white/90 border-white/12"
                                : "bg-sky-tint text-ink border-ink/10"
                            }`}
                          >
                            ✦ {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct CTA */}
                  <div className={`relative z-10 pt-4 border-t ${isDark ? "border-white/10" : "border-ink/10"}`}>
                    <Link
                      href={`/start-a-project?sector=${encodeURIComponent(sector.title)}`}
                      className={`btn btn-sm w-full justify-center ${
                        isDark ? "btn-primary" : "btn-primary"
                      }`}
                    >
                      <span>Discuss {sector.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sector Architecture Commitment Bento ── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card p-6 sm:p-10 border border-ink/10 bg-white text-center max-w-3xl mx-auto space-y-4">
            <span className="pill">Context Over Code</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
              Don&apos;t see your exact industry listed?
            </h2>
            <p className="text-xs sm:text-sm font-medium text-ink/75 leading-relaxed">
              We specialize in business logic and operational bottlenecks — booking engines, client self-service, inventory tracking, role-based portals, and automated workflows. If your business runs on repeatable steps, we can engineer it.
            </p>
            <div className="pt-2">
              <Link href="/start-a-project" className="btn btn-primary">
                <span>Tell Us What You&apos;re Solving</span>
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

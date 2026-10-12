import React from "react";
import Link from "next/link";
import {
  Mail,
  Clock,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  FileText,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | =[ØVĒRKILL]= STUDIOS",
  description:
    "Tell us what's slow, broken or stuck. Every inquiry gets a reply within 24 hours on business days.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Start the Conversation"
        title={
          <>
            No perfect brief needed.{" "}
            <span className="relative inline-block text-ink">
              <span>Just describe the friction</span>.
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
        lede="Tell us what you're trying to accomplish, where manual work is slowing down your team, or where you want to take your platform. We'll handle the architecture from there."
        stats={[
          { value: "< 24h", label: "Response SLA" },
          { value: "100%", label: "Confidentiality" },
          { value: "Zero", label: "Pushy sales calls" },
        ]}
      />

      {/* ── Contact Command Center Bento ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Primary Guided Route (High Contrast Dark Bento) */}
            <div className="lg:col-span-7 card card-ink p-6 sm:p-10 text-white border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between gap-6 reveal">
              <div
                aria-hidden
                className="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-royal/40 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-flame/20 blur-3xl pointer-events-none"
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="pill pill-flame">Fastest Route (Under 2 Mins)</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
                  Have a specific project or bottleneck in mind?
                </h2>

                <p className="text-xs sm:text-base text-white/80 leading-relaxed font-medium">
                  Our guided project intake takes under 2 minutes. You receive a structured technical breakdown and proposed milestone roadmap within 24 hours — from a senior engineer, not a sales representative.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Reply within 24 hours guaranteed",
                    "Fixed milestone pricing upfront",
                    "100% IP & source code ownership",
                    "Zero-obligation technical advice",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/90"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-flame shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <Link
                  href="/start-a-project"
                  className="btn btn-primary w-full justify-center text-sm sm:text-base py-3.5"
                >
                  <span>Launch the Project Intake</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-white/50 text-center mt-2.5">
                  ✦ No technical knowledge required • Structured in plain language
                </p>
              </div>
            </div>

            {/* Direct Channels (Clean Light Bento) */}
            <div className="lg:col-span-5 card p-6 sm:p-10 border border-ink/10 bg-white flex flex-col justify-between gap-6 reveal">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="pill">Direct Channels</span>
                  <span className="text-xs font-mono font-bold text-flame">Direct Founder Line</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-ink tracking-tight">
                  Prefer direct communication?
                </h3>

                <div className="space-y-3 pt-2">
                  {/* Email Box */}
                  <a
                    href="mailto:kingtenison@gmail.com"
                    className="group flex items-start gap-3.5 p-4 rounded-2xl bg-sky-tint border border-ink/10 hover:border-flame hover:shadow-md transition-all"
                  >
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-flame text-white shrink-0 shadow-sm shadow-flame/30 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono font-extrabold uppercase tracking-widest text-ink/60">
                        Primary Email
                      </span>
                      <span className="block text-sm sm:text-base font-extrabold font-display text-ink group-hover:text-flame transition-colors break-words">
                        kingtenison@gmail.com
                      </span>
                      <span className="block text-[11px] text-ink/60 font-medium mt-0.5">
                        Click to open default mail client
                      </span>
                    </div>
                  </a>

                  {/* SLA Box */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-sky-tint border border-ink/10">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#000099] text-white shrink-0 shadow-sm shadow-[#000099]/20">
                      <Clock className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono font-extrabold uppercase tracking-widest text-ink/60">
                        Response Window
                      </span>
                      <span className="block text-sm font-bold text-ink">
                        Within 24 Hours, Monday – Friday
                      </span>
                      <span className="block text-[11px] text-ink/60 font-medium mt-0.5">
                        Urgent inquiries prioritized within 6h
                      </span>
                    </div>
                  </div>

                  {/* Coverage Box */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-sky-tint border border-ink/10">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-white border border-ink/12 text-ink shrink-0">
                      <Globe className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono font-extrabold uppercase tracking-widest text-ink/60">
                        Global Availability
                      </span>
                      <span className="block text-sm font-bold text-ink">
                        Remote-First • Worldwide Delivery
                      </span>
                      <span className="block text-[11px] text-ink/60 font-medium mt-0.5">
                        Serving founders across North America, Europe &amp; Africa
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center gap-2 text-xs font-semibold text-ink/75">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA &amp; confidentiality agreements honored prior to discovery.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact FAQ Section ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="pill">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight">
              What happens after you reach out?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: MessageSquare,
                step: "01. Prompt Review",
                desc: "We analyze your problem, current tools, and operational goals without marketing jargon.",
              },
              {
                icon: FileText,
                step: "02. Scope & Roadmap",
                desc: "We present a written milestone proposal with fixed timelines, deliverables, and cost.",
              },
              {
                icon: Sparkles,
                step: "03. Sprint Kickoff",
                desc: "Once you approve the milestone, development begins with working links sent every Friday.",
              },
            ].map((card, i) => {
              const CIcon = card.icon;
              return (
                <div
                  key={card.step}
                  className="card p-6 flex flex-col justify-between gap-3 border border-ink/10 bg-white reveal"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-flame/10 text-flame">
                    <CIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold font-display text-ink">
                      {card.step}
                    </h3>
                    <p className="text-xs text-ink/70 leading-relaxed mt-1">
                      {card.desc}
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

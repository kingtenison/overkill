import React from "react";
import ProjectIntakeFlow from "@/components/ProjectIntakeFlow";
import { ShieldCheck, Clock, Sparkles, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project | =[ØVĒRKILL]= STUDIOS",
  description:
    "No 20-page specification. Four short steps — goal, problem, context, contact — and we'll map the solution with you.",
};

export default function StartAProjectPage() {
  return (
    <div className="w-full flex flex-col">
      {/* ── Page Hero ─────────────────────────────── */}
      <PageHero
        label="Guided Project Intake"
        title={
          <>
            Tell us what you&apos;re{" "}
            <span className="relative inline-block text-ink">
              <span>trying to solve</span>.
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
        lede="No 20-page specification required. Describe what's slow, broken, or stuck in plain English — we'll map the system architecture, fixed milestones, and timeline with you."
        stats={[
          { value: "< 2 mins", label: "Intake completion" },
          { value: "Within 24h", label: "Diagnostic reply" },
          { value: "100%", label: "Strict confidentiality" },
        ]}
      />

      {/* ── Interactive Intake Section ─────────────────────────────── */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <ProjectIntakeFlow />

          {/* Trust Guarantees Bento */}
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: "100% Confidential",
                desc: "We honor NDAs and treat all business data, schemas, and workflows with strict privacy.",
              },
              {
                icon: Clock,
                title: "24-Hour SLA",
                desc: "Every submission receives a detailed diagnostic breakdown within 24 business hours.",
              },
              {
                icon: Sparkles,
                title: "Zero-Obligation Review",
                desc: "Receive an actionable technical roadmap and fixed milestone options before committing.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card p-5 border border-ink/10 bg-white/90 flex flex-col gap-2.5 shadow-sm"
                >
                  <span className="grid place-items-center w-8 h-8 rounded-xl bg-flame/10 text-flame shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold font-display text-ink">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-ink/70 leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

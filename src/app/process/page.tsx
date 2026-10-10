import React from "react";
import {
  Compass,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { PROCESS_STAGES } from "@/data/content";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
};

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our process",
  description:
    "From problem to launch in six clear stages — discover, understand, design, build, launch, evolve. No black boxes, no 30-page briefs.",
};

export default function ProcessPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        label="Process"
        title={
          <>
            From problem to launch, <span className="marker">in six steps</span>.
          </>
        }
        lede="You always know what happens next. No 30-page briefs, no black boxes — just clear stages you can see and sign off."
      />

      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <ol className="space-y-5">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = ICONS[stage.icon] ?? Compass;
              return (
                <li
                  key={stage.number}
                  className="card p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 reveal"
                  style={{ "--reveal-delay": `${(idx % 3) * 70}ms` } as React.CSSProperties}
                >
                  {/* Step number */}
                  <span
                    className={`shrink-0 grid place-items-center w-12 h-12 rounded-xl font-display font-bold text-base shadow-[0_12px_24px_-16px_rgba(0,0,0,0.6)] ${
                      idx % 2 === 0
                        ? "bg-flame text-white"
                        : "bg-ink text-white"
                    }`}
                  >
                    {stage.number}
                  </span>

                  <div className="min-w-0 flex-1 space-y-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/70">
                      {stage.name}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                      {stage.headline}
                    </h2>
                    <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="shrink-0 sm:max-w-[240px] flex items-start gap-2.5 p-3.5 rounded-2xl bg-sky-tint border border-ink/10">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-white border border-ink/12 text-ink shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs font-semibold text-ink leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

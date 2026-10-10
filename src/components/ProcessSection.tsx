import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { PROCESS_STAGES } from "@/data/content";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
};

export default function ProcessSection() {
  return (
    <section className="w-full py-16 sm:py-20" id="process">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        {/* Section head */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-4">
            <span className="pill">How it works</span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ink tracking-tight max-w-xl">
              Six steps. <span className="marker">No mystery</span>.
            </h2>
          </div>
          <Link
            href="/process"
            className="btn btn-ghost btn-sm shrink-0 self-start sm:self-auto"
          >
            <span>Full process</span>
            <ArrowUpRight className="w-4 h-4 text-flame-deep" />
          </Link>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROCESS_STAGES.map((stage, i) => {
            const Icon = ICONS[stage.icon] ?? Compass;
            return (
              <div
                key={stage.number}
                className="card card-hover p-6 flex flex-col gap-4 reveal"
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2.5">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-ink text-white font-display font-bold text-[13px]">
                      {stage.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">
                      {stage.name}
                    </span>
                  </span>
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-sky-tint border border-ink/10 text-ink/60">
                    <Icon className="w-4 h-4" />
                  </span>
                </div>

                <p className="font-display font-semibold text-lg text-ink leading-snug">
                  {stage.headline}
                </p>

                <p className="text-sm text-ink/70 leading-relaxed mt-auto">
                  {stage.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { SOLUTION_CATEGORIES } from "@/data/content";
import {
  Globe,
  LayoutDashboard,
  AppWindow,
  Sparkles,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  LayoutDashboard,
  AppWindow,
  Sparkles,
  RefreshCw,
};

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Five ways we build: websites & stores, business systems, web apps & products, automation & AI, and modernization of legacy systems.",
};

export default function SolutionsPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        label="Services"
        title={
          <>
            Pick where it hurts.{" "}
            <span className="marker">We fix that</span>.
          </>
        }
        lede="Five ways we build — organized around your problem, never around technical jargon. Find your friction, see what we'd build."
      />

      {/* Service deep-dives */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto space-y-6 sm:space-y-8">
          {SOLUTION_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS[cat.iconName] ?? Globe;
            return (
              <article
                id={cat.slug}
                key={cat.id}
                className="card p-6 sm:p-9 lg:p-10 scroll-mt-24 reveal"
                style={{ "--reveal-delay": `${(idx % 3) * 70}ms` } as React.CSSProperties}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Narrative */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-sky-tint border border-ink/12 text-ink shrink-0">
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className="pill !text-[11px]">
                        Service {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-base font-semibold text-ink">{cat.tagline}</p>

                    <div className="p-4 rounded-2xl bg-sky-tint border border-ink/10">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-flame" />
                        Where it hurts
                      </span>
                      <p className="text-sm text-ink leading-relaxed">
                        {cat.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-ink text-white">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-flame block mb-1.5">
                        What you get
                      </span>
                      <p className="text-sm font-semibold text-white leading-relaxed">
                        {cat.outcome}
                      </p>
                    </div>

                    <p className="text-sm text-ink/70">
                      <span className="font-extrabold text-ink">Best for: </span>
                      {cat.targetAudience}
                    </p>
                  </div>

                  {/* Capabilities panel */}
                  <div className="lg:col-span-5 w-full bg-sky-tint border border-ink/10 rounded-[24px] p-6 space-y-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 block">
                      What we build here
                    </span>

                    <ul className="space-y-2.5">
                      {cat.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2.5 text-sm font-semibold text-ink"
                        >
                          <span className="mt-0.5 shrink-0 grid place-items-center w-4 h-4 rounded-full bg-flame text-ink">
                            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                          </span>
                          {cap}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/start-a-project?solution=${cat.slug}`}
                      className="btn btn-ghost btn-sm w-full"
                    >
                      <span>Start with {cat.title}</span>
                      <ArrowRight className="w-4 h-4 text-flame-deep" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

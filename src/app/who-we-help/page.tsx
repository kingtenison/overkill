import React from "react";
import Link from "next/link";
import { WHO_WE_HELP_SECTORS } from "@/data/content";
import { Zap, Building2, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Building2,
  Layers,
  ShieldCheck,
};

const GUIDANCE = [
  {
    headline: "Validate fast, earn revenue faster.",
    trap:
      "Six months and a big budget spent on features nobody asked for.",
    approach:
      "Lean MVPs built for one thing: customer adoption. Prototype, launch, learn, iterate.",
    systems: [
      "Rapid interactive prototypes",
      "Full-stack web apps",
      "Scalable cloud databases",
      "Stripe payment onboarding",
    ],
  },
  {
    headline: "Grow 3x without hiring 3x.",
    trap:
      "Memory, sticky notes, and phone calls — until peak season breaks everything.",
    approach:
      "Automate intake, booking, and reminders so your team serves customers instead of shuffling paperwork.",
    systems: [
      "Direct web ordering",
      "Automated appointment reminders",
      "Client self-service portals",
      "CRM integrations",
    ],
  },
  {
    headline: "Retire the spreadsheets for good.",
    trap:
      "Fourteen disconnected sheets and aging desktop tools quietly running the business.",
    approach:
      "One fast, secure command center shaped around how your team actually works.",
    systems: [
      "Custom business platforms",
      "Multi-role staff dashboards",
      "Data migration & cleanup",
      "Intelligent workflow automation",
    ],
  },
  {
    headline: "Dignified, accessible, simple.",
    trap:
      "Confusing portals that alienate elderly or non-technical users.",
    approach:
      "High-contrast, WCAG-conscious gateways where complex services take one tap to complete.",
    systems: [
      "Patient & clinic portals",
      "Community registration tools",
      "Document processing pipelines",
      "Secure record management",
    ],
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who we help",
  description:
    "Stages and sectors we build for — first-site velocity, scaling operations, modernizing legacy tools and regulated practices.",
};

export default function WhoWeHelpPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        label="Who we help"
        title={
          <>
            Built for your stage, <span className="marker">not a template</span>.
          </>
        }
        lede="From first prototype to legacy modernization — the systems adapt to your reality, not the other way around."
      />

      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {WHO_WE_HELP_SECTORS.map((sector, idx) => {
            const Icon = ICONS[sector.icon] ?? Zap;
            const guide = GUIDANCE[idx];
            return (
              <article
                key={sector.title}
                className="card p-6 sm:p-8 flex flex-col gap-5 reveal"
                style={{ "--reveal-delay": `${(idx % 2) * 70}ms` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-sky-tint border border-ink/12 text-ink">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="pill pill-flame">{sector.badge}</span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-2xl font-bold text-ink tracking-tight">
                    {sector.title}
                  </h2>
                  <p className="text-base font-semibold text-ink">
                    {guide.headline}
                  </p>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-sky-tint border border-ink/10">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-flame" />
                      The trap
                    </span>
                    <p className="text-sm text-ink leading-relaxed">
                      {guide.trap}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-ink text-white">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-flame block mb-1.5">
                      Our play
                    </span>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      {guide.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-3 pt-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70 block">
                    Systems we deploy
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {guide.systems.map((s) => (
                      <li
                        key={s}
                        className="px-3 py-1.5 rounded-full bg-white border border-ink/12 text-xs font-bold text-ink"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/start-a-project?sector=${encodeURIComponent(sector.title)}`}
                    className="btn btn-ghost btn-sm w-full"
                  >
                    <span>Discuss your sector</span>
                    <ArrowRight className="w-4 h-4 text-flame-deep" />
                  </Link>
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

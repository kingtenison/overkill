import React from "react";
import {
  HeartHandshake,
  Eye,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";

const values = [
  {
    icon: HeartHandshake,
    title: "Genuine care",
    body: "We treat your project like our own money and reputation are on the line.",
  },
  {
    icon: Eye,
    title: "Attention to detail",
    body: "Micro-interactions, mobile ergonomics, and code that holds under load.",
  },
  {
    icon: CheckCircle2,
    title: "Ownership & pride",
    body: "No blame-shifting. We own the architecture from kickoff to warranty.",
  },
  {
    icon: ShieldCheck,
    title: "Persistence",
    body: "We keep iterating until the experience feels effortless.",
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the studio",
  description:
    "We build websites, business systems and automation around how your business actually works. You describe the problem — we handle the tech.",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        label="About"
        title={
          <>
            We don&apos;t stop at <span className="marker">good enough</span>.
          </>
        }
        lede="OVERKILL Studios is a digital solutions company. We solve real operational problems with custom systems, platforms, and automation — in plain English."
      />

      {/* Philosophy */}
      <section className="w-full pb-6 sm:pb-10">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="pill">The name</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                OVERKILL doesn&apos;t mean over-engineering.
              </h2>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                It means we don&apos;t stop the moment the requirement is
                technically checked off. We listen, solve, refine, and keep
                going until the solution genuinely makes your business better —
                and holds up in the real world.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-[24px] bg-ink text-white flex flex-col justify-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-flame block mb-2">
                Our conviction
              </span>
              <p className="text-lg sm:text-xl font-display font-semibold leading-snug">
                &ldquo;Technology should make things easier, not harder. You
                don&apos;t need to know what to build — tell us what
                you&apos;re trying to solve.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full pb-6 sm:pb-10">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div className="space-y-3">
              <span className="pill">How we work</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                Four things we <span className="marker">refuse</span> to skip.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card card-hover p-6 flex flex-col gap-4 reveal"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-sky-tint border border-ink/12 text-ink">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="text-sm text-ink/75 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="card p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-3xl card-flame grid place-items-center mb-4">
                  <span className="font-display font-bold text-4xl text-white">
                    HJ
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink">
                  Hansen Addy Joy
                </h3>
                <p className="text-xs font-bold text-ink/70 mt-1">
                  Founder · Software &amp; Digital Solutions
                </p>
              </div>

              <div className="md:col-span-9 space-y-4">
                <span className="pill !text-[11px]">The person behind OVERKILL</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  Real human friction, solved by a real partner.
                </h3>
                <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
                  Hansen started OVERKILL to be the technology partner he
                  wished existed: one that speaks plain language, targets
                  operational bottlenecks, and genuinely cares whether the
                  thing works after launch.
                </p>
                <div className="pt-4 border-t border-ink/10">
                  <a
                    href="http://portfolio-roan-six-92.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <span>Hansen&apos;s portfolio</span>
                    <ArrowUpRight className="w-4 h-4 text-flame-deep" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

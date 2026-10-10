import React from "react";
import Link from "next/link";
import { Mail, Clock, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Tell us what's slow, broken or stuck. Every inquiry gets a reply within 24 hours on business days.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        label="Contact"
        title={
          <>
            No perfect brief needed. <span className="marker">Just start</span>.
          </>
        }
        lede="Tell us what you're trying to accomplish, what's broken, or where you want to go — we'll take it from there."
      />

      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Primary */}
          <div className="md:col-span-7 card p-6 sm:p-9 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <span className="pill pill-flame">Fastest route</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                Have a project or a problem in mind?
              </h2>
              <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
                The intake takes under 2 minutes. Every submission gets a reply
                within 24 hours — a real diagnosis and a proposed next step, not
                a sales script.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {[
                  "Reply within 24 hours",
                  "Fixed milestones, agreed upfront",
                  "Post-launch warranty",
                  "You own everything",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs font-bold text-ink/75"
                  >
                    <span
                      aria-hidden
                      className="mt-[6px] w-1.5 h-1.5 rounded-full bg-flame shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/start-a-project" className="btn btn-primary w-full">
              <span>Start the intake</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Channels */}
          <div className="md:col-span-5 card p-6 sm:p-7 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-ink">Talk to us</h3>

            <div className="space-y-3">
              <a
                href="mailto:kingtenison@gmail.com"
                className="flex items-start gap-3 p-4 rounded-2xl bg-sky-tint border border-ink/10 hover:border-ink transition-colors"
              >
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-flame text-ink shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70">
                    Email
                  </span>
                  <span className="block text-xs font-bold text-ink break-words tracking-tight">
                    kingtenison@gmail.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-sky-tint border border-ink/10">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-white border border-ink/12 text-ink shrink-0">
                  <Clock className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70">
                    Response time
                  </span>
                  <span className="block text-sm font-bold text-ink">
                    Within 24 hours, business days
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-sky-tint border border-ink/10">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-white border border-ink/12 text-ink shrink-0">
                  <Globe className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/70">
                    Where we work
                  </span>
                  <span className="block text-sm font-bold text-ink">
                    Remote-first, delivering worldwide
                  </span>
                </span>
              </div>
            </div>

            <p className="mt-auto pt-3 flex items-start gap-2 text-xs font-semibold text-ink/75 border-t border-ink/10">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-flame text-ink shrink-0">
                <ShieldCheck className="w-3 h-3" />
              </span>
              We never sell your data or send marketing spam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck, Timer, BadgeCheck } from "lucide-react";

const assurances = [
  { icon: Timer, label: "Reply within 24 hours" },
  { icon: ShieldCheck, label: "30-Day Launch Warranty" },
  { icon: BadgeCheck, label: "100% Code & IP Ownership" },
];

export default function FinalCTA() {
  return (
    <section className="w-full py-16 sm:py-24" id="contact">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        <div
          className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#03061d] border border-white/15 px-5 sm:px-12 py-12 sm:py-24 text-center shadow-[0_25px_60px_-15px_rgba(0,0,153,0.35),0_15px_40px_-10px_rgba(255,102,0,0.25)] reveal"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(46, 68, 255, 0.25), transparent 75%), radial-gradient(circle at 90% 90%, rgba(255, 102, 0, 0.28), transparent 60%), radial-gradient(circle at 10% 90%, rgba(255, 102, 0, 0.18), transparent 60%)",
          }}
        >
          {/* Subtle tactical blueprint grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(183, 219, 255, 0.5) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/10 text-white border border-white/15 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-flame animate-pulse" />
              Start something real
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
              Got a problem{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame via-[#ff8533] to-[#ffaa66]">
                worth solving?
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-body max-w-xl mx-auto">
              Tell us what is slow, broken, or stuck. We&apos;ll reply with a
              plain-English plan — fixed scope, timeline, and guaranteed price —
              before any work begins.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-3">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-base bg-flame hover:bg-flame-hover !text-white shadow-xl shadow-flame/30 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span className="!text-white">Start a project</span>
                <ArrowRight className="w-4 h-4 !text-white" />
              </Link>
              <a
                href="mailto:kingtenison@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-semibold text-base bg-white/10 hover:bg-white/20 !text-white border border-white/20 hover:border-white/30 backdrop-blur-md transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 !text-white" />
                <span className="!text-white">Email us directly</span>
              </a>
            </div>

            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300">
              {assurances.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 font-mono"
                >
                  <Icon className="w-4 h-4 text-flame shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

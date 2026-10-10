import React from "react";
import { Clock } from "lucide-react";

const assurances = [
  "Reply within 24 hours",
  "Fixed milestones before we start",
  "Post-launch warranty",
];

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative w-full pt-16 pb-16 sm:pt-28 sm:pb-24 overflow-hidden scroll-mt-20"
    >
      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto text-center flex flex-col items-center">
        <span
          className="pill pill-ink shadow-[0_10px_20px_-10px_rgba(0,0,0,0.6)] inline-flex mb-8 reveal"
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <Clock className="w-3.5 h-3.5" />
          How we work
        </span>

        <h2
          className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold font-display text-ink tracking-tight leading-[1.08] text-balance mx-auto reveal"
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          Tell us the problem.<br />
          <span className="marker text-ink">We build the fix.</span>
        </h2>

        <p
          className="mt-8 text-lg sm:text-xl md:text-2xl text-ink/75 leading-relaxed font-medium max-w-3xl mx-auto text-balance reveal"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
        >
          Websites, business systems, and automation built around how
          your business actually works —{" "}
          <span className="text-ink font-bold">
            no jargon, no guesswork, no half-finished handoffs.
          </span>
        </p>

        <ul
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 pt-10 border-t border-ink/10 text-sm font-semibold text-ink/70 reveal"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          {assurances.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-flame" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

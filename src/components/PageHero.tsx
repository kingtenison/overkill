import React from "react";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  lede?: string;
}

export default function PageHero({ label, title, lede }: PageHeroProps) {
  return (
    <section className="relative w-full pt-10 sm:pt-14 pb-10 sm:pb-14 overflow-hidden">
      {/* Dot-grid atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.06) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 0%, black 25%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 0%, black 25%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-20 w-[380px] h-[380px] rounded-full bg-white/50 blur-3xl pointer-events-none"
      />

      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        <span
          className="pill pill-flame reveal"
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          {label}
        </span>

        <h1
          className="mt-4 text-[2.3rem] leading-[1.05] sm:text-5xl xl:text-6xl font-bold text-ink tracking-tight max-w-4xl reveal"
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
        >
          {title}
        </h1>

        {lede && (
          <p
            className="mt-5 text-base sm:text-lg text-ink/75 font-semibold leading-relaxed max-w-2xl reveal"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

import React from "react";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  lede?: string;
  actions?: React.ReactNode;
  stats?: { value: string; label: string }[];
}

export default function PageHero({
  label,
  title,
  lede,
  actions,
  stats,
}: PageHeroProps) {
  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-8 sm:pb-12 overflow-hidden">
      {/* ── Homepage Signature Atmosphere ─────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none dot-grid opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 75% 30%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 75% 30%, black 20%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 right-[-5%] w-[500px] h-[500px] rounded-full bg-[#B7DBFF]/35 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 left-[-5%] w-[420px] h-[420px] rounded-full bg-flame/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-[15%] w-[320px] h-[320px] rounded-full bg-[#000099]/10 blur-3xl pointer-events-none"
      />

      {/* Subtle background rotating hex wireframe */}
      <div
        aria-hidden
        className="hidden md:block absolute right-[6%] top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] aspect-square pointer-events-none opacity-40"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full hero-spin text-[#000099]/25"
        >
          <polygon
            points="100,4 183,52 183,148 100,196 17,148 17,52"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 5"
          />
        </svg>
      </div>

      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        <div className="max-w-4xl">
          {/* Badge */}
          <span
            className="pill pill-flame reveal"
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-flame opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-flame" />
            </span>
            {label}
          </span>

          {/* Title */}
          <h1
            className="mt-3.5 sm:mt-4 text-[2.2rem] leading-[1.05] sm:text-5xl xl:text-6xl font-bold font-display text-ink tracking-tight reveal"
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            {title}
          </h1>

          {/* Subtitle / Lede */}
          {lede && (
            <p
              className="mt-4 sm:mt-5 text-sm sm:text-lg text-ink/75 font-semibold leading-relaxed max-w-2xl reveal"
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {lede}
            </p>
          )}

          {/* Optional Action Buttons */}
          {actions && (
            <div
              className="mt-6 flex flex-wrap items-center gap-3 reveal"
              style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
            >
              {actions}
            </div>
          )}

          {/* Optional Quick Stats */}
          {stats && stats.length > 0 && (
            <dl
              className="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 max-w-lg divide-x divide-ink/15 reveal"
              style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
            >
              {stats.map(({ value, label: statLabel }) => (
                <div
                  key={statLabel}
                  className="px-3 sm:px-4 first:pl-0"
                >
                  <dt className="sr-only">{statLabel}</dt>
                  <dd className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-ink tracking-tight leading-none">
                    {value}
                  </dd>
                  <dd className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
                    {statLabel}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

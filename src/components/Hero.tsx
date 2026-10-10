import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import logo from "../../public/hero-logo.png";

const proof = [
  { value: "24h", label: "First reply" },
  { value: "2–4 wks", label: "Typical launch" },
  { value: "100%", label: "You own it" },
];

const ticker = [
  "Websites",
  "Online stores",
  "Client portals",
  "Booking systems",
  "Dashboards",
  "Workflow automation",
  "AI assistants",
  "Integrations",
];



const d = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full lg:h-[calc(100vh-68px)] flex flex-col justify-between overflow-hidden"
    >
      {/* ── Atmosphere ─────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none dot-grid opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 70% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 70% 40%, black 20%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] w-[720px] h-[720px] rounded-full bg-[#B7DBFF]/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] w-[560px] h-[560px] rounded-full bg-flame/20 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 right-[20%] w-[420px] h-[420px] rounded-full bg-[#000099]/10 blur-3xl pointer-events-none"
      />

      {/* ── Main Content Area ──────────────────────── */}
      <div className="relative flex-1 min-h-0 flex items-center w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto py-6 sm:py-8 lg:py-2 xl:py-4">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Copy Column (contains text, mobile image between text and buttons, buttons, and metrics) */}
          <div className="lg:col-span-7 relative z-10">
            {/* 01: Hero Text — Pill */}
            <span className="pill text-[0.8rem] lg:text-[0.95rem] reveal" style={d(0)}>
              <span className="relative flex w-2 h-2 lg:w-2.5 lg:h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-flame opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-flame" />
              </span>
              Booking new projects
            </span>

            {/* 01: Hero Text — Headline */}
            <h1
              id="hero-title"
              className="mt-3.5 lg:mt-2.5 xl:mt-3 font-display font-extrabold text-ink tracking-[-0.045em] leading-[1.04] text-[2.5rem] sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[4.25rem] 2xl:text-[4.85rem] reveal"
              style={d(90)}
            >
              Turn technology into{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block text-ink">
                <span>your unfair advantage.</span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[0.16em] hero-underline"
                >
                  <path
                    d="M3 12 C 70 3, 160 3, 297 9"
                    fill="none"
                    stroke="#FF6600"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* 01: Hero Text — Subtitle */}
            <p
              className="mt-3 lg:mt-2.5 xl:mt-3.5 text-[1.05rem] sm:text-[1.25rem] lg:text-[1.35rem] xl:text-[1.5rem] text-ink/80 leading-relaxed max-w-[36rem] lg:max-w-[46rem] xl:max-w-[50rem] font-medium reveal"
              style={d(180)}
            >
              We build custom software and digital systems that{" "}
              <span className="text-ink font-bold">
                put your business miles ahead.
              </span>
            </p>

            {/* 02: Mobile-Only Big Hero Image (In Between Hero Text and CTA Buttons) */}
            <div className="lg:hidden my-6 sm:my-8 flex items-center justify-center">
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] aspect-square">
                {/* Rotating hex rings */}
                <svg
                  aria-hidden
                  viewBox="0 0 200 200"
                  className="absolute inset-[-14%] w-[128%] h-[128%] hero-spin text-[#000099]/25"
                >
                  <polygon
                    points="100,4 183,52 183,148 100,196 17,148 17,52"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="3 5"
                  />
                </svg>

                {/* Image Container */}
                <div className="absolute inset-[6%] flex items-center justify-center pointer-events-none">
                  <Image
                    src={logo}
                    alt="ØVĒRKILL Engineering logo — Turn technology into your unfair advantage."
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 640px) 400px, 85vw"
                    className="relative w-full h-full object-contain drop-shadow-2xl scale-[1.22]"
                  />
                </div>
              </div>
            </div>

            {/* 03: CTA Buttons — Side-by-side on mobile and desktop */}
            <div
              className="flex flex-row items-center gap-2.5 sm:gap-3 mt-6 lg:mt-4 xl:mt-6 reveal"
              style={d(260)}
            >
              <Link
                href="/start-a-project"
                id="hero-start-project"
                className="btn btn-primary text-xs sm:text-base px-3.5 sm:px-7 py-3 sm:py-3.5 flex-1 sm:flex-none justify-center whitespace-nowrap"
              >
                <span>Start a project</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="/work"
                id="hero-see-work"
                className="btn btn-ghost text-xs sm:text-base px-3.5 sm:px-7 py-3 sm:py-3.5 flex-1 sm:flex-none justify-center whitespace-nowrap"
              >
                <span>See the work</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-flame" />
              </Link>
            </div>

            {/* 04: The Rest — Proof Metrics */}
            <dl
              className="mt-7 lg:mt-4 xl:mt-6 grid grid-cols-3 max-w-lg lg:max-w-xl xl:max-w-2xl divide-x divide-ink/15 reveal"
              style={d(340)}
            >
              {proof.map(({ value, label }) => (
                <div key={label} className="px-2.5 sm:px-4 lg:px-5 first:pl-0">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display font-extrabold text-[1.45rem] sm:text-[1.95rem] lg:text-[2.06rem] xl:text-[2.56rem] text-ink tracking-tight leading-none">
                    {value}
                  </dd>
                  <dd className="mt-1 text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[15px] font-bold uppercase tracking-[0.14em] text-ink/55">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Desktop-Only Hero Image Stage (Right Column) */}
          <div
            className="hidden lg:flex lg:col-span-5 relative reveal items-center justify-center"
            style={d(200)}
          >
            <div className="relative mx-auto w-full max-w-[500px] xl:max-w-[600px] 2xl:max-w-[640px] aspect-square">
              {/* Rotating hex rings */}
              <svg
                aria-hidden
                viewBox="0 0 200 200"
                className="absolute inset-[-14%] w-[128%] h-[128%] hero-spin text-[#000099]/25"
              >
                <polygon
                  points="100,4 183,52 183,148 100,196 17,148 17,52"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  strokeDasharray="3 5"
                />
              </svg>

              {/* Image Container */}
              <div className="absolute inset-[8%] flex items-center justify-center pointer-events-none">
                <Image
                  src={logo}
                  alt="ØVĒRKILL Engineering logo — Turn technology into your unfair advantage."
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 550px, 80vw"
                  className="relative w-full h-full object-contain drop-shadow-xl scale-[1.22]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ─────────────────────────────── */}
      <a
        href="#services"
        id="hero-scroll-cue"
        aria-label="Scroll to learn more"
        className="relative z-10 mx-auto mb-2 shrink-0 hidden md:flex flex-col items-center gap-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-ink/50 hover:text-ink hover:translate-y-0.5 transition-all"
      >
        Scroll
        <ChevronDown className="w-3.5 h-3.5" />
      </a>

      {/* ── Blue Tagline Marquee Ticker (Anchored At Bottom) ─── */}
      <div
        aria-hidden
        className="relative w-full shrink-0 border-y border-[#000099]/20 bg-[#000099] text-white overflow-hidden shadow-inner"
      >
        <div className="flex w-max hero-marquee">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center">
              {ticker.map((t) => (
                <li
                  key={`${dup}-${t}`}
                  className="flex items-center gap-6 px-6 py-3 font-display font-semibold text-xs sm:text-sm md:text-base tracking-tight whitespace-nowrap"
                >
                  {t}
                  <span className="text-flame text-lg leading-none font-bold">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

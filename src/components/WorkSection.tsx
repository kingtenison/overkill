"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Sparkles,
  Cpu,
  Activity,
  Zap,
  Lock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const MOBILE_PROJECTS = [
  {
    id: "prophet",
    num: "01",
    shortName: "Prophet",
    name: "PROPHET Intelligence",
    category: "Data & Analytics",
    url: "prophet-delta.vercel.app",
    liveUrl: "https://prophet-delta.vercel.app/",
    caseStudyUrl: "/work/prophet-market-intelligence",
    image: "/images/projects/prophet.png",
    tagline: "Turn messy spreadsheets into clear business charts in seconds",
    outcome: "Replaced complex PowerBI setups with instant local CSV charts generated in under 60 seconds with complete data privacy.",
    bg: "#060a1a",
    gradient: "radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.25), transparent 50%), radial-gradient(circle at 15% 85%, rgba(99, 102, 241, 0.2), transparent 50%)",
    border: "border-blue-500/40",
    badgeBorder: "border-blue-400/40",
    badgeBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    pillActive: "bg-blue-500/25 text-blue-200 border-blue-400/60",
    Icon: Activity,
    ctaBtn: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    ctaLabel: "Launch PROPHET",
  },
  {
    id: "fileforge",
    num: "02",
    shortName: "FileForge",
    name: "FileForge Suite",
    category: "File Tools",
    url: "fileforge-iota.vercel.app",
    liveUrl: "https://fileforge-iota.vercel.app/",
    caseStudyUrl: "/work/fileforge",
    image: "/images/projects/fileforge.png",
    tagline: "Convert files directly in your browser without uploading them",
    outcome: "Free in-browser file converter powered by WebAssembly. Zero uploads, zero waiting queues, and complete privacy.",
    bg: "#070c17",
    gradient: "radial-gradient(circle at 80% 12%, rgba(6, 182, 212, 0.25), transparent 50%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2), transparent 50%)",
    border: "border-cyan-500/40",
    badgeBorder: "border-cyan-400/40",
    badgeBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    pillActive: "bg-cyan-500/25 text-cyan-200 border-cyan-400/60",
    Icon: Cpu,
    ctaBtn: "bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#070c17]",
    ctaLabel: "Launch Tool",
  },
  {
    id: "linkplatform",
    num: "03",
    shortName: "LinkPlatform",
    name: "LinkPlatform",
    category: "Marketing Links",
    url: "link-platform-two.vercel.app",
    liveUrl: "https://link-platform-two.vercel.app/",
    caseStudyUrl: "/work/link-platform",
    image: "/images/projects/linkplatform-v2.png",
    tagline: "Fast link shortener with live stats and free QR codes",
    outcome: "Sub-10ms redirect speed with live stats and free QR codes, replacing costly $35–$300/mo link tool subscriptions.",
    bg: "#070f1e",
    gradient: "radial-gradient(circle at 85% 15%, rgba(0, 242, 254, 0.25), transparent 50%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.22), transparent 50%)",
    border: "border-cyan-400/40",
    badgeBorder: "border-cyan-400/40",
    badgeBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    pillActive: "bg-cyan-500/25 text-cyan-200 border-cyan-400/60",
    Icon: Zap,
    ctaBtn: "bg-gradient-to-r from-cyan-400 to-blue-400 text-[#070f1e]",
    ctaLabel: "Launch Tool",
  },
  {
    id: "spicegrille",
    num: "04",
    shortName: "Spice Grille",
    name: "The Spice Grille",
    category: "Restaurant System",
    url: "thespicegrille.com",
    liveUrl: "https://www.thespicegrille.com/",
    caseStudyUrl: "/work/the-spice-grille",
    image: "/images/projects/spicegrille.png",
    tagline: "Direct food ordering website that cuts out delivery app fees",
    outcome: "Direct online food ordering website bypassing 30% delivery app fees with orders routed straight to the kitchen.",
    bg: "#120e0a",
    gradient: "radial-gradient(circle at 80% 10%, rgba(220, 38, 38, 0.28), transparent 50%), radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.18), transparent 50%)",
    border: "border-red-500/40",
    badgeBorder: "border-red-500/40",
    badgeBg: "bg-red-600/20",
    iconColor: "text-red-500",
    pillActive: "bg-red-500/25 text-red-200 border-red-500/60",
    Icon: Flame,
    ctaBtn: "bg-gradient-to-r from-red-600 to-amber-600 text-white",
    ctaLabel: "Visit Site",
  },
  {
    id: "wylde",
    num: "05",
    shortName: "W Y L D E",
    name: "W Y L D E",
    category: "Luxury Jewelry",
    url: "wylde-or.vercel.app",
    liveUrl: "https://wylde-or.vercel.app/",
    caseStudyUrl: "/work/wylde-atelier",
    image: "/images/projects/wylde.png",
    tagline: "Interactive website for custom fine jewelry",
    outcome: "Interactive 360° atelier letting buyers inspect fine jewelry craftsmanship and book private appointments.",
    bg: "#0a0806",
    gradient: "radial-gradient(circle at 85% 15%, rgba(212, 175, 55, 0.25), transparent 50%), radial-gradient(circle at 15% 85%, rgba(130, 95, 30, 0.2), transparent 50%)",
    border: "border-amber-500/40",
    badgeBorder: "border-amber-400/40",
    badgeBg: "bg-amber-500/20",
    iconColor: "text-[#D4AF37]",
    pillActive: "bg-amber-500/25 text-amber-200 border-amber-400/60",
    Icon: Sparkles,
    ctaBtn: "bg-gradient-to-r from-[#D4AF37] to-[#F5E6BE] text-black",
    ctaLabel: "Experience WYLDE",
  },
  {
    id: "dental",
    num: "06",
    shortName: "Dental Hub",
    name: "New Vision Dental Hub",
    category: "Healthcare Booking",
    url: "newvisiondentalclinic.com",
    liveUrl: "https://www.newvisiondentalclinic.com/",
    caseStudyUrl: "/work/new-vision-dental-clinic",
    image: "/images/projects/newvisiondental-v2.png",
    tagline: "Online booking for 3 dental clinics in Accra",
    outcome: "Multi-clinic online booking hub eliminating phone backlogs with instant WhatsApp booking confirmations.",
    bg: "#07142d",
    gradient: "radial-gradient(circle at 85% 15%, rgba(0, 210, 255, 0.25), transparent 50%), radial-gradient(circle at 15% 85%, rgba(30, 64, 175, 0.28), transparent 50%)",
    border: "border-cyan-400/40",
    badgeBorder: "border-cyan-400/40",
    badgeBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    pillActive: "bg-cyan-500/25 text-cyan-200 border-cyan-400/60",
    Icon: Sparkles,
    ctaBtn: "bg-gradient-to-r from-cyan-400 to-sky-300 text-[#07142d]",
    ctaLabel: "Visit Clinic",
  },
];

export default function WorkSection() {
  const [row1Active, setRow1Active] = useState<"prophet" | "fileforge">("prophet");
  const [row2Active, setRow2Active] = useState<"linkplatform" | "spicegrille">("spicegrille");
  const [row3Active, setRow3Active] = useState<"wylde" | "dental">("wylde");

  return (
    <section 
      id="work" 
      className="relative w-full py-14 sm:py-32 overflow-hidden bg-[#03061d] text-white border-y border-white/10"
    >
      {/* Background Ambience & Textures */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Subtle tactical blueprint grid */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(rgba(183, 219, 255, 0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Radial Bloom 1: Royal / Cobalt Glow top right */}
        <div 
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2e44ff 0%, #000099 60%, transparent 80%)",
          }}
        />

        {/* Ambient Radial Bloom 2: Electric Flame Orange Glow bottom left */}
        <div 
          className="absolute -bottom-32 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #ff6600 0%, #e55a00 50%, transparent 80%)",
          }}
        />

        {/* Soft center ambient wash */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #1e3a8a 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase font-mono bg-white/10 text-blue-200 border border-white/15 backdrop-blur-md">
                Selected Work
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-flame bg-flame/15 border border-flame/30 px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3 text-flame" />
                Hover cards to expand
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight font-display">
              Real problems.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-flame via-[#ff8533] to-[#ffaa66]">
                Fixed with software
              </span>
              .
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-body">
              No buzzwords, no vanity metrics. Here is what was broken for each client, and the exact software we built to solve it.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-display bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all backdrop-blur-md shrink-0 self-start md:self-auto shadow-md"
          >
            <span>All 6 case studies</span>
            <ArrowUpRight className="w-4 h-4 text-flame" />
          </Link>
        </div>

        {/* ── MOBILE BENTO SHOWCASE: TRUE 2-COLUMN BENTO GRID (NO VERTICAL STACK) ── */}
        <div className="md:hidden grid grid-cols-2 gap-2.5">
          {/* CARD 01: PROPHET (WIDE HERO BENTO CARD) */}
          {(() => {
            const p = MOBILE_PROJECTS[0];
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="col-span-2 rounded-2xl p-4 flex flex-col justify-between overflow-hidden border shadow-xl"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: p.gradient,
                  borderColor: "rgba(59, 130, 246, 0.35)",
                }}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-5 h-5 rounded-md ${p.badgeBg} border ${p.badgeBorder} grid place-items-center shrink-0`}>
                        <Icon className={`w-3 h-3 ${p.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-300 truncate">
                        {p.url}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                        Live
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-blue-400 block mb-0.5">
                      01 · {p.category}
                    </span>
                    <Link href={p.caseStudyUrl} className="hover:text-blue-300 transition-colors">
                      <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight font-display">
                        {p.name}
                      </h3>
                    </Link>
                    <p className="mt-0.5 text-xs text-slate-300 leading-snug">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Scaled Preview Window */}
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-md">
                    <div className="flex items-center justify-between px-2 py-1 bg-white/[0.04] border-b border-white/10 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[9px] text-stone-400 font-mono truncate max-w-[140px]">
                        {p.url}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-blue-400 uppercase">
                        Bento Hero
                      </span>
                    </div>
                    <div className="relative w-full h-28 overflow-hidden bg-slate-950">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        unoptimized
                        className="object-cover object-top"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Outcome summary */}
                  <div className="rounded-lg p-2 bg-white/[0.05] border border-white/10 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-200 leading-snug font-medium">
                      {p.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
                  <Link
                    href={p.caseStudyUrl}
                    className="text-xs font-bold text-stone-300 hover:text-white transition-colors"
                  >
                    Case story →
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-extrabold ${p.ctaBtn} shadow-sm`}
                  >
                    <span>{p.ctaLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })()}

          {/* CARD 02: FILEFORGE (SIDE-BY-SIDE BENTO TILE) */}
          {(() => {
            const p = MOBILE_PROJECTS[1];
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="col-span-1 rounded-2xl p-3 flex flex-col justify-between overflow-hidden border shadow-lg"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: p.gradient,
                  borderColor: "rgba(6, 182, 212, 0.35)",
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <div className={`w-5 h-5 rounded-md ${p.badgeBg} border ${p.badgeBorder} grid place-items-center shrink-0`}>
                      <Icon className={`w-3 h-3 ${p.iconColor}`} />
                    </div>
                    <span className="text-[8.5px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      ● Live
                    </span>
                  </div>

                  <div>
                    <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-cyan-400 block">
                      02 · {p.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-white tracking-tight leading-snug font-display mt-0.5 truncate">
                      {p.name}
                    </h3>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full h-18 rounded-lg overflow-hidden border border-white/10 bg-slate-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="50vw"
                    />
                  </div>

                  <p className="text-[10px] text-slate-300 leading-snug line-clamp-2">
                    In-browser WASM converter. Zero server uploads.
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between gap-1">
                  <Link
                    href={p.caseStudyUrl}
                    className="text-[10px] font-bold text-stone-300 hover:text-white"
                  >
                    Story →
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-extrabold ${p.ctaBtn}`}
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </article>
            );
          })()}

          {/* CARD 03: LINKPLATFORM (SIDE-BY-SIDE BENTO TILE) */}
          {(() => {
            const p = MOBILE_PROJECTS[2];
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="col-span-1 rounded-2xl p-3 flex flex-col justify-between overflow-hidden border shadow-lg"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: p.gradient,
                  borderColor: "rgba(0, 242, 254, 0.35)",
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <div className={`w-5 h-5 rounded-md ${p.badgeBg} border ${p.badgeBorder} grid place-items-center shrink-0`}>
                      <Icon className={`w-3 h-3 ${p.iconColor}`} />
                    </div>
                    <span className="text-[8.5px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      ● Live
                    </span>
                  </div>

                  <div>
                    <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-cyan-400 block">
                      03 · {p.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-white tracking-tight leading-snug font-display mt-0.5 truncate">
                      {p.name}
                    </h3>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full h-18 rounded-lg overflow-hidden border border-white/10 bg-slate-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="50vw"
                    />
                  </div>

                  <p className="text-[10px] text-slate-300 leading-snug line-clamp-2">
                    Sub-10ms redirects, analytics &amp; free QR codes.
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between gap-1">
                  <Link
                    href={p.caseStudyUrl}
                    className="text-[10px] font-bold text-stone-300 hover:text-white"
                  >
                    Story →
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-extrabold ${p.ctaBtn}`}
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </article>
            );
          })()}

          {/* CARD 04: THE SPICE GRILLE (WIDE RESTAURANT BENTO CARD) */}
          {(() => {
            const p = MOBILE_PROJECTS[3];
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="col-span-2 rounded-2xl p-4 flex flex-col justify-between overflow-hidden border shadow-xl"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: p.gradient,
                  borderColor: "rgba(220, 38, 38, 0.35)",
                }}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-5 h-5 rounded-md ${p.badgeBg} border ${p.badgeBorder} grid place-items-center shrink-0`}>
                        <Icon className={`w-3 h-3 ${p.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-300 truncate">
                        {p.url}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                        Live
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-amber-400 block mb-0.5">
                      04 · {p.category}
                    </span>
                    <Link href={p.caseStudyUrl} className="hover:text-amber-300 transition-colors">
                      <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight font-display">
                        {p.name}
                      </h3>
                    </Link>
                    <p className="mt-0.5 text-xs text-slate-300 leading-snug">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Scaled Preview Window */}
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-md">
                    <div className="flex items-center justify-between px-2 py-1 bg-white/[0.04] border-b border-white/10 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[9px] text-stone-400 font-mono truncate max-w-[140px]">
                        {p.url}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-amber-400 uppercase">
                        Bento Hero
                      </span>
                    </div>
                    <div className="relative w-full h-28 overflow-hidden bg-slate-950">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        unoptimized
                        className="object-cover object-top"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Outcome summary */}
                  <div className="rounded-lg p-2 bg-white/[0.05] border border-white/10 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-200 leading-snug font-medium">
                      Direct online food ordering website bypassing 30% delivery app fees.
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
                  <Link
                    href={p.caseStudyUrl}
                    className="text-xs font-bold text-stone-300 hover:text-white transition-colors"
                  >
                    Case story →
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-extrabold ${p.ctaBtn} shadow-sm`}
                  >
                    <span>{p.ctaLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })()}

          {/* CARD 05: W Y L D E (SIDE-BY-SIDE LUXURY BENTO TILE) */}
          {(() => {
            const p = MOBILE_PROJECTS[4];
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="col-span-1 rounded-2xl p-3 flex flex-col justify-between overflow-hidden border shadow-lg"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: p.gradient,
                  borderColor: "rgba(212, 175, 55, 0.35)",
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <div className={`w-5 h-5 rounded-md ${p.badgeBg} border ${p.badgeBorder} grid place-items-center shrink-0`}>
                      <Icon className={`w-3 h-3 ${p.iconColor}`} />
                    </div>
                    <span className="text-[8.5px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      ● Live
                    </span>
                  </div>

                  <div>
                    <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-[#D4AF37] block">
                      05 · {p.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-white tracking-tight leading-snug font-display mt-0.5 truncate">
                      {p.name}
                    </h3>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full h-18 rounded-lg overflow-hidden border border-white/10 bg-slate-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="50vw"
                    />
                  </div>

                  <p className="text-[10px] text-slate-300 leading-snug line-clamp-2">
                    Interactive bespoke atelier for fine jewelry craftsmanship.
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between gap-1">
                  <Link
                    href={p.caseStudyUrl}
                    className="text-[10px] font-bold text-stone-300 hover:text-white"
                  >
                    Story →
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-extrabold ${p.ctaBtn}`}
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </article>
            );
          })()}

          {/* CARD 06: DENTAL CLINIC HUB (SIDE-BY-SIDE HEALTHCARE BENTO TILE) */}
          {(() => {
            const p = MOBILE_PROJECTS[5];
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="col-span-1 rounded-2xl p-3 flex flex-col justify-between overflow-hidden border shadow-lg"
                style={{
                  backgroundColor: p.bg,
                  backgroundImage: p.gradient,
                  borderColor: "rgba(0, 210, 255, 0.35)",
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <div className={`w-5 h-5 rounded-md ${p.badgeBg} border ${p.badgeBorder} grid place-items-center shrink-0`}>
                      <Icon className={`w-3 h-3 ${p.iconColor}`} />
                    </div>
                    <span className="text-[8.5px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      ● Live
                    </span>
                  </div>

                  <div>
                    <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-cyan-400 block">
                      06 · {p.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-white tracking-tight leading-snug font-display mt-0.5 truncate">
                      {p.name}
                    </h3>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full h-18 rounded-lg overflow-hidden border border-white/10 bg-slate-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="50vw"
                    />
                  </div>

                  <p className="text-[10px] text-slate-300 leading-snug line-clamp-2">
                    Multi-clinic booking eliminating phone queues.
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between gap-1">
                  <Link
                    href={p.caseStudyUrl}
                    className="text-[10px] font-bold text-stone-300 hover:text-white"
                  >
                    Story →
                  </Link>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-extrabold ${p.ctaBtn}`}
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </article>
            );
          })()}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            DESKTOP ONLY: SIGNATURE HOVER-EXPANDING BENTO BOX ROWS
            Active card dynamically expands to become the wider hero card!
        ───────────────────────────────────────────────────────────── */}
        <div className="hidden md:block space-y-8">

          {/* ═══════════════════════════════════════════════════════════
              ROW 1: PROPHET INTELLIGENCE & FILEFORGE SUITE
          ═══════════════════════════════════════════════════════════ */}
          <div
            className="flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch"
            onMouseLeave={() => setRow1Active("prophet")}
          >
            {/* CARD 1: PROPHET INTELLIGENCE */}
            {(() => {
              const isWide = row1Active === "prophet";
              return (
                <article
                  onMouseEnter={() => setRow1Active("prophet")}
                  className={`bento-card group relative rounded-3xl flex flex-col justify-between overflow-hidden text-left border cursor-pointer ${
                    isWide
                      ? "bento-card-wide p-4 sm:p-8 border-blue-500/50 shadow-2xl"
                      : "bento-card-compact p-4 sm:p-7 border-blue-500/25 shadow-lg opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: "#060a1a",
                    backgroundImage:
                      "radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.22), transparent 50%), radial-gradient(circle at 15% 85%, rgba(99, 102, 241, 0.18), transparent 50%)",
                    boxShadow: isWide
                      ? "0 25px 50px -12px rgba(59, 130, 246, 0.22)"
                      : "0 15px 30px -10px rgba(59, 130, 246, 0.10)",
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 grid place-items-center">
                          <Activity className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-xs font-bold text-blue-200 tracking-wider truncate max-w-[200px]">
                          prophet-delta.vercel.app
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-[11px] font-bold text-blue-300 uppercase tracking-widest font-mono">
                          Live System
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-400/90 block mb-1">
                        Data &amp; Analytics
                      </span>
                      <Link href="/work/prophet-market-intelligence" className="hover:text-blue-300 transition-colors">
                        <h3 className={`font-extrabold text-white tracking-tight leading-tight font-display ${isWide ? "text-2xl sm:text-3xl" : "text-2xl"}`}>
                          PROPHET Intelligence
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-blue-200/90 font-medium leading-snug">
                        Turn messy spreadsheets into clear business charts in seconds
                      </p>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/preview">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-stone-300 font-mono truncate max-w-[180px]">
                          <Lock className="w-2.5 h-2.5 text-blue-400 shrink-0" />
                          <span className="truncate">prophet-delta.vercel.app</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider font-mono">
                          Interactive
                        </span>
                      </div>
                      <div className={`relative w-full overflow-hidden bg-slate-950 transition-all duration-700 ${isWide ? "h-36 sm:h-60" : "h-32 sm:h-48"}`}>
                        <Image
                          src="/images/projects/prophet.png"
                          alt="PROPHET Intelligence live platform preview"
                          fill
                          unoptimized
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060a1a]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Mobile Consolidated Outcome Capsule */}
                    <div className="sm:hidden rounded-xl p-3 bg-blue-950/40 border border-blue-500/25 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300 font-mono">
                          Outcome &amp; Impact
                        </span>
                      </div>
                      <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                        Replaced complex PowerBI setups with instant local CSV charts generated in under 60 seconds with complete data privacy.
                      </p>
                    </div>

                    {/* Desktop / Tablet: Dual Problem & What It Solved */}
                    <div className={`hidden sm:grid pt-1 ${isWide ? "grid-cols-2 gap-3.5" : "grid-cols-1 gap-2.5"}`}>
                      <div className="rounded-2xl p-4 bg-slate-900/60 border border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">
                            The Problem
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          Business owners spend hours making charts from messy spreadsheets, or get stuck trying to learn complicated tools like PowerBI.
                        </p>
                      </div>

                      <div className="rounded-2xl p-4 bg-blue-950/40 border border-blue-500/25 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-300">
                            What It Solved
                          </span>
                        </div>
                        <p className="text-xs text-stone-200 leading-relaxed font-medium">
                          Drop in any CSV file and get clean, presentation-ready charts in less than a minute. Everything runs locally on your computer with complete privacy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                    <Link
                      href="/work/prophet-market-intelligence"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-300 hover:text-white transition-colors group/link"
                    >
                      <span>Read full story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-400 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <a
                      href="https://prophet-delta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md hover:shadow-blue-500/25"
                    >
                      <span>Launch PROPHET</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })()}

            {/* CARD 2: FILEFORGE SUITE */}
            {(() => {
              const isWide = row1Active === "fileforge";
              return (
                <article
                  onMouseEnter={() => setRow1Active("fileforge")}
                  className={`bento-card group relative rounded-3xl flex flex-col justify-between overflow-hidden text-left border cursor-pointer ${
                    isWide
                      ? "bento-card-wide p-4 sm:p-8 border-cyan-500/50 shadow-2xl"
                      : "bento-card-compact p-4 sm:p-7 border-cyan-800/40 shadow-lg opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: "#070c17",
                    backgroundImage:
                      "radial-gradient(circle at 80% 12%, rgba(6, 182, 212, 0.22), transparent 50%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.18), transparent 50%)",
                    boxShadow: isWide
                      ? "0 25px 50px -12px rgba(6, 182, 212, 0.22)"
                      : "0 15px 30px -10px rgba(6, 182, 212, 0.10)",
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 grid place-items-center">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-xs font-bold text-cyan-200 tracking-wider truncate max-w-[200px]">
                          fileforge-iota.vercel.app
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                          Live System
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400/90 block mb-1">
                        File Tools
                      </span>
                      <Link href="/work/fileforge" className="hover:text-emerald-400 transition-colors">
                        <h3
                          className={`font-extrabold text-white tracking-tight leading-tight ${isWide ? "text-2xl sm:text-3xl" : "text-2xl"}`}
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          FileForge Suite
                        </h3>
                      </Link>
                      <p className="mt-1 text-xs text-cyan-200/90 font-medium leading-relaxed">
                        Convert files directly in your browser without uploading them
                      </p>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/preview">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500/70" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] text-stone-400 font-mono">fileforge-iota</span>
                        <span className="text-[10px] font-bold text-emerald-400 font-mono">WASM</span>
                      </div>
                      <div className={`relative w-full overflow-hidden bg-slate-950 transition-all duration-700 ${isWide ? "h-36 sm:h-60" : "h-32 sm:h-48"}`}>
                        <Image
                          src="/images/projects/fileforge.png"
                          alt="FileForge live tool preview"
                          fill
                          unoptimized
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070c17]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Mobile Consolidated Outcome Capsule */}
                    <div className="sm:hidden rounded-xl p-3 bg-emerald-950/40 border border-emerald-500/25 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 font-mono">
                          Outcome &amp; Impact
                        </span>
                      </div>
                      <p className="text-xs text-stone-200 leading-relaxed font-medium">
                        Free in-browser file converter powered by WebAssembly. Zero uploads, zero waiting queues, and complete privacy.
                      </p>
                    </div>

                    {/* Desktop / Tablet: Dual Problem & What It Solved */}
                    <div className={`hidden sm:grid pt-1 ${isWide ? "grid-cols-2 gap-3.5" : "grid-cols-1 gap-2.5"}`}>
                      <div className="rounded-xl p-3 bg-slate-900/60 border border-slate-700/40 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3 h-3 text-slate-400" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                            The Problem
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-300 leading-relaxed">
                          Most free converters make you upload private files to external servers, force you to wait in line, and charge monthly fees.
                        </p>
                      </div>

                      <div className="rounded-xl p-3 bg-emerald-950/40 border border-emerald-500/25 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                            What It Solved
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-200 leading-relaxed font-medium">
                          A free web tool that converts files directly on your computer inside the browser. No uploads, no waiting, and complete privacy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                    <Link
                      href="/work/fileforge"
                      className="text-xs font-bold text-stone-300 hover:text-white transition-colors"
                    >
                      Read story →
                    </Link>
                    <a
                      href="https://fileforge-iota.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold text-[#070c17] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md"
                    >
                      <span>Launch Tool</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })()}
          </div>


          {/* ═══════════════════════════════════════════════════════════
              ROW 2: LINKPLATFORM & THE SPICE GRILLE
          ═══════════════════════════════════════════════════════════ */}
          <div
            className="flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch"
            onMouseLeave={() => setRow2Active("spicegrille")}
          >
            {/* CARD 3: LINKPLATFORM */}
            {(() => {
              const isWide = row2Active === "linkplatform";
              return (
                <article
                  onMouseEnter={() => setRow2Active("linkplatform")}
                  className={`bento-card group relative rounded-3xl flex flex-col justify-between overflow-hidden text-left border cursor-pointer ${
                    isWide
                      ? "bento-card-wide p-4 sm:p-8 border-cyan-400/50 shadow-2xl"
                      : "bento-card-compact p-4 sm:p-7 border-cyan-800/40 shadow-lg opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: "#070f1e",
                    backgroundImage:
                      "radial-gradient(circle at 85% 15%, rgba(0, 242, 254, 0.22), transparent 50%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.2), transparent 50%)",
                    boxShadow: isWide
                      ? "0 25px 50px -12px rgba(0, 242, 254, 0.22)"
                      : "0 15px 30px -10px rgba(0, 242, 254, 0.10)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 grid place-items-center">
                          <Zap className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-xs font-bold text-cyan-200 tracking-wider truncate max-w-[200px]">
                          link-platform-two.vercel.app
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest font-mono">
                          Live System
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-400/90 block mb-1">
                        Marketing Links
                      </span>
                      <Link href="/work/link-platform" className="hover:text-cyan-300 transition-colors">
                        <h3 className={`font-extrabold text-white tracking-tight leading-tight ${isWide ? "text-2xl sm:text-3xl" : "text-2xl"}`}>
                          LinkPlatform
                        </h3>
                      </Link>
                      <p className="mt-1 text-xs text-cyan-200/90 font-medium leading-relaxed">
                        Fast link shortener with live stats and free QR codes
                      </p>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/preview">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500/70" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] text-stone-400 font-mono">link-platform</span>
                        <span className="text-[10px] font-bold text-cyan-300 font-mono">&lt;10ms</span>
                      </div>
                      <div className={`relative w-full overflow-hidden bg-slate-950 transition-all duration-700 ${isWide ? "h-36 sm:h-60" : "h-32 sm:h-48"}`}>
                        <Image
                          src="/images/projects/linkplatform-v2.png"
                          alt="LinkPlatform live dashboard preview"
                          fill
                          unoptimized
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070f1e]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Mobile Consolidated Outcome Capsule */}
                    <div className="sm:hidden rounded-xl p-3 bg-cyan-950/40 border border-cyan-500/25 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 font-mono">
                          Outcome &amp; Impact
                        </span>
                      </div>
                      <p className="text-xs text-stone-200 leading-relaxed font-medium">
                        Sub-10ms redirect speed with live stats and free QR codes, replacing costly $35–$300/mo link tool subscriptions.
                      </p>
                    </div>

                    {/* Desktop / Tablet: Dual Problem & What It Solved */}
                    <div className={`hidden sm:grid pt-1 ${isWide ? "grid-cols-2 gap-3.5" : "grid-cols-1 gap-2.5"}`}>
                      <div className="rounded-xl p-3 bg-slate-900/60 border border-slate-800 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3 h-3 text-slate-400" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                            The Problem
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-300 leading-relaxed">
                          Services like Bitly charge $35 to $300 a month just for custom links, and their links are slow to redirect on phones.
                        </p>
                      </div>

                      <div className="rounded-xl p-3 bg-cyan-950/40 border border-cyan-500/25 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                            What It Solved
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-200 leading-relaxed font-medium">
                          A fast link shortener that opens in milliseconds, provides free QR codes, and tracks clicks without any monthly subscription.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                    <Link
                      href="/work/link-platform"
                      className="text-xs font-bold text-stone-300 hover:text-white transition-colors"
                    >
                      Read story →
                    </Link>
                    <a
                      href="https://link-platform-two.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold text-[#070f1e] bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all shadow-md"
                    >
                      <span>Launch Tool</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })()}

            {/* CARD 4: THE SPICE GRILLE */}
            {(() => {
              const isWide = row2Active === "spicegrille";
              return (
                <article
                  onMouseEnter={() => setRow2Active("spicegrille")}
                  className={`bento-card group relative rounded-3xl flex flex-col justify-between overflow-hidden text-left border cursor-pointer ${
                    isWide
                      ? "bento-card-wide p-4 sm:p-8 border-red-500/50 shadow-2xl"
                      : "bento-card-compact p-4 sm:p-7 border-amber-900/40 shadow-lg opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: "#120e0a",
                    backgroundImage:
                      "radial-gradient(circle at 80% 10%, rgba(220, 38, 38, 0.25), transparent 50%), radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.15), transparent 50%)",
                    boxShadow: isWide
                      ? "0 25px 50px -12px rgba(220, 38, 38, 0.22)"
                      : "0 15px 30px -10px rgba(220, 38, 38, 0.10)",
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/40 grid place-items-center">
                          <Flame className="w-4 h-4 text-red-500" />
                        </div>
                        <span className="text-xs font-bold text-stone-300 tracking-wider truncate max-w-[200px]">
                          thespicegrille.com
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                          Live System
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-red-400/90 block mb-1">
                        Restaurant System
                      </span>
                      <Link href="/work/the-spice-grille" className="hover:text-red-400 transition-colors">
                        <h3 className={`font-extrabold text-white tracking-tight leading-tight font-display ${isWide ? "text-2xl sm:text-3xl" : "text-2xl"}`}>
                          The Spice Grille
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-[#fcd34d]/90 font-medium leading-snug">
                        Direct food ordering website that cuts out delivery app fees
                      </p>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/preview">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-stone-300 font-mono truncate max-w-[180px]">
                          <Lock className="w-2.5 h-2.5 text-red-400 shrink-0" />
                          <span className="truncate">thespicegrille.com</span>
                        </div>
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider font-mono">
                          Direct Orders
                        </span>
                      </div>
                      <div className={`relative w-full overflow-hidden bg-stone-950 transition-all duration-700 ${isWide ? "h-36 sm:h-60" : "h-32 sm:h-48"}`}>
                        <Image
                          src="/images/projects/spicegrille.png"
                          alt="The Spice Grille live website preview"
                          fill
                          unoptimized
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Mobile Consolidated Outcome Capsule */}
                    <div className="sm:hidden rounded-xl p-3 bg-amber-950/35 border border-amber-500/25 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 font-mono">
                          Outcome &amp; Impact
                        </span>
                      </div>
                      <p className="text-xs text-stone-200 leading-relaxed font-medium">
                        Direct food ordering website bypassing 30% delivery app fees with orders routed straight to the kitchen.
                      </p>
                    </div>

                    {/* Desktop / Tablet: Dual Problem & What It Solved */}
                    <div className={`hidden sm:grid pt-1 ${isWide ? "grid-cols-2 gap-3.5" : "grid-cols-1 gap-2.5"}`}>
                      <div className="rounded-2xl p-4 bg-red-950/35 border border-red-500/25 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400">
                            The Problem
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          Delivery apps like DoorDash took 30% of every order, and taking orders over the phone during busy dinner hours caused lost tickets and long customer waits.
                        </p>
                      </div>

                      <div className="rounded-2xl p-4 bg-amber-950/35 border border-amber-500/25 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                            What It Solved
                          </span>
                        </div>
                        <p className="text-xs text-stone-200 leading-relaxed font-medium">
                          A simple online ordering website where customers order directly from the restaurant. The kitchen gets orders instantly, and the owners keep 100% of the money.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                    <Link
                      href="/work/the-spice-grille"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-300 hover:text-white transition-colors group/link"
                    >
                      <span>Read full story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-400 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <a
                      href="https://www.thespicegrille.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 transition-all shadow-md"
                    >
                      <span>Visit TheSpiceGrille.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })()}
          </div>


          {/* ═══════════════════════════════════════════════════════════
              ROW 3: WYLDE ATELIER & NEW VISION DENTAL
          ═══════════════════════════════════════════════════════════ */}
          <div
            className="flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch"
            onMouseLeave={() => setRow3Active("wylde")}
          >
            {/* CARD 5: WYLDE ATELIER */}
            {(() => {
              const isWide = row3Active === "wylde";
              return (
                <article
                  onMouseEnter={() => setRow3Active("wylde")}
                  className={`bento-card group relative rounded-3xl flex flex-col justify-between overflow-hidden text-left border cursor-pointer ${
                    isWide
                      ? "bento-card-wide p-4 sm:p-8 border-amber-500/50 shadow-2xl"
                      : "bento-card-compact p-4 sm:p-7 border-amber-500/25 shadow-lg opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: "#0a0806",
                    backgroundImage:
                      "radial-gradient(circle at 85% 15%, rgba(212, 175, 55, 0.22), transparent 50%), radial-gradient(circle at 15% 85%, rgba(130, 95, 30, 0.18), transparent 50%)",
                    boxShadow: isWide
                      ? "0 25px 50px -12px rgba(212, 175, 55, 0.22)"
                      : "0 15px 30px -10px rgba(212, 175, 55, 0.10)",
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 grid place-items-center">
                          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <span className="text-xs font-bold text-amber-200 tracking-wider truncate max-w-[200px]">
                          wylde-or.vercel.app
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
                          Live System
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D4AF37] block mb-1">
                        Luxury Jewelry
                      </span>
                      <Link href="/work/wylde-atelier" className="hover:text-amber-300 transition-colors">
                        <h3
                          className={`font-extrabold text-[#F5E6BE] tracking-[0.2em] leading-tight ${isWide ? "text-2xl sm:text-3xl" : "text-2xl"}`}
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          W Y L D E
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-stone-300 font-medium leading-snug">
                        Interactive website for custom fine jewelry
                      </p>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/preview">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-stone-300 font-mono truncate max-w-[180px]">
                          <Lock className="w-2.5 h-2.5 text-[#D4AF37] shrink-0" />
                          <span className="truncate">wylde-or.vercel.app</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
                          360° Atelier
                        </span>
                      </div>
                      <div className={`relative w-full overflow-hidden bg-stone-950 transition-all duration-700 ${isWide ? "h-36 sm:h-60" : "h-32 sm:h-48"}`}>
                        <Image
                          src="/images/projects/wylde.png"
                          alt="WYLDE live atelier preview"
                          fill
                          unoptimized
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Mobile Consolidated Outcome Capsule */}
                    <div className="sm:hidden rounded-xl p-3 bg-[#211a10] border border-[#D4AF37]/35 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D4AF37] font-mono">
                          Outcome &amp; Impact
                        </span>
                      </div>
                      <p className="text-xs text-[#f5e6be] leading-relaxed font-medium">
                        Interactive 360° atelier letting buyers inspect fine jewelry craftsmanship and book private appointments.
                      </p>
                    </div>

                    {/* Desktop / Tablet: Dual Problem & What It Solved */}
                    <div className={`hidden sm:grid pt-1 ${isWide ? "grid-cols-2 gap-3.5" : "grid-cols-1 gap-2.5"}`}>
                      <div className="rounded-2xl p-4 bg-stone-900/60 border border-stone-800 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-200/80">
                            The Problem
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          Selling luxury jewelry on a basic online shop doesn&apos;t work. Normal photos cannot show how the gold shines or how well the pieces are made.
                        </p>
                      </div>

                      <div className="rounded-2xl p-4 bg-[#211a10] border border-[#D4AF37]/35 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#D4AF37]">
                            What It Solved
                          </span>
                        </div>
                        <p className="text-xs text-[#f5e6be] leading-relaxed font-medium">
                          An interactive site where buyers can smoothly spin and zoom in on each piece like holding a magnifying glass, then book a private in-person appointment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                    <Link
                      href="/work/wylde-atelier"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-300 hover:text-white transition-colors group/link"
                    >
                      <span>Read full story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <a
                      href="https://wylde-or.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-black bg-gradient-to-r from-[#D4AF37] to-[#F5E6BE] hover:from-[#c9a32c] hover:to-[#ebd49f] transition-all shadow-md"
                    >
                      <span>Experience WYLDE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })()}

            {/* CARD 6: NEW VISION DENTAL */}
            {(() => {
              const isWide = row3Active === "dental";
              return (
                <article
                  onMouseEnter={() => setRow3Active("dental")}
                  className={`bento-card group relative rounded-3xl flex flex-col justify-between overflow-hidden text-left border cursor-pointer ${
                    isWide
                      ? "bento-card-wide p-4 sm:p-8 border-cyan-400/50 shadow-2xl"
                      : "bento-card-compact p-4 sm:p-7 border-cyan-900/40 shadow-lg opacity-90 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: "#07142d",
                    backgroundImage:
                      "radial-gradient(circle at 85% 15%, rgba(0, 210, 255, 0.22), transparent 50%), radial-gradient(circle at 15% 85%, rgba(30, 64, 175, 0.25), transparent 50%)",
                    boxShadow: isWide
                      ? "0 25px 50px -12px rgba(0, 210, 255, 0.22)"
                      : "0 15px 30px -10px rgba(0, 210, 255, 0.10)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  <div className="space-y-5">
                    {/* Card Meta Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 grid place-items-center">
                          <Sparkles className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-xs font-bold text-cyan-100 tracking-wider truncate max-w-[200px]">
                          newvisiondentalclinic.com
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest font-mono">
                          Live System
                        </span>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-400/90 block mb-1">
                        Healthcare Booking
                      </span>
                      <Link href="/work/new-vision-dental-clinic" className="hover:text-cyan-300 transition-colors">
                        <h3 className={`font-extrabold text-white tracking-tight leading-tight ${isWide ? "text-2xl sm:text-3xl" : "text-2xl"}`}>
                          New Vision Dental Hub
                        </h3>
                      </Link>
                      <p className="mt-1 text-xs text-cyan-200/90 font-medium leading-relaxed">
                        Online booking for 3 dental clinics in Accra
                      </p>
                    </div>

                    {/* Live Website Preview Window */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl group/preview">
                      <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500/70" />
                          <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[10px] text-stone-400 font-mono">newvisiondental</span>
                        <span className="text-[10px] font-bold text-cyan-300 font-mono">3 Clinics</span>
                      </div>
                      <div className={`relative w-full overflow-hidden bg-slate-950 transition-all duration-700 ${isWide ? "h-36 sm:h-60" : "h-32 sm:h-48"}`}>
                        <Image
                          src="/images/projects/newvisiondental-v2.png"
                          alt="New Vision Dental live clinic website preview"
                          fill
                          unoptimized
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Mobile Consolidated Outcome Capsule */}
                    <div className="sm:hidden rounded-xl p-3 bg-cyan-950/40 border border-cyan-500/25 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 font-mono">
                          Outcome &amp; Impact
                        </span>
                      </div>
                      <p className="text-xs text-stone-200 leading-relaxed font-medium">
                        Multi-clinic online booking hub eliminating phone backlogs with instant WhatsApp booking confirmations.
                      </p>
                    </div>

                    {/* Desktop / Tablet: Dual Problem & What It Solved */}
                    <div className={`hidden sm:grid pt-1 ${isWide ? "grid-cols-2 gap-3.5" : "grid-cols-1 gap-2.5"}`}>
                      <div className="rounded-xl p-3 bg-blue-950/40 border border-blue-500/25 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <AlertTriangle className="w-3 h-3 text-blue-400" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300">
                            The Problem
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-300 leading-relaxed">
                          Managing 3 clinics by phone meant receptionists were buried in calls all day, leading to missed calls and patients giving up.
                        </p>
                      </div>

                      <div className="rounded-xl p-3 bg-cyan-950/40 border border-cyan-500/25 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                            What It Solved
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-200 leading-relaxed font-medium">
                          A simple online booking site where patients pick their branch and schedule appointments in under a minute with WhatsApp confirmation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                    <Link
                      href="/work/new-vision-dental-clinic"
                      className="text-xs font-bold text-stone-300 hover:text-white transition-colors"
                    >
                      Read story →
                    </Link>
                    <a
                      href="https://www.newvisiondentalclinic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold text-[#07142d] bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-md"
                    >
                      <span>Visit Clinic</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })()}
          </div>

        </div>
      </div>
    </section>
  );
}

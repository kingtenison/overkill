"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Sparkles,
  Compass,
  ShieldCheck,
  Users,
  Flame,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";
import logoMark from "../../public/images/overkill-mark.png";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    label: "Work & Case Studies",
    href: "/work",
    badge: "6 Live",
    description: "Real client systems, architecture & measured business outcomes",
    icon: Layers,
  },
  {
    label: "Solutions & Services",
    href: "/solutions",
    description: "Websites, custom web apps, workflow automation & AI assistants",
    icon: Sparkles,
  },
  {
    label: "Milestone Pricing",
    href: "/pricing",
    badge: "Fixed Scope",
    description: "Four transparent engagement tiers, deliverables & post-launch warranty",
    icon: ShieldCheck,
  },
  {
    label: "Our Process",
    href: "/process",
    description: "6-stage delivery blueprint from technical discovery to weekly demos",
    icon: Compass,
  },
  {
    label: "Who We Help",
    href: "/who-we-help",
    description: "Startups, growing clinics, hospitality & modernizing operations",
    icon: Users,
  },
  {
    label: "About the Studio",
    href: "/about",
    description: "Hansen Addy Joy & our obsession with systems that actually work",
    icon: Flame,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on pathname change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation & outside click detection
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isOpen
          ? "bg-white border-b border-ink/10 shadow-lg"
          : scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-ink/10 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.2)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 flex items-center justify-between h-[68px]">
        {/* Brand Wordmark (Left) */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <Image
            src={logoMark}
            alt=""
            loading="eager"
            sizes="40px"
            className="w-9 h-auto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-[17px] text-ink tracking-tight">
              =[ØVĒRKILL]=
            </span>
            <span className="text-[9px] font-extrabold tracking-[0.3em] text-ink/60 uppercase mt-0.5">
              Studios
            </span>
          </span>
        </Link>

        {/* Center / Status Indicator (Desktop only) */}
        <div className="hidden xl:flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-ink/10 text-[11px] font-mono font-bold text-ink/70 shadow-xs">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <span>Available for New Projects</span>
        </div>

        {/* Right Controls (Universal on all viewports) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Contact Link (Desktop only) */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hidden sm:inline-flex text-xs lg:text-sm font-bold font-display text-ink hover:text-flame transition-colors px-2 py-1"
          >
            Contact
          </Link>

          {/* Primary Action Button */}
          <Link
            href="/start-a-project"
            onClick={() => setIsOpen(false)}
            id="nav-start-project-btn"
            className="btn btn-primary text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 sm:text-sm shadow-sm"
          >
            <span className="whitespace-nowrap">Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </Link>

          {/* Universal Hamburger / Menu Toggle Button */}
          <button
            ref={buttonRef}
            id="nav-menu-toggle"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className={`group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full font-display text-xs sm:text-sm font-bold transition-all duration-200 border cursor-pointer select-none ${
              isOpen
                ? "bg-ink text-white border-ink shadow-md"
                : "bg-white text-ink border-ink/15 hover:border-ink hover:bg-sky-tint shadow-xs"
            }`}
          >
            <span className="hidden xs:inline">
              {isOpen ? "Close" : "Menu"}
            </span>
            <span className="grid place-items-center w-4 h-4 sm:w-4 sm:h-4">
              {isOpen ? (
                <X className="w-4 h-4 text-flame transition-transform group-hover:rotate-90 duration-200" />
              ) : (
                <Menu className="w-4 h-4 text-ink transition-transform group-hover:scale-110 duration-200" />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* ── Universal Executive Dropdown Menu Overlay ── */}
      {isOpen && (
        <>
          {/* Subtle backdrop blur curtain */}
          <div
            aria-hidden
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[68px] bg-ink/25 backdrop-blur-xs z-40 transition-opacity"
          />

          {/* Floating Dropdown Card */}
          <div
            ref={menuRef}
            id="nav-dropdown-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            className="relative z-50 w-full bg-white/95 backdrop-blur-2xl border-b border-ink/10 shadow-[0_30px_60px_-15px_rgba(3,6,29,0.35)] py-6 sm:py-10 animate-in fade-in slide-in-from-top-3 duration-200 overflow-y-auto max-h-[calc(100dvh-72px)]"
          >
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* ── Left: Navigation Grid (7 Cols on Desktop) ── */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-2.5">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-ink/60">
                      Explore =[ØVĒRKILL]= Studios
                    </span>
                    <span className="text-[10px] font-mono font-bold text-flame">
                      6 Core Sections
                    </span>
                  </div>

                  <nav
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3"
                    aria-label="Dropdown Links"
                  >
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 relative ${
                            isActive
                              ? "bg-ink text-white border-ink shadow-md"
                              : "bg-sky-tint/60 text-ink border-ink/10 hover:border-ink hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <span
                            className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                              isActive
                                ? "bg-flame text-white shadow-xs"
                                : "bg-white border border-ink/10 text-royal group-hover:text-flame group-hover:border-flame/30"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`text-sm sm:text-base font-bold font-display tracking-tight leading-snug ${
                                  isActive
                                    ? "text-white"
                                    : "text-ink group-hover:text-flame transition-colors"
                                }`}
                              >
                                {item.label}
                              </span>

                              {item.badge && (
                                <span
                                  className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                                    isActive
                                      ? "bg-flame/30 text-white border border-flame/40"
                                      : "bg-ink/5 text-ink/70 border border-ink/10"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>

                            <p
                              className={`text-[11px] sm:text-xs leading-relaxed mt-1 line-clamp-2 ${
                                isActive ? "text-white/75" : "text-ink/65"
                              }`}
                            >
                              {item.description}
                            </p>
                          </div>

                          <ArrowRight
                            className={`w-3.5 h-3.5 shrink-0 self-center transition-transform duration-200 group-hover:translate-x-1 ${
                              isActive
                                ? "text-flame"
                                : "text-ink/30 group-hover:text-flame"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Secondary Quick Links row */}
                  <div className="pt-2 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-ink/75">
                    <div className="flex items-center gap-4">
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-flame transition-colors flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5 text-flame" />
                        <span>Direct Contact</span>
                      </Link>
                      <span>•</span>
                      <a
                        href="https://portfolio-roan-six-92.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-flame transition-colors flex items-center gap-1"
                      >
                        <span>Founder Portfolio</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <span className="text-[11px] font-mono text-ink/50 hidden sm:inline">
                      Press <kbd className="px-1.5 py-0.5 bg-ink/5 border border-ink/15 rounded text-[10px]">Esc</kbd> to close
                    </span>
                  </div>
                </div>

                {/* ── Right: Executive Action Bento Card (5 Cols on Desktop) ── */}
                <div className="lg:col-span-5 card card-ink p-6 sm:p-7 text-white border border-white/10 flex flex-col justify-between gap-5 relative overflow-hidden shadow-2xl">
                  {/* Subtle lighting bloom */}
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-royal/40 blur-3xl pointer-events-none"
                  />
                  <div
                    aria-hidden
                    className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-flame/25 blur-3xl pointer-events-none"
                  />

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="pill pill-flame !text-[10px] !py-0.5 !px-2.5">
                        Direct Founder Channel
                      </span>
                      <span className="text-[10px] font-mono font-bold text-white/60">
                        Hansen Addy Joy
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight leading-snug">
                      Ready to eliminate operational bottlenecks?
                    </h3>

                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-medium">
                      Skip the agency runaround. Describe your challenge in plain English and receive a structured technical roadmap within 24 hours.
                    </p>

                    <div className="space-y-2 pt-1">
                      {[
                        "Guaranteed reply within 24 hours",
                        "Fixed milestone price before work starts",
                        "100% full source code & IP ownership",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs font-semibold text-white/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-flame shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-white/10 space-y-2">
                    <Link
                      href="/start-a-project"
                      onClick={() => setIsOpen(false)}
                      className="btn btn-primary w-full justify-center text-xs sm:text-sm py-3"
                    >
                      <span>Launch Guided Intake</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-white/60">
                      <Clock className="w-3 h-3 text-flame" />
                      <span>Takes &lt; 2 mins • Zero obligation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

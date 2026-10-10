"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import logoMark from "../../public/images/overkill-mark.png";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/78 backdrop-blur-xl border-b border-ink/10 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.2)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 flex items-center justify-between h-[68px]">
        {/* Wordmark */}
        <Link
          href="/"
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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-ink border border-ink/12 shadow-[0_6px_16px_-12px_rgba(0,0,0,0.25)]"
                    : "text-ink/75 hover:text-ink hover:bg-white/60 border border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-bold font-display text-ink hover:underline underline-offset-4 decoration-flame decoration-2 transition-all"
          >
            Contact
          </Link>
          <Link href="/start-a-project" className="btn btn-primary btn-sm">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/start-a-project" className="btn btn-primary text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 sm:text-sm">
            <span className="whitespace-nowrap">Start a project</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 rounded-xl text-ink hover:bg-white/70 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white/92 backdrop-blur-xl border-t border-ink/10 px-4 sm:px-6 py-5 shadow-[0_24px_40px_-30px_rgba(0,0,0,0.3)]">
          <nav className="grid gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-sky-tint/70 border border-ink/10 font-semibold text-ink hover:border-ink/30 hover:bg-white transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-flame" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-sky-tint/70 border border-ink/10 font-semibold text-ink hover:border-ink/30 hover:bg-white transition-colors"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-flame" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

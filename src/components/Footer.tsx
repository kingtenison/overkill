import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import logoMark from "../../public/images/overkill-mark.png";

const footerLinks = {
  Studio: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/solutions" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
  "Get Started": [
    { label: "Pricing", href: "/pricing" },
    { label: "Who We Help", href: "/who-we-help" },
    { label: "Start a Project", href: "/start-a-project" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="w-full text-white rounded-t-[28px] mt-4 border-t border-[#000099]/40"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 100% 0%, rgba(0, 0, 153, 0.45), transparent 58%), linear-gradient(158deg, #050824 0%, #080d38 55%, #020414 100%)",
        boxShadow: "inset 0 1px 0 rgba(183,219,255,0.25)",
      }}
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image
                src={logoMark}
                alt=""
                className="w-9 h-auto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight">
                  =[ØVĒRKILL]=
                </span>
                <span className="text-[9px] font-extrabold tracking-[0.3em] text-white/60 uppercase mt-0.5">
                  Studios
                </span>
              </span>
            </Link>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              We build websites, business systems, and automation around how
              your business actually works. You describe the problem — we
              handle the tech.
            </p>

            <a
              href="mailto:kingtenison@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-flame hover:text-ice transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>kingtenison@gmail.com</span>
            </a>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="pill !bg-flame !border-flame !text-white font-bold">
                Reply in 24h
              </span>
              <span className="pill !bg-white !border-white !text-royal font-bold">
                Fixed milestones
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-3">
              <h3 className="text-xs font-display font-bold tracking-[0.2em] text-flame uppercase">
                {heading}
              </h3>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-flame transition-colors font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>&copy; 2026 =[ØVĒRKILL]= STUDIOS. Beyond good enough.</p>
          <div className="flex items-center gap-2" aria-label="Brand palette">
            <span className="w-4 h-4 rounded-full bg-[#B7DBFF]" title="#B7DBFF (Ice Blue)" />
            <span className="w-4 h-4 rounded-full bg-[#000099] border border-white/20" title="#000099 (Royal Blue)" />
            <span className="w-4 h-4 rounded-full bg-[#FF6600]" title="#FF6600 (Electric Orange)" />
          </div>
          <a
            href="https://portfolio-roan-six-92.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-flame transition-colors font-semibold"
          >
            <span>Founder portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

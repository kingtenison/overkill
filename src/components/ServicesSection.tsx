import React from "react";
import Link from "next/link";
import {
  Globe,
  LayoutDashboard,
  AppWindow,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { SOLUTION_CATEGORIES } from "@/data/content";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  LayoutDashboard,
  AppWindow,
  Sparkles,
};

/* Bento spans: On mobile 2 + (1 + 1) + 2; On desktop 4 + 2 / 3 + 3 */
const SPANS = [
  "col-span-2 lg:col-span-4",
  "col-span-1 lg:col-span-2",
  "col-span-1 lg:col-span-3",
  "col-span-2 lg:col-span-3",
];

export default function ServicesSection() {
  // Headline four on the homepage; Modernization lives on /solutions.
  const items = SOLUTION_CATEGORIES.filter((c) => c.id !== "digital-transformation");

  return (
    <section className="w-full pt-1 sm:pt-4 pb-12 sm:pb-20" id="services">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        {/* Section head */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-3 sm:space-y-4">
            <span className="pill">What we build</span>
            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-ink tracking-tight max-w-xl">
              Four ways we <span className="marker">earn our keep</span>.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="btn btn-ghost btn-sm shrink-0 self-start sm:self-auto"
          >
            <span>All services</span>
            <ArrowUpRight className="w-4 h-4 text-flame" />
          </Link>
        </div>

        {/* Bento grid — 2-column on mobile, 6-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2.5 sm:gap-5">
          {items.map((cat, i) => {
            const Icon = ICONS[cat.iconName] ?? Globe;
            const feature = i === 0;

            if (feature) {
              return (
                <Link
                  key={cat.id}
                  href={`/solutions#${cat.slug}`}
                  className={`group card card-ink card-hover p-4 sm:p-8 flex flex-col justify-between gap-3 sm:gap-6 min-h-0 sm:min-h-[240px] ${SPANS[i]} reveal`}
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="grid place-items-center w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-flame text-white">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                      <h3 className="mt-2.5 sm:mt-4 text-lg sm:text-3xl font-bold text-white">
                        {cat.title}
                      </h3>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-base text-white/70 max-w-md leading-relaxed">
                        {cat.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 transition-all duration-300 group-hover:text-flame group-hover:-translate-y-0.5" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {cat.capabilities.slice(0, 4).map((cap, capIdx) => (
                      <span
                        key={cap}
                        className={`text-[10px] sm:text-xs font-semibold text-white/85 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full bg-white/[0.09] border border-white/12 ${
                          capIdx >= 3 ? "hidden sm:inline-flex" : ""
                        }`}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            }

            // Cards 1 and 2 are compact side-by-side tiles on mobile (col-span-1); Card 3 is col-span-2
            const isHalfWidthMobile = i === 1 || i === 2;

            return (
              <Link
                key={cat.id}
                href={`/solutions#${cat.slug}`}
                className={`group card card-hover ${
                  isHalfWidthMobile ? "p-3 sm:p-7" : "p-4 sm:p-7"
                } flex flex-col justify-between gap-2.5 sm:gap-5 min-h-0 sm:min-h-[260px] border border-ink/8 hover:border-royal/30 hover:shadow-lg transition-all duration-300 ${SPANS[i]} reveal`}
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <span className="grid place-items-center w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl bg-royal/10 border border-royal/15 text-royal transition-all duration-300 group-hover:scale-105 group-hover:bg-royal group-hover:text-white shadow-sm shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-ink/30 transition-all duration-300 group-hover:text-flame group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className={`${
                      isHalfWidthMobile ? "text-sm sm:text-2xl" : "text-base sm:text-2xl"
                    } font-bold font-display text-ink tracking-tight leading-snug`}>
                      {cat.title}
                    </h3>
                    <p className={`text-[10.5px] sm:text-sm leading-snug text-ink/70 ${
                      isHalfWidthMobile ? "line-clamp-2 sm:line-clamp-none" : ""
                    }`}>
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                  {/* Pills: on half-width mobile, show 1 key pill; on tablet/desktop, show 3 */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 border-t border-ink/8 pt-2 sm:pt-3">
                    {cat.capabilities.slice(0, isHalfWidthMobile ? 1 : 3).map((cap) => (
                      <span
                        key={cap}
                        className="text-[9px] sm:text-[11px] font-semibold text-ink/75 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-sky-soft border border-ink/8 truncate max-w-full"
                      >
                        {cap}
                      </span>
                    ))}
                    {isHalfWidthMobile && cat.capabilities.slice(1, 3).map((cap) => (
                      <span
                        key={cap}
                        className="hidden sm:inline-flex text-[11px] font-semibold text-ink/75 px-2.5 py-1 rounded-lg bg-sky-soft border border-ink/8"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10.5px] sm:text-xs font-bold font-display text-royal group-hover:text-flame transition-colors pt-0.5 sm:pt-1">
                    <span>{isHalfWidthMobile ? "Details" : "See system details"}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

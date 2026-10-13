import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex items-center justify-center py-16 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-2xl text-center space-y-6">
        {/* Atmosphere badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#000099]/10 text-[#000099] border border-[#000099]/20 shadow-sm reveal">
          <span className="w-2 h-2 rounded-full bg-flame animate-ping" />
          <span>Error 404 • Route Unmapped</span>
        </div>

        {/* Big Glitch/Bento Hero Card */}
        <div className="card card-ink p-8 sm:p-14 text-white border border-white/15 shadow-2xl relative overflow-hidden reveal">
          <div
            aria-hidden
            className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-royal/40 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-flame/20 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 space-y-4">
            <span className="text-7xl sm:text-9xl font-extrabold font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-flame via-[#ff8533] to-[#ffaa66]">
              404
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              You&apos;ve wandered beyond the system boundary.
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
              The page or resource you requested doesn&apos;t exist, was moved to a new milestone, or never existed in the first place.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="btn btn-primary w-full sm:w-auto text-sm py-3 px-6 justify-center"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
              <Link
                href="/work"
                className="btn btn-ghost w-full sm:w-auto text-sm py-3 px-6 !text-white !border-white/20 hover:!bg-white/10 justify-center"
              >
                <Compass className="w-4 h-4 text-flame" />
                <span>Explore Live Work</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Helpful navigation breadcrumbs */}
        <p className="text-xs font-semibold text-ink/60">
          Looking to start something new?{" "}
          <Link
            href="/start-a-project"
            className="text-flame hover:underline underline-offset-4 font-bold"
          >
            Launch the Project Intake &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}

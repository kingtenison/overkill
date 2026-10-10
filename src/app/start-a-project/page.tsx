import React from "react";
import ProjectIntakeFlow from "@/components/ProjectIntakeFlow";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "No 20-page specification. Four short steps — goal, problem, context, contact — and we'll map the solution with you.",
};

export default function StartAProjectPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        label="Start a project"
        title={
          <>
            Tell us what you&apos;re <span className="marker">trying to solve</span>.
          </>
        }
        lede="No 20-page specification. Describe what's slow, broken, or stuck — we'll map the solution with you."
      />

      <section className="w-full pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
          <ProjectIntakeFlow />

          <div className="mt-10 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-bold text-ink/75">
            <span className="flex items-center gap-2">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-flame text-ink">
                <ShieldCheck className="w-3 h-3" />
              </span>
              100% confidential
            </span>
            <span className="flex items-center gap-2">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-flame text-ink">
                <Clock className="w-3 h-3" />
              </span>
              Reply within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <span className="grid place-items-center w-5 h-5 rounded-full bg-flame text-ink">
                <Sparkles className="w-3 h-3" />
              </span>
              Zero-obligation review
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PricingPreviewSection from "@/components/PricingPreviewSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 01 — HERO */}
      <Hero />

      {/* 02 — SERVICES: WHAT WE BUILD */}
      <ServicesSection />

      {/* 03 — SELECTED WORK: INTERACTIVE BENTO SHOWCASE */}
      <WorkSection />

      {/* 04 — UNIFIED HOW WE WORK: OPERATING SYSTEM & DELIVERY PIPELINE */}
      <HowWeWorkSection />

      {/* 05 — PRICING PREVIEW */}
      <PricingPreviewSection />

      {/* 06 — FINAL CTA */}
      <FinalCTA />
    </div>
  );
}

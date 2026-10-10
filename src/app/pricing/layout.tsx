import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & packages",
  description:
    "Four engagement tiers — START, GROW, TRANSFORM and CUSTOM — with clear deliverables, timelines, fixed milestones and a post-launch warranty.",
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

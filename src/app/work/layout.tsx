import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Real systems in production with measured outcomes — escrow, kitchen ordering, patient intake and operations platforms.",
};

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

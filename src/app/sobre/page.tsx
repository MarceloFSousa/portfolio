import type { Metadata } from "next";
import { AboutFull } from "@/components/sections/about-full";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre mim",
  description: `Conheça a trajetória profissional de ${siteConfig.fullName}: ${siteConfig.tagline}`,
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return <AboutFull />;
}

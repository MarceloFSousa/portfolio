import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { Technologies } from "@/components/sections/technologies";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GithubSection } from "@/components/sections/github-section";
import { MarketBridge } from "@/components/sections/market-bridge";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { siteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteJsonLd()} />
      <Hero />
      <AboutPreview />
      <Technologies />
      <FeaturedProjects />
      <GithubSection />
      <MarketBridge />
      <ContactCta />
    </>
  );
}

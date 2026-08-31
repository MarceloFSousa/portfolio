import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SeasonProvider } from "@/components/providers/season-provider";
import { SeasonScript } from "@/components/providers/season-script";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Fonte display leve (peso 300) usada só em títulos grandes — a interface
// (nav, botões, corpo de texto) continua na Inter.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.handle} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.handle}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "desenvolvedor de software",
    "mercado financeiro",
    "robôs de trading",
    "automação",
    "MQL5",
    "Next.js",
    "portfólio de desenvolvedor",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: `${siteConfig.handle} | ${siteConfig.role}`,
    description: siteConfig.tagline,
    siteName: siteConfig.handle,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.handle} | ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SeasonScript />
        <SeasonProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </SeasonProvider>
      </body>
    </html>
  );
}

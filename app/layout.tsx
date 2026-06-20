import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const mono = Fira_Code({ subsets: ["latin"], variable: "--font-mono-src", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans-src", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${mono.variable} ${sans.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-6">
          <SiteHeader />
          <main className="flex-1 py-10">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

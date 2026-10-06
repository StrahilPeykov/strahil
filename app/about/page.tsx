import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Strahil Peykov, a backend engineer in Amsterdam.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="font-mono text-xl">About</h1>

      <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_220px] sm:gap-8">
        <Image
          src="/images/strahil-portrait.webp"
          alt="Strahil Peykov"
          width={640}
          height={800}
          sizes="(min-width: 640px) 220px, 180px"
          preload
          className="order-2 h-auto w-[180px] justify-self-center sm:w-[220px]"
        />
        <div className="contents text-[1.0625rem] leading-[1.75] sm:order-1 sm:block">
          <p className="order-1 sm:mb-[1.1em]">
            I&apos;m Strahil Peykov, a backend software engineer based in Amsterdam.
            I grew up in Burgas, Bulgaria, moved to Eindhoven in 2021, and completed
            a BSc in Computer Science &amp; Engineering at TU Eindhoven in 2025.
            I now work on last-mile delivery systems at Picnic.
          </p>
          <p className="order-3 sm:mb-[1.1em]">
            I really like games, music, philosophy, and politics, so they inevitably
            bleed into the things I do.
          </p>
        </div>
      </div>

      <dl className="space-y-2 font-mono text-sm text-muted">
        <div>
          <dt className="inline text-fg">Work: </dt>
          <dd className="inline">Backend Java developer, Picnic · 2025–present</dd>
        </div>
        <div>
          <dt className="inline text-fg">Education: </dt>
          <dd className="inline">BSc Computer Science and Engineering, TU/e · 2021–2025</dd>
        </div>
        <div>
          <dt className="inline text-fg">Languages: </dt>
          <dd className="inline">
            Bulgarian (native), English (fluent), basic Japanese, and a little Dutch and German.
          </dd>
        </div>
        <div>
          <dt className="inline text-fg">Colophon: </dt>
          <dd className="inline">
            Next.js, TypeScript, self-hosted fonts, and cookieless analytics.{" "}
            <a
              href={site.github + "/strahil"}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Source on GitHub
            </a>
            .
          </dd>
        </div>
      </dl>
    </div>
  );
}

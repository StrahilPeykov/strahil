import type { Metadata } from "next";
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

      <div className="prose">
        <p>
          I&apos;m Strahil Peykov, a backend software engineer based in Amsterdam.
          I grew up in Burgas, Bulgaria, moved to Eindhoven in 2021, and completed
          a BSc in Computer Science &amp; Engineering at TU Eindhoven in 2025.
          I now work on last-mile delivery systems at Picnic.
        </p>
        <p>
          I really like games, music, philosophy, and politics, so they inevitably
          bleed into the things I do.
        </p>
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

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "A short bio: who Strahil Peykov is, the work he gravitates to, and how this site is built.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="font-mono text-xl">About</h1>

      <div className="prose">
        <p>
          I&apos;m Strahil Peykov, born in Burgas, Bulgaria on 29 March 2002. I
          finished the School of Mathematics and Natural Sciences in Burgas, moved
          to Eindhoven in 2021 for a Computer Science &amp; Engineering
          bachelor&apos;s (graduated 2024), and now work as a software engineer in
          Amsterdam.
        </p>
        <p>
          I&apos;m into gaming, music, philosophy, and politics, and those tend to
          show up in what I make and write: a daily movie-guessing game, an essay
          on game preservation and digital ownership, a tool for EU
          product-emissions reporting. The work I find most interesting usually
          sits where the software is only half the problem and the rest is people,
          rules, or culture.
        </p>
      </div>

      <dl className="space-y-2 font-mono text-sm text-muted">
        <div>
          <dt className="inline text-fg">Languages: </dt>
          <dd className="inline">
            Bulgarian (native), English (fluent), and some German, Dutch, and French.
          </dd>
        </div>
        <div>
          <dt className="inline text-fg">Colophon: </dt>
          <dd className="inline">
            Built with Next.js and TypeScript, self-hosted fonts, cookieless
            analytics, no tracking.{" "}
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

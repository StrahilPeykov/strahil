import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getDoc, getWork } from "@/lib/content";
import { CopyEmail } from "@/components/CopyEmail";
import { WorkList } from "@/components/WorkList";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "NL",
  },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  const work = getWork().filter((item) => item.featured);
  const essay = getDoc("writing", "stop-killing-games");

  return (
    <div className="space-y-10 sm:space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <section className="space-y-5">
        <h1 className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <div className="max-w-2xl space-y-3">
          <p className="text-lg leading-relaxed">
            I&apos;m a backend engineer at{" "}
            <Link href="/work/logistics-scheduling" className="text-link text-accent">Picnic</Link>{" "}
            in Amsterdam. I work on
            software for delivery drivers and hub teams.
          </p>
          <p className="leading-relaxed text-muted">
            Originally from Burgas, Bulgaria. Before Picnic, I studied at
            TU Eindhoven and built internal tools at ASML.{" "}
            <Link href="/about" className="text-link">More about me</Link>.
          </p>
        </div>
        <div className="contact-links flex flex-wrap items-center gap-x-5 gap-y-1 pt-1 text-sm text-muted">
          <CopyEmail email={site.email} />
          <a href={site.github} target="_blank" rel="noreferrer" className="text-link hover:text-fg">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-link hover:text-fg">LinkedIn</a>
          <a href={site.cv} target="_blank" rel="noreferrer" className="text-link hover:text-fg">CV</a>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-mono text-sm text-muted">A few things I&apos;ve worked on</h2>
        <WorkList items={work} />
        <Link href="/work" className="text-link inline-block py-1 font-mono text-sm text-muted hover:text-fg">
          all work →
        </Link>
      </section>

      {essay && (
        <section aria-labelledby="writing-heading" className="space-y-5">
          <h2 id="writing-heading" className="font-mono text-sm text-muted">Writing</h2>
          <ul className="entry-list">
            <li>
              <Link href={`/writing/${essay.slug}`} className="entry-link">
                <span className="entry-title">{essay.title}</span>
                <p className="entry-summary">{essay.summary}</p>
              </Link>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}

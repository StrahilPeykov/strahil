import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getWork } from "@/lib/content";
import { CopyEmail } from "@/components/CopyEmail";

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
  const work = getWork().slice(0, 4);

  return (
    <div className="space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <section className="space-y-5">
        <p className="max-w-2xl text-lg leading-relaxed">
          I&apos;m a software engineer in {site.location}. I work on logistics systems and
          date-heavy backend services, the parts where staying correct under messy,
          real-world input is the actual job. Before this I studied Computer Science &amp;
          Engineering at TU Eindhoven and interned at ASML.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 font-mono text-sm text-muted">
          <CopyEmail email={site.email} />
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-fg">github</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">linkedin</a>
          <a href={site.cv} target="_blank" rel="noreferrer" className="hover:text-fg">cv</a>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted">Selected work</h2>
        <ul className="border-y border-border">
          {work.map((w) => (
            <li key={w.slug} className="border-b border-border last:border-b-0">
              <Link href={`/work/${w.slug}`} className="group block py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono group-hover:text-accent">{w.title}</span>
                  {w.year && <span className="font-mono text-xs text-muted">{w.year}</span>}
                </div>
                {w.summary && <p className="mt-1 max-w-2xl text-sm text-muted">{w.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/work" className="inline-block font-mono text-sm text-muted hover:text-fg">
          all work →
        </Link>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getWork, getDoc } from "@/lib/content";

export function generateStaticParams() {
  return getWork().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc("work", slug);
  if (!doc) return { title: "Work" };
  return {
    title: doc.title,
    description: doc.summary,
    alternates: { canonical: `/work/${doc.slug}` },
    openGraph: {
      type: "article",
      title: doc.title,
      description: doc.summary,
      url: `/work/${doc.slug}`,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc("work", slug);
  if (!doc) notFound();

  return (
    <article className="space-y-6">
      <Link href="/work" className="inline-block font-mono text-sm text-muted hover:text-fg">
        ← work
      </Link>
      <header className="space-y-2">
        <h1 className="text-2xl">{doc.title}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {doc.role && <span>{doc.role}</span>}
          {doc.year && <span>{doc.year}</span>}
          {Array.isArray(doc.stack) && doc.stack.length > 0 && (
            <span>{doc.stack.join(" · ")}</span>
          )}
        </div>
        {(doc.url || doc.source) && (
          <div className="flex flex-wrap gap-x-5 gap-y-1 pt-2 text-sm">
            {doc.url && (
              <a href={doc.url} target="_blank" rel="noreferrer" className="text-link py-1 text-accent">
                {doc.urlLabel ?? `Visit ${doc.title}`} <span aria-hidden>↗</span>
              </a>
            )}
            {doc.source && (
              <a href={doc.source} target="_blank" rel="noreferrer" className="text-link py-1 text-accent">
                {doc.sourceLabel ?? "View source on GitHub"} <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </header>
      {doc.overview && (
        <div className="prose">
          <Markdown>{doc.overview}</Markdown>
        </div>
      )}
      {doc.screenshots?.map((shot, index) => (
        <figure key={shot.src} className="project-figure">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="(max-width: 768px) calc(100vw - 48px), 720px"
            loading={index === 0 ? "eager" : "lazy"}
            className="block h-auto w-full border border-border"
          />
          <figcaption className="mt-3 space-y-1 text-sm text-muted">
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
              <p className="max-w-[58ch]">{shot.caption}</p>
              <a href={shot.src} target="_blank" rel="noreferrer" className="text-link shrink-0 py-1" aria-label={`View image ${index + 1} of ${doc.title} at full size`}>
                View full size <span aria-hidden>↗</span>
              </a>
            </div>
            {shot.credit && (
              <div className="text-xs leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-fg">
                <Markdown>{shot.credit}</Markdown>
              </div>
            )}
          </figcaption>
        </figure>
      ))}
      <div className="prose">
        <Markdown remarkPlugins={[remarkGfm]}>{doc.content}</Markdown>
      </div>
    </article>
  );
}

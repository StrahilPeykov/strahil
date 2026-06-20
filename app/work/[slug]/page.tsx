import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  return { title: doc?.title ?? "Work" };
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
      <Link href="/work" className="font-mono text-sm text-muted hover:text-fg">
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
          <div className="flex flex-wrap gap-x-4 font-mono text-xs">
            {doc.url && (
              <a href={doc.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                live ↗
              </a>
            )}
            {doc.source && (
              <a href={doc.source} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                code ↗
              </a>
            )}
          </div>
        )}
      </header>
      <div className="prose">
        <Markdown remarkPlugins={[remarkGfm]}>{doc.content}</Markdown>
      </div>
    </article>
  );
}

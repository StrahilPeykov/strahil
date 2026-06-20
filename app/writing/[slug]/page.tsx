import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getWriting, getDoc } from "@/lib/content";

export function generateStaticParams() {
  return getWriting().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc("writing", slug);
  if (!doc) return { title: "Writing" };
  return {
    title: doc.title,
    description: doc.summary,
    alternates: { canonical: `/writing/${doc.slug}` },
    openGraph: {
      type: "article",
      title: doc.title,
      description: doc.summary,
      url: `/writing/${doc.slug}`,
      publishedTime: doc.date,
    },
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc("writing", slug);
  if (!doc) notFound();

  return (
    <article className="space-y-6">
      <Link href="/writing" className="font-mono text-sm text-muted hover:text-fg">
        ← writing
      </Link>
      <header className="space-y-2">
        <h1 className="text-2xl">{doc.title}</h1>
        {doc.date && <p className="font-mono text-xs text-muted">{doc.date}</p>}
      </header>
      <div className="prose">
        <Markdown remarkPlugins={[remarkGfm]}>{doc.content}</Markdown>
      </div>
    </article>
  );
}

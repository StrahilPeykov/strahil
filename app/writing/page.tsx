import Link from "next/link";
import { getWriting } from "@/lib/content";

export const metadata = {
  title: "Writing",
  description: "Writing by Strahil Peykov.",
  alternates: { canonical: "/writing" },
};

export default function WritingIndex() {
  const posts = getWriting();

  return (
    <div className="space-y-6">
      <h1 className="font-mono text-xl">Writing</h1>
      {posts.length === 0 ? (
        <p className="text-muted">Nothing published yet.</p>
      ) : (
        <ul className="entry-list">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/writing/${p.slug}`}
                className="entry-link"
              >
                <span className="entry-title">
                  {p.title}
                  {p.draft && (
                    <span className="ml-2 border border-border px-1 text-xs text-muted">draft</span>
                  )}
                </span>
                {p.date && <time dateTime={p.date} className="entry-date">{p.date}</time>}
                {p.summary && <p className="entry-summary">{p.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

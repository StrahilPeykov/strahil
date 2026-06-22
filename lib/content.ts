import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Kind = "work" | "writing";

export type Doc = {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  year?: string | number;
  role?: string;
  stack?: string[];
  url?: string;
  source?: string;
  weight?: number;
  draft?: boolean;
  content: string;
  readingMinutes: number;
};

// Rough reading time at ~200 words per minute, floored at 1 minute.
function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Drafts are visible while developing locally, but excluded from the production
// build, so they never appear (or get indexed) on the live site.
const showDrafts = process.env.NODE_ENV !== "production";

const contentRoot = path.join(process.cwd(), "content");

function toISODate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function readKind(kind: Kind): Doc[] {
  const dir = path.join(contentRoot, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      // YAML turns unquoted dates into Date objects; keep them as strings.
      if (data.date instanceof Date) data.date = toISODate(data.date);
      return {
        slug: f.replace(/\.md$/, ""),
        content,
        readingMinutes: readingMinutes(content),
        ...(data as object),
      } as Doc;
    })
    .filter((d) => showDrafts || !d.draft)
    .sort((a, b) => {
      // Explicit weight wins (higher first); fall back to date/year, newest first.
      const aw = Number(a.weight ?? 0);
      const bw = Number(b.weight ?? 0);
      if (aw !== bw) return bw - aw;
      const av = String(a.date ?? a.year ?? "");
      const bv = String(b.date ?? b.year ?? "");
      return bv.localeCompare(av);
    });
}

export const getWork = () => readKind("work");
export const getWriting = () => readKind("writing");

export function getDoc(kind: Kind, slug: string): Doc | undefined {
  return readKind(kind).find((d) => d.slug === slug);
}

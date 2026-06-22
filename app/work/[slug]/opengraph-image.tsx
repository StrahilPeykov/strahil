import { ogImage, OG_SIZE } from "@/lib/og";
import { getWork, getDoc } from "@/lib/content";
import { site } from "@/lib/site";

export const alt = "Work";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getWork().map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc("work", slug);
  return ogImage(doc?.title ?? "Work", site.name);
}

import { site } from "@/lib/site";
import { CopyEmail } from "./CopyEmail";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border py-6 font-mono text-sm text-muted">
      <CopyEmail email={site.email} />
      <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-fg">github</a>
      <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">linkedin</a>
      <a href={site.cv} className="hover:text-fg">cv</a>
    </footer>
  );
}

import { site } from "@/lib/site";
import { CopyEmail } from "./CopyEmail";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-6 font-mono text-sm">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-muted">
        <CopyEmail email={site.email} />
        <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-fg">github</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">linkedin</a>
        <a href={site.cv} target="_blank" rel="noreferrer" className="hover:text-fg">cv</a>
      </div>

      {site.elsewhere.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted opacity-70">
          <span>elsewhere</span>
          {site.elsewhere.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-muted opacity-60">
        Privacy-friendly, cookieless analytics. No personal data collected.
      </p>
    </footer>
  );
}

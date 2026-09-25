import { site } from "@/lib/site";
import { CopyEmail } from "./CopyEmail";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-6 text-sm">
      <div className="contact-links flex flex-wrap items-center gap-x-5 gap-y-1 text-muted">
        <CopyEmail email={site.email} />
        <a href={site.github} target="_blank" rel="noreferrer" className="text-link hover:text-fg">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-link hover:text-fg">LinkedIn</a>
        <a href={site.cv} target="_blank" rel="noreferrer" className="text-link hover:text-fg">CV</a>
      </div>

      {site.elsewhere.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span>elsewhere</span>
          {site.elsewhere.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-link py-1 hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-muted">
        Cookieless analytics by{" "}
        <a href="https://vercel.com/docs/analytics/privacy-policy" className="text-link">Vercel</a>.
      </p>
    </footer>
  );
}

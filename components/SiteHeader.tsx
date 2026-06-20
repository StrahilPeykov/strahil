import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border py-6">
      <Link href="/" className="font-mono font-semibold tracking-tight hover:text-accent">
        {site.name}
      </Link>
      <nav className="flex items-center gap-5 font-mono text-sm text-muted">
        <Link href="/work" className="hover:text-fg">work</Link>
        <Link href="/writing" className="hover:text-fg">writing</Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}

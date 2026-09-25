import Link from "next/link";
import { site } from "@/lib/site";
import { NavLinks } from "./NavLinks";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border py-6">
      <Link href="/" className="font-mono font-semibold tracking-tight hover:text-accent">
        {site.name}
      </Link>
      <nav aria-label="Main" className="flex items-center gap-5 font-mono text-sm text-muted">
        <NavLinks />
        <ThemeSwitcher />
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "work" },
  { href: "/writing", label: "writing" },
  { href: "/about", label: "about" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "border-b border-accent text-fg"
                : "border-b border-transparent hover:text-fg"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

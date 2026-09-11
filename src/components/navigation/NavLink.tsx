"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  match?: "prefix" | "exact";
};

export function NavLink({ href, children, match = "prefix" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    match === "exact"
      ? pathname === href
      : href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`text-sm tracking-wide transition-colors ${
        isActive ? "text-foreground" : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );
}

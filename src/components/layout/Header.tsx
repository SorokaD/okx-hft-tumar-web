import Link from "next/link";
import { NavLink } from "@/components/navigation/NavLink";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/lib/config";

export function Header() {
  return (
    <header className="border-b border-border">
      <Container className="flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between md:py-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.28em] text-foreground"
        >
          {siteConfig.wordmark}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              match={"match" in item ? item.match : "prefix"}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}

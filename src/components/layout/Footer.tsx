import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-3 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          {siteConfig.linkedinUrl ? (
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}

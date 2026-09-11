import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  spacing?: "default" | "tight";
  wide?: boolean;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  spacing = "default",
  wide = false,
  children,
}: SectionProps) {
  const spacingClass =
    spacing === "tight" ? "py-12 md:py-16" : "py-20 md:py-28";

  return (
    <section id={id} className={`border-t border-border ${spacingClass}`}>
      <Container wide={wide}>
        {eyebrow ? (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className={`${spacing === "tight" ? "mb-6" : "mb-12"} max-w-2xl text-2xl tracking-tight text-foreground md:text-3xl`}>
            {title}
          </h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

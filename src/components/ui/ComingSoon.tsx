import { Container } from "@/components/ui/Container";

type ComingSoonProps = {
  title: string;
  description?: string;
};

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-muted">
          Coming soon
        </p>
        <h1 className="max-w-2xl text-3xl tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

import { Section } from "@/components/ui/Section";
import { researchLoop } from "@/lib/projects";

export function ResearchFlow() {
  return (
    <Section title="Research → Signal → Execution">
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {researchLoop.map((item) => (
          <article
            key={item.title}
            className="border border-border bg-surface px-5 py-6"
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-foreground">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              {item.question}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

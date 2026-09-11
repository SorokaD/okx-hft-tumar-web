import { Section } from "@/components/ui/Section";
import { pipelineSteps } from "@/lib/projects";

export function Pipeline() {
  return (
    <Section eyebrow="System architecture">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-foreground md:text-sm">
        {pipelineSteps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span>{step}</span>
            {index < pipelineSteps.length - 1 ? (
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}

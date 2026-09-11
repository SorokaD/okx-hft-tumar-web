import { ProjectStatus } from "@/components/hft/ProjectStatus";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getHftSubsystemStatuses } from "@/lib/api/hft";
import { featuredHftProject } from "@/lib/projects";

export function FeaturedProject() {
  const statuses = getHftSubsystemStatuses();

  return (
    <Section eyebrow={featuredHftProject.eyebrow} spacing="tight">
      <h2 className="max-w-xl text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
        {featuredHftProject.title}
      </h2>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted">
        {featuredHftProject.summary}
      </p>

      <ul className="mt-8 flex flex-wrap gap-2">
        {featuredHftProject.directions.map((direction) => (
          <li
            key={direction}
            className="border border-border px-2.5 py-1 font-mono text-[11px] tracking-wide text-foreground"
          >
            {direction}
          </li>
        ))}
      </ul>

      <div className="mt-6 max-w-2xl">
        <ProjectStatus items={statuses} />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={featuredHftProject.href}>Explore project</ButtonLink>
        <ButtonLink href={featuredHftProject.liveHref} variant="secondary">
          Live research
        </ButtonLink>
      </div>
    </Section>
  );
}

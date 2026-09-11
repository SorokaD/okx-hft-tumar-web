import type { ProjectSubsystemStatus } from "@/types";

type ProjectStatusProps = {
  items: readonly ProjectSubsystemStatus[];
};

export function ProjectStatus({ items }: ProjectStatusProps) {
  return (
    <ul className="grid gap-2 sm:grid-cols-3">
      {items.map((item) => {
        const isLive = item.status === "active";

        return (
          <li
            key={item.label}
            className="flex items-baseline justify-between gap-3 border border-border px-3 py-2"
          >
            <span className="text-xs text-muted">{item.label}</span>
            <span
              className={`font-mono text-xs ${
                isLive ? "text-accent" : "text-foreground"
              }`}
            >
              {item.display}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

import type { LiveMetric } from "@/types";

type LiveMetricCardProps = {
  metric: LiveMetric;
  accent?: boolean;
};

export function LiveMetricCard({ metric, accent = false }: LiveMetricCardProps) {
  const isPositive = metric.display.startsWith("+");

  return (
    <article className="border border-border bg-surface px-4 py-4">
      <p className="text-xs text-muted">{metric.label}</p>
      <p
        className={`mt-2 font-mono text-sm tabular-nums ${
          accent && isPositive ? "text-accent" : "text-foreground"
        }`}
      >
        {metric.display}
      </p>
    </article>
  );
}

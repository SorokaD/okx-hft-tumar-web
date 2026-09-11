import { LiveMetricCard } from "@/components/hft/live/LiveMetricCard";
import type { ExecutionMetrics as ExecutionMetricsData } from "@/types";

type ExecutionMetricsProps = {
  metrics: ExecutionMetricsData;
};

export function ExecutionMetrics({ metrics }: ExecutionMetricsProps) {
  const items = [
    metrics.netPnl,
    metrics.grossPnl,
    metrics.fees,
    metrics.fills,
    metrics.makerRatio,
    metrics.slippage,
    metrics.adverseSelection,
  ];

  return (
    <section className="border border-border bg-surface p-5 md:p-6">
      <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
        Execution
      </h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted">
        Demo executor telemetry after fees, fills and market friction.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((metric) => (
          <LiveMetricCard
            key={metric.label}
            metric={metric}
            accent={metric.label === "Net PnL"}
          />
        ))}
      </div>
    </section>
  );
}

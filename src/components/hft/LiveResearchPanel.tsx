import { EdgeSparkline } from "@/components/hft/EdgeSparkline";
import { ResearchMetric } from "@/components/hft/ResearchMetric";
import { formatClock, formatInteger, formatSignedMetric } from "@/lib/format";
import type { LiveResearchSnapshot } from "@/types";

type LiveResearchPanelProps = {
  snapshot: LiveResearchSnapshot;
};

export function LiveResearchPanel({ snapshot }: LiveResearchPanelProps) {
  const isStreamLive = snapshot.streamStatus === "ready";
  const edgeIsPositive = snapshot.bestRollingEdge.value > 0;

  return (
    <aside className="border border-border bg-surface px-5 py-5 md:px-6 md:py-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        Live research
      </p>
      <p className="mt-3 font-mono text-sm text-foreground">{snapshot.symbol}</p>
      <p className="mt-3 flex items-center gap-2 text-xs text-foreground">
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${
            isStreamLive ? "bg-accent" : "bg-muted"
          }`}
        />
        <span className={isStreamLive ? "text-accent" : "text-muted"}>
          {snapshot.streamLabel}
        </span>
      </p>

      <div className="mt-5 space-y-2.5">
        <ResearchMetric label="Models running" value={String(snapshot.modelsRunning)} />
        <ResearchMetric label="Primary horizon" value={snapshot.primaryHorizon} />
        <ResearchMetric
          label={snapshot.bestRollingEdge.name}
          value={formatSignedMetric(
            snapshot.bestRollingEdge.value,
            snapshot.bestRollingEdge.unit,
          )}
          accent={edgeIsPositive}
        />
        <ResearchMetric
          label={snapshot.predictionsToday.name}
          value={formatInteger(snapshot.predictionsToday.value)}
        />
        <ResearchMetric label="Updated" value={formatClock(snapshot.updatedAt)} />
      </div>

      {snapshot.edgeSeries.length > 1 ? (
        <EdgeSparkline
          values={snapshot.edgeSeries}
          label="Rolling theoretical edge — last 6h"
        />
      ) : null}
    </aside>
  );
}

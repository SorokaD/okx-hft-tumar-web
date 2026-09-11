import {
  formatModelSide,
  formatModelStatus,
  formatPercent,
  formatSignedMetric,
} from "@/lib/format";
import type { LiveModelRow } from "@/types";

type LiveModelTableProps = {
  rows: readonly LiveModelRow[];
};

export function LiveModelTable({ rows }: LiveModelTableProps) {
  return (
    <div className="overflow-x-auto border border-border">
      <table className="min-w-[720px] w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Current model outputs. These are experimental research signals, not
          trade recommendations.
        </caption>
        <thead className="border-b border-border bg-surface">
          <tr className="text-xs uppercase tracking-[0.12em] text-muted">
            <th className="px-4 py-3 font-medium">Model</th>
            <th className="px-4 py-3 font-medium">Horizon</th>
            <th className="px-4 py-3 font-medium">Signal</th>
            <th className="px-4 py-3 font-medium">Confidence</th>
            <th className="px-4 py-3 font-medium">Rolling Edge</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const edge = row.rollingEdge;
            const edgePositive = (edge?.value ?? 0) > 0;

            return (
              <tr key={row.id} className="border-b border-border last:border-b-0">
                <td className="px-4 py-3 text-foreground">{row.name}</td>
                <td className="px-4 py-3 font-mono text-foreground">
                  {row.horizon ?? "—"}
                </td>
                <td className="px-4 py-3 font-mono text-foreground">
                  {row.signal ? formatModelSide(row.signal.side) : "—"}
                </td>
                <td className="px-4 py-3 font-mono text-foreground">
                  {row.signal ? formatPercent(row.signal.confidence) : "—"}
                </td>
                <td
                  className={`px-4 py-3 font-mono ${
                    edge && edgePositive ? "text-accent" : "text-foreground"
                  }`}
                >
                  {edge
                    ? formatSignedMetric(edge.value, edge.unit)
                    : "—"}
                </td>
                <td className="px-4 py-3 font-mono text-foreground">
                  {formatModelStatus(row.status)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

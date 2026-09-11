import { formatClock } from "@/lib/format";
import type { LiveChartSpec, TimeSeriesPoint } from "@/types";

type LiveChartProps = {
  chart: LiveChartSpec;
};

const width = 640;
const height = 168;
const pad = 12;

function toPolyline(points: readonly TimeSeriesPoint[]): string {
  const values = points.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x =
        points.length === 1
          ? pad
          : pad + (index / (points.length - 1)) * (width - pad * 2);
      const y = pad + (1 - (point.value - min) / range) * (height - pad * 2);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function LiveChart({ chart }: LiveChartProps) {
  const seriesWithPoints = chart.series.filter((item) => item.points.length > 1);
  const showLegend = seriesWithPoints.some((item) => item.label);

  return (
    <article className="border border-border bg-surface px-4 py-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-sm text-foreground">{chart.title}</h3>
          <p className="mt-1 font-mono text-[11px] text-muted">
            Updated {formatClock(chart.updatedAt)}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      {showLegend ? (
        <ul className="mt-3 flex flex-wrap gap-4 font-mono text-[11px] text-muted">
          {seriesWithPoints.map((item, index) => (
            <li key={item.id} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`h-px w-4 ${index === 0 ? "bg-accent" : "bg-muted"}`}
              />
              {item.label}
            </li>
          ))}
        </ul>
      ) : null}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-4 h-36 w-full"
        role="img"
        aria-label={chart.title}
      >
        <line
          x1={pad}
          x2={width - pad}
          y1={height - pad}
          y2={height - pad}
          className="stroke-border"
          strokeWidth="1"
        />
        {seriesWithPoints.map((item, index) => (
          <polyline
            key={item.id}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={toPolyline(item.points)}
            className={index === 0 ? "text-accent" : "text-muted"}
          />
        ))}
      </svg>
    </article>
  );
}

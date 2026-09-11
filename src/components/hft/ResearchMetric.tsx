type ResearchMetricProps = {
  label: string;
  value: string;
  accent?: boolean;
};

export function ResearchMetric({ label, value, accent = false }: ResearchMetricProps) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <span className="text-xs text-muted">{label}</span>
      <span
        className={`font-mono text-xs tabular-nums ${
          accent ? "text-accent" : "text-foreground"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

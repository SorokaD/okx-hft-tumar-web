type EdgeSparklineProps = {
  values: readonly number[];
  label: string;
};

export function EdgeSparkline({ values, label }: EdgeSparklineProps) {
  const width = 280;
  const height = 36;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x = values.length === 1 ? 0 : (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 4) - 2;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <figure className="mt-5 border-t border-border pt-4">
      <figcaption className="mb-2 font-mono text-[11px] text-muted">
        {label}
      </figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-8 w-full text-accent"
        role="img"
        aria-label={label}
      >
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
        />
      </svg>
    </figure>
  );
}

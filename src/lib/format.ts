export function formatClock(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(new Date(iso));
}

export function formatInteger(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatSignedMetric(value: number, unit?: string): string {
  const sign = value > 0 ? "+" : "";
  const formatted = Number.isInteger(value) ? `${sign}${value}` : `${sign}${value.toFixed(2)}`;

  return unit ? `${formatted} ${unit}` : formatted;
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function formatModelSide(side: "buy" | "sell" | "flat"): string {
  if (side === "buy") {
    return "LONG";
  }

  if (side === "sell") {
    return "SHORT";
  }

  return "FLAT";
}

export function formatModelStatus(status: "idle" | "training" | "ready" | "degraded" | "offline"): string {
  if (status === "ready") {
    return "Running";
  }

  return status.charAt(0).toUpperCase() + status.slice(1);
}

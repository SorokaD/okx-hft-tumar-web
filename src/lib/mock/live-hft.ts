import type {
  ExecutionMetrics,
  LiveChartSpec,
  LiveHftDashboard,
  LiveModelRow,
  LiveStatusCard,
  LiveSystemStatus,
  ResearchMetrics,
  TimeSeriesPoint,
  TradingSignal,
} from "@/types";

const updatedAt = "2026-09-11T10:42:31.000Z";
const symbol = "BTC-USDT-SWAP";

function series(values: number[], stepMs = 5 * 60 * 1000): TimeSeriesPoint[] {
  const end = Date.parse(updatedAt);

  return values.map((value, index) => ({
    timestamp: new Date(end - (values.length - 1 - index) * stepMs).toISOString(),
    value,
  }));
}

function chart(
  id: string,
  title: string,
  seriesList: LiveChartSpec["series"],
): LiveChartSpec {
  return { id, title, updatedAt, series: seriesList };
}

function signal(
  id: string,
  modelId: string,
  side: TradingSignal["side"],
  confidence: number,
): TradingSignal {
  return {
    id,
    symbol,
    side,
    confidence,
    createdAt: updatedAt,
    modelId,
  };
}

export const liveSystemStatus: LiveSystemStatus = {
  instrument: symbol,
  environment: "Research / Demo",
  isLive: true,
  lastUpdate: updatedAt,
  dataLatencyMs: 180,
};

export const liveStatusCards: readonly LiveStatusCard[] = [
  {
    title: "Market Data",
    accent: true,
    primary: { label: "Status", value: 1, display: "Live" },
    secondary: { label: "Last event", value: 180, unit: "ms", display: "180 ms ago" },
  },
  {
    title: "Models",
    primary: { label: "Running", value: 4, display: "4" },
  },
  {
    title: "Predictions Today",
    primary: { label: "Count", value: 18421, display: "18,421" },
  },
  {
    title: "Executor",
    primary: { label: "Status", value: 0, display: "Demo" },
  },
  {
    title: "Pipeline",
    accent: true,
    primary: { label: "Status", value: 1, display: "Healthy" },
  },
];

export const liveModelRows: readonly LiveModelRow[] = [
  {
    id: "catboost-30s",
    name: "CatBoost",
    horizon: "30s",
    signal: signal("sig-cb-30", "catboost-30s", "buy", 0.68),
    rollingEdge: {
      name: "Rolling edge",
      value: 0.61,
      unit: "ticks",
      updatedAt,
    },
    status: "ready",
  },
  {
    id: "logreg-30s",
    name: "Logistic Regression",
    horizon: "30s",
    signal: signal("sig-lr-30", "logreg-30s", "buy", 0.59),
    rollingEdge: {
      name: "Rolling edge",
      value: 0.18,
      unit: "ticks",
      updatedAt,
    },
    status: "ready",
  },
  {
    id: "catboost-60s",
    name: "CatBoost",
    horizon: "60s",
    signal: signal("sig-cb-60", "catboost-60s", "flat", 0.53),
    rollingEdge: {
      name: "Rolling edge",
      value: 0.04,
      unit: "ticks",
      updatedAt,
    },
    status: "ready",
  },
  {
    id: "passive-maker",
    name: "Passive Maker Baseline",
    horizon: null,
    signal: null,
    rollingEdge: null,
    status: "ready",
  },
];

export const liveCharts: readonly LiveChartSpec[] = [
  chart("rolling-edge", "Rolling theoretical edge", [
    {
      id: "edge",
      points: series([
        0.18, 0.22, 0.19, 0.27, 0.31, 0.28, 0.35, 0.41, 0.38, 0.46, 0.52,
        0.48, 0.55, 0.58, 0.54, 0.6, 0.57, 0.61,
      ]),
    },
  ]),
  chart("cumulative-ticks", "Cumulative theoretical ticks", [
    {
      id: "ticks",
      points: series([
        0.4, 1.1, 1.6, 2.3, 3.1, 3.8, 4.6, 5.5, 6.1, 7.0, 7.8, 8.4, 9.2, 10.1,
        10.7, 11.4, 12.0, 12.6,
      ]),
    },
  ]),
  chart("confidence-vs-move", "Prediction confidence vs realized move", [
    {
      id: "confidence",
      label: "Confidence",
      points: series([
        0.55, 0.57, 0.54, 0.58, 0.61, 0.59, 0.63, 0.66, 0.62, 0.64, 0.67,
        0.65, 0.68, 0.66, 0.64, 0.69, 0.67, 0.68,
      ]),
    },
    {
      id: "realized",
      label: "Realized move",
      points: series([
        0.08, 0.12, 0.04, 0.16, 0.21, 0.09, 0.24, 0.31, 0.14, 0.28, 0.36,
        0.19, 0.33, 0.27, 0.18, 0.34, 0.29, 0.32,
      ]),
    },
  ]),
  chart("mid-price", "BTC mid price", [
    {
      id: "mid",
      points: series([
        67240, 67255, 67218, 67290, 67340, 67312, 67388, 67420, 67395, 67448,
        67480, 67436, 67490, 67510, 67472, 67525, 67508, 67518,
      ]),
    },
  ]),
  chart("spread", "Spread", [
    {
      id: "spread",
      points: series([
        1.2, 1.1, 1.4, 1.0, 0.9, 1.3, 1.1, 0.8, 1.0, 1.2, 0.9, 1.1, 1.0, 0.8,
        0.9, 1.1, 1.0, 0.9,
      ]),
    },
  ]),
  chart("imbalance", "Order book imbalance", [
    {
      id: "imbalance",
      points: series([
        0.12, 0.18, 0.04, 0.22, -0.08, 0.15, 0.28, 0.21, -0.04, 0.16, 0.31,
        0.19, 0.08, 0.24, 0.11, 0.27, 0.14, 0.2,
      ]),
    },
  ]),
  chart("execution-pnl", "Live execution PnL", [
    {
      id: "pnl",
      points: series([
        0.2, 0.4, 0.3, 0.8, 1.1, 0.9, 1.4, 1.8, 1.6, 2.1, 2.4, 2.2, 2.6, 2.9,
        2.7, 3.0, 3.1, 3.2,
      ]),
    },
  ]),
];

export const liveResearchMetrics: ResearchMetrics = {
  frictionlessEdge: {
    label: "Frictionless edge",
    value: 0.61,
    unit: "ticks",
    display: "+0.61 ticks",
  },
  predictionCount: {
    label: "Prediction count",
    value: 18421,
    display: "18,421",
  },
  hitRate: {
    label: "Hit rate",
    value: 0.54,
    display: "54%",
  },
  meanRealizedMovement: {
    label: "Mean realized movement",
    value: 0.32,
    unit: "ticks",
    display: "+0.32 ticks",
  },
  modelConfidence: {
    label: "Model confidence",
    value: 0.68,
    display: "68%",
  },
};

export const liveExecutionMetrics: ExecutionMetrics = {
  netPnl: { label: "Net PnL", value: 3.2, unit: "ticks", display: "+3.20 ticks" },
  grossPnl: { label: "Gross PnL", value: 5.8, unit: "ticks", display: "+5.80 ticks" },
  fees: { label: "Fees", value: 2.1, unit: "ticks", display: "2.10 ticks" },
  fills: { label: "Fills", value: 146, display: "146" },
  makerRatio: { label: "Maker ratio", value: 0.71, display: "71%" },
  slippage: { label: "Slippage", value: 0.14, unit: "ticks", display: "0.14 ticks" },
  adverseSelection: {
    label: "Adverse selection",
    value: 0.09,
    unit: "ticks",
    display: "0.09 ticks",
  },
};

export const liveHftDashboard: LiveHftDashboard = {
  status: liveSystemStatus,
  statusCards: liveStatusCards,
  models: liveModelRows,
  charts: liveCharts,
  research: liveResearchMetrics,
  execution: liveExecutionMetrics,
};

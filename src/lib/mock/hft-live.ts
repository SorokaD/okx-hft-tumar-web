import type {
  LiveResearchSnapshot,
  ModelMetric,
  ModelStatus,
  ProjectSubsystemStatus,
} from "@/types";

const updatedAt = "2026-09-11T10:47:12.000Z";

const bestRollingEdge: ModelMetric = {
  name: "Best rolling edge",
  value: 0.61,
  unit: "ticks",
  updatedAt,
};

const predictionsToday: ModelMetric = {
  name: "Predictions today",
  value: 12842,
  updatedAt,
};

export const hftLiveSnapshot: LiveResearchSnapshot = {
  symbol: "BTC-USDT-SWAP",
  streamStatus: "ready" satisfies ModelStatus,
  streamLabel: "Data stream active",
  modelsRunning: 4,
  primaryHorizon: "30–120s",
  bestRollingEdge,
  predictionsToday,
  updatedAt,
  edgeSeries: [
    0.22, 0.25, 0.21, 0.28, 0.31, 0.27, 0.33, 0.38, 0.35, 0.41, 0.44, 0.4,
    0.47, 0.52, 0.49, 0.55, 0.58, 0.54, 0.57, 0.62, 0.59, 0.63, 0.6, 0.61,
  ],
};

export const hftSubsystemStatuses: readonly ProjectSubsystemStatus[] = [
  { label: "Data pipeline", status: "active", display: "Live" },
  { label: "Research", status: "active", display: "Active" },
  { label: "Execution", status: "planned", display: "Experimental" },
];

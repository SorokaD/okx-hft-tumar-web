import type { Project } from "@/types";

export const featuredHftProject = {
  slug: "hft",
  eyebrow: "HFT RESEARCH LAB",
  title: "BTC-USDT Perpetual Market Microstructure",
  summary:
    "Can short-term order book dynamics contain measurable predictive information?",
  status: "active" as const,
  href: "/projects/hft",
  liveHref: "/projects/hft/live",
  directions: [
    "Realtime data",
    "Order book reconstruction",
    "Feature engineering",
    "ML models",
    "Execution experiments",
  ],
} as const satisfies Project & {
  eyebrow: string;
  liveHref: string;
  directions: readonly string[];
};

export const pipelineSteps = [
  "OKX",
  "Market Data",
  "Order Book",
  "Features",
  "Models",
  "Signals",
  "Execution",
  "Monitoring",
] as const;

export const researchLoop = [
  {
    title: "Research",
    question: "Is there predictive information in the order book?",
  },
  {
    title: "Signal",
    question: "Can models extract measurable edge?",
  },
  {
    title: "Execution",
    question: "Does the edge survive real market frictions?",
  },
] as const;

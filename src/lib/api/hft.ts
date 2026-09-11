import { hftLiveSnapshot, hftSubsystemStatuses } from "@/lib/mock/hft-live";
import { liveHftDashboard } from "@/lib/mock/live-hft";
import type {
  LiveHftDashboard,
  LiveResearchSnapshot,
  ProjectSubsystemStatus,
} from "@/types";

// Swap these getters for apiGet(...) when the realtime API is ready.

export function getLiveResearchSnapshot(): LiveResearchSnapshot {
  return hftLiveSnapshot;
}

export function getHftSubsystemStatuses(): readonly ProjectSubsystemStatus[] {
  return hftSubsystemStatuses;
}

export function getLiveHftDashboard(): LiveHftDashboard {
  return liveHftDashboard;
}

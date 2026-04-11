import { apiClient } from "./apiClient";

export type PendingCounts = {
  registrations: number;
  submissions: number;
  achievements: number;
};

const BASE_URL = "/api/guru/stats/pending-counts";

export async function getPendingCounts() {
  return apiClient.get<PendingCounts>(BASE_URL);
}

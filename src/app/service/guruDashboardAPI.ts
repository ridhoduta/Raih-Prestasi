import { apiClient } from "./apiClient";

export type GuruDashboardStats = {
  totalPrestasiSiswa: number;
  activeCompetitions: number;
  pendingSubmissions: number;
  announcements: number;
};

const BASE_URL = "/api/guru/dashboard";

export async function getGuruDashboardStats() {
  return apiClient.get<GuruDashboardStats>(BASE_URL);
}

import { apiClient } from "./apiClient";

export type DashboardStats = {
  totalGuru: number;
  totalSiswa: number;
  activeCompetitions: number;
  totalPrestasi: number;
  recentActivities: Array<{
    description: string;
    time: string;
  }>;
};

const BASE_URL = "/api/admin/dashboard";

export async function getDashboardStats() {
  return apiClient.get<DashboardStats>(BASE_URL);
}

import { apiClient } from "./apiClient";

export type DashboardStats = {
  totalGuru: number;
  totalSiswa: number;
  activeStudents: number;
  inactiveStudents: number;
  totalCompetitions: number;
  activeCompetitions: number;
  inactiveCompetitions: number;
  totalPrestasi: number;
  totalAnnouncements: number;
  chartData: Array<{
    name: string;
    siswa: number;
    prestasi: number;
    kompetisi: number;
  }>;
  recentActivities: Array<{
    id: string;
    title: string;
    description: string;
    time: string;
  }>;
  expiringCompetitions: Array<{
    id: string;
    title: string;
    description: string;
    time: string;
  }>;
};

const BASE_URL = "/api/admin/dashboard";

export async function getDashboardStats() {
  return apiClient.get<DashboardStats>(BASE_URL);
}

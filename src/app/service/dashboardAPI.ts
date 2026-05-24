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
  leaderboard: Array<{
    id: string;
    name: string;
    kelas: string;
    totalScore: number;
  }>;
};

const BASE_URL = "/api/admin/dashboard";

export async function getDashboardStats() {
  return apiClient.get<DashboardStats>(BASE_URL);
}

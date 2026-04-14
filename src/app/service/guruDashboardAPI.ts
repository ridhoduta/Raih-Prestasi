import { apiClient } from "./apiClient";

export type GuruDashboardStats = {
  totalPrestasiSiswa: number;
  activeCompetitions: number;
  pendingSubmissions: number;
  pendingAchievements: number;
  pendingRegistrations: number;
  announcements: number;
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
  announcementsList: Array<{
    id: string;
    title: string;
    date: string;
  }>;
};

const BASE_URL = "/api/guru/dashboard";

export async function getGuruDashboardStats() {
  return apiClient.get<GuruDashboardStats>(BASE_URL);
}

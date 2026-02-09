import { apiClient } from "./apiClient";

export type AchievementStatus = "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK";

export type Achievement = {
  id: string;
  title: string;
  status: AchievementStatus;
  verifiedBy?: string;
  guru?: {
    name: string;
  };
  // Add other fields as needed based on prisma schema if known
};

export type VerifyAchievementPayload = {
  status: "TERVERIFIKASI" | "DITOLAK";
  verifiedBy: string;
};

const BASE_URL = "/api/guru/achievement";

export async function getAchievements() {
  return apiClient.get<Achievement[]>(BASE_URL);
}

export async function getAchievementDetail(id: string) {
  return apiClient.get<{ data: Achievement }>(`${BASE_URL}/${id}`);
}

export async function verifyAchievement(id: string, payload: VerifyAchievementPayload) {
  return apiClient.put<Achievement>(`${BASE_URL}/${id}`, payload);
}

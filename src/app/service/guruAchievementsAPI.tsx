

import { apiClient } from "./apiClient";

export type Achievement = {
  id: string;
  title: string;
  result: string;
  competitionName: string;
  certificate: string;
  status: "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK";
  createdAt: string;
  updatedAt: string;
  studentId: string;
  guruId: string;
  student: {
    name: string;
    nisn: string;
    kelas: string;
  };
  guru: {
    name: string;
  };
};




export type VerifyAchievementPayload = {
  status: "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK";
  verifiedBy: string;
};

const BASE_URL = "/api/guru/achievement";

export async function getAchievements() {
  return apiClient.get<Achievement[]>(BASE_URL);
}

export async function getAchievementDetail(id: string) {
  return apiClient.get<Achievement>(`${BASE_URL}/${id}`);
}

export async function deleteAchievement(id: string) {
  return apiClient.delete<Achievement>(`${BASE_URL}/${id}`);
}

export async function verifyAchievement(id: string, payload: VerifyAchievementPayload) {
  return apiClient.put<Achievement>(`${BASE_URL}/${id}`, payload);
}

import { apiClient, ApiResponse } from "./apiClient";

export type Achievement = {
  id: string;
  result: string;
  competitionName: string;
  certificate: string;
  status: "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK";
  createdAt: string;
  updatedAt: string;
  studentId: string;
  verifiedBy: string;
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
  verifiedBy?: string;
};

const BASE_URL = "/api/guru/achievement";

export async function getAchievements(params?: {
  cursor?: string;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<Achievement[]> & { nextCursor?: string | null }> {
  const query = new URLSearchParams();
  if (params?.cursor) query.set("cursor", params.cursor);
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.search) query.set("search", params.search);

  const url = query.toString() ? `${BASE_URL}?${query}` : BASE_URL;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: json.message || "Gagal mengambil data prestasi",
      };
    }

    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getAchievements error:", error);
    return { success: false, message: "Network error" };
  }
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

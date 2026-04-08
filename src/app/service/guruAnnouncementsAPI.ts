import { apiClient, ApiResponse } from "./apiClient";

export type AnnouncementPayload = {
  title: string;
  content: string;
  createdBy: string;
  isPublished?: boolean;
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  isPublished: boolean;
  createdBy: string;
  createdAt: string;
  guru?: {
    id: string;
    name: string;
  };
};

const BASE_URL = "/api/guru/announcement";

export async function getAnnouncements(params?: {
  all?: boolean;
  cursor?: string;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<Announcement[]> & { nextCursor?: string | null }> {
  const query = new URLSearchParams();
  if (params?.all) query.set("all", "true");
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
        message: json.message || "Gagal mengambil data pengumuman",
      };
    }

    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getAnnouncements error:", error);
    return { success: false, message: "Network error" };
  }
}

export async function createAnnouncement(payload: AnnouncementPayload) {
  return apiClient.post<Announcement>(BASE_URL, payload);
}

export async function getAnnouncementDetail(id: string) {
  return apiClient.get<Announcement>(`${BASE_URL}/${id}`);
}

export async function updateAnnouncement(id: string, payload: Partial<AnnouncementPayload>) {
  return apiClient.put<Announcement>(`${BASE_URL}/${id}`, payload);
}

export async function deleteAnnouncement(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

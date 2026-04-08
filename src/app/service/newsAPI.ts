import { apiClient, ApiResponse } from "./apiClient";

export type NewsPayload = {
  title: string;
  content: string;
  thumbnail?: string;
  isPublished: boolean;
};

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  thumbnail?: string;
  isPublished: boolean;
  createdAt: string;
  admin?: {
    id: string;
    name: string;
    email: string;
  };
};

const BASE_URL = "/api/admin/news";

export async function getNews(params?: {
  cursor?: string;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<NewsItem[]> & { nextCursor?: string | null }> {
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
        message: json.message || "Gagal mengambil data berita",
      };
    }

    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getNews error:", error);
    return { success: false, message: "Network error" };
  }
}

export async function createNews(payload: NewsPayload) {
  return apiClient.post<NewsItem>(BASE_URL, payload);
}

export async function updateNews(id: string, payload: NewsPayload) {
  return apiClient.put<NewsItem>(`${BASE_URL}/${id}`, payload);
}

export async function deleteNews(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

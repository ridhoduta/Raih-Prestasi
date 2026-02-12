import { apiClient } from "./apiClient";

export type NewsPayload = {
  title: string;
  content: string;
  isPublished: boolean;
};

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
};

const BASE_URL = "/api/admin/news";

export async function getNews() {
  return apiClient.get<NewsItem[]>(BASE_URL);
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

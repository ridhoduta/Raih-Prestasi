import { apiClient } from "./apiClient";

export type CategoryPayload = {
  name: string;
};

export type Category = {
  id: string;
  name: string;
  isActive: boolean;
};

const BASE_URL = "/api/admin/competition-categories";

export async function getCategories() {
  return apiClient.get<Category[]>(BASE_URL);
}

export async function createCategories(payload: CategoryPayload) {
  return apiClient.post<Category>(BASE_URL, payload);
}

export async function updateCategories(id: string, payload: CategoryPayload) {
  return apiClient.put<Category>(`${BASE_URL}/${id}`, payload);
}

export async function deleteCategories(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

import { apiClient } from "./apiClient";

export type LevelPayload = {
  name: string;
  order?: number;
};

export type Level = {
  id: string;
  name: string;
  order: number;
  isActive: boolean;
};

const BASE_URL = "/api/admin/competition-levels";

export async function getLevels() {
  return apiClient.get<Level[]>(BASE_URL);
}

export async function createLevel(payload: LevelPayload) {
  return apiClient.post<Level>(BASE_URL, payload);
}

export async function updateLevel(id: string, payload: LevelPayload) {
  return apiClient.put<Level>(`${BASE_URL}/${id}`, payload);
}

export async function deleteLevel(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

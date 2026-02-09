import { apiClient } from "./apiClient";

export type TeacherPayload = {
  name: string;
  email: string;
  password?: string;
};

export type Teacher = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

const BASE_URL = "/api/admin/guru";

export async function getTeachers() {
  return apiClient.get<Teacher[]>(BASE_URL);
}

export async function createTeacher(payload: TeacherPayload) {
  return apiClient.post<Teacher>(BASE_URL, payload);
}

export async function getTeacherDetail(id: string) {
  return apiClient.get<Teacher>(`${BASE_URL}/${id}`);
}

export async function updateTeacher(id: string, payload: TeacherPayload) {
  return apiClient.put<Teacher>(`${BASE_URL}/${id}`, payload);
}

export async function deleteTeacher(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

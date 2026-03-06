import { apiClient, ApiResponse } from "./apiClient";

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

export type PaginatedTeachers = {
    teachers: Teacher[];
    nextCursor: string | null;
};

const BASE_URL = "/api/admin/guru";

export async function getTeachers(params?:{
  cursor? :string;
  limit?  :number;
  search? :string;
}) : Promise<ApiResponse<Teacher[]> & { nextCursor?: string | null }> {
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
        message: json.message || "Gagal mengambil data guru",
      };
    }
    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getTeachers error:", error);
    return { success: false, message: "Network error" };
  }
}

export async function createTeacher(payload: TeacherPayload) {
  return apiClient.post<Teacher>(BASE_URL, payload);
}

export async function createTeachersBulk(payload: TeacherPayload[]) {
  return apiClient.post<{ imported: number }>(`${BASE_URL}/bulk`, payload);
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

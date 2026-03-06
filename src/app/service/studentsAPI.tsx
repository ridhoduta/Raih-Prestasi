import { apiClient, ApiResponse } from "./apiClient";

export type StudentPayload = {
    nisn: string;
    name: string;
    kelas: string;
    angkatan: number;
    isActive?: boolean;
};

export type Student = {
    id: string;
    nisn: string;
    name: string;
    kelas: string;
    angkatan: number;
    isActive: boolean;
};

export type PaginatedStudents = {
    students: Student[];
    nextCursor: string | null;
};

const BASE_URL = "/api/admin/students";

/**
 * Fetch students with cursor pagination and optional server-side search.
 */
export async function getStudents(params?: {
    cursor?: string;
    limit?: number;
    search?: string;
}): Promise<ApiResponse<Student[]> & { nextCursor?: string | null }> {
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
                message: json.message || "Gagal mengambil data siswa",
            };
        }

        return {
            success: true,
            data: json.data,
            nextCursor: json.nextCursor ?? null,
        };
    } catch (error) {
        console.error("getStudents error:", error);
        return { success: false, message: "Network error" };
    }
}

export async function createStudent(payload: StudentPayload) {
    return apiClient.post<Student>(BASE_URL, payload);
}

export async function createStudentsBulk(payload: StudentPayload[]) {
    return apiClient.post<{ imported: number }>(`${BASE_URL}/bulk`, payload);
}

export async function getStudentDetail(id: string) {
    return apiClient.get<Student>(`${BASE_URL}/${id}`);
}

export async function updateStudent(id: string, payload: Partial<StudentPayload>) {
    return apiClient.put<Student>(`${BASE_URL}/${id}`, payload);
}

export async function deleteStudent(id: string) {
    return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

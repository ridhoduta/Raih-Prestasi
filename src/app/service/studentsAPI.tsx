import { apiClient } from "./apiClient";

export type StudentPayload = {
    nisn: string;
    name: string;
    kelas: string;
    angkatan: number;
};

export type Student = {
    id: string;
    nisn: string;
    name: string;
    kelas: string;
    angkatan: number;
    isActive: boolean;
};

const BASE_URL = "/api/admin/students";

export async function getStudents() {
    return apiClient.get<Student[]>(BASE_URL);
}

export async function createStudent(payload: StudentPayload) {
    return apiClient.post<Student>(BASE_URL, payload);
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

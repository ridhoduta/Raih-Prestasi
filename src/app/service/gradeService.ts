import { apiClient, ApiResponse } from "./apiClient";

export type Grade = {
    id: string;
    gradeName: string;
    points: number;
    createdAt: string;
    _count?: {
        achievements: number;
    };
};

export type GradePayload = {
    gradeName: string;
    points: number;
};

const BASE_URL = "/api/admin/grade";

/**
 * Get all grades
 */
export async function getGrades(): Promise<ApiResponse<Grade[]>> {
    return apiClient.get<Grade[]>(BASE_URL);
}

/**
 * Get grade by ID
 */
export async function getGradeById(id: string): Promise<ApiResponse<Grade>> {
    return apiClient.get<Grade>(`${BASE_URL}/${id}`);
}

/**
 * Create a new grade
 */
export async function createGrade(payload: GradePayload): Promise<ApiResponse<Grade>> {
    return apiClient.post<Grade>(BASE_URL, payload);
}

/**
 * Update a grade
 */
export async function updateGrade(id: string, payload: Partial<GradePayload>): Promise<ApiResponse<Grade>> {
    return apiClient.put<Grade>(`${BASE_URL}/${id}`, payload);
}

/**
 * Delete a grade
 */
export async function deleteGrade(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

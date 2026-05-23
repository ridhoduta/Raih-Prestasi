import { apiClient, ApiResponse } from "./apiClient";

export type GradeCompetition = {
    id: string;
    gradeCompetitionName: string;
    points: number;
    createdAt: string;
    _count?: {
        achievements: number;
    };
};

export type GradeCompetitionPayload = {
    gradeCompetitionName: string;
    points: number;
};

const BASE_URL = "/api/admin/gradeCompetition";

/**
 * Get all grades
 */
export async function getGradesCompetition(): Promise<ApiResponse<GradeCompetition[]>> {
    return apiClient.get<GradeCompetition[]>(BASE_URL);
}

/**
 * Get grade by ID
 */
export async function getGradeCompetitionById(id: string): Promise<ApiResponse<GradeCompetition>> {
    return apiClient.get<GradeCompetition>(`${BASE_URL}/${id}`);
}

/**
 * Create a new grade
 */
export async function createGradeCompetition(payload: GradeCompetitionPayload): Promise<ApiResponse<GradeCompetition>> {
    return apiClient.post<GradeCompetition>(BASE_URL, payload);
}

/**
 * Update a grade
 */
export async function updateGradeCompetition(id: string, payload: Partial<GradeCompetitionPayload>): Promise<ApiResponse<GradeCompetition>> {
    return apiClient.put<GradeCompetition>(`${BASE_URL}/${id}`, payload);
}

/**
 * Delete a grade
 */
export async function deleteGradeCompetition(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

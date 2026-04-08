import { apiClient, ApiResponse } from "./apiClient";

export type IndependentSubmissionStatus = "MENUNGGU" | "DITERIMA" | "DITOLAK";

export type ReviewSubmissionPayload = {
  status: IndependentSubmissionStatus;
  reviewedBy?: string;
  rejectionNote?: string;
  recommendationLetter?: string;
};

export type IndependentSubmission = {
  id: string;
  title: string;
  description: string;
  documentUrl: string;
  status: IndependentSubmissionStatus;
  rejectionNote?: string;
  reviewedBy?: string;
  recommendationLetter?: string;
  createdAt: string;
  student: {
    id: string;
    name: string;
    nisn: string;
    kelas: string;
  };
  guru?: {
    id: string;
    name: string;
  };
};

const BASE_URL = "/api/guru/independent-submissions";

export async function getIndependentSubmissions(params?: {
  cursor?: string;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<IndependentSubmission[]> & { nextCursor?: string | null }> {
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
        message: json.message || "Gagal mengambil data pengajuan",
      };
    }

    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getIndependentSubmissions error:", error);
    return { success: false, message: "Network error" };
  }
}

export async function getIndependentSubmissionDetail(id: string) {
  return apiClient.get<IndependentSubmission>(`${BASE_URL}/${id}`);
}

export async function deleteIndependentSubmissions(id: string) {
  return apiClient.delete<IndependentSubmission>(`${BASE_URL}/${id}`);
}

export async function reviewIndependentSubmission(id: string, payload: ReviewSubmissionPayload) {
  return apiClient.put<IndependentSubmission>(`${BASE_URL}/${id}`, payload);
}

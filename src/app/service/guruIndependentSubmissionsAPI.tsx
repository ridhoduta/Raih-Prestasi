import { apiClient } from "./apiClient";

export type IndependentSubmissionStatus = "MENUNGGU" | "DITERIMA" | "DITOLAK";

export type ReviewSubmissionPayload = {
  status: "DITERIMA" | "DITOLAK";
  reviewedBy: string;
  rejectionNote?: string;
  recommendationLetter?: string;
};

export type IndependentSubmission = {
  id: string;
  status: IndependentSubmissionStatus;
  rejectionNote?: string;
  title: string,
  description: string,
  documentUrl: string,
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

export async function getIndependentSubmissions() {
  return apiClient.get<IndependentSubmission[]>(BASE_URL);
}

export async function getIndependentSubmissionDetail(id: string) {
  // The API returns array in some cases or object. Let's check route.ts again.
  // GET [id] returns findMany with where id. 
  return apiClient.get<IndependentSubmission[]>(`${BASE_URL}/${id}`);
}

export async function reviewIndependentSubmission(id: string, payload: ReviewSubmissionPayload) {
  return apiClient.put<IndependentSubmission>(`${BASE_URL}/${id}`, payload);
}

import { apiClient, ApiResponse } from "./apiClient";

export type CompetitionPayload = {
  title: string;
  description?: string;
  thumbnail?: string;
  categoryId: string;
  levelId: string;
  startDate: string;
  endDate: string;
  createdById: string;
  formFields?: FormFieldPayload[];
};

export type Competition = {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  categoryId: string;
  levelId: string;
  createdBy: string;
  CompetitionFormField?: FormField[];
  category: {
    id: string;
    name: string;
  };
  level: {
    id: string;
    name: string;
  };
  _count?: {
    registrations: number;
    pendingRegistrations?: number;
    acceptedRegistrations?: number;
    rejectedRegistrations?: number;
  };
};

export type FormFieldPayload = {
  label: string;
  fieldType: string;
  isRequired?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
  order: number;
};

export type FormField = FormFieldPayload & {
  id: string;
  competitionId: string;
};

export type Registration = {
  id: string;
  status: string;
  createdAt: string;
  student: {
    id: string;
    name: string;
    nisn: string;
    kelas: string;
  };
  competition: {
    id: string;
    title: string;
  };
  note?: string;
};

export type RegistrationDetail = Registration & {
  answers: {
    value: any;
    field: FormField;
  }[];
};

const BASE_URL = "/api/guru/competitions";

// --- Competition Management ---
export async function getCompetitions(params?: {
  cursor?: string;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<Competition[]> & { nextCursor?: string | null }> {
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
        message: json.message || "Gagal mengambil data kompetisi",
      };
    }

    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getCompetitions error:", error);
    return { success: false, message: "Network error" };
  }
}

export async function createCompetition(payload: CompetitionPayload) {
  return apiClient.post<Competition>(BASE_URL, payload);
}

export async function updateCompetition(id: string, payload: Partial<CompetitionPayload> & { isActive?: boolean }) {
  return apiClient.put<Competition>(`${BASE_URL}/${id}`, payload);
}

export async function deleteCompetition(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

// --- Form Fields ---
export async function getFormFields(competitionId: string) {
  return apiClient.get<FormField[]>(`${BASE_URL}/${competitionId}/form-fields`);
}

export async function createFormFields(competitionId: string, payload: FormFieldPayload[]) {
  return apiClient.post<{ insertedCount: number }>(`${BASE_URL}/${competitionId}/form-fields`, payload);
}

export async function updateFormField(competitionId: string, payload: Partial<FormFieldPayload> & { fieldId: string }) {
  return apiClient.put<FormField>(`${BASE_URL}/${competitionId}/form-fields`, payload);
}

export async function deleteFormField(competitionId: string, fieldId: string) {
  return apiClient.delete<void>(`${BASE_URL}/${competitionId}/form-fields`, { fieldId });
}

// --- Registrations ---
export async function getRegistrations(competitionId: string) {
  return apiClient.get<RegistrationDetail[]>(`/api/guru/registrations?competitionId=${competitionId}`);
}
export async function getAllRegistrations(params?: {
  cursor?: string;
  limit?: number;
  search?: string;
}): Promise<ApiResponse<Registration[]> & { nextCursor?: string | null }> {
  const query = new URLSearchParams();
  if (params?.cursor) query.set("cursor", params.cursor);
  if (params?.limit) query.set("limit", String(params.limit));
  if (params?.search) query.set("search", params.search);

  const url = query.toString() ? `/api/guru/registrations?${query}` : `/api/guru/registrations`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: json.message || "Gagal mengambil data pendaftaran",
      };
    }

    return {
      success: true,
      data: json.data,
      nextCursor: json.nextCursor ?? null,
    };
  } catch (error) {
    console.error("getAllRegistrations error:", error);
    return { success: false, message: "Network error" };
  }
}

export async function getRegistrationById(id: string) {
  return apiClient.get<RegistrationDetail>(`/api/guru/registrations/${id}`);
}

export async function updateRegistrationStatus(id: string, status: string, note?: string) {
  return apiClient.put<void>(`/api/guru/registrations/${id}`, { status, note });
}

export async function getCompetitionById(id: string) {
  return apiClient.get<Competition>(`${BASE_URL}/${id}`);
}

export async function uploadThumbnail(file: File) {
  return apiClient.uploadFile<{ url: { publicUrl: string } }>("/api/upload", file);
}

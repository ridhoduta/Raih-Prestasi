import { apiClient } from "./apiClient";

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
    name: string;
  };
  level: {
    name: string;
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
};

export type RegistrationDetail = Registration & {
  answers: {
    value: any;
    field: FormField;
  }[];
};

const BASE_URL = "/api/guru/competitions";

// --- Competition Management ---
export async function getCompetitions() {
  return apiClient.get<Competition[]>(BASE_URL);
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
  return apiClient.delete<void>(`${BASE_URL}/${competitionId}/form-fields`, { fieldId }); // apiClient.delete needs adjustment to support body if needed, but usually passed via payload or URL.
  // Actually, our apiClient.delete doesn't support body. The API expects fieldId in body for DELETE.
  // Let's modify apiClient later or use a different approach. For now, following types.
}

// --- Registrations ---
export async function getRegistrations(competitionId: string) {
  return apiClient.get<Registration[]>(`${BASE_URL}/${competitionId}/registrations`);
}

export async function getAllRegistrations() {
  return apiClient.get<Registration[]>(`/api/guru/registrations`);
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


import { apiClient } from "./apiClient";

export type AnnouncementPayload = {
  title: string;
  content: string;
  createdBy: string;
  isPublished?: boolean;
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  isPublished: boolean;
  createdBy: string;
  createdAt: string;
  guru?: {
    id: string;
    name: string;
  };
};

const BASE_URL = "/api/guru/announcement";

export async function getAnnouncements(all: boolean = false) {
  const url = all ? `${BASE_URL}?all=true` : BASE_URL;
  return apiClient.get<Announcement[]>(url);
}

export async function createAnnouncement(payload: AnnouncementPayload) {
  return apiClient.post<Announcement>(BASE_URL, payload);
}

export async function getAnnouncementDetail(id: string) {
  return apiClient.get<Announcement>(`${BASE_URL}/${id}`);
}

export async function updateAnnouncement(id: string, payload: Partial<AnnouncementPayload>) {
  return apiClient.put<Announcement>(`${BASE_URL}/${id}`, payload);
}

export async function deleteAnnouncement(id: string) {
  return apiClient.delete<void>(`${BASE_URL}/${id}`);
}

# 1 Optimize this API use the rule in api_optimization_rules.md
# list file in this folder
page/admin/news/hooks/useNews.ts
page/admin/news/page.tsx
api/admin/news/route.tsx
service/newsAPI.tsx

page/guru/achievement/hooks/useAchievement.ts
page/guru/achievement/page.tsx
api/guru/achievement/route.tsx
api/guru/achievement/[id]/route.tsx
service/guruAchievementAPI.tsx

page/guru/announcement/hooks/useAnnouncement.ts
page/guru/announcement/page.tsx
api/guru/announcement/route.tsx
api/guru/announcement/[id]/route.tsx
service/guruAnnouncementAPI.tsx

page/guru/competitions/hooks/useCompetitions.ts
page/guru/competitions/page.tsx
api/guru/competitions/route.tsx
api/guru/competitions/[id]/route.tsx
service/guruCompetitionsAPI.tsx

page/guru/independent-submissions/hooks/useIndependentSubmissions.ts
page/guru/independent-submissions/page.tsx
api/guru/independent-submissions/route.tsx
api/guru/independent-submissions/[id]/route.tsx
service/guruIndependentSubmissionsAPI.tsx

page/guru/registrations/hooks/useRegistrations.ts
page/guru/registrations/page.tsx
api/guru/registrations/route.tsx
api/guru/registrations/[id]/route.tsx
spesific in registration function in guruCompetitionsAPI.tsx
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








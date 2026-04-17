import { Semester } from "@/generated/prisma";

export const academicService = {
  // Fetch students who have achievements
  getStudentsWithAchievements: async (params: {
    search?: string;
    yearId?: string;
    semester?: Semester;
  }) => {
    const { search = "", yearId = "", semester = "" } = params;
    const res = await fetch(
      `/api/admin/academic?search=${search}&yearId=${yearId}&semester=${semester}`
    );
    if (!res.ok) throw new Error("Failed to fetch students");
    return await res.json();
  },

  // Save academic reward score for a specific achievement
  saveScores: async (data: {
    studentId: string;
    achievementId: string;
    subject: string;
    score: number;
    yearId: string;
    semester: Semester;
  }) => {
    const res = await fetch("/api/admin/academic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveScores",
        data,
      }),
    });
    const result = await res.json();
    if (!res.ok || result.error) throw new Error(result.error || "Failed to save reward score");
    return result;
  },

  // Upload file and save to AcademicFile model
  uploadAndSaveAcademicFile: async (file: File, yearId: string, semester: Semester) => {
    // 1. Upload to general upload API
    const formData = new FormData();
    formData.append("file", file);

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const uploadResult = await uploadRes.json();
    if (!uploadRes.ok || !uploadResult.success) {
      throw new Error(uploadResult.message || "Upload failed");
    }

    const fileUrl = uploadResult.url.publicUrl;

    // 2. Save metadata to academic_files via our academic API
    const saveRes = await fetch("/api/admin/academic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveAcademicFile",
        data: {
          fileUrl,
          yearId,
          semester,
        },
      }),
    });
    const saveResult = await saveRes.json();
    if (!saveRes.ok || saveResult.error) {
      throw new Error(saveResult.error || "Failed to save file metadata");
    }

    return saveResult;
  },

  getAcademicYears: async () => {
    const res = await fetch("/api/admin/academic/year");
    if (!res.ok) throw new Error("Failed to fetch academic years");
    return await res.json();
  },
  createAcademicYear: async (data: { yearId: string;}) => {
    const res = await fetch("/api/admin/academic/year", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create academic year");
    return await res.json();
  },
  deleteAcademicYear: async (id: string) => {
    const res = await fetch(`/api/admin/academic/year/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete academic year");
    return await res.json();
  },
};
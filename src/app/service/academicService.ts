import { Semester } from "@/generated/prisma";

export const academicService = {
  // Fetch students who have achievements
  getStudentsWithAchievements: async (params: {
    search?: string;
    academicYear?: string;
    semester?: Semester;
  }) => {
    const { search = "", academicYear = "", semester = "" } = params;
    const res = await fetch(
      `/api/admin/academic?search=${search}&academicYear=${academicYear}&semester=${semester}`
    );
    if (!res.ok) throw new Error("Failed to fetch students");
    return await res.json();
  },

  // Save academic scores for a student
  saveScores: async (data: {
    studentId: string;
    scores: { subject: string; score: number }[];
    academicYear: string;
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
    if (!res.ok || result.error) throw new Error(result.error || "Failed to save scores");
    return result;
  },

  // Upload file and save to AcademicFile model
  uploadAndSaveAcademicFile: async (file: File, academicYear: string, semester: Semester) => {
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
          academicYear,
          semester,
        },
      }),
    });
    const saveResult = await saveRes.json();
    if (!saveRes.ok || saveResult.error) {
      throw new Error(saveResult.error || "Failed to save file metadata");
    }

    return saveResult;
  }
};
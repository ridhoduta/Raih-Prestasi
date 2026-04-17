import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { academicService } from "@/app/service/academicService";
import { Semester } from "@/generated/prisma";

export const useAcademic = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [yearId, setYearId] = useState("2023/2024");
  const [semester, setSemester] = useState<Semester>("GANJIL");

  const [alertState, setAlertState] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  // Query: Get students with achievements
  const { data: students = [], isLoading: loadingStudents, refetch: fetchStudents } = useQuery({
    queryKey: ["academic", "students", search, yearId, semester],
    queryFn: () => academicService.getStudentsWithAchievements({ search, yearId: yearId, semester }),
  });

  const showAlert = (title: string, message: string, type: "success" | "error") => {
    setAlertState({ isOpen: true, title, message, type });
  };

  const closeAlert = () => {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
  };

  // Mutation: Save scores
  const saveScoresMutation = useMutation({
    mutationFn: (payload: { studentId: string; scores: any[]; yearId: string; semester: Semester }) => 
      academicService.saveScores(payload),
    onSuccess: () => {
      showAlert("Berhasil", "Nilai akademik berhasil disimpan", "success");
      queryClient.invalidateQueries({ queryKey: ["academic", "students"] });
    },
    onError: (error: any) => {
      showAlert("Gagal", error.message, "error");
    },
  });

  // Mutation: Upload and save file
  const uploadFileMutation = useMutation({
    mutationFn: (file: File) => 
      academicService.uploadAndSaveAcademicFile(file, yearId, semester),
    onSuccess: () => {
      showAlert("Berhasil", "File akademik berhasil diunggah", "success");
      queryClient.invalidateQueries({ queryKey: ["academic", "files"] });
    },
    onError: (error: any) => {
      showAlert("Gagal", error.message, "error");
    },
  });

  return {
    students,
    loading: loadingStudents,
    search,
    setSearch,
    yearId,
    setYearId,
    semester,
    setSemester,
    fetchStudents,
    handleSaveScores: (studentId: string, scores: any[], year: string, sem: any) => 
      saveScoresMutation.mutate({ studentId, scores, yearId: year, semester: sem }),
    handleUploadFile: (file: File) => uploadFileMutation.mutate(file),
    isSaving: saveScoresMutation.isPending || uploadFileMutation.isPending,
    alertState,
    closeAlert,
  };
};
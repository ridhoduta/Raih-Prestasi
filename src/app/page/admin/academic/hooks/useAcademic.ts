import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { academicService } from "@/app/service/academicService";
import { Semester } from "@/generated/prisma";

export const useAcademic = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [yearId, setYearId] = useState("");
  const [semester, setSemester] = useState<Semester>("GANJIL");

  const [alertState, setAlertState] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  // Query: Get academic years
  const { data: academicYears = [], isLoading: loadingYears, refetch: fetchAcademicYears } = useQuery({
    queryKey: ["academic", "years"],
    queryFn: () => academicService.getAcademicYears(),
  });

  // Set default expected yearId
  useEffect(() => {
    if (academicYears.length > 0 && !yearId) {
      setYearId(academicYears[0].id);
    }
  }, [academicYears, yearId]);

  // Query: Get students with achievements
  const { data: students = [], isLoading: loadingStudents, refetch: fetchStudents } = useQuery({
    queryKey: ["academic", "students", search, yearId, semester],
    queryFn: () => yearId ? academicService.getStudentsWithAchievements({ search, yearId, semester }) : Promise.resolve([]),
    enabled: !!yearId,
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

  // Mutation: Create academic year
  const createYearMutation = useMutation({
    mutationFn: (year: string) => academicService.createAcademicYear({ yearId: year }),
    onSuccess: () => {
      showAlert("Berhasil", "Tahun ajaran berhasil ditambahkan", "success");
      queryClient.invalidateQueries({ queryKey: ["academic", "years"] });
    },
    onError: (error: any) => {
      showAlert("Gagal", error.message, "error");
    },
  });

  // Mutation: Delete academic year
  const deleteYearMutation = useMutation({
    mutationFn: (id: string) => academicService.deleteAcademicYear(id),
    onSuccess: () => {
      showAlert("Berhasil", "Tahun ajaran berhasil dihapus", "success");
      setYearId("");
      queryClient.invalidateQueries({ queryKey: ["academic", "years"] });
    },
    onError: (error: any) => {
      showAlert("Gagal", error.message, "error");
    },
  });

  return {
    students,
    academicYears,
    loading: loadingStudents || loadingYears,
    search,
    setSearch,
    yearId,
    setYearId,
    semester,
    setSemester,
    fetchStudents,
    handleSaveScores: (studentId: string, scores: any[], yearIdParam: string, sem: any) => 
      saveScoresMutation.mutate({ studentId, scores, yearId: yearIdParam, semester: sem }),
    handleUploadFile: (file: File) => uploadFileMutation.mutate(file),
    handleCreateYear: (year: string) => createYearMutation.mutate(year),
    handleDeleteYear: (id: string) => deleteYearMutation.mutate(id),
    isSaving: saveScoresMutation.isPending || uploadFileMutation.isPending || createYearMutation.isPending,
    isDeleting: deleteYearMutation.isPending,
    alertState,
    closeAlert,
  };
};
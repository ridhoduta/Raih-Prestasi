import { useState, useEffect, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getGradesCompetition, createGradeCompetition, updateGradeCompetition, deleteGradeCompetition, GradeCompetition, GradeCompetitionPayload } from "@/app/service/gradeCompetitionService";

export function useGradeCompetition() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGrade, setEditingGrade] = useState<GradeCompetition | null>(null);

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Query for fetching grades
    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["gradesCompetition"],
        queryFn: async () => {
            const response = await getGradesCompetition();
            return response;
        },
    });

    // Filter grades by search term
    const grades = useMemo(() => {
        if (!data?.data) return [];
        if (!debouncedSearch) return data.data;

        const searchLower = debouncedSearch.toLowerCase();
        return data.data.filter((grade: GradeCompetition) =>
            grade.gradeCompetitionName.toLowerCase().includes(searchLower)
        );
    }, [data, debouncedSearch]);

    // Mutation for creating a grade
    const createMutation = useMutation({
        mutationFn: (payload: GradeCompetitionPayload) => createGradeCompetition(payload),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["gradesCompetition"] });
                setIsModalOpen(false);
                showAlert("Berhasil", "Grade berhasil ditambahkan.", "success");
            } else {
                showAlert("Gagal", response.message || "Gagal menambahkan grade.", "error");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat menambahkan grade.", "error");
        }
    });

    // Mutation for updating a grade
    const updateMutation = useMutation({
        mutationFn: ({ id, payload }: { id: string; payload: Partial<GradeCompetitionPayload> }) => updateGradeCompetition(id, payload),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["gradesCompetition"] });
                setIsModalOpen(false);
                setEditingGrade(null);
                showAlert("Berhasil", "Grade berhasil diperbarui.", "success");
            } else {
                showAlert("Gagal", response.message || "Gagal memperbarui grade.", "error");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat memperbarui grade.", "error");
        }
    });

    // Mutation for deleting a grade
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteGradeCompetition(id),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["gradesCompetition"] });
                setConfirmState(prev => ({ ...prev, isOpen: false, id: null }));
                showAlert("Dihapus", "Grade berhasil dihapus.", "success");
            } else {
                showAlert("Gagal", response.message || "Gagal menghapus grade.", "error");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat menghapus grade.", "error");
        }
    });

    // Alert State
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    // Confirm Delete State
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; gradeName: string; title: string; message: string }>({
        isOpen: false,
        id: null,
        gradeName: "",
        title: "",
        message: ""
    });

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    const initiateDelete = (id: string, gradeName: string) => {
        setConfirmState({
            isOpen: true,
            id,
            gradeName,
            title: "Hapus Grade",
            message: `Apakah Anda yakin ingin menghapus grade "${gradeName}"? Tindakan ini tidak dapat dibatalkan.`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        deleteMutation.mutate(confirmState.id);
    };

    const openCreateModal = () => {
        setEditingGrade(null);
        setIsModalOpen(true);
    };

    const openEditModal = (grade: GradeCompetition) => {
        setEditingGrade(grade);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingGrade(null);
    };

    const handleSubmit = async (payload: GradeCompetitionPayload) => {
        if (editingGrade) {
            updateMutation.mutate({ id: editingGrade.id, payload });
        } else {
            createMutation.mutate(payload);
        }
    };

    return {
        searchTerm,
        setSearchTerm,
        grades,
        isLoading,
        isModalOpen,
        editingGrade,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting: deleteMutation.isPending,
        isSubmitting: createMutation.isPending || updateMutation.isPending,
        initiateDelete,
        handleConfirmDelete,
        openCreateModal,
        openEditModal,
        closeModal,
        handleSubmit,
        isError,
    };
}

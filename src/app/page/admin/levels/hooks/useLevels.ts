import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLevels, createLevel, updateLevel, deleteLevel, Level, LevelPayload } from "@/app/service/levelsAPI";

export function useLevels() {
    const queryClient = useQueryClient();

    // TanStack Query for fetching levels
    const { data: levelsData, isLoading } = useQuery({
        queryKey: ["levels"],
        queryFn: async () => {
            const response = await getLevels();
            return response.data ?? [];
        },
    });

    const levels = levelsData ?? [];

    // Modal States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<{ id: string | null; name: string }>({ id: null, name: "" });

    // Alert State
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    // Confirm Delete State
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; title: string; message: string }>({
        isOpen: false,
        id: null,
        title: "",
        message: ""
    });

    // Mutation for create/update
    const submitMutation = useMutation({
        mutationFn: async (payload: { name: string; id?: string | null }) => {
            if (payload.id) {
                return updateLevel(payload.id, { name: payload.name });
            } else {
                const createPayload: LevelPayload = { name: payload.name, order: levels.length + 1 };
                return createLevel(createPayload);
            }
        },
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["levels"] });
                setIsModalOpen(false);
                const isEdit = !!formData.id;
                showAlert("Berhasil", isEdit ? "Tingkat berhasil diperbarui." : "Tingkat berhasil ditambahkan.", "success");
            } else {
                showAlert("Gagal", "Gagal menyimpan tingkat: " + response.message, "error");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan sistem.", "error");
        }
    });

    // Mutation for delete
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteLevel(id),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["levels"] });
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Dihapus", "Tingkat berhasil dihapus.", "success");
            } else {
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Gagal", "Gagal menghapus: " + response.message, "error");
            }
        },
        onError: () => {
            setConfirmState(prev => ({ ...prev, isOpen: false }));
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        }
    });

    const openAddModal = () => {
        setFormData({ id: null, name: "" });
        setIsModalOpen(true);
    };

    const openEditModal = (level: Level) => {
        setFormData({ id: level.id, name: level.name });
        setIsModalOpen(true);
    };

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    const handleSubmit = async () => {
        if (!formData.name) return;
        submitMutation.mutate(formData);
    };

    const initiateDelete = (id: string, name: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Tingkat",
            message: `Apakah Anda yakin ingin menghapus tingkat "${name}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        deleteMutation.mutate(confirmState.id);
    };

    return {
        levels,
        isLoading,
        isModalOpen,
        setIsModalOpen,
        formData,
        setFormData,
        isSubmitting: submitMutation.isPending,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting: deleteMutation.isPending,
        openAddModal,
        openEditModal,
        handleSubmit,
        initiateDelete,
        handleConfirmDelete,
    };
}

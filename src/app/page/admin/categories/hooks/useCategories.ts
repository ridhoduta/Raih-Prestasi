import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCategories, createCategories, updateCategories, deleteCategories, Category } from "@/app/service/categoriesAPI";

export function useCategories() {
    const queryClient = useQueryClient();

    // TanStack Query for fetching categories
    const { data: categoriesData, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await getCategories();
            return response.data ?? [];
        },
    });

    const categories = categoriesData ?? [];

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
                return updateCategories(payload.id, { name: payload.name });
            } else {
                return createCategories({ name: payload.name });
            }
        },
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["categories"] });
                setIsModalOpen(false);
                const isEdit = !!formData.id;
                showAlert("Berhasil", isEdit ? "Kategori berhasil diperbarui." : "Kategori berhasil ditambahkan.", "success");
            } else {
                showAlert("Gagal", "Gagal menyimpan kategori: " + response.message, "error");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan sistem.", "error");
        }
    });

    // Mutation for delete
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteCategories(id),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["categories"] });
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Dihapus", "Kategori berhasil dihapus.", "success");
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

    const openEditModal = (category: Category) => {
        setFormData({ id: category.id, name: category.name });
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
            title: "Hapus Kategori",
            message: `Apakah Anda yakin ingin menghapus kategori "${name}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        deleteMutation.mutate(confirmState.id);
    };

    return {
        categories,
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

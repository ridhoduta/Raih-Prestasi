import { useState, useEffect } from "react";
import { getCategories, createCategories, updateCategories, deleteCategories, Category } from "@/app/service/categoriesAPI";

export function useCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<{ id: string | null; name: string }>({ id: null, name: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            setIsLoading(true);
            const response = await getCategories();
            if (response.success && response.data) {
                setCategories(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch categories", error);
        } finally {
            setIsLoading(false);
        }
    }

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
        setIsSubmitting(true);

        try {
            const isEdit = !!formData.id;
            const payload = { name: formData.name };

            let response;
            if (formData.id) {
                response = await updateCategories(formData.id, payload);
            } else {
                response = await createCategories(payload);
            }

            if (response.success && response.data) {
                if (isEdit) {
                    setCategories(categories.map(c => c.id === formData.id ? (response.data as Category) : c));
                } else {
                    setCategories([response.data as Category, ...categories]);
                }
                setIsModalOpen(false);
                showAlert("Berhasil", isEdit ? "Kategori berhasil diperbarui." : "Kategori berhasil ditambahkan.", "success");
            } else {
                showAlert("Gagal", "Gagal menyimpan kategori: " + response.message, "error");
            }
        } catch (error) {
            showAlert("Error", "Terjadi kesalahan sistem.", "error");
        } finally {
            setIsSubmitting(false);
        }
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
        setIsDeleting(true);
        try {
            const response = await deleteCategories(confirmState.id);
            if (response.success) {
                setCategories(categories.filter((c) => c.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Dihapus", "Kategori berhasil dihapus.", "success");
            } else {
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Gagal", "Gagal menghapus: " + response.message, "error");
            }
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDeleting(false);
        }
    };

    return {
        categories,
        isLoading,
        isModalOpen,
        setIsModalOpen,
        formData,
        setFormData,
        isSubmitting,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        openAddModal,
        openEditModal,
        handleSubmit,
        initiateDelete,
        handleConfirmDelete,
    };
}

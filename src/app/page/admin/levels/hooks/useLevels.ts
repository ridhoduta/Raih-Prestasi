import { useState, useEffect } from "react";
import { getLevels, createLevel, updateLevel, deleteLevel, Level, LevelPayload } from "@/app/service/levelsAPI";

export function useLevels() {
    const [levels, setLevels] = useState<Level[]>([]);
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
        fetchLevels();
    }, []);

    async function fetchLevels() {
        try {
            setIsLoading(true);
            const response = await getLevels();
            if (response.success && response.data) {
                setLevels(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch levels", error);
        } finally {
            setIsLoading(false);
        }
    }

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
        setIsSubmitting(true);

        try {
            const isEdit = !!formData.id;
            const payload = { name: formData.name };

            let response;
            if (formData.id) {
                response = await updateLevel(formData.id, payload);
            } else {
                const createPayload: LevelPayload = { ...payload, order: levels.length + 1 };
                response = await createLevel(createPayload);
            }

            if (response.success && response.data) {
                if (isEdit) {
                    setLevels(levels.map(l => l.id === formData.id ? (response.data as Level) : l));
                } else {
                    setLevels([...levels, response.data as Level]);
                }
                setIsModalOpen(false);
                showAlert("Berhasil", isEdit ? "Tingkat berhasil diperbarui." : "Tingkat berhasil ditambahkan.", "success");
            } else {
                showAlert("Gagal", "Gagal menyimpan tingkat: " + response.message, "error");
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
            title: "Hapus Tingkat",
            message: `Apakah Anda yakin ingin menghapus tingkat "${name}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        setIsDeleting(true);
        try {
            const response = await deleteLevel(confirmState.id);
            if (response.success) {
                setLevels(levels.filter((l) => l.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Dihapus", "Tingkat berhasil dihapus.", "success");
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
        levels,
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

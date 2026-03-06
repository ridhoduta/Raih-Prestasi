import { useState, useEffect, useMemo } from "react";
import { getTeachers, deleteTeacher, Teacher, createTeachersBulk } from "@/app/service/teachersAPI";

export function useTeachers() {
    const [searchTerm, setSearchTerm] = useState("");
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isImporting, setIsImporting] = useState(false);

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
        fetchTeachers();
    }, []);

    async function fetchTeachers() {
        try {
            setIsLoading(true);
            const response = await getTeachers();
            if (response.success && response.data) {
                setTeachers(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch teachers", error);
        } finally {
            setIsLoading(false);
        }
    }

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    const initiateDelete = (id: string, name: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Data Guru",
            message: `Apakah Anda yakin ingin menghapus data guru "${name}"?`
        });
    };

    async function handleConfirmDelete() {
        if (!confirmState.id) return;
        setIsDeleting(true);

        try {
            const response = await deleteTeacher(confirmState.id);
            if (response.success) {
                setTeachers(teachers.filter((t) => t.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Dihapus", "Data guru berhasil dihapus.", "success");
            } else {
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Gagal", "Gagal menghapus guru: " + response.message, "error");
            }
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus data.", "error");
        } finally {
            setIsDeleting(false);
        }
    }

    const handleImportSubmit = async (data: any[]) => {
        setIsImporting(true);
        try {
            const response = await createTeachersBulk(data);
            if (response.success) {
                showAlert("Berhasil", response.message || "Data guru berhasil diimport.", "success");
                setIsImportModalOpen(false);
                fetchTeachers(); // Refresh table
            } else {
                showAlert("Peringatan", response.message || "Beberapa data mungkin gagal diimport.", "info");
            }
        } catch (error: any) {
            showAlert("Error", "Terjadi kesalahan saat import data.", "error");
        } finally {
            setIsImporting(false);
        }
    };

    const filteredTeachers = useMemo(() => {
        return teachers.filter(teacher =>
            teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [teachers, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filteredTeachers,
        isLoading,
        isImportModalOpen,
        setIsImportModalOpen,
        isImporting,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        initiateDelete,
        handleConfirmDelete,
        handleImportSubmit,
    };
}

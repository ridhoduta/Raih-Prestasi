import { useState, useEffect, useMemo } from "react";
import { getStudents, deleteStudent, Student, createStudentsBulk } from "@/app/service/studentsAPI";

export function useStudents() {
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState<Student[]>([]);
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
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; name: string; title: string; message: string }>({
        isOpen: false,
        id: null,
        name: "",
        title: "",
        message: ""
    });
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    async function fetchStudents() {
        try {
            setIsLoading(true);
            const response = await getStudents();
            if (response.success && response.data) {
                setStudents(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch students", error);
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
            name,
            title: "Hapus Data Siswa",
            message: `Apakah Anda yakin ingin menghapus data siswa "${name}"?`
        });
    };

    async function handleConfirmDelete() {
        if (!confirmState.id) return;
        setIsDeleting(true);

        try {
            const response = await deleteStudent(confirmState.id);
            if (response.success) {
                setStudents(students.filter((s) => s.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false, id: null, name: "" });
                showAlert("Dihapus", "Data siswa berhasil dihapus.", "success");
            } else {
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Gagal", "Gagal menghapus siswa: " + response.message, "error");
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
            const response = await createStudentsBulk(data);
            if (response.success) {
                showAlert("Berhasil", response.message || "Data siswa berhasil diimport.", "success");
                setIsImportModalOpen(false);
                fetchStudents(); // Refresh table
            } else {
                showAlert("Peringatan", response.message || "Beberapa data mungkin gagal diimport.", "info");
            }
        } catch (error: any) {
            showAlert("Error", "Terjadi kesalahan saat import data.", "error");
        } finally {
            setIsImporting(false);
        }
    };

    const filteredStudents = useMemo(() => {
        return students.filter(student =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.nisn.includes(searchTerm) ||
            student.kelas.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [students, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filteredStudents,
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

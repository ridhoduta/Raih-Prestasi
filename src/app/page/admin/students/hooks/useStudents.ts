import { useState, useEffect, useCallback } from "react";
import { getStudents, deleteStudent, Student, createStudentsBulk } from "@/app/service/studentsAPI";

const PAGE_LIMIT = 20;

export function useStudents() {
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
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

    // Debounced search
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Fetch students when search changes (reset list)
    useEffect(() => {
        fetchStudents();
    }, [debouncedSearch]);

    const fetchStudents = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await getStudents({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setStudents(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to fetch students", error);
        } finally {
            setIsLoading(false);
        }
    }, [debouncedSearch]);

    // Load more (cursor pagination)
    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getStudents({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setStudents(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more students", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [nextCursor, isLoadingMore, debouncedSearch]);

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

    return {
        searchTerm,
        setSearchTerm,
        students,
        isLoading,
        isLoadingMore,
        nextCursor,
        loadMore,
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

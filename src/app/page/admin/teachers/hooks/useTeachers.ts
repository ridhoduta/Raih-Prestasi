import { useState, useEffect, useCallback } from "react";
import { getTeachers, deleteTeacher, Teacher, createTeachersBulk } from "@/app/service/teachersAPI";

const PAGE_LIMIT = 20;

export function useTeachers() {
    const [searchTerm, setSearchTerm] = useState("");
    const [teachers, setTeachers] = useState<Teacher[]>([]);
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
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; title: string; message: string }>({
        isOpen: false,
        id: null,
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

    // Fetch teachers when search changes (reset list)
    useEffect(() => {
        fetchTeachers();
    }, [debouncedSearch]);

    const fetchTeachers = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await getTeachers({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setTeachers(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to fetch teachers", error);
        } finally {
            setIsLoading(false);
        }
    }, [debouncedSearch]);

    // Load more (cursor pagination)
    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getTeachers({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setTeachers(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more teachers", error);
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

    return {
        searchTerm,
        setSearchTerm,
        teachers,
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

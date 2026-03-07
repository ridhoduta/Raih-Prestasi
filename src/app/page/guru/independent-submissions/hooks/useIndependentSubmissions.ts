import { useState, useEffect, useCallback, useMemo } from "react";
import { IndependentSubmission, deleteIndependentSubmissions, getIndependentSubmissions } from "@/app/service/guruIndependentSubmissionsAPI";

const PAGE_LIMIT = 20;

export function useIndependentSubmissions() {
    const [submissions, setSubmissions] = useState<IndependentSubmission[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<"all" | "menunggu" | "diterima" | "ditolak">("all");

    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; title: string; message: string }>({
        isOpen: false,
        id: null,
        title: "",
        message: ""
    });
    const [isDeleting, setIsDeleting] = useState(false);

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    // Debounced search
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        fetchSubmissions();
    }, [debouncedSearch]);

    const fetchSubmissions = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getIndependentSubmissions({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setSubmissions(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Error fetching submissions:", error);
        } finally {
            setLoading(false);
        }
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getIndependentSubmissions({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setSubmissions(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Error loading more submissions:", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [nextCursor, isLoadingMore, debouncedSearch]);

    const initiateDelete = (id: string, name: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Pengajuan",
            message: `Apakah Anda yakin ingin menolak pengajuan "${name}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        setIsDeleting(true);
        try {
            const response = await deleteIndependentSubmissions(confirmState.id);
            if (response.success) {
                setSubmissions(submissions.filter((s) => s.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Dihapus", "Pengajuan berhasil dihapus.", "success");
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

    // Client-side status filter
    const filteredSubmissions = useMemo(() => {
        if (filterStatus === "all") return submissions;
        return submissions.filter((sub) =>
            (sub.status || "").toLowerCase() === filterStatus
        );
    }, [submissions, filterStatus]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredSubmissions,
        loading,
        isLoadingMore,
        nextCursor,
        loadMore,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        initiateDelete,
        handleConfirmDelete,
    };
}

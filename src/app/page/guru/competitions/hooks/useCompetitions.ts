import { useState, useEffect, useCallback, useMemo } from "react";
import { Competition, getCompetitions, deleteCompetition } from "@/app/service/guruCompetitionsAPI";

const PAGE_LIMIT = 5;

export function useCompetitions() {
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all");
    const [searchTerm, setSearchTerm] = useState("");

    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        id: "",
        title: "",
        message: "",
    });
    const [isDelete, setIsDelete] = useState(false);
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
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
        fetchCompetitions();
    }, [debouncedSearch]);

    const fetchCompetitions = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getCompetitions({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setCompetitions(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to fetch competitions", error);
        } finally {
            setLoading(false);
        }
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getCompetitions({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setCompetitions(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more competitions", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [nextCursor, isLoadingMore, debouncedSearch]);

    const initiateDelete = (id: string, name: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Kompetisi",
            message: `Apakah Anda yakin ingin menghapus kompetisi "${name}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        setIsDelete(true);
        try {
            await deleteCompetition(confirmState.id);
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Success", "Kompetisi berhasil dihapus.", "success");
            fetchCompetitions();
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDelete(false);
        }
    };

    // Client-side status filter
    const filteredCompetitions = useMemo(() => {
        if (filterStatus === "all") return competitions;
        return competitions.filter((comp) =>
            filterStatus === "active" ? comp.isActive : !comp.isActive
        );
    }, [competitions, filterStatus]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredCompetitions,
        loading,
        isLoadingMore,
        nextCursor,
        loadMore,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDelete,
        initiateDelete,
        handleConfirmDelete,
    };
}

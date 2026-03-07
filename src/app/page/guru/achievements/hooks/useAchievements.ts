import { useState, useEffect, useCallback, useMemo } from "react";
import { getAchievements, Achievement, deleteAchievement } from "@/app/service/guruAchievementsAPI";

const PAGE_LIMIT = 20;

export function useAchievements() {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK">("all");

    // Confirm Delete State
    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        id: "",
        title: "",
        message: ""
    });
    const [isDeleting, setIsDeleting] = useState(false);

    // Alert State
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

    // Re-fetch when search changes
    useEffect(() => {
        fetchAchievements();
    }, [debouncedSearch]);

    const fetchAchievements = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getAchievements({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setAchievements(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            setError("Gagal memuat data prestasi");
            console.error("Failed to fetch achievements", error);
        } finally {
            setLoading(false);
        }
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getAchievements({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setAchievements(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more achievements", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [nextCursor, isLoadingMore, debouncedSearch]);

    const initiateDelete = (id: string, name: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Pengajuan",
            message: `Apakah Anda yakin ingin menolak pengajuan prestasi "${name}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        setIsDeleting(true);
        try {
            await deleteAchievement(confirmState.id);
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Success", "Pengajuan berhasil dihapus.", "success");
            fetchAchievements();
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDeleting(false);
        }
    };

    // Client-side status filter (backend doesn't support status filter)
    const filteredAchievements = useMemo(() => {
        if (filterStatus === "all") return achievements;
        return achievements.filter((a) => a.status === filterStatus);
    }, [achievements, filterStatus]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredAchievements,
        loading,
        isLoadingMore,
        nextCursor,
        loadMore,
        error,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        initiateDelete,
        handleConfirmDelete,
    };
}

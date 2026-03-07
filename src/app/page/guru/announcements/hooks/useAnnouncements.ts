import { useState, useEffect, useCallback, useMemo } from "react";
import { Announcement, deleteAnnouncement, getAnnouncements } from "@/app/service/guruAnnouncementsAPI";

const PAGE_LIMIT = 20;

export function useAnnouncements() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");

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
        fetchAnnouncements();
    }, [debouncedSearch]);

    const fetchAnnouncements = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getAnnouncements({
                all: true,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setAnnouncements(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to fetch announcements", error);
        } finally {
            setLoading(false);
        }
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getAnnouncements({
                all: true,
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setAnnouncements(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more announcements", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [nextCursor, isLoadingMore, debouncedSearch]);

    const initiateDelete = (id: string, title: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Pengumuman",
            message: `Apakah Anda yakin ingin menghapus pengumuman "${title}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        setIsDelete(true);
        try {
            await deleteAnnouncement(confirmState.id);
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Success", "Pengumuman berhasil dihapus.", "success");
            fetchAnnouncements();
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDelete(false);
        }
    };

    // Client-side status filter
    const filteredAnnouncements = useMemo(() => {
        if (filterStatus === "all") return announcements;
        return announcements.filter((ann) =>
            filterStatus === "published" ? ann.isPublished : !ann.isPublished
        );
    }, [announcements, filterStatus]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredAnnouncements,
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

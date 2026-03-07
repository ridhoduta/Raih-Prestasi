import { useState, useEffect, useCallback } from "react";
import { getNews, deleteNews, NewsItem } from "@/app/service/newsAPI";

const PAGE_LIMIT = 20;

export function useNews() {
    const [searchTerm, setSearchTerm] = useState("");
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);

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

    useEffect(() => {
        fetchNews();
    }, [debouncedSearch]);

    const fetchNews = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await getNews({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setNews(response.data);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to fetch news", error);
        } finally {
            setIsLoading(false);
        }
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const response = await getNews({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (response.success && response.data) {
                setNews(prev => [...prev, ...response.data!]);
                setNextCursor(response.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more news", error);
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

    const initiateDelete = (id: string, title: string) => {
        setConfirmState({
            isOpen: true,
            id,
            title: "Hapus Berita",
            message: `Apakah Anda yakin ingin menghapus berita "${title}"?`
        });
    };

    const handleConfirmDelete = async () => {
        if (!confirmState.id) return;
        setIsDeleting(true);
        try {
            const response = await deleteNews(confirmState.id);
            if (response.success) {
                setNews(news.filter((n) => n.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Dihapus", "Berita berhasil dihapus.", "success");
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
        searchTerm,
        setSearchTerm,
        news,
        isLoading,
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

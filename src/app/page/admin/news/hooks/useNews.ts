import { useState, useEffect, useMemo } from "react";
import { getNews, deleteNews, NewsItem } from "@/app/service/newsAPI";

export function useNews() {
    const [searchTerm, setSearchTerm] = useState("");
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
        fetchNews();
    }, []);

    async function fetchNews() {
        try {
            setIsLoading(true);
            const response = await getNews();
            if (response.success && response.data) {
                setNews(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch news", error);
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
                setNews(news.filter((n: any) => n.id !== confirmState.id));
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

    const filteredNews = useMemo(() => {
        return news.filter((item: any) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [news, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filteredNews,
        isLoading,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        initiateDelete,
        handleConfirmDelete,
    };
}

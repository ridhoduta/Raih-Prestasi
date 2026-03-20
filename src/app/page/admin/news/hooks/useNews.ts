import { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNews, deleteNews, NewsItem } from "@/app/service/newsAPI";

const PAGE_LIMIT = 20;

export function useNews() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching news with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["news", debouncedSearch],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getNews({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single news array
    const news = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

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

    // Mutation for deleting news
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteNews(id),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["news"] });
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Dihapus", "Berita berhasil dihapus.", "success");
            } else {
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Gagal", "Gagal menghapus: " + response.message, "error");
            }
        },
        onError: () => {
            setConfirmState(prev => ({ ...prev, isOpen: false }));
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        }
    });

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
        deleteMutation.mutate(confirmState.id);
    };

    return {
        searchTerm,
        setSearchTerm,
        news,
        isLoading,
        isLoadingMore: isFetchingNextPage,
        nextCursor: hasNextPage,
        loadMore: fetchNextPage,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting: deleteMutation.isPending,
        initiateDelete,
        handleConfirmDelete,
        isError,
    };
}

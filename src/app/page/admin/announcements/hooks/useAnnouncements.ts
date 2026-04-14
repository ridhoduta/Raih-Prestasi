import { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Announcement, deleteAnnouncement, getAnnouncements } from "@/app/service/guruAnnouncementsAPI";

const PAGE_LIMIT = 20;

export function useAnnouncements() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching announcements with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["announcements", debouncedSearch],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getAnnouncements({
                all: true,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single announcements array
    const announcements = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

    // Mutation for deleting an announcement
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteAnnouncement(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["announcements"] });
            setConfirmState(prev => ({ ...prev, isOpen: false }));
            showAlert("Success", "Pengumuman berhasil dihapus.", "success");
        },
        onError: () => {
            setConfirmState(prev => ({ ...prev, isOpen: false }));
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        }
    });

    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        id: "",
        title: "",
        message: "",
    });

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
        deleteMutation.mutate(confirmState.id);
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
        loading: isLoading,
        isLoadingMore: isFetchingNextPage,
        nextCursor: hasNextPage,
        loadMore: fetchNextPage,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDelete: deleteMutation.isPending,
        initiateDelete,
        handleConfirmDelete,
        isError,
    };
}

import { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAchievements, Achievement, deleteAchievement } from "@/app/service/guruAchievementsAPI";

const PAGE_LIMIT = 20;

export function useAchievements() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK">("all");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching achievements with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["achievements", debouncedSearch],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getAchievements({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single achievements array
    const achievements = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

    // Mutation for deleting an achievement
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteAchievement(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["achievements"] });
            queryClient.invalidateQueries({ queryKey: ["guru", "pending-counts"] });
            showAlert("Success", "Pengajuan berhasil dihapus.", "success");
            setConfirmState(prev => ({ ...prev, isOpen: false }));
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
            setConfirmState(prev => ({ ...prev, isOpen: false }));
        }
    });

    // Confirm Delete State
    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        id: "",
        title: "",
        message: ""
    });

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
        deleteMutation.mutate(confirmState.id);
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
        loading: isLoading,
        isLoadingMore: isFetchingNextPage,
        nextCursor: hasNextPage,
        loadMore: fetchNextPage,
        error: isError ? "Gagal memuat data prestasi" : null,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting: deleteMutation.isPending,
        initiateDelete,
        handleConfirmDelete,
    };
}

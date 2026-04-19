import { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Competition, getCompetitions, deleteCompetition } from "@/app/service/guruCompetitionsAPI";

const PAGE_LIMIT = 5;

export function useCompetitions() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching competitions with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["competitions", debouncedSearch],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getCompetitions({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single competitions array
    const competitions = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

    // Mutation for deleting a competition
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteCompetition(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["competitions"] });
            showAlert("Success", "Kompetisi berhasil dihapus.", "success");
            setConfirmState(prev => ({ ...prev, isOpen: false }));
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
            setConfirmState(prev => ({ ...prev, isOpen: false }));
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
        deleteMutation.mutate(confirmState.id);
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
    };
}

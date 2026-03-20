import { useState, useEffect, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { IndependentSubmission, deleteIndependentSubmissions, getIndependentSubmissions } from "@/app/service/guruIndependentSubmissionsAPI";

const PAGE_LIMIT = 20;

export function useIndependentSubmissions() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "menunggu" | "diterima" | "ditolak">("all");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching submissions with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["independent-submissions", debouncedSearch],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getIndependentSubmissions({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single submissions array
    const submissions = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

    // Mutation for deleting a submission
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteIndependentSubmissions(id),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["independent-submissions"] });
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                showAlert("Dihapus", "Pengajuan berhasil dihapus.", "success");
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

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

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
        deleteMutation.mutate(confirmState.id);
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
        loading: isLoading,
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

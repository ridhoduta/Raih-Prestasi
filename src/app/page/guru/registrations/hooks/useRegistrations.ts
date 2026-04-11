import { useState, useEffect, useCallback, useMemo } from "react";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    getAllRegistrations,
    updateRegistrationStatus,
    getRegistrationById,
    Registration,
    RegistrationDetail
} from "@/app/service/guruCompetitionsAPI";

const PAGE_LIMIT = 20;

export function useRegistrations() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [filterCompetition, setFilterCompetition] = useState<string>("all");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // TanStack Query for fetching all registrations with infinite scroll support
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ["registrations", debouncedSearch],
        queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
            const response = await getAllRegistrations({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
                cursor: pageParam,
            });
            return response;
        },
        initialPageParam: undefined as string | undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    // Flatten pages into a single registrations array
    const registrations = useMemo(() => {
        return data?.pages.flatMap((page) => page.data ?? []) ?? [];
    }, [data]);

    // Mutation for updating registration status
    const statusMutation = useMutation({
        mutationFn: ({ id, status, note }: { id: string, status: "DITERIMA" | "DITOLAK", note: string }) => 
            updateRegistrationStatus(id, status, note),
        onSuccess: (res, variables) => {
            if (res.success) {
                queryClient.invalidateQueries({ queryKey: ["registrations"] });
                queryClient.invalidateQueries({ queryKey: ["guru", "pending-counts"] });
                setAlertState({
                    isOpen: true,
                    title: "Berhasil",
                    message: `Pendaftaran berhasil ${variables.status === "DITERIMA" ? "diterima" : "ditolak"}.`,
                    type: "success",
                });
            } else {
                setAlertState({
                    isOpen: true,
                    title: "Gagal",
                    message: res.message || "Gagal memperbarui status.",
                    type: "error",
                });
            }
            setActionState(prev => ({ ...prev, isOpen: false }));
        },
        onError: () => {
            setAlertState({
                isOpen: true,
                title: "Error",
                message: "Terjadi kesalahan sistem.",
                type: "error",
            });
            setActionState(prev => ({ ...prev, isOpen: false }));
        }
    });

    const [selectedDetailId, setSelectedDetailId] = useState<string | null>(null);

    // Query for fetching registration detail
    const { data: detailData, isLoading: isDetailLoading } = useQuery({
        queryKey: ["registration-detail", selectedDetailId],
        queryFn: () => getRegistrationById(selectedDetailId!),
        enabled: !!selectedDetailId,
    });

    const [detailModal, setDetailModal] = useState<{
        isOpen: boolean;
        data: RegistrationDetail | null;
        loading: boolean;
    }>({
        isOpen: false,
        data: null,
        loading: false,
    });

    useEffect(() => {
        if (detailData?.success) {
            setDetailModal(prev => ({ ...prev, data: detailData.data ?? null, loading: false }));
        }
    }, [detailData]);

    const [actionState, setActionState] = useState<{
        isOpen: boolean;
        id: string;
        studentName: string;
        targetStatus: "DITERIMA" | "DITOLAK" | "";
        note: string;
        isLoading: boolean;
    }>({
        isOpen: false,
        id: "",
        studentName: "",
        targetStatus: "",
        note: "",
        isLoading: false,
    });

    const [alertState, setAlertState] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        type: "success" | "error" | "info";
    }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info",
    });

    const handleStatusUpdate = async () => {
        if (!actionState.id || !actionState.targetStatus) return;
        statusMutation.mutate({
            id: actionState.id,
            status: actionState.targetStatus as "DITERIMA" | "DITOLAK",
            note: actionState.note
        });
    };

    const fetchRegistrationDetail = async (id: string) => {
        setSelectedDetailId(id);
        setDetailModal({ isOpen: true, data: null, loading: true });
    };

    const uniqueCompetitions = useMemo(() => {
        return Array.from(new Set(registrations.map(r => JSON.stringify(r.competition)))).map(s => JSON.parse(s));
    }, [registrations]);

    // Client-side status & competition filters
    const filteredRegistrations = useMemo(() => {
        return registrations.filter((reg) => {
            const matchesStatus = filterStatus === "all" || reg.status === filterStatus;
            const matchesCompetition = filterCompetition === "all" || reg.competition.id === filterCompetition;
            return matchesStatus && matchesCompetition;
        });
    }, [registrations, filterStatus, filterCompetition]);

    return {
        registrations,
        loading: isLoading,
        isLoadingMore: isFetchingNextPage,
        nextCursor: hasNextPage,
        loadMore: fetchNextPage,
        filterStatus,
        setFilterStatus,
        filterCompetition,
        setFilterCompetition,
        searchTerm,
        setSearchTerm,
        detailModal,
        setDetailModal,
        actionState,
        setActionState,
        alertState,
        setAlertState,
        handleStatusUpdate,
        fetchRegistrationDetail,
        uniqueCompetitions,
        filteredRegistrations,
        isError,
        isStatusUpdating: statusMutation.isPending
    };
}

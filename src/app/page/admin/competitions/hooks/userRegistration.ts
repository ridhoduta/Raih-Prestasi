import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
    getRegistrations, 
    updateRegistrationStatus, 
    getCompetitionById,
    getRegistrationById,
    RegistrationDetail
} from "@/app/service/guruCompetitionsAPI";
import { useState, useEffect } from "react";

export function useRegistrations(competitionId: string) {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState("");

    const {
        data: registrations = [],
        isLoading,
        isError,
        refetch
    } = useQuery({
        queryKey: ["registrations", competitionId],
        queryFn: () => getRegistrations(competitionId),
        enabled: !!competitionId,
        select: (response) => response.data || []
    });

    const {
        data: competition,
        isLoading: isCompLoading
    } = useQuery({
        queryKey: ["competition", competitionId],
        queryFn: () => getCompetitionById(competitionId),
        enabled: !!competitionId,
        select: (response) => response.data
    });

    // --- Action State ---
    const [actionState, setActionState] = useState<{
        isOpen: boolean;
        id: string;
        studentName: string;
        targetStatus: "DITERIMA" | "DITOLAK" | "";
        note: string;
    }>({
        isOpen: false,
        id: "",
        studentName: "",
        targetStatus: "",
        note: "",
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

    const statusMutation = useMutation({
        mutationFn: ({ id, status, note }: { id: string, status: "DITERIMA" | "DITOLAK", note: string }) => 
            updateRegistrationStatus(id, status, note),
        onSuccess: (res, variables) => {
            if (res.success) {
                queryClient.invalidateQueries({ queryKey: ["registrations", competitionId] });
                queryClient.invalidateQueries({ queryKey: ["admin", "pending-counts"] });
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

    const handleStatusUpdate = async () => {
        if (!actionState.id || !actionState.targetStatus) return;
        statusMutation.mutate({
            id: actionState.id,
            status: actionState.targetStatus as "DITERIMA" | "DITOLAK",
            note: actionState.note
        });
    };

    // --- Detail Modal ---
    const [selectedDetailId, setSelectedDetailId] = useState<string | null>(null);
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
        if (detailData?.success && selectedDetailId === detailData.data?.id) {
            setDetailModal(prev => ({ 
                ...prev, 
                data: detailData.data ?? null, 
                loading: false 
            }));
        }
    }, [detailData, selectedDetailId]);

    const fetchRegistrationDetail = async (id: string) => {
        if (selectedDetailId === id && detailData?.success) {
            // If already loaded, just open without resetting to loading
            setDetailModal({ isOpen: true, data: detailData.data ?? null, loading: false });
        } else {
            setSelectedDetailId(id);
            setDetailModal({ isOpen: true, data: null, loading: true });
        }
    };

    const [filterStatus, setFilterStatus] = useState<string>("all");

    const filteredRegistrations = registrations.filter(reg => {
        const matchesSearch = reg.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            reg.student.nisn.includes(searchTerm);
        const matchesStatus = filterStatus === "all" || reg.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return {
        registrations: filteredRegistrations,
        competition,
        loading: isLoading || isCompLoading,
        isError,
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        
        // Actions
        actionState,
        setActionState,
        alertState,
        setAlertState,
        handleStatusUpdate,
        isStatusUpdating: statusMutation.isPending,

        // Details
        detailModal,
        setDetailModal,
        fetchRegistrationDetail,

        refetch
    };
}

import { useState, useEffect, useCallback, useMemo } from "react";
import {
    getAllRegistrations,
    updateRegistrationStatus,
    getRegistrationById,
    Registration,
    RegistrationDetail
} from "@/app/service/guruCompetitionsAPI";

const PAGE_LIMIT = 20;

export function useRegistrations() {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [filterCompetition, setFilterCompetition] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");

    const [detailModal, setDetailModal] = useState<{
        isOpen: boolean;
        data: RegistrationDetail | null;
        loading: boolean;
    }>({
        isOpen: false,
        data: null,
        loading: false,
    });

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

    // Debounced search
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        fetchRegistrations();
    }, [debouncedSearch]);

    const fetchRegistrations = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getAllRegistrations({
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (res.success && res.data) {
                setRegistrations(res.data);
                setNextCursor(res.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to fetch registrations", error);
        } finally {
            setLoading(false);
        }
    }, [debouncedSearch]);

    const loadMore = useCallback(async () => {
        if (!nextCursor || isLoadingMore) return;
        try {
            setIsLoadingMore(true);
            const res = await getAllRegistrations({
                cursor: nextCursor,
                limit: PAGE_LIMIT,
                search: debouncedSearch || undefined,
            });
            if (res.success && res.data) {
                setRegistrations(prev => [...prev, ...res.data!]);
                setNextCursor(res.nextCursor ?? null);
            }
        } catch (error) {
            console.error("Failed to load more registrations", error);
        } finally {
            setIsLoadingMore(false);
        }
    }, [nextCursor, isLoadingMore, debouncedSearch]);

    const handleStatusUpdate = async () => {
        if (!actionState.id || !actionState.targetStatus) return;

        setActionState(prev => ({ ...prev, isLoading: true }));
        try {
            const res = await updateRegistrationStatus(
                actionState.id,
                actionState.targetStatus,
                actionState.note
            );
            if (res.success) {
                setAlertState({
                    isOpen: true,
                    title: "Berhasil",
                    message: `Pendaftaran berhasil ${actionState.targetStatus === "DITERIMA" ? "diterima" : "ditolak"}.`,
                    type: "success",
                });
                fetchRegistrations();
            } else {
                setAlertState({
                    isOpen: true,
                    title: "Gagal",
                    message: res.message || "Gagal memperbarui status.",
                    type: "error",
                });
            }
        } catch (error) {
            setAlertState({
                isOpen: true,
                title: "Error",
                message: "Terjadi kesalahan sistem.",
                type: "error",
            });
        } finally {
            setActionState(prev => ({ ...prev, isLoading: false, isOpen: false }));
        }
    };

    const fetchRegistrationDetail = async (id: string) => {
        setDetailModal({ isOpen: true, data: null, loading: true });
        try {
            const res = await getRegistrationById(id);
            if (res.success && res.data) {
                setDetailModal({ isOpen: true, data: res.data, loading: false });
            } else {
                setAlertState({
                    isOpen: true,
                    title: "Error",
                    message: res.message || "Gagal mengambil detail pendaftaran.",
                    type: "error"
                });
                setDetailModal({ isOpen: false, data: null, loading: false });
            }
        } catch (error) {
            setAlertState({
                isOpen: true,
                title: "Error",
                message: "Terjadi kesalahan sistem.",
                type: "error"
            });
            setDetailModal({ isOpen: false, data: null, loading: false });
        }
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
        loading,
        isLoadingMore,
        nextCursor,
        loadMore,
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
        filteredRegistrations
    };
}

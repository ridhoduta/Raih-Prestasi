import { useState, useEffect, useMemo } from "react";
import { Competition, getCompetitions, deleteCompetition } from "@/app/service/guruCompetitionsAPI";

export function useCompetitions() {
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all");
    const [searchTerm, setSearchTerm] = useState("");

    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        id: "",
        title: "",
        message: "",
    });
    const [isDelete, setIsDelete] = useState(false);
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
        setIsDelete(true);
        try {
            await deleteCompetition(confirmState.id);
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Success", "Kompetisi berhasil dihapus.", "success");
            fetchCompetitions();
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDelete(false);
        }
    };

    async function fetchCompetitions() {
        setLoading(true);
        try {
            const response = await getCompetitions();
            if (response.success && response.data) {
                setCompetitions(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch competitions", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCompetitions();
    }, []);

    const filteredCompetitions = useMemo(() => {
        return competitions.filter((comp) => {
            const matchesStatus = filterStatus === "all" || (filterStatus === "active" ? comp.isActive : !comp.isActive);
            const searchString = searchTerm.toLowerCase();
            const titleMatch = (comp.title || "").toLowerCase().includes(searchString);
            return matchesStatus && titleMatch;
        });
    }, [competitions, filterStatus, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredCompetitions,
        loading,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDelete,
        initiateDelete,
        handleConfirmDelete,
    };
}

import { useState, useEffect, useMemo } from "react";
import { getAchievements, Achievement, deleteAchievement } from "@/app/service/guruAchievementsAPI";

export function useAchievements() {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK">("all");

    // Confirm Delete State
    const [confirmState, setConfirmState] = useState({
        isOpen: false,
        id: "",
        title: "",
        message: ""
    });
    const [isDeleting, setIsDeleting] = useState(false);

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

    const fetchAchievements = async () => {
        try {
            setLoading(true);
            const response = await getAchievements();
            setAchievements(response.data ?? []);
        } catch (error) {
            setError("Gagal memuat data prestasi");
        } finally {
            setLoading(false);
        }
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
        setIsDeleting(true);
        try {
            await deleteAchievement(confirmState.id);
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Success", "Pengajuan berhasil dihapus.", "success");
            fetchAchievements();
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDeleting(false);
        }
    };

    useEffect(() => {
        fetchAchievements();
    }, [filterStatus]);

    const filteredAchievements = useMemo(() => {
        return achievements.filter((achievement) => {
            const matchesStatus = filterStatus === "all" || achievement.status === filterStatus;
            const searchString = searchTerm.toLowerCase();
            const titleMatch = (achievement.title || "").toLowerCase().includes(searchString);
            const studentMatch = (achievement.student?.name || "").toLowerCase().includes(searchString);
            const competitionMatch = (achievement.competitionName || "").toLowerCase().includes(searchString);
            return matchesStatus && (titleMatch || studentMatch || competitionMatch);
        });
    }, [achievements, filterStatus, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredAchievements,
        loading,
        error,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        initiateDelete,
        handleConfirmDelete,
    };
}

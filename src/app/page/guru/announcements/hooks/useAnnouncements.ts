import { useState, useEffect, useMemo } from "react";
import { Announcement, deleteAnnouncement, getAnnouncements } from "@/app/service/guruAnnouncementsAPI";

export function useAnnouncements() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");

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
        setIsDelete(true);
        try {
            await deleteAnnouncement(confirmState.id);
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Success", "Pengumuman berhasil dihapus.", "success");
            fetchAnnouncements();
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDelete(false);
        }
    };

    async function fetchAnnouncements() {
        setLoading(true);
        try {
            const response = await getAnnouncements(true);
            if (response.success && response.data) {
                setAnnouncements(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch announcements", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const filteredAnnouncements = useMemo(() => {
        return announcements.filter((ann) => {
            const matchesStatus = filterStatus === "all" || (filterStatus === "published" ? ann.isPublished : !ann.isPublished);
            const searchString = searchTerm.toLowerCase();
            const titleMatch = (ann.title || "").toLowerCase().includes(searchString);
            return matchesStatus && titleMatch;
        });
    }, [announcements, filterStatus, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredAnnouncements,
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

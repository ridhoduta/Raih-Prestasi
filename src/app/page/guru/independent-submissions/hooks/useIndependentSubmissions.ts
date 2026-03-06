import { useState, useEffect, useMemo } from "react";
import { IndependentSubmission, deleteIndependentSubmissions, getIndependentSubmissions } from "@/app/service/guruIndependentSubmissionsAPI";

export function useIndependentSubmissions() {
    const [submissions, setSubmissions] = useState<IndependentSubmission[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState<"all" | "menunggu" | "diterima" | "ditolak">("all");

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
    const [isDeleting, setIsDeleting] = useState(false);

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
        setIsDeleting(true);
        try {
            const response = await deleteIndependentSubmissions(confirmState.id);
            if (response.success) {
                setSubmissions(submissions.filter((s) => s.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Dihapus", "Pengajuan berhasil dihapus.", "success");
            } else {
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Gagal", "Gagal menghapus: " + response.message, "error");
            }
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
        } finally {
            setIsDeleting(false);
        }
    };

    async function fetchSubmissions() {
        try {
            setLoading(true);
            const response = await getIndependentSubmissions();
            setSubmissions(response.data || []);
        } catch (error) {
            console.error("Error fetching submissions:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSubmissions();
    }, [filterStatus]);

    const filteredSubmissions = useMemo(() => {
        return submissions.filter((sub) => {
            const matchesStatus = filterStatus === "all" || (sub.status || "").toLowerCase() === filterStatus;
            const searchString = searchTerm.toLowerCase();
            const titleMatch = (sub.title || "").toLowerCase().includes(searchString);
            const studentMatch = (sub.student?.name || "").toLowerCase().includes(searchString);
            return matchesStatus && (titleMatch || studentMatch);
        });
    }, [submissions, filterStatus, searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filteredSubmissions,
        loading,
        alertState,
        closeAlert,
        confirmState,
        setConfirmState,
        isDeleting,
        initiateDelete,
        handleConfirmDelete,
    };
}

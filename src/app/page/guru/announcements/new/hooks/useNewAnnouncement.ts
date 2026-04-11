import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createAnnouncement } from "@/app/service/guruAnnouncementsAPI";

export function useNewAnnouncement() {
    const router = useRouter();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        isPublished: true,
    });

    const [alertState, setAlertState] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        type: "success" | "error" | "info";
        shouldRedirect?: boolean;
    }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info",
        shouldRedirect: false,
    });

    const mutation = useMutation({
        mutationFn: async () => {
            const payload = {
                title: formData.title,
                content: formData.content,
                isPublished: formData.isPublished,
            };
            const response = await createAnnouncement(payload);
            if (!response.success) {
                throw new Error(response.message || "Gagal membuat pengumuman");
            }
            return response;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["announcements"] });
            showAlert("Berhasil", "Pengumuman berhasil dibuat.", "success", true);
        },
        onError: (error: any) => {
            console.error("Mutation error:", error);
            showAlert("Gagal", error.message || "Terjadi kesalahan sistem.", "error");
        }
    });

    const showAlert = (title: string, message: string, type: "success" | "error" | "info", shouldRedirect = false) => {
        setAlertState({ isOpen: true, title, message, type, shouldRedirect });
    };

    const closeAlert = () => {
        setAlertState((prev) => ({ ...prev, isOpen: false }));
        if (alertState.shouldRedirect) {
            router.push("/page/guru/announcements");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title || !formData.content) {
            showAlert("Peringatan", "Judul dan konten harus diisi!", "error");
            return;
        }
        mutation.mutate();
    };

    return {
        formData,
        setFormData,
        handleSubmit,
        alertState,
        closeAlert,
        isLoading: mutation.isPending,
    };
}

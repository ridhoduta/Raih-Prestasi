"use client";

import AlertModal from "@/app/components/AlertModal";
import { Announcement, getAnnouncementDetail, updateAnnouncement } from "@/app/service/guruAnnouncementsAPI";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function EditAnnouncementPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
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

    useEffect(() => {
        fetchAnnouncement();
    }, [id]);

    const fetchAnnouncement = async () => {
        setLoading(true);
        try {
            const response = await getAnnouncementDetail(id);
            if (response.success && response.data) {
                setFormData({
                    title: response.data.title,
                    content: response.data.content,
                    isPublished: response.data.isPublished,
                });
            } else {
                showAlert("Gagal", "Gagal mengambil data pengumuman: " + response.message, "error", true);
            }
        } catch (error) {
            console.error("Failed to fetch announcement", error);
            showAlert("Error", "Terjadi kesalahan saat memuat data.", "error", true);
        } finally {
            setLoading(false);
        }
    };

    const showAlert = (title: string, message: string, type: "success" | "error" | "info", shouldRedirect = false) => {
        setAlertState({ isOpen: true, title, message, type, shouldRedirect });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
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

        setSaving(true);
        try {
            const response = await updateAnnouncement(id, formData);

            if (response.success) {
                showAlert("Berhasil", "Pengumuman berhasil diperbarui.", "success", true);
            } else {
                showAlert("Gagal", "Gagal memperbarui pengumuman: " + response.message, "error");
            }
        } catch (error: any) {
            console.error("Failed to update announcement", error);
            showAlert("Error", "Terjadi kesalahan sistem saat memperbarui pengumuman.", "error");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="animate-spin text-emerald-600" size={48} />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/page/guru/announcements"
                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Edit Pengumuman</h1>
                    <p className="text-gray-500 mt-1">Perbarui detail pengumuman</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Judul Pengumuman</label>
                        <input
                            type="text"
                            required
                            placeholder="Contoh: Jadwal Ujian Akhir Semester"
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-900"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Konten / Isi Pengumuman</label>
                        <textarea
                            required
                            placeholder="Tulis detail pengumuman di sini..."
                            rows={8}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-900"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <input
                            type="checkbox"
                            id="isPublished"
                            checked={formData.isPublished}
                            onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                            className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <label htmlFor="isPublished" className="text-sm font-medium text-gray-700">
                            Publikasikan
                        </label>
                    </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => router.push("/page/guru/announcements")}
                        className="flex-1 px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors border border-gray-100"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
                    >
                        {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                        Simpan Perubahan
                    </button>
                </div>
            </form>

            <AlertModal
                isOpen={alertState.isOpen}
                onClose={closeAlert}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
            />
        </div>
    );
}

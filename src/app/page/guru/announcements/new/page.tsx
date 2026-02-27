"use client";

import AlertModal from "@/app/components/AlertModal";
import { createAnnouncement } from "@/app/service/guruAnnouncementsAPI";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewAnnouncementPage() {
    const router = useRouter();
    const STATIC_GURU_ID = "d351129f-7522-4ff2-9314-e6957cd8bc8f"; // Matching competition template
    const [loading, setLoading] = useState(false);
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

        setLoading(true);
        try {
            const payload = {
                title: formData.title,
                content: formData.content,
                isPublished: formData.isPublished,
                createdBy: STATIC_GURU_ID,
            };

            const response = await createAnnouncement(payload);

            if (response.success) {
                showAlert("Berhasil", "Pengumuman berhasil dibuat.", "success", true);
            } else {
                showAlert("Gagal", "Gagal menambahkan pengumuman: " + response.message, "error");
            }
        } catch (error: any) {
            console.error("Failed to save announcement", error);
            showAlert("Error", "Terjadi kesalahan sistem saat menyimpan pengumuman.", "error");
        } finally {
            setLoading(false);
        }
    };

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
                    <h1 className="text-2xl font-bold text-gray-900">Tambah Pengumuman Baru</h1>
                    <p className="text-gray-500 mt-1">Buat pengumuman baru untuk siswa dan staf</p>
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
                            Publikasikan Langsung
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
                        disabled={loading}
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                        Simpan Pengumuman
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

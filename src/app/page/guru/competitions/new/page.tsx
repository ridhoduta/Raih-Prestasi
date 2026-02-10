"use client";

import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";
import AlertModal from "@/app/components/AlertModal";
import { useState, useEffect } from "react";
import { createCompetition, updateCompetition } from "@/app/service/guruCompetitionsAPI";
import { Category, getCategories } from "@/app/service/categoriesAPI";
import { getLevels, Level } from "@/app/service/levelsAPI";

export default function AddCompetitionPage() {
    const router = useRouter();
    const STATIC_GURU_ID = "d351129f-7522-4ff2-9314-e6957cd8bc8f";
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        isActive: false,
        startDate: "",
        endDate: "",
        levelId: "",
        categoryId: "",
        createdById: ""
    });
    const [categories, setCategories] = useState<Category[]>([]);
    const [levels, setLevels] = useState<Level[]>([]);
    const [loading, setLoading] = useState(false);
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info"; shouldRedirect?: boolean }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info",
        shouldRedirect: false
    });
    const showAlert = (title: string, message: string, type: "success" | "error" | "info", shouldRedirect = false) => {
        setAlertState({ isOpen: true, title, message, type, shouldRedirect });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
        if (alertState.shouldRedirect) {
            router.push("/page/guru/competitions");
        }
    };
    async function fetchAllData() {
        setLoading(true);
        try {
            const [catRes, levelRes] = await Promise.all([
                getCategories(),
                getLevels(),
            ]);

            if (catRes.success && catRes.data) setCategories(catRes.data);
            if (levelRes.success && levelRes.data) setLevels(levelRes.data);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAllData();
    }, []);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title || !formData.categoryId || !formData.levelId || !formData.startDate || !formData.endDate) {
            alert("Harap isi semua field yang wajib!");
            return;
        }

        try {

            const payload = {
                title: formData.title,
                description: formData.description,
                categoryId: formData.categoryId,
                levelId: formData.levelId,
                startDate: formData.startDate,
                endDate: formData.endDate,
                isActive: formData.isActive,
                createdById: formData.createdById || STATIC_GURU_ID,
            };

            let response;
            response = await createCompetition(payload);

            if (response.success) {
                showAlert("Berhasil", "Kompetisi berhasil dibuat.", "success", true);
            } else {
                showAlert("Gagal", "Gagal menambahkan kompetisi: " + response.message, "error");
            }
        } catch (error) {
            console.error("Failed to save competition", error);
            showAlert("Error", "Terjadi kesalahan sistem saat menyimpan kompetisi.", "error");
        } finally {

        }
    };
    const handleCancel = () => {
        router.push("/page/guru/competitions");
    };


    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/page/guru/competitions"
                    className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Tambah Kompetisi Baru</h1>
                    <p className="text-gray-500 mt-1">Buat kompetisi baru</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Judul Kompetisi</label>
                        <input
                            type="text"
                            required
                            placeholder="Contoh: Olimpiade Sains Nasional"
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                        <input
                            type="text"
                            required
                            placeholder="Contoh: Olimpiade Sains Nasional"
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                        <input
                            type="date"
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Berakhir</label>
                        <input
                            type="date"
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
                            value={formData.endDate}
                            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                        <select
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
                            value={formData.categoryId}
                            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                        >
                            <option value="">Pilih Kategori</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
                        <select
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
                            value={formData.levelId}
                            onChange={(e) => setFormData({ ...formData, levelId: e.target.value })}
                        >
                            <option value="">Pilih Level</option>
                            {levels.map((level) => (
                                <option key={level.id} value={level.id}>
                                    {level.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="isActive"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                        Aktif
                    </label>
                </div>

                <div className="pt-4 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                        Simpan Data
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

"use client"

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { getCompetitionById, updateCompetition } from "@/app/service/guruCompetitionsAPI";
import { Category, getCategories } from "@/app/service/categoriesAPI";
import { Level, getLevels } from "@/app/service/levelsAPI";
import AlertModal from "@/app/components/AlertModal";
import Link from "next/link";

export default function EditCompetitionPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);
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
    const [alertState, setAlertState] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "info" as "success" | "error" | "info",
        shouldRedirect: false
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [competitionRes, categoriesRes, levelsRes] = await Promise.all([
                getCompetitionById(id),
                getCategories(),
                getLevels()
            ]);

            if (competitionRes.success && competitionRes.data) {
                const competition = competitionRes.data;
                setFormData({
                    id: competition.id,
                    title: competition.title,
                    description: competition.description ?? "",
                    isActive: competition.isActive,
                    startDate: competition.startDate ? new Date(competition.startDate).toISOString().split('T')[0] : "",
                    endDate: competition.endDate ? new Date(competition.endDate).toISOString().split('T')[0] : "",
                    levelId: competition.levelId,
                    categoryId: competition.categoryId,
                    createdById: competition.createdBy
                });
            }

            if (categoriesRes.success && categoriesRes.data) setCategories(categoriesRes.data);
            if (levelsRes.success && levelsRes.data) setLevels(levelsRes.data);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title || !formData.categoryId || !formData.levelId || !formData.startDate || !formData.endDate) {
            alert("Harap isi semua field yang wajib!");
            return;
        }

        try {
            const payload = {
                id: formData.id,
                title: formData.title,
                description: formData.description,
                categoryId: formData.categoryId,
                levelId: formData.levelId,
                startDate: formData.startDate,
                endDate: formData.endDate,
                isActive: formData.isActive,
                createdById: formData.createdById
            };

            const response = await updateCompetition(id, payload);

            if (response.success) {
                setAlertState({ isOpen: true, title: "Berhasil", message: "Kompetisi berhasil diupdate.", type: "success", shouldRedirect: true });
            } else {
                setAlertState({ isOpen: true, title: "Gagal", message: "Gagal mengupdate kompetisi: " + response.message, type: "error", shouldRedirect: false });
            }
        } catch (error) {
            console.error("Failed to save competition", error);
            setAlertState({ isOpen: true, title: "Error", message: "Terjadi kesalahan sistem saat menyimpan kompetisi.", type: "error", shouldRedirect: false });
        }
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
        if (alertState.shouldRedirect) {
            router.push("/page/guru/competitions");
        }
    };

    const handleCancel = () => {
        router.push("/page/guru/competitions");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    return (
        <>
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
            </div></>
    );
}
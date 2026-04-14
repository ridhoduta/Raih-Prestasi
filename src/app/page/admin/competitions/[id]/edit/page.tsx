"use client"

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2, Plus, Trash2, Image as ImageIcon, X } from "lucide-react";
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
        thumbnail: "",
        isActive: false,
        startDate: "",
        endDate: "",
        levelId: "",
        categoryId: "",
        createdById: ""
    });
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [formFields, setFormFields] = useState<{ label: string; fieldType: string; isRequired: boolean }[]>([]);
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
                    thumbnail: competition.thumbnail || "",
                    isActive: competition.isActive,
                    startDate: competition.startDate ? new Date(competition.startDate).toISOString().split('T')[0] : "",
                    endDate: competition.endDate ? new Date(competition.endDate).toISOString().split('T')[0] : "",
                    levelId: competition.levelId,
                    categoryId: competition.categoryId,
                    createdById: competition.createdBy
                });
                if (competition.thumbnail) {
                    setThumbnailPreview(competition.thumbnail);
                }
                if (competition.CompetitionFormField) {
                    setFormFields(competition.CompetitionFormField.map((f: any) => ({
                        label: f.label,
                        fieldType: f.fieldType,
                        isRequired: f.isRequired
                    })));
                }
            }

            if (categoriesRes.success && categoriesRes.data) setCategories(categoriesRes.data);
            if (levelsRes.success && levelsRes.data) setLevels(levelsRes.data);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    };

    const addField = () => {
        setFormFields([...formFields, { label: "", fieldType: "TEXT", isRequired: false }]);
    };

    const removeField = (index: number) => {
        setFormFields(formFields.filter((_, i) => i !== index));
    };

    const updateField = (index: number, updates: any) => {
        const newFields = [...formFields];
        newFields[index] = { ...newFields[index], ...updates };
        setFormFields(newFields);
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setThumbnailFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setThumbnailPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeThumbnail = () => {
        setThumbnailFile(null);
        setThumbnailPreview(null);
        setFormData({ ...formData, thumbnail: "" });
    };

    const uploadThumbnail = async (): Promise<string | null> => {
        if (!thumbnailFile) return null;

        const formDataUpload = new FormData();
        formDataUpload.append("file", thumbnailFile);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formDataUpload,
            });
            const data = await res.json();
            if (data.success) {
                return data.url.publicUrl;
            }
            throw new Error(data.message || "Gagal upload thumbnail");
        } catch (error) {
            console.error("Upload error:", error);
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.title || !formData.categoryId || !formData.levelId || !formData.startDate || !formData.endDate) {
            alert("Harap isi semua field yang wajib!");
            return;
        }

        if (formFields.some(f => !f.label)) {
            alert("Semua label field pendaftaran harus diisi!");
            return;
        }

        setLoading(true);

        try {
            let thumbnailUrl = formData.thumbnail;
            if (thumbnailFile) {
                thumbnailUrl = await uploadThumbnail() || "";
            }

            const payload = {
                id: formData.id,
                title: formData.title,
                description: formData.description,
                thumbnail: thumbnailUrl,
                categoryId: formData.categoryId,
                levelId: formData.levelId,
                startDate: formData.startDate,
                endDate: formData.endDate,
                isActive: formData.isActive,
                createdById: formData.createdById,
                formFields: formFields.map((f, idx) => ({ ...f, order: idx }))
            };

            const response = await updateCompetition(id, payload as any);

            if (response.success) {
                setAlertState({ isOpen: true, title: "Berhasil", message: "Kompetisi berhasil diupdate.", type: "success", shouldRedirect: true });
            } else {
                setAlertState({ isOpen: true, title: "Gagal", message: "Gagal mengupdate kompetisi: " + response.message, type: "error", shouldRedirect: false });
            }
        } catch (error: any) {
            console.error("Failed to save competition", error);
            setAlertState({ isOpen: true, title: "Error", message: error.message || "Terjadi kesalahan sistem saat menyimpan kompetisi.", type: "error", shouldRedirect: false });
        } finally {
            setLoading(false);
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
                        <h1 className="text-2xl font-bold text-gray-900">Edit Kompetisi</h1>
                        <p className="text-gray-500 mt-1">Perbarui data kompetisi</p>
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
                            <textarea
                                required
                                placeholder="Tulis deskripsi kompetisi di sini..."
                                rows={3}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail Kompetisi</label>
                            <div className="flex flex-col gap-4">
                                {thumbnailPreview ? (
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 group">
                                        <img
                                            src={thumbnailPreview}
                                            alt="Thumbnail preview"
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeThumbnail}
                                            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-emerald-500 transition-all group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 mb-2" />
                                            <p className="text-sm text-gray-500 group-hover:text-emerald-600">Pilih thumbnail kompetisi</p>
                                            <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP (Max 2MB)</p>
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleThumbnailChange}
                                        />
                                    </label>
                                )}
                            </div>
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

                        <div className="pt-6 border-t border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Field Pendaftaran</h3>
                                    <p className="text-sm text-gray-500">Tentukan data apa saja yang harus diisi pendaftar</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={addField}
                                    className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                                >
                                    <Plus size={16} />
                                    Tambah Field
                                </button>
                            </div>

                            <div className="space-y-4">
                                {formFields.map((field, index) => (
                                    <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3 relative group">
                                        <button
                                            type="button"
                                            onClick={() => removeField(index)}
                                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 size={16} />
                                        </button>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-1">Label Field</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Contoh: Nomor HP"
                                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                                                    value={field.label}
                                                    onChange={(e) => updateField(index, { label: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-1">Tipe Field</label>
                                                <select
                                                    className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                                                    value={field.fieldType}
                                                    onChange={(e) => updateField(index, { fieldType: e.target.value })}
                                                >
                                                    <option value="TEXT">Teks Singkat</option>
                                                    <option value="TEXTAREA">Teks Panjang</option>
                                                    <option value="NUMBER">Angka</option>
                                                    <option value="FILE">Upload File</option>
                                                    <option value="DATE">Tanggal</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id={`req-${index}`}
                                                checked={field.isRequired}
                                                onChange={(e) => updateField(index, { isRequired: e.target.checked })}
                                                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                                            />
                                            <label htmlFor={`req-${index}`} className="text-xs text-gray-600">
                                                Wajib Diisi
                                            </label>
                                        </div>
                                    </div>
                                ))}

                                {formFields.length === 0 && (
                                    <div className="text-center py-6 border-2 border-dashed border-gray-200 rounded-xl">
                                        <p className="text-sm text-gray-400">Belum ada field kustom.</p>
                                    </div>
                                )}
                            </div>
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
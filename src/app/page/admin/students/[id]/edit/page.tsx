"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Loader2, Save, User, Hash, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";

import { getStudentDetail, updateStudent, StudentPayload } from "@/app/service/studentsAPI";
import AlertModal from "@/app/components/AlertModal";

export default function EditStudentPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [formData, setFormData] = useState<StudentPayload>({
        nisn: "",
        name: "",
        kelas: "",
        angkatan: new Date().getFullYear(),
        isActive: true,
    });

    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "success"
    });

    useEffect(() => {
        fetchStudent();
    }, [id]);

    const fetchStudent = async () => {
        try {
            const response = await getStudentDetail(id);
            if (response.success && response.data) {
                setFormData({
                    nisn: response.data.nisn,
                    name: response.data.name,
                    kelas: response.data.kelas,
                    angkatan: response.data.angkatan,
                    isActive: response.data.isActive,
                });
            } else {
                showAlert("Error", "Gagal mengambil data siswa", "error");
            }
        } catch (error) {
            showAlert("Error", "Terjadi kesalahan sistem", "error");
        } finally {
            setIsFetching(false);
        }
    };

    const showAlert = (title: string, message: string, type: "success" | "error") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "isActive") {
            setFormData(prev => ({ ...prev, isActive: value === "true" }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: name === "angkatan" ? parseInt(value) || "" : value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading) return;

        if (!formData.nisn || !formData.name || !formData.kelas || !formData.angkatan) {
            showAlert("Error", "Semua field wajib diisi.", "error");
            return;
        }

        setIsLoading(true);

        try {
            const response = await updateStudent(id, formData);
            if (response.success) {
                showAlert("Berhasil", "Data siswa berhasil diupdate.", "success");
                setTimeout(() => {
                    router.push("/page/admin/students");
                }, 1500);
            } else {
                showAlert("Gagal", response.message || "Gagal mengupdate data siswa.", "error");
            }
        } catch (error: any) {
            showAlert("Error", error.message || "Terjadi kesalahan sistem.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="animate-spin text-emerald-500" size={32} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/page/admin/students"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ChevronLeft size={24} className="text-gray-600" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Edit Siswa</h1>
                    <p className="text-gray-500">Update data siswa SMKN 1 Boyolangu</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Hash size={16} className="text-emerald-500" />
                                NISN
                            </label>
                            <input
                                id="student-nisn"
                                type="text"
                                name="nisn"
                                value={formData.nisn}
                                onChange={handleInputChange}
                                placeholder="Masukkan NISN siswa"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <User size={16} className="text-emerald-500" />
                                Nama Lengkap
                            </label>
                            <input
                                id="student-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Masukkan nama lengkap"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <GraduationCap size={16} className="text-emerald-500" />
                                Kelas
                            </label>
                            <input
                                id="student-kelas"
                                type="text"
                                name="kelas"
                                value={formData.kelas}
                                onChange={handleInputChange}
                                placeholder="Contoh: XII RPL 1"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Calendar size={16} className="text-emerald-500" />
                                Angkatan
                            </label>
                            <input
                                id="student-angkatan"
                                type="number"
                                name="angkatan"
                                value={formData.angkatan}
                                onChange={handleInputChange}
                                placeholder="Tahun masuk"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                required
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700">Status Akun</label>
                            <select
                                name="isActive"
                                value={formData.isActive ? "true" : "false"}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                            >
                                <option value="true">Aktif</option>
                                <option value="false">Nonaktif</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Link
                        href="/page/admin/students"
                        className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Batal
                    </Link>
                    <button
                        id="save-student-btn"
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-8 py-2.5 rounded-xl font-medium transition-all shadow-sm"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Menyimpan...
                            </>
                        ) : (
                            <>
                                <Save size={18} />
                                Simpan Perubahan
                            </>
                        )}
                    </button>
                </div>
            </form>

            <AlertModal
                isOpen={alertState.isOpen}
                onClose={() => setAlertState(prev => ({ ...prev, isOpen: false }))}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
            />
        </div>
    );
}

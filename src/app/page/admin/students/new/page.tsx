"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Loader2, Save, User, Hash, GraduationCap, Calendar } from "lucide-react";
import Link from "next/link";

import { createStudent, StudentPayload } from "@/app/service/studentsAPI";
import AlertModal from "@/app/components/AlertModal";

export default function NewStudentPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<StudentPayload>({
        nisn: "",
        name: "",
        kelas: "",
        angkatan: new Date().getFullYear(),
    });

    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "success"
    });

    const showAlert = (title: string, message: string, type: "success" | "error") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "angkatan" ? parseInt(value) || "" : value
        }));
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
            const response = await createStudent(formData);
            if (response.success) {
                showAlert("Berhasil", "Data siswa berhasil ditambahkan.", "success");
                setTimeout(() => {
                    router.push("/page/admin/students");
                }, 1500);
            } else {
                showAlert("Gagal", response.message || "Gagal menambahkan data siswa.", "error");
            }
        } catch (error: any) {
            showAlert("Error", error.message || "Terjadi kesalahan sistem.", "error");
        } finally {
            setIsLoading(false);
        }
    };

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
                    <h1 className="text-2xl font-bold text-gray-900">Tambah Siswa Baru</h1>
                    <p className="text-gray-500">Input data lengkap siswa SMKN 1 Boyolangu</p>
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
                                type="text"
                                name="nisn"
                                value={formData.nisn}
                                onChange={handleInputChange}
                                placeholder="Masukkan NISN siswa"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                required
                            />
                            <p className="text-xs text-gray-400 mt-1">*Password default akan sama dengan NISN</p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <User size={16} className="text-emerald-500" />
                                Nama Lengkap
                            </label>
                            <input
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
                                type="number"
                                name="angkatan"
                                value={formData.angkatan}
                                onChange={handleInputChange}
                                placeholder="Tahun masuk"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-black"
                                required
                            />
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
                                Simpan Data
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

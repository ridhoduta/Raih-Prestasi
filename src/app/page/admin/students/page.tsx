"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, User, Loader2, GraduationCap } from "lucide-react";

import { getStudents, deleteStudent, Student } from "@/app/service/studentsAPI";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function StudentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; name: string; title: string; message: string }>({
        isOpen: false,
        id: null,
        name: "",
        title: "",
        message: ""
    });
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchStudents();
    }, []);

    async function fetchStudents() {
        try {
            const response = await getStudents();
            if (response.success && response.data) {
                setStudents(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch students", error);
        } finally {
            setIsLoading(false);
        }
    }

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
            name,
            title: "Hapus Data Siswa",
            message: `Apakah Anda yakin ingin menghapus data siswa "${name}"?`
        });
    };

    async function handleConfirmDelete() {
        if (!confirmState.id) return;
        setIsDeleting(true);

        try {
            const response = await deleteStudent(confirmState.id);
            if (response.success) {
                setStudents(students.filter((s) => s.id !== confirmState.id));
                setConfirmState({ ...confirmState, isOpen: false, id: null, name: "" });
                showAlert("Dihapus", "Data siswa berhasil dihapus.", "success");
            } else {
                setConfirmState({ ...confirmState, isOpen: false });
                showAlert("Gagal", "Gagal menghapus siswa: " + response.message, "error");
            }
        } catch (error) {
            setConfirmState({ ...confirmState, isOpen: false });
            showAlert("Error", "Terjadi kesalahan saat menghapus data.", "error");
        } finally {
            setIsDeleting(false);
        }
    }

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.nisn.includes(searchTerm) ||
        student.kelas.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Data Siswa</h1>
                    <p className="text-gray-500 mt-1">Kelola data siswa dan akses prestasi</p>
                </div>

                <Link
                    href="/page/admin/students/new"
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
                >
                    <Plus size={18} />
                    Tambah Siswa
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari nama, NISN, atau kelas..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-black"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {isLoading ? (
                    <div className="p-12 text-center text-gray-500 flex justify-center">
                        <Loader2 className="animate-spin text-emerald-600" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                                <tr>
                                    <th className="px-6 py-4">Nama Siswa</th>
                                    <th className="px-6 py-4">NISN</th>
                                    <th className="px-6 py-4">Kelas</th>
                                    <th className="px-6 py-4">Angkatan</th>
                                    <th className="px-6 py-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs text-center">
                                                <User size={14} />
                                            </div>
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.nisn}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <GraduationCap size={14} className="text-gray-400" />
                                                {student.kelas}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.angkatan}
                                        </td>
                                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                                            <Link
                                                href={`/page/admin/students/${student.id}/edit`}
                                                className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                                title="Edit"
                                            >
                                                <Edit size={16} />
                                            </Link>
                                            <button
                                                onClick={() => initiateDelete(student.id, student.name)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                title="Hapus"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!isLoading && filteredStudents.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        Belum ada data siswa.
                    </div>
                )}
            </div>

            <AlertModal
                isOpen={alertState.isOpen}
                onClose={closeAlert}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
            />

            <ConfirmModal
                isOpen={confirmState.isOpen}
                onClose={() => setConfirmState({ ...confirmState, isOpen: false })}
                onConfirm={handleConfirmDelete}
                title={confirmState.title}
                message={confirmState.message}
                isLoading={isDeleting}
            />
        </div>
    );
}

import Link from "next/link";
import { Edit, Trash2, User, GraduationCap, Loader2, Power, CheckCircle2, XCircle } from "lucide-react";
import { Student } from "@/app/service/studentsAPI";

interface StudentTableProps {
    students: Student[];
    isLoading: boolean;
    onDelete: (id: string, name: string) => void;
    onToggleStatus: (id: string, name: string, currentStatus: boolean) => void;
}

export function StudentTable({ students, isLoading, onDelete, onToggleStatus }: StudentTableProps) {
    if (isLoading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
        );
    }

    if (students.length === 0) {
        return (
            <div className="p-12 text-center text-gray-500">
                Belum ada data siswa.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Nama Siswa</th>
                        <th className="px-6 py-4">NISN</th>
                        <th className="px-6 py-4">Kelas</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {students.map((student) => (
                        <tr key={student.id} className={`hover:bg-gray-50/50 transition-colors ${!student.isActive ? "opacity-60 bg-gray-50/30" : ""}`}>
                            <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full ${student.isActive ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"} flex items-center justify-center font-bold text-xs text-center`}>
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
                            <td className="px-6 py-4 text-center">
                                {student.isActive ? (
                                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                        <CheckCircle2 size={12} />
                                        Aktif
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                        <XCircle size={12} />
                                        Nonaktif
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right flex justify-end gap-1">
                                <Link
                                    href={`/page/admin/students/${student.id}/edit`}
                                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                    title="Edit"
                                >
                                    <Edit size={16} />
                                </Link>
                                <button
                                    onClick={() => onToggleStatus(student.id, student.name, student.isActive)}
                                    className={`p-2 rounded-lg transition-all ${student.isActive ? "text-gray-400 hover:text-orange-600 hover:bg-orange-50" : "text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"}`}
                                    title={student.isActive ? "Nonaktifkan" : "Aktifkan"}
                                >
                                    <Power size={16} />
                                </button>
                                <button
                                    onClick={() => onDelete(student.id, student.name)}
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
    );
}

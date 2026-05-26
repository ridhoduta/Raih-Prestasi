import { Edit, Trash2, Award, Loader2, Users } from "lucide-react";
import { Grade } from "@/app/service/gradeService";

interface GradeTableProps {
    grades: Grade[];
    isLoading: boolean;
    onEdit: (grade: Grade) => void;
    onDelete: (id: string, gradeName: string) => void;
}

export function GradeTable({ grades, isLoading, onEdit, onDelete }: GradeTableProps) {
    if (isLoading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
        );
    }

    if (grades.length === 0) {
        return (
            <div className="p-12 text-center text-gray-500">
                Belum ada data grade. Klik "Tambah Grade" untuk menambahkan.
            </div>
        );
    }

    const getGradeColor = (gradeName: string) => {
        if (!gradeName) return 'bg-gray-100 text-gray-700 border-gray-200';
        const name = gradeName.toUpperCase();
        
        // Single characters
        if (name === 'A') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        if (name === 'B') return 'bg-blue-100 text-blue-700 border-blue-200';
        if (name === 'C') return 'bg-amber-100 text-amber-700 border-amber-200';
        if (name === 'D') return 'bg-orange-100 text-orange-700 border-orange-200';
        if (name === 'E') return 'bg-red-100 text-red-700 border-red-200';

        // Words / Keywords matching
        if (name.includes('INTERNASIONAL') || name.includes('WORLD') || name.includes('GLOBAL')) {
            return 'bg-purple-100 text-purple-700 border-purple-200';
        }
        if (name.includes('NASIONAL') || name.includes('EMAS') || name.includes('GOLD') || name.includes('1')) {
            return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        }
        if (name.includes('PROVINSI') || name.includes('PERAK') || name.includes('SILVER') || name.includes('2')) {
            return 'bg-blue-100 text-blue-700 border-blue-200';
        }
        if (name.includes('KABUPATEN') || name.includes('KOTA') || name.includes('PERUNGGU') || name.includes('BRONZE') || name.includes('3')) {
            return 'bg-amber-100 text-amber-700 border-amber-200';
        }
        if (name.includes('KECAMATAN')) {
            return 'bg-orange-100 text-orange-700 border-orange-200';
        }
        if (name.includes('SEKOLAH') || name.includes('INTERNAL')) {
            return 'bg-gray-100 text-gray-700 border-gray-200';
        }

        // Generic fallback with nice aesthetic colors based on string length/hash so they look consistent but distinct!
        const colors = [
            'bg-emerald-100 text-emerald-700 border-emerald-200',
            'bg-blue-100 text-blue-700 border-blue-200',
            'bg-amber-100 text-amber-700 border-amber-200',
            'bg-purple-100 text-purple-700 border-purple-200',
            'bg-pink-100 text-pink-700 border-pink-200',
            'bg-indigo-100 text-indigo-700 border-indigo-200',
            'bg-cyan-100 text-cyan-700 border-cyan-200'
        ];
        
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Grade</th>
                        <th className="px-6 py-4 text-center">Points</th>
                        <th className="px-6 py-4 text-center">Digunakan</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {grades.map((grade) => (
                        <tr key={grade.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className={`px-4 py-2 min-w-[3rem] h-12 rounded-xl flex items-center justify-center font-bold text-base border whitespace-nowrap ${getGradeColor(grade.gradeName)}`}>
                                        {grade.gradeName}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Grade {grade.gradeName}</p>
                                        <p className="text-xs text-gray-500">
                                            Dibuat: {new Date(grade.createdAt).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-lg">
                                    {grade.points}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Users size={14} className="text-gray-400" />
                                    <span className={`font-medium ${grade._count?.achievements && grade._count.achievements > 0 ? 'text-emerald-600' : 'text-gray-400'}`}>
                                        {grade._count?.achievements || 0} achievement
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-1">
                                    <button
                                        onClick={() => onEdit(grade)}
                                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                        title="Edit"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(grade.id, grade.gradeName)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        title="Hapus"
                                        disabled={!!grade._count?.achievements && grade._count.achievements > 0}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

import { Edit, Trash2, Loader2, Users } from "lucide-react";
import type { GradeCompetition } from "@/app/service/gradeCompetitionService";

interface GradeCompetitionTableProps {
    grades: GradeCompetition[];
    isLoading: boolean;
    onEdit: (grade: GradeCompetition) => void;
    onDelete: (id: string, gradeCompetitionName: string) => void;
}

export function GradeCompetitionTable({ grades, isLoading, onEdit, onDelete }: GradeCompetitionTableProps) {
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

    const getGradeColor = (gradeCompetitionName: string) => {
        switch (gradeCompetitionName.toUpperCase()) {
            case 'A': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'B': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'C': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'D': return 'bg-orange-100 text-orange-700 border-orange-200';
            case 'E': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
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
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border ${getGradeColor(grade.gradeCompetitionName)}`}>
                                        {grade.gradeCompetitionName}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Grade {grade.gradeCompetitionName}</p>
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
                                        onClick={() => onDelete(grade.id, grade.gradeCompetitionName)}
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

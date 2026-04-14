import { Edit, Loader2, Trash2, Trophy, Calendar } from "lucide-react";
import { Competition } from "@/app/service/guruCompetitionsAPI";

interface CompetitionTableProps {
    competitions: Competition[];
    loading: boolean;
    filterStatus: string;
    onEdit: (competition: Competition) => void;
    onDelete: (id: string, name: string) => void;
}

export function CompetitionTable({ competitions, loading, filterStatus, onEdit, onDelete }: CompetitionTableProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return (
            <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
                <Calendar size={14} />
                {date.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Judul</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Rentang</th>
                        <th className="px-6 py-4">Kategori</th>
                        <th className="px-6 py-4">Tingkat</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {competitions.length > 0 ? (
                        competitions.map((competition) => (
                            <tr key={competition.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                            <Trophy size={16} />
                                        </div>
                                        {competition.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${competition.isActive
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                        : "bg-gray-50 text-gray-600 border-gray-100"
                                        }`}>
                                        {competition.isActive ? "Aktif" : "Nonaktif"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 flex-wrap max-w-[200px]">
                                        {formatDate(competition.startDate)}
                                        <span className="text-gray-300 mx-0.5">•</span>
                                        {formatDate(competition.endDate)}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        {competition.category?.name || "-"}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        {competition.level?.name || "-"}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(competition)}
                                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                        title="Edit"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(competition.id, competition.title)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                        title="Hapus"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                Tidak ada kompetisi {filterStatus === 'all' ? '' : filterStatus === 'active' ? 'aktif' : 'nonaktif'} ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

import { Award, Eye, File, Loader2, Trash2, Calendar } from "lucide-react";
import { Achievement } from "@/app/service/guruAchievementsAPI";

interface AchievementTableProps {
    achievements: Achievement[];
    loading: boolean;
    onEdit: (achievement: Achievement) => void;
    onDelete: (id: string, name: string) => void;
}

export function AchievementTable({ achievements, loading, onEdit, onDelete }: AchievementTableProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
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
                        <th className="px-6 py-4">Nama</th>
                        <th className="px-6 py-4">Nama Kompetisi</th>
                        <th className="px-6 py-4">Hasil</th>
                        <th className="px-6 py-4">Sertifikat</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Tanggal</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {achievements.length > 0 ? (
                        achievements.map((achievement) => (
                            <tr key={achievement.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                            <Award size={16} />
                                        </div>
                                        {achievement.title}
                                    </div>
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {achievement.student.name}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 max-w-[200px] truncate">
                                    {achievement.competitionName}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {achievement.result}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <a href={achievement.certificate} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all inline-block">
                                        <File size={16} />
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${achievement.status === "TERVERIFIKASI"
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                        : achievement.status === "DITOLAK"
                                            ? "bg-red-50 text-red-700 border-red-100"
                                            : "bg-amber-50 text-amber-700 border-amber-100"
                                        }`}>
                                        {achievement.status ? (achievement.status.charAt(0).toUpperCase() + achievement.status.slice(1).toLowerCase()) : "-"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(achievement.createdAt)}
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(achievement)}
                                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                        title="Lihat"
                                    >
                                        <Eye size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(achievement.id, achievement.student.name)}
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
                            <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                                Tidak ada prestasi ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

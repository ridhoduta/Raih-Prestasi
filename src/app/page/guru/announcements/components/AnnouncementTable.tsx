import { Edit, Loader2, Newspaper, Trash2 } from "lucide-react";
import { Announcement } from "@/app/service/guruAnnouncementsAPI";

interface AnnouncementTableProps {
    announcements: Announcement[];
    loading: boolean;
    filterStatus: string;
    onEdit: (id: string) => void;
    onDelete: (id: string, title: string) => void;
}

export function AnnouncementTable({ announcements, loading, filterStatus, onEdit, onDelete }: AnnouncementTableProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
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
                        <th className="px-6 py-4">Penulis</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Tanggal Dibuat</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {announcements.length > 0 ? (
                        announcements.map((announcement) => (
                            <tr key={announcement.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                            <Newspaper size={16} />
                                        </div>
                                        {announcement.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {announcement.guru?.name || "Guru"}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${announcement.isPublished
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                        : "bg-gray-50 text-gray-600 border-gray-100"
                                        }`}>
                                        {announcement.isPublished ? "Dipublikasikan" : "Draft"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(announcement.createdAt)}
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(announcement.id)}
                                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                        title="Edit"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(announcement.id, announcement.title)}
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
                            <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                Tidak ada pengumuman {filterStatus === 'all' ? '' : filterStatus === 'published' ? 'yang dipublikasikan' : 'draft'} ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

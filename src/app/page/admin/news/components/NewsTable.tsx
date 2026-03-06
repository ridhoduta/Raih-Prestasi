import Link from "next/link";
import { Edit, Trash2, Calendar, Loader2 } from "lucide-react";
import { NewsItem } from "@/app/service/newsAPI";

interface NewsTableProps {
    news: NewsItem[];
    isLoading: boolean;
    onDelete: (id: string, title: string) => void;
}

export function NewsTable({ news, isLoading, onDelete }: NewsTableProps) {
    if (isLoading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
        );
    }

    if (news.length === 0) {
        return (
            <div className="p-12 text-center text-gray-500">
                Belum ada berita.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Judul Berita</th>
                        <th className="px-6 py-4">Tanggal</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {news.map((item: any) => (
                        <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                {item.title}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Calendar size={14} />
                                    {new Date(item.createdAt).toLocaleDateString("id-ID", {
                                        day: "numeric", month: "short", year: "numeric"
                                    })}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${item.isPublished
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                    : "bg-amber-50 text-amber-700 border-amber-100"
                                    }`}>
                                    {item.isPublished ? "Terbit" : "Draf"}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right flex justify-end gap-2">
                                <Link
                                    href={`/page/admin/news/${item.id}/edit`}
                                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                    title="Edit"
                                >
                                    <Edit size={16} />
                                </Link>
                                <button
                                    onClick={() => onDelete(item.id, item.title)}
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

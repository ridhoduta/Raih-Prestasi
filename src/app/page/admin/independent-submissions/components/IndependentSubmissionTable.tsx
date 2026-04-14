import { Eye, File, Loader2, Send, Trash2, Calendar } from "lucide-react";
import { IndependentSubmission } from "@/app/service/guruIndependentSubmissionsAPI";

interface IndependentSubmissionTableProps {
    submissions: IndependentSubmission[];
    loading: boolean;
    onEdit: (submission: IndependentSubmission) => void;
    onDelete: (id: string, name: string) => void;
}

export function IndependentSubmissionTable({ submissions, loading, onEdit, onDelete }: IndependentSubmissionTableProps) {
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
                        <th className="px-6 py-4">Deskripsi</th>
                        <th className="px-6 py-4">File</th>
                        <th className="px-6 py-4">Siswa</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Tanggal</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {submissions.length > 0 ? (
                        submissions.map((submission) => (
                            <tr key={submission.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                            <Send size={16} />
                                        </div>
                                        {submission.title}
                                    </div>
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-900 truncate max-w-xs">
                                    {submission.description}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <a href={submission.documentUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all inline-block">
                                        <File size={16} />
                                    </a>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {submission.student.name}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${submission.status === "DITERIMA"
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                        : submission.status === "DITOLAK"
                                            ? "bg-red-50 text-red-700 border-red-100"
                                            : "bg-amber-50 text-amber-700 border-amber-100"
                                        }`}>
                                        {submission.status ? (submission.status.charAt(0).toUpperCase() + submission.status.slice(1).toLowerCase()) : "-"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {formatDate(submission.createdAt)}
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(submission)}
                                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                        title="Lihat"
                                    >
                                        <Eye size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(submission.id, submission.student.name)}
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
                            <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                Tidak ada pengajuan ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

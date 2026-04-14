import { CheckCircle, Clock, Eye, Loader2, XCircle, Calendar } from "lucide-react";
import { Registration } from "@/app/service/guruCompetitionsAPI";

interface RegistrationTableProps {
    registrations: Registration[];
    loading: boolean;
    onViewDetail: (id: string) => void;
    onActionClick: (id: string, studentName: string, targetStatus: "DITERIMA" | "DITOLAK") => void;
}

export function RegistrationTable({ registrations, loading, onViewDetail, onActionClick }: RegistrationTableProps) {
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "DITERIMA":
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        <CheckCircle size={12} />
                        Diterima
                    </span>
                );
            case "DITOLAK":
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                        <XCircle size={12} />
                        Ditolak
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                        <Clock size={12} />
                        Menunggu
                    </span>
                );
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return (
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-600 font-medium whitespace-nowrap">
                    <Calendar size={14} className="text-gray-400" />
                    {date.toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </div>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
                    {date.toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })} WIB
                </span>
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
                        <th className="px-6 py-4">Siswa</th>
                        <th className="px-6 py-4">Kompetisi</th>
                        <th className="px-6 py-4">Tgl Daftar</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {registrations.length > 0 ? (
                        registrations.map((reg) => (
                            <tr key={reg.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs">
                                            {reg.student.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{reg.student.name}</p>
                                            <p className="text-xs text-gray-500">{reg.student.nisn} • {reg.student.kelas}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-medium text-gray-900">{reg.competition.title}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-gray-500">{formatDate(reg.createdAt)}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {getStatusBadge(reg.status)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => onViewDetail(reg.id)}
                                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                            title="Lihat Detail"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        {reg.status === "MENUNGGU" ? (
                                            <>
                                                <button
                                                    onClick={() => onActionClick(reg.id, reg.student.name, "DITERIMA")}
                                                    className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-semibold hover:bg-emerald-600 transition-colors"
                                                >
                                                    Terima
                                                </button>
                                                <button
                                                    onClick={() => onActionClick(reg.id, reg.student.name, "DITOLAK")}
                                                    className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors"
                                                >
                                                    Tolak
                                                </button>
                                            </>
                                        ) : (
                                            <span className="text-gray-400 text-xs italic flex items-center">Selesai</span>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                Tidak ada data pendaftaran ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

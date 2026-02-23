"use client";

import { useEffect, useState } from "react";
import {
    getAllRegistrations,
    updateRegistrationStatus,
    getRegistrationById,
    Registration,
    RegistrationDetail
} from "@/app/service/guruCompetitionsAPI";
import {
    Loader2,
    User,
    CheckCircle,
    XCircle,
    Clock,
    Filter,
    Search,
    ChevronRight,
    ClipboardList,
    Eye,
    FileText
} from "lucide-react";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function GuruRegistrations() {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [filterCompetition, setFilterCompetition] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");

    const [detailModal, setDetailModal] = useState<{
        isOpen: boolean;
        data: RegistrationDetail | null;
        loading: boolean;
    }>({
        isOpen: false,
        data: null,
        loading: false,
    });

    const [actionState, setActionState] = useState<{
        isOpen: boolean;
        id: string;
        studentName: string;
        targetStatus: "DITERIMA" | "DITOLAK" | "";
        note: string;
        isLoading: boolean;
    }>({
        isOpen: false,
        id: "",
        studentName: "",
        targetStatus: "",
        note: "",
        isLoading: false,
    });

    const [alertState, setAlertState] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        type: "success" | "error" | "info";
    }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info",
    });

    const fetchRegistrations = async () => {
        setLoading(true);
        try {
            const res = await getAllRegistrations();
            if (res.success && res.data) {
                setRegistrations(res.data);
            }
        } catch (error) {
            console.error("Failed to fetch registrations", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRegistrations();
    }, []);

    const handleStatusUpdate = async () => {
        if (!actionState.id || !actionState.targetStatus) return;

        setActionState(prev => ({ ...prev, isLoading: true }));
        try {
            const res = await updateRegistrationStatus(
                actionState.id,
                actionState.targetStatus,
                actionState.note
            );
            if (res.success) {
                setAlertState({
                    isOpen: true,
                    title: "Berhasil",
                    message: `Pendaftaran berhasil ${actionState.targetStatus === "DITERIMA" ? "diterima" : "ditolak"}.`,
                    type: "success",
                });
                fetchRegistrations();
            } else {
                setAlertState({
                    isOpen: true,
                    title: "Gagal",
                    message: res.message || "Gagal memperbarui status.",
                    type: "error",
                });
            }
        } catch (error) {
            setAlertState({
                isOpen: true,
                title: "Error",
                message: "Terjadi kesalahan sistem.",
                type: "error",
            });
        } finally {
            setActionState(prev => ({ ...prev, isLoading: false, isOpen: false }));
        }
    };

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
        return new Date(dateString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const fetchRegistrationDetail = async (id: string) => {
        setDetailModal({ isOpen: true, data: null, loading: true });
        try {
            const res = await getRegistrationById(id);
            if (res.success && res.data) {
                setDetailModal({ isOpen: true, data: res.data, loading: false });
            } else {
                setAlertState({
                    isOpen: true,
                    title: "Error",
                    message: res.message || "Gagal mengambil detail pendaftaran.",
                    type: "error"
                });
                setDetailModal({ isOpen: false, data: null, loading: false });
            }
        } catch (error) {
            setAlertState({
                isOpen: true,
                title: "Error",
                message: "Terjadi kesalahan sistem.",
                type: "error"
            });
            setDetailModal({ isOpen: false, data: null, loading: false });
        }
    };

    const uniqueCompetitions = Array.from(new Set(registrations.map(r => JSON.stringify(r.competition)))).map(s => JSON.parse(s));

    const filteredRegistrations = registrations.filter((reg) => {
        const matchesStatus = filterStatus === "all" || reg.status === filterStatus;
        const matchesCompetition = filterCompetition === "all" || reg.competition.id === filterCompetition;
        const matchesSearch = reg.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reg.student.nisn.includes(searchTerm);
        return matchesStatus && matchesCompetition && matchesSearch;
    });

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Pendaftaran</h1>
                <p className="text-gray-500 mt-1">
                    Kelola pendaftaran siswa pada kompetisi Anda.
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari nama atau NISN..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm appearance-none"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="all">Semua Status</option>
                            <option value="MENUNGGU">Menunggu</option>
                            <option value="DITERIMA">Diterima</option>
                            <option value="DITOLAK">Ditolak</option>
                        </select>
                    </div>

                    <div className="relative">
                        <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm appearance-none"
                            value={filterCompetition}
                            onChange={(e) => setFilterCompetition(e.target.value)}
                        >
                            <option value="all">Semua Kompetisi</option>
                            {uniqueCompetitions.map((comp: any) => (
                                <option key={comp.id} value={comp.id}>
                                    {comp.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="animate-spin text-emerald-600" size={32} />
                    </div>
                ) : (
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
                                {filteredRegistrations.length > 0 ? (
                                    filteredRegistrations.map((reg) => (
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
                                                <p className="text-gray-500">{formatDate(reg.createdAt)}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                {getStatusBadge(reg.status)}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => fetchRegistrationDetail(reg.id)}
                                                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                        title="Lihat Detail"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    {reg.status === "MENUNGGU" ? (
                                                        <>
                                                            <button
                                                                onClick={() => setActionState({
                                                                    isOpen: true,
                                                                    id: reg.id,
                                                                    studentName: reg.student.name,
                                                                    targetStatus: "DITERIMA",
                                                                    note: "",
                                                                    isLoading: false
                                                                })}
                                                                className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-xs font-semibold hover:bg-emerald-600 transition-colors"
                                                            >
                                                                Terima
                                                            </button>
                                                            <button
                                                                onClick={() => setActionState({
                                                                    isOpen: true,
                                                                    id: reg.id,
                                                                    studentName: reg.student.name,
                                                                    targetStatus: "DITOLAK",
                                                                    note: "",
                                                                    isLoading: false
                                                                })}
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
                )}
            </div>

            {/* Detail Modal */}
            {detailModal.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Detail Jawaban</h3>
                                    <p className="text-xs text-gray-500">Informasi pendaftaran siswa</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setDetailModal(prev => ({ ...prev, isOpen: false }))}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                            >
                                <XCircle size={20} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-6 flex-1">
                            {detailModal.loading ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-3">
                                    <Loader2 size={32} className="animate-spin text-blue-600" />
                                    <p className="text-sm text-gray-500 font-medium">Memuat data...</p>
                                </div>
                            ) : detailModal.data && (
                                <>
                                    {/* Student Info */}
                                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg shadow-sm">
                                                {detailModal.data.student.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg">{detailModal.data.student.name}</h4>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <span>{detailModal.data.student.nisn}</span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                    <span>{detailModal.data.student.kelas}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Competition Info */}
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kompetisi</p>
                                        <p className="font-semibold text-gray-900 bg-emerald-50 text-emerald-700 px-4 py-2.5 rounded-xl inline-block border border-emerald-100">
                                            {detailModal.data.competition.title}
                                        </p>
                                    </div>

                                    {/* Answers */}
                                    <div className="space-y-4 pt-2">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Jawaban Pendaftaran</p>
                                        <div className="grid gap-4">
                                            {detailModal.data.answers.length > 0 ? (
                                                detailModal.data.answers.map((ans, idx) => (
                                                    <div key={idx} className="space-y-1.5 group">
                                                        <label className="text-sm font-semibold text-gray-700 block transition-colors group-hover:text-blue-600">
                                                            {ans.field.label}
                                                        </label>
                                                        <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 text-sm group-hover:bg-white group-hover:border-blue-200 group-hover:shadow-sm transition-all min-h-[40px]">
                                                            {ans.field.fieldType === "FILE" ? (
                                                                <a
                                                                    href={String(ans.value)}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-600 hover:underline flex items-center gap-2 font-medium"
                                                                >
                                                                    <FileText size={16} />
                                                                    Lihat File Terlampir
                                                                </a>
                                                            ) : (
                                                                String(ans.value) || "-"
                                                            )}
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-center py-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                                    <p className="text-sm text-gray-400">Tidak ada data pendaftaran tambahan.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="p-6 border-t border-gray-100 flex gap-3 bg-white">
                            <button
                                onClick={() => setDetailModal(prev => ({ ...prev, isOpen: false }))}
                                className="w-full px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Action Modal (Simplified Version for Acceptance/Rejection with Note) */}
            {actionState.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full p-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${actionState.targetStatus === "DITERIMA" ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                                {actionState.targetStatus === "DITERIMA" ? <CheckCircle size={24} /> : <XCircle size={24} />}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                {actionState.targetStatus === "DITERIMA" ? "Terima Pendaftaran" : "Tolak Pendaftaran"}
                            </h3>
                        </div>

                        <p className="text-gray-600">
                            Apakah Anda yakin ingin {actionState.targetStatus === "DITERIMA" ? "menerima" : "menolak"} pendaftaran dari <strong>{actionState.studentName}</strong>?
                        </p>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Catatan (Opsional)</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm h-24 resize-none"
                                placeholder="Berikan alasan atau instruksi tambahan..."
                                value={actionState.note}
                                onChange={(e) => setActionState(prev => ({ ...prev, note: e.target.value }))}
                            />
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={() => setActionState(prev => ({ ...prev, isOpen: false }))}
                                className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleStatusUpdate}
                                disabled={actionState.isLoading}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-white transition-all ${actionState.targetStatus === "DITERIMA" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-red-500 hover:bg-red-600"
                                    } disabled:opacity-50`}
                            >
                                {actionState.isLoading ? <Loader2 size={18} className="animate-spin" /> : "Konfirmasi"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <AlertModal
                isOpen={alertState.isOpen}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
                onClose={() => setAlertState(prev => ({ ...prev, isOpen: false }))}
            />
        </div>
    );
}

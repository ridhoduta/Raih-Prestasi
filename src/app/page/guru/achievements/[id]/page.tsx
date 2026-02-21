"use client"

import AlertModal from "@/app/components/AlertModal";
import { getAchievementDetail, Achievement, verifyAchievement, VerifyAchievementPayload } from "@/app/service/guruAchievementsAPI";
import { ArrowLeft, Loader2, CheckCircle, XCircle, Clock, Save, ChevronDown, Settings, Award, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [achievement, setAchievement] = useState<Achievement | null>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Status update states
    const [selectedStatus, setSelectedStatus] = useState<Achievement["status"] | "">("");
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "warning" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    const fetchAchievement = async () => {
        try {
            setLoading(true);
            const response = await getAchievementDetail(id);
            if (response.success && response.data) {
                setAchievement(response.data);
                setSelectedStatus(response.data.status);
            } else {
                setError("Data prestasi tidak ditemukan");
            }
        } catch (error) {
            setError("Gagal memuat detail prestasi");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAchievement();
    }, [id]);

    const handleUpdateStatus = async () => {
        if (!selectedStatus) return;

        try {
            setUpdating(true);
            const response = await verifyAchievement(id, {
                status: selectedStatus as Achievement["status"],
                verifiedBy: "Guru Pembimbing", // Placeholder or from session if available
            });

            if (response.success) {
                setAlertState({
                    isOpen: true,
                    title: "Berhasil",
                    message: response.message || "Status prestasi berhasil diperbarui.",
                    type: "success"
                });
                fetchAchievement();
            } else {
                setAlertState({
                    isOpen: true,
                    title: "Gagal",
                    message: response.message || "Terjadi kesalahan saat memperbarui status.",
                    type: "error"
                });
            }
        } catch (err) {
            setAlertState({
                isOpen: true,
                title: "Error",
                message: "Gagal menyambung ke server.",
                type: "error"
            });
        } finally {
            setUpdating(false);
        }
    };

    if (error) {
        return (
            <div className="p-6 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Kembali
                    </button>
                </div>
                <div className="p-4 text-red-600 font-medium bg-red-50 rounded-xl border border-red-100 italic">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Detail Prestasi</h1>
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Kembali
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center p-12">
                    <Loader2 className="animate-spin text-emerald-600 mb-2" size={40} />
                    <p className="text-gray-500 font-medium">Memuat data...</p>
                </div>
            ) : achievement ? (
                <>
                    <div className="bg-white shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-inner">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">{achievement.title}</h2>
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mt-2 ${achievement.status === 'TERVERIFIKASI' ? 'bg-green-100 text-green-700' :
                                        achievement.status === 'DITOLAK' ? 'bg-red-100 text-red-700' :
                                            'bg-amber-100 text-amber-700'
                                        }`}>
                                        {achievement.status === 'TERVERIFIKASI' && <CheckCircle size={14} />}
                                        {achievement.status === 'DITOLAK' && <XCircle size={14} />}
                                        {achievement.status === 'MENUNGGU' && <Clock size={14} />}
                                        {achievement.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Nama Kompetisi</p>
                                    <p className="text-gray-900 font-bold text-lg leading-relaxed">{achievement.competitionName}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Hasil / Peringkat</p>
                                    <p className="text-emerald-700 font-bold bg-emerald-50 inline-block px-3 py-1 rounded-lg border border-emerald-100">{achievement.result}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Siswa Terkait</p>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <p className="text-gray-900 font-bold">{achievement.student.name}</p>
                                        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                            <div>
                                                <p className="text-gray-500 text-xs">NISN</p>
                                                <p className="text-gray-700 font-medium">{achievement.student.nisn}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-xs">Kelas</p>
                                                <p className="text-gray-700 font-medium">{achievement.student.kelas}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Waktu Pengajuan</p>
                                    <p className="text-gray-700 font-medium">{new Date(achievement.createdAt).toLocaleString('id-ID', {
                                        dateStyle: 'long',
                                        timeStyle: 'short'
                                    })}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Terakhir Diperbarui</p>
                                    <p className="text-gray-700 font-medium">{new Date(achievement.updatedAt).toLocaleString('id-ID', {
                                        dateStyle: 'long',
                                        timeStyle: 'short'
                                    })}</p>
                                </div>
                                {achievement.guru && (
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Guru Pembimbing</p>
                                        <p className="text-gray-700 font-medium">{achievement.guru.name}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 border-t border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-3">Sertifikat & Bukti</p>
                            <div className="flex flex-wrap gap-3">
                                {achievement.certificate && (
                                    <a
                                        href={achievement.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-md active:scale-95"
                                    >
                                        <FileText size={18} />
                                        Lihat Sertifikat
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Update Status Section */}
                    <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6">
                        <div className="flex flex-col md:flex-row md:items-end gap-6">
                            <div className="flex-1 space-y-2">
                                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <Settings size={16} className="text-gray-400" />
                                    Pembaruan Status Verifikasi
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value as Achievement["status"])}
                                        className={`w-full appearance-none p-3.5 pl-4 pr-10 rounded-xl border-2 font-bold transition-all outline-none cursor-pointer ${selectedStatus === "TERVERIFIKASI" ? "border-emerald-100 bg-emerald-50 text-emerald-700 focus:border-emerald-500" :
                                                selectedStatus === "DITOLAK" ? "border-red-100 bg-red-50 text-red-700 focus:border-red-500" :
                                                    "border-amber-100 bg-amber-50 text-amber-700 focus:border-amber-500"
                                            }`}
                                    >
                                        <option value="MENUNGGU">🟡 MENUNGGU</option>
                                        <option value="TERVERIFIKASI">✅ TERVERIFIKASI</option>
                                        <option value="DITOLAK">❌ DITOLAK</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-48">
                                <button
                                    onClick={handleUpdateStatus}
                                    disabled={updating || (selectedStatus === achievement.status)}
                                    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg active:scale-95"
                                >
                                    {updating ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <Save size={20} />
                                    )}
                                    {updating ? "Proses" : "Simpan"}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="bg-white p-12 shadow-lg rounded-2xl text-center border border-gray-100">
                    <p className="text-gray-500 text-lg font-medium">Data prestasi tidak ditemukan.</p>
                </div>
            )}

            <AlertModal
                isOpen={alertState.isOpen}
                onClose={() => setAlertState({ ...alertState, isOpen: false })}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
            />
        </div>
    );
}

"use client"

import AlertModal from "@/app/components/AlertModal";
import { getIndependentSubmissionDetail, IndependentSubmission, reviewIndependentSubmission, IndependentSubmissionStatus } from "@/app/service/guruIndependentSubmissionsAPI";
import { ArrowLeft, Loader2, CheckCircle, XCircle, Clock, Save, ChevronDown, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [submission, setSubmission] = useState<IndependentSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Status update states
    const [selectedStatus, setSelectedStatus] = useState<IndependentSubmissionStatus | "">("");
    const [rejectionNote, setRejectionNote] = useState("");
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "warning" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    const fetchSubmission = async () => {
        try {
            setLoading(true);
            const response = await getIndependentSubmissionDetail(id);
            setSubmission(response.data ?? []);
            if (response.data && response.data.length > 0) {
                setSelectedStatus(response.data[0].status);
                setRejectionNote(response.data[0].rejectionNote || "");
            }
        } catch (error) {
            setError("Gagal memuat detail pengajuan");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmission();
    }, [id]);

    const handleUpdateStatus = async () => {
        if (!selectedStatus) return;

        if (selectedStatus === "DITOLAK" && !rejectionNote) {
            setAlertState({
                isOpen: true,
                title: "Perhatian",
                message: "Alasan penolakan wajib diisi jika status DITOLAK.",
                type: "warning"
            });
            return;
        }

        try {
            setUpdating(true);
            const response = await reviewIndependentSubmission(id, {
                status: selectedStatus as "DITERIMA" | "DITOLAK" | "MENUNGGU",
                reviewedBy: "Guru Pembimbing", // Placeholder or from session if available
                rejectionNote: selectedStatus === "DITOLAK" ? rejectionNote : undefined,
            });

            if (response.success) {
                setAlertState({
                    isOpen: true,
                    title: "Berhasil",
                    message: response.message || "Status pengajuan berhasil diperbarui.",
                    type: "success"
                });
                fetchSubmission();
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
        return <div className="p-4 text-red-600 font-medium bg-red-50 rounded-md">{error}</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Detail Pengajuan</h1>
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
                    <p className="text-gray-500">Memuat data...</p>
                </div>
            ) : submission.length > 0 ? (
                <>
                    <div className="bg-white shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{submission[0].title}</h2>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mt-2 ${submission[0].status === 'DITERIMA' ? 'bg-green-100 text-green-700' :
                                    submission[0].status === 'DITOLAK' ? 'bg-red-100 text-red-700' :
                                        'bg-amber-100 text-amber-700'
                                    }`}>
                                    {submission[0].status === 'DITERIMA' && <CheckCircle size={14} />}
                                    {submission[0].status === 'DITOLAK' && <XCircle size={14} />}
                                    {submission[0].status === 'MENUNGGU' && <Clock size={14} />}
                                    {submission[0].status}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Deskripsi</p>
                                    <p className="text-gray-700 leading-relaxed">{submission[0].description}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-2">Mahasiswa / Siswa</p>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <p className="text-gray-900 font-bold">{submission[0].student.name}</p>
                                        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                            <div>
                                                <p className="text-gray-500 text-xs">NISN</p>
                                                <p className="text-gray-700">{submission[0].student.nisn}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-xs">Kelas</p>
                                                <p className="text-gray-700">{submission[0].student.kelas}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Waktu Pengajuan</p>
                                    <p className="text-gray-700">{new Date(submission[0].createdAt).toLocaleString('id-ID', {
                                        dateStyle: 'long',
                                        timeStyle: 'short'
                                    })}</p>
                                </div>
                                {submission[0].reviewedBy && (
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Direview Oleh</p>
                                        <p className="text-gray-700">{submission[0].reviewedBy}</p>
                                    </div>
                                )}
                                {submission[0].rejectionNote && (
                                    <div>
                                        <p className="text-xs text-red-400 uppercase tracking-widest font-bold mb-1">Alasan Penolakan</p>
                                        <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                                            <p className="text-red-700 text-sm whitespace-pre-wrap">{submission[0].rejectionNote}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 bg-gray-50 border-t border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-3">Dokumen & Lampiran</p>
                            <div className="flex flex-wrap gap-3">
                                {submission[0].documentUrl && (
                                    <a
                                        href={submission[0].documentUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition shadow-sm active:scale-95"
                                    >
                                        Lihat Proposal
                                    </a>
                                )}
                                {submission[0].recommendationLetter && (
                                    <a
                                        href={submission[0].recommendationLetter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition shadow-sm active:scale-95"
                                    >
                                        Surat Rekomendasi
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
                                    Pembaruan Status
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value as IndependentSubmissionStatus)}
                                        className={`w-full appearance-none p-3.5 pl-4 pr-10 rounded-xl border-2 font-bold transition-all outline-none cursor-pointer ${selectedStatus === "DITERIMA" ? "border-emerald-100 bg-emerald-50 text-emerald-700 focus:border-emerald-500" :
                                            selectedStatus === "DITOLAK" ? "border-red-100 bg-red-50 text-red-700 focus:border-red-500" :
                                                "border-amber-100 bg-amber-50 text-amber-700 focus:border-amber-500"
                                            }`}
                                    >
                                        <option value="MENUNGGU">🟡 MENUNGGU</option>
                                        <option value="DITERIMA">✅ DITERIMA</option>
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
                                    disabled={updating || (selectedStatus === submission[0].status && (selectedStatus !== "DITOLAK" || rejectionNote === submission[0].rejectionNote))}
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

                        {selectedStatus === "DITOLAK" && (
                            <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100 space-y-3">
                                    <label className="text-sm font-bold text-red-700 flex items-center gap-2">
                                        <XCircle size={16} />
                                        Alasan Penolakan <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={rejectionNote}
                                        onChange={(e) => setRejectionNote(e.target.value)}
                                        placeholder="Tuliskan alasan penolakan secara jelas agar siswa dapat memperbaikinya..."
                                        className="w-full p-4 rounded-xl border-2 border-red-100 focus:border-red-500 focus:ring-0 transition-all outline-none min-h-[120px] bg-white text-gray-700 shadow-sm placeholder:text-red-200"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="bg-white p-12 shadow-lg rounded-2xl text-center border border-gray-100">
                    <p className="text-gray-500 text-lg">Data pengajuan tidak ditemukan.</p>
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
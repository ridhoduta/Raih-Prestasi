import { FileText, Loader2, XCircle } from "lucide-react";
import { RegistrationDetail } from "@/app/service/guruCompetitionsAPI";

interface RegistrationDetailModalProps {
    isOpen: boolean;
    data: RegistrationDetail | null;
    loading: boolean;
    onClose: () => void;
}

export function RegistrationDetailModal({ isOpen, data, loading, onClose }: RegistrationDetailModalProps) {
    if (!isOpen) return null;

    return (
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
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                    >
                        <XCircle size={20} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto space-y-6 flex-1">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-12 gap-3">
                            <Loader2 size={32} className="animate-spin text-blue-600" />
                            <p className="text-sm text-gray-500 font-medium">Memuat data...</p>
                        </div>
                    ) : data && (
                        <>
                            {/* Student Info */}
                            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg shadow-sm">
                                        {data.student.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{data.student.name}</h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span>{data.student.nisn}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span>{data.student.kelas}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Competition Info */}
                            <div className="space-y-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kompetisi</p>
                                <p className="font-semibold text-gray-900 bg-emerald-50 text-emerald-700 px-4 py-2.5 rounded-xl inline-block border border-emerald-100">
                                    {data.competition.title}
                                </p>
                            </div>

                            {/* Answers */}
                            <div className="space-y-4 pt-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Jawaban Pendaftaran</p>
                                <div className="grid gap-4">
                                    {data.answers.length > 0 ? (
                                        data.answers.map((ans, idx) => (
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
                        onClick={onClose}
                        className="w-full px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}

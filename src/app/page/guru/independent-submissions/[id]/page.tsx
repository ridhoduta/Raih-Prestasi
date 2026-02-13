"use client"

import { getIndependentSubmissionDetail, IndependentSubmission } from "@/app/service/guruIndependentSubmissionsAPI";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [submission, setSubmission] = useState<IndependentSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSubmission = async () => {
            try {
                setLoading(true);
                const response = await getIndependentSubmissionDetail(id);
                setSubmission(response.data ?? []);
            } catch (error) {
                setError("Gagal memuat detail pengajuan");
            } finally {
                setLoading(false);
            }
        };
        fetchSubmission();
    }, [id]);

    if (error) {
        return <div className="p-4 text-red-600 font-medium bg-red-50 rounded-md">{error}</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Detail Pengajuan</h1>
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
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
                <div className="bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-gray-100 bg-gray-50">
                        <h2 className="text-xl font-bold text-gray-800">{submission[0].title}</h2>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${submission[0].status === 'DITERIMA' ? 'bg-green-100 text-green-700' :
                                submission[0].status === 'DITOLAK' ? 'bg-red-100 text-red-700' :
                                    'bg-amber-100 text-amber-700'
                            }`}>
                            {submission[0].status}
                        </span>
                    </div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Deskripsi</p>
                                <p className="text-gray-700 mt-1">{submission[0].description}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Mahasiswa / Siswa</p>
                                <p className="text-gray-900 font-medium mt-1">{submission[0].student.name}</p>
                                <p className="text-sm text-gray-600">NISN: {submission[0].student.nisn}</p>
                                <p className="text-sm text-gray-600">Kelas: {submission[0].student.kelas}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Waktu Pengajuan</p>
                                <p className="text-gray-700 mt-1">{new Date(submission[0].createdAt).toLocaleString('id-ID', {
                                    dateStyle: 'long',
                                    timeStyle: 'short'
                                })}</p>
                            </div>
                            {submission[0].reviewedBy && (
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Direview Oleh</p>
                                    <p className="text-gray-700 mt-1">{submission[0].reviewedBy}</p>
                                </div>
                            )}
                            {submission[0].rejectionNote && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                                    <p className="text-sm text-red-600 font-bold uppercase tracking-wider">Alasan Penolakan</p>
                                    <p className="text-red-700 mt-1">{submission[0].rejectionNote}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wider">Dokumen & Lampiran</p>
                        <div className="flex flex-wrap gap-3">
                            {submission[0].documentUrl && (
                                <a
                                    href={submission[0].documentUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                                >
                                    Lihat Proposal
                                </a>
                            )}
                            {submission[0].recommendationLetter && (
                                <a
                                    href={submission[0].recommendationLetter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition"
                                >
                                    Surat Rekomendasi
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-8 shadow rounded-xl text-center border border-gray-100">
                    <p className="text-gray-500 text-lg">Data pengajuan tidak ditemukan.</p>
                </div>
            )}
        </div>
    );
}
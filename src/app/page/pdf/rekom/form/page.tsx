"use client"

import { useState, Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, FileText, Send, User, Calendar, MapPin, Hash, Briefcase, Upload, X } from "lucide-react";

function FormRekomContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        nomorSurat: "",
        namaSiswa: searchParams.get("name") || "",
        nisn: searchParams.get("nisn") || "",
        kelas: searchParams.get("kelas") || "",
        kegiatan: searchParams.get("title") || "",
        penyelenggara: "",
        waktuKegiatan: "",
        tempatKegiatan: "",
        tanggalSurat: new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
        namaPenandatangan: "Dr. Nama Kepala Sekolah, M.Pd.",
        jabatanPenandatangan: "Kepala Sekolah",
        nipPenandatangan: "19800101 200501 1 001",
        tandaTangan: "" // Base64 string
    });

    const [previewSign, setPreviewSign] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setFormData(prev => ({ ...prev, tandaTangan: base64String }));
                setPreviewSign(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeSignature = () => {
        setFormData(prev => ({ ...prev, tandaTangan: "" }));
        setPreviewSign(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Save to localStorage because base64 is too long for URL
        localStorage.setItem("rekom_pdf_data", JSON.stringify(formData));
        router.push(`/page/pdf/rekom`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6 font-medium"
                >
                    <ArrowLeft size={20} />
                    Kembali
                </button>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-emerald-600 p-8 text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <FileText size={28} />
                            <h1 className="text-2xl font-bold">Generate Surat Rekomendasi</h1>
                        </div>
                        <p className="text-emerald-100">Lengkapi formulir di bawah ini untuk membuat surat rekomendasi otomatis.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Informasi Surat */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <Hash size={18} className="text-emerald-500" />
                                Informasi Surat
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Nomor Surat</label>
                                    <input
                                        type="text"
                                        name="nomorSurat"
                                        required
                                        placeholder="Contoh: 421.3/123/2024"
                                        value={formData.nomorSurat}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Tanggal Surat</label>
                                    <input
                                        type="text"
                                        name="tanggalSurat"
                                        required
                                        value={formData.tanggalSurat}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Data Siswa */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <User size={18} className="text-emerald-500" />
                                Data Siswa
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Nama Lengkap Siswa</label>
                                    <input
                                        type="text"
                                        name="namaSiswa"
                                        required
                                        value={formData.namaSiswa}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">NISN</label>
                                    <input
                                        type="text"
                                        name="nisn"
                                        required
                                        value={formData.nisn}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Kelas</label>
                                    <input
                                        type="text"
                                        name="kelas"
                                        required
                                        value={formData.kelas}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Informasi Kegiatan */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <Calendar size={18} className="text-emerald-500" />
                                Informasi Kegiatan
                            </h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Nama Kegiatan</label>
                                    <input
                                        type="text"
                                        name="kegiatan"
                                        required
                                        value={formData.kegiatan}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Penyelenggara</label>
                                    <input
                                        type="text"
                                        name="penyelenggara"
                                        required
                                        placeholder="Contoh: Universitas Indonesia"
                                        value={formData.penyelenggara}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            Waktu Pelaksanaan
                                        </label>
                                        <input
                                            type="text"
                                            name="waktuKegiatan"
                                            required
                                            placeholder="Contoh: 20-22 Mei 2024"
                                            value={formData.waktuKegiatan}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            <MapPin size={14} />
                                            Tempat Pelaksanaan
                                        </label>
                                        <input
                                            type="text"
                                            name="tempatKegiatan"
                                            required
                                            placeholder="Contoh: Jakarta"
                                            value={formData.tempatKegiatan}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Penandatangan */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <Briefcase size={18} className="text-emerald-500" />
                                Penandatangan
                            </h2>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name="namaPenandatangan"
                                            required
                                            value={formData.namaPenandatangan}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Jabatan</label>
                                        <input
                                            type="text"
                                            name="jabatanPenandatangan"
                                            required
                                            value={formData.jabatanPenandatangan}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">NIP (Opsional)</label>
                                    <input
                                        type="text"
                                        name="nipPenandatangan"
                                        value={formData.nipPenandatangan}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                                    />
                                </div>

                                {/* Upload Tanda Tangan */}
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-gray-700">Upload Tanda Tangan (Transparan PNG disarankan)</label>
                                    <div className="flex items-center gap-4">
                                        {!previewSign ? (
                                            <button
                                                type="button"
                                                onClick={() => fileInputRef.current?.click()}
                                                className="flex-1 border-2 border-dashed border-gray-200 rounded-2xl p-6 hover:border-emerald-500 hover:bg-emerald-50 transition-all flex flex-col items-center gap-2 text-gray-500"
                                            >
                                                <Upload size={24} />
                                                <span className="text-sm font-medium">Klik untuk upload tanda tangan</span>
                                            </button>
                                        ) : (
                                            <div className="relative group w-full max-w-[200px] aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center p-4">
                                                <img src={previewSign} alt="Signature Preview" className="max-w-full max-height-full object-contain" />
                                                <button
                                                    type="button"
                                                    onClick={removeSignature}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                            >
                                <Send size={20} />
                                Generate PDF
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function FormRekom() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p>Loading form...</p></div>}>
            <FormRekomContent />
        </Suspense>
    );
}
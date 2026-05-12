"use client"

import { useState, Suspense, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, FileText, Send, User, Calendar, MapPin, Hash, Briefcase, Upload, X, Loader2 } from "lucide-react";
import { getRegistrationById } from "@/app/service/guruCompetitionsAPI";

function FormDispenContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const registrationId = searchParams.get("registrationId");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(!!registrationId);
    const [formData, setFormData] = useState({
        nomorSurat: "",
        students: [{ namaSiswa: "", nisn: "", kelas: "" }],
        kegiatan: "",
        penyelenggara: "",
        tanggalMulai: "",
        tanggalSelesai: "",
        tempatKegiatan: "",
        tanggalSurat: new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
        namaPenandatangan: "Dr. Nama Kepala Sekolah, M.Pd.",
        jabatanPenandatangan: "Kepala Sekolah",
        nipPenandatangan: "19800101 200501 1 001",
        tandaTangan: "" // Base64 string
    });

    const [previewSign, setPreviewSign] = useState<string | null>(null);

    useEffect(() => {
        if (registrationId) {
            const fetchRegistration = async () => {
                try {
                    const res = await getRegistrationById(registrationId);
                    if (res.success && res.data) {
                        const reg = res.data;
                        setFormData(prev => ({
                            ...prev,
                            students: [{
                                namaSiswa: reg.student.name,
                                nisn: reg.student.nisn,
                                kelas: reg.student.kelas,
                            }],
                            kegiatan: reg.competition.title,
                        }));
                    }
                } catch (error) {
                    console.error("Error fetching registration:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchRegistration();
        }
    }, [registrationId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStudentChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newStudents = [...formData.students];
        newStudents[index] = { ...newStudents[index], [name]: value };
        setFormData(prev => ({ ...prev, students: newStudents }));
    };

    const addStudent = () => {
        setFormData(prev => ({
            ...prev,
            students: [...prev.students, { namaSiswa: "", nisn: "", kelas: "" }]
        }));
    };

    const removeStudent = (index: number) => {
        if (formData.students.length <= 1) return;
        const newStudents = formData.students.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, students: newStudents }));
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
        localStorage.setItem("dispen_pdf_data", JSON.stringify(formData));
        router.push(`/page/pdf/dispen?registrationId=${registrationId || ""}`);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4">
                <Loader2 className="animate-spin text-primary-container" size={40} />
                <p className="text-gray-500 font-medium">Mengambil data pendaftaran...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-container transition-colors mb-6 font-medium"
                >
                    <ArrowLeft size={20} />
                    Kembali
                </button>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-primary-container p-8 text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <FileText size={28} />
                            <h1 className="text-2xl font-bold">Generate Surat Dispensasi</h1>
                        </div>
                        <p className="text-blue-100">Lengkapi formulir di bawah ini untuk membuat surat dispensasi otomatis.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Informasi Surat */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <Hash size={18} className="text-primary-container" />
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
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
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
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Data Siswa */}
                        <section>
                            <div className="flex items-center justify-between mb-4 border-b pb-2">
                                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <User size={18} className="text-primary-container" />
                                    Data Siswa
                                </h2>
                                <button
                                    type="button"
                                    onClick={addStudent}
                                    className="text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg transition-all"
                                >
                                    + Tambah Siswa
                                </button>
                            </div>
                            
                            <div className="space-y-8">
                                {formData.students.map((student, index) => (
                                    <div key={index} className="relative p-6 bg-gray-50/50 border border-gray-100 rounded-2xl">
                                        {formData.students.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeStudent(index)}
                                                className="absolute -top-2 -right-2 p-1.5 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-all shadow-sm"
                                            >
                                                <X size={14} />
                                            </button>
                                        )}
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Siswa #{index + 1}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2 space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Nama Lengkap Siswa</label>
                                                <input
                                                    type="text"
                                                    name="namaSiswa"
                                                    required
                                                    value={student.namaSiswa}
                                                    onChange={(e) => handleStudentChange(index, e)}
                                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">NISN</label>
                                                <input
                                                    type="text"
                                                    name="nisn"
                                                    required
                                                    value={student.nisn}
                                                    onChange={(e) => handleStudentChange(index, e)}
                                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Kelas</label>
                                                <input
                                                    type="text"
                                                    name="kelas"
                                                    required
                                                    value={student.kelas}
                                                    onChange={(e) => handleStudentChange(index, e)}
                                                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Informasi Kegiatan */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <Calendar size={18} className="text-primary-container" />
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
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
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
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Tanggal Mulai</label>
                                        <input
                                            type="text"
                                            name="tanggalMulai"
                                            required
                                            placeholder="Contoh: 20 Mei 2024"
                                            value={formData.tanggalMulai}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Tanggal Selesai</label>
                                        <input
                                            type="text"
                                            name="tanggalSelesai"
                                            required
                                            placeholder="Contoh: 22 Mei 2024"
                                            value={formData.tanggalSelesai}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                        />
                                    </div>
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
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Penandatangan */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                                <Briefcase size={18} className="text-primary-container" />
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
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
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
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
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
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
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
                                                className="flex-1 border-2 border-dashed border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:bg-secondary-container transition-all flex flex-col items-center gap-2 text-gray-500"
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
                                className="w-full bg-primary-container hover:bg-secondary-container  text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                            >
                                <Send size={20} />
                                Lihat Preview PDF
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function FormDispen() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p>Loading form...</p></div>}>
            <FormDispenContent />
        </Suspense>
    );
}
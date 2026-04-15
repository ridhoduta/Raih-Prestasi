"use client";

import { useAcademic } from "./hooks/useAcademic";
import { AcademicTable } from "./component/academicTable";
import AlertModal from "@/app/components/AlertModal";
import { Search, Filter, Upload, Loader2, Plus, Trash2, Check, X } from "lucide-react";
import { useRef, useState } from "react";

export default function AcademicAdminPage() {
    const {
    students,
    academicYears,
    loading,
    search,
    setSearch,
    yearId,
    setYearId,
    semester,
    setSemester,
    fetchStudents,
    handleSaveScores,
    handleUploadFile,
    handleCreateYear,
    handleDeleteYear,
    isSaving,
    isDeleting,
    alertState,
    closeAlert,
  } = useAcademic();

  const [showAddYear, setShowAddYear] = useState(false);
  const [newYear, setNewYear] = useState("");

  const onAddYear = () => {
    const trimmed = newYear.trim();
    if (!trimmed) return;
    handleCreateYear(trimmed);
    setNewYear("");
    setShowAddYear(false);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUploadFile(file);
    }
  };

  return (
    <div className="space-y-8 p-6 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Manajemen Akademik</h1>
          <p className="text-gray-500 mt-2 font-medium">Kelola nilai akademik untuk siswa berprestasi.</p>
        </div>
        <div className="flex gap-4">
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            onChange={onFileChange}
            accept=".pdf,image/*"
          />
          <button 
            disabled={isSaving}
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-2xl text-gray-700 hover:bg-gray-50 font-semibold shadow-sm transition-all disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
            <span>{isSaving ? "Mengunggah..." : "Upload Rapor Global"}</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="p-8 border-b border-gray-50 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari nama siswa berprestasi..."
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && fetchStudents()}
              />
            </div>
            
            {/* Academic Year Selector */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none appearance-none text-gray-700 font-medium disabled:text-gray-400"
                  value={yearId}
                  onChange={(e) => setYearId(e.target.value)}
                  disabled={academicYears.length === 0}
                >
                  {academicYears.length === 0 && (
                    <option value="">— Belum ada tahun ajaran —</option>
                  )}
                  {academicYears.map((ay: any) => (
                    <option key={ay.id} value={ay.id}>
                      {ay.year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hapus tahun yang dipilih */}
              {yearId && (
                <button
                  onClick={() => {
                    if (confirm(`Hapus tahun ajaran ini? Semua data nilai terkait akan ikut terhapus.`)) {
                      handleDeleteYear(yearId);
                    }
                  }}
                  disabled={isDeleting}
                  title="Hapus tahun ajaran"
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-red-500 hover:bg-red-100 transition-all disabled:opacity-50 flex-shrink-0"
                >
                  {isDeleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                </button>
              )}

              {/* Tambah tahun baru */}
              <button
                onClick={() => setShowAddYear((v) => !v)}
                title="Tambah tahun ajaran"
                className={`flex items-center justify-center w-12 h-12 rounded-2xl border transition-all flex-shrink-0 ${
                  showAddYear
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-emerald-50 border-emerald-100 text-emerald-600 hover:bg-emerald-100"
                }`}
              >
                {showAddYear ? <X size={16} /> : <Plus size={16} />}
              </button>
            </div>

            {/* Form tambah tahun ajaran inline */}
            {showAddYear && (
              <div className="lg:col-span-4 flex gap-3 items-center p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Contoh: 2025/2026"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onAddYear()}
                    autoFocus
                    className="w-full px-4 py-2.5 bg-white border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 outline-none text-sm text-gray-900 font-medium placeholder:text-gray-400"
                  />
                </div>
                <button
                  onClick={onAddYear}
                  disabled={!newYear.trim() || isSaving}
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition-all disabled:opacity-50 shadow-sm"
                >
                  {isSaving ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />}
                  Simpan
                </button>
                <button
                  onClick={() => { setShowAddYear(false); setNewYear(""); }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 rounded-xl font-bold text-sm transition-all"
                >
                  Batal
                </button>
              </div>
            )}

            <div className="flex gap-2 p-1.5 bg-gray-50/80 rounded-2xl border border-gray-100">
              <button
                onClick={() => setSemester("GANJIL")}
                className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                  semester === "GANJIL" 
                  ? "bg-white text-emerald-600 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Ganjil
              </button>
              <button
                onClick={() => setSemester("GENAP")}
                className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                  semester === "GENAP" 
                  ? "bg-white text-emerald-600 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Genap
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium italic">Menyiapkan data siswa...</p>
          </div>
        ) : students?.length > 0 ? (
          <AcademicTable 
            students={students} 
            academicYears={academicYears}
            onSaveScores={handleSaveScores}
            yearId={yearId}
            semester={semester}
          />
        ) : (
          <div className="p-20 text-center space-y-4">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
              <Search className="text-gray-300" size={32} />
            </div>
            <p className="text-gray-400 font-medium font-italic">Tidak ada siswa berprestasi ditemukan.</p>
          </div>
        )}
      </div>

      <AlertModal
        isOpen={alertState.isOpen}
        title={alertState.title}
        message={alertState.message}
        type={alertState.type}
        onClose={closeAlert}
      />
    </div>
  );
}
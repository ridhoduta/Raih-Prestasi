"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

import { useIndependentSubmissions } from "./hooks/useIndependentSubmissions";
import { IndependentSubmissionTable } from "./components/IndependentSubmissionTable";

export default function GuruIndependentSubmissions() {
  const router = useRouter();
  const {
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    filteredSubmissions,
    loading,
    alertState,
    closeAlert,
    confirmState,
    setConfirmState,
    isDeleting,
    initiateDelete,
    handleConfirmDelete,
  } = useIndependentSubmissions();

  function handleEdit(submission: any) {
    router.push(`/page/guru/independent-submissions/${submission.id}`);
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengajuan Kompetisi Mandiri</h1>
          <p className="text-gray-500 mt-1">Kelola pengajuan prestasi mandiri oleh siswa.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari judul atau nama siswa..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm cursor-pointer text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "all"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilterStatus("menunggu")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "menunggu"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                }`}
            >
              Menunggu
            </button>
            <button
              onClick={() => setFilterStatus("diterima")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "diterima"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                }`}
            >
              Diterima
            </button>
            <button
              onClick={() => setFilterStatus("ditolak")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "ditolak"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                }`}
            >
              Ditolak
            </button>
          </div>
        </div>

        <IndependentSubmissionTable
          submissions={filteredSubmissions}
          loading={loading}
          onEdit={handleEdit}
          onDelete={initiateDelete}
        />
      </div>

      <AlertModal
        isOpen={alertState.isOpen}
        title={alertState.title}
        message={alertState.message}
        type={alertState.type}
        onClose={closeAlert}
      />
      <ConfirmModal
        isOpen={confirmState.isOpen}
        onClose={() => setConfirmState({ ...confirmState, isOpen: false })}
        onConfirm={handleConfirmDelete}
        title={confirmState.title}
        message={confirmState.message}
        isLoading={isDeleting}
      />
    </div>
  );
}

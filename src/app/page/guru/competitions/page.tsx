"use client";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useCompetitions } from "./hooks/useCompetitions";
import { CompetitionTable } from "./components/CompetitionTable";

export default function GuruCompetitions() {
  const router = useRouter();
  const {
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    filteredCompetitions,
    loading,
    alertState,
    closeAlert,
    confirmState,
    setConfirmState,
    isDelete,
    initiateDelete,
    handleConfirmDelete,
  } = useCompetitions();

  const handleEdit = (competition: any) => {
    router.push(`/page/guru/competitions/${competition.id}/edit`);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kompetisi</h1>
          <p className="text-gray-500 mt-1">
            Daftar kompetisi yang tersedia untuk siswa.
          </p>
        </div>
        <Link
          href="/page/guru/competitions/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Kompetisi
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari judul kompetisi..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm cursor-pointer text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "all"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent"
                }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilterStatus("active")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "active"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent"
                }`}
            >
              Aktif
            </button>
            <button
              onClick={() => setFilterStatus("inactive")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "inactive"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent"
                }`}
            >
              Nonaktif
            </button>
          </div>
        </div>

        <CompetitionTable
          competitions={filteredCompetitions}
          loading={loading}
          filterStatus={filterStatus}
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
        isLoading={isDelete}
      />
    </div>
  );
}

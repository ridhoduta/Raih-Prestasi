"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import ImportExcelModal from "@/app/components/ImportExcelModal";

import { useTeachers } from "./hooks/useTeachers";
import { TeacherTable } from "./components/TeacherTable";

export default function TeachersPage() {
  const {
    searchTerm,
    setSearchTerm,
    teachers,
    isLoading,
    isLoadingMore,
    nextCursor,
    loadMore,
    isImportModalOpen,
    setIsImportModalOpen,
    isImporting,
    alertState,
    closeAlert,
    confirmState,
    setConfirmState,
    isDeleting,
    initiateDelete,
    handleConfirmDelete,
    handleImportSubmit,
  } = useTeachers();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Guru</h1>
          <p className="text-gray-500 mt-1">Kelola akun guru dan akses sistem</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsImportModalOpen(true)}
            className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
          >
            Import Excel
          </button>
          <Link
            href="/page/admin/teachers/new"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
          >
            <Plus size={18} />
            Tambah Guru
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari nama atau email guru..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TeacherTable
          teachers={teachers}
          isLoading={isLoading}
          onDelete={initiateDelete}
        />

        {/* Load More Button for Cursor Pagination */}
        {nextCursor && !isLoading && (
          <div className="p-4 border-t border-gray-100 flex justify-center">
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="px-6 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 text-gray-600 disabled:text-gray-400 rounded-xl font-medium transition-colors border border-gray-200"
            >
              {isLoadingMore ? "Memuat..." : "Muat Lebih Banyak"}
            </button>
          </div>
        )}
      </div>

      <AlertModal
        isOpen={alertState.isOpen}
        onClose={closeAlert}
        title={alertState.title}
        message={alertState.message}
        type={alertState.type}
      />

      <ConfirmModal
        isOpen={confirmState.isOpen}
        onClose={() => setConfirmState({ ...confirmState, isOpen: false })}
        onConfirm={handleConfirmDelete}
        title={confirmState.title}
        message={confirmState.message}
        isLoading={isDeleting}
      />

      <ImportExcelModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        type="guru"
        onSubmit={handleImportSubmit}
        isLoading={isImporting}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { useNews } from "./hooks/useNews";
import { NewsTable } from "./components/NewsTable";

export default function NewsPage() {
  const {
    searchTerm,
    setSearchTerm,
    filteredNews,
    isLoading,
    alertState,
    closeAlert,
    confirmState,
    setConfirmState,
    isDeleting,
    initiateDelete,
    handleConfirmDelete,
  } = useNews();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Berita</h1>
          <p className="text-gray-500 mt-1">Atur konten berita dan informasi sekolah</p>
        </div>

        <Link
          href="/page/admin/news/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Berita
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari judul berita..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <NewsTable
          news={filteredNews}
          isLoading={isLoading}
          onDelete={initiateDelete}
        />
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
    </div>
  );
}

"use client";

import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { useAnnouncements } from "./hooks/useAnnouncements";
import { AnnouncementTable } from "./components/AnnouncementTable";

export default function AdminAnnouncements() {
  const router = useRouter();
  const {
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    filteredAnnouncements,
    loading,
    isLoadingMore,
    nextCursor,
    loadMore,
    alertState,
    closeAlert,
    confirmState,
    setConfirmState,
    isDelete,
    initiateDelete,
    handleConfirmDelete,
  } = useAnnouncements();

  const handleEdit = (id: string) => {
    router.push(`/page/admin/announcements/${id}/edit`);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengumuman</h1>
          <p className="text-gray-500 mt-1">
            Kelola pengumuman untuk siswa dan staf.
          </p>
        </div>
        <Link
          href="/page/admin/announcements/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Pengumuman
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari judul pengumuman..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm cursor-pointer text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {(["all", "published", "draft"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === status
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                  }`}
              >
                {status === "all" ? "Semua" : status === "published" ? "Terbit" : "Draf"}
              </button>
            ))}
          </div>
        </div>

        <AnnouncementTable
          announcements={filteredAnnouncements}
          loading={loading}
          filterStatus={filterStatus}
          onEdit={handleEdit}
          onDelete={initiateDelete}
        />

        {nextCursor && !loading && (
          <div className="p-4 border-t border-gray-100 flex justify-center">
            <button
              onClick={() => loadMore()}
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

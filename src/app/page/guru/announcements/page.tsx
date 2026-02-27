"use client";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { Announcement, deleteAnnouncement, getAnnouncements } from "@/app/service/guruAnnouncementsAPI";
import { Edit, Loader2, Newspaper, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuruAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const router = useRouter();
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    id: "",
    title: "",
    message: "",
  });
  const [isDelete, setIsDelete] = useState(false);
  const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info"
  });

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

  const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
    setAlertState({ isOpen: true, title, message, type });
  };

  const initiateDelete = (id: string, title: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Pengumuman",
      message: `Apakah Anda yakin ingin menghapus pengumuman "${title}"?`
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDelete(true);
    try {
      await deleteAnnouncement(confirmState.id);
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Success", "Pengumuman berhasil dihapus.", "success");
      fetchAnnouncements();
    } catch (error) {
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
    } finally {
      setIsDelete(false);
    }
  };

  async function fetchAnnouncements() {
    setLoading(true);
    try {
      const response = await getAnnouncements(true);
      if (response.success && response.data) {
        setAnnouncements(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch announcements", error);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleEdit = (id: string) => {
    router.push(`/page/guru/announcements/${id}/edit`);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const filteredAnnouncements = announcements.filter((ann) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "published") return ann.isPublished;
    if (filterStatus === "draft") return !ann.isPublished;
    return true;
  });

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
          href="/page/guru/announcements/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Pengumuman
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex gap-2 mb-6">
          {(["all", "published", "draft"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === status
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent"
                }`}
            >
              {status === "all" ? "Semua" : status === "published" ? "Dipublikasikan" : "Draft"}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-emerald-600" size={32} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">Judul</th>
                  <th className="px-6 py-4">Penulis</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Tanggal Dibuat</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredAnnouncements.length > 0 ? (
                  filteredAnnouncements.map((announcement) => (
                    <tr key={announcement.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <Newspaper size={16} />
                          </div>
                          {announcement.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {announcement.guru?.name || "Guru"}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${announcement.isPublished
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-gray-50 text-gray-600 border-gray-100"
                          }`}>
                          {announcement.isPublished ? "Dipublikasikan" : "Draft"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {formatDate(announcement.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(announcement.id)}
                          className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => initiateDelete(announcement.id, announcement.title)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Hapus"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      Tidak ada pengumuman {filterStatus === 'all' ? '' : filterStatus === 'published' ? 'yang dipublikasikan' : 'draft'} ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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

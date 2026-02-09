"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Calendar, Loader2 } from "lucide-react";

import { getNews, deleteNews, NewsItem } from "@/app/service/newsAPI";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal States
  const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info"
  });
  const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; title: string; message: string }>({
    isOpen: false,
    id: null,
    title: "",
    message: ""
  });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const response = await getNews();
      if (response.success && response.data) {
        setNews(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setIsLoading(false);
    }
  }

  const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
    setAlertState({ isOpen: true, title, message, type });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

  const initiateDelete = (id: string, title: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Berita",
      message: `Apakah Anda yakin ingin menghapus berita "${title}"?`
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDeleting(true);
    try {
      const response = await deleteNews(confirmState.id);
      if (response.success) {
        setNews(news.filter((n: any) => n.id !== confirmState.id));
        setConfirmState({ ...confirmState, isOpen: false });
        showAlert("Dihapus", "Berita berhasil dihapus.", "success");
      } else {
        setConfirmState({ ...confirmState, isOpen: false });
        showAlert("Gagal", "Gagal menghapus: " + response.message, "error");
      }
    } catch (error) {
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
    } finally {
      setIsDeleting(false);
    }
  };


  const filteredNews = news.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-emerald-600" size={32} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">Judul Berita</th>
                  <th className="px-6 py-4">Tanggal</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredNews.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={14} />
                        {new Date(item.createdAt).toLocaleDateString("id-ID", {
                          day: "numeric", month: "short", year: "numeric"
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${item.isPublished
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-amber-50 text-amber-700 border-amber-100"
                        }`}>
                        {item.isPublished ? "Terbit" : "Draf"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <Link
                        href={`/page/admin/news/${item.id}/edit`}
                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => initiateDelete(item.id, item.title)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isLoading && filteredNews.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            Belum ada berita.
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
    </div>
  );
}

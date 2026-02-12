"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

import { createNews } from "@/app/service/newsAPI";
import AlertModal from "@/app/components/AlertModal";

export default function AddNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    isPublished: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Modal State
  const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info"; shouldRedirect?: boolean }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
    shouldRedirect: false
  });

  const showAlert = (title: string, message: string, type: "success" | "error" | "info", shouldRedirect = false) => {
    setAlertState({ isOpen: true, title, message, type, shouldRedirect });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
    if (alertState.shouldRedirect) {
      router.push("/page/admin/news");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await createNews(formData);

      if (response.success) {
        showAlert("Berhasil", "Berita berhasil ditambahkan.", "success", true);
      } else {
        showAlert("Gagal", "Gagal menambahkan berita: " + response.message, "error");
      }
    } catch (error) {
      showAlert("Error", "Terjadi kesalahan saat menyimpan data.", "error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/page/admin/news"
          className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tambah Berita Baru</h1>
          <p className="text-gray-500 mt-1">Buat pengumuman atau berita untuk sekolah</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Berita</label>
            <input
              type="text"
              required
              placeholder="Contoh: Juara 1 Lomba Robotik Nasional"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Isi Berita</label>
            <textarea
              required
              rows={10}
              placeholder="Tulis isi berita di sini..."
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isPublished"
              className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 border-gray-300"
              checked={formData.isPublished}
              onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
            />
            <label htmlFor="isPublished" className="text-sm text-gray-700">Publikasikan Langsung</label>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-3">
          <Link
            href="/page/admin/news"
            className="flex-1 px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Simpan Berita
          </button>
        </div>
      </form>

      <AlertModal
        isOpen={alertState.isOpen}
        onClose={closeAlert}
        title={alertState.title}
        message={alertState.message}
        type={alertState.type}
      />
    </div>
  );
}

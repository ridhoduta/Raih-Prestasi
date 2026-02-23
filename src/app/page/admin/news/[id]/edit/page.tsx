"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2, Image as ImageIcon, X } from "lucide-react";
import AlertModal from "@/app/components/AlertModal";

export default function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    thumbnail: "",
    isPublished: true,
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

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

  useEffect(() => {
    fetchNews();
  }, [id]);

  async function fetchNews() {
    try {
      const res = await fetch(`/api/admin/news/${id}`);
      const data = await res.json();
      if (data.success) {
        setFormData({
          title: data.data.title,
          content: data.data.content,
          thumbnail: data.data.thumbnail || "",
          isPublished: data.data.isPublished
        });
        if (data.data.thumbnail) {
          setThumbnailPreview(data.data.thumbnail);
        }
      } else {
        showAlert("Gagal", "Berita tidak ditemukan", "error", true);
      }
    } catch (error) {
      console.error(error);
      showAlert("Error", "Gagal mengambil data berita", "error");
    } finally {
      setIsLoading(false);
    }
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeThumbnail = () => {
    setThumbnailFile(null);
    setThumbnailPreview(null);
    setFormData({ ...formData, thumbnail: "" });
  };

  const uploadThumbnail = async (): Promise<string | null> => {
    if (!thumbnailFile) return null;

    const formDataUpload = new FormData();
    formDataUpload.append("file", thumbnailFile);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });
      const data = await res.json();
      if (data.success) {
        return data.url.publicUrl;
      }
      throw new Error(data.message || "Gagal upload thumbnail");
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      let thumbnailUrl = formData.thumbnail;
      if (thumbnailFile) {
        thumbnailUrl = await uploadThumbnail() || "";
      }

      const res = await fetch(`/api/admin/news/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          thumbnail: thumbnailUrl
        }),
      });

      const data = await res.json();

      if (data.success) {
        showAlert("Berhasil", "Berita berhasil diperbarui.", "success", true);
      } else {
        showAlert("Gagal", "Gagal memperbarui berita: " + data.message, "error");
      }
    } catch (error: any) {
      showAlert("Error", error.message || "Terjadi kesalahan saat menyimpan data.", "error");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="animate-spin text-emerald-600" size={32} />
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-gray-900">Edit Berita</h1>
          <p className="text-gray-500 mt-1">Perbarui konten berita atau pengumuman</p>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail Berita</label>
            <div className="flex flex-col gap-4">
              {thumbnailPreview ? (
                <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-gray-200 group">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeThumbnail}
                    className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full max-w-sm aspect-video border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-emerald-500 transition-all group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 mb-2" />
                    <p className="text-sm text-gray-500 group-hover:text-emerald-600">Pilih thumbnail berita</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP (Max 2MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                  />
                </label>
              )}
            </div>
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
            disabled={isSaving}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
          >
            {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Simpan Perubahan
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

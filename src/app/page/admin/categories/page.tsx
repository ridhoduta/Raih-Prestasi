"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Trophy, Loader2, Save } from "lucide-react";
import { getCategories, createCategories, updateCategories, deleteCategories, Category, CategoryPayload } from "@/app/service/categoriesAPI";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<{ id: string | null; name: string }>({ id: null, name: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const response = await getCategories();
      if (response.success && response.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setIsLoading(false);
    }
  }


  const openAddModal = () => {
    setFormData({ id: null, name: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (category: Category) => {
    setFormData({ id: category.id, name: category.name });
    setIsModalOpen(true);
  };

  const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
    setAlertState({ isOpen: true, title, message, type });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };

  const handleSubmit = async () => {
    if (!formData.name) return;
    setIsSubmitting(true);

    try {
      const isEdit = !!formData.id;
      const payload = { name: formData.name };

      let response;
      if (formData.id) {
        response = await updateCategories(formData.id, payload);
      } else {
        response = await createCategories(payload);
      }

      if (response.success && response.data) {
        if (isEdit) {
          setCategories(categories.map(c => c.id === formData.id ? (response.data as Category) : c));
        } else {
          setCategories([response.data as Category, ...categories]);
        }
        setIsModalOpen(false);
        showAlert("Berhasil", isEdit ? "Kategori berhasil diperbarui." : "Kategori berhasil ditambahkan.", "success");
      } else {
        showAlert("Gagal", "Gagal menyimpan kategori: " + response.message, "error");
      }
    } catch (error) {
      showAlert("Error", "Terjadi kesalahan sistem.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const initiateDelete = (id: string, name: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Kategori",
      message: `Apakah Anda yakin ingin menghapus kategori "${name}"?`
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDeleting(true);
    try {
      const response = await deleteCategories(confirmState.id);
      if (response.success) {
        setCategories(categories.filter((c) => c.id !== confirmState.id));
        setConfirmState({ ...confirmState, isOpen: false });
        showAlert("Dihapus", "Kategori berhasil dihapus.", "success");
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


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kategori Kompetisi</h1>
          <p className="text-gray-500 mt-1">Atur kategori untuk pengelompokan kompetisi</p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Kategori
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-emerald-600" size={32} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Trophy size={16} />
                      </div>
                      {category.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${category.isActive
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-gray-50 text-gray-600 border-gray-100"
                        }`}>
                        {category.isActive ? "Aktif" : "Nonaktif"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(category)}
                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => initiateDelete(category.id, category.name)}
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

        {!isLoading && categories.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            Belum ada kategori.
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {formData.id ? "Edit Kategori" : "Tambah Kategori Baru"}
            </h2>
            <input
              type="text"
              placeholder="Nama Kategori (misal: Robotik)"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans mb-6 text-gray-900"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors"
                disabled={isSubmitting}
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.name || isSubmitting}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:text-gray-500 text-white px-4 py-2.5 rounded-xl font-medium transition-all flex justify-center gap-2 items-center"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : (formData.id ? <Save size={18} /> : <Plus size={18} />)}
                {formData.id ? "Simpan Perubahan" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}

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

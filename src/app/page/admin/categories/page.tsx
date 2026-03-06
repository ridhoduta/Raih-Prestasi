"use client";

import { Plus } from "lucide-react";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { useCategories } from "./hooks/useCategories";
import { CategoryTable } from "./components/CategoryTable";
import { CategoryModal } from "./components/CategoryModal";

export default function CategoriesPage() {
  const {
    categories,
    isLoading,
    isModalOpen,
    setIsModalOpen,
    formData,
    setFormData,
    isSubmitting,
    alertState,
    closeAlert,
    confirmState,
    setConfirmState,
    isDeleting,
    openAddModal,
    openEditModal,
    handleSubmit,
    initiateDelete,
    handleConfirmDelete,
  } = useCategories();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kategori Kompetisi</h1>
          <p className="text-gray-500 mt-1">Atur kategori untuk pengelompokan kompetisi</p>
        </div>

        <button
          id="add-category-btn"
          onClick={openAddModal}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Kategori
        </button>
      </div>

      <CategoryTable
        categories={categories}
        isLoading={isLoading}
        onEdit={openEditModal}
        onDelete={initiateDelete}
      />

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

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

"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Trophy, Loader2, Save, X } from "lucide-react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await fetch("/api/admin/competition-categories");
      const data = await res.json();
      if (data.success) {
        setCategories(data.data);
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

  const openEditModal = (category) => {
    setFormData({ id: category.id, name: category.name });
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.name) return;
    setIsSubmitting(true);
    
    try {
      const isEdit = !!formData.id;
      const url = isEdit 
        ? `/api/admin/competition-categories/${formData.id}`
        : "/api/admin/competition-categories";
      
      const method = isEdit ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        if (isEdit) {
            setCategories(categories.map(c => c.id === formData.id ? data.data : c));
        } else {
            setCategories([data.data, ...categories]);
        }
        setIsModalOpen(false);
      } else {
        alert("Gagal menyimpan kategori: " + data.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus kategori ini?")) return;
    try {
      const res = await fetch(`/api/admin/competition-categories/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setCategories(categories.filter((c) => c.id !== id));
      } else {
        alert("Gagal menghapus: " + data.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan saat menghapus.");
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
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm shadow-blue-200"
        >
          <Plus size={18} />
          Tambah Kategori
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin text-blue-600" size={32} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Trophy size={20} />
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openEditModal(category)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" 
                    title="Edit"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(category.id)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" 
                    title="Hapus"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${category.isActive ? "bg-green-500" : "bg-gray-300"}`}></span>
                <span className="text-sm text-gray-500">{category.isActive ? "Aktif" : "Nonaktif"}</span>
              </div>
            </div>
          ))}
          {categories.length === 0 && (
             <div className="col-span-full text-center py-12 text-gray-500">
               Belum ada kategori.
             </div>
          )}
        </div>
      )}

      {/* Reusable Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                {formData.id ? "Edit Kategori" : "Tambah Kategori Baru"}
            </h2>
            <input 
              type="text" 
              placeholder="Nama Kategori (misal: Robotik)"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans mb-6 text-gray-900"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 text-white px-4 py-2.5 rounded-xl font-medium transition-all flex justify-center gap-2 items-center"
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : (formData.id ? <Save size={18} /> : <Plus size={18} />)}
                {formData.id ? "Simpan Perubahan" : "Simpan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

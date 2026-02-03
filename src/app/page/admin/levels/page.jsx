"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, GripVertical, Loader2, Save } from "lucide-react";

export default function LevelsPage() {
  const [levels, setLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchLevels();
  }, []);

  async function fetchLevels() {
    try {
      const res = await fetch("/api/admin/competition-levels");
      const data = await res.json();
      if (data.success) {
        setLevels(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch levels", error);
    } finally {
      setIsLoading(false);
    }
  }

  const openAddModal = () => {
    setFormData({ id: null, name: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (level) => {
    setFormData({ id: level.id, name: level.name });
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!formData.name) return;
    setIsSubmitting(true);
    
    try {
      const isEdit = !!formData.id;
      const url = isEdit 
        ? `/api/admin/competition-levels/${formData.id}`
        : "/api/admin/competition-levels";
      
      const method = isEdit ? "PUT" : "POST";
      const body = { name: formData.name };
      
      if (!isEdit) {
        // Auto-increment order for new items only
        body.order = levels.length + 1;
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      const data = await res.json();
      
      if (data.success) {
        if (isEdit) {
            setLevels(levels.map(l => l.id === formData.id ? data.data : l));
        } else {
            setLevels([...levels, data.data]);
        }
        setIsModalOpen(false);
      } else {
        alert("Gagal menyimpan tingkat: " + data.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Hapus tingkat kompetisi ini?")) return;
    try {
      const res = await fetch(`/api/admin/competition-levels/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setLevels(levels.filter((l) => l.id !== id));
      } else {
        alert("Gagal menghapus: " + data.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tingkat Kompetisi</h1>
          <p className="text-gray-500 mt-1">Atur jenjang atau tingkat kompetisi</p>
        </div>
        
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm shadow-blue-200"
        >
          <Plus size={18} />
          Tambah Tingkat
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-blue-600" size={32} />
          </div>
        ) : (
          <div className="p-1">
            {levels.map((level) => (
              <div key={level.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group">
                <div className="cursor-move text-gray-300 hover:text-gray-500">
                  <GripVertical size={20} />
                </div>
                
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                  {level.order}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900">{level.name}</h3>
                </div>

                <div className="flex items-center gap-3">
                   <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      level.isActive 
                        ? "bg-green-50 text-green-700 border-green-100" 
                        : "bg-gray-50 text-gray-600 border-gray-100"
                    }`}>
                      {level.isActive ? "Aktif" : "Nonaktif"}
                    </span>
                    
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => openEditModal(level)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" 
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(level.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" 
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                </div>
              </div>
            ))}
            {levels.length === 0 && (
               <div className="p-12 text-center text-gray-500">
                 Belum ada tingkat kompetisi.
               </div>
            )}
          </div>
        )}
      </div>

       {/* Reusable Modal */}
       {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                {formData.id ? "Edit Tingkat" : "Tambah Tingkat Baru"}
            </h2>
            <input 
              type="text" 
              placeholder="Nama Tingkat (misal: Regional)"
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

"use client";

import { Category, getCategories } from "@/app/service/categoriesAPI";
import { Competition, createCompetition, deleteCompetition, getCompetitions, updateCompetition } from "@/app/service/guruCompetitionsAPI";
import { getLevels, Level } from "@/app/service/levelsAPI";
import { Edit, Loader2, Plus, Save, Trash2, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export default function GuruCompetitions() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [levels, setLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    isActive: false,
    startDate: "",
    endDate: "",
    levelId: "",
    categoryId: "",
    createdById: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issubmit, setIssubmit] = useState(false);

  // Placeholder static Guru ID (to be replaced by auth session later)
  const STATIC_GURU_ID = "d351129f-7522-4ff2-9314-e6957cd8bc8f";

  async function fetchAllData() {
    setLoading(true);
    try {
      const [compRes, catRes, levelRes] = await Promise.all([
        getCompetitions(),
        getCategories(),
        getLevels(),
      ]);

      if (compRes.success && compRes.data) setCompetitions(compRes.data);
      if (catRes.success && catRes.data) setCategories(catRes.data);
      if (levelRes.success && levelRes.data) setLevels(levelRes.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCompetitions() {
    try {
      const response = await getCompetitions();
      if (response.success && response.data) {
        setCompetitions(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch competitions", error);
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus kompetisi ini?")) {
      try {
        await deleteCompetition(id);
        fetchCompetitions();
      } catch (error) {
        console.error("Failed to delete competition", error);
      }
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.categoryId || !formData.levelId || !formData.startDate || !formData.endDate) {
      alert("Harap isi semua field yang wajib!");
      return;
    }

    try {
      setIssubmit(true);
      const payload = {
        title: formData.title,
        description: formData.description,
        categoryId: formData.categoryId,
        levelId: formData.levelId,
        startDate: formData.startDate,
        endDate: formData.endDate,
        isActive: formData.isActive,
        createdById: formData.createdById || STATIC_GURU_ID,
      };

      let response;
      if (formData.id) {
        response = await updateCompetition(formData.id, payload);
      } else {
        response = await createCompetition(payload);
      }

      if (response.success) {
        alert(formData.id ? "Kompetisi berhasil diupdate!" : "Kompetisi berhasil dibuat!");
        setIsModalOpen(false);
        fetchCompetitions();
      } else {
        alert("Gagal menyimpan kompetisi: " + response.message);
      }
    } catch (error) {
      console.error("Failed to save competition", error);
      alert("Terjadi kesalahan sistem saat menyimpan kompetisi.");
    } finally {
      setIssubmit(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const openAddModal = () => {
    setFormData({
      id: "",
      title: "",
      description: "",
      isActive: true,
      startDate: "",
      endDate: "",
      levelId: "",
      categoryId: "",
      createdById: STATIC_GURU_ID
    });
    setIsModalOpen(true);
  };

  const openEditModal = (competition: Competition) => {
    setFormData({
      id: competition.id,
      title: competition.title,
      description: competition.description ?? "",
      isActive: competition.isActive,
      startDate: competition.startDate,
      endDate: competition.endDate,
      levelId: competition.levelId,
      categoryId: competition.categoryId,
      createdById: competition.createdBy,
    });
    setIsModalOpen(true);
  };
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kompetisi</h1>
          <p className="text-gray-500 mt-1">
            Daftar kompetisi yang tersedia untuk siswa.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
        >
          <Plus size={18} />
          Tambah Kompetisi
        </button>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-emerald-600" size={32} />
          </div>
        ) : (
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Judul</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Rentang</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Tingkat</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {competitions.map((competition) => (
                <tr key={competition.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Trophy size={16} />
                      </div>
                      {competition.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${competition.isActive
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                      : "bg-gray-50 text-gray-600 border-gray-100"
                      }`}>
                      {competition.isActive ? "Aktif" : "Nonaktif"}
                    </span>
                  </td>


                  <td className="px-6 py-4 font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      {formatDate(competition.startDate)} - {formatDate(competition.endDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      {competition.category.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      {competition.level.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <button
                      onClick={() => openEditModal(competition)}
                      className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(competition.id)}
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

        )}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {formData.id ? "Edit Kompetisi" : "Tambah Kompetisi Baru"}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Kompetisi</label>
                  <input
                    type="text"
                    placeholder="misal: Robotik Nasional"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                  <textarea
                    placeholder="Jelaskan tentang kompetisi ini..."
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900 h-24 resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>


                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                      value={formData.startDate ? formData.startDate.split('T')[0] : ""}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Berakhir</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                      value={formData.endDate ? formData.endDate.split('T')[0] : ""}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                    <select
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                    >
                      <option value="">Pilih Kategori</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tingkat</label>
                    <select
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                      value={formData.levelId}
                      onChange={(e) => setFormData({ ...formData, levelId: e.target.value })}
                    >
                      <option value="">Pilih Tingkat</option>
                      {levels.map((level) => (
                        <option key={level.id} value={level.id}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6 px-1 py-2 mt-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                  Kompetisi Aktif
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors"
                  disabled={issubmit}
                >
                  Batal
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.title || !formData.categoryId || !formData.levelId || !formData.startDate || !formData.endDate || issubmit}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:text-gray-500 text-white px-4 py-2.5 rounded-xl font-medium transition-all flex justify-center gap-2 items-center"
                >
                  {issubmit ? <Loader2 className="animate-spin" size={18} /> : (formData.id ? <Save size={18} /> : <Plus size={18} />)}
                  {formData.id ? "Simpan Perubahan" : "Simpan Kompetisi"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy size={32} />
        </div>
        <h3 className="text-lg font-bold text-gray-900">
          Halaman Sedang Dikembangkan
        </h3>
        <p className="text-gray-500 mt-2 max-w-sm mx-auto">
          Fitur untuk melihat daftar kompetisi sedang dalam tahap pengerjaan.
          Segera hadir!
        </p> */}
      </div>
    </div>
  );
}

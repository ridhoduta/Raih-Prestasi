"use client";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { Category, getCategories } from "@/app/service/categoriesAPI";
import { Competition, createCompetition, deleteCompetition, getCompetitions, updateCompetition } from "@/app/service/guruCompetitionsAPI";
import { getLevels, Level } from "@/app/service/levelsAPI";
import { Edit, Loader2, Plus, Save, Trash2, Trophy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuruCompetitions() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all");
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


  const initiateDelete = (id: string, name: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Kompetisi",
      message: `Apakah Anda yakin ingin menghapus kompetisi "${name}"?`
    });
  };
  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDelete(true);
    try {
      await deleteCompetition(confirmState.id);
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Success", "Kompetisi berhasil dihapus.", "success");
      fetchCompetitions();
    } catch (error) {
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
    } finally {
      setIsDelete(false);
    }
  };





  async function fetchAllData() {
    setLoading(true);
    try {
      const [compRes] = await Promise.all([
        getCompetitions(),
      ]);

      if (compRes.success && compRes.data) setCompetitions(compRes.data);
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



  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleEdit = (competition: Competition) => {
    router.push(`/page/guru/competitions/${competition.id}/edit`);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const filteredCompetitions = competitions.filter((comp) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return comp.isActive;
    if (filterStatus === "inactive") return !comp.isActive;
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kompetisi</h1>
          <p className="text-gray-500 mt-1">
            Daftar kompetisi yang tersedia untuk siswa.
          </p>
        </div>
        <Link
          href="/page/guru/competitions/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Kompetisi
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "all"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
              : "text-gray-600 hover:bg-gray-50 border border-transparent"
              }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilterStatus("active")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "active"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
              : "text-gray-600 hover:bg-gray-50 border border-transparent"
              }`}
          >
            Aktif
          </button>
          <button
            onClick={() => setFilterStatus("inactive")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "inactive"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
              : "text-gray-600 hover:bg-gray-50 border border-transparent"
              }`}
          >
            Nonaktif
          </button>
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
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Rentang</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Tingkat</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredCompetitions.length > 0 ? (
                  filteredCompetitions.map((competition) => (
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
                          onClick={() => handleEdit(competition)}
                          className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => initiateDelete(competition.id, competition.title)}
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
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      Tidak ada kompetisi {filterStatus === 'all' ? '' : filterStatus === 'active' ? 'aktif' : 'nonaktif'} ditemukan.
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

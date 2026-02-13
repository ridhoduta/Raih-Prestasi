"use client";

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


  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

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
                          onClick={() => handleDelete(competition.id)}
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
    </div>
  );
}
